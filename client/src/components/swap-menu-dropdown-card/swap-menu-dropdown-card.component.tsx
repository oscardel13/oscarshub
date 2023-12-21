import Col from 'react-bootstrap/Col'
import { SwapMenuCard, SwapMenuCardBody, SwapMenuRow, SwapMenuCardImg } from "./swap-menu-dropdown-card.styles"


const SwapMenuDropDownCard = (props: {img: string, title: string, whiteBackground: boolean}) => {
    const { img, title, whiteBackground } = props
    return (
        <SwapMenuCard>
            <SwapMenuRow>
                <Col xs={5}>
                    {
                        whiteBackground ? (
                            <SwapMenuCardImg src={img}/>
                        ):(
                            <SwapMenuCard.Img src={img} />
                        )
                    }
                    
                </Col>
                <Col xs={7}>
                    <SwapMenuCardBody>
                        <h6>{title}</h6>
                    </SwapMenuCardBody>
                </Col>
            </SwapMenuRow>
        </SwapMenuCard>
    )
}

export default SwapMenuDropDownCard