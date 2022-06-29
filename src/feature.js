import React from "react";
import Users from "./users";
import "./index.css";

const Feature = () => {
  return (
    <section className="feature">
      <article className="feature-img">
        <img
          src="./girl.png"
          style={{
            marginLeft: "5%",
            marginTop: "5%",
            position: "absolute",
            zIndex: "-1",
          }}

          className='girl-img'
        />
        <div>
          <section className='feature-user-con'>
            <div className='feature-user'>
              <img src="./Ellipse.svg" alt="" />
              <div className='sub-feature-user'>
                <h5>John Do</h5>
                <p>Mon, Feb 28</p>
              </div>
            </div>

            <div className='feature-user'>
              <img
                src="./Vector.svg"
                alt=""
                style={{
                  padding: "7px 5px",
                  border: "2px slateblue solid",
                  backgroundColor: "slateblue",
                  borderRadius: "50%",
                }}
              />
              <div className='sub-feature-user'>
                <h5>Mike Taylor</h5>
                <p>Mon, Feb 21</p>
              </div>
              <img
                src="./Black Man.jpg"
                style={{ marginLeft: "28%" }}
                className='feature-user-img'
              />
            </div>

            <div className='feature-user'>
              <img src="./Ellipse.svg" alt="" />
              <div className='sub-feature-user'>
                <h5>Angela Taylor</h5>
                <p>Wed, Jan 16</p>
              </div>
              <img
                src="./White Man.jpg"
                style={{ marginLeft: "23%" }}
                className='feature-user-img'
              />
            </div>
          </section>
        </div>
      </article>

      <article className="feature-con">
        <h3>OUR FEATURE</h3>
        <h1>Receive payments quickly from anywhere</h1>
        <p>
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient not. Letter of on become he tended
          active enable to.{" "}
        </p>
        <button className="get-started">Get Started</button>
      </article>
    </section>
  );
};

export default Feature;
