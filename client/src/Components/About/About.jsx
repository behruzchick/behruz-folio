import { useGSAP } from '@gsap/react'
import { Box, Container } from '@mui/material'
import gsap from 'gsap'
import React from 'react'
import behruz2 from '../images/behruz.jpg'
import './About.css'
const About = ({ classNameCom }) => {
  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline
      .from('.about-img-wrape', { x: '-300', duration: 1.3, opacity: 0 })


      if (window.matchMedia('(max-width: 1000px)').matches) {
        timeline
            .from('.about-text-wrape', { y:'300',duration:1.3 ,opacity:0});
      }else{
        timeline
        .from('.about-text-wrape', { x: '50', duration: 1.3, opacity: 0 })
      }
  })
  return (
    <Container className={'about'}>
      <Box className='about-img-wrape'>
        <header className='about-img-wrape-header'>
          <h3 style={{ color: "white", marginLeft: '13px' }}>ABOUT ME</h3>
        </header>
        <img className='about-img' src={behruz2} alt="" />
      </Box>
      <Box className='about-text-wrape'>
        <ul className='about-info' style={{ color: "white" }}>
          <li>Hi I'm Behruz , at 17 years old , born in Tashkent in 2006</li>
          <li>I'm doing Frontend and Backend concepts work on creating responsive web interfaces.</li>
          <li>I am proficient in technologies such as Javascript, HTML, CSS, Node js, React js, Bootstrap , Material UI.</li>
          <li>I strive for a high level of experience in web application and website development and am willing to embrace modern technologies to create scalable and implement clear web applications. I actively study new technologies and follow best practices in the field of Frontend development.</li>
        </ul>
      </Box>
    </Container>
  )
}

export default About