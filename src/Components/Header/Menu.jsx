import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {

    const getIcon = (index) => {
        switch (index) {
          case 0:
            return <HomeIcon sx={{fontSize:28}} />;
          case 1:
            return <MiscellaneousServicesIcon />;
          case 2:
            return <PeopleIcon />;
          case 3:
            return <InfoIcon />;
          case 4:
            return <AlternateEmailIcon />;
          default:
            return null;
        }
      };
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      {/* <List sx={{marginTop:8}}>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <HomeIcon/>
              </ListItemIcon>
            <p className='text-lg uppercase font-semibold text-black'>Home</p>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <MiscellaneousServicesIcon/>
              </ListItemIcon>
            <p className='text-lg uppercase font-semibold text-black'>Services</p>
            </ListItemButton>
          </ListItem>


          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <PeopleIcon/>
              </ListItemIcon>
            <p className='text-lg uppercase font-semibold text-black'>Clients</p>
            </ListItemButton>
          </ListItem>


          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <InfoIcon/>
              </ListItemIcon>
            <p className='text-lg uppercase font-semibold text-black'>About</p>
            </ListItemButton>
          </ListItem>


          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <AlternateEmailIcon/>
              </ListItemIcon>
            <p className='text-lg uppercase font-semibold text-black'>Contact</p>
            </ListItemButton>
          </ListItem>
        
      </List> */}

<List sx={{marginTop:10}}>
        {['Home', 'Services', 'Clients', 'About','Contact'].map((text, index) => (
          <ListItem key={index} disablePadding sx={{marginBottom:2}}>
            <ListItemButton>
              <ListItemIcon>
                {getIcon(index)}
              </ListItemIcon>
              <Link to={text === "Home" ? "/" : `/${text}`}> <p className='text-lg uppercase text-black font-semibold'> {text} </p> </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Divider />
      
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}> { open ? <CloseIcon sx={{fontSize:34,color:"#363062"}}/> : <MenuIcon sx={{fontSize:34,  color:"#363062"}} /> } </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
