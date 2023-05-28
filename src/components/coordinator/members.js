import React from 'react';
import vi from '../../photo/sonam.png'
import aditya from '../../photo/aditya.png';
import komal from '../../photo/komal.png';
import sonam from '../../photo/sonam.png';
import saqib from '../../photo/saqib.png';

 import vinay from '../../photo/vinay.png';
import shivam from '../../photo/shivam.png';
import ved from '../../photo/ved.png';
import ravi from '../../photo/ravi.png';


const Members = () => {

    return (
        <>
<div className='bg-secondary'style={{fontStyle:'italic'}}>

            <div className='text-center '  >
                <div>
                    <u className='btn btn-dark' style={{ marginTop: '10vh', width: '40vh' }}>Facility Coordinator</u>
                </div>
                <div className="row p-4" style={{ justifyContent: 'space-between' }} >


                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3  text-center card-animation ">
                        <div className="card" >
                            <img src={vi} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Mr Ashish Kumar (CE) <br></br>Music & Dance</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3  text-center card-animation">
                        <div className="card" >
                            <img src={vi} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Dr Shail Bala <br></br> Literature & Debate</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 text-center card-animation">
                        <div className="card " >
                            <img src={vi} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <p className="card-text">********* <br></br> Acting & Drama</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 text-center card-animation">
                        <div className="card " >
                            <img src={vi} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <p className="card-text">Ms Shweta Kumari (IT) <br></br> Fine & Arts</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-3'>
                        <br></br>
                        <a href='http://localhost:3000/facilityCoordinator' className='hower ' style={{textDecoration:'none'}}><h4><b >Click Here -></b></h4></a>
                        <br></br>
                    </div>

                </div>
            </div>

            <div className='text-center '>
                <div>
                    <u className='btn btn-dark ' style={{ width: '40vh' }}>Core Coordinator</u>
                </div>
                <div className="row p-4" style={{ justifyContent: 'space-between' }} >


                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3  text-center card-animation ">
                        <div className="card" >
                            <img src={aditya} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <p className="card-text">Aditya Ashwini <br></br>Music and Dance</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3  text-center card-animation">
                        <div className="card" >
                            <img src={komal} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <p className="card-text">Komal rani<br></br>Literature & Debate</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 text-center card-animation">
                        <div className="card " >
                            <img src={sonam} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <p className="card-text">Sonam Kumari <br></br>Fine & arts </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 text-center card-animation">
                        <div className="card " >
                            <img src={saqib} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <p className="card-text">Md Saquib Alam <br></br> Acting & Drama</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-3'>
                        <br></br>
                        <a href='http://localhost:3000/coreCoordinator' className=' hower' style={{textDecoration:'none'}}><h4><b >Click Here -></b></h4></a>
                        <br></br>
                    </div>

                </div>
            </div>


            <div className='text-center'>
                <div>
                    <u className='btn btn-dark ' style={{ width: '40vh' }}>Senior Coordinator</u>
                </div>
                <div className="row p-4" style={{ justifyContent: 'space-between' }} >


                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3  text-center card-animation ">
                        <div className="card" >
                            <img src={vinay} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <p className="card-text">Vinay kumar <br></br>Music & Dance </p>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3  text-center card-animation">
                        <div className="card" >
                            <img src={shivam} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <p className="card-text">Shivam Kumar <br></br>Literature & Debate</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 text-center card-animation">
                        <div className="card " >
                            <img src={ved} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <p className="card-text">Ved Kumar <br></br> Fine & Arts</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 text-center card-animation">
                        <div className="card " >
                            <img src={ravi} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <p className="card-text">Ravi Ranjan <br></br> Acting & Drama</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-3'>
                        <br></br>
                        <a href='http://localhost:3000/seniorCoordinator' className='hower' style={{textDecoration:'none'}}><h4><b >Click Here -></b></h4></a>
                        <br></br>
                    </div>

                </div>
            </div>


            <div className='text-center '  >
                <div>
                    <u className='btn btn-dark' style={{ marginTop: '10vh', width: '40vh' }}>Coordinator</u>
                </div>
                <div className="row p-4" style={{ justifyContent: 'space-between' }} >


                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4  text-center card-animation ">
                        <div className="card" >
                            <div className="card-body">
                                <p className="card-text">Shivam Kumar Pathak<br></br>Music & Dance</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4  text-center card-animation">
                        <div className="card" >
                            <div className="card-body">
                            <p className="card-text">Ashutosh Kumar <br></br>Literature & Debate</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4 text-center card-animation">
                        <div className="card " >
                            <div className="card-body">
                            <p className="card-text">Ashutosh Kumar <br></br> Fine & Arts</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-12 me-lg-3 ms-lg-3 mb-4  text-center card-animation">
                        <div className="card " >
                            <div className="card-body">
                            <p className="card-text">Sonali Kumari <br></br> Acting & Drama</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='p-3'>
                        <br></br>
                        <a href='http://localhost:3000/juniorCoordinator' className='hower ' style={{textDecoration:'none'}}><h4><b >Click Here -></b></h4></a>
                        <br></br>
                    </div>

                </div>
            </div>


            </div>
        </>

    );
}

export default Members;

