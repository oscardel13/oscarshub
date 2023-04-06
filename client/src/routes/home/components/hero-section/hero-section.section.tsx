import Figure from 'react-bootstrap/Figure';
import { Image } from 'react-bootstrap';
import profilePicture from '../../assets/cover.jpg'

import { Banner, BannerTextBox } from './hero-section.styles'

const HeroSection = () => {
    return (
        <section>
            <Banner>
                <BannerTextBox>
                    <h1>Welcome to Oscars Works</h1>
                </BannerTextBox>
            </Banner>
            {/* <Figure>
                <Figure.Image
                    width={850}
                    height={50}
                    alt="171x180"
                    src={profilePicture}
                />
            </Figure> */}
        </section>
    )
}

export default HeroSection