import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  margin: auto;
  width: 85vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 1300px;
  max-height: 800px;
  border-radius: 8px;

  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  ${mobile({
    flexDirection: "column",
    maxWidth: "320px",
    height: "82vh",
    maxHeight: "800px",
  })}
`;

const ImageContainer = styled.div`
  flex: 1;
  background-color: coral;
  min-height:300px;
  ${mobile({
    width: "100%",
    height: "20%",
    backgroundColor: "coral",
  })}
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://sv1.picz.in.th/images/2022/11/17/GSwAkk.jpg")
    center;
`;

const Image = styled.img`
  position: relative;
  margin: auto;
  
  width: ${(props) => props.width}%;
  max-width: 100%;
  max-width: ${(props) => props.maxWidth};
  ${mobile({
    height: "auto",
  })}
`;

const Detail = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const Title = styled.h1`
  position: relative;
  top: ${(props) => props.top};
  font-size: 40px;

  font-size: ${(props) => props.fz};
  color: black;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  text-align: ${(props) => props.textalign};
  text-align: center;
  ${mobile({
    fontSize: "26px",
    marginTop: "50px",
  })}
`;
const Desc = styled.p`
  text-align: ${(props) => props.textalign};
  margin: auto;

  font-size: 20px;

  text-align: center;

  font-size: ${(props) => props.fz};
  padding-bottom: 10px;
  width: 80%;
  width: ${(props) => props.width}%;
  ${mobile({
    fontSize: "15px",
  })}
`;

const About = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          {/* <Image src="https://sv1.picz.in.th/images/2022/11/17/GSwAkk.jpg" /> */}
        </ImageContainer>
        <Detail>
          <Title>About Us</Title>
          <Desc fz="20px">
            กลุ่ม 4QU เป็นกลุ่มที่เกิดขึ้นเพื่อจัดทำงานในวิชา Software
            Architecture and Design 
          </Desc>
          {/* <Desc fz="16px">1. 63010592 ปัณณวรรธ สุวรรณพงศ์</Desc>
          <Desc fz="16px">2. 63010592 ปัณณวรรธ สุวรรณพงศ์</Desc>
          <Desc fz="16px">3. 63010592 ปัณณวรรธ สุวรรณพงศ์</Desc>
          <Desc fz="16px">4. 63010592 ปัณณวรรธ สุวรรณพงศ์</Desc>
          <Desc fz="16px">5. 63010592 ปัณณวรรธ สุวรรณพงศ์</Desc>
          <Desc fz="16px">6. 63010592 ปัณณวรรธ สุวรรณพงศ์</Desc>
          <Desc fz="16px">7. 63010592 ปัณณวรรธ สุวรรณพงศ์</Desc>
          <Desc fz="16px">8. 63010592 ปัณณวรรธ สุวรรณพงศ์</Desc>
          <Desc fz="16px">9. 63010592 ปัณณวรรธ สุวรรณพงศ์</Desc>
          <Desc fz="16px">10. 63010592 ปัณณวรรธ สุวรรณพงศ์</Desc> */}
        </Detail>
      </Wrapper>
    </Container>
  );
};

export default About;
