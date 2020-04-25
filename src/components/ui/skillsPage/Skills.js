import React, {useEffect, useState} from 'react';
import "./Skills.css";
import reactLogo from "../../img/react2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact}from '@fortawesome/free-brands-svg-icons'
import {faHtml5}from '@fortawesome/free-brands-svg-icons'
import {faCss3Alt}from '@fortawesome/free-brands-svg-icons'
import {faJava}from '@fortawesome/free-brands-svg-icons'
import {faJs}from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@material-ui/core/Tooltip";
import fluuterLogoH from "../../img/flutter.png";
import fluuterLogo from "../../img/flutter-seeklogo.png";
import SpringLogoH from "../../img/springH.png";
import SpringLogo from "../../img/spring.png"
import Projects from "./projects";
import Grow from "@material-ui/core/Grow";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SpringLogoHp from "../../img/springH.png";
import EmcLogo from "../../img/EMC.png";
import Crawler from "../../img/Crawler.png";
import Todo from "../../img/Todo.png";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";



const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        margin:20,
        height: 300
    },
    media: {
        height: 140,
        backgroundSize: 100,

    },
    EmcMedia:{
        height: 150,
        backgroundSize: 200,
        backgroundPosition:"center"
    },
    CrawlerMedia:{
        height: 150,
        backgroundSize: 350,
        backgroundPosition:"center"
    },
    TodoMedia:{
        height: 150,
        width:300,
        backgroundSize: 350,
        backgroundPosition:"center"
    }
});

export default function Skills() {
    const classes = useStyles();
    let [active,setActive]=useState(1);

    const handleColor = (num) => {
        setActive(num);
    }
    let [checked,setChecked]=useState(false);
    const handleChecked = () => {
        setChecked(true);
    }
    const tooltipS=(
            <div  >
                <div  className="mySkills">
                        <div className=" d-md-inline-block  d-sm-block">
                            <Grow in={checked}>
                            <h1 className="mb-3">Skills: </h1>
                            </Grow>
                            <Tooltip title="React" placement="bottom" disableTouchListener>
                                <div className=" skill d-md-inline-block  d-sm-block ">
                                    <Grow in={checked}>
                                    <FontAwesomeIcon icon={faReact} style={{color:`${active===1?"#66D3FA":"rgba(0, 0, 0, 0.54)"}`,fontSize:100}}
                                                     onMouseEnter={()=>handleColor(1)}/>
                                    </Grow>
                                </div>
                            </Tooltip>

                            <Tooltip title="HTML" placement="bottom" disableTouchListener>
                                <div className="skill d-md-inline-block  d-sm-block">
                                    <Grow in={checked} timeout={1100} >
                                    <FontAwesomeIcon icon={faHtml5} style={{color:`${active===2?"#F16529":"rgba(0, 0, 0, 0.54)"}`,fontSize:100}}
                                                     onMouseEnter={()=>handleColor(2)} />
                                    </Grow>
                                </div>
                            </Tooltip>
                            <Tooltip title="CSS" placement="bottom" disableTouchListener>
                                <div className=" skill d-md-inline-block  d-sm-block">
                                    <Grow in={checked} timeout={1200}>
                                    <FontAwesomeIcon  icon={faCss3Alt} style={{color:`${active===3?"#66D3FA":"rgba(0, 0, 0, 0.54)"}`,fontSize:100}}
                                                      onMouseEnter={()=>handleColor(3)} />
                                    </Grow>
                                </div>
                            </Tooltip>
                            <Tooltip title="JavaScript" placement="bottom" disableTouchListener>
                                <div className=" skill d-md-inline-block d-sm-block ">
                                    <Grow in={checked} timeout={1300}>
                                    <FontAwesomeIcon icon={faJs} style={{color:`${active===4?"#F0DB4F":"rgba(0, 0, 0, 0.54)"}`,fontSize:100}}
                                                     onMouseEnter={()=>handleColor(4)} />
                                    </Grow>
                                </div>
                            </Tooltip>
                            <Tooltip title="Java" placement="bottom" disableTouchListener>
                                <div className=" skill d-md-inline-block  d-sm-block" >
                                    <Grow in={checked} timeout={1400} >
                                    <FontAwesomeIcon  icon={faJava} style={{color:`${active===5?"#3C99DC":"rgba(0, 0, 0, 0.54)"}`,fontSize:100}}
                                                      onMouseEnter={()=>handleColor(5)} />
                                    </Grow>
                                </div>
                            </Tooltip>
                            <Tooltip title="MySQL" placement="bottom" disableTouchListener>
                                <div className=" skill d-md-inline-block  d-sm-block" >
                                    <Grow in={checked} timeout={1500} >
                                    <FontAwesomeIcon  icon={faDatabase} style={{color:`${active===6?"#00758F":"rgba(0, 0, 0, 0.54)"}`,fontSize:85}}
                                                      onMouseEnter={()=>handleColor(6)} />
                                    </Grow>
                                </div>
                            </Tooltip>
                            <Tooltip title="Flutter" placement="bottom" disableTouchListener>
                                <div className=" skill d-md-inline-block  d-sm-block">
                                    <Grow in={checked} timeout={1600} mountOnEnter unmountOnExit>
                                <span className="flutterIcon" style={{backgroundImage: `url(${active === 7 ? fluuterLogoH : fluuterLogo})`}}
                                      onMouseEnter={() => handleColor(7)}/>
                                    </Grow>
                                </div>
                            </Tooltip>
                            <Tooltip title="Spring boot" placement="bottom" disableTouchListener>
                                <div className=" skill d-md-inline-block  d-sm-block ">
                                    <Grow in={checked} timeout={1700} >
                                <span className="springIcon" style={{backgroundImage: `url(${active === 8 ? SpringLogoH : SpringLogo})`}}
                                      onMouseEnter={() => handleColor(8)}/>
                                    </Grow>
                                </div>
                            </Tooltip>
                        </div>
                </div>
            </div>
    )
    const cardProjects= (
        <div className=" d-lg-inline-block ">
            <br/>
            <Grow in={checked}>
                <div>
                <h1 className="mb-3 d-inline">Projects : </h1>
                    <Button className="mb-2 d-inline " variant="outlined" color="primary" href="https://github.com/M7almazyad?tab=repositories"  target="_blank" >
                        Show more
                    </Button>
                </div>
             </Grow>
            <Grow in={checked} timeout={1000}>
            <Card className={`${classes.root} myCard  `}>
                <CardActionArea className={` myCard  `}>
                    <CardMedia
                        className={classes.EmcMedia}
                        image={EmcLogo}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            EMC
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Grow>

            <Grow in={checked} timeout={1200}>
                <Card className={`${classes.root} myCard`}>
                    <CardActionArea  className={` myCard  `}>
                        <CardMedia
                            className={classes.TodoMedia}
                            image={Todo}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Todo List
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               this small project , form this project you can add , edit and delete to do list
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grow>

            <Grow in={checked} timeout={1100}>
            <Card className={`${classes.root} myCard`}>
                <CardActionArea  className={` myCard  `}>
                    <CardMedia
                        className={classes.CrawlerMedia}
                        image={Crawler}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Crawler
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This small project mange students, you can add student, edit, and delete
                            I use React and hibernate.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Grow>


        </div>
    )

    return(
        <div onTouchStart={()=>handleChecked()} onMouseEnter={()=>handleChecked()} className="skillsSection ">
            <div className="container-fluid ">
                <div className="row d-block">
                {tooltipS}
                </div>

                <div className="myProjects mt-5">
                    {/*<Projects checked={checked} />*/}
                    {cardProjects}
                </div>
            </div>
        </div>
    );
}