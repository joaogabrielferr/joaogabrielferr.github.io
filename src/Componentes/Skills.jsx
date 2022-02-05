

const Skills = () =>{

    return (
        <div className = "Skills">
            <div id="titulo"><i className="fas fa-wrench"></i> Skills <span className = "titulo-horizontal"></span> </div>
            <div className="vertical-1vh"></div>
            <p>The darker the skill color, the better I am with it</p>
            <div className = "skill-row">
            <p className="skill rgood"> C++</p>
            <p className="skill rgood"> <i className="fab fa-js-square"></i> &nbsp;&nbsp;Javascript</p>
            <p className="skill good"><i className="fab fa-python"></i> &nbsp;&nbsp;Python</p>
            <p className="skill ok"><i className="fab fa-java"></i> &nbsp;&nbsp;Java</p>
            </div>
            <div className = "skill-row">
            <p className="skill good"><i className="fab fa-react"></i>&nbsp;&nbsp; React</p>
            <p className="skill ok">Typescript</p>
            <p className="skill good"><i className="fab fa-html5"></i>&nbsp;&nbsp; HTML5</p>
            <p className="skill good"><i className="fab fa-css3-alt"></i>&nbsp;&nbsp; CSS3</p>
            <p className="skill good"> API's REST</p>
            </div>
            <div className = "skill-row">
            <p className="skill good"><i className="fas fa-fighter-jet"></i>&nbsp;&nbsp;Agile (SCRUM)</p>
            <p className="skill ok"><i className="fab fa-node"></i>&nbsp;&nbsp;Node.js</p>
            <p className="skill ok"><i className="fab fa-git-square"></i>&nbsp;&nbsp; GIT</p>
            </div>
            <div className = "skill-row">
            <p className="skill good"><i className="fas fa-database"></i>&nbsp;&nbsp;SQL</p>
            <p className="skill good"><i className="fas fa-database"></i>&nbsp;&nbsp;MySQL</p>
            <p className="skill rgood"><i className="fas fa-code"></i>&nbsp; Algorithms</p>
            <p className="skill rgood"><i className="fas fa-project-diagram"></i>&nbsp;&nbsp; Data Structures</p>
            <p className="skill good"><i className="fas fa-cubes"></i>&nbsp;&nbsp; OOP</p>
            </div>
        </div>
    )

}

export default Skills;
