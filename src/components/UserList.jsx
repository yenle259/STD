import React from 'react'
import UserItem from './UserItem'

function UserList() {
    return (
        <div>
            <h2>User List</h2>
            <UserItem name="username" avatar="https://picsum.photos/200"/>
            <UserItem/>
            <UserItem/>
        </div>
    )
}

export default UserList
