import React from 'react';
import '../css/mainPage.css';
import '../css/cardAnimation.css';
import Card from 'react-bootstrap/Card';
import actingDrama from '../photo/acting_drama.png';
import musicDance from '../photo/music_dance.png';
import litreture from '../photo/literature_debate.png';
import fineArts from '../photo/fine_arts.png';
import firstAnimation from '../animation/1.mp4';
import logoFiesta from '../photo/fiesta-logo.png';


const MainPage = () => {

    return (

        <div>

            <div className='video-background-container ' >
                <video autoPlay muted loop className="video-background">
                    <source src={firstAnimation} type="video/mp4" />
                </video>

                <div className="row">

                    <div className='mb-5 ' style={{ marginTop: '10vh' }}>
                        <b style={{ color: 'white', }}><spam>The Inter College Cultural Fest of MIT, Muzaffarpur</spam></b><br></br><br></br>
                        <marquee behavior="scroll" direction="left" scrollamount="15"><b style={{ color: 'orange', fontSize: '5vh', fontWeight: '800', textShadow: '2px 2px 5px red' }}><pre>C O M I N G   S O O N</pre></b></marquee>
                    </div>
                    <div className="col-lg-12 col-sm-12 mt-5" >

                        <img src={logoFiesta} alt={fineArts} style={{ width: '80vw' }} />
                    </div>




                </div>
            </div>
            <div className='me-lg-5 ms-lg-5 '>


                <div className='mb-2'>
                    <h1 style={{ textAlign: 'center' }} > <span style={{ textShadow: '4px 2px 8px rgba(128, 0, 0, 1)', textDecorationLine: 'underline' }}></span><br></br><br></br></h1>
                </div>



                <div className='row mx-auto  bg-lite' style={{ margin: '-5vh' }} >
                    <div className="col-lg-3 col-sm-12 m-sm-0 pb-5 card-animation " >
                        <Card  >
                            <Card.Img variant="top" src={actingDrama} />
                            <Card.Body >
                                <a href='http://localhost:3000/acting-drama' className='btn btn-primary hower'>ACTING & DRAMA </a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-12 m-sm-0 pb-5 card-animation">
                        <Card >
                            <Card.Img variant="top" src={musicDance} />
                            <Card.Body >
                                <a href='http://localhost:3000/music-dance' className='btn btn-primary hower'>MUSIC & DANCE </a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-12 m-sm-0 pb-5 card-animation">
                        <Card >
                            <Card.Img variant="top" src={litreture} />
                            <Card.Body>
                                <a href='http://localhost:3000/literature-debate' className='btn btn-primary hower'>LITRETURE & DEBATE</a>
                            </Card.Body>

                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-12 m-sm-0 pb-5 card-animation">
                        <Card>
                            <Card.Img variant="top" src={fineArts} />
                            <Card.Body>
                                <a href='http://localhost:3000/fine-arts' className='btn btn-primary hower'>FINE ARTS</a>
                            </Card.Body>
                        </Card>
                    </div>



                </div>
            </div>

        </div>


    )

}

export default MainPage;
