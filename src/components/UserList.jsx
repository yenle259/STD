import React from 'react'
import useUsers from '../hooks/useUsers'
import UserItem from './UserItem'

function UserList() {
    const [users,loading,success,failed]= useUsers();
    const hasData = users != null && users.length>0;

    const renderUsers = ()=> {
        return users.map(({name,id,avatar}) =>(
            <UserItem  key={id} id={id} name={name} avatar={avatar}/>
        )  )
    }
    return (
        <div>
            <h2>USER LIST</h2>
            {loading && <em>Loading...</em>}
            {failed && <em>Fetch data failed</em>}
            {success && !hasData && <em>No data here</em>}
            {success && hasData && renderUsers()}
           
        </div>
    )
}

export default UserList
