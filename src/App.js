import "./App.css";
import { useEffect, useRef, useState } from "react";
import pdf from "./Curriculo_JoaoGabrielFerreira.pdf";
import bst from "./bstimage.PNG";
import linkedlist from "./linkedlistimage.PNG";
import stackimage from "./stackimage.PNG";
import taskis from "./taskis.PNG";
import taskis1 from "./taskis1.PNG";
import taskis2 from "./taskis2.PNG";
import taskis3 from "./taskis3.PNG";
import taskis4 from "./taskis4.PNG";
import taskis5 from "./taskis5.PNG";
import locomoc1 from "./locomoc1.PNG";
import locomoc2 from "./locomoc2.PNG";
import locomoc3 from "./locomoc3.PNG";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Projeto from "./Componentes/Projeto";
import Greetings from "./Componentes/Greetings";

function App() {
  const [loaded, setLoaded] = useState(false);
  const ANIMATION_TIME = 1000;
  const abre = "{";
  const fecha = "}";
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
    svg.current.style.backgroundColor = "#111c5c";
    svg.current.style.borderRadius = "0.3vw";
    svg.current.style.width = "99vw";
    svg.current.style.height = "99vh";
    let textoroot = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    textoroot.setAttributeNS(null, "x", `50`);
    textoroot.setAttributeNS(null, "y", `45`);
    textoroot.setAttributeNS(
      null,
      "style",
      "text-anchor:middle; fill:#a8a8a8 ;font-size:0.3vw; font-weight:bold; font-family:Source Code Pro; dy=.3em"
    );
    textoroot.textContent = `{JG}`;
    textoroot.setAttribute("id", "texto-svg");

    svg.current.appendChild(textoroot);

    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loaded === false ? (
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
              <h2>
                {abre}JG{fecha}
              </h2>
              <p>joaogabrielferr@gmail.com</p>
            </div>
          </div>

          <Greetings></Greetings>

          <div id="projetos">
            <div id="titulo">Projetos</div>

            <div className="vertical-1vh"></div>

            <div id="inner-projetos">
              <Projeto
                titulo={"Visualizador de Estruturas de Dados"}
                stack={"ReactJs - HTML5 - CSS3 - Scalable Vector Graphics"}
                bulletPoints={[
                  " Ferramenta online para visualizar as operações das principais estruturas de dados com o objetivo de facilitar o aprendizado delas.",
                  "O principal objetivo é visualizar como as operações modificam a estrutura de dados, mantendo suas propriedades.",
                  "Todas as operações são visualizadas com animações, que foram criadas com Scalable Vector Graphics e CSS3. A aplicação foi criada com ReactJs.",
                  "Foram implementadas Árvore de Busca Binária, Lista Encadiada e Pilha. Estão em desenvolvimento Fila e Heap.",
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
                titulo={"Gerenciador de Tarefas Full Stack"}
                stack={"ReactJs - Node.js - Express.js - MongoDB"}
                bulletPoints={[
                  " Aplicação full stack com o objetivo de aprender todo o processo de criação de uma aplicação web, desde a concepção até o deploy.",
                  "Foi criada uma API REST com Node.js e Express.js para fornecer os dados para o front-end, que foi desenvolvido com React. Os dados foram persistidos com o banco de dados MongoDB.",
                  "Também foi desenvolvida uma autenticação, onde é necessário cadastrar um nome de usuário e senha para acessar o sistema.",
                  "É possível criar, editar e excluir tarefas, ordenar as tarefas por prioridade e ordem alfabética, e marcar uma tarefa como concluida. As tarefas ficam dividas em seções: Todas, Hoje, Amanhã, Atrasadas, Concluidas.",
                ]}
                items={imagensTaskis}
                website={"https://taskis.herokuapp.com/"}
                github={"https://github.com/joaogabrielferr/taskis"}
                msgAdicional={
                  "(O deploy foi feito no Heroku, o primeiro carregamento pode durar até 15 segundos)"
                }
              ></Projeto>

              <div className="vertical-5vh"></div>

              <Projeto
                titulo={"Aplicação Web para locação de Veículos"}
                stack={"ReactJs - Node.js - Express.js - MongoDB"}
                bulletPoints={[
                  " Aplicação como trabalho final para a disciplina de Análise e Projeto de Sistemas na minha universidade.",
                  "Devido a pandemia, a disciplina foi ministrada no formato EAD com duração de 3 meses, onde 2 meses foram reservados para a construção dos documentos referentes ao sistema. Por esse motivo algumas funcionalidades como o Chat não foram implementadas completamente.  ",
                  "É possível se cadastrar, anunciar um veículo, gerenciar seus anuncios, realizar uma solicitação de aluguel de veículos e aceitar solicitações feitas para seus anuncios. O chat funciona parcialmente, através de chamadas a API, ao invés de troca de mensagens em tempo real.",
                ]}
                items={imagensLocoMoc}
                website={"https://locomoc.herokuapp.com/"}
                github={"https://github.com/joaogabrielferr/locomocClientV3"}
                msgAdicional={
                  "(O deploy foi feito no Heroku, o primeiro carregamento pode durar até 15 segundos)"
                }
              ></Projeto>
            </div>
          </div>

          <div style={{ fontSize: "1vw" }}>João Gabriel Ferreira</div>
        </>
      )}
    </div>
  );
}

export default App;
