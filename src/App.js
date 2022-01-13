import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import pdf from "./Curriculo_JoaoGabrielFerreira.pdf";
import imgds from './bstimage.PNG';
import taskis from './taskis.PNG'

function App() {
  const [loaded, setLoaded] = useState(false);
  const ANIMATION_TIME = 1000;
  const abre = "{";
  const fecha = "}";
  const [showNavbar,setShowNavbar] = useState(false);

  const svg = useRef();

  useEffect(() => {
    // svg.current.style.backgroundColor = "#111";
    // svg.current.style.borderRadius = "0.3vw";
    // svg.current.style.width = "99vw";
    // svg.current.style.height = "99vh";

    // let linha = document.createElementNS("http://www.w3.org/2000/svg", "line");
    // linha.setAttribute("x1", `30`);
    // linha.setAttribute("y1", `40`);
    // linha.setAttribute("x2", `30`);
    // linha.setAttribute("y2", `45`);
    // linha.style.stroke = "#eee";
    // linha.style.strokeWidth = "0.01vw";

    // svg.current.append(linha);

    // linha = document.createElementNS("http://www.w3.org/2000/svg", "line");
    // linha.setAttribute("x1", `30`);
    // linha.setAttribute("y1", `45`);
    // linha.setAttribute("x2", `60`);
    // linha.setAttribute("y2", `45`);
    // linha.style.stroke = "#eee";
    // linha.style.strokeWidth = "0.01vw";

    // svg.current.append(linha);

    // linha = document.createElementNS("http://www.w3.org/2000/svg", "line");
    // linha.setAttribute("x1", `60`);
    // linha.setAttribute("y1", `45`);
    // linha.setAttribute("x2", `60`);
    // linha.setAttribute("y2", `40`);
    // linha.style.stroke = "#eee";
    // linha.style.strokeWidth = "0.01vw";

    // svg.current.append(linha);

    // linha = document.createElementNS("http://www.w3.org/2000/svg", "line");
    // linha.setAttribute("x1", `60`);
    // linha.setAttribute("y1", `40`);
    // linha.setAttribute("x2", `30`);
    // linha.setAttribute("y2", `40`);
    // linha.style.stroke = "#eee";
    // linha.style.strokeWidth = "0.01vw";

    // svg.current.append(linha);

    // linha = document.createElementNS("http://www.w3.org/2000/svg", "line");
    // linha.setAttribute("x1", `31`);
    // linha.setAttribute("y1", `42.5`);
    // linha.setAttribute("x2", `32`);
    // linha.setAttribute("y2", `42.5`);
    // linha.style.stroke = "#eee";
    // linha.style.strokeWidth = "0.2vw";
    // linha.setAttribute("id","loader");

    // svg.current.append(linha);

    // const linha2 = document.getElementById("loader");
    // linha2.setAttribute("x2","59")

    // setTimeout(() => {
    //     setLoaded(true);
    // }, 1150);

  
    window.addEventListener("scroll",()=>{

      if(window.scrollY > 100)
      {
        setShowNavbar(true);
      }else
      {
        setShowNavbar(false);
      }

      const secoes = document.querySelectorAll(".reveal");
      for(let i = 0;i<secoes.length;i++)
      {
        let windowHeight = window.innerHeight;
        let top = secoes[i].getBoundingClientRect().top;
        let ponto = 150;
  
        if(top < windowHeight - ponto)
        {
          secoes[i].classList.add("active");
          
        }else
        {
          secoes[i].classList.remove("active");
        }
      }

    

    })

  }, []);

  return (
    <div className="App">
      {loaded === true ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg"
          viewBox="0 0 100 100"
          ref={svg}
        ></svg>
      ) : (
        <>
          <div id="header">
            <div id="inner-header">
              <a href=""><div id = "logo">{abre}JG{fecha}</div></a>
            &nbsp;

            <div id="nav-top">
            <div className="nav-item-top"><a href="#sobre">Sobre</a></div>
            <div className="nav-item-top"><a href="#skills">Skills</a></div>
            <div className="nav-item-top"><a href="#projetos">Projetos</a></div>
            <div className="nav-item-top"><a href="#contato">Contato</a></div>
            </div>

              {/* <div style={{display:"flex"}}>
            <div className='social-hello'><a href="https://github.com/joaogabrielferr" target={"_blank"}><i className="fab fa-github"></i>&nbsp;</a></div>
            <div className='social-hello'><a href="https://www.linkedin.com/in/joaogabrielferr/" target={"_blank"}><i className="fab fa-linkedin"></i>&nbsp;</a></div>
            <div className='social-hello'><a href="mailto:joaogabrielferr@gmail.com" target={"_blank"}><i class="far fa-envelope"></i>&nbsp;joaogabrielferr@gmail.com</a></div> 
            </div> */}
            </div>
          </div>

          <div id="hello">
            <p></p>
            <div>
              <p>&nbsp;Olá,meu nome é</p>
              <h1>João Gabriel,</h1>
              <h3>
                desenvolvedor de software e acadêmico de Ciência da Computação.
              </h3>
              <div id="info">
                <p></p>
                Gosto de desenvolvimento de software em geral, programação
                competitiva e machine learning.
                <br />
                <br />
                <br />
                <div>
                  {" "}
                  <a href={pdf} id="curriculo-hello" target={"_blank"}>
                    Visualizar Currículo
                  </a>
                </div>
                <br />
                <br />
              </div>
            </div>
            <p></p>
            <p></p>
          </div>

          <div id="sociais">
            <p></p>
            <div className="nav-item">
              <a href="https://github.com/joaogabrielferr" target={"_blank"}>
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="nav-item">
              <a
                href="https://www.linkedin.com/in/joaogabrielferr/"
                target={"_blank"}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="nav-item">
              <a href="mailto:joaogabrielferr@gmail.com" target={"_blank"}>
                <i className="far fa-envelope"></i>
              </a>
            </div>
            {/* <div className="nav-item"><a href="#sobre">Sobre</a></div>
            <div className="nav-item"><a href="#skills">Skills</a></div>
            <div className="nav-item"><a href="#projetos">Projetos</a></div>
            <div className="nav-item"><a href="#projetos">Contato</a></div> */}
          </div>

          
          { showNavbar === true ?
          <div id="nav">
                <a href="#sobre"><h1>Sobre</h1></a>&nbsp;&nbsp;
                <a href="#skills"><h1>Skills</h1></a>&nbsp;&nbsp;
                <a href="#projetos"><h1>Projetos</h1></a>&nbsp;&nbsp;
                <a href="#contato"><h1>Contato</h1></a>&nbsp;&nbsp;
          </div>
          :""
          }
          <div id="container">
            <div id="inner-container">
              <div id = "sobre" className="vertical-space-id"></div>
              <div className="section reveal">
                <h1 className="section-title">.Sobre</h1>
                <p>
                  Olá, me chamo João Gabriel Ferreira. Estou estudando Ciência
                  da Computação no Instituto Federal de Educação, Ciência e
                  Tecnologia do Norte de Minas Gerais. Desde que entrei no curso
                  me interessei por desenvolvimento de software, tendo
                  desenvolvido projetos em C++ e Python tanto pessoais
                  quanto para as disciplinas do curso. Após um tempo no curso, comecei a 
                  pesquisar e aprender sobre desenvolvimento web, onde aprendi Javascript.
                  Desde então, ja utilizei várias tecnologias diferentes em projetos pessoas,
                  como React e NodeJs.
                  <br/>
                  Também gosto de
                  programação competitiva, onde objetivo é resolver em maratonas
                  de programação o maior número possível de problemas de
                  programação e matemática dadas restrições específicas para
                  cada problema.
                </p>

                <p className="social-sobre">
                  <a
                    href="https://github.com/joaogabrielferr"
                    target={"_blank"}
                  >
                    <i className="fab fa-github"></i>
                    &nbsp;github.com/joaogabrielferr
                  </a>
                </p>
                <p className="social-sobre">
                  <a
                    href="https://www.linkedin.com/in/joaogabrielferr/"
                    target={"_blank"}
                  >
                    <i className="fab fa-linkedin"></i>
                    &nbsp;linkedin.com/in/joaogabrielferr
                  </a>
                </p>
                <p className="social-sobre">
                  <a href="mailto:joaogabrielferr@gmail.com">joaogabrielferr@gmail.com</a>
                </p>
                <br/>
                <p>
                  <a href={pdf} target={"_blank"} id="curriculo">
                    Visualizar Currículo
                  </a>
                </p>
              </div>


              {/*Troca seção*/}

              <div className="vertical-space"></div>

              <div className="section reveal" id="skills">
                <h1 className="section-title">.Skills</h1>
                <p>
                  Linguagens de Programação:{" "}
                  <span className="skill">Javascript</span>{" "}
                  <span className="skill">C++</span>{" "}
                  <span className="skill">Python</span>
                </p>
                <p>
                  <p>&nbsp;</p>
                  Desenvolvimento Web:  <span className="skill">HTML</span>{" "}
                  <span className="skill">CSS</span>{" "}
                  <span className="skill">API's REST</span>
                </p>
                <p>
                <p>&nbsp;</p>
                  Banco de Dados:{" "} <span className="skill">SQL</span>{" "}
                  <span className="skill">mySQL</span>
                </p>
                <p>
                <p>&nbsp;</p>
                  Ciência da Computação:{" "} 
                  <span className="skill">
                    Projeto e Análise de Algoritmos
                  </span>{" "}
                  <span className="skill">Estruturas de Dados</span>{" "}
                  <span className="skill">POO</span>
                </p>
                <p>
                <p>&nbsp;</p>
                  Outros: {" "}
                  <span className="skill">
                    Conhecimento Acadêmico em Métodos Ágeis(SCRUM)
                  </span>
                </p>
                <p>
                  <br/>
                  <br/>
                  Também tenho familiaridade com:
                  <br />
                  
                  <br /> 
                  
                  <span className="skill">Java</span>{" "}
                  <span className="skill">ReactJs</span>{" "}
                  <span className="skill">Node.js</span>{" "}
                  <span className="skill">Express.js</span>{" "}
                  <span className="skill">MongoDB</span>{" "}
                  <span className="skill">GIT</span>
                  
                </p>
              </div>

              <div className="vertical-space"></div>

              <div className="section reveal" id="projetos">
            
              <h1 className="section-title">.Projetos</h1>

                    <div className="projeto-container">
                    <h2> <a className = "subtitle" href="https://joaogabrielferr.github.io/data-structures-visualizer/" target={"_blank"}>Visualizador de Estruturas de Dados</a></h2>
                    <div className="texto">

                      <p>Ferramenta online para visualizar as operações das principais estruturas de dados com o objetivo
                      de facilitar o aprendizado delas. Todas as operações são visualizadas com animações, que foram criadas
                      com Scalable Vector Graphics e CSS3. Foram implementadas Árvore de Busca Binária, Lista Encadiada e Pilha.
                      Estão em desenvolvimento Fila e Heap.
                      </p>

                      <p style = {{color : "#69b9c4"}}>React &nbsp; &nbsp; &nbsp;HTML5 &nbsp; &nbsp; &nbsp;CSS3 &nbsp; &nbsp; &nbsp;Scalable Vector Graphics</p>
                      
                      <p><a href="https://joaogabrielferr.github.io/data-structures-visualizer/" className="subtitle" target={"_blank"}>Website <i className="fas fa-link"></i></a></p>
                      <p><a href="https://github.com/joaogabrielferr/data-structures-visualizer" className="subtitle" target={"_blank"}>Repositório no Github <i className="fab fa-github"></i></a></p>

                      </div>

                        <div className="img">
                            <img src={imgds} alt="" />
                        </div>


                    </div>

                    <div className="vertical-space-id"></div>

                    <div className="projeto-container">
                    <h2> <a className = "subtitle" href="https://taskis.herokuapp.com/" target={"_blank"}>Gerenciador de tarefas Full Stack</a></h2>
                    <div className="texto">

                      <p>
                        Aplicação full stack com o objetivo de aprender todo o processo de criação de uma aplicação web, desde a concepção até o deploy.
                        Foi criada uma API REST com Node.js e Express.js para fornecer os dados para o front-end, que foi desenvolvido com React. Os dados 
                        foram persistidos com o banco de dados MongoDB. Também foi desenvolvida uma autenticação, onde é necessário cadastrar um 
                        nome de usuário e senha para acessar o sistema. É possível criar, editar e excluir tarefas, ordenar as tarefas por prioridade e 
                        ordem alfabética, e marcar uma tarefa como concluida. As tarefas ficam dividas em seções: Todas, Hoje, Amanhã, Atrasadas, Concluidas. 
                      </p>

                      <p style = {{color : "#69b9c4"}}>React &nbsp; &nbsp; &nbsp;Node.js &nbsp; &nbsp; &nbsp;Express.js &nbsp; &nbsp; &nbsp;MongoDB</p>
                      
                      <p><a href="https://taskis.herokuapp.com/" className="subtitle" target={"_blank"}>Website (o deploy foi feito no Heroku, o primeiro carregamento pode demorar até 15 segundos.) <i className="fas fa-link"></i></a></p>
                      <p><a href="https://github.com/joaogabrielferr/taskis" className="subtitle" target={"_blank"}>Repositório no Github <i className="fab fa-github"></i></a></p>

                      </div>

                        <div className="img">
                            <img src={taskis} alt="" />
                        </div>


                    </div>


              </div>

              <div className="vertical-space"></div>

              <div className="section reveal" id = "contato">
              <h1 className="section-title">.Contato</h1>

                <p> </p>
                Entre em contato comigo por email e responderei o mais rápido possível.
                <p>{"    "}</p>
                <a href = "mailto:joaogabrielferr@gmail.com" id = "diga-ola">Diga olá</a>
              </div>
              


              <div className="vertical-space"></div>


            </div>
          </div>
          <div id="footer">João Gabriel Ferreira</div>
        </>
      )}
    </div>
  );
}

export default App;
