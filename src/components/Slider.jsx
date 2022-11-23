import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

import adApp from "../images/advertise_app.png";
import { mobile, mobile_l, tablet, tablet_s } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 50vw;
  max-height: 500px;
  display: flex;
  background-color: coral;
  position: relative;
  overflow: hidden;
  ${tablet_s({
    display: "",
  })}
  ${mobile_l({
    height: "55vw",
  })}
${mobile({
    height: "75vw",
  })}
`;
const Prev_Arrow = styled.div`
  opacity: 0.25;
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
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
  ${tablet_s({
    opacity: "0.15",

  })}
`;
const Next_Arrow = styled.div`
  opacity: 0.25;
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
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
  ${tablet_s({
    opacity: "0.15",

  })}
`;

const Prev_Slick_Arrow = styled.div`
  position: absolute;
  z-index: 3;
  cursor: pointer;
  width: 10%;
  min-width: 90px;

  max-width: 200px;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  &:hover ${Prev_Arrow} {
    opacity: 1;
  }
`;

const Next_Slick_Arrow = styled.div`
  position: absolute;
  z-index: 3;
  cursor: pointer;
  width: 10%;
  min-width: 90px;
  max-width: 200px;
  height: 100%;
  right: 0;
  top: 0;
  bottom: 0;
  &:hover ${Next_Arrow} {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.75s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  background-color: #${(props) => props.bg};
  width: 50%;
  flex: 1;
  align-items: center;
  margin-top: 25px;
  justify-content: center;
  ${mobile_l({
    marginTop: "20vw",
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 90%;
  width:100%;

  display: block;
  margin-left: auto;
  margin-right: auto;

  ${tablet_s({
    height: "80%",
  })}
  ${mobile_l({
    height: "60%",
  })}
${mobile({
    height: "50%",
    marginTop: "25px",
  })}
`;

const Title = styled.h1`
  font-size: 50px;
  ${tablet_s({
    fontSize: "25px",
  })}
  ${mobile_l({
    fontSize: "20px",
  })}
  text-align:center;
  width:100%;
`;
const Desc = styled.p`
  margin: 30px 30px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 3px;
  width: 80%;

  text-align: center;
  ${tablet_s({
    width: "70%",
    marginLeft:"20px",

  })}
  ${mobile_l({
    fontSize: "14px",
    margin: "15px 40px",

  })}
${mobile({
    fontSize: "12px",
    letterSpacing: "0px",
    margin: "15px 20px",

  })}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  ${mobile_l({
    padding: "5px",
    fontSize: "14px",
  })}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Prev_Slick_Arrow onClick={() => handleClick("left")}>
        <Prev_Arrow>
          <ArrowBackIosNewIcon />
        </Prev_Arrow>
      </Prev_Slick_Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            {console.log(item.img)}

            <ImgContainer bg={item.bg}>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              {/* <Button>ดูเพิ่มเติม</Button> */}
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Next_Slick_Arrow onClick={() => handleClick("right")}>
        <Next_Arrow>
          <ArrowForwardIosIcon />
        </Next_Arrow>
      </Next_Slick_Arrow>
    </Container>
  );
};

export default Slider;
