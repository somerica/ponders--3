import React from "react";

const Home = () => {
  return (
    <>
      <section className="description">
        <div className="section white center">
          <div className="row container center">
            <div className="col center 18 s12"></div>
            <div className="col center 14 s12">
              <img
                src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/876/4653402876_02087fc2-ada8-445c-a6df-f652646c02c7.png?cb=1613422616"
                height="200"
                width="auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col s3">
            <div className="card">
              <div className="card-image">
                <img src="images/sample-1.jpg" />
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="col s6">
            MIDDLE STUFF GOES HERE
            <h1>
              Ponders Cleaners was started in 1970 by Margaret Ponder.
              Mrs.Ponder was a widow with six children , who had worked at other
              dry cleaners for years. One day it occured to her she could open
              her own cleaners , be her own boss and secure a future for her
              childern.
            </h1>
          </div>
          <div className="col s3">
            <div className="card">
              <div className="card-image">
                <img src="images/sample-1.jpg" />
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
            RIGHT STUFF GOES HERE
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
