import styled from "styled-components";

export const InfoBarSocialsDiv = styled.div`
    background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);
    height: 50px;
    left: 0;
    bottom: 0;
    position: absolute;
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;

    .hstack{
        width: 100%;
        height: 100%;
        justify-content: center;
        gap: 3rem;
    }


    @media only screen and (max-width: 1200px){
        .hstack{
            gap: 2rem;
        }
    }
    
    @media only screen and (max-width: 992px){
        .hstack{
            gap: 10rem;
        }
    }
    
    @media only screen and (max-width: 767px){
        .hstack{
            gap: 7rem;
        }
    }
    
    @media only screen and (max-width: 576px){
        .hstack{
            gap: 5rem;
        }
    }
    
    @media only screen and (max-width: 380px){
        .hstack{
            gap: 4rem;   
        }
    }
    
    svg{
        height: 50px;
        width: 25px;
        fill: white;
    }
`