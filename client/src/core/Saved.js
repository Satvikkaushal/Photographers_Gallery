import React, { useState, useEffect } from 'react'
import Home from './Home';
import { IsAuthenticated } from '../user/apiCalls/localstorage';
import { getUserById } from '../Admin/apiCalls/AdminApiCalls';




const Saved = () => {
    const { user } = IsAuthenticated()

    const [values, setvalues] = useState({
        name: "",
        saved: []
    })

    useEffect(() => {
        getUserById(user._id).then(data => console.log(data));
    }, [])
    return (
        <Home>
            fii
        </Home>
    )
}

export default Saved;
