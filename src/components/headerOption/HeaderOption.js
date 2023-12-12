import React from 'react';
import  './headerOption.css';
import { Avatar } from '@mui/material';



function HeaderOption({Icon, title, avatar}) {
  return (
    <div className='headerOption flex'>
      {Icon && <Icon className="headerOptionIcon"  />}
      {avatar && <Avatar className="headerOptionIcon"  src={avatar} />}
     <p className='headerOptionTitle'>{title}</p> 
    </div>
  )
}

export default HeaderOption