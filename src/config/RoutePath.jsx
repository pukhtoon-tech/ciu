import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Maps from "../Components/Statefullcomponents/Home/Maps";
import TheKit from "../Components/Statefullcomponents/Kit/TheKit";
import People from "../Components/Statefullcomponents/People/People";
import Videodetail from "../Components/Statefullcomponents/Home/VideoDetail";


const RoutePath=()=>{
        return(
            <BrowserRouter>
            <Routes>
                <Route exact path="/"  element={<Maps />} />
                <Route path="/thekit" element={<TheKit />} />
                <Route path="/people" element={<People />} />
                <Route path="/videodetail" element={<Videodetail />} />
            </Routes>
            </BrowserRouter>
        );
}


export default RoutePath;