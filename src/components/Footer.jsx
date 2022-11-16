import { Facebook, Instagram, MailOutline, Phone, Room, Telegram } from "@material-ui/icons"
import styled from "styled-components"
import { mobile, tablet } from "../responsive"

const Container = styled.div`
    display: flex;
    background-color:#387766;
    padding: 0px 20px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    background-color: #${props => props.color}};
    display: flex;    
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom:30px;
`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;   
`

const Right = styled.div`
flex: 1;
${mobile({
    display: "none",

})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width:50%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>QPlus.</Logo>
                <Desc>โปรเจค QPlus เป็นโปรเจคที่จัดทำขึ้นโดยกลุ่ม Q4U ในวิชา Software Architecture and Design ในปีการศึกษา 2565 เทอมที่ 1 โปรเจคนี้ทำเกี่ยวกับแอพธนาคารที่สามารถโอน ฝาก และถอนเงินได้ เพียงใช้แอปพลิเคชั่น</Desc>
                {/* {/* <SocialContainer>
                    <SocialIcon color="385999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="0088cc">
                        <Telegram/>
                    </SocialIcon>
                </SocialContainer> */}
            </Left>
            <Center>
                {/* <Title>Useful Links</Title>
                <List>
                    <ListItem>A</ListItem>
                    <ListItem>B</ListItem>
                    <ListItem>C</ListItem>
                    <ListItem>D</ListItem>
                    <ListItem>E</ListItem>
                    <ListItem>F</ListItem>
                    <ListItem>G</ListItem>
                </List> */}

            </Center>
            <Right>
                {/* <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>
                    XXX. Path , So ASD 456
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>
                    XNUM.
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>
                    XEmail@D 456
                </ContactItem> */}
            </Right>
            <div id="element_target"></div> 

        </Container>
    )
}

export default Footer
