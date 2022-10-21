import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'

import adApp from "../images/advertise_app.png";

const Container = styled.div`
    width:100%;
    height: 70vh;
    display: flex;
    background-color: coral;
    position: relative;
    overflow: hidden;
`
const Prev_Arrow = styled.div`
    opacity:0.25;
    width:50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 30px;
    margin: auto;
    z-index: 2;
    transition: all 0.3s ease;

`;
const Next_Arrow = styled.div`
    opacity:0.25;
    width:50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 30px;
    margin: auto;
    z-index: 2;
    transition: all 0.3s ease;

`;

const Prev_Slick_Arrow = styled.div`
    position: absolute; 
    z-index: 3;
    cursor: pointer;
    width:10%;
    height: 100%;
    left:0;
    top: 0;
    bottom: 0;
    &:hover ${Prev_Arrow}{
        opacity:1;
    }



`

const Next_Slick_Arrow = styled.div`
    position: absolute;
    z-index: 3;
    cursor: pointer;
    width:10%;
    height: 100%;
    right:0;
    top: 0;
    bottom: 0;
    &:hover ${Next_Arrow}{
        opacity:1;
    }
`




const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 0.75s ease;
    transform:translateX( ${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100%;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
    height: 80%;
    background-color: #${props => props.bg};

    flex: 1;
    align-items: center;
    justify-content: center;
`
const InfoContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1)
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0)
        }

    };
    return (
        <Container>
            <Prev_Slick_Arrow onClick={() => handleClick("left")}>
                <Prev_Arrow >
                    <ArrowBackIosNewIcon />

                </Prev_Arrow>
            </Prev_Slick_Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>

                        {console.log(item.img)}

                        <ImgContainer bg={item.bg}>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>ดูเพิ่มเติม</Button>

                        </InfoContainer>

                    </Slide>
                ))}

                </Wrapper>
            <Next_Slick_Arrow onClick={() => handleClick("right")}>

                <Next_Arrow >
                    <ArrowForwardIosIcon />
                </Next_Arrow>
            </Next_Slick_Arrow>
        </Container>
    )
}

export default Slider
