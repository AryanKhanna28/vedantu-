import React from 'react';
// import './ExamTable.css'; // Import CSS file for styling

function Exams() {
  return (
    <>
        <p>These are some alternative exams and competitions for students in the same age group as those 
        participating in the NMTC Sub-Junior exam in India. Each of these competitions offers a unique 
        platform for students to develop their mathematical skills and compete at various levels.</p>

        <table className="exam-table" style={{marginTop:"30px"}}>
      <thead>
        <tr>
          <th>Exam Name</th>
          <th>Organizing Organization</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>International Mathematics Olympiad (IMO)</td>
          <td>International Mathematical Olympiad Foundation (IMOF)</td>
        </tr>
        <tr>
          <td>Regional Mathematics Olympiad (RMO)</td>
          <td>Indian Association of Physics Teachers (IAPT) and Homi Bhabha Centre for Science Education (HBCSE) on behalf of the National Board for Higher Mathematics (NBHM)</td>
        </tr>
        <tr>
          <td>Mathematical Olympiad for Girls (MOG)</td>
          <td>Various educational institutions and organizations in India</td>
        </tr>
        <tr>
          <td>International Mathematics and Science Olympiad (IMSO)</td>
          <td>Singapore Asia Publishers (SAP) and International Science and Math Association (ISMA)</td>
        </tr>
        <tr>
          <td>Science Olympiad Foundation (SOF) Mathematics Olympiad</td>
          <td>Science Olympiad Foundation (SOF)</td>
        </tr>
        <tr>
          <td>Mathematics Talent Search Examination (MTSE)</td>
          <td>Conducted by different organizations and educational bodies in various states in India</td>
        </tr>
        <tr>
          <td>Indian National Junior Science Olympiad (INJSO)</td>
          <td>Homi Bhabha Centre for Science Education (HBCSE) on behalf of the National Board for Higher Mathematics (NBHM)</td>
        </tr>
      </tbody>
    </table>
    <br /><br /><br />

    <p>Now there are some competitions that offer a diverse range of mathematical challenges and opportunities 
    for students to engage with peers from around the World. They promote mathematical talent and problem-
    solving skills in students of the same age group as those participating in the NMTC Sub-Junior exam.</p>

    <table className="exams-table" style={{marginTop:"30px"}}>
      <thead>
        <tr>
          <th>Exam Name</th>
          <th>Organizing Organization</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Australian Mathematics Competition (AMC)</td>
          <td>Australian Mathematics Trust (AMT)</td>
        </tr>
        <tr>
          <td>Math Kangaroo</td>
          <td>Math Kangaroo Foundation</td>
        </tr>
        <tr>
          <td>International Kangaroo Mathematics Contest (IKMC)</td>
          <td>Kangourou sans Frontières (KSF)</td>
        </tr>
        <tr>
          <td>American Mathematics Competitions (AMC)</td>
          <td>Mathematical Association of America (MAA)</td>
        </tr>
        <tr>
          <td>International Mathematics Competition (IMC)</td>
          <td>Hosting country's organizing committee (varies by year)</td>
        </tr>
        <tr>
          <td>European Girls' Mathematical Olympiad (EGMO)</td>
          <td>EGMO Committee</td>
        </tr>
        <tr>
          <td>International Mathematical Olympiad for Girls (IMOg)</td>
          <td>Hosting country's organizing committee (varies by year)</td>
        </tr>
      </tbody>
    </table>
    </>

    
  );
}

export default Exams;
