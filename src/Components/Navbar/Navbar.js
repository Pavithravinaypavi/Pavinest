import { useEffect, useState } from 'react';
import './Navbar.css';
import Model from 'react-modal';

function Navbar(){
    const [visible, setVisible] = useState(false)
    // const closeIt = () => {
    //     setVisible(false)
    // }

    useEffect(() => {
        setTimeout(() => {
            setVisible(true)
        }, 5000);
    }, [])
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{'background-color': '#e3f2fd'}}>
                <div className='d-flex container-fluid'>
                    <div className='text-start d-flex justify-content-start'>
                        <div style={{'padding': '1em 0 0 1em'}}>
                            <a className="navbar-brand" href="#">PAVINEST</a>
                            <p style={{'color': 'white'}}>We Can Help To Build Your Dream Home</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#ourhomes">OUR HOMES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#aboutus">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#howitworks">HOW IT WORKS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#services">SERVICES</a>
                        </li>
                    </ul>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <form className="d-flex">
                            <button className="btn btn-outline-light" type="submit" onClick={() => setVisible(true)}>Contact Us</button>
                        </form>
                    </div>
                </div>
            </nav>
            <Model isOpen={visible} className="resizeIt" style={{'width': '50%', 'margin': '100px auto'}}>
                <div style={{'width': '30%', 'margin': '100px auto', 'border': 0}} className='main bg-light bg-gradient'>
                    <div onClick={()=> setVisible(false)} className='d-flex justify-content-end'>
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <div style={{'text-align': 'center'}}>
                        <div>
                            <h6>Book FREE Appointment</h6>
                            <p style={{'color': 'black'}}>For Best Quality Construction At Affordable Rates</p>
                        </div>
                    </div>
                    <div>
                        <select className="inp"  placeholder="Service Type">
                            <option name="interiordesign">Interior Design</option>
                            <option name="turnkeyconstruction">Turnkey Construction</option>
                            <option name="architecturedesign">Architecture Design</option>
                            <option name="constructionservice">Construction Service</option>
                            <option name="other">Other</option>
                        </select>
                        <input className="inp" type="text" name="fullname" id="fullname" placeholder="Full Name" required></input>
                        <br></br>
                        <input className="inp" type="number" name="mobno" id="mobno" placeholder="Mobile Number" required></input>
                        <br></br>
                        <input className="inp" type="email" name="email" id="email" placeholder="Email ID" required></input>
                        <br></br>
                        <input className="inp" type="text" name="loc" id="loc" placeholder="Location of your plot" required></input>
                        <br></br>
                        <button>Start Your Construction</button>
                        <p style={{'color': 'black'}}>*By submitting this form, I confirm that I have read and agreed to accept PAVI NEST's <a href="#">privacy policy</a> </p>
                    </div>
                </div>
            </Model>
        </div>
    )
}

export default Navbar