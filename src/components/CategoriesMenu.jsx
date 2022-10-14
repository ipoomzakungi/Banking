import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    background-color: #F3F3F3;
`

const Wrapper = styled.div`
    padding: 10px 50px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`

const MenuContainer = styled.div`
    font-size: ${props => props.fontSize}};
    background-color: white;
    border: 0.1px solid lightgray;
    cursor: pointer;
    width:18vw;
    height: 142px;
    display:flex;
    flex-direction:column;
    border-radius:2px;
`
const MenuItem = styled.div`
    font-size: 14px;
    font-size: ${props => props.fontSize}};
    border: 1px;
    cursor: pointer;
    margin:auto;
    width:100%;
    text-align: center;
    display:flex;
    flex-direction:column;

`
const Image = styled.img`
    padding:5px 80px;
    width: 30%;
    height: 80%;
    object-fit: cover;
    margin:auto;

`
const CategoriesMenu = () => {
    return (
        <Container>
            <Wrapper>
                <MenuContainer>
                    <MenuItem>
                    <Image src="https://cdn-icons-png.flaticon.com/512/942/942767.png"/>
                        เริ่มต้นอาชีพ
                    </MenuItem>
                </MenuContainer>
                <MenuContainer>
                    <MenuItem>
                    <Image src="https://cdn-icons-png.flaticon.com/512/3022/3022000.png"/>

                        ดูแลครอบครัว
                    </MenuItem>
                </MenuContainer>
                <MenuContainer>
                    <MenuItem>
                    <Image src="https://cdn-icons-png.flaticon.com/512/4814/4814018.png"/>

                        สร้างความมั่นคง
                    </MenuItem>
                </MenuContainer>
                <MenuContainer>
                    <MenuItem>
                    <Image src="https://cdn-icons-png.flaticon.com/512/4072/4072872.png"/>

                        เครียมพร้อมเกษียณ
                    </MenuItem>
                </MenuContainer>
                <MenuContainer>
                    <MenuItem>
                    <Image src="https://cdn-icons-png.flaticon.com/512/3142/3142013.png"/>

                        เพิ่มความมั่งคั่ง
                    </MenuItem>
                </MenuContainer>

            </Wrapper>
        </Container>
    )
}

export default CategoriesMenu
