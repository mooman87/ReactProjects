import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
    const [data, setData] = useState([]);


    useEffect(() => {
       getData(); 

    }, []);

    async function getData(){
        const res = await axios.get('http://localhost:5000/api/v1/patients');
        console.log(res);

    }
    }