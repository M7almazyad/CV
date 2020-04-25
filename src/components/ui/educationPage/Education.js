import React, {useState} from 'react';
import KsuPic from "../../img/ksu.png";
import CoEIAPic from "../../img/CoEIA.png"
import JahezPic from "../../img/Jahez.png"
import "./Education.css"
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Slide from "@material-ui/core/Slide";

export default function Education() {
    let [checked,setChecked]=useState(false);
    const handleChecked = () => {
        setChecked(true);
    }
    return(
       <div  onTouchStart={()=>handleChecked()} onMouseEnter={()=>handleChecked()} className="educationSection  container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="text-center pb-5"> Education : </h1>
                    <ul className="expLine">
                        <li>
                            <Slide direction="right" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                            <div className="expLine-image">
                                <img className="rounded-circle img-fluid" src={CoEIAPic} alt=""/>
                            </div>
                            </Slide>
                            <Slide direction="right" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                                <div className="expLine-panel">
                                    <div className="expLine-heading">
                                        <h4>2018 / 7 </h4>
                                        <h4 className="subheading">Building Cryptography Applications </h4>
                                        <h5>Training course From CoEIA (18 hours)</h5>
                                    </div>
                                    <div className="expLine-body">
                                        <p >
                                            - Confidentiality ( RSA , AES , Triple DES ).<br/>
                                            - Integrity ( MD5 , SHA-1 ).
                                        </p>
                                    </div>
                                    <Button className="mt-2" variant="outlined" color="primary">
                                        Show Certificate
                                    </Button>
                                </div>
                            </Slide>
                        </li>
                        <li className="expLine-inverted">
                            <Slide direction="left" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                            <div className="expLine-image">
                                <img className="rounded-circle img-fluid" src={JahezPic} alt=""/>
                            </div>
                            </Slide>
                            <Slide direction="left" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                            <div className="expLine-panel">
                                <div className="expLine-heading">
                                    <h4>2019 / 7</h4>
                                    <h4 className="subheading">Database Programming with SQL & PL/SQL </h4>
                                    <h5>Training course From Jahez (100 hours)</h5>
                                </div>
                                <div className="expLine-body">
                                    <p className="text-muted">- Database Design and Programming with SQL <br/>
                                    - Database Programming with PL/SQL
                                    </p>
                                </div>
                                <Button className="mt-2" variant="outlined" color="primary">
                                    Show Certificate
                                </Button>
                            </div>
                            </Slide>
                        </li>

                        <li>
                            <Slide direction="right" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                            <div className="expLine-image ">
                                <img className="rounded-circle img-fluid" src={KsuPic} alt=""/>
                            </div>
                            </Slide>
                            <Slide direction="right" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                            <div className="expLine-panel">
                                <div  className="expLine-heading pt-4">
                                    <h4>2014 / 10 - 2020 / 5</h4>
                                    <h4 className="subheading">King Saud University - Computer Science</h4>
                                    <h5> Bachelor's Degree - GPA (3.47 from 5)</h5>
                                </div>
                                <Button className="mt-2" variant="outlined" color="primary">
                                    Show Certificate
                                </Button>
                            </div>
                            </Slide>
                        </li>

                    </ul>
                </div>
            </div>


            {/*<div className="row">*/}
            {/*    <div className="offset-md-3"/>*/}
            {/*    <div className=" col-6">*/}
            {/*        <div className="text-center img-exp d-inline">*/}
            {/*            <img src={myPic} className="myPic  img-thumbnail"/>*/}
            {/*        </div>*/}
            {/*                <div className="text-exp">*/}
            {/*                    <h2>Hi</h2>*/}
            {/*                    <p>*/}
            {/*                        im mohmammed almazyadim mohmammed almazyadim mohmammed*/}
            {/*                        almazyadim mohmammed almazyadim mohmammed almazyadim mohmammed almazyad*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*     </div>*/}
            {/*</div>*/}
            {/*<div className="row">*/}
            {/*    <div className="offset-md-3"/>*/}
            {/*    <div className=" col-6">*/}
            {/*        <div className="text-center img-exp d-inline">*/}
            {/*            <img src={myPic} className="myPic  img-thumbnail"/>*/}
            {/*        </div>*/}
            {/*        <div className="text-exp float-right">*/}
            {/*            <h2>Hi</h2>*/}
            {/*            <p>*/}
            {/*                im mohmammed almazyadim mohmammed almazyadim mohmammed*/}
            {/*                almazyadim mohmammed almazyadim mohmammed almazyadim mohmammed almazyad*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>

    );
}

{/*<ul className="educationLine">*/}
{/*    <li className="pb-5">*/}
{/*        <div className="img-exp">*/}
{/*            <img src={myPic} className="myPic  img-thumbnail"/>*/}
{/*        </div>*/}
{/*        <div className="text-exp">*/}
{/*            <h2>Hi</h2>*/}
{/*            <p>*/}
{/*                im mohmammed almazyadim mohmammed almazyadim mohmammed*/}
{/*                almazyadim mohmammed almazyadim mohmammed almazyadim mohmammed almazyad*/}
{/*            </p>*/}
{/*        </div>*/}
{/*    </li>*/}
{/*</ul>*/}