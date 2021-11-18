import React, { useState } from 'react';
import Footer from '../../StateLessComponents/Footer';
import Header from '../../StateLessComponents/Header';
import PeopleList from './PeopleList';
import Button from '@restart/ui/esm/Button';
import './People.css';
import AddManagePeople from './AddManagePeople';


const People = () => {


    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header />
            <section className="main-section-people px-lg-5 px-0">
                <div className="container-fluid py-5">
                    <div className="row vh-100 align-items-cente ustify-content-center">
                        <div className="col-12 col-md-12 col-lg-5 pt-5 border-right">
                                <h1 className="text-uppercase  text-center people-account-text">people in account</h1>
                        </div>
                        <div className="col-12 col-md-12 col-lg-7">
                            <div className="text-right pl-0 px-md-5">
                            <Button className="remove-btn btn" onClick={() => handleShow(true)} >add or remove people</Button>
                            <AddManagePeople
                                    show={show}
                                    setShow={setShow}
                                    handleClose={handleClose}
                                    handleShow={handleShow}
                                />
                            </div>
                            <PeopleList />
                           
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default People;