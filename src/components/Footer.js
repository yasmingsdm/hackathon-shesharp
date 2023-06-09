import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = ()=>{
    return (
    <footer className="footer">
       <p>Created by  <a href="https://github.com/yasmingsdm">Yasmin Dal Medico</a></p> 
       <div>
            <FaInstagram className="footer_icon"/>
            <FaLinkedin className="footer_icon"/>
            <FaFacebookF className="footer_icon"/>
        </div>
    </footer>
    )
}

export default Footer;