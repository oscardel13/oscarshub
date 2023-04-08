
import HeroSection from './components/hero-section/hero-section.section';
import AboutSection from './components/about-section/about-section.section';
import ResumeSection from './components/resume-section/resume-section.section';

import './home.styles.css'

const Home = () =>{
    return(
        <>
            <HeroSection/>
            <AboutSection/>
            <ResumeSection/>
        </>
    )
}

export default Home;