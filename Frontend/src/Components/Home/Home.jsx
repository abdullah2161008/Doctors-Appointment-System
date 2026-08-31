import "./Home.css"

export default function Home(){
    return(
        <div className="container-fluid Home">
            <div className="row">
                <div className="col-6 Home-left">
                    <h3 className="home-left-para1">Your Health, Our Priority</h3>
                    <h3 className="home-left-para2">Quality Healthcare Services at Your Fingertips</h3>
                    <h3 className="home-left-para3">Book appointments with top-rated doctors, access specialized care, and manage your health journey all in one place. Experience healthcare that puts you first.</h3>
                </div>
                <div className="col-6 Home-right">
                    <img src="/olga-guryanova-tMFeatBSS4s-unsplash.jpg" />
                </div>
            </div>
        </div>
    )
}