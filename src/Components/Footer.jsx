import React from 'react';

export default function Footer() {
    const heart={
        width:"1.8rem",
        margin:"0 0.1rem"
        
        
    }
  return(
<>
<div className="main-footer">
    <div className="footer-items footer-items-left"><p>Copyright <span>&copy;</span> Newsmini</p></div>
    <div className="footer-items footer-items-right"><p>Made with <span   className='heart-icon'><img align="center" style={heart}  src={process.env.PUBLIC_URL + "/Images/heart.svg"} alt="" /></span>
     by Jayant</p></div>
</div>
</>
  );
}
