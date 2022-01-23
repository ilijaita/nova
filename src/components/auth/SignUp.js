import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setrePassword] = useState('');

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
                Sign Up
            </Typography>
            <TextField
            sx={{minWidth: 300}}
            required
            id="outlined-required"
            label="Username"
            defaultValue=""
            onInput={ e => setUsername(e.target.value) }
            />
            <TextField
            sx={{minWidth: 300}}
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            onInput={ e => setEmail(e.target.value) }
            />
            <TextField
            sx={{minWidth: 300}}
            required
            id="outlined-required"
            label="Password"
            defaultValue=""
            onInput={ e => setPassword(e.target.value) }
            />
            <TextField
            sx={{minWidth: 300}}
            required
            id="outlined-required"
            label="Repeat Password"
            defaultValue=""
            onInput={ e => setrePassword(e.target.value) }
            />
            <Button
            variant="contained"
            sx={{width: 100,margin: '0 auto'}}
            align="center"
            type="submit"
            >
            Submit
            </Button>
        </Box>
        
        
    </Box>
    )
}
