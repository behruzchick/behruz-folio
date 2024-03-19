import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import krasavchik from '../images/krasavchik.jpg'
import gsap from 'gsap';
import rezume from '../images/index.html.pdf'
import './Home.css'
import { useGSAP } from '@gsap/react';
const Main = () => {
    useGSAP(() => {
        const timeline = gsap.timeline();
        timeline
        .from('.text-wrape',{
            opacity:0,
            x:"-500",
            duration:1.3
        })


        if (window.matchMedia('(max-width: 1000px)').matches) {
            timeline
                .from('.img-wrape', { y:'300',duration:1.3 ,opacity:0});
          }else{
            timeline
            .from('.img-wrape',{
                opacity:0,
                x:"50",
                duration:1.3
            })
          }
    },[])
  return (
    <Container className='main-container' sx={{
        display:"flex"
    }}>
        <Box className='text-wrape'>
            <p className='main-p' style={{color:"gray",marginBottom:"0px"}}>
                I'm Fullstack developer
            </p>
            <h1 className='main-h1' style={{color:"white"}}>
                Hello!
            </h1>
            <h6 className='main-h6' style={{color:"white",marginTop:"0px"}}>
                My name is Behruz
            </h6>

            <Box className='btns-wrape'>
                <Button href='https://www.instagram.com/behruz_akbaraliev/' target='_blank' size='large' color='secondary'><InstagramIcon/></Button>
                <Button href='https://t.me/behruz_akbarliev' size='large' target='_blank' ><TelegramIcon/></Button>
                <Button href={rezume} size='large' target='_blank' >Download CV</Button>
            </Box>
        </Box>
        <Box className='img-wrape'>
            <img className='main-img'  src={krasavchik} alt="main-img" />
        </Box>
    </Container>
  )
}

export default Main