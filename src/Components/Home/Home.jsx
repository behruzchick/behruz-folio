import React, { useState } from 'react'
import beha from '../images/beha.png'
import behruz from '../images/behruz.png'
import { Box, Button, Container } from '@mui/material'
import Header from '../Header/Header'
import About from '../About/About'
import Projects from '../Projects/Projects'
import './Home.css'
import Contact from '../Contact/Contact'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Main from './Main'
const Home = () => {
    const [tabValue,setTabValue] = useState(0);
    const [classNameCom,setClassNameCom] = useState("active");
    return (
        <Box>
            <Header setTabValue={setTabValue}/>
            <img src={behruz} alt="bg-img" style={{ position: 'absolute', width: '100%', objectFit: "cover", top: "0", left: "0", height: '100%', zIndex:'-1',mixBlendMode: 'multiply'}} />
            <Container className='main-wrape'>


                    {   tabValue === 0 ?
                        <Main/>:
                        tabValue === 1 ?
                        <About classNameCom={classNameCom}/>
                        :tabValue === 2 ?
                        <Projects classNameCom={classNameCom}/>
                        :tabValue === 3 ?
                        <Contact classNameCom={classNameCom}/>
                        :null
                    }
            </Container>
        </Box>
    )
}

export default Home