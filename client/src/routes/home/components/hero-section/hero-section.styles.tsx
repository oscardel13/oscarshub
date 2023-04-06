import styled from 'styled-components'; 
import profilePicture from '../../../../assets/mountains.jpg'

export const Banner = styled.div`
    width: 100%;
    height: 250px;
    // background-image: url(${profilePicture});
    background-image: url("https://static.vecteezy.com/system/resources/previews/002/099/717/original/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg");
    // border-style: solid;
    // border-color: coral;
    -webkit-transition: 0.55s ease-in-out;
    transition: 0.55s ease-in-out;
    background-size: cover;
    background-position: center;
    position: relative;
    -webkit-box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    z-index: 999;
    text-align: center;
    color: midnightblue;
    opacity: 0.6;
    
`

export const BannerTextBox = styled.div`
    padding-top: 100px;

    h1{
        font-weight: bold;
        
    }
`