import React from 'react'
import styled from 'styled-components'
import { Mail, Search } from '@material-ui/icons';
import { Badge } from '@material-ui/core';


const Container = styled.div`
  height:60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display:flex;
  justify-content: space-between;
  align-items: center;

`;

const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size:14px
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
  font-weight:bold
`
const Right = styled.div`
  flex:1;
  display:flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SerachContainer>
            <Input/>
            <Search style={{color:"gray",fontSize:16}}/>  
          </SerachContainer>
        </Left>
        <Center>
          <Logo>
            Bank
          </Logo>
        </Center>
        <Right>
          <MenuItem>
          REGISTER
          </MenuItem>
          <MenuItem>
          Sign in
          </MenuItem>
          <MenuItem>
           <Badge badgeContent={4} color="primary">
            <Mail/>
           </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
