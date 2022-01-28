import React from 'react';

function Home() {
  return(
   <>
   <div className="main-header">
       <div className="heading"><img src={process.env.PUBLIC_URL+"/newsmini.svg"} alt="" srcset="" /></div>
       <div className="heading heading-right">
           <div className="heading-items"><p>Finance</p></div>
           <div className="heading-items"><p>Entertainment</p></div>
           <div className="heading-items"><p>Sports</p></div>
           <div className="heading-items"><p>Politics</p></div>
       </div>
   </div>
       
       </>
  );
}

export default Home;
