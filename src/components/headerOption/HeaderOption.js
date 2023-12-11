import React from 'react';
import  './headerOption.css';


function HeaderOption({Icon, title, avatar}) {
  return (
    <div className='headerOption flex'>
      {Icon && <Icon className="headerOptionIcon"  />}
      {Icon && <avatar className="headerOptionIcon"  src={avatar} />}
     <p className='headerOptionTitle'>{title}</p> 
    </div>
  )
}

export default HeaderOption