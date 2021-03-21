import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Body() {

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res=>{
            console.log(res.data);

        }).catch(err=>{
            console.log(err);
        })
    }, [])

    return (
        <div>
            <h1>This is body componet</h1>
        </div>
    )
}
