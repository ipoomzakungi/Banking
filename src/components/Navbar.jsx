import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { mobile, tablet } from "../responsive"
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Badge } from '@material-ui/core';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { logoutStart } from '../redux/userRedux';


const Container = styled.div`
  width:100%;
  height:65px;
  background-color:#F3F0EA;
  align-items: center;
  justify-content: center;

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
  
  ${mobile({
    padding:"3px 25px",

})}

`;

const Left = styled.div`
  flex:2;
  display: flex;
  align-items: center;
  height:100%;
  ${tablet({
  flex: "1",
})}

`;

const ImgContainer = styled.div`
    margin-left:10px;
`
const Image = styled.img`
  max-width: 80px;
  height: 50px;
`



const Logo = styled.h1`
font-weight:bold;
margin-right:20px;
${tablet({})}
display:flex;
align-items:center;
cursor:pointer;
transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
${mobile({
  fontSize: "24px",

})}

`
const Right = styled.div`
flex:1;
display:flex;
align-items: center;
justify-content: flex-end;


`;



const Menu = styled.div`
  position:relative;
  display:flex;
  height:100%;
  width:450px;
  align-items:center;
  ${tablet({
  display: "none",
})}
`

const MiniMenu = styled.div`
${tablet({
  opacity: "0.9",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  height: "250px",
  width: "100vw",
  alignItems: "center",
  right: "0",
  backgroundColor: "white",
})}
${mobile({
  opacity: "0.9",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  height: "250px",
  width: "100vw",
  alignItems: "center",
  right: "0",
  backgroundColor: "white",
})}

transition: all 0.2s ease;
 
  
  ${({ visible }) => {
    return css`
        visibility: ${visible ? 'visible' : 'hidden'};
    `;
  }}
  `

const MenuItem = styled.div`

  font-size: 14px;
  font-size: ${props => props.fontSize}};

  cursor: pointer;
  border-bottom: 0px solid #387766;
  padding-bottom: ${props => props.padBottom}};
  padding-left: ${props => props.padLeft}};
  padding-right: ${props => props.padRight}};


  position:absolute;
  top:${props => props.top}};
  left: ${props => props.left}};
  bottom:${props => props.bottom}};

  transition: all 0.1s ease;

  &:hover{
    border-width: 3px;
    transform: scale(1.05);

  }

  ${tablet({
  display: "none",
})}

  
}
`

const MiniMenuItem = styled.div`

  font-size: 14px;
  font-size: ${props => props.fontSize}};

  cursor: pointer;
  border-left: 0px solid #387766;
  border-right: 0px solid #387766;

  
  position:relative;
  top:10px;
  margin-top:30px;
  
  width:70%;

  text-align:center;

  transition: all 0.1s ease;

  &:hover{
    border-width: 5px;
  }
  ${({ visible }) => {
    return css`
        visibility: ${visible ? 'visible' : 'hidden'};
    `;
  }}

`

const Bar = styled.div`
  display: block;
  width:25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: black;
`

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  ${tablet({
  display: "block",
})}
  
&:active ${MiniMenu}{
  height:50vh;
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
      background-color: #${props => props.hover}};

      transform: scale(1.1);
    }
    &:active{
      background-color: #ffffff;
    }
    ${tablet({
  display: "none",
})}

`

const Navbar = () => {
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch();

  var Link = Scroll.Link;
  const [visible, setVisible] = useState(false);


  function scrollToTop() {
    scroll.scrollToTop();
  }
  function setVisibleFalse() {
    setVisible(false);
  }
  function scrollTo(name) {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
      
    });
    setVisibleFalse()
  }
  function redirect() {
    window.open('https://softarch-banking.gitbook.io/', '_blank', '');
  }

  function handleClick() {
    setVisible(!visible);
  }

  function handleClickLogout() {
    dispatch(logoutStart())
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

            <MenuItem onClick={() => scrollTo("features")} fontSize="22px" padBottom="8px" top="18px"  >
              ผลิตภัณฑ์ของเรา
            </MenuItem>
            <MenuItem onClick={() => redirect()} fontSize="16px" padBottom="11px" left="40%" top="25px">
              Document
            </MenuItem>
            <MenuItem onClick={() => scrollTo("about-us")} fontSize="16px" padBottom="11px" left="65%" top="25px">
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
          {!user &&
            <Button color="387766" hover="4b9480" borderRadius="5px" >
              <Link className="test1" to="Download" spy={true} smooth={true} offset={50} duration={500} >
                Download
              </Link>
            </Button>
          }
          {user &&
            <MenuItem onClick={handleClickLogout} padBottom="14px" padLeft="5px" padRight="5px" top="24px">

              <Badge color="primary"  >
                <LogoutOutlinedIcon />
              </Badge>
            </MenuItem>

          }



          {//  #####   mobile part  #####
          }
          <Hamburger onClick={handleClick}>
            <Bar></Bar>
            <Bar></Bar>
            <Bar></Bar>
          </Hamburger>

          {//<a onClick={scrollToTop}>To the top!</a>
          }
        </Right>
      </Wrapper>
      <MiniMenu visible={visible}>
        <MiniMenuItem visible={visible} onClick={() => scrollTo("features")} fontSize="24px" padLeft="8px"   >
          ผลิตภัณฑ์ของเรา
        </MiniMenuItem>
        <MiniMenuItem visible={visible} onClick={() => redirect()} fontSize="22px" padLeft="11px" >
          Document
        </MiniMenuItem>
        <MiniMenuItem visible={visible} onClick={() => scrollTo("about-us")} fontSize="22px" padLeft="11px"  >
          About us
        </MiniMenuItem>

      </MiniMenu>
    </Container >
  )
}

export default Navbar

