import React from 'react'
import styled, { keyframes } from 'styled-components'
import { mobile, tablet, tablet_s } from '../responsive'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'

const Container = styled.div`
    flex:1;
    position: relative;
    background-color:#F3F0EA;
`


const Wrapper = styled.div`
    margin:auto;
    padding: 80px 20px 30px 30px;
    width: 85vw;
    
    justify-content: center;    

    max-width:1300px;



`
const Content = styled.div`
    position: relative;

    height: 100%;
    width: 45%;

    margin-left:${props => props.mgleft};
    
    border-radius: 8px;
    box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    background-color: #D0D9BB;
    border-style: ${props => props.border};
    box-shadow: ${props => props.shadow};
    background-color: ${props => props.bg};


    max-height:290px;
    ${tablet_s({
    height: "50%",
    width: "100%",
    margin: "0",


})}
`
const ContentPack = styled.div`
    position: relative;
    height: 40vh;
    width: 80%;
    background-color:white;
    margin-bottom: 20px;
    margin-right: ${props => props.mgright};
    margin-left: ${props => props.mgleft};

    display:flex;
    border-radius: 8px;
    
    box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    
    max-width:800px;
    min-width:800px;

    max-height:350px;


    
    ${tablet_s({
    height: "80vh",
    maxHeight: "581px",
    minHeight: "581px",
    maxWidth: "400px",
    minWidth: "400px",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",


})}

${mobile({
    maxHeight: "450px",
    minHeight: "450px",
    
    maxWidth: "250px",
    minWidth: "250px",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",


})}

`


const ImageContainer = styled.div`
    position: ${props => props.position};
    top:0;
    bottom:0;
    left:${props => props.direction === "left" && "0px"};
    right:${props => props.direction === "right" && "-20px"};

    background-color: #387766;
    margin-right: 20px;
    height: 100%;
    width: 50%;
    border-radius: 8px;

    
    max-height:350px;

    ${tablet_s({
    position: "relative",
    height: "50%",
    width: "100%",
    margin: "0",
    left: "0",


})}
${mobile({
    position: "relative",
    height: "50%",
    width: "100%",
    margin: "0",
    left: "0",

})}
    
`

const Image = styled.img`
    position: relative;
    
    display: block;
    margin:auto;
    height: auto; 
    width: ${props => props.width}%; 
    max-width: 100%; 
    max-width: ${props => props.maxWidth}; 

    ${tablet({
        maxHeight: "300px",

    
    })}
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

    
    ${mobile({
        fontSize: "25px",
    
    })}
`
const Desc = styled.p`
    text-align:${props => props.textalign};
    margin-left:${props => props.mgleft};
    margin-right:${props => props.mgright};
    font-size:22px;
    font-weight:800px;
    padding:20px;
    width: 80%;
    width: ${props => props.width}%;

    ${mobile({
        fontSize: "18px",
    
    })}    

`;

const Button = styled.button`
    position: absolute;
    right: ${props => props.right};
    bottom: ${props => props.bottom};



    padding: 10px;
    font-size: 15px;
    cursor: pointer;
    background-color: #${props => props.color}};
    border: none;
    border-radius: ${props => props.borderRadius}};
    color: #ffffff;
    
    margin-left:10px;

    transition: all 0.3s ease;
    &:hover{
      background-color: #${props => props.hover}};
      transform: scale(1.1);
  }
  &:active{
    background-color: #ffffff;
  }

  ${mobile({
    padding: "7px",
    fontSize: "12px",
    bottom: "10%",

})}    

`


const Features = () => {
    function scrollTo(name) {
        scroller.scrollTo(name, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart"
        });
    }



    return (
        <Container name="features">
            <Wrapper>
                <AnimatedOnScroll animationIn="fadeInUp" animationInDuration="1000">
                    <ContentPack mgright="auto">

                        <Content border="none" shadow="none" bg="transparent" mgleft="20px" >

                            <Title >
                                ???????????????????????????????????????????????????????????????
                            </Title>
                            <Desc>
                                ?????????????????????????????? Download App "Q Plus" ???????????????????????????????????????????????????????????????????????????????????????????????????
                            </Desc>
                            <Button onClick={() => scrollTo("download")} color="387766" hover="4b9480" borderRadius="5px" right="20px" bottom="40px">
                                Download
                            </Button>
                        </Content>
                        <ImageContainer direction="right" position="absolute" bg="387766">
                            <Image src="https://sv1.picz.in.th/images/2022/10/18/vWdZ2V.png" />
                        </ImageContainer>
                    </ContentPack>
                </AnimatedOnScroll>

                <AnimatedOnScroll animationIn="fadeInUp" animationInDuration="1000">
                    <ContentPack mgleft="auto" >
                        <ImageContainer direction="left" position="relative" bg="76978E">
                            <Image src="https://sv1.picz.in.th/images/2022/10/18/vWdzcu.png" />
                        </ImageContainer>
                        <Content border="none" shadow="none" bg="transparent" >

                            <Title textalign="right">
                                ????????????????????????????????????????????????
                            </Title>
                            <Desc textalign="right" width="100%">
                                ??????????????????????????????????????????????????????????????? ????????????????????? ???????????????????????????????????? QR Code
                            </Desc>
                        </Content>
                    </ContentPack>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInUp" animationInDuration="1000">

                    <ContentPack mgright="auto">
                        <Content border="none" shadow="none" bg="transparent" mgleft="20px">
                            <Title>
                                ???????????????????????????????????????????????????????????????????????????????????? !
                            </Title>
                            <Desc>
                                ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????
                            </Desc>
                        </Content>
                        <ImageContainer direction="right" position="absolute" bg="A6B78C">
                            <Image src="https://sv1.picz.in.th/images/2022/11/17/GSKgqR.png" />
                        </ImageContainer>
                    </ContentPack>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInUp" animationInDuration="1000">

                    <ContentPack mgleft="auto">
                        <ImageContainer direction="left" position="relative" bg="C7D5B1">
                            <Image src="https://sv1.picz.in.th/images/2022/10/18/vWdzcu.png" />
                        </ImageContainer>
                        <Content border="none" shadow="none" bg="transparent" >

                            <Title textalign="right" >
                                ??????????????????????????????????????????
                            </Title>
                            <Desc textalign="right" width="100%">
                                ???????????????????????????????????????????????????????????????????????????????????? ???????????? email ???????????????????????????????????????????????????????????? PIN
                            </Desc>
                        </Content>
                    </ContentPack>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInUp" animationInDuration="1000">

                    <ContentPack mgright="auto">
                        <Content border="none" shadow="none" bg="transparent" mgleft="20px">
                            <Title>
                                ????????????????????????????????????????????????
                            </Title>
                            <Desc>
                                ?????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????? ??????????????? ??????????????????????????????????????????
                            </Desc>
                        </Content>
                        <ImageContainer direction="right" position="absolute" bg="F1EEE6">
                            <Image src="https://sv1.picz.in.th/images/2022/10/18/vWd42Z.png" />
                        </ImageContainer>
                    </ContentPack>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInUp" animationInDuration="1000">

                    <ContentPack mgleft="auto">
                        <ImageContainer direction="left" position="relative" bg="C7D5B1">
                            <Image src="https://sv1.picz.in.th/images/2022/11/17/GSKV51.png" />
                        </ImageContainer>
                        <Content border="none" shadow="none" bg="transparent" name="Download" >

                            <Title textalign="right" >
                                ??????????????????????????????
                            </Title>
                            <Desc textalign="right" width="100%" name="download">
                                ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????
                            </Desc>
                        </Content>
                    </ContentPack>
                </AnimatedOnScroll>

            </Wrapper>
        </Container>
    )
}

export default Features
