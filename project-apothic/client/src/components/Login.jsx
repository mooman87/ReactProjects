import React, { useState } from 'react';

export default function Login() {
    const [patientID, setPatientID] = useState('');
    const [patientPW, setPatientPW] = useState('');
  
  
    let sendData = (e) => {
      e.preventDefault();
  
      setPatientID('');
      setPatientPW('');
    }
  
    return (
      <form onSubmit={sendData}>
        <input 
          type='text' 
          placeholder='User ID' 
          onChange={(e) => setPatientID(e.target.value)} 
          value={patientID}
        />
        <input 
          type='password' 
          placeholder='Password' 
          onChange={(e) => setPatientPW(e.target.value)} 
          value={patientPW}
        />
        <button type='submit'>Login</button>
      </form>
    );
}