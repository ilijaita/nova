import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <Box
        component="form"
        sx={{margin: '0 auto',display: 'flex',width: 600,marginTop: '50px',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
    >
        <Box sx={{margin: '0 auto',display: 'grid'}}>
            <Typography variant='h5' align='center'>
                Sign In
            </Typography>
            <TextField
            sx={{minWidth: 300}}
            required
            id="email"
            label="Email"
            defaultValue=""
            onInput={ e => setEmail(e.target.value) }
            />
            <TextField
            sx={{minWidth: 300}}
            required
            id="password"
            label="Password"
            defaultValue=""
            onInput={ e => setPassword(e.target.value) }
            />
            <Button
            type="submit"
             variant="contained"
             sx={{width: 100,margin: '0 auto'}}
            align="center"
            onClick={handleSubmit}
            >
            Submit
            </Button>
        </Box>
        
        
    </Box>
    )
}
