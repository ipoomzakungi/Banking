import React from 'react'
import styled from 'styled-components'
import { Mail, Search } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from "../responsive"

const Container = styled.div`
  height:70px;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 50px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}

`;

const Left = styled.div`
  flex:2;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}

  
`;

const Language = styled.span`
  font-size:14px
  cursor: pointer;
  margin-right: 20px;
  cursor: pointer;

`

const SerachContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

`

const Input = styled.input`
  border: none;

`


const Center = styled.div`
  flex:2;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight:bold;
  margin-right:20px;
  ${mobile({ fontSize: "24px" })}

`
const Right = styled.div`
  flex:1;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ height: "50px" })}


`;

const MenuItem = styled.div`
  font-size: 14px;
  font-size: ${props => props.fontSize}};


  cursor: pointer;
  margin-left: 10px;
  margin-right:10px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

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
      background-color: #9176C9;
      transform: scale(1.1);
  }

`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            Bank
          </Logo>

          <MenuItem fontSize="20px">
            ผลิตภัณฑ์ของเรา
          </MenuItem>
          <MenuItem >
            Stories & Tips
          </MenuItem>
          <MenuItem >
            Podcasts
          </MenuItem>

        </Left>

        <Right>
          <Language>TH</Language>
          <Language>EN</Language>

          <Search style={{ color: "#9176C9", fontSize: 20 ,marginRight:"10px"}} />
          <MenuItem>
            REGISTER
          </MenuItem>
          <Button color="7A58BF" borderRadius="5px">
            เข้าสู่ระบบ
          </Button>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

