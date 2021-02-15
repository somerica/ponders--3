import React from "react";

const Home = () => {
  return (
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
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
        <div className="col s6">MIDDLE STUFF GOES HERE</div>
        <div className="col s3">
          <div className="card">
            <div className="card-image">
              <img src="images/sample-1.jpg" />
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
          RIGHT STUFF GOES HERE
        </div>
      </div>
    </div>
  );
};

export default Home;
