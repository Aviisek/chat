import React, {memo, useState} from 'react';

function Email({nextQ, onSendHandler}) {
    const [email, setEmail] = useState(" ");
    const handleChange = (e) => setEmail(e.target.value);

    return (
        <>
            <input style={{width: '20%',
                padding: '12px 20px',
                display: 'block',
                margin: '10px auto',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box'}}
                   placeholder="E-mail address"
                   type="text"
                   name="email" value={email} onChange={handleChange}/>
            <button style={{display: 'block',
                margin: 'auto',
                backgroundColor: '#4CAF50',
                border: 'none',
                color: 'white',
                padding: '10px 15px',
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '16px',
                cursor: 'pointer'}} onClick={() => onSendHandler(email, nextQ)}>Send</button>
        </>
    );
}

export default memo(Email);