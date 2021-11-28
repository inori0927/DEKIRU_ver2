import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function BasicDetail() {
    return (
        <Box sx={{ flexGrow: 20 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Grid>
                <Grid item xs={3}>
                    <Button size="small">変更</Button>
                </Grid>
                 
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="名前" variant="outlined" value="山中大輔" />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="outlined-basic" label="メールアドレス" variant="outlined" value="aaaa@gmiail.com" />
                </Grid>
                <Grid item xs={4}>
                    <Button size="large">編集</Button>
                </Grid>
            </Grid>
        </Box>
    );
}