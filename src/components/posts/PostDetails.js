import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import {  useParams, useLocation } from 'react-router-dom';

import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

import SimpleDateTime  from 'react-simple-timestamp-to-date';


export default function  PostDetails () {
    let {id} = useParams()
    useFirestoreConnect(`posts`);
    const posts = useSelector((state) => state.firestore.data.posts);
    const post = posts? posts[id] : null

    useEffect(() => {
        const post = posts? posts[id] : null
        
      }, [post]);
    
      
      
    
    
    
    console.log(posts)

    return (
        <Container
        sx={{
        width: '100%',
        
        }}
        >
            <Box sx={{padding: '20px',width: '600px'}}>
                <Card sx={{ maxWidth: 500, marginBottom: '10px'}}>
                    <CardActionArea>
                        
                        <CardContent>
                            <Typography variant='h5'component="div" >
                                {`${post.title} - ${id}`}
                            </Typography>
                            <Typography variant='subtitle1'>
                                {`${post.content}`}
                            </Typography>
                            <Typography gutterBottom component="div" variant='caption'  >
                                Posted By Mladen Reljic
                            </Typography>
                            <Typography variant='caption' >
                            <SimpleDateTime dateFormat="DMY" dateSeparator="/"  timeSeparator=":">{post.createdAt}</SimpleDateTime>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Container>
    )
}
