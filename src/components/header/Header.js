import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import linkedin from '../../assets/linkedin.png';
import passport from '../../assets/passport.jpeg'
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import './Header.css'
import HeaderOption from '../headerOption/HeaderOption';



function Header() {
  return (
    <div className='header flex'>
      <div className="header-left flex">
         <img src={linkedin} alt="linkedin icon" />
        <div className="search-section flex">
           <SearchIcon font-size="large" /> 
         <input type="text" placeholder='search' />
        </div>
      
     
      </div>
      <div className="header-right flex">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon } title="My Network"/>
        <HeaderOption Icon={HomeRepairServiceIcon} title="Jobs"/>
        <HeaderOption Icon={ModeCommentIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon } title="Notifications"/>
        <div className="none flex">
        <HeaderOption avatar={passport} title="Me"/>
        <HeaderOption className="none" Icon={ViewCompactIcon} title="For Business"/>
        </div>
        
      </div>
    </div>
  )
}

export default Header