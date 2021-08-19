import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({id,name,avatar}) {
    return (
        <Link to={`/about/${id}`}>
            <div className="useritem_wrapper">
                <img className="useritem_image" src={avatar} alt="" />
                <p className="useritem_name">{name}</p>
            </div>
        </Link>
    )    
}

export default UserItem
