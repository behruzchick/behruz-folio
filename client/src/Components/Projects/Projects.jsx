import { useGSAP } from '@gsap/react'
import { Box, Button, Container, ImageList, ImageListItem, ImageListItemBar, Modal, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import gsap from 'gsap'
import React, { useState } from 'react'
import './Projects.css'
import CloseIcon from '@mui/icons-material/Close';
import { projects } from "./AllProjects";
import behruz from '../images/beha.png'
import { useNavigate } from 'react-router-dom'
const Projects = ({ classNameCom }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [modalItem,setModalItem]= useState({});

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = (item) => {
    console.log("itemm",item);
    setModalItem(item)
    setOpen(true);
  }

  useGSAP(() => {
    gsap
      .timeline()
      .from('.projects-header', { x: '-500', duration: 1.3, opacity: 0 })
    gsap
      .timeline()
      .from('.projects-list', { y: '100', duration: 1.3, opacity: 0 })
  })
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Container className='projects'>
      <Box className='projects-header'>
        <h3 style={{ color: "white" }}>PROJECTS</h3>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modal-box'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalItem.title}
            <CloseIcon onClick={handleClose} className='close-icon'/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalItem.description}
          </Typography>
          <Typography sx={{mt:3}}>
            <Button href={modalItem.link} target='_blank'>View demo</Button>
            <Button href={modalItem.gitHubLink} target='_blank'>Github source</Button>
          </Typography>
        </Box>
      </Modal>
      <Box className='projects-list'>
        <ImageList className='image-list' style={{ borderRadius: "10px" }}>
          {
            projects.map((item, index) => (
              <ImageListItem className='image-block' key={index} onClick={() => handleOpen(item)}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  style={{ borderRadius: "10px", cursor: "pointer" }}
                  // onClick={() => window.open(item.link, '_blank')}
                  loading="lazy"
                />

                <ImageListItemBar
                  title={item.title}
                  sx={{ color: "white" }}
                  position="below"
                />
              </ImageListItem>
            ))
          }
        </ImageList>
      </Box>
    </Container>
  )
}

export default Projects