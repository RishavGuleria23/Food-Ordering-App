import React from 'react'

const User = ({names}) => {
  return (
    <div className="user-card">
        <h2>Name:{names}</h2>
        <h3>Location</h3>
        <h4>Contact</h4>

    </div>
  )
}

export default User