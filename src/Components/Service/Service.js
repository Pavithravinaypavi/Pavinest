import './Service.css'

function Service(){
    return (
        <div className="bg-main" id="services">
            <div style={{'padding': '3em 3em'}}>
                <div style={{'padding': '0em 3em'}}>
                    <h2>CONSTRUCTION SERVICES</h2>
                    <p className='fs-6 text-center text-black'>Our team works on designing the perfect house for you, and the site engineers ensure that every details of the design is replicated accurately in the project.</p>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img src='Interior.jpg' alt='not found' width="300px" height="300px"></img>
                            <h4 className='text-center'>Interior Design</h4>
                            <p className='text-black'>We dont just design, manufacture and install, we create truly custom-made home interiors.</p>
                        </div>
                        <div class="col">
                            <img src='Turnkey.png' alt='not found' width="300px" height="300px"></img>
                            <h4 className='text-center'>Turnkey Construction</h4>
                            <p className='text-black'>Turnkey construction is a building solution that drastically simplifies things for the owner of the future Home</p>
                        </div>
                        <div class="col">
                            <img src='Architects.png' alt='not found' width="300px" height="300px"></img>
                            <h4 className='text-center'>Architecture Design</h4>
                            <p className='text-black'>We provide superior service to our clients, putting safety first, creating opportunities for our people, delivering exceptional work.</p>
                        </div>
                        <div class="col">
                            <img src='Service.png' alt='not found' width="300px" height="300px"></img>
                            <h4 className='text-center'>Construction Service</h4>
                            <p className='text-black'>By having us beside you as your consulting partner, you can ensure your house is built in class at ease.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service