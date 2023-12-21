import HeroSection from './components/hero-section/hero-section.section';
import AboutSection from './components/about-section/about.section';
import ResumeSection from './components/resume-section/resume-section.section';
import ProjectSection from './components/project-section/project.section';

import ContactSession from './components/contact-section/contact.section';

const Home = () =>{
    return(
        <div>
            <HeroSection/>
            <AboutSection/>
            <ResumeSection/>
            <ProjectSection/>
            <ContactSession/>
        </div>
    )
}

export default Home;