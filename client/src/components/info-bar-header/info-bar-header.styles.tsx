import styled from "styled-components";

export const InfoBarHeaderDiv = styled.div`
    left: 0;
    top: 0;
    z-index: 99999;
    width: 100%;
    padding: 30px;
    height: 235px;
    background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);
    -webkit-box-shadow: 0 1px 4px 0 rgba(15, 15, 20, 0.1);
    box-shadow: 0 1px 4px 0 rgba(15, 15, 20, 0.1);
    color: aliceblue;

    .name, .description{
        text-align: center;
    }
    
    .description{
        color: #8c8c8e;
    }
`

export const InfoBarHeaderAvatar = styled.div`
    width: 90px;
    height: 90px;
    margin: 0 auto;
    border-radius: 50%;
    position: relative;
    margin-bottom: 15px;

    img{
        position: absolute;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: 50%;
        z-index: 0;
    }
`

export const InfoBarHeaderCloseButtonContainer = styled.a`
    color: #8c8c8e;
    position: absolute;
    left: 90%;
    @media only screen and (min-width: 993px){
        display: none;
    }
`