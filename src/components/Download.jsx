import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  background-color: #387766;
  display: flex;
  font-weight: 1200;
  padding: 50px;
`;

const Wrapper = styled.div`
  margin: auto;
  width: 85vw;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  max-width: 1300px;
  max-height: 800px;
  border-radius: 8px;

  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  ${mobile({
    flexDirection: "column",
    maxWidth: "320px",
    height: "70vh",
    maxHeight: "800px",
  })}
`;

const ImageContainer = styled.div`
  flex: 1;
  background-color: #eefce5;
  ${mobile({
    width: "100%",
    height: "50%",
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

const Button = styled.button`
    padding: 10px;
    font-size: 15px;
    cursor: pointer;
    background-color: #${(props) => props.color}};
    border: none;
    border-radius: ${(props) => props.borderRadius}};
    color: #ffffff;
    display:flex;
    width:200px;
    text-align:center;
    margin: auto;
    margin-top:20px;
    
    transition: all 0.3s ease;
    &:hover{
      background-color: #${(props) => props.hover}};

      transform: scale(1.1);
    }
    &:active{
      background-color: #ffffff;
    }

`;

const Image = styled.img`
    position: relative;
    
    display: block;
    margin:auto;
    height: auto; 
    width: ${props => props.width}%; 
    max-width: 100%; 
    max-width: ${props => props.maxWidth}; 
    max-height: 350px;
    
    ${tablet({
      padding:"20px",
    })}
   
`
const Download = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
        <Image src="https://sv1.picz.in.th/images/2022/11/17/GSK3cJ.png" />

        
        </ImageContainer>
        <Detail>
          <Title>Download</Title>
          <Desc fz="20px">สามารถ Download ได้ผ่านช่องทางด้านล่างนี้</Desc>
          <Button color="387766" hover="4b9480" borderRadius="5px">
            Google play
          </Button>

          <Button color="387766" hover="4b9480" borderRadius="5px" name="about-us">
            APK
          </Button>
        </Detail>
      </Wrapper>
    </Container>
  );
};

export default Download;
