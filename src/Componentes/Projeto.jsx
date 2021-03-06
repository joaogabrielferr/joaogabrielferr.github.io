import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const handleDragStart = (e) => e.preventDefault();

const Projeto = ({ titulo, stack, bulletPoints, items, website, github,msgAdicional }) => {
  return (
    <div className = "Projeto">
      <div className="projeto">
        <div className="titulo-projeto">
          <a href={website} target={"_blank"}>
            {titulo}
          </a>
        </div>

        <div className="content">
          <div className="info">
            <div id="stack">

              { stack.map( (item,index) => (<div key = {index}><p>{item}</p> &nbsp;&nbsp;  </div>)  )  }

            </div>

            <ul>
              {bulletPoints.map((item, index) => (
                <div key = {index}>
                  <li>{item}</li>
                  <br/>
                </div>
                
              ))}
            </ul>

            <div>
              {" "}
              <a href={website} target={"_blank"} className="external">
                Website <span style={{fontSize:"1em"}}>{msgAdicional}</span> <i className="fas fa-link"></i>
              </a>
            </div>
            <div>
              <a href={github} target={"_blank"} className="external">
                Repository on Github <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div className="img">
            <AliceCarousel
              mouseTracking
              items={items}
              disableDotsControls={true}
              renderPrevButton={() => {
                return (
                  <p className="nextimg">
                    Prev <i className="fas fa-arrow-circle-left"></i>
                  </p>
                );
              }}
              renderNextButton={() => {
                return (
                  <p className="nextimg">
                    Next <i className="fas fa-arrow-alt-circle-right"></i>
                  </p>
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projeto;
