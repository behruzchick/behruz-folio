import { Box, Button, Container ,FormControl,FormGroup, FormLabel, Input} from '@mui/material'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import GithubIcon from '@mui/icons-material/GitHub';
import TelelgramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
// import GithubIcon from '@mui/icons-material/GitHub';
import './Contact.css'
const Contact = ({classNameCom}) => {
    useGSAP(() => {
      const timeline = gsap.timeline();
      timeline
      .from('.form-box', { x:'200',duration:1.3,opacity:0 });


        if (window.matchMedia('(max-width: 600px)').matches) {
          timeline
              .from('.socials-btns-box', { x:'-100',duration:1.3,opacity:0 });
      }else if(window.matchMedia('(max-width: 400px)').matches){

          timeline
            .from('.socials-btns-box', {duration:1.3,opacity:0 });


          timeline
            .from('.form-box', {y:'-300',duration:1.3,opacity:0 });
      }
      else{
        timeline
        .from('.socials-btns-box', { x:'-200',duration:1.3 ,opacity:0});
      }

    })
  return (
    <Container className='contact' sx={{display:"flex",flexWrap:'wrap'}}>
      <Box className='socials-btns-box'>
          <header className='header-row'>
              <h3>CONTACT</h3>
          </header>
          <Box className="social-btns">
              <Button  href='https://github.com/behruzchick' target='_bank' sx={{color:"black"}}>
                <GithubIcon/>
              </Button>
              <Button color='secondary' href='https://www.instagram.com/behruz_akbaraliev/' target='_blank' sx={{color:"primary"}}>
                <InstagramIcon/>
              </Button>
              <Button href='https://t.me/behruz_akbarliev' target='_blank' sx={{color:"primary"}}>
                <TelelgramIcon/>
              </Button>

          </Box>
      </Box>
      <Box className='form-box'>
              <FormGroup className='form'>
                  <Input sx={{color:"white"}} placeholder='Youre email'/>
                  <Input sx={{color:"white"}} placeholder='Ask'/>
              </FormGroup>
              <Button variant='sumbit'>
                Sumbit
              </Button>
      </Box>
    </Container>
  )
}

export default Contact