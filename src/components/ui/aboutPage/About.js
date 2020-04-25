import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper";
import "./About.css"
import Divider from "@material-ui/core/Divider";
import bk3 from "../../img/bk4_1.png";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Slide from "@material-ui/core/Slide";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            marginTop:20

        },
    },
}));
export default function About() {
    let [checked,setChecked]=useState(false);
    const handleChecked = () => {
        setChecked(true);
    }
    const classes = useStyles();

    return(
          <div onTouchStart={()=>handleChecked()} onMouseEnter={()=>handleChecked()} className="aboutSection container-fluid ">
              <div className="row " id="rowAbout">
                  <div className="col-lg-6 col-sm-10 ">
                      <Slide direction="right" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                      <Paper elevation={3}  className="aboutPaper p-3  pr-0 ml-md-5 m-sm-3 mr-lg-0">
                          <div className="aboutText pt-3">
                          <h1>ABOUT ME:</h1>
                          <p className="text-justify mt-3">Born in riyadh 1996, interested in Technology, and interested in solving
                              software  problems also developing it, plus self Learning, ambitious about
                              making life easier with software solutions, and my mother language is arabic , also I’m trying to improve my english skills as much as i can.</p>
                          </div>
                          <div className={classes.root}>
                              <IconButton  href="mailto:m7almazyad@gmail.com"  target="_blank" style={{ marginRight:0}}>
                                  <MailOutlineIcon  fontSize="large" style={{color:"#ca0505"}}/>
                              </IconButton>
                              <IconButton  href="https://www.linkedin.com/in/mohammed-almazyad-945363158/"  target="_blank"  style={{ marginRight:0}}>
                                <LinkedInIcon   fontSize="large"  color="primary" style={{ paddingRight:0}}/>
                              </IconButton>
                              <IconButton href="https://github.com/M7almazyad"  target="_blank" style={{ marginRight:0}}>
                                  <GitHubIcon   fontSize="large" style={{color:"black"}} />
                              </IconButton>
                              <IconButton href="https://iwtsp.com/966534909715"  target="_blank" style={{ marginRight:0}} >
                                  <WhatsAppIcon  fontSize="large" style={{color:"green"}} />
                              </IconButton>
                          </div>
                      </Paper>
                      </Slide>
                  </div>
                  <Slide direction="up" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                  <div className="col-2 p-0  d-none d-lg-block ">
                      <Divider className="divider"/>
                  </div>
                  </Slide>
                  <Slide direction="left" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                  <div className="col-3 p-0 d-none d-lg-block">
                      <img src={bk3} style={{width:"22vw"}} className="float-right pb-5"/>
                  </div>
                  </Slide>
              </div>

        </div>

    );
}