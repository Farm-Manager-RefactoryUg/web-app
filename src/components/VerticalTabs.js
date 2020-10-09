import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import BasicTable from "./BasicTable";
import AddFarmManager from "./AddFarmMananger";
import Grid from "@material-ui/core/Grid";
import AddTeleFarmer from "./AddTeleFarmer";
import UpdateProfile from "./UpdateProfile";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            style={{ backgroundColor: "rgb(247, 249, 252)", }}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        //backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(12),
        width: "75%",
        margin: "auto",
        boxShadow: "none",
    },
    tab: {
        fontSize: "0.8125rem",
        fontWeight: "600",
        fontFamily: "Segoe UI",
        width: "300px",
        color: "rgba(0,0,0,0.87)",
    }
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card className={classes.root}>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    style={{  paddingLeft: "105px",}}
                >
                    <Tab style={{ outline: "none", }} className={classes.tab} label="Profile" {...a11yProps(0)} />
                    <Tab style={{ outline: "none", }} className={classes.tab} label="Tele-farmers" {...a11yProps(1)} />
                    <Tab style={{ outline: "none", }} className={classes.tab} label="Farm Managers" {...a11yProps(2)} />

                </Tabs>
            

            <TabPanel value={value} index={0}>
                <Grid container>
                    <Grid item xs={12} md={12} lg={12}>
                        <UpdateProfile />
                    </Grid>
                </Grid>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                        <AddTeleFarmer />
                        <BasicTable />
                    </Grid>
                </Grid>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                        <AddFarmManager />
                        <BasicTable />
                    </Grid>
                </Grid>
            </TabPanel>

        </Card >
    );
}
