import { Chat, Home, Logout, Settings, Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { motion } from 'framer-motion';

import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => setOpen(!open);
  
  const menuItens = [
    {text: "Dashboard", icon: <Home />, link: '/'},
    {text: "Chat", icon: <Chat />, link: '/chat'},
    {text: "Configurações", icon: <Settings />, link: 'configuracoes'},
    {text: "Sair", icon: <Logout />, link: '/sair'},
  ]
  return (
    <Box>
      <IconButton aria-label="Menu" onClick={toggleDrawer} sx={{color: 'text.secondary'}} className="fixed top-4 left-4 z-50 p-2 rouded-md">
        <Menu />
      </IconButton>
      <Drawer variant={isMobile ? "temporary" : "permanent"} anchor="left" open={open} onClose={toggleDrawer} className="w-64">
        <motion.div
          initial={{x: -100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.3}}
          className="p-4 w-65"
        >
          <h2 className="text-xl font-bold m-4 text-center">Menu</h2>
          <List className="overflow-y-auto">
            {menuItens.map((item, index) => (
              <ListItem key={index} disablePadding className="hover:bg-gray-100">
                <ListItemButton component={Link} to={item.link} >
                  <ListItemIcon sx={{color: 'primary.main'}}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </motion.div>
      </Drawer>

    </Box>
  )
}