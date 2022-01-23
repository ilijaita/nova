import React, { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { createPost } from '../../store/actions/postActions'
import { useDispatch } from "react-redux";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";

export default function CreatePost() {
    const [state, setState] = useState({title: "", content: ""})
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    
    const firestore = useFirestore();
    const dispatch = useDispatch();
    const create = useCallback(
        post => dispatch(createPost({ firestore }, post)),
        [firestore]
    );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        create({title, content}) /* Object */
    
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
                Create Post
            </Typography>
            <TextField
            sx={{minWidth: 500}}
            required
            id="title"
            label="Title"
            defaultValue=""
            onInput={ e => setTitle(e.target.value)}
            />
            <TextField
            sx={{minWidth: 500}}
            required
            multiline
            maxRows={4}
            id="content"
            label="Content"
            defaultValue=""
            onInput={ e=>setContent(e.target.value)}
            />
            <Button
            type="submit"
             variant="contained"
             sx={{width: 100,margin: '0 auto'}}
            align="center"
            onClick={handleSubmit}
            >
            Create
            </Button>
        </Box>
        
        
    </Box>
    )
}
