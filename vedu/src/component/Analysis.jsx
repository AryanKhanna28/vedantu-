import React, { useMemo, useState, useEffect } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
// import './Analysis.css'

const Analysis = ({ data = [] }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchTopic, setSearchTopic] = useState('');
  const [filteredColumns, setFilteredColumns] = useState([]);

  // Check if data is not empty
  const hasData = data && data.length > 0;

  // Extract all years
  const allYears = useMemo(() => (hasData ? Array.from(new Set(data.map((entry) => entry.year))) : []), [data]);

  // Transpose data to have years as columns and topics as rows
  const transposedData = useMemo(() => {
    if (!hasData) return [];

    const transposed = {};
    data.forEach(({ year, data }) => {
      data.forEach(({ value }, stageIndex) => {
        Object.entries(value).forEach(([topic, topicValue]) => {
          const accessorId = `${topic}_${stageIndex}`;
          if (!transposed[topic]) {
            transposed[topic] = { topic };
          }
          transposed[topic][`${year}_Stage${stageIndex + 1}`] = topicValue;
        });
      });
    });

    // Fill missing years with empty values
    Object.values(transposed).forEach((row) => {
      allYears.forEach((year) => {
        if (!row[`${year}_Stage1`]) {
          row[`${year}_Stage1`] = '';
        }
        if (!row[`${year}_Stage2`]) {
          row[`${year}_Stage2`] = '';
        }        
      });
    });

    return Object.values(transposed);
  }, [data, allYears]);

  const columns = useMemo(() => {
    if (!hasData) return [];

    const stage1Exists = data.some(({ data }) => data[0] && data[0].value);
    const initialColumns = [
      { Header: 'Topic', accessor: 'topic', show: true }, // Always show the "Topic" column
      ...allYears.flatMap((year) =>[
        { Header: `${year} (Stage 1)`, accessor: `${year}_Stage1`, show: false },
        { Header: `${year} (Stage 2)`, accessor: `${year}_Stage2`, show: false }
      ]),
    ];
    return initialColumns;
  }, [data, allYears]);

  useEffect(() => {
    if (!hasData) return;

    const newFilteredColumns = columns.map((column) => {
      if (column.Header.toLowerCase().includes(searchInput.toLowerCase()) || column.show) {
        return { ...column, show: true };
      }
      return { ...column, show: false };
    });

    setFilteredColumns(newFilteredColumns);
  }, [searchInput, columns, hasData]);

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const handleTopicSearch = (event) => {
    setSearchTopic(event.target.value);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable({ columns: filteredColumns, data: transposedData }, useGlobalFilter);

  // Filter rows based on the searched topic
  const filteredRows = useMemo(() => {
    if (!searchTopic) return rows;
    return rows.filter(row => row.original.topic.toLowerCase().includes(searchTopic.toLowerCase()));
  }, [rows, searchTopic]);

  // Render table only if data is available
  if (!hasData) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <input type="text" value={searchInput} onChange={handleSearch} placeholder="Search Year..." />
      <input type="text" value={searchTopic} onChange={handleTopicSearch} placeholder="Search Topics..." />
      <table {...getTableProps()} >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) =>
                column.show ? (
                  <th
                    {...column.getHeaderProps()}
                  >
                    {column.render('Header')}
                  </th>
                ) : null
              )}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {filteredRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) =>
                  cell.column.show ? (
                    <td
                      {...cell.getCellProps()}

                    >
                      {cell.render('Cell')}
                    </td>
                  ) : null
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Analysis;

