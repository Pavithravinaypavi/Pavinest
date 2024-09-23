import './Process.css';

function Process(){
    return(
        <div id="howitworks">
            <div style={{'margin': '3em 0em'}}>
                <h2>OUR PROCESS - YOUR BENEFIT</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h6>Submit your requirement</h6>
                        <p>And our technical experts will understand your requirement & have a free consultation about your home construction</p>
                    </div>
                    <div className="col">
                        <h6>Fill up the requirement on the Google form</h6>
                        <p>& have Interaction with Architect for detailed discussion on the building design</p>
                    </div>
                    <div className="col">
                        <h6>Agreement signing between clients & buildAhome</h6>
                        <p>We assist to get the Plan sanctioned by Govt. approval bodies</p>
                    </div>
                    <div className="col">
                        <h6>From the initial kick-off till each construction step</h6>
                        <p>There will be Site Engineer on site</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process