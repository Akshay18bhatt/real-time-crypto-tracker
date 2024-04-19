import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import "./tabscomponent.css";
import Grid from './GridView/Grid';

export default function TabsComponent({coinsData}) {
  const [value, setValue] = React.useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  const theme= createTheme({
    palette:{
        primary:{
            main: "#ff0000",
        }
    }
  })
  const style={
    fontWeight:600,
  }

  return (
    <ThemeProvider theme={theme} >
      <TabContext value={value}  >
        <div >
          <TabList onChange={handleChange} variant="fullWidth"  >
            <Tab label="Grid" value="grid" sx={style}  />
            <Tab label="List" value="list" sx={style}  />
            
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className='coin-cards-container'>
          {coinsData.map((coin,ind)=>{
              return(
                
                <Grid coin={coin} key={coin.id} />
              )
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">List</TabPanel>
        
      </TabContext>
    </ThemeProvider>
  );
}