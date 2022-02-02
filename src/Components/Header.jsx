import React from 'react';

export default function Header() {
  return (
      <>
       <div className="main-header">
       <div className="heading">
          <img
            src={process.env.PUBLIC_URL + "/newsmini.svg"}
            alt=""
            srcset=""
          />
        </div>
        <div className="heading heading-right">
          <a className="heading-items">
            <p>Finance</p>
          </a>
          <a className="heading-items">
            <p>Entertainment</p>
          </a>
          <a className="heading-items">
            <p>Sports</p>
          </a>
          <a className="heading-items">
            <p>Politics</p>
          </a>
        </div>
      </div>
      
      </>
  );
}
