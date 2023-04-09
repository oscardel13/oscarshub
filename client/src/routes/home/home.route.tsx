import HeroSection from './components/hero-section/hero-section.section';
import AboutSection from './components/about-section/about.section';
import ResumeSection from './components/resume-section/resume-section.section';
import ProjectSection from './components/project-section/project.section';

import './home.styles.css'

const Home = () =>{
    return(
        <>
            <HeroSection/>
            <AboutSection/>
            <ResumeSection/>
            <ProjectSection/>
        </>
    )
}

export default Home;