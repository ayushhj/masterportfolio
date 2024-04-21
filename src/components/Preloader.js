import React, { useState, useEffect } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);

function Preloader() {

const[showLoader , setShowLoader] = useState(true)
setTimeout(() => {
  setShowLoader(false)
}, 6000);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      }).to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to(".title-lines", { display: "block", duration: 0.1 })
      .to(".title-lines", {
      });
  
  };

  return showLoader ?  (
    <div className="appcontainer" >
      <div className="loading">
        <div className="follow"></div>
        <div
          className="hide"
          id="progress-bar"
          style={{ width: counter + "%" }}
        ></div>
        <p id="count" className="hide">
          {counter}%
        </p>
      </div>

      <div className="content">
      </div>

    </div>
  ) : null;
}

export default Preloader;


