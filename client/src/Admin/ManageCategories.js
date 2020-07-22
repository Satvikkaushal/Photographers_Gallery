import React, { useState, useEffect } from 'react'
import Home from '../core/Home'
import { getCategories, getServices } from './apiCalls/AdminApiCalls'

const ManageCategories = () => {

    const [Services, setServices] = useState([])

    const LoadAllCategories = () => {
        getCategories()
            .then(
                data => {
                    if (data.error) {
                        console.log(data.error)
                    }
                    console.log(data)
                    setServices(data);
                }
            )
            .catch(err => console.log(err))
    }


    useEffect(() => {
        LoadAllCategories()
    }, [])

    return (
        <Home>
            ManageCategories working
        </Home>
    )
}

export default ManageCategories;
