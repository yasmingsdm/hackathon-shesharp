import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = ()=>{
    return (
    <footer className="footer">
       <p>Created by  <a href="https://github.com/yasmingsdm">Yasmin Dal Medico</a> and <a href="https://github.com/vivignutz">Viviane Gnutzmann</a></p> 
       <div className="icons">
            <FaInstagram className="icon"/>
            <FaLinkedin className="icon"/>
            <FaFacebookF className="icon"/>
        </div>
    </footer>
    )
}

export default Footer;