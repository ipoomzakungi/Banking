import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex:1;
    position: relative;
    
`

const Wrapper = styled.div`
    margin:auto;
    padding: 20px 30px;
    height: 140vh;
    width: 85vw;
    background-color: coral;
    display:flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: center;    

`
const Content = styled.div`
    height: 40vh;
    width: 25vw;
    background-color:teal;
    margin: 10px;

`
const ContentPack = styled.div`
    height: 40vh;
    width: 50vw;
    background-color:lightblue;
    margin: 10px;
    position: relative
`


const Image = styled.img`
    position: absolute;
    top:0;
    bottom:0;
    left:${props => props.direction ==="left" && "0px"};
    right:${props => props.direction ==="right" && "-20px"};

    background-color: green;
    margin-right: 20px;
    height: 40vh;
    width: 25vw;
`

const Features = () => {
    return (
        <Container>
            <Wrapper>
                <ContentPack>
                <Content>

                    PACK
                </Content>

                    <Image direction="right" />
                </ContentPack>
                <Content>

                    Hi
                </Content>
                <Content>

                    Hi
                </Content>
                <ContentPack>
                    <Image direction="left"/>
                    PACK
                </ContentPack>

                <Content>

                    Hi
                </Content>

                <Content>

                    Hi
                </Content>

                <Content>

                    Hi
                </Content>
            </Wrapper>
        </Container>
    )
}

export default Features
