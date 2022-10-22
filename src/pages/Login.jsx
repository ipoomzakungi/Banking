import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../redux/apiCall'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), rgba(255,255,255,0.5)
        ), 
        url("https://preview.redd.it/0dfi9au0ihn51.png?auto=webp&s=fd1999a549e5201d7540fef1a82be0f5dc5fdb6b") 
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
        display: flex;
        flex-direction: column;
`

const Input = styled.input`
        flex:1;
        min-width: 40%;
        margin: 10px 0px;
        padding: 10px;
`

const Button = styled.button`
        width: 40%;
        border:none;
        padding: 15px 20px;
        background-color:teal;
        color:white;
        cursor: pointer;
        margin-bottom: 10px;
        &:disabled{
            color: green;
            cursor: not-allowed;
        }
`
const Link = styled.a`
        margin: 5px 0px;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
`

const Error = styled.span`
        color: red;
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching,err} = useSelector(state=> state.user)

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch,{username,password})
    };
    return (
        <Container>
            <Wrapper>
                <Title>
                    Login
                </Title>
                <Form>

                    <Input
                        style={{ padding: 10, marginBottom: 20 }}
                        type="text"
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        style={{ padding: 10, marginBottom: 20 }}
                        type="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleClick} disabled={isFetching}>Login</Button>
                    {err && <Error>Something went wrong</Error>}

                    

                </Form>
            </Wrapper>

        </Container>
    )
}

export default Login