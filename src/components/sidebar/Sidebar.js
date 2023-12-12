import React from 'react';
import { Avatar } from '@mui/material';
import './sidebar.css';
import passport from '../../assets/passport.jpeg'
import HeaderOption from '../headerOption/HeaderOption';

function Sidebar({avatar}) {
  return (
    <div className='sidebar'>
        <div className="sidebarTop">
            <div className='bioSection'>
                <div className='backgroundImg'>

                </div>
                <Avatar src={passport} className='sidebarAvatar'/>
                <h3 className='name'>Ibifaa Ibisaki Aruoture</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, officiis.</p>
            </div>
            
            <div className="sidebarStats">
                <div className="sidebarStat flex">
                    <p>Profile viewers</p>
                    <p className="sidebarStatNumber">51</p>
                </div>
                <div className="sidebarStat flex">
                <p>Connections</p>
                <p className="sidebarStatNumber">116</p>
                </div>
            </div>
    
        </div>
       
        
    </div>
  )
}

export default Sidebar