import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Tabs, Tab } from "@mui/material";

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography component={"span"} display={"block"} variant="subtitle1">
            {children}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

interface TabData {
  label: string;
  content: React.ReactNode;
}

interface CustomTabsProps {
  tabs: TabData[];
}

function a11yProps(index: number) {
  return {
    id: `custom-tab-${index}`,
    "aria-controls": `custom-tabpanel-${index}`,
  };
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: 1, bgcolor: "#fff" }} className="rounded-md shadow-sm">
        <Box sx={{ borderBottom: 1, borderTop: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            sx={{
              bgcolor: "#171819",
              pl: { md: "15rem", sm: "5rem" },
              "& button": {
                fontSize: { md: 18, sm: 16, xs: 13 },
                fontWeight: 500,
                p: 0,
                color: "#fff",
                mx: { md: 4, sm: 2, xs: 1 },
                my: 1,
              },
              "& button.Mui-selected": {
                color: "#E4C590",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#E4C590",
                height: 4,
                borderRadius: "5px",
              },
            }}
          >
            {tabs.map((tab, index) => (
              <Tab label={tab.label} {...a11yProps(index)} key={index} />
            ))}
          </Tabs>
        </Box>
      </Box>
      {tabs.map((tab, index) => (
        <TabPanel value={value} index={index} key={index}>
          {tab.content}
        </TabPanel>
      ))}
    </>
  );
};

export default CustomTabs;
