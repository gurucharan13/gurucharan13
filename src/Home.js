import react from 'react';
import cryp1 from "./crypto1.jpg" 
function Home(){
  return(
       <div>
         <h1 id="#hea">Home</h1>
         
         <p className="para">
           <img src={cryp1} />
           <h2>This website is basically used to know about cryptocurrency</h2>
           <h3>This website is designed by</h3>
           <h2 id="gc">GURUCHARAN D A</h2>
           <h1 id="grad">WELCOME TO HOME PAGE!! FOLKS</h1>
        </p>
       </div>

  )

}
export default Home;

