import '../styles/About.css'
import { FaHtml5,FaPhp,FaCss3,FaBootstrap,FaReact,FaLaravel,FaGit,FaPython} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
function About() {
  return (
    <section id='about'>
        <div className='wrapper'>
            <h3>About</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Ad, alias.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, saepe velit, 
            blanditiis suscipit odio non architecto ratione magnam cum porro id nesciunt repudiandae optio assumenda ab ducimus. Nesciunt, 
            eligendi ullam!</p>
            <h4>Programming Language & Tools</h4>
            <div className='skills'>
                <FaHtml5 /><FaCss3 /><FaPhp /><FaPython />
                <FaBootstrap /><IoLogoJavascript />
                <FaReact /><FaLaravel /><RiTailwindCssFill /><FaGit />       
            </div>
        </div>
    </section>
  )
}

export default About