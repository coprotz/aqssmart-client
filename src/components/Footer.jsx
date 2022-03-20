import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_left">
            &copy; 2022 AQS Smart
        </div>
        <div className="footer_right">
            <Link to='/terms' className='terms_1'>Terms</Link>
            <Link to='/privacy'>Privacy</Link>
        </div>
    </div>
  )
}

export default Footer
