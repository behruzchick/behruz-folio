import { Container } from '@mui/material'
import React from 'react'
import './Contact.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Contact = ({classNameCom}) => {
    useGSAP(() => {
      const timeline = gsap.timeline();
        gsap
        .timeline()
        .to('.contact',{x:'200',duration:1.3})

        if (window.matchMedia('(max-width: 600px)').matches) {
          timeline
              .to('.contact', { x:'200',duration:1.3 });
      }else if(window.matchMedia('(max-width: 400px)').matches){
        timeline
        .to('.contact', { x:'100',duration:1.3 });
      }
    })
  return (
    <Container className='contact'  sx={{zIndex:'500',color:"white"}}>Пока не зделал :((((9</Container>
  )
}

export default Contact