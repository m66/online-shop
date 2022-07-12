import React from 'react';
import "./socialLinks.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/fontawesome-free-solid';
import { faFacebookSquare } from '@fortawesome/fontawesome-free-brands';
import { faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { faViber } from '@fortawesome/fontawesome-free-brands';
import { faTelegram } from '@fortawesome/fontawesome-free-brands';

function SocialLinks() {
  return (
    <div className="social-links">
        <ul>
            <li className='phone-address'><FontAwesomeIcon icon={faPhone} /><a href="tel:+37493792544">{"(+374) 93-792-544"}</a></li>
            <li className='fb-address'><FontAwesomeIcon icon={faFacebookSquare} /><a href="">Facebook</a></li>
            <li className='whatsapp-address'><FontAwesomeIcon icon={faWhatsapp} /><a href="">Whatsapp</a></li>
            <li className='viber-address'><FontAwesomeIcon icon={faViber} /><a href="">Viber</a></li>
            <li className='telegram-address'><FontAwesomeIcon icon={faTelegram} /><a href="">Telegram</a></li>
        </ul>
      </div>
  )
}

export default SocialLinks