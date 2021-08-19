import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useUserById from '../hooks/useUserById';
import useUserCreate from '../hooks/useUserCreate';
import useUserUpdate from '../hooks/useUserUpdate';

function UserForm() {
    const {id} =useParams();
    const [userData,userDataLoading,userDataSuccess,userDataError] = useUserById(id);
    const [formData, setFormData] = useState({});
    const [createUser,{loading:cLoading,success:cSuccess,error:cError}]=useUserCreate();
    const [updateUser,{loading:uLoading,success:uSuccess,error:uError}]=useUserUpdate();
    
    const isUpdate = !!id;
    const isReady = !isUpdate || (userDataSuccess && userData);
    const handleChange = (field) =>(event)=>{
        setFormData(prev => ({
            ...prev,
            [field]:event.target.value,
        }));
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(isUpdate){
            updateUser(id,formData);
        }else{
            createUser(formData); 
        }
         
    };

    useEffect(()=>{
        if(cSuccess!=true)   return;
        setFormData({});
    },[cSuccess])

    useEffect(()=>{
        if(!isUpdate){
            setFormData({});
        } ;
    },[id])

    useEffect(()=>{
        if(!isReady || !isUpdate)   return;
        const {name, avatar} = userData || {};
        setFormData({name, avatar});
    },[isReady])

    return (
        <div>
                {cLoading && <em>Creating user...</em>}
                {cError && <em>An error occur, please try again</em>}
                {cSuccess && <em>User is created</em>}

                {uLoading && <em>updating user...</em>}
                {uError && <em>An update error occur, please try again</em>}
                {uSuccess && <em>User is updated</em>}

                {!isReady && userDataLoading && <em>Loading data...</em>}
                {!isReady && userDataError && <em>Cannot load data</em>}
                {!isReady && userDataSuccess && !userData && <em>Data is empty</em>}
                {isReady && <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="" >User Name</label>
                        <input 
                            value={formData["name"] || ""}
                            onChange={handleChange("name")}
                            type="text" name="username"
                            id="username" 
                            placeholder="Enter your name" />
                    </div>
                    <div>
                        <label htmlFor="" >User Avatar</label>
                        <input 
                            value={formData["avatar"] || ""}
                            onChange={handleChange("avatar")}
                            type="text" 
                            name="user_avatar" 
                            id="user_avatar" 
                            placeholder="Your Avatar URL" />

                    </div>
                    <button disabled={uLoading} type="submit" >Submit </button>
                
                </form>
                }
            
        </div>
    )
}

export default UserForm
