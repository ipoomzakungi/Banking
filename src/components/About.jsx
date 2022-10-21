import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    margin-top:50px;
    margin-bottom:50px;

`


const Wrapper = styled.div`
    margin:auto;
    width: 85vw;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;    


    max-width:1300px;
    max-height:800px;
    border-radius: 8px;

    box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);


`

const ImageContainer = styled.div`
  flex:1;
  
`


const Detail = styled.div`
  flex:1;
  margin-left:10px;


`

const Title = styled.h1`
    position: relative;
    top: ${props => props.top};
    font-size: 40px;
    
    font-size: ${props => props.fz};
    color: black;
    margin-top:20px;
    margin-right:auto;
    margin-left:auto;
    text-align:${props => props.textalign};
    text-align:center;
`
const Desc = styled.p`
    text-align:${props => props.textalign};
    margin-left:${props => props.mgleft};
    margin-right:${props => props.mgright};

    font-size: 20px;
    
    font-size: ${props => props.fz};
    padding:20px;
    width: 80%;
    width: ${props => props.width}%;
`;

const About = () => {
  return (
    <Container >
      <Wrapper>
        <ImageContainer>
          
        </ImageContainer>
        <Detail>
          <Title>
             About Us
          </Title>
          <Desc fz="20px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nesciunt obcaecati saepe, neque ipsum illo voluptatem quidem quos! Voluptate magnam ducimus et aperiam consequatur sed aliquam ipsam nam autem magni.
          </Desc>
        </Detail>
      </Wrapper>
    </Container>
  )
}

export default About
