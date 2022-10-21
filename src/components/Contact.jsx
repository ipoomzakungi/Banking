import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    margin-top:20px;
    margin-bottom:50px;

`


const Wrapper = styled.div`
    margin:auto;
    width: 85vw;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;    


    max-width:1300px;
    max-height:800px;
    border-radius: 8px;

    box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);


`

const MapContainer = styled.div`
  flex:1;
  
`

const MapWrapper = styled.div`

`

const Map = styled.iframe`
  width:100%;
  height: 500px;
  border:none;
`

const ContactDetail = styled.div`
  flex:1;
  margin-left:10px;


`

const Title = styled.h1`
    position: relative;
    top: ${props => props.top};
    font-size: 40px;
    
    font-size: ${props => props.fz};
    color: black;
    margin-top:20px;
    margin-right:auto;
    margin-left:auto;
    text-align:${props => props.textalign};
    text-align:center;
`
const Desc = styled.p`
    text-align:${props => props.textalign};
    margin-left:${props => props.mgleft};
    margin-right:${props => props.mgright};

    font-size: 20px;
    
    font-size: ${props => props.fz};
    padding:20px;
    width: 80%;
    width: ${props => props.width}%;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <MapContainer>
          <MapWrapper>

            <Map src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6332.767458942824!2d100.77305056034109!3d13.72915169651841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1deb4e950f2fbd07!2z4Lig4Liy4LiE4Lin4Li04LiK4Liy4Lin4Li04Lio4Lin4LiB4Lij4Lij4Lih4LiE4Lit4Lih4Lie4Li04Lin4LmA4LiV4Lit4Lij4LmMIOC4hOC4k-C4sOC4p-C4tOC4qOC4p-C4geC4o-C4o-C4oeC4qOC4suC4quC4leC4o-C5jCAoS01JVEwp!5e0!3m2!1sth!2sth!4v1666121132548!5m2!1sth!2sth" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Map>
          </MapWrapper>
        </MapContainer>
        <ContactDetail>
          <Title>
            Contact Us
          </Title>
          <Desc fz="20px">
            KMITL ECC Building, ถนน ฉลองกรุง แขวง ลำปลาทิว เขตลาดกระบัง กรุงเทพมหานคร
          </Desc>
        </ContactDetail>
      </Wrapper>
    </Container>
  )
}

export default Contact
