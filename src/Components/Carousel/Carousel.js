import './Carousel.css';

function Carousel(){
    return(
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{'height': '50em'}}>
                        <img src="Home1.png" className="d-block w-100" alt="not found"></img>
                        {/* <div class="absolute-div"> */}
                            {/* <div class="carousel-caption">
                                <h1 className="text-danger">Let's Together Build</h1><br></br>
                                <h1 className="text-white">Your Dream Home</h1> */}
                                {/* <h3 className='text-danger align-left'>All your Construction Needs under One Roof.</h3> */}
                            {/* </div> */}
                        {/* </div> */}
                    </div>
                    <div className="carousel-item" style={{'height': '50em'}}>
                        <img src="Home2.png" className="d-block w-100" alt="not foun"></img>
                    </div>
                    <div className="carousel-item" style={{'height': '50em'}}>
                        <img src="Home3.png" className="d-block w-100" alt="not foun"></img>
                    </div>
                    <div className="carousel-item" style={{'height': '50em'}}>
                        <img src="Home4.png" className="d-block w-100" alt="not foun"></img>
                    </div>
                    <div className="carousel-item" style={{'height': '50em'}}>
                        <img src="Home5.png" className="d-block w-100" alt="not foun"></img>
                    </div>
                    <div className="carousel-item" style={{'height': '50em'}}>
                        <img src="Home6.png" className="d-block w-100" alt="not foun"></img>
                    </div>
                    <div className="carousel-item" style={{'height': '50em'}}>
                        <img src="Home7.png" className="d-block w-100" alt="not foun"></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel