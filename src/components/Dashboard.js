import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LinkPieChart from "./LinkPieChart";
import ProjectAppBar from "./ProjectAppBar";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import RequisitionsDashboard from "./RequisitionsDashboard";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MoneyIcon from '@material-ui/icons/Money';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SalesBarGraph from './SalesBarGraph'
import API from "../endPoints"


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Segoe UI",
    backgroundColor: "rgb(247, 249, 252)",
  },
  spacing: {
    margin: 0,
  },
  title: {
    flexGrow: 1,
  },
  grid: {
    margin: "0px !important",
  },
  drawerPaper: {
    position: "relative",
    flexShrink: 0,
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    justifyContent: "space-evenly",
  },
  fixedHeight: {
    height: 150,
  },
  label: {
    fontSize: "0.7rem",
    color: "white",
  },
  table: {
    padding: "20px",
    paddingBottom: "0",
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const currentUrl = useLocation();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");
  const [items, setItems] = useState([]);
  const [id, setId] = useState();
  const [income, setIncome]= useState([]);
  const [totalIncome, setTotalIcome]= useState(0);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {
          MuiGrid: {
            "spacing-xs-2": "-6px !important",
          },
        },
        palette: {
          type: prefersDarkMode ? "light" : "dark",
        },
      }),
    [prefersDarkMode]
  );

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  useEffect(
    ()=>{
      axios.get (API.income)
      .then(
       async (response)=>{
        setIncome((currentState)=>{
        let newState = currentState;
          newState = [...response.data]
              return newState;
        })
        let sum = 0;
    await  response.data.map((item)=>{
        sum += item["total"]
    // console.log(item["total"])
  })
 console.log(sum);
 
        return sum;
      // console.log(response.data)
      }).then((sum)=>{
        setTotalIcome(sum)
        console.log(sum)
      })
    
    .catch((err) => {
            console.log(err);
          });
      }, [income.id, id]);
  
    // setId(items.id);
    // axios
    //   .get(API.income )
    //   .then((response) => {
    //     setIncome(response.data)

    //     let sum = 0;
    //  let numbers = [5,10,15]
    //       for(let i = 0; i <= numbers.length; i++){
    //         sum =+ numbers[i];
    //       }
    //       // return setTotalIcome(sum);
    //     console.log(number);
    //   })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [income.id, id]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>

        <ProjectAppBar location={currentUrl} />

        <main className={classes.content}>
          <div
            className={classes.appBarSpacer}
            style={{ minHeight: "3rem" }}
          />

          <Container style={{ marginTop: "40px" }}>

            <Typography
              style={{ fontSize: "1.5rem", fontWeight: "600", fontFamily: "Segoe UI", color: "rgba(0, 0, 0, 0.87)", }}
              component="h1"
            >
              {"Biyinzika Mukono C"}
            </Typography>

            <Divider style={{ marginTop: "15px", backgroundColor: "rgba(0,0,0,0.2)" }} />

            <Grid container spacing={2} style={{ marginTop: "10px", marginBottom: "20px", }}>

              <Grid item xs={12} md={3} lg={3}>
                <Card
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    color: "rgba(0, 0, 0, 0.87)",
                  }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      component="h6"
                      style={{
                        fontFamily: "Segoe UI",
                        padding: "0",
                        fontWeight: "600",
                        fontSize: "1.0625rem"
                      }}>
                      Expenditure
                        <Chip
                        classes={{ label: classes.label, }}
                        style={{
                          fontFamily: "Segoe UI",
                          float: "right",
                          backgroundColor: "purple",
                        }}
                        label="Average"
                        size="small"
                      />
                    </Typography>

                    <Typography
                      style={{
                        fontFamily: "Segoe UI",
                        padding: "0",
                        paddingTop: "3px",
                        fontWeight: "400",
                        fontSize: "1.5rem"
                      }}
                    >
                      {"2.532"}
                      <sub
                        style={{
                          fontWeight: "600",
                          fontSize: "0.8125rem"
                        }}
                      >
                        {" UGX"}
                      </sub>
                    </Typography>

                    <Typography
                      style={{
                        fontFamily: "Segoe UI",
                        padding: "0px",
                        paddingTop: "10px",
                        color: "rgb(76, 175, 80)",
                        fontWeight: "700",
                      }}
                    >
                      {"+26"}%
                        <ArrowDropUpIcon />
                      <span
                        style={{
                          fontFamily: "Segoe UI",
                          marginLeft: "20px",
                          color: "rgb(117, 117, 117)",
                          fontSize: "1rem",
                          fontWeight: "400"
                        }}
                      >
                        Since last week
                        </span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={3} lg={3}>
                <Card
                  style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgba(0, 0, 0, 0.87)", }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      component="h6"
                      style={{ fontFamily: "Segoe UI", padding: "0", fontWeight: "600", fontSize: "1.0625rem" }}>
                      Sales Revenue
                        <Chip
                        classes={{ label: classes.label, }}
                        style={{ fontFamily: "Segoe UI", float: "right", backgroundColor: "purple", }}
                        label="Low"
                        size="small"
                      />
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Segoe UI", padding: "0", paddingTop: "3px", fontWeight: "400", fontSize: "1.5rem"
                      }}
                    >
                      {"170.212"}
                      <sub
                        style={{
                          fontWeight: "600",
                          fontSize: "0.8125rem"
                        }}
                      >
                        UGX
                        </sub>
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Segoe UI",
                        padding: "0px",
                        paddingTop: "10px",
                        color: "rgb(244, 67, 54)",
                        fontWeight: "700",
                      }}
                    >
                      {"-14"}%
                        <ArrowDropDownIcon />
                      <span
                        style={{
                          fontFamily: "Segoe UI",
                          marginLeft: "20px",
                          color: "rgb(117, 117, 117)",
                          fontSize: "1rem",
                          fontWeight: "400"
                        }}
                      >
                        Since last week
                            </span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={3} lg={3}>
                <Card
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    color: "rgba(0, 0, 0, 0.87)",
                  }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      component="h6"
                      style={{
                        fontFamily: "Segoe UI",
                        padding: "0",
                        fontWeight: "600",
                        fontSize: "1.0625rem"
                      }}
                    >
                      Sales Quantity
                        <Chip
                        classes={{ label: classes.label, }}
                        style={{ fontFamily: "Segoe UI", float: "right", backgroundColor: "purple", }}
                        label="Average"
                        size="small"
                      />
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Segoe UI",
                        padding: "0",
                        paddingTop: "3px",
                        fontWeight: "400",
                        fontSize: "1.5rem"
                      }}
                    >
                      {"33"}
                      <sub
                        style={{
                          fontWeight: "600",
                          fontSize: "0.8125rem",
                        }}
                      >
                        {" KG"}
                      </sub>
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Segoe UI",
                        padding: "0px",
                        paddingTop: "10px",
                        color: "rgb(76, 175, 80)",
                        fontWeight: "700",
                      }}
                    >
                      {"+18"}%
                        <ArrowDropUpIcon />
                      <span
                        style={{
                          fontFamily: "Segoe UI",
                          marginLeft: "20px",
                          color: "rgb(117, 117, 117)",
                          fontSize: "1rem",
                          fontWeight: "400"
                        }}
                      >
                        Since last week
                        </span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={3} lg={3}>
                <Card
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    color: "rgba(0, 0, 0, 0.87)",
                  }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      component="h6"
                      style={{
                        fontFamily: "Segoe UI",
                        padding: "0",
                        fontWeight: "600",
                        fontSize: "1.0625rem"
                      }}
                    >
                      Earnings
                        <Chip
                        classes={{ label: classes.label, }}
                        style={{
                          fontFamily: "Segoe UI",
                          float: "right",
                          backgroundColor: "purple",
                        }}
                        label="High"
                        size="small"
                      />
                    </Typography>





                    {/* {items &&
                    items
                      .map((item) => ( */}
                      
                    <Typography
                      style={{
                        fontFamily: "Segoe UI",
                        padding: "0",
                        paddingTop: "3px",
                        fontWeight: "400",
                        fontSize: "1.5rem"
                      }}
                    >
                    
                   {totalIncome}
                      {/* {" 45,000,000"} */}
                      <sub
                        style={{
                          fontWeight: "600",
                          fontSize: "0.8125rem",
                        }}
                      >
                        {" UGX"}
                      </sub>
                    </Typography>
                       {/* ))} */}
                    <Typography
                      style={{
                        fontFamily: "Segoe UI",
                        padding: "0px",
                        paddingTop: "10px",
                        color: "rgb(244, 67, 54)",
                        fontWeight: "700",
                      }}
                    >
                      {"-9"}%
                        <ArrowDropDownIcon />
                      <span
                        style={{
                          fontFamily: "Segoe UI",
                          marginLeft: "20px",
                          color: "rgb(117, 117, 117)",
                          fontSize: "1rem",
                          fontWeight: "400"
                        }}
                      >
                        Since last week
                        </span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

            </Grid>

            <Grid
              container
              spacing={2}
              style={{
                marginBottom: "20px",
              }}
            >

              <Grid
                item
                xs={12}
                sm={6}
                lg={7}>
                <Card
                  style={{
                    backgroundColor: "white"
                  }}
                >
                  <SalesBarGraph />
                </Card>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                lg={5}>
                <Card
                  style={{
                    backgroundColor: "white"
                  }}
                >
                  <LinkPieChart />
                </Card>
              </Grid>

            </Grid>

            <Card
              style={{
                color: "rgba(0, 0, 0, 0.87)",
                marginBottom: "20px",
                textAlign: "center",
                padding: theme.spacing(2, 2, 2, 0),
              }}
            >
              <Typography
                gutterBottom
                component="h6"
                style={{
                  fontFamily: "Segoe UI",
                  padding: "0,0,30px,0",
                  fontWeight: "600",
                  fontSize: "1.0625rem",
                  marginBottom: "20px",
                }}
              >
                Score Card
                </Typography>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={3}
                  lg={2}
                  style={{
                    padding: "0 20px"
                  }}
                >
                  <CreditCardIcon
                    style={{
                      transform: "scale(1.5)",
                      marginBottom: "20px",
                      color: "rgba(27, 36, 48, 0.5)"
                    }}
                  />

                  <Typography
                    style={{
                      borderRadius: "10px",
                      fontFamily: "Segoe UI",
                      padding: "0px",
                      fontSize: "1.5rem",
                      marginBottom: "20px",
                    }}
                  >
                    {"765.43"}
                    <sub
                      style={{
                        fontWeight: "600",
                        fontSize: "0.8125rem"
                      }}
                    >
                      {" UGX"}
                    </sub>
                  </Typography>

                  <Typography
                    gutterBottom
                    component="h6"
                    style={{
                      fontFamily: "Segoe UI",
                      padding: "0",
                      fontSize: "0.8125rem",
                      fontWeight: "400",
                      textTransform: "uppercase",
                      color: "rgba(27, 36, 48, 0.5)"
                    }}>
                    Expenditure
                      </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={3}
                  lg={2}
                  style={{
                    padding: "0 20px"
                  }}
                >
                  <AssessmentIcon
                    style={{
                      transform: "scale(1.5)",
                      marginBottom: "20px",
                      color: "rgba(27, 36, 48, 0.5)"
                    }}
                  />

                  <Typography
                    style={{
                      borderRadius: "10px",
                      fontFamily: "Segoe UI",
                      padding: "0px",
                      fontSize: "1.5rem",
                      marginBottom: "20px",
                    }}
                  >
                    {"11,650"}
                    <sub
                      style={{
                        fontWeight: "600",
                        fontSize: "0.8125rem"
                      }}
                    >
                      {" KG"}
                    </sub>
                  </Typography>

                  <Typography
                    gutterBottom
                    component="h6"
                    style={{
                      fontFamily: "Segoe UI",
                      padding: "0",
                      fontSize: "0.8125rem",
                      fontWeight: "400",
                      textTransform: "uppercase",
                      color: "rgba(27, 36, 48, 0.5)"
                    }}>
                    Sales
                      </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={3}
                  lg={2}
                  style={{
                    padding: "0 20px"
                  }}
                >
                  <MonetizationOnIcon
                    style={{
                      transform: "scale(1.5)",
                      marginBottom: "20px",
                      color: "rgba(27, 36, 48, 0.5)"
                    }}
                  />

                  <Typography
                    style={{
                      borderRadius: "10px",
                      fontFamily: "Segoe UI",
                      padding: "0px",
                      fontSize: "1.5rem",
                      marginBottom: "20px",
                    }}
                  >
                    {"765.43"}
                    <sub
                      style={{
                        fontWeight: "600",
                        fontSize: "0.8125rem"
                      }}
                    >
                      {" UGX"}
                    </sub>
                  </Typography>

                  <Typography
                    gutterBottom
                    component="h6"
                    style={{
                      fontFamily: "Segoe UI",
                      padding: "0",
                      fontSize: "0.8125rem",
                      fontWeight: "400",
                      textTransform: "uppercase",
                      color: "rgba(27, 36, 48, 0.5)"
                    }}>
                    Return on Investment
                      </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={3}
                  lg={2}
                  style={{
                    padding: "0 20px"
                  }}
                >
                  <SupervisorAccountIcon
                    style={{
                      transform: "scale(1.5)",
                      marginBottom: "20px",
                      color: "rgba(27, 36, 48, 0.5)"
                    }}
                  />

                  <Typography
                    style={{
                      borderRadius: "10px",
                      fontFamily: "Segoe UI",
                      padding: "0px",
                      fontSize: "1.5rem",
                      marginBottom: "20px",
                    }}
                  >
                    {"11"}
                  </Typography>

                  <Typography
                    gutterBottom
                    component="h6"
                    style={{
                      fontFamily: "Segoe UI",
                      padding: "0",
                      fontSize: "0.8125rem",
                      fontWeight: "400",
                      textTransform: "uppercase",
                      color: "rgba(27, 36, 48, 0.5)"
                    }}>
                    Users
                      </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={3}
                  lg={2}
                  style={{
                    padding: "0 20px"
                  }}
                >
                  <MoneyIcon
                    style={{
                      transform: "scale(1.5)",
                      marginBottom: "20px",
                      color: "rgba(27, 36, 48, 0.5)"
                    }}
                  />

                  <Typography
                    style={{
                      borderRadius: "10px",
                      fontFamily: "Segoe UI",
                      padding: "0px",
                      fontSize: "1.5rem",
                      marginBottom: "20px",
                    }}
                  >
                    {"765.43"}
                    <sub
                      style={{
                        fontWeight: "600",
                        fontSize: "0.8125rem"
                      }}
                    >
                      {"UGX"}
                    </sub>
                  </Typography>

                  <Typography
                    gutterBottom
                    component="h6"
                    style={{
                      fontFamily: "Segoe UI",
                      padding: "0",
                      fontSize: "0.8125rem",
                      fontWeight: "400",
                      textTransform: "uppercase",
                      color: "rgba(27, 36, 48, 0.5)"
                    }}
                  >
                    Revenue
                      </Typography>
                </Grid>
              </div>
            </Card>

            <Grid
              container
              style={{
                marginBottom: "20px",
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
              >
                <Card className={classes.table}>
                  <RequisitionsDashboard />
                </Card>

              </Grid>
            </Grid>

          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}
