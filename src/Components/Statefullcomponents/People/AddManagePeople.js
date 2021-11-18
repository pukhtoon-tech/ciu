import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "@restart/ui/esm/Button";
import './People.css';
import ManagePeopleDataApi from './ManagePeopleDataApi';

const AddManagePeople = (props) => {


    // console.log(ManagePeopleDataApi.splice(2))

    const { show = false, handleClose } = props;

    const [list, updateList] = useState(ManagePeopleDataApi);

  const handleRemoveItem = (index) => {
      updateList(list.filter(item => item.id !== index));
  };

    

    return (
        <>
            <Modal centered size="lg" show={show} onHide={handleClose}>
                <div className="p-3">
                    <div className="text-right" style={{ cursor: 'pointer' }} onClick={handleClose}>
                        <i class="fa fa-lg text-secondary fa-times" aria-hidden="true"></i>
                    </div>
                    <div className="text-center">
                        <h1 className="text-uppercase">Manage people </h1>
                    </div>
                </div>
                {list.map((Data, index) => {
                    return <>
                        <div className="row m-3 align-items-md-center" id={index} key={index}>

                            <div className="username-icon" style={{width: '100px'}} >
                            <img src={Data.usernameimage} alt="user-imagee" className="img-fluid w-100 rounded-circle " />
                            </div>
                            <div className="d-flex mx-0 mx-md-4 py-2 flex-column">
                                <h2 className="mb-0"> <b>{Data.username}</b> </h2>
                                <p className="email-p m-0">{Data.email}</p>
                            </div>


                            <div className="ml-auto">
                                <a href="#/" style={{ textDecoration: 'underline' }}  onClick={() =>handleRemoveItem(Data.id)} className="text-dark font-weight-normal ">Remove</a>
                            </div>

                        </div>
                    </>;
                })}


                <span className="mx-3 my-5 border-bottom text-secondary"></span>

                <div className="text-center add-user-text">
                    <h1 className="text-uppercase">want to add a new user?</h1>
                    <p>You have atleast <span>1 seat</span> in your acount. </p>
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

export default AddManagePeople;