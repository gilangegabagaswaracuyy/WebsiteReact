import profilePicture from '../assets/profile-picture.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import '../styles/Header.css'
function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture}/>
            <h3>Gilang Ega Bagaswara</h3>
            <p>Ai Anthusiast - Gamers - Frontend Developer</p>
            <div className='socialMedia'>
                <a href=''><FaLinkedin /></a>
                <a href=''><FaGithub /></a>
                <a href=''><FaInstagram /></a>
                <a href=''><FaYoutube /></a>
            </div>

        </div>
    </header>
  )
}

export default Header