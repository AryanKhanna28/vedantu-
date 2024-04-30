import React, { useMemo, useState, useEffect } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import { Pie } from 'react-chartjs-2'; // Import Pie component from react-chartjs-2
import Chart from 'chart.js/auto'; // Import the entire Chart.js library
// import './Analysis.css'

const Analysis = ({ data = [] }) => {
  const [searchTopic, setSearchTopic] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [filteredColumns, setFilteredColumns] = useState([]);
  const [chartData, setChartData] = useState(null); // State to hold pie chart data

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
      if (column.Header.includes(selectedYear) || column.show) {
        return { ...column, show: true };
      }
      return { ...column, show: false };
    });

    setFilteredColumns(newFilteredColumns);
  }, [selectedYear, columns, hasData]);

  const handleTopicSearch = (event) => {
    setSearchTopic(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
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

  // Function to generate pie chart data based on selected year
  const generateChartData = (selectedYear) => {
    const topicsData = {}; // Object to hold topic data for the selected year

    // Iterate through data to collect topic counts for the selected year
    
    data.forEach(({ year, data }) => {
      console.log(data,selectedYear,"108");
      if ( selectedYear === 'All Years' || year == selectedYear ) {
        data.forEach(({ value }) => {
          Object.entries(value).forEach(([topic, topicValue]) => {
            topicsData[topic] = (topicsData[topic] || 0) + topicValue;
          });
        });
      }

    });

    // Convert topicsData object to chart data format
    if (Object.keys(topicsData).length === 0) {
      console.log("No data found for the selected year");
      return null;
    }
    const chartLabels = Object.keys(topicsData);
    const chartValues = Object.values(topicsData);

    return {
      labels: chartLabels,
      datasets: [
        {
          label: 'Topics',
          data: chartValues,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            // Add more colors if needed
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  // Update chart data when selected year changes
  useEffect(() => {
    if (selectedYear) {
      const data = generateChartData(selectedYear);
      setChartData(data);
    }
  }, [selectedYear]);

  // Render table only if data is available
  if (!hasData) {
    return <div>No data available</div>;
  }
  console.log(chartData, "152")

  return (
    <div className='analysis-main'>
      <input type="text" value={searchTopic} onChange={handleTopicSearch} placeholder="Search Topics..." />
      <select value={selectedYear} onChange={handleYearChange} className='select'>
        <option value="">All Years</option>
        {allYears.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
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
      {selectedYear && chartData && (
        <div className="pie-chart-container"  style={{ width :'750px',height : '800px' ,margin:"20px auto"}}>
          <h2 style={{textAlign:'center'}}>Pie Chart for {selectedYear}</h2>
          <Pie data={chartData} />
        </div>
      )}
    </div>
  );
};

export default Analysis;