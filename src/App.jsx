import React from "react";
import "./App.css";
import { gsap } from "gsap";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".section").forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
  });
  return (
    <div className="App">
      {/* First section */}
      <section className="section one">
        <div className="container">
          <div className="column-left">
            <h1 className="text">Organic Fruits</h1>
            <p className="text">
              Choose from a <br />
              wide variety of options.
            </p>
            <button>Get Started</button>
          </div>
          <div className="column-right">
            <img src="/img-1.jpg" alt="food" className="image" />
          </div>
        </div>
      </section>
      {/* Second section */}
      <section className="section two">
        <div className="container">
          <div className="column-left">
            <p className="text">
              Delicious and nutritious foods that you can easily access
            </p>
          </div>
          <div className="column-right">
            <img src="/img-2.jpg" alt="food" className="image" />
          </div>
        </div>
      </section>
      {/* Third section */}
      <section className="section three">
        <div className="container">
          <div className="column-left">
            <p className="text">Unique flavors and options to choose from</p>
          </div>
          <div className="column-right">
            <img src="/img-3.jpg" alt="food" className="image" />
          </div>
        </div>
      </section>
      {/* Fourth section */}
      <section className="section four">
        <div className="container">
          <div className="column-left">
            <p className="text">We even serve ice cream</p>
          </div>
          <div className="column-right">
            <img src="/img-4.jpg" alt="food" className="image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
