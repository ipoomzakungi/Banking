import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color:#83A199;
    color:white;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size:14px;
    font-weight:1200;
`

const Announcement = () => {
  return (
    <Container>
        This is a test Project that trying to clone SCB webpage
    </Container>
  )
}

export default Announcement
