import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import passport from '../../assets/passport.jpeg'
import { Avatar } from '@mui/material';
import './feed.css';
import Inputoption from './Inputoption';

function Feed() {
  return (
    <div className='feed'>
    <div className='feedInputContainer'>
    
    <div className='flex'>
      <Avatar src={passport} className='feedAvatar'/>
      <div className='feedInput'>
        <form>
          <input type="text" placeholder='start a post'/>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
    <Inputoption/>
      
    </div>
    </div>
  )
}

export default Feed