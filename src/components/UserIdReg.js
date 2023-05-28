import { Form, Button } from 'react-bootstrap';
import { Col, Row, Container, Card, } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
import Notify from './notify';
import '../css/userIdReg.css'

let UserIdReg = () => {
    let [notificationData, setNotificationData] = useState("");
    let [name, newName] = useState("");
    let [collegeName, newCollegeName] = useState("");
    let [phoneNo, newPhoneNumber] = useState("");
    let [document, newDocument] = useState("select document");
    let [documentID, newDocumentID] = useState("");
    let [email, newEmail] = useState("");
    let [notes, newNotes] = useState("");
    let [show, setShow] = useState("");

    let nameHandler = (event) => {
        newName(event.target.value);
    }
    let collegeNameHandler = (event) => {
        newCollegeName(event.target.value);
    }
    let phoneNoHandler = (event) => {
        newPhoneNumber(event.target.value);
    }
    let documentIDHandler = (event) => {
        newDocumentID(event.target.value);
    }
    let emailHandler = (event) => {
        newEmail(event.target.value);
    }
    let documentHandler = (event) => {
        newDocument(event.target.value);
        // console.log(event.target.value);
    }

    let notesHandler = (event) => {
        newNotes(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let studentDetails = {
            name: name,
            collegeName: collegeName,
            documentID: documentID,
            email: email,
            phoneNo: phoneNo,
            document: document,
        }
        console.log(studentDetails);
        try {
            const response = await axios.post('http://localhost:1060/register', JSON.stringify(studentDetails), {
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
        newName('');
        newEmail('');
        newPhoneNumber('');
        newCollegeName('');
        newDocumentID('');
        newDocument();
        setTimeout(() => {
            setShow(false);
        }, 5000);
    }
    const initPayment = (data) => {
        console.log(data);
        const options = {
            key: "rzp_test_ij7veOzad14T18",
            amount: 80000,
            currency: data.currency,
            name: name,
            description: "Test Transaction",
            order_id: data.id,
            status: "completed",
            handler: async (response) => {
                try {
                    const verifyUrl = "http://localhost:1060/verifyPayment";
                    const { data } = await axios.post(verifyUrl, response);
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    let paymentHandler = async (event) => {
        try {
            const orderUrl = "http://localhost:1060/createOrder"
            const { data } = await axios.post(orderUrl, { amount: 80000, notes: notes });
            console.log(data);
            initPayment(data.data);
            console.log(data.data);

        } catch (error) {
            if (error.response) {
                setNotificationData(error.response.data.message);
            } else if (error.request) {
                setNotificationData('No response from the server');
            } else {
                setNotificationData('Error: ' + error.message);
            }
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 5000);
        }
    }
    return (


        <div className='bg-secondary'>
            <Container className='mt-5'>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>

                        <Card className="shadow px-4">
                            <Card.Body>
                                <div >
                                    {show && <Notify value={notificationData} />}
                                    <marquee behavior="scroll" direction="left" scrollamount="6"> <h2 className="fw-bold mb-4 text-uppercase text "><span className='reg'>Register</span></h2></marquee>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit} className='mb-' >

                                            <Form.Group controlId="name" className='mb-2 d-flex' >
                                                <i className="fa-solid fa-user black fa-2x p-1"></i>
                                                <Form.Control type="text" placeholder="Enter Full Name" value={name} onChange={nameHandler} required />
                                            </Form.Group>

                                            <Form.Group controlId="email" className='mb-2  d-flex' >
                                                <i className="fa-solid fa-envelope fa-2x p-1" ></i>
                                                <Form.Control type="email" placeholder="Email" value={email} onChange={emailHandler} required />
                                                
                                            </Form.Group>
                                            <Form.Group controlId="mobileNumber" className='mb-2  d-flex' >
                                                <i className="fa-solid fa-phone-volume fa-2x p-1"></i>
                                                <Form.Control type="tel" pattern="[0-9]{10}" placeholder="Mobile Number" value={phoneNo} onChange={phoneNoHandler} required />
                                            </Form.Group>

                                            <Form.Group controlId="clgName" className='mb-2 d-flex' >
                                                <i className="fa-solid fa-building-columns fa-2x p-1"></i>
                                                <Form.Control type="text" placeholder="Enter College Name" value={collegeName} onChange={collegeNameHandler} required />
                                            </Form.Group>


                                            <Form.Group controlId="formSelector" className='mb-2 d-flex' >
                                                <i class="fa-sharp fa-solid fa-file-export fa-2x p-1" ></i>
                                                <Form.Select onChange={documentHandler} required>
                                                    <option value={document}>Select Document</option>
                                                    <option value={document}>Adhar Card</option>
                                                    <option>College ID Card(Registration Slip/Identity Card)</option>
                                                </Form.Select>
                                            </Form.Group>

                                            <Form.Group controlId="idNumber" className='mb-2  d-flex' required >
                                                <i class="fa-solid fa-id-card-clip  fa-2x p-1"></i>
                                                <Form.Control type="text" placeholder="Enter ID Number Above Select Document" value={documentID} onChange={documentIDHandler} />
                                            </Form.Group>
                                            <p >Please recheck all details.</p>

                                            <Button type="handleSubmit" className='bg-success mt-3 mb-5 ereg ' >
                                                Register
                                            </Button>
                                            
                                        </Form>



                                        <Form.Group controlId="email" className='  d-flex' >
                                            <i className="fa-solid fa-envelope fa-2x p-1" ></i>
                                            <Form.Control type="email" placeholder="Email" onChange={notesHandler} required />
                                        </Form.Group>


                                        <div >

                                            <Button variant="danger" type="submit" className='mt-2 ereg ' onClick={paymentHandler} >
                                                Payment
                                            </Button>

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
    )

};

export default UserIdReg;
