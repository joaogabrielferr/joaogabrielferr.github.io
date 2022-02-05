import "./App.css";
import { useEffect, useRef, useState } from "react";
import bst from "./img/bstimage.PNG";
import linkedlist from "./img/linkedlistimage.PNG";
import stackimage from "./img/stackimage.PNG";
import taskis from "./img/taskis.PNG";
import taskis1 from "./img/taskis1.PNG";
import taskis2 from "./img/taskis2.PNG";
import taskis3 from "./img/taskis3.PNG";
import taskis4 from "./img/taskis4.PNG";
import taskis5 from "./img/taskis5.PNG";
import locomoc1 from "./img/locomoc1.PNG";
import locomoc2 from "./img/locomoc2.PNG";
import locomoc3 from "./img/locomoc3.PNG";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Projeto from "./Componentes/Projeto";
import Greetings from "./Componentes/Greetings";
import Skills from "./Componentes/Skills";
import About from "./Componentes/About";
import Contact from "./Componentes/Contact";
import Header from "./Componentes/Header";

function App() {
  const [loaded, setLoaded] = useState(false);
  const ANIMATION_TIME = 1000;
  const [showNavbar, setShowNavbar] = useState(false);
  const svg = useRef();

  const handleDragStart = (e) => e.preventDefault();

  const imagensVisualizador = [
    <img src={bst} onDragStart={handleDragStart} role="presentation" />,
    <img src={linkedlist} onDragStart={handleDragStart} role="presentation" />,
    <img src={stackimage} onDragStart={handleDragStart} role="presentation" />,
  ];
  const imagensTaskis = [
    <img src={taskis1} onDragStart={handleDragStart} role="presentation" />,
    <img src={taskis2} onDragStart={handleDragStart} role="presentation" />,
    <img src={taskis3} onDragStart={handleDragStart} role="presentation" />,
    <img src={taskis4} onDragStart={handleDragStart} role="presentation" />,
    <img src={taskis5} onDragStart={handleDragStart} role="presentation" />,
  ];
  const imagensLocoMoc = [
    <img src={locomoc1} onDragStart={handleDragStart} role="presentation" />,
    <img src={locomoc2} onDragStart={handleDragStart} role="presentation" />,
    <img src={locomoc3} onDragStart={handleDragStart} role="presentation" />,
  ];

  useEffect(() => {
    // svg.current.style.backgroundColor = "#111c5c";
    // svg.current.style.borderRadius = "0.3vw";
    // svg.current.style.width = "99vw";
    // svg.current.style.height = "99vh";
    // let textoroot = document.createElementNS(
    //   "http://www.w3.org/2000/svg",
    //   "text"
    // );
    // textoroot.setAttributeNS(null, "x", `50`);
    // textoroot.setAttributeNS(null, "y", `45`);
    // textoroot.setAttributeNS(
    //   null,
    //   "style",
    //   "text-anchor:middle; fill:#a8a8a8 ;font-size:0.3vw; font-weight:bold; font-family:Source Code Pro; dy=.3em"
    // );
    // textoroot.textContent = `{JG}`;
    // textoroot.setAttribute("id", "texto-svg");

    // svg.current.appendChild(textoroot);

    // setTimeout(() => {
    //   setLoaded(true);
    // }, 1000);
  }, []);

  return (
    <div className="App">

          <Header></Header>

          <Greetings></Greetings>

          <div id="projetos">
            <div id="titulo"><i className="fas fa-tasks"></i> Projects <span className = "titulo-horizontal"></span> </div>

            <div className="vertical-1vh"></div>

            <div id="inner-projetos">
              <Projeto
                titulo={"Data Structures Visualizer"}
                stack={[" ReactJs "," HTML5 "," CSS3 "," Scalable Vector Graphics "]}
                bulletPoints={[
                "Online tool to visualize the operations of the most important data structures with the goal of making it easier to understand them.",
                "The main goal is to visualize how the operations modify their data structures, maintaining its properties.",
                "All operations can be visualized with animations, that were made with Scalable Vector Graphics and CSS3. The application was built with React.",
                "The following data structures were implemented: Binary Search Tree, Linked List and Stack. Visualization for Queue and Heap are still in development."
                ]}
                items={imagensVisualizador}
                website={
                  "https://joaogabrielferr.github.io/data-structures-visualizer/"
                }
                github={
                  "https://github.com/joaogabrielferr/data-structures-visualizer"
                }
              ></Projeto>

              <div className="vertical-5vh"></div>

              <Projeto
                titulo={"Full Stack Task Manager"}
                stack={["ReactJs","Node.js","Express.js","MongoDB"]}
                bulletPoints={[
                  "Full stack application that I made with the goal of learning the whole process of creation of a web app, from conception to deployment.",
                  "An REST API was made with Node.js and Express.js to manage data and connect with the database. The data was persisted using MongoDB.",
                  "The front-end was built with React.",
                  "You can register and login, create, edit and delete tasks, sort them by priority and by alphabetical order, as well as mark a task as concluded. The task are organized in sections: All, Today, Tomorrow, Overdue and Concluded."
                ]}
                items={imagensTaskis}
                website={"https://taskis.herokuapp.com/"}
                github={"https://github.com/joaogabrielferr/taskis"}
                msgAdicional={
                  "(Deployment was made in Heroku, the first load can take up to 10 seconds.)"
                }
              ></Projeto>

              <div className="vertical-5vh"></div>

              <Projeto
                titulo={"Full Stack Car Rental System"}
                stack={["ReactJs","Node.js","Express.js","MongoDB"]}
                bulletPoints={[
                  "Application built as the final project for the Analysis and Project of Systems course i took in my university.",
                  "You can register, login, register a car to be rent, manage your cars, request a car rental and accept requests other users made for your car.",
                  "The same stack of the task manager project was used in this one. The front-end was built with React, and the back-end with Node.js, Express.js and the data is persisted with MongoDB."
                ]}
                items={imagensLocoMoc}
                website={"https://locomoc.herokuapp.com/"}
                github={"https://github.com/joaogabrielferr/locomocClientV3"}
                msgAdicional={
                  "(Deployment was made in Heroku, the first load can take up to 10 seconds.)"
                }
              ></Projeto>
            </div>
          </div>

          <div className="vertical-5vh"></div>
          <div id="skills"></div>
          <Skills></Skills>

          <div className="vertical-5vh"></div>
          <div id="about"></div>
          <About></About>

          <div className="vertical-5vh"></div>
          <div id="contact"></div>
          <Contact></Contact>

          <div className="vertical-5vh"></div>
              
          <div className="float-navbar">
            <div className="float-navbar-items">
              <div className = "nav-bar-item">
              <a href="https://github.com/joaogabrielferr" target = {"_blank"}>
              <i className="fab fa-github icon"></i><br/>
              Github
              </a>
            </div>

            <div className="nav-bar-item">
              <a href="https://www.linkedin.com/in/joaogabrielferr" target = {"_blank"}>
              <i className="fab fa-linkedin-in icon"></i><br/>
              Linkedin
              </a>              
            </div>

            <div className="nav-bar-item">
              <a href="mailto:joaogabrielferr@gmail.com" target = {"_blank"}>
              <i className="far fa-envelope icon"></i><br/>
              Email
              </a>
            </div>
            </div>
  
            <div className="vertical-line">
              
            </div>
          </div>

          <div style={{ fontSize: "1em" }}>João Gabriel Ferreira</div>
    </div>
  );
}

export default App;
