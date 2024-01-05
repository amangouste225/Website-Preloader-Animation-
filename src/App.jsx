import { useRef } from "react";
import "./style.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "./components/Button";

function App() {
  const loading = useRef(null);
  const counter = useRef(null);
  const header = useRef(null);

  useGSAP(
    () => {
      var tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.to(".counter3", {
        y: -2600,
        duration: 5,
      })
        .to(
          ".counter2",
          {
            y: -1300,
            duration: 3,
            delay: 2,
          },
          "<"
        )
        .to(
          ".counter1",
          {
            y: -130,
            duration: 1,
          },
          "-=1"
        );

      gsap.from(".loader1", {
        width: 0,
        duration: 6,
      });

      gsap.from(
        ".loader2",
        {
          width: 0,
          ease: "power2.inOut",
          duration: 7,
        },
        "<"
      );

      gsap.to(".digit", {
        top: -150,
        duration: 1,
        stagger: 0.15,
        delay: 5,
        ease: "expo.inOut",
      });

      gsap.to(".loader", {
        background: "none",
        delay: 6,
        duration: 0.1,
      });

      gsap.to(".loader1", {
        rotate: 90,
        y: -50,
        duration: 0.5,
        delay: 6,
      });

      gsap.to(
        ".loader2",
        {
          x: -68,
          y: 53,
          duration: 0.5,
        },
        "<"
      );

      gsap.to(
        ".loader",
        {
          scale: 50,
          duration: 1,
          ease: "power3.inOut",
        },
        ">"
      );

      gsap.to(
        ".loader",
        {
          rotate: 45,
          y: 500,
          x: 2000,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
    },
    { scope: loading }
  );
  useGSAP(
    () => {
      gsap.to(".loadings", {
        opacity: 0,
        delay: 7,
        duration: 0.2,
        ease: "power3.inOut",
      });

      gsap.to(
        ".wrapper",
        {
          opacity: 1,
        },
        "<"
      );
      gsap.from(
        ".menu",
        {
          y: -80,
          ease: "power3",
          duration: 1,
        },
        "<"
      );

      gsap.from(
        ".reveal",
        {
          y: 80,
          ease: "power4",
          duration: 1,
        },
        "<"
      );
    },
    { scope: header }
  );

  return (
    <div className="contain" ref={header}>
      <div className="wrapper">
        <div className="header">
          <nav className="menu">
            <div className="logo">
              <a href="/">LUSION</a>
            </div>
            <ul>
              <li>
                {" "}
                <Button>-</Button>
              </li>
              <li>
                {" "}
                <Button active>let's talk</Button>
              </li>
              <li>
                {" "}
                <Button>menu</Button>
              </li>
            </ul>
          </nav>
          <div className="reveal">
            We build epic realtime interactive experience to blow people's minds
          </div>
        </div>
      </div>

      <div className="loadings" ref={loading}>
        <div className="loader">
          <div className="bar loader1"></div>
          <div className="bar loader2"></div>
        </div>

        <div className="counter" ref={counter}>
          <div className="counter1 digit">
            <span className="number">0</span>
            <span className="number">1</span>
          </div>
          <div className="counter2 digit">
            <span className="number">0</span>
            <span className="number">1</span>
            <span className="number">2</span>
            <span className="number">3</span>
            <span className="number">4</span>
            <span className="number">5</span>
            <span className="number">6</span>
            <span className="number">7</span>
            <span className="number">8</span>
            <span className="number">9</span>
            <span className="number">0</span>
          </div>
          <div className="counter3 digit">
            <span className="number">0</span>
            <span className="number">1</span>
            <span className="number">2</span>
            <span className="number">3</span>
            <span className="number">4</span>
            <span className="number">5</span>
            <span className="number">6</span>
            <span className="number">7</span>
            <span className="number">8</span>
            <span className="number">9</span>
            <span className="number">0</span>
            <span className="number">1</span>
            <span className="number">2</span>
            <span className="number">3</span>
            <span className="number">4</span>
            <span className="number">5</span>
            <span className="number">6</span>
            <span className="number">7</span>
            <span className="number">8</span>
            <span className="number">9</span>
            <span className="number">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
