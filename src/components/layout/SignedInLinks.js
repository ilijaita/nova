import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function SignedInLinks() {
    return (
        <ButtonGroup disableElevation variant="contained">
            <Button href="/createpost">
                 New Post
             </Button>
            <Button href='/signin'>
                Log Out
            </Button>
            <Stack direction="row" spacing={2}>
                <Avatar>NN</Avatar>
            </Stack>
        </ButtonGroup>
    )
}
