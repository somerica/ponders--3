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
            <h6>
              Ponders Cleaners(formally Ponders 60 Minute Cleaners) was started in 1970 by Margaret Ponder.
              Mrs.Ponder was a widow with six children , who had worked at other
              dry cleaners for years. One day it occured to her she could open
              her own cleaners , be her own boss and secure a future for her
              children. With the help of a small business loan Mrs. Ponder was able to purchase a "One Hour Martinizing"
              franchise and set up at the location on Campbellton Rd. Years later when "One Hour" went out of business Mrs. Ponder
              changed the name to Ponders Cleaners and the rest is history. Mrs. Ponder passed in March of 2002 and the business is now run 
              by her oldest son Roderick Ponder.
            </h6>
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
          <div class="divider"></div>
         
          <div className="row">
            <div className="center">
              Our Location
              <p>Address: 4473 Campbellton Rd SW Atlanta ,Ga 30331.</p>
              <p> Phone : (404) 349-6464</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
