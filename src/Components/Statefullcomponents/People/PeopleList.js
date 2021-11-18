import React from 'react';
import Button from '@restart/ui/esm/Button';
import PeopleListDataApi from './PeopleListDataApi';



const PeopleList = () => {
    
    return (
        <>
          <div className="people-list-div mb-3 pl-0 px-md-5">

          {PeopleListDataApi.map((Data) => {
                    return <>

            <div className="row mb-3 align-items-md-center" key={Data}>
                <div className="username-icon" style={{width: '125px'}}>
                {/* <i class="fa fa-2x text-white  fa-username fa-user-o" aria-hidden="true"></i>     */}
                <img src={Data.usernameimage} alt="user-imagee" className="img-fluid w-100 rounded-circle " />
                </div>  
                <div className="d-flex mx-0 mx-md-4 py-2 flex-column">
                    <h1 className="mb-0"> <b>{Data.username}</b> <span className="owner-text"> {Data.Ownertext} </span> </h1>
                    <p className="email-p">{Data.email}</p>
                </div>  

                <div className="ml-auto">
                <Button className="suggest-btn btn bg-white"><i class="fa mx-2 fa-envelope-o" aria-hidden="true"></i> Suggest to watch next video</Button>
                </div>
            </div>      

            </>;
                })}


        </div>  
        </>
    );
};



export default PeopleList;