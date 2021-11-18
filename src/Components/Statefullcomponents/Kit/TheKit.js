import React from 'react';
import Footer from '../../StateLessComponents/Footer';
import Header from '../../StateLessComponents/Header';
import './Thekit.css';
const TheKit = () => {
    return (
        <>
            <Header />
            <section className="main-section">
                <div className="d-flex flex-column flex-lg-row align-items-center vh-100 justify-content-center">
                    <div className="w-100 w-lg-50 h-100 px-5 bg-dark-left d-flex justify-content-center align-items-center">
                        <h1 className="text-uppercase font-weight-light-in">welcome to <br/> your kit</h1>
                    </div>
                    <div className="w-100 w-lg-50 h-100 px-5 bg-light-right d-flex align-items-center">
                        <div className="text-extra">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem velit eos, assumenda 
                                illum quidem fugit eius dolor totam aspernatur. Provident atque eius dolor nihil 
                                doloremque error rerum necessitatibus obcaecati dicta.</p>
                        </div>

                        <div className="ml-auto mb-5 share-icon-div mt-auto">
                            <a href="#/">
                            <i class="fa fa-2x fa-share-in text-white fa-share-alt" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default TheKit;