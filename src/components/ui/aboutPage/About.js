import React, {useEffect, useState} from 'react';
import Paper from "@material-ui/core/Paper";
import "./About.css"
import Divider from "@material-ui/core/Divider";
import bk3 from "../../img/webPic.png";
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

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if(window.scrollY>630){
                setChecked(true);
            }
        })
    })


    const classes = useStyles();

    return(
          <div className="aboutSection container-fluid ">
              <div className="row " id="rowAbout">
                  <div className="col-lg-6 col-sm-10 ">
                      <Slide direction="right" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                      <Paper elevation={3}  className="aboutPaper p-3  pr-0 ml-md-5 m-sm-3 mr-lg-0">
                          <div className="aboutText pt-3">
                          <h1>ABOUT ME:</h1>
                          <p className="text-justify mt-3">
                              Born and lives in Riyadh since 1996. Ambitious, interested in learning new
                              things and trying new things also, solving Challenges, plus I'm a social
                              person and i have the team work spirit. Also I'm interested in developing web
                              and applications, harnessing all my academic achievements and practical
                              experience in the service and development of the organization
                          </p>
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
                      <img src={bk3} style={{width:"27vw"}} className="float-right mb-5 " alt=""/>
                  </div>
                  </Slide>
              </div>

        </div>

    );
}