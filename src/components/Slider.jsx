import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'

const Container = styled.div`
    width:100%;
    height: 80vh;
    display: flex;
    background-color: coral;
    position: relative;
    opacity: 0.45;
    overflow: hidden;
`
const Prev_Arrow = styled.div`
    opacity:0;
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
    opacity:0;
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
    height: 100vh;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
    height: 80%;
    background-color: green;
    flex: 1;
`
const InfoContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    height: 80%;
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
`


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
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

                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>CC</Button>

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
