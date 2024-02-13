import React from 'react'
import passport from '../../assets/passport.jpeg'
import { Avatar } from '@mui/material'; 
import Media from '@mui/icons-material/PermMedia';
import Event from '@mui/icons-material/CalendarMonth';
import Article from '@mui/icons-material/Article';
import './feed.css';
import InputOption from './InputOption';
import Posts from '../posts/Posts';

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
    
    <div className="Input_Option flex">
        <InputOption Icon={Media} title='Media' color="#78b5f9"/>
        <InputOption Icon={Event} title='Event' color="#EFB920"/>
        <InputOption Icon={Article} title='Write Article' color="#F59890"/>
    </div>
      
    </div>

    <Posts 
    name="Ibifaa Ibisaki Aruoture"
    description="This is a test"
    message='wow this worked' />  
    </div>
  )
}

export default Feed