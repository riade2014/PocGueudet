import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import React from "react";
import background from "../assets/images/background.svg";
import { alignProperty } from "@mui/material/styles/cssUtils";

function Main() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="background-image">
        {/* <div> */}
        <img src={background} alt="back" width="100%" />
        {/* </div> */}
      </div>
      <div className="intro">
        <label>Votre voiture, nos services</label>
        <p>
          Gueudet 1880, c'est 153 concessions en France pour acheter, vendre et
          entretenir votre voiture neuve ou d'occasion.
        </p>
      </div>
      <div className="tabs-menu">
        <Box
          sx={{
            flexGrow: 1,
            width: 100,
            bgcolor: "black",
            color: "white",
            paddingX:'16px',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="visible arrows tabs example"
            TabIndicatorProps={{style:{'border': '2px solid rgba(110, 191, 173, 1)'}}}
            textColor="white"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                "&.Mui-disabled": { opacity: 0.3 },
              },
            }}
          >
            <Tab label={<span className="tab">Acheter</span> }/>
            <Tab label={<span className="tab">Vendre</span> } />
            <Tab label={<span className="tab">Enretenir</span> } />
          </Tabs>
        </Box>
      </div>
    </>
  );
}
export default Main;
