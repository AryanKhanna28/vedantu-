import React from 'react';

const examData = [
  { group: 'Primary Group (Class 5th & 6th)', objective: 15, subjective: 10, total: 25 },
  { group: 'Junior Group (Class 7th & 8th)', objective: '15-20', subjective: '10-15', total: 30 },
  { group: 'Junior Group (Class 9th & 10th)', objective: '15-20', subjective: '10-15', total: 30 },
  { group: 'Senior Group (Class 11th & 12th)', objective: '15-20', subjective: '10-15', total: 30 },
];

function ExamTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Group</th>
          <th>No. of Objective Questions</th>
          <th>No. of Subjective Questions</th>
          <th>Total Questions</th>
        </tr>
      </thead>
      <tbody>
        {examData.map((exam) => (
          <tr key={exam.group}>
            <td>{exam.group}</td>
            <td>{exam.objective}</td>
            <td>{exam.subjective}</td>
            <td>{exam.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExamTable;
