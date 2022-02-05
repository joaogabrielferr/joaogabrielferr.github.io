const About = () =>{

    return(
        <div className = "About">
            <div id="titulo"><i className="far fa-address-card"></i> About <span className = "titulo-horizontal"></span> </div>
            <div className="vertical-1vh"></div>
            <div className = "about-text">Hi, my name is João Gabriel. I'm currently pursuing a bachelors degree of <span className="underline">Computer Science</span> at Federal
                Institute of Education, Science and Tecnology of Northern Minas Gerais, in Brazil. I got into development
                way bofore i started my graduation, when I learned about <span className="underline">game development</span>. I Lost a lot of time during
                my teenage years playing around with game engines such as Unity and Godot. In college, i took classes  
                like <span className="underline">Software Engineering</span>, <span className="underline">Databases</span>, <span className="underline">Web Development</span> and <span className="underline">Object Oriented Programming</span>,
                 that helped me understand how 
                real software are made. I have been focusing on web developement recently, as I have been using web technologies
                to build my last projects. I'm currently more inclined to <span className="underline">front-end</span>, using <span className="underline">React</span>, but I'm also interested in back-end,
                and I have written some server code to my projects using Node.js.
            </div>

        </div>
    )
}

export default About;

