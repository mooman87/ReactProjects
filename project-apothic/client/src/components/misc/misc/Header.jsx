import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='navbar'>
            <Link to='./'>Re-order Medication </Link>
            <Link to='../login'>Log in</Link>
            <Link to='../register'>Sign up</Link>
        </div>
    )
}