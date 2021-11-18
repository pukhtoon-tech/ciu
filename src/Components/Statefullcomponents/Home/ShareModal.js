import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "@restart/ui/esm/Button";
import './Home.css';
import './markers.css';
import { Link } from "react-router-dom";



const ShareModal =({show, shareClose}) => {
    // const { } = props;
    return (
        <>

        <Modal centered size="lg" show={show} onHide={shareClose}>

        <div className="p-3">
                    <div className="text-right" style={{ cursor: 'pointer' }} onClick={shareClose}>
                        <i class="fa fa-lg text-secondary fa-times" aria-hidden="true"></i>
                    </div>
                    <div className="text-center">
                        <h1 className="text-uppercase mb-0">share with your friends </h1>
                    </div>
                </div>    

                <div className="text-center">
                    <p className="text-uppercase mb-0">want to share CIU with your friends? Fill in the details below
                        and we will send them an invitation to create their account 
                        and explore the platform
                     </p>
                </div>
                <form action="">
                    <div className="row p-3 my-2">
                        <div className="col-12 col-md-6">
                            <input type="text" className="form-control form-control-app mb-2" placeholder="Name" />
                        </div>
                        <div className="col-12 col-md-6">
                            <input type="email" className="form-control form-control-app mb-2" placeholder="Email Address" />
                        </div>
                        <div className="col-12 text-center my-4">
                            <Button className="remove-btn btn"><i class="fa mx-2 fa-envelope-o" aria-hidden="true"></i> Send invite</Button>
                        </div>
                    </div>
                </form>

        </Modal>
    </>
    );
}

export default ShareModal;