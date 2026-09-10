import "./Services.css"

const services = [
    {
        icon: "fa-regular fa-heart",
        title: "Cardiology",
        description: "Comprehensive heart care and cardiovascular disease management"
    },
    {
        icon: "fa-solid fa-brain",
        title: "Neurology",
        description: "Expert diagnosis and treatment of neurological conditions"
    },
    {
        icon: "fa-solid fa-stethoscope",
        title: "Pediatrics",
        description: "Specialized healthcare for infants, children, and adolescents"
    },
    {
        icon: "fa-solid fa-bone",
        title: "Orthopedics",
        description: "Treatment for bones, joints, and musculoskeletal system"
    },
    {
        icon: "fa-regular fa-eye",
        title: "Ophthalmology",
        description: "Complete eye care and vision services"
    },
    {
        icon: "fa-solid fa-microscope",
        title: "Laboratory",
        description: "Advanced diagnostic testing and pathology services"
    },
    {
        icon: "fa-solid fa-capsules",
        title: "Pharmacy",
        description: "On-site pharmacy with prescription and OTC medications"
    },
    {
        icon: "fa-solid fa-briefcase-medical",
        title: "Emergency Care",
        description: "24/7 emergency medical services and urgent care"
    }
]

export default function End() {
    return (
        <div className="container">
            <div className="row mb-4">
                {services.slice(0, 4).map((service, index) => (
                    <div className="col-3 px-2 main-card" key={index}>
                        <div className="cards">
                            <div className="card-inner">
                                <i className={service.icon}></i>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row">
                {services.slice(4, 8).map((service, index) => (
                    <div className="col-3 px-2 main-card" key={index + 4}>
                        <div className="cards">
                            <div className="card-inner">
                                <i className={service.icon}></i>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}