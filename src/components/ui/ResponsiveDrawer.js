import React,{useState} from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SchoolIcon from '@material-ui/icons/School';
import './ResponsiveDrawer.css';
import Home from "./homePage/Home";
import About from "./aboutPage/About";
import Education from "./educationPage/Education";
import Experience from "./experiencePage/Experience";
import WorkIcon from '@material-ui/icons/Work';
import Skills from "./skillsPage/Skills";
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';


const drawerWidth = 150;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,

        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        position: "fixed",
        marginLeft:0,
            [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        display:"grid",
        alignItems: "center",
        paddingBottom: 200,

    },
    content: {
        flexGrow: 1,
    },
    large: {
        width:90,
        height:90,
        border:" 4px solid #e9ecef",
        marginLeft: 12,
    },
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let [active,setActive]=useState(1);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const اhandleColor = (num) => {
       setActive(num);
    }

    const drawer = (
        <div className={classes.toolbar}>
            <List >
                <ListItem    key={1} >
            {/*<Avatar alt="Remy Sharp" src={myPicF} className={`${classes.large} rounded-circle img-fluid`} />*/}
            </ListItem>
            <Divider />

                <a href="#home"  className="active1" onClick={()=>اhandleColor(1)}  id={1} >
                    <ListItem button onClick={()=>setMobileOpen(false)}  key={1} >
                        <ListItemIcon style={{color:`${active===1?"#007bffd4":"rgba(0, 0, 0, 0.54)"}`}}><HomeIcon /></ListItemIcon>
                        <ListItemText style={{color:`${active===1?"#007bffd4":"black"}`}} primary={"Home"} />
                     </ListItem>
                </a>
                <Divider />
                <Divider />


                <a href="#about" onClick={()=>اhandleColor(2)}>
                <ListItem button onClick={()=>setMobileOpen(false)} key={2} >
                    <ListItemIcon style={{color:`${active===2?"#007bffd4":"rgba(0, 0, 0, 0.54)"}`}} ><PersonIcon /></ListItemIcon>
                    <ListItemText style={{color:`${active===2?"#007bffd4":"black"}`}}  primary={"About"} />
                </ListItem>
                </a>
                <Divider />
                <a href="#education" onClick={()=>اhandleColor(3)}>
                    <ListItem button onClick={()=>setMobileOpen(false)}  key={3}>
                        <ListItemIcon style={{color:`${active===3?"#007bffd4":"rgba(0, 0, 0, 0.54)"}`}} ><SchoolIcon /></ListItemIcon>
                        <ListItemText style={{color:`${active===3?"#007bffd4":"black"}`}}  primary={"Education"} />
                    </ListItem>
                </a>
                <Divider />
                <a href="#experience" onClick={()=>اhandleColor(4)}>
                    <ListItem button  onClick={()=>setMobileOpen(false)} key={4}>
                        <ListItemIcon style={{color:`${active===4?"#007bffd4":"rgba(0, 0, 0, 0.54)"}`}} ><WorkIcon /></ListItemIcon>
                        <ListItemText style={{color:`${active===4?"#007bffd4":"black"}`}} primary={"Experience"} />
                    </ListItem>
                </a>
                <Divider />
                <a href="#skills" onClick={()=>اhandleColor(5)}>
                    <ListItem button onClick={()=>setMobileOpen(false)} key={5}>
                        <ListItemIcon style={{color:`${active===5?"#007bffd4":"rgba(0, 0, 0, 0.54)"}`}} ><FormatListNumberedIcon /></ListItemIcon>
                        <ListItemText style={{color:`${active===5?"#007bffd4":"black"}`}} primary={"Skills"} />
                    </ListItem>
                </a>
                <Divider />

            </List>
        </div>
    );

    return (
        <div className={classes.root}>
                    <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                            style={{height:"5vh",position: "fixed"}}
                        >
                            <MenuIcon style={{position: "fixed"}}/>
                    </IconButton>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        style={{position: "fixed"}}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main  className={`${classes.content} `}>
                <section id="home" className="container-fluid " onMouseEnter={()=>اhandleColor(1)}>
                    <Home/>
                </section>
                <section id="about"  className="container-fluid " onMouseEnter={()=>اhandleColor(2)}>
                    <About/>
                </section>
                <section id="education" className="container-fluid " onMouseEnter={()=>اhandleColor(3)} >
                    <Education/>
                </section>
                <section id="experience" className="container-fluid " onMouseEnter={()=>اhandleColor(4)} >
                    <Experience/>
                </section>
                <section id="skills" className="container-fluid " onMouseEnter={()=>اhandleColor(5)} >
                    <Skills/>
                </section>
            </main>
        </div>
    );
}


export default ResponsiveDrawer;
