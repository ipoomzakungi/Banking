import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
`

const Map = styled.iframe`
    width:50%;
    height: 500px;
`

const GoogleMap = () => {
  return (
    <Container>
      <Map src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6332.767458942824!2d100.77305056034109!3d13.72915169651841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1deb4e950f2fbd07!2z4Lig4Liy4LiE4Lin4Li04LiK4Liy4Lin4Li04Lio4Lin4LiB4Lij4Lij4Lih4LiE4Lit4Lih4Lie4Li04Lin4LmA4LiV4Lit4Lij4LmMIOC4hOC4k-C4sOC4p-C4tOC4qOC4p-C4geC4o-C4o-C4oeC4qOC4suC4quC4leC4o-C5jCAoS01JVEwp!5e0!3m2!1sth!2sth!4v1666121132548!5m2!1sth!2sth" width="600" height="450"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Map>
    </Container>
  )
}

export default GoogleMap
