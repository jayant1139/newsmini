import React from "react";

function Home() {
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

      <div className="desc-container">
        <div className="desc-items">
          <p>
            Finance is a broad term that describes activities associated with
            banking, leverage or debt, credit, capital markets, money, and
            investments. Basically, finance represents money management and the
            process of acquiring needed funds.
          </p>
        </div>
        <div className="desc-items desc-bg-shadow">
          <img src={process.env.PUBLIC_URL + "/Images/finance.png"} alt="" />
        </div>
      </div>

      <div className="desc-container">
        <div className="desc-items desc-bg-shadow">
          <img src={process.env.PUBLIC_URL + "/Images/sports.png"} alt="" />
        </div>
        <div className="desc-items">
          <p>
          Sport is an activity involving physical exertion and
           skill in which an individual or team competes against another or others for entertainment.
          </p>
        </div>
      </div>

      <div className="desc-container">
        <div className="desc-items">
          <p>
          Entertainment is a form of activity that holds the attention and interest of an audience, 
          or gives pleasure and delight. It can be an idea or a task, but is more likely to be
           one of the activities or events that have developed over thousands of years specifically for the purpose
            of keeping an audience's attention.
          </p>
        </div>
        <div className="desc-items desc-bg-shadow">
          <img src={process.env.PUBLIC_URL + "/Images/entertainment.png"} alt="" />
        </div>
      </div>

      <div className="desc-container">
        <div className="desc-items desc-bg-shadow">
          <img src={process.env.PUBLIC_URL + "/Images/politics.png"} alt="" />
        </div>
        <div className="desc-items">
          <p>
          Politics is the way that people living in groups make decisions. 
          Politics is about making agreements between people so that they can live together in groups 
          such as tribes, cities, or countries. 
          Politicians, and sometimes other people, may get together to form a government.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
