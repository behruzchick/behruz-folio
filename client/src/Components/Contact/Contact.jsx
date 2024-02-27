import { Box, Button, Collapse, Container, FormControl, FormGroup, FormLabel, Input, TextareaAutosize } from '@mui/material'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import GithubIcon from '@mui/icons-material/GitHub';
import TelelgramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import emailJs from '@emailjs/browser'
import Textarea from '@mui/joy/Textarea';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
// import GithubIcon from '@mui/icons-material/GitHub';
import './Contact.css'
const Contact = ({ classNameCom }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const form = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline
      .from('.form-box', { x: '200', duration: 1.3, opacity: 0 });


    if (window.matchMedia('(max-width: 600px)').matches) {
      timeline
        .from('.socials-btns-box', { x: '-100', duration: 1.3, opacity: 0 });
    } else if (window.matchMedia('(max-width: 400px)').matches) {

      timeline
        .from('.socials-btns-box', { duration: 1.3, opacity: 0 });


      timeline
        .from('.form-box', { y: '-300', duration: 1.3, opacity: 0 });
    }
    else {
      timeline
        .from('.socials-btns-box', { x: '-200', duration: 1.3, opacity: 0 });
    }

  })

  const handleSumbit = (e) => {
    const servieId = 'service_khok39q'
    const templateId = 'template_t4793b6'
    const publicKey = 'rnj6Z3BwvCEqWyIAu'

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Behruz",
      message: description
    }
    e.preventDefault();
    try {
      emailJs
        .send(servieId, templateId, templateParams, publicKey)
        .then((res) => {
          console.log(res);
          setOpen(true);
        }).catch((e) => {
          alert("Error")
          console.log(e);
        })
    } catch (error) {
      alert("Error in sumbit")
      console.log(error);
    }
  }
  return (
    <Container className='contact' sx={{ display: "flex", flexWrap: 'wrap' }}>
      <Collapse in={open} className='collaspe'>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" onClick={() => setOpen(false)}/>
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Форма успешно отпавлено в почту!
          
          Может в instagram напишешь ????
        </Alert>
      </Collapse>

      <Box className='socials-btns-box'>
        <header className='header-row'>
          <h3>CONTACT</h3>
        </header>
        <Box className="social-btns">
          <Button href='https://github.com/behruzchick' target='_bank' sx={{ color: "black" }}>
            <GithubIcon />
          </Button>
          <Button color='secondary' href='https://www.instagram.com/behruz_akbaraliev/' target='_blank' sx={{ color: "primary" }}>
            <InstagramIcon />
          </Button>
          <Button href='https://t.me/behruz_akbarliev' target='_blank' sx={{ color: "primary" }}>
            <TelelgramIcon />
          </Button>

        </Box>
      </Box>
      <Box className='form-box'>
        <FormGroup ref={form} onSubmit={handleSumbit} className='form' name='myForm' id='myForm' >
          <Input onChange={(e) => setEmail(e.target.value)} sx={{ color: "white" }} type='email' placeholder='Youre Email' />
          <Input onChange={(e) => setName(e.target.value)} sx={{ color: "white" }} type='text' placeholder='Youre Name' />
          <Textarea onChange={(e) => setDescription(e.target.value)} sx={{ color: "white", background: 'black' }} placeholder='Description' />
        </FormGroup>
        <Button ref={form} onClick={handleSumbit} variant='sumbit'>
          Sumbit
        </Button>
      </Box>
    </Container>
  )
}

export default Contact