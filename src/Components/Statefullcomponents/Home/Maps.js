import React, { useEffect, useState } from "react";
import Footer from "../../StateLessComponents/Footer";
import Header from "../../StateLessComponents/Header";
import { Canvas } from '../../../assets/Images';
import CanvasModal from "./CanvasModal";
import ShareModal from "./ShareModal";

 


const Maps = () => {
    //canvas modal
    const [showCanvas, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const getLocalitems = () => {
        let list = localStorage.getItem('lists');
        console.log(list);
        if(list) {
           return JSON.parse(localStorage.getItem('lists'));
        } else {
           return [];
        }
    }

   


    const redd = "#00000080";
    const [bg, setBg] = useState(getLocalitems());



    //share modal
    const [ showShare , setShowShare] = useState(false);
    const shareClose = () => setShowShare(false);
    const shareShow = () => setShowShare(true);


    const [mainHeading, setMainHeading] = useState(0);


    const changeBG = () => {
        setBg("red");
        const listt =[7,9];
        localStorage.setItem('videosdd',listt);
    }

    useEffect(() => {
        localStorage.setItem('list' , JSON.stringify(bg));
    },[bg]);

    
    
  
    
 

   

    return (
        <>
            <Header />
            <div className="image-canvas">
                <div className="canvas-and-markers position-relative">
                    <img src={Canvas.Image} className="img-fluid  w-100" alt="canvas" />
                    <div className="position-absolute home-icon-text same-width">
                        <div className="home-section text-center">
                            <a href="#/" className="text-white text-decoration-none" onClick={() => handleShow(true) || setMainHeading(0) } >
                                <span>home</span>
                                <img src={Canvas.Bluemarker} className="img-fluid mt-0 mt-md-1 mx-auto d-flex" alt="blue-marker" />
                            </a>
                        </div>
                    </div>
                    <div className="position-absolute orientation-icon-text same-width">
                        <div className="home-section text-center">
                            <a href="#/" className="text-white text-decoration-none" onClick={() => handleShow(true) || setMainHeading(1)} >
                                <span>orientation</span>
                                <img src={Canvas.Bluemarker} className="img-fluid mt-0 mt-md-1 mx-auto d-flex" alt="blue-marker" />
                            </a>
                        </div>
                    </div>
                    <div className="position-absolute extracurriculars-icon-text same-width">
                        <div className="home-section text-center">
                            <a href="#/" className="text-white text-decoration-none" onClick={() => handleShow(true) || setMainHeading(2)} >
                                <span>extracurriculars</span>
                                <img src={Canvas.Bluemarker} className="img-fluid mt-0 mt-md-1 mx-auto d-flex" alt="blue-marker" />
                            </a>
                        </div>
                    </div>
                    <div className="position-absolute cafeteria-icon-text same-width">
                        <div className="home-section text-center">
                            <a href="#/" className="text-white text-decoration-none" onClick={() => handleShow(true) || setMainHeading(3)} >
                                <span>cafeteria</span>
                                <img src={Canvas.Bluemarker} className="img-fluid mt-0 mt-md-1 mx-auto d-flex" alt="blue-marker" />
                            </a>
                        </div>
                    </div>
                    <div className="position-absolute residance-icon-textt same-width">
                        <div className="home-section text-center">
                            <a href="#/" className="text-white text-decoration-none" onClick={() => handleShow(true) || setMainHeading(4)} >
                                <span>residance hall</span>
                                <img src={Canvas.Bluemarker} className="img-fluid mt-0 mt-md-1 mx-auto d-flex" alt="blue-marker" />
                            </a>
                        </div>
                    </div>
                    <div className="position-absolute library-icon-text same-width">
                        <div className="home-section text-center">
                            <a href="#/" className="text-white text-decoration-none" onClick={() => handleShow(true) || setMainHeading(5)} >
                                <span>library</span>
                                <img src={Canvas.Bluemarker} className="img-fluid mt-0 mt-md-1 mx-auto d-flex" alt="blue-marker" />
                            </a>
                        </div>
                    </div>
                    <div className="position-absolute administrative-icon-text same-width">
                        <div className="home-section text-center">
                            <a href="#/" className="text-white text-decoration-none" onClick={() => handleShow(true) || setMainHeading(6)} >
                                <span style={{ backgroundColor: bg }}>administrative office</span>
                                <img src={Canvas.Bluemarker} className="img-fluid mt-0 mt-md-1 mx-auto d-flex" alt="blue-marker" />
                            </a>
                        </div>
                    </div>
                    <div className="position-absolute classroom-icon-text same-width">
                        <div className="home-section text-center" >
                            <a href="#/" className="text-white text-decoration-none"   onClick={() => handleShow(true) || setMainHeading(7)} >
                                <span style={{ backgroundColor: bg }}>classroom</span>
                                <img src={Canvas.Redmarker}  className="img-fluid mt-0 mt-md-1 mx-auto d-flex" alt="red-marker" />
                            </a>
                        </div>
                    </div>
                    <div className="position-absolute share-icon-section">
                            <a href="#/" onClick={() => shareShow(true)}>
                            <i class="fa fa-share-canvas text-white fa-share-alt" aria-hidden="true"></i>
                            </a>
                        </div>
                </div>


              
                <CanvasModal
                    show={showCanvas}
                    setShow={setShow}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    index={mainHeading}
                    ChangeColor={changeBG}

                />


                <ShareModal show={showShare}
                    setShowShare={setShowShare}
                    shareClose={shareClose}
                    shareShow={shareShow}/>
            </div>
            <Footer />
        </>
    );
}



export default Maps;