import { useState } from "react";
import axios from 'axios';

const Loginform = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')

    const handleSubmit = async(e)=> {
        e.preventDefault();

        const authObject = { 'Project-ID' : "60215666-2c51-4aa4-9ed6-680abdcb7abc", 'User-Name': username , 'User-Secret': password }
        
       
        try {
             //username | password => chatEngine.io => give message
            await axios.get('https://api.chatengine.io/chats', 
            {
                headers : authObject,
            })
             //if works -> succesfully logged in
             localStorage.setItem('username', username);
             localStorage.setItem('password', password);

             window.location.reload();

        } catch (error) {
             //if doset works -> please try agai with new credentials.
            seterror('oops, incorrect credentials.')
        }

    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e)=> setusername(e.target.value)} 
                        className="input" 
                        placeholder="Username" 
                        required/>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e)=> setpassword(e.target.value)} 
                        className="input" 
                        placeholder="Password" 
                        required/>
                        <div align="center">
                            <button type="submit" className="button">
                                <span>Start Chatting</span>
                            </button>
                            <h2 className="error">{error}</h2>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Loginform;