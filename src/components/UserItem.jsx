import React from 'react'

function UserItem({name,avatar}) {
    return (
        <div className="useritem_wrapper">
            <img className="useritem_image" src={avatar} alt="" />
            <p className="useritem_name">{name}</p>
        </div>
    )
}

export default UserItem
