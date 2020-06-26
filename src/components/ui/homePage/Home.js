import React from 'react';
import Title from "./Title";
import WepPic from "../../img/myPic6.png";
import "./Home.css"
import Slide from "@material-ui/core/Slide";
export default function Home() {

    return(
      <div className="">
            <div className="section d-none d-md-block lgg">
                <div className="row "  id="rowHome">
                    <div className="col-md-6  pt-5">
                        <Title/>
                    </div>
                    <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>
                    <div className="col-md-6  lgg" >
                        <img src={WepPic}  className="webPic ml-2  " alt="" />
                    </div>
                    </Slide>
                </div>
            </div>
          <div className="section d-md-none">
              <div className="row " id="rowHome">
                  <div className="col-sm-12  pt-5">
                      <Title/>
                  </div>
                  <div className="col-sm-12 webPic" >
                      <img src={WepPic} style={{width:"86vw", marginBottom:200}} alt="" />
                  </div>
              </div>

          </div>
        </div>
   );
}