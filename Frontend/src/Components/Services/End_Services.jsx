import "./Services.css"

export default function End(){
    return(
        <div className="container">
            <div className="row mb-4">
                <div className="col-3 px-2 main-card">
                    <div className="cards">
                        <div className="card-inner">
                            <i className="fa-regular fa-heart"></i>
                            <h3>Cardiology</h3>
                            <p>Comprehensive heart care and cardiovascular disease management</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 px-2 main-card">
                    <div className="cards">
                        <div className="card-inner">
                            <i className="fa-solid fa-brain"></i>
                            <h3>Neurology</h3>
                            <p>Expert diagnosis and treatment of neurological conditions</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 px-2 main-card">
                    <div className="cards">
                        <div className="card-inner">
                            <i className="fa-solid fa-stethoscope"></i>
                            <h3>Pediatrics</h3>
                            <p>Specialized healthcare for infants, children, and adolescents</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 px-2 main-card">
                    <div className="cards">
                        <div className="card-inner">
                            <i className="fa-solid fa-bone"></i>
                            <h3>Orthopedics</h3>
                            <p>Treatment for bones, joints, and musculoskeletal system</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-3 px-2 main-card">
                    <div className="cards">
                        <div className="card-inner">
                            <i className="fa-regular fa-eye"></i>
                            <h3>Ophthalmology</h3>
                            <p>Complete eye care and vision services</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 px-2 main-card">
                    <div className="cards">
                        <div className="card-inner">
                            <i className="fa-solid fa-microscope"></i>
                            <h3>Laboratory</h3>
                            <p>Advanced diagnostic testing and pathology services</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 px-2 main-card">
                    <div className="cards">
                        <div className="card-inner">
                            <i className="fa-solid fa-capsules"></i>
                            <h3>Pharmacy</h3>
                            <p>On-site pharmacy with prescription and OTC medications</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 px-2 main-card">
                    <div className="cards">
                        <div className="card-inner">
                            <i className="fa-solid fa-briefcase-medical"></i>
                            <h3>Emergency Care</h3>
                            <p>24/7 emergency medical services and urgent care</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}