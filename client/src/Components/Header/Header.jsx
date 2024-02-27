import AppBar from '@mui/material/AppBar'
import { Box, Container, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
function Header({ setTabValue }) {

    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }

    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setTabValue(newValue)
    };

    const pages = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT']
    return (
        <div className="App">
            <AppBar position='static' sx={{ bgcolor: 'text.disabled', position: 'absolute', top: '0', zIndex: '300' }}>
                <Container maxWidth='x1'>
                    <Toolbar>
                        <Typography variant='h4'>
                            BZ
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: "flex-end" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color={anchorElNav ? "primary" : "text.secondary"}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'flex', md: 'none' },
                                }}
                            >
                                <Tabs
                                    value={value}
                                    onClick={handleCloseNavMenu}
                                    onChange={handleChange}
                                    indicatorColor="secondary"
                                    orientation='vertical'
                                    textColor="inherit"
                                    variant="scrollable"
                                    aria-label="Vertical tabs example"
                                    sx={{
                                        display:{xs:'flex'},
                                        flexDirection: { xs: 'column'},
                                        // background:{xs:'black'}
                                    }}
                                    >
                                    {pages.map((page,index) => (

                                        <Tab
                                            key={index}
                                            sx={{ marginBottom: "15px" ,fontSize:"14px"}}
                                            label={page}
                                            onClick={handleCloseNavMenu}
                                        >
                                        </Tab>

                                    ))}
                                </Tabs>
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="secondary"
                                textColor="inherit"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                            >
                                {pages.map((page) => (
                                    <Tab
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, display: 'block' }}
                                        label={page}
                                    >
                                    </Tab>
                                ))}
                            </Tabs>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Header;
