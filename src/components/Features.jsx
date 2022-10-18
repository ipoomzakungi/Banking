import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex:1;
    position: relative;
    background-color:#F3F0EA;
`

const Wrapper = styled.div`
    margin:auto;
    padding: 80px 20px 30px 30px;
    height: 140vh;
    width: 85vw;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;    

`
const Content = styled.div`
    position: relative;

    height: 40vh;
    width: 25vw;
    margin: 10px;

    
    border-radius: 8px;
    box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    background-color: #D0D9BB;
    border-style: ${props => props.border};
    box-shadow: ${props => props.shadow};
    background-color: ${props => props.bg};
`
const ContentPack = styled.div`
    position: relative;
    height: 40vh;
    width: 50vw;
    background-color:white;
    margin: 10px;

    border-radius: 8px;
    
    box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);

`


const ImageContainer = styled.div`
    position: absolute;
    top:0;
    bottom:0;
    left:${props => props.direction === "left" && "0px"};
    right:${props => props.direction === "right" && "-20px"};

    background-color: black;
    margin-right: 20px;
    height: 40vh;
    width: 25vw;
    border-radius: 8px;

    
    
`

const Image = styled.img`
    position: absolute;
    top:${props => props.top};
    left:0;
    right:0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: auto; 
    width: ${props => props.width}%; 
    max-width: 350px; 
    max-width: ${props => props.maxWidth}; 
    max-height: 350px;
`

const Title = styled.h1`
    position: relative;
    top: ${props => props.top};
    font-size: ${props => props.fz};
    
    color: black;
    margin:20px 20px 0px 20px;
    text-align:${props => props.textalign};
    
`
const Desc = styled.p`
    text-align:${props => props.textalign};
    margin-left:${props => props.mgleft};
    padding:20px;
    width: 80%;
    width: ${props => props.width}%;
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
      background-color: #9dbdb5;
      transform: scale(1.1);
  }
  &:active{
    background-color: #ffffff;
  }


`

const Features = () => {
    return (
        <Container name="features">
            <Wrapper>
                <ContentPack>
                    <Content border="none" shadow="none" bg="transparent" >
                    
                        <Title>
                            สามารถใช้งานได้ทุกที่
                        </Title>
                        <Desc>
                            ขอเพียงแค่ Download App "ชื่อแอพ" ก็สามารถทำธุรกรรมได้ทุกที่ทั่วโลก
                        </Desc>
                        <Button color="83A199" borderRadius="5px" right="20px" bottom="40px">
                            Download
                        </Button>
                    </Content>
                    <ImageContainer direction="right">
                        <Image src="https://sv1.picz.in.th/images/2022/10/18/vWdZ2V.png"  />
                    </ImageContainer>
                </ContentPack>
                <Content>
                    <Image src="https://sv1.picz.in.th/images/2022/10/19/vWYMQW.png" width="60" top="5px" maxWidth="210px"/>

                    <Title top="190px" fz="24px">
                        แสกนจ่าย รวดเร็ว ด้วยระบบสแกน QR Code
                    </Title>
                </Content>
                <Content>

                    <Image src="https://sv1.picz.in.th/images/2022/10/18/vWdNyI.png" top="5px" />

                    <Title top="220px" fz="24px">
                        ง่ายต่อการใช้งาน
                    </Title>
                </Content>
                <ContentPack>
                    <ImageContainer direction="left" >
                        <Image src="https://sv1.picz.in.th/images/2022/10/18/vWdzcu.png" />
                    </ImageContainer>
                    <Title textalign="right">
                        มีความปลอดภัยสูง
                    </Title>
                    <Desc textalign="right" mgleft="60%" width="30">
                        มีระบบการยืนยันตัวตนครั้งแรก ด้วย email และการใช้รหัสผ่านแบบ PIN 
                    </Desc>
                </ContentPack>

                <ContentPack>
                    <Content border="none" shadow="none" bg="transparent">
                        <Title>
                            มีระบบบัญชีร้านค้า
                        </Title>
                        <Desc>
                            สามารถสร้างบัญชีร้านค้าได้ ทำให้การจัดการบัญชีร้านค้าของคุณ สะดวก รวดเร็วมากขึ้น
                        </Desc>
                    </Content>
                    <ImageContainer direction="right">
                        <Image src="https://sv1.picz.in.th/images/2022/10/18/vWd42Z.png" />
                    </ImageContainer>
                </ContentPack>

            </Wrapper>
        </Container >
    )
}

export default Features
