import React from 'react'
import useUsers from '../hooks/useUsers'
import UserItem from './UserItem'

function UserList() {
     const [users,loading,success,failed]= useUsers();

    const renderUsers = ()=> {
        return users.map(({name,id,avatar}) =>(
            <UserItem  key={id} name={name} avatar={avatar}/>
        ))
    }
    return (
        <div>
            <h2>User List</h2>
            {loading && <em>Loading...</em>}
            {failed && <em>Fetch data failed</em>}
            {success && !users && <em>No data here</em>}
            {success && users && renderUsers()}
           
        </div>
    )
}

export default UserList
