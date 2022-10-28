import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'
import axios from 'axios'
import { toast } from 'react-toastify'

import imgBack from '../../../src/images/mailz.jpeg'
import load1 from '../../../src/images/load2.gif'
import ScreenHeading from '../../utilities/ScreeenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './ContactMe.css'


const ContactMe = (props  ) => {

  let fadeInScreenHandler = ( screen ) => {
      if( screen.fadeScreen !== props.id ) return
      Animations.animations.fadeInScreen( props.id )
  }
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe( fadeInScreenHandler )

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ banner, setBanner ] = useState('')
  const [ bool, setBool ] = useState(false)


  const handleName = ( e ) => {
    setName( e.target.value )
  }
  const handleEmail = ( e ) => {
    setEmail( e.target.value )
  }
  const handleMessage = ( e ) => {
    setMessage( e.target.value )
  }

  const submitForm = async( e ) => {
    e.preventDefault()
    try{
      let data = {
        name,
        email,
        message
      }

      setBool(true)
      const res = await axios.post(`/contact`, data)

      if( name.length === 0 || email.length ===0 || message.length === 0 ) {
        setBanner(res.data.msg)
        toast.error(res.data.msg)
        setBool( false )
      }
      else if (res.status == 200){
        setBanner(res.data.msg)
        toast.success(res.data.msg)
        setBool( false )
      }
    }
    catch (error){
      console.log(error)
    }
      
 
  }

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} subHeading={"Let's Keep In Touch"} />
      <div className="central-form">
        <div className="col">
          <h2>
            <Typewriter
              options={{
                strings: ["Get In Touch "],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <a href="#">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here</h4>
            <img src={ imgBack } alt="image not found" />
          </div>
        </div>

        <form action="" onSubmit={ submitForm }>
          <p>{ banner }</p>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' onChange={ handleName } value={ name }  />

          <label htmlFor="email">Email</label>
          <input type="email" name='email' onChange={ handleEmail } value={ email }/>

          <label htmlFor="message">Message</label>
          <textarea type='text' name="message" id="message" cols="30" rows="10" onChange={ handleMessage } value={ message } />

          <div className="send-btn">
            <button type='submit'>
               Send 
               <i className='fa fa-paper-plane'/ > 
               { bool ? <b className='load'>
                <img src={ load1 } alt="Image not responding" />
               </b> : ''}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe