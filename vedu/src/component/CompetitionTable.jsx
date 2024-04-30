import React from 'react';

const competitionLevels = [
  { level: 'NMTC Primary', knownAs: 'Gauss Contest', eligibility: 'Class 5th & 6th' },
  { level: 'NMTC Sub-Junior', knownAs: 'Kaprekar Contest', eligibility: 'Class 7th & 8th' },
  { level: 'NMTC Junior', knownAs: 'Bhaskara Contest', eligibility: 'Class 9th & 10th' },
  { level: 'NMTC Inter', knownAs: 'Ramanujan Contest', eligibility: 'Class 11th & 12th' },
  { level: 'NMTC Senior', knownAs: 'Aryabhat Contest', eligibility: 'Degree Classes' },
];

function CompetitionTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Level</th>
          <th>Known As</th>
          <th>Eligibility</th>
        </tr>
      </thead>
      <tbody>
        {competitionLevels.map((competitionLevel) => (
          <tr key={competitionLevel.level}>
            <td>{competitionLevel.level}</td>
            <td>{competitionLevel.knownAs}</td>
            <td>{competitionLevel.eligibility}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CompetitionTable;
