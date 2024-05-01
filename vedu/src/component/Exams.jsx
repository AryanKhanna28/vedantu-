import React from 'react';
// import './ExamTable.css'; // Import CSS file for styling

function Exams() {
  return (
    <div className='exam-main' >
      <div style={{textAlign:'center', display:'flex' ,justifyContent:'center', alignItems:'center', flexDirection:'column' }}>
        <h2>Exams</h2>
        <p style={{padding :"0 9px 0 23px", fontSize:"14px", width:'60%', color:'#878787'}}>Explore a world of mathematical challenges with NMTC Sub-Junior exams in India, alongside similar 
        exhilarating competitions worldwide, offering young minds a platform to unleash their problem-solving 
        prowess and mathematical ingenuity</p>
      </div>

        <ul style={{ marginLeft:"15px", marginRight:"14px" , marginTop:"40px"}}><li>
        <p>These are some alternative exams and competitions for students in the same age group as those 
        participating in the NMTC Sub-Junior exam in India. Each of these competitions offers a unique 
        platform for students to develop their mathematical skills and compete at various levels.</p>
        </li></ul>    
        

        <table className="exam-table" style={{marginTop:"30px"}}>
      <thead>
        <tr>
          <th>Exam Name</th>
          <th>Exam Organizer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>International Mathematics Olympiad (IMO)</td>
          <td>Science Olympiad Foundation (SOF)</td>
        </tr>
        <tr>
          <td>Regional Mathematics Olympiad (RMO)</td>
          <td>Indian Association of Physics Teachers (IAPT) and Homi Bhabha Centre for Science Education (HBCSE) on behalf of the National Board for Higher Mathematics (NBHM)</td>
        </tr>
        <tr>
          <td>Aryabhatta Mathematics Olympiad (AMO)</td>
          <td>Mathematical Association of India (MAI)</td>
        </tr>
        <tr>
          <td>Unified Talent Search Examination (UTSE)</td>
          <td> Unison International School, Unison Institute</td>
        </tr>
        <tr>
          <td>Mathematics Talent Search Examination (MTSE)</td>
          <td>Indian Institute for Studies in Mathematics (IISMA).</td>
        </tr>
      </tbody>
    </table>
    <br /><br />

    <ul style={{ marginLeft:"15px", marginRight:"25px"}}><li>
    <p>Now there are some competitions that offer a diverse range of mathematical challenges and opportunities 
    for students to engage with peers from around the World. They promote mathematical talent and problem-
    solving skills in students of the same age group as those participating in the NMTC Sub-Junior exam.</p>
    </li></ul>
    

    <table className="exam-table" style={{marginTop:"30px"}}>
      <thead>
        <tr>
          <th>Exam Name</th>
          <th>Exam Organizer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>International Mathematics Olympiad (IMO)</td>
          <td>International Mathematical Olympiad Foundation (IMOF)</td>
        </tr>
        <tr>
          <td>Australian Mathematics Competition (AMC)</td>
          <td>Australian Mathematics Trust (AMT)</td>
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
          <td>European Girls' Mathematical Olympiad (EGMO)</td>
          <td>EGMO Committee</td>
        </tr>
      </tbody>
    </table>
    </div>

    
  );
}

export default Exams;
