import '../css/footer.css';


function Footer() {
    return (
        <div className='footer '>
            <marquee behavior="scroll" direction="left" scrollamount="5">
                <h5 className="ms-3 mb-4 pt-2">For inquiries,wholesale ticket purchases,and accessibility arrangements,please reach out to us at : </h5> <br></br>
            </marquee>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-lg-4 col-sm-12 mb-3">
                    <h5 className="bol">Any query regarding Fiesta'23 <br></br> Contact Us</h5>
                    <h6>Aditya : +91-7033392927</h6>
                    <h6>Vikas  : +91-9798525268 </h6>

                </div>

                <div className="col-lg-4 col-sm-12 mb-3" >
                    <h5 className="bol">Helpful link</h5>
                    <a target='blank' href='https://drive.google.com/file/d/103fD5osW-0HUys20NaHFM433XwiWTXOG/view?usp=sharing' style={{ textDecoration: 'none' }} ><b>Sponser brochure</b></a>
                </div>
                <div className="col-lg-4 col-sm-12 mb-3">
                    <h5 className="bol">CONNECT WITH US</h5> <br></br>

                    <h6>
                        <a href="https://www.facebook.com/junoonmit" target='blank'>
                            <i className="fa-brands fa-facebook-f white ps-0 fa-2x animation"> </i>

                        </a>

                        <a href="https://instagram.com/junoon_mit?igshid=YmMyMTA2M2Y=" target='blank'>
                            <i className="fa-brands fa-instagram white ms-4 fa-2x animation"></i>
                        </a>
                        <a href="https://youtube.com/@junoonmit2022" target='blank'>
                            <i className='fa-brands fa-youtube white ms-4 fa-2x p-1 animation' ></i>
                        </a>
                    </h6>
                    <h6 className='mt-5 animation'>JUNOONMIT@GMAIL.COM</h6>


                </div>
                <div><h6>MIT Muzaffarpur,Bihar-842003</h6></div>
                <div><h3><a href='http://localhost:3000/tech-team'><b>Tech team</b></a></h3></div>

            </div>
        </div>
    )
}

export default Footer;