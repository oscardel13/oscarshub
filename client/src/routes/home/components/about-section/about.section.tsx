import ProfilePicture from '../../../../assets/Hattori.png'

const AboutSection = () => {
    return (
        <div className="py-5 flex flex-row flex-wrap">
            <div className="flex justify-center items-center w-full lg:w-3/6">
                <img src={ProfilePicture} className="h-96"/>
            </div>
            <div className="w-full lg:w-3/6">
                <h2>
                    About <strong>Me</strong>
                </h2>
                <p>
                Hey there! I'm Oscar, a first-generation Mexican-American software engineer. I fell in love with coding during my time at the University of Colorado Boulder, and I've been on a never-ending adventure of tech exploration ever since.
                </p>
                <p>
                I firmly believe that becoming well-versed in full-stack development, DevOps, and cloud technologies empowers me to create robust, scalable, and secure software solutions. I'm all about building my tech skills and well-being. Challenging projects, continuous learning, and self-care are my jam.
                </p>
                <p>
                Explore my world of projects, skills, and interests on my portfolio site. Thanks for stopping by – I can't wait to share my journey with you!
                </p>
            </div>
        </div>
    )
}

export default AboutSection