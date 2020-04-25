import React from 'react';
import Title from "./Title";
import WepPic from "../../img/webPic.png";
import "./Home.css"
import Grow from "@material-ui/core/Grow";
export default function Home() {

    return(
      <div className="">
            <div className="section d-none d-md-block lgg">
                <div className="row " id="rowHome">
                    <div className="col-md-6  pt-5">
                        <Title/>
                    </div>
                    <Grow in={true} timeout={1500}>
                    <div className="col-md-6  lgg" >
                        <img src={WepPic} style={{width:"40vw", marginBottom:200}} className=" pr-2 webPic " />
                    </div>
                    </Grow>
                </div>
            </div>
          <div className="section d-md-none">
              <div className="row " id="rowHome">
                  <div className="col-sm-12  pt-5">
                      <Title/>
                  </div>
                  <div className="col-sm-12 webPic" >
                      <img src={WepPic} style={{width:"86vw", marginBottom:200}} />
                  </div>
              </div>

          </div>
        </div>
   );
}