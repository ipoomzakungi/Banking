import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Container = styled.div`
  width:100%;
  height:65px;
  background-color:#F3F0EA;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "50px" })}

  position: sticky;
  top: -3px;
  z-index: 5;


`;

const Wrapper = styled.div`
  padding: 3px 50px;
  margin: auto;
  display:flex;
  max-width:1300px;
  height:100%;
  
  ${mobile({ padding: "10px 0px" })}

`;

const Left = styled.div`
  flex:2;
  display: flex;
  align-items: center;
  height:100%;
  
  ${mobile({ display: "none" })}

`;

const ImgContainer = styled.div`
    margin-left:10px;
`
const Image = styled.img`
  max-width: 80px;
  height: 50px;
`


const Center = styled.div`
flex:2;
text-align: center;
`;

const Logo = styled.h1`
font-weight:bold;
margin-right:20px;
${mobile({ fontSize: "24px" })}
display:flex;
align-items:center;
cursor:pointer;

`
const Right = styled.div`
flex:1;
display:flex;
align-items: center;
justify-content: flex-end;
${mobile({ height: "50px" })}


`;

const Language = styled.span`
  font-size:14px
  cursor: pointer;
  margin-right: 20px;
  cursor: pointer;

`

const Menu = styled.div`
  position:relative;
  display:flex;
  height:100%;
  width:450px;
  align-items:center;


`


const MenuItem = styled.div`

  font-size: 14px;
  font-size: ${props => props.fontSize}};
  

  cursor: pointer;
  border-bottom: 0px solid #6bb29f;
  padding-bottom: ${props => props.padBottom}};

  position:absolute;
  top:${props => props.top}};
  left: ${props => props.left}};
  bottom:${props => props.bottom}};

  transition: all 0.1s ease;

  &:hover{
    border-width: 3px;
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

  
}
`



const Button = styled.button`
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

const Navbar = () => {

  var Link = Scroll.Link;

  function scrollToTop() {
    scroll.scrollToTop();
  }
  function scrollTo(name) {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo onClick={scrollToTop}>
            <ImgContainer>
              <Image src="https://sv1.picz.in.th/images/2022/10/18/pMlnqV.png" />
            </ImgContainer>
            4QU
          </Logo>
          <Menu>

            <MenuItem  onClick={() => scrollTo("features")} fontSize="20px" padBottom="9px" top="20px"  >
              ผลิตภัณฑ์ของเรา
            </MenuItem>
            <MenuItem padBottom="13px" left="35%" top="25px">
              Document
            </MenuItem>
            <MenuItem padBottom="13px" left="55%" top="25px">
              About us
            </MenuItem>

          </Menu>

        </Left>

        <Right>
          {/*<Language>TH</Language>
          <Language>EN</Language>

          <Search style={{ color: "#9176C9", fontSize: 20, marginRight: "10px" }} />
          <MenuItem>
            REGISTER
          </MenuItem>
          <Button color="7A58BF" borderRadius="5px">
            เข้าสู่ระบบ
  </Button>*/}
          {//<Link href="#element_target" smooth={true} offset={50} duration={500} >Go to content</Link>
          }
          <Button color="83A199" borderRadius="5px">
            <Link className="test1" to="element_target" spy={true} smooth={true} offset={50} duration={500} >
              เริ่มต้นใช้งาน
            </Link>
          </Button>
          {//<a onClick={scrollToTop}>To the top!</a>
          }
        </Right>
      </Wrapper>
    </Container >
  )
}

export default Navbar

