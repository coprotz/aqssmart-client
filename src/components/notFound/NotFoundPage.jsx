import React from 'react'
import './notFound.css'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='not__found'>
      <div className="error__404">
        <h1>404</h1>
        <h3>OOOps! It seems there is a problem, please check and try again</h3>
        <Link exact to="/careers">
          <button>Home</button>
        </Link>

      </div>
    </div>
  )
}

export default NotFoundPage
