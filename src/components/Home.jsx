import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';



const Home = () => {
    const { user } = useContext(AuthContext)

  
    return (
        <div>
           <h2>This is home</h2>
            <h2>{user && <span>{user.displayName}</span>}</h2>
            <img src={user && user.photoURL} alt="" />
        </div>
    );
};

export default Home;