import React, { useState } from 'react';
import { Form, Button, FormLabel } from 'react-bootstrap';
import { Col, Row, Container, Card, } from "react-bootstrap";
import Notify from './notify';
import axios from 'axios';
import '../css/eventsReg.css'

const EventRegistrationForm = () => {
    let [eventName, setEventName] = useState("");
    let [leaderName, setLeaderName] = useState("");
    let [leaderUserID, setLeaderUserID] = useState("");
    let [collegeName, setCollegeName] = useState("");
    let [phoneNumber1, setPhoneNumber2] = useState("");
    let [phoneNumber2, setPhoneNumber1] = useState("");
    let [email, setEmail] = useState("");
    let [members, setMembers] = useState([{ name: '', userId: '' }]);
    let [show, setShow] = useState(false);
    let [notificationData, setNotificationData] = useState("");

    let eventNameHandler = (event) => {
        setEventName(event.target.value);
    }
    let leaderNameHandler = (event) => {
        setLeaderName(event.target.value);
    }
    let leaderUserIDHandler = (event) => {
        setLeaderUserID(event.target.value);
    }
    let collegeNameHandler = (event) => {
        setCollegeName(event.target.value);
    }
    let phoneNumber1Handler = (event) => {
        setPhoneNumber1(event.target.value);
    }
    let phoneNumber2Handler = (event) => {
        setPhoneNumber2(event.target.value);
    }
    let emailHandler = (event) => {
        setEmail(event.target.value);
    }
    let handleAddMember = (event) => {
        setMembers([...members, { name: '', userId: '' }]);

    };




    let handleMemberChange = (event, index) => {
        const newMembers = [...members];
        newMembers[index][event.target.name] = event.target.value;
        setMembers(newMembers);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(members);
        let eventDetails = {
            event: eventName,
            leaderName: leaderName,
            leaderUserID: leaderUserID,
            collegeName: collegeName,
            mobileNo1: phoneNumber1,
            mobileNo2: phoneNumber2,
            email: email,
            memberNameAndUserID: members,
        }

        console.log(eventDetails);

        let response = null;

        try {
            response = await axios.post('http://localhost:1060/register-event', JSON.stringify(eventDetails), {
                headers: { 'Content-Type': 'application/json' }
            });
            let { data } = response;
            setNotificationData(data.message);
        } catch (error) {
            if (error.response) {
                setNotificationData(error.response.data.message);
            } else if (error.request) {
                setNotificationData('No response from the server');
            } else {
                setNotificationData('Error: ' + error.message);
            }
        }
        setShow(true);
        setEventName(eventName);
        setLeaderName('');
        setLeaderUserID('');
        setCollegeName('');
        setPhoneNumber1('');
        setPhoneNumber2('');
        setEmail('');
        setMembers([{ name: '', userId: '' }]);
        setTimeout(() => {
            setShow(false);
            setNotificationData('');
        }, 5000)


    };





    return (


        <div className='bg-secondary'>

            <Container className='mt-3'>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>

                        <Card className="shadow px-4">
                            <Card.Body>
                                <div >
                                    <h2 className="fw-bold mb-4 text-uppercase text mt-5"><span className='reg'>Event registration</span></h2>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit} className='mb-2' >



                                            <Form.Group controlId="formSelector" className='mb-2' >
                                                <Form.Select onChange={eventNameHandler} required>
                                                    <option>Select Event</option>
                                                    <option>Saaz – The solo instrumental competition (without Vocal)</option>
                                                    <option>Goonj – The solo Singing Competition </option>
                                                    <option>Nrityanjali – Solo Classical dance Competition</option>
                                                    <option>Elite Feet – Solo Folk and Western dance competition</option>
                                                    <option>Jasrang – The group singing competition </option>
                                                    <option>The grooves – Group Dance competitio</option>
                                                    <option>Battle-on-street – (Dance battle – solo and group)</option>
                                                    <option>Gangesta – Solo Rap Competition</option>
                                                    <option>Rangmanch – Theatre Play </option>
                                                    <option>Rangmanch – Theatre Play </option>
                                                    <option>Bayaan – Open Mic</option>
                                                    <option>Robaroo – Monoact</option>
                                                    <option>Feel the Reel – Reels Making Competition(Online Events)</option>
                                                    <option>Kavyanjali – Poetry / Shayari</option>
                                                    <option>Kissa kahani – Story Telling</option>
                                                    <option>Kissa kahani – Story Telling</option>
                                                    <option>Kissa kahani – Story Telling</option>
                                                    <option>Kissa kahani – Story Telling</option>
                                                    <option>Tech Lekh – Technical Writing</option>
                                                    <option>Tech Lekh – Technical Writing</option>
                                                    <option>Hasya – Meme Designing</option>
                                                    <option>Talking Strokes (Painting) </option>
                                                    <option>Talking Strokes (Painting) </option>
                                                    <option>Chitrakari (Sketching)</option>
                                                    <option>Rang-Neeti (Rangoli)</option>
                                                    <option>Rang-Neeti (Rangoli)</option>
                                                    <option>Rang-Neeti (Rangoli)</option>
                                                    <option>Snappers (Photography-Online Events) </option>
                                                    <option></option>
                                                    <option></option>
                                                    <option></option>
                                                </Form.Select>
                                            </Form.Group>



                                            <Form.Group controlId="GroupLeaderName" className='mb-2 formheader' >
                                                <FormLabel >Group Leader Name</FormLabel>
                                                <Form.Control type="text" placeholder="Group Leader Name" onChange={leaderNameHandler} required />
                                            </Form.Group>

                                            <Form.Group controlId="UserId" className='mb-2 formheader'>
                                                <FormLabel>Group Leader UserId</FormLabel>
                                                <Form.Control type="text" placeholder="Group Leader UserId" onChange={leaderUserIDHandler} required />
                                            </Form.Group>
                                            <Form.Group controlId="ClgName" className='mb-2 formheader'>
                                                <FormLabel>College Name</FormLabel>
                                                <Form.Control type="text" placeholder="College Name" onChange={collegeNameHandler} required />
                                            </Form.Group>
                                            <Form.Group controlId="MobileNumber" className='mb-2 formheader'>
                                                <FormLabel>Mobile Number-1</FormLabel>
                                                <Form.Control type="tel" pattern="[0-9]{10}" placeholder="Mobile Number-1" onChange={phoneNumber1Handler} required />
                                            </Form.Group>
                                            <Form.Group controlId="MobileNumber" className='mb-2 formheader'>
                                                <FormLabel>Mobile Number-2</FormLabel>
                                                <Form.Control type="tel" pattern="[0-9]{10}" placeholder="Mobile Number-2" onChange={phoneNumber2Handler} required />
                                            </Form.Group>
                                            <Form.Group controlId="email" className='mb-2 formheader'>
                                                <FormLabel>Email</FormLabel>
                                                <Form.Control type="text" placeholder="Enter Email Id" onChange={emailHandler} required />
                                            </Form.Group>

                                            <p style={{ fontSize: '12px', marginBottom: '-2px' }}><spam style={{ color: 'red' }} >***</spam>If you are solo Participation then member name and User id Not required,You can proceed submit Button<spam style={{ color: 'red' }} >***</spam></p>
                                            <FormLabel >Member Name & User Id</FormLabel>

                                            {members.map((member, index) => (


                                                <div key={index} className='row'>

                                                    <div className='col-lg-5 col-sm-12 mb-2 ' style={{ display: 'flex', justifyContent: 'center' }} >
                                                        <Form.Group controlId={`memberName${index}`}>
                                                            <Form.Control type="text" placeholder="Member Name" name="name" value={member.name} onChange={(event) => handleMemberChange(event, index)} />
                                                        </Form.Group>
                                                    </div>
                                                    <div className='col-lg-6 col-sm-12 mb-2 ' style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Form.Group controlId={`memberEmail${index}`}>
                                                            <Form.Control type="userId" placeholder="User Id" name="userId" value={member.userId} onChange={(event) => handleMemberChange(event, index)} />
                                                        </Form.Group>

                                                    </div>
                                                    <div className='col-lg-5 col-sm-12 mb-2 ' style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Button variant="secondary" onClick={handleAddMember} className='mx-2 addmember' style={{ fontSize: 10 }} >
                                                            Add Member
                                                        </Button>
                                                    </div>
                                                </div>

                                            ))}
                                            {show && <Notify value={notificationData} style={{ color: 'white' }} />}


                                            <div>
                                                <Button variant="danger" type="handleSubmit" className='mt-5 ereg hower ' style={{ marginLeft: '-9px' }} >
                                                    Submit
                                                </Button>

                                            </div>






                                        </Form>
                                        <div className="mt-5">
                                            <p className=" text-center">
                                                If you are coming to college for Performence then please carry Adhar Card / College Id and Two Photos
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            <a target='blank' href='https://drive.google.com/file/d/109cXrsUSCfKavF8Zs87J7uUbAIyzcjwv/view?usp=sharing' style={{ textDecoration: 'none' }} ><b>How to fill form</b></a>
                        </Card>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default EventRegistrationForm;

















