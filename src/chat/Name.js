import React, {memo, useState} from 'react';

function Name({nextQ, onSendHandler}) {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const handleChange = (e) => {
        e.target.name === 'fname' ? setFname(e.target.value) : setLname(e.target.value);
    }

    return (
        <>
            <input style={{width: '20%',
                padding: '12px 20px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                display: 'block',
                margin: 'auto',
                boxSizing: 'border-box'}}
                   placeholder="First Name"
                   type="text"
                   name="fname" value={fname} onChange={handleChange}/>
            <input style={{width: '20%',
                padding: '12px 20px',
                display: 'block',
                margin: '10px auto',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box'}}
                   placeholder="Last Name"
                   type="text"
                   name="lname" value={lname} onChange={handleChange}/>
            <button style={{display: 'block',
                margin: 'auto',
                backgroundColor: '#4CAF50',
                border: 'none',
                color: 'white',
                padding: '10px 15px',
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '16px',
                cursor: 'pointer'}} onClick={() => onSendHandler(fname+" "+lname, nextQ)}>Send</button>
        </>
    );
}

export default memo(Name);