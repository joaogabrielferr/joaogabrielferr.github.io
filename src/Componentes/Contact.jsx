const Contact = () =>{

    return(
        <div className="Contact">
            <div id="titulo"><i className="fas fa-file-signature"></i> Contact <span className = "titulo-horizontal"></span> </div>
            <div className="vertical-1vh"></div>

            <div className="about-text">If you liked what you see, feel free to contact me and I
            will get back to you as soon as I can.</div>
            <div className="vertical-1vh"></div>
            <a className="button contact-button" href="mailto:joaogabrielferr@gmail.com" target = "_blank">Get in touch</a>
            <div className="vertical-5vh"></div>
            <div className="about-text">
                ...Or just copy one of the following:
                <br/>
                <br/>
                joaogabrielferr@gmail.com
                <br/>
                www.linkedin.com/in/joaogabrielferr/
                <br/>
                github.com/joaogabrielferr
            </div>

        </div>
    )
}

export default Contact;