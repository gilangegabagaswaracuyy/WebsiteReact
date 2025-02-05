import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { RiNextjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { RiPhpFill } from "react-icons/ri";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


function Experience() {
  return (
    <>
    <Navbar />
        <div className="wrapper">
            <h1>Experience</h1>
        <VerticalTimeline> 

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - present"
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<RiNextjsFill />}
            
        >
            <h3 className="vertical-timeline-element-title">Front End Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">PT.Integrasia Utama</h4>
            <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<FaLaravel />}
            
        >
            <h3 className="vertical-timeline-element-title">AI Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyperparameter Tuning</h4>
            <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<FaLaravel />}
            
        >
            <h3 className="vertical-timeline-element-title">Machine Learning</h3>
            <h4 className="vertical-timeline-element-subtitle">Python</h4>
            <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<RiPhpFill />}
            
        >
            <h3 className="vertical-timeline-element-title">Basis Data</h3>
            <h4 className="vertical-timeline-element-subtitle">MySql, Database</h4>
            <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
            </VerticalTimelineElement>



            
            </VerticalTimeline>
        </div>
        <Footer />
        <ScrollToTop/>
    </>
  )
}

export default Experience