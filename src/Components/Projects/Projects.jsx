import { useGSAP } from '@gsap/react'
import { Box, Container, ImageList, ImageListItem, ImageListItemBar, ToggleButton, ToggleButtonGroup } from '@mui/material'
import gsap from 'gsap'
import React, { useState } from 'react'
import './Projects.css'
import { projects } from "./AllProjects";
import behruz from '../images/beha.png'
import { useNavigate } from 'react-router-dom'
const Projects = ({ classNameCom }) => {
  const navigate = useNavigate();
  useGSAP(() => {
    gsap
      .timeline()
      .from('.projects-header', { x: '-500', duration: 1.3 ,opacity:0})
      gsap
      .timeline()
      .from('.projects-list', { y: '100', duration: 1.3 ,opacity:0})
  })
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Container className='projects'>
      <Box className='projects-header'>
        <h3 style={{ color: "white" }}>Projects</h3>
        {/* <ToggleButtonGroup
          color="secondary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton style={{ color: "gray" }} value={'studiyng projects'}>Studiyng projects</ToggleButton>
          <ToggleButton style={{ color: "gray" }} value={'real projects'}>Real projects</ToggleButton>
        </ToggleButtonGroup> */}
      </Box>
      <Box className='projects-list'>
          <ImageList className='image-list'  style={{borderRadius:"10px"}}>
            {
              projects.map((item,index) => (
                <ImageListItem className='image-block' key={index} >
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    style={{borderRadius:"10px",cursor:"pointer"}}
                    onClick={() => window.open(item.link, '_blank')}
                    loading="lazy"      
                  />

                  <ImageListItemBar
                    title={item.title}
                    sx={{color:"white"}}
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