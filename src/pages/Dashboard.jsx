import React, { useContext } from 'react'
import Logout from '../components/Logout'
import Shop from '../components/Shop'
import User from '../components/User'
import { Context } from "../context/Context";


function renderElement(checkPage){
  if(checkPage == 1)
     return <User/>;
  else if(checkPage == 2 )
    return <Shop/>;

  return null;
}

const Dashboard = () => {
  const { page } = useContext(Context);


  return (
    <div>
      <Logout />
      {renderElement(page)
      }
      {/* <User></User>
      <Shop></Shop> */}
    </div>
  )
}

export default Dashboard
