import React from "react";
 import "../css/Clock.css"
 import { useState, useEffect } from 'react';

export const Clock = () => {

  const [showDate, setShowDate] = useState(true);

  useEffect(() => {
    const textElement = document.getElementById("text");
    const hoursElement = document.getElementById("hour_hand");
    const minutesElement = document.getElementById("minute_hand");
    const secondsElement = document.getElementById("second_hand");

    const animate = () => {
      const date = new Date();

      const day = date.getDate();
      const ampm = date.getHours() >= 12 ? "PM" : "AM";
      const hour = date.getHours() + date.getMinutes() / 60;
      const minute = date.getMinutes() + date.getSeconds() / 60;
      const second = date.getSeconds() + date.getMilliseconds() / 1000;

      textElement.textContent = showDate ? day : ampm;
      hoursElement.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
      minutesElement.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
      secondsElement.setAttribute("transform", `rotate(${(360 / 60) * second})`);

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    const handleTextClick = () => {
      setShowDate((prevShowDate) => !prevShowDate);
    };

    textElement.addEventListener("click", handleTextClick);

    return () => {
      textElement.removeEventListener("click", handleTextClick);
    };
  }, [showDate]);
  return (
    <>
     
     <svg width="200" height="200" viewBox="-100 -100 200 200">
  <circle className="minute_marker" r="90" pathLength="60" />
  <circle className="hour_marker" r="90" pathLength="60" />
  <text id="text" className="text" x="45" y="5"></text>

  <g id="hour_hand">
    <line className="hand" x1="0" y1="0" x2="0" y2="-50" />
    <line className="hand hand--thick" x1="0" y1="-12" x2="0" y2="-50" />
  </g>

  <g id="minute_hand">
    <line className="hand" x1="0" y1="0" x2="0" y2="-80" />
    <line className="hand hand--thick" x1="0" y1="-12" x2="0" y2="-80" />
  </g>

  <g id="second_hand">
    <line className="hand hand--second" x1="0" y1="12" x2="0" y2="-80" />
  </g>

  <circle className="center" r="3" />
</svg>

 
    </>
  );
};
