// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Grid from "@material-ui/core/Grid";
// import './Header.css';
// import bk3 from "../img/bk4.png";
// import Hidden from "@material-ui/core/Hidden";
// import Title from "./homePage/Title";
// import About from "./About";
//
// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
//
//     return (
//         <Typography
//             component="div"
//             role="tabpanel"
//             hidden={value !== index}
//             id={`vertical-tabpanel-${index}`}
//             aria-labelledby={`vertical-tab-${index}`}
//             {...other}
//         >
//             {value === index && <Box>
//                 <div className="home1 ">
//                 <section id="home1" >
//                     <div className="row  ">
//                         <div className="col-lg-6 col-md-12">
//                         <Title/>
//                         </div>
//                         <div className="offset-2"></div>
//                         <Hidden only={['sm','md' ,'xs']}>
//                         <div className="col-4 MyPic  " >
//                         <img src={bk3} style={{width:"24vw"}} className="float-right pr-2"/>
//                         </div>
//                         </Hidden>
//                     </div>
//
//                     {/*<img src={logo}  className="home1"/>*/}
//
//                 </section >
//                 </div>
//                <section id="about" >
//                         <About/>
//                     </section >
//                 <div className="home1">
//                     <section id="home3" >
//                         <Grid container wrap="nowrap" spacing={1}>
//                             <div className="MyTitle">
//                                 <h1>Hi.</h1>
//                                 <h1>I'm Mohammed Almazyad</h1>
//                                 <span>   Computer Science  From King Saud University</span>
//                             </div>
//                         </Grid>
//                         {/*<img src={logo}  className="home1"/>*/}
//
//                     </section >
//                 </div>
//             </Box>}
//         </Typography>
//     );
// }
//
// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };
//
// function a11yProps(index) {
//     return {
//         id: `vertical-tab-${index}`,
//         'aria-controls': `vertical-tabpanel-${index}`,
//     };
// }
//
// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper,
//         display: 'flex',
// },
//     tabs: {
//         borderRight: `1px solid ${theme.palette.divider}`,
//         alignItems: "center",
//         display: 'grid',
//         height: "100%",
//         width: "8vw",
//         position: "fixed",
//     },
//
// }));
// export default function Header(props) {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);
//
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//    return(
//        <div className={classes.root}>
//            <Grid container wrap="nowrap" spacing={1}>
//                <Grid item xs={1}>
//                    <Hidden only={['sm', 'md','xs']}>
//                    <Tabs
//                orientation="vertical"
//                value={value}
//                indicatorColor="primary"
//                textColor="primary"
//                onChange={handleChange}
//                className={classes.tabs}
//                variant="fullWidth"
//                centered
//            >
//
//                <Tab label={<a style={{ textDecoration: 'none', color:"inherit" }}
//                                href="#home1">home 1</a>} {...a11yProps(0)} />
//                <Tab label={<a style={{ textDecoration: 'none', color:"inherit" }}
//                                href="#about">ABOUT</a>}{...a11yProps(1)} />
//                <Tab label={<a style={{ textDecoration: 'none', color:"inherit" }}
//                               href="#home3">home 3</a>} {...a11yProps(2)} />
//
//            </Tabs>
//                    </Hidden>
//                </Grid>
//                <Grid  xs={11}>
//
//                <TabPanel  value={value} index={0}/>
//                <TabPanel value={value} index={1}/>
//                <TabPanel value={value} index={2}/>
//
//                </Grid>
//            </Grid>
//        </div>
//    );
// }