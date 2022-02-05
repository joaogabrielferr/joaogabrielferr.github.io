import React from "react";
import { useEffect, useState } from "react";
import CV_PTBR from '../Curriculo_JoaoGabrielFerreira.pdf';
import CV_ENG from '../Resume_JoaoGabrielFerreira.pdf';

const Greetings = () => {

  const [hours,setHours] = useState("");

  useEffect(()=>{

      const date = new Date();
      const h = date.getHours();

      if(h < 12)setHours("morning");
      else if(h < 18)setHours("afternoon");
      else setHours("evening");

  }
  ,[]);

  return (
    <div className="greetings">
      <div className="greetings-main">
        <div className="greetings-main-wrapper">
          <div className="name">Good {hours}, my name is <span className="name-span">João Gabriel</span>,</div>
          <div className="subtitle">Software Developer {"&&"}</div>
          <div className="subtitle">Computer Science Student.</div>
          <div className="about">
            Since I got into software development I have developed many projects, mainly personal ones
            , using technologies such as &nbsp;
            <span className="tag">Javascript</span> ,
            &nbsp;
            <span className="tag">React</span> , &nbsp;
            <span className="tag">Node.js</span> , &nbsp;
            <span className="tag">Python</span> , &nbsp;
            <span className="tag">Java</span> &nbsp;
            and many more. Besides software development I also like competitive programming and machine learning. See below the 
            projects i've made so far.
          </div>
          <div className="cv-buttons">
            <a className="button" href={CV_PTBR} target={"_blank"}><i className="far fa-file"></i>&nbsp;&nbsp; CV (Portuguese)</a>
            <a className="button" href = {CV_ENG} target = {"_blank"}><i className="far fa-file"></i>&nbsp;&nbsp; CV (English)</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
