
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Card, CardActions, CardContent, CardMedia, CircularProgress, TextField, Typography } from '@mui/material';
export default function Basicbutton() {
    return (
        <div>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Typography variant="h1" component="h2">
        h1. Heading
        </Typography>
        <Typography variant="h2" component="h2">
        h1. Heading
        </Typography>
        <Typography variant="h3" component="h2">
        h1. Heading
        </Typography>
        <Typography variant="h4" component="h2">
        h1. Heading
        </Typography>
        <Typography variant="h5" component="h2">
        h1. Heading
        </Typography>
        <Typography variant="h6" component="h2">
        h1. Heading
        </Typography>

        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>
        <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Outlined secondary" color="secondary" focused />
      <TextField label="Filled success" variant="filled" color="success" focused />
      <TextField
        label="Standard warning"
        variant="standard"
        color="warning"
        focused
      />
    </Box>
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://tse3.mm.bing.net/th?id=OIP.PH8TeeTyUX778sBxjlve5wHaHa&pid=Api&P=0&h=180"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tubelight
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Tubelights are those whose mande works slow, Commonly found in mandiiii..
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
        </div>
      );
}
