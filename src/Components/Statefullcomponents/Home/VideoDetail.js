import React from 'react';
import Footer from '../../StateLessComponents/Footer';
import Header from '../../StateLessComponents/Header';
import { Locationarrow } from './CanvasModal';
import Videoiframe from './Videoiframe';
import VideoDataApi from './VideoDataApi';



  


const VideoDetail = (ChangeColor) => {



    return (
        <>
        <Header />
            <section className="video-detail">
                <div class="d-flex">
                    <div class="p-2 w-25 bg-dark"></div>
                    <div class="flex-grow-1 w-100 bd-highlight">
                        <Videoiframe ChangeColor={ChangeColor} />
                    </div>
                    <div class="p-2 w-25 bg-dark"></div>
                </div>
                <div className="container-fluid">
                    <div className="video-data px-0 px-md-5 my-5">
                            <div className="para-one my-3">
                            {VideoDataApi.map((Data,index) => {
                                return <>
                                <div key={index} id={index} >
                                <h1> {Data.mainheading}</h1>
                                <p> {Data.maindescription} </p>
                                </div>
                                </>
                            })}
                
                            </div>
                            <div className="my-5">
                                <Locationarrow />
                            </div>
                    </div>
                    </div>
            </section>

        <Footer />
        </>
    );
}

export default VideoDetail;