import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import Navbar from '../components/navbar';
import Weather from '../components/weather';
import Agenda from '../components/agenda';

export default function Home() {
  const tempWeather = {"main": {"temp": 288.2}}
  
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>      
      <Navbar></Navbar>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h1" color="text.primary" gutterBottom>
            Next.js demo
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <Weather></Weather>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Agenda></Agenda>
          </Grid>
        </Grid>

      </Container>
    </div>
  )
}