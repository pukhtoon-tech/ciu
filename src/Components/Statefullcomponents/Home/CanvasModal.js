import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "@restart/ui/esm/Button";
import './Home.css';
import './markers.css';
import Videoiframe from "./Videoiframe";
import { Link } from "react-router-dom";
import CanvasModalData from "./Canvas/CanvasModalData";





const Locationarrow = () => {
console.log(CanvasModalData);

    return (
        <>
            <div className="previous-next mb-4">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="previous">
                        <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                        <span className="mx-0 mx-2" >previous location</span>
                    </div>
                    <div className="previous">
                        <span className="mx-0 mx-2" >next location</span>
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </>
    );
}



const CanvasModal = ({show = false, handleClose, index , props,ChangeColor }) => {
    // const {  } = props;

    
    
    
    return (
        <>

            <Modal className="home-modal-dialog" show={show} onHide={handleClose}>

                <Videoiframe ChangeColor={ChangeColor} />

                <div className="d-flex flex-column justify-content-between modal-height">

                    <div className="px-4 inner-modal-content">
                        <Link to="/videodetail" className="text-decoration-none">
                            <h1 className="mt-4">{CanvasModalData[index].mainheading}</h1>
                        </Link>
                        <hr />
                        <p>{CanvasModalData[index].maindescription}</p>
                        <Link to="/videodetail" className="text-decoration-none">
                        <Button className="btn my-4 text-white scenario-btn">scenarios</Button>
                        </Link>
                    </div>
                    <div className="px-4 arrows-section">
                        <Locationarrow />
                    </div>

                </div>
            </Modal>
        </>
    );
}

export default CanvasModal;
export { Locationarrow };