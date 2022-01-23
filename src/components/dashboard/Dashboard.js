import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import PostsList from '../posts/PostList'
import Notifications from './Notifications'

import { useDispatch, useSelector } from "react-redux";

import { useFirestoreConnect } from "react-redux-firebase";



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.secondary.light,
  
  
}));

export default function Dashboard() {
    useFirestoreConnect('posts');
    const posts = useSelector(state => state.firestore.ordered.posts);

    
    console.log(posts)
    return (
        <Box sx={{ flexGrow: 1 }} >
        <Grid container  spacing={2} sx={{marginTop: '0px'}}>
            <Grid item xs={8}>
            <Item sx={{borderRadius: 0, boxShadow: 'none'}}>
                <PostsList posts={posts} />
            </Item>
            </Grid>
            <Grid item xs={4}>
            <Item>
                <Notifications />
            </Item>
            </Grid>
        </Grid>
        </Box>
    );
    }