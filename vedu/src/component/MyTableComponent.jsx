import React, { useMemo } from 'react';
import { useTable, useFilters } from 'react-table';

const MyTableComponent = ({ data }) => {
  // Extract all years
  const allYears = useMemo(() => Array.from(new Set(data.map((entry) => entry.year))), [data]);

  // Transpose data to have years as columns and topics as rows
  const transposedData = useMemo(() => {
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
    const stage1Exists = data.some(({ data }) => data[0] && data[0].value); // Check if Stage 1 data exists for any entry

    const columns = [
      { Header: 'Topic', accessor: 'topic' },
      ...allYears.flatMap((year) => [
        { Header: `${year} (Stage 1)`, accessor: `${year}_Stage1` },
        { Header: `${year} (Stage 2)`, accessor: `${year}_Stage2` },
      ]),
    ];
    

    return columns;
  }, [data, allYears]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data: transposedData }, useFilters);

  const { globalFilter } = state;

  return (
    <div>
      <table {...getTableProps()} style={{ border: 'solid 1px blue', marginTop: '20px' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px red', background: 'aliceblue', color: 'black', fontWeight: 'bold' }}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray', background: 'papayawhip' }}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyTableComponent;