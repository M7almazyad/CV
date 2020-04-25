import React, {useState} from 'react';
import "./Experience.css"
import AmalessPic from "../../img/amaless.png";
import LevoPic from "../../img/levo.png";
import MonshaatPic from "../../img/monshaat.png";
import Slide from "@material-ui/core/Slide";

export default function Experience() {
    let [checked,setChecked]=useState(false);
    const handleChecked = () => {
        setChecked(true);
    }
    return(
        <div onTouchStart={()=>handleChecked()} onMouseEnter={()=>handleChecked()} className="experienceSection  container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="text-center pb-5"> Experience : </h1>
                    <ul className="expLine">
                        <li>
                            <Slide direction="right" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                            <div className="expLine-image">
                                <img className="rounded-circle img-fluid" src={AmalessPic} alt=""/>
                            </div>
                            </Slide>
                            <Slide direction="right" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                            <div className="expLine-panel mt-3">
                                <div className="expLine-heading">
                                    <h5>2015 / 9 - 2019 / 6</h5>
                                    <h4 className="subheading">ِAmaless For Chocolate</h4>
                                </div>
                                <div className="expLine-body">
                                    <p className="text-muted">
                                        - Social Media Marketing <br/>
                                        - Supervisor of the branches<br/>
                                        - Other administrative works
                                    </p>
                                </div>
                            </div>
                            </Slide>
                        </li>
                        <li className="expLine-inverted">
                            <Slide direction="left" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                            <div className="expLine-image">
                                <img className="rounded-circle img-fluid" src={LevoPic} alt=""/>
                            </div>
                            </Slide>
                            <Slide direction="left" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                            <div className="expLine-panel mt-4">
                                <div className="expLine-heading">
                                    <h5>2019 / 7 - Present</h5>
                                    <h4 className="subheading">Levo For Chocolate</h4>
                                </div>
                                <div className="expLine-body">
                                    <p className="text-muted">
                                        - Sales man
                                    </p>
                                </div>
                            </div>
                            </Slide>
                        </li>

                        <li>
                            <Slide direction="right" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                            <div className="expLine-image ">
                                <img className="rounded-circle img-fluid" src={MonshaatPic} alt=""/>
                            </div>
                            </Slide>
                            <Slide direction="right" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                            <div className="expLine-panel mt-4">
                                <div className="expLine-heading">
                                    <h5>2020 / 1 - 2020 / 4</h5>
                                    <h4 className="subheading">Monsha'at</h4>
                                </div>
                                <div className="expLine-body">
                                    <p className="text-muted">
                                        - Full stack web developer
                                    </p>
                                </div>
                            </div>
                            </Slide>
                        </li>
                    </ul>
                </div>
            </div>
        </div>



            );
}