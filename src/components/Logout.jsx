import React, { useState } from "react";
import styled, { css } from "styled-components";
import { mobile, tablet } from "../responsive";
import * as Scroll from "react-scroll";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Badge } from "@material-ui/core";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logoutStart } from "../redux/userRedux";

const Container = styled.div`
  width: 100%;
  height: 65px;
  background-color: #f3f0ea;
  align-items: center;
  justify-content: center;

  position: sticky;
  top: -3px;
  z-index: 5;
`;

const Wrapper = styled.div`
  padding: 3px 50px;
  margin: auto;
  display: flex;
  max-width: 1300px;
  height: 100%;

  ${mobile({
    padding: "3px 25px",
  })}
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  height: 100%;
  ${tablet({
    flex: "1",
  })}
`;

const ImgContainer = styled.div`
  margin-left: 10px;
`;
const Image = styled.img`
  max-width: 80px;
  height: 50px;
`;

const Logo = styled.h1`
  font-weight: bold;
  margin-right: 20px;
  ${tablet({})}
  display:flex;
  align-items: center;
  cursor: pointer;

  ${mobile({
    fontSize: "24px",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 450px;
  align-items: center;
  ${tablet({
    display: "none",
  })}
`;


const MenuItem = styled.div`

  font-size: 14px;
  font-size: ${(props) => props.fontSize}};

  cursor: pointer;
  border-bottom: 0px solid #387766;
  padding-bottom: ${(props) => props.padBottom}};
  padding-left: ${(props) => props.padLeft}};
  padding-right: ${(props) => props.padRight}};


  position:absolute;
  top:${(props) => props.top}};
  left: ${(props) => props.left}};
  bottom:${(props) => props.bottom}};

  transition: all 0.1s ease;

  &:hover{
    border-width: 3px;
  }

  

  
}
`;

const Logout = () => {
  const user = useSelector((state) => state.user.currentUser);
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
      smooth: "easeInOutQuart",
    });
    setVisibleFalse();
  }
  

  function handleClickLogout() {
    dispatch(logoutStart());
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
        </Left>

        <Right>
          <MenuItem
            onClick={handleClickLogout}
            padBottom="14px"
            padLeft="5px"
            padRight="5px"
            top="24px"
          >
            <Badge color="primary">
              <LogoutOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Logout;
