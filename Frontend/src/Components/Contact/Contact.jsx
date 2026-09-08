export default function Contact(){
    return(
        <>
            <div className="container-fluid main-contact">
                <div className="container">
                    <div className="row main-row">
                        <div className="col-3 contact1">
                            <h3><i className="fa-solid fa-hand-holding-medical"></i> HealthCare Plus</h3>
                            <p className="contact1-para">Providing quality healthcare services with compassion and excellence since 2005.</p>
                            <p className="social-links"><a href="/"><i class="fa-brands fa-square-facebook"></i></a>  <a href="/"><i class="fa-brands fa-square-twitter"></i></a> <a href="/"><i class="fa-brands fa-square-instagram"></i></a><a href="/"><i class="fa-brands fa-linkedin"></i></a></p>
                        </div>
                        <div className="col-3 contact2">
                            <h3>Quick Links</h3>
                            <p><a href="">Home</a></p>
                            <p><a href="">Services</a></p>
                            <p><a href="">Our Doctors</a></p>
                            <p><a href="">Book Appointment</a></p>
                            <p><a href="">About Us</a></p>

                        </div>
                        <div className="col-3 contact3">
                            <h3>Our Services</h3>
                            <p><a href="">Cardiology</a></p>
                            <p><a href="">Neurology</a></p>
                            <p><a href="">Pediatrics</a></p>
                            <p><a href="">Orthopedics</a></p>
                            <p><a href="">Emergency Care</a></p>
                        </div>
                        <div className="col-3 contact4">
                            <h3>Contact Us</h3>
                            <p><i class="fa-solid fa-location-dot"></i> 123 Medical Center Dr, Healthcare City, HC 12345</p>
                            <p><i class="fa-solid fa-phone"></i> 0306-4016103</p>
                            <p><i class="fa-regular fa-envelope"></i>khan.college@gmail.com</p>

                            <p className="emergency">
                                <p>Emergency Hotline</p>
                                <h2>911</h2>
                            </p>
                        </div>
                    </div>

                    <hr className="horizontal-row" />

                    <div className="row last-row">
                        <div style={{color:"white"}} className="col-6 mt-5 end">© 2025 HealthCare Plus. All rights reserved.</div>
                        <div className="col-6 text-end privacy">
                            <p><a style={{textDecoration:"none"}} href="">Privacy Policy</a> <a style={{textDecoration:"none"}} href="">Terms of Service</a> <a style={{textDecoration:"none" }} href="">Cookie Policy</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}