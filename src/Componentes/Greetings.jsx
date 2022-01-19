import React from 'react'
import pdf from "../Curriculo_JoaoGabrielFerreira.pdf";

const Greetings = () => {
    return (
        <div>
          <div id="hello">
            <div id="sociais">
              <div id="icon">
                <a
                  href="https://www.linkedin.com/in/joaogabrielferr/"
                  target={"_blank"}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <br />
              <div id="icon">
                <a href="https://github.com/joaogabrielferr/" target={"_blank"}>
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <br />
              <div id="icon">
                <a href="mailto:joaogabrielferr@gmail.com" target={"_blank"}>
                  <i className="far fa-envelope"></i>
                </a>
              </div>
            </div>

            <div id="greeting">
              <div id="nome">
                <div>
                  <p> &nbsp;Olá, meu nome é</p>
                </div>
                <div>
                  <h1>
                    João Gabriel
                    <span style={{ fontFamily: "Open Sans" }}>,</span>
                  </h1>
                </div>
                <div id="subtitle-1">
                  <h3>Desenvolvedor de software e</h3>
                </div>
                <div id="subtitle-2">
                  <h3>acadêmico de Ciência da Computação.</h3>
                </div>
                <div id="sobre">
                  <p>
                    <br />
                    Me interessei por desenvolvimento de software desde que
                    iniciei minha graduação. Desde então, já desenvolvi diversos
                    projetos, tanto pessoais quanto para o curso utilizando
                    linguagens como Python, C++, Javascript e Java. Atualmente
                    tenho me interessado muito em desenvolvimento web,
                    desenvolvendo alguns projetos utilizando tecnologias como
                    ReactJs e NodeJs. Além de desenvolvimento, também gosto de
                    programação competitiva e machine learning.
                  </p>
                </div>
              </div>

              <div id="botoes">
                <div className="botao" id="curriculo">
                  <a href={pdf} target={"_blank"}>
                    Currículo
                  </a>
                </div>
                <div className="botao" id="projetos-2">
                  <a href="#projetos">
                    Projetos <i className="fas fa-arrow-down seta"></i>
                  </a>
                </div>
                <div className="botao" id="contato">
                  <a id="email">
                    <i className="far fa-envelope"></i>{" "}
                    joaogabrielferr@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Greetings
