import React from 'react'
import styled from 'styled-components'
import { mobile, tablet ,tablet_s} from '../responsive'

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
        margin:"0",

        
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
        height:"80vh",
        maxHeight:"581px",
        maxWidth:"400px",
        minWidth:"400px",
        flexDirection:"column",
        marginLeft:"auto",
        marginRight:"auto",


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
        position:"relative",
        height: "50%",
        width: "100%",
        margin:"0",
        left:"0",

        
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
    max-height: 350px;
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
    font-size:22px;
    font-weight:800px;
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
      background-color: #${props => props.hover}};
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
                <ContentPack  mgright="auto">
                    <Content border="none" shadow="none" bg="transparent" mgleft="20px" >

                        <Title >
                            สามารถใช้งานได้ทุกที่
                        </Title>
                        <Desc>
                            ขอเพียงแค่ Download App "ชื่อแอพ" ก็สามารถทำธุรกรรมได้ทุกที่ทั่วโลก
                        </Desc>
                        <Button color="387766" hover="4b9480" borderRadius="5px" right="20px" bottom="40px">
                            Download
                        </Button>
                    </Content>
                    <ImageContainer direction="right" position="absolute" bg="387766">
                        <Image src="https://sv1.picz.in.th/images/2022/10/18/vWdZ2V.png" />
                    </ImageContainer>
                </ContentPack>

                <ContentPack mgleft="auto" >
                    <ImageContainer direction="left" position="relative" bg="76978E">
                        <Image src="https://sv1.picz.in.th/images/2022/10/18/vWdzcu.png" />
                    </ImageContainer>
                    <Content border="none" shadow="none" bg="transparent" >

                        <Title textalign="right">
                            การใช้งานที่ง่าย
                        </Title>
                        <Desc textalign="right" width="100%">
                            สามารถจ่ายเงินได้ง่าย รวดเร็ว ด้วยระบบแสกน QR Code 
                        </Desc>
                    </Content>
                </ContentPack>

                <ContentPack mgright="auto">
                    <Content border="none" shadow="none" bg="transparent" mgleft="20px">
                        <Title>
                            หน้าต่างการใช้งานที่เป็นมิตร !
                        </Title>
                        <Desc>
                            มีปุ่มเมนูการเข้าถึงโปรแกรมที่เข้าใจง่าย ไม่ยุ่งยาก
                        </Desc>
                    </Content>
                    <ImageContainer direction="right" position="absolute" bg="A6B78C">
                        <Image src="https://sv1.picz.in.th/images/2022/10/18/vWd42Z.png" />
                    </ImageContainer>
                </ContentPack>

                <ContentPack mgleft="auto">
                    <ImageContainer direction="left" position="relative" bg="C7D5B1">
                        <Image src="https://sv1.picz.in.th/images/2022/10/18/vWdzcu.png" />
                    </ImageContainer>
                    <Content border="none" shadow="none" bg="transparent" >

                        <Title textalign="right" >
                            ความปลอดภัยสูง
                        </Title>
                        <Desc textalign="right" width="100%">
                            มีระบบการยืนยันตัวตนครั้งแรก ด้วย email และการใช้รหัสผ่านแบบ PIN
                        </Desc>
                    </Content>
                </ContentPack>

                <ContentPack mgright="auto">
                    <Content border="none" shadow="none" bg="transparent" mgleft="20px">
                        <Title>
                            ระบบบัญชีร้านค้า
                        </Title>
                        <Desc>
                            สามารถสร้างบัญชีร้านค้าได้ ทำให้การจัดการบัญชีร้านค้าของคุณ สะดวก รวดเร็วมากขึ้น
                        </Desc>
                    </Content>
                    <ImageContainer direction="right" position="absolute" bg="F1EEE6">
                        <Image src="https://sv1.picz.in.th/images/2022/10/18/vWd42Z.png" />
                    </ImageContainer>
                </ContentPack>

                <ContentPack mgleft="auto">
                    <ImageContainer direction="left" position="relative" bg="C7D5B1">
                        <Image src="https://sv1.picz.in.th/images/2022/10/18/vWdzcu.png" />
                    </ImageContainer>
                    <Content border="none" shadow="none" bg="transparent" name="Download" >

                        <Title textalign="right" >
                            หน้าสรุปผล
                        </Title>
                        <Desc textalign="right" width="100%" name="about-us">
                            สรุปผลรายรับและรายจ่ายของคุณภายในหน้าเดียว อีกทั้งสามารถดูรายการย้อนหลังได้
                        </Desc>
                    </Content>
                </ContentPack>

            </Wrapper>
        </Container>
    )
}

export default Features
