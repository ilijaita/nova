import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PostSummary({post}) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: '10px'}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="subtitle2" >
            Posted by the Mladen Reljic
          </Typography>
          <Typography variant="caption" >
            3rd September, 2am
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
