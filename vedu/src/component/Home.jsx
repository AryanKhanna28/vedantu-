import React from 'react'
import Picture1 from  '../image/Picture1.png'
import Picture2 from  '../image/Picture2.png'
import Picture3 from  '../image/Picture3.png'
import CompetitionTable from './CompetitionTable'
import MathTable from './MathTable'
import ExamTable from './ExamTable'


const Home = () => {
  return (
    <>
      <div  style={{textAlign:'center', display:'flex' ,justifyContent:'center', alignItems:'center', flexDirection:'column' }}>
        <h2 style={{marginTop:'30px'}}>NMTC -Sub-Junior</h2>
        <p style={{fontSize:"14px", width:'60%', color:'#878787'}}>Unlock your potential and conquer the NMTC Sub Junior Exam with precision and confidence.
         Join us on a journey of mathematical exploration and mastery!</p>
      </div>
        
        <br />
        <div className='home-conatiner'>
        <h4>About NMTC Exam</h4>
        <p>NMTC or National Mathematics Talent Contest is a popular competitive test among math enthusiastic 
        students. Since the test is at the national level, it is conducted and regulated by the Association 
        of Mathematics Teachers of India (AMTI).  The aim of NMTC is to quest and encourage students who have 
        the ability of creative and original thinking, preparedness to tackle non-routine and unknown problems 
        by applying general mathematical ability that is suitable to their level.</p>
        <br />
        <h4>AIM OF THE TESTS:</h4>
        <p>To identify and encourage students who have the capacity for original and creative thinking, 
        willingness to attempt unfamiliar and non-routine problems, exhibiting a general mathematical ability 
        appropriate to their level.</p>
        <br />
        <h4>NMTC 2023-24: Eligibility Criteria </h4>
        <p>All math lovers who are in schools, junior colleges of all boards, degree colleges and 
        technological institutions in India can take part in it.</p>
        <p style={{marginBottom:'15px'}}>Here you go with the further details,</p>

        {/* <img className='tables' src={Picture1} alt="" /> */}
        <div style={{marginLeft: '50px'}}>
          <CompetitionTable/>
        </div>
        
        <br />
        <br />
        <h4>FEES </h4>
        <p>Rs.150/- per candidate ( Out of this, Rs.125/- per candidate should be sent to AMTI, and the 
        Institution retaining Rs.25/- per candidate for all expenses, including the download and printing 
        the question papers from the mail supply of the answer sheets and the invigilation charges. No further 
        claim can be made by the institution for any type of expenses).</p>
        <br />
        <h4>NMTC - SUB JUNIOR Syllabus for Class 7th & 8th</h4>
        {/* <img className='tables' src={Picture2} alt="" /> */}
        <div style={{marginLeft: '50px'}}>
          <MathTable/>
        </div>
        
        <br />
        <br />
        <ul><h4>MODE OF EXAMINATION</h4>
        <li className='mod_li' >	Every candidate except the senior level will take two tests- Prepminary Test and Final Test.</li>
        <li className='mod_li'>	Senior (Degree College) level students will take only the final test.</li>
        <li className='mod_li'>	The date and time of the examination stipulated by AMTI should be strictly followed and cannot be altered by the centers.</li>
        </ul>

        <br />

        <h4 style={{fontSize:"1.3rem",marginBottom:"-15px"}}>NMTC: Exam Pattern</h4>
        <br />
        <ul><h4>Stage-1 or Preliminary Test</h4>
        <li>	The Preliminary test will be conducted in the participating schools itself by the school. 
        AMTI will send the question paper and the other materials to the school mail. The Principal or the 
        authorized school person may download the question paper and the materials and conduct the preliminary 
        examination. The top 10% of students based on the Preliminary test performance will be selected by the 
        respective schools</li>
        <li>	Preliminary test will be of objective type for Primary, Sub-Junior, Junior and Inter levels and 
        will be of 2 hours duration.</li>
        <li>	The Preliminary level questions will comprise of Multiple choice, Fill in the blanks problems, 
        etc. roughly with the following levels of difficulty.</li>
        <li> And also the question paper in the first level will comprise of questions that test their problem 
        solving skills in their respective levels.</li>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; -->20% of the questions that are of moderate level </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--> 80% of questions with higher level of difficulty, somewhat similar to Olympiad.</p>
        <li>The responses in the preliminary test will be written in the response sheets which will be provided 
        by the AMTI. The institution will conduct the preliminary test in its own premises the objective type 
        preliminary papers will also be evaluated by the respective institutions (based on the key that will be 
        supplied by AMTI on the next day of preliminary exam.) and the list of top 10% scorers only at each 
        level in the Preliminary Test will be intimated to us.</li>
        <li><strong style={{fontWeight:"500"}}>Important Note:</strong> If more students qualify for any level from an institution, please use your 
        discretion to shortlist and send only 10% to AMTL. In case, additional names are communicated to AMTI, 
        the excess students over and above 10%, will be dropped by us .</li>
        <li>Students selected at the Preliminary level test will get certificates which may be treated as the 
        Hall Ticket for the final examination.</li>
        </ul>
        <br />
        {/* <img className='tables' src={Picture3} alt="" /> */}
        <div style={{marginLeft: '50px'}}>
          <ExamTable/>
        </div>
        
        <br />
        <br />

        <ul><h4>Stage-2 or Final Test</h4>
        <li>Only the candidates selected at the preliminary level can appear for the final.</li>
        <li>	It is 3-hours test of subjective type questions reflecting the syllabi of PRMO, RMO, INMO and 
        IMO. The final examination will be held in their respective Institutions. AMTI will send the question 
        paper and the other materials to the school mail. The Principal or the authorized school person may 
        download the question paper and the materials and conduct the final examination.</li>
        <li>	SPECIAL NOTE: Answer books of the final test containing the solutions written by participants 
        should be dispatched on the same day of the examination and delayed receipts will not be entertained. 
        Answer sheets (un-ruled only, preferably A4 size) for the Final test have to be supplied by the 
        respective schools.</li>
        <li>	 The date and time of the examination cannot be altered by the centers on any account.</li>
        </ul>
        <br />

        <ul><h4>NMTC Registration</h4>
        <li>	The official website of NMTC is the only place where students can register for the exam. 
        Once they are done with their registrations, the system will generate the school ID and it will be 
        automatically sent to the corresponding school for reference. </li>
        <li>	The candidates require a clear & good quality photograph along with their School ID, School 
        Name, Active Mobile Number and Email Contact Details.</li>
        <li>	The registration fee is 150/- per candidate which is directly paid to AMTI through online mode.</li>
        <li>	Once the payment is done, the system will generate a 13 digit registration number which will 
        be sent to the Active Email and Mobile number of the students.</li>
        </ul>
        <br />

        <ul><h4>NMTC 2023-24: Awards</h4>
        <li>	The Top 3 winners get cash awards & merit certificates.</li>
        <li>	1st position receives Rs.5000/-, 2nd will get Rs.3000/- and 3rd is awarded Rs. 2000/-.</li>
        <li>Students who are selected at the final levels are additionally awarded merit certificates and 
        token cash, depending on their maturity in mathematics. </li>
        </ul>

        </div>
    </>
  )
}

export default Home