import './AboutUs.css';

function AboutUs(){
    return(
        <div className="container-fluid bg" id="aboutus">
            <div className="row">
                <div className="col">
                    <div className="container-heading">   
                        <h4>ONE STOP </h4>
                        <h4>SOLUTION</h4>
                    </div>
                    <div>
                        <p className="mycontent">In this market of unorganized sectors, we are professionally providing an in-house home construction service for clientele ranging from moderate to premium.</p>
                    </div>
                </div>
                <div className="col container-heading">
                    <div className='d-flex' style={{'gap': '1em'}}>
                        <div>
                            <i className="fas fa-clock"></i>
                        </div>
                        <div>
                            <h6>TIMELY DELIVERY</h6>
                            <p className="mycontent">Our Projects will be handed over on time as per the given schedule. If there is any delay in handover, we pay a penalty for every day we delay.</p>
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div>
                            <div>
                                <i className="fa fa-home"></i>
                            </div>
                        </div>
                        <div>
                            <h6>CONSTRUCTION GUARANTEE</h6>
                            <p className="mycontent">1 year construction guarantee and 10 year waterproofing warranty</p>
                        </div>
                    </div>
                </div>
                <div className="col container-heading">
                    <div className='d-flex gap-3'>
                        <div>
                            <i className="fa-solid fa-money-bill-1-wave"></i>
                        </div>
                        <div>
                            <h6>NO HIDDEN CHARGES</h6>
                            <p className="mycontent">One lump sum cost till the completion and handover of the project.</p>
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div>
                            <i className="fa-solid fa-hand"></i>
                        </div>
                        <div>
                            <h6>NO SUBCONTRACTING</h6>
                            <p className="mycontent">Architecture, Structural, Construction, Electrical, Plumbing, Interiors - Complete in-house team with no subcontracting</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs