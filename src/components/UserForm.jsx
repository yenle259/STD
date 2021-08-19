import React, { useState } from 'react'

function UserForm() {
    const [formData, setFormData] = useState({});

    const handleChange = (field) =>(event)=>{
        setFormData(prev => ({
            ...prev,
            [field]:event.target.value,
        }));
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                        value={formData["avatar"]}
                        onChange={handleChange("avatar")}
                        type="text" 
                        name="user_avatar" 
                        id="user_avatar" 
                        placeholder="Your Avatar URL" />

                </div>
                <button type="submit" >Submit </button>
               
            </form>
        </div>
    )
}

export default UserForm
