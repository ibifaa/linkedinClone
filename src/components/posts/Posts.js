import React from 'react'
import './posts.css'
import { Avatar } from '@mui/material'
import passport from '../../assets/passport.jpeg'

function Posts({name, description, message, phoUrl}) {
  return (
    <div className='post '>
      <div className="post-header flex">
      <Avatar src={passport} className='feedAvatar'/>
       <div className="post_info ">
        <h2>Ibifaa Ibisaki Aruoture</h2>
        <p>Description</p>
       </div>
      </div>
      <div className="post-body">
      <p> Mesage goes here</p>
      </div>
    </div>
  )
}

export default Posts