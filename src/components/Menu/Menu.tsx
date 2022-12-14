import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import styles from '../Menu/Menu.module.css';
import PieChartIcon from '@mui/icons-material/PieChart';
import Typography from '@mui/material/Typography';
import { Sales } from '../Sales/Sales';
import { Customers } from '../Customers/Customers';
import { Products } from '../Products/Produtcs';
import { TransactionList } from '../TransactionList/TransactionList';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export function Menubar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >
      <List>
        <div className={styles.overview}>
            < PieChartIcon />
             <span>Overview</span>
        </div>
        {['Pages', 'Sales', 'Messages', 'Authentication'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Docs', 'Components', 'Help'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',  color: 'text.secondary'}}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, borderRight: '1px solid #E5E7EB'}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, position: "initial"},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, position: "initial" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3}}
      >
        <Typography >
            <Sales />
        </Typography>
        <Typography >
          <div className={styles.containerCard}>
            <Customers/>
            <Products />
          </div>
          <div className={styles.containerCard}>
            <TransactionList />
          </div>
        </Typography>
        <Typography>
          <footer className={styles.footerText}>?? 2022 Tarc??sio Neto, rights reserved.</footer>
        </Typography>
      </Box>
    </Box>
  );
}