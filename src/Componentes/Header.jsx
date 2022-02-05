
const Header = () =>{

    const abre = "{";
    const fecha = "}";

    return(
        <div className="Header">
          <div id="header">
            <div id="inner-header">
              <h2>
                {abre}JG{fecha}
              </h2>
              <div className = "header-navbar">
               <a href="#projetos"><i className="fas fa-tasks"></i> Projects</a>
               <a href="#skills"><i className="fas fa-wrench"></i> Skills</a>
               <a href="#about"><i className="far fa-address-card"></i> About</a>
               <a href="#contact"><i className="fas fa-file-signature"></i> Contact</a>
              {/* <p>joaogabrielferr@gmail.com</p> */}
              </div>
              
            </div>
          </div>
        </div>
    )

}

export default Header;