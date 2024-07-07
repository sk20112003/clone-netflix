import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import insta from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook}alt=''/>
        <img src={insta}alt=''/>
        <img src={twitter}alt=''/>
        <img src={youtube}alt=''/>
        </div> 
        <ul>
          <li>Audio Description</li>
          <li>Help cenetr</li>
          <li>Giftcards</li>
          <li>Media center</li>
          <li>Investor relation</li>
          <li>Jobs</li>
          <li>Terms of use</li>
          <li>Privacy</li>
          <li>legal notice</li>
          <li>cookie preference</li>
          <li>corporate information</li>
          <li>Contact us</li>
        </ul>
        <div className="copyright-text">
          @1997-2024 Netflix ,Inc
        </div>
    </div>
  )
}

export default Footer
