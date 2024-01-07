import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='bg-dark'>
            <div className="">
                <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 border-top">
                    <p className="col-md-4 mb-0 text-light">© 2021 Company, Inc</p>

                    <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                    <i className="bi bi-bootstrap-fill text-light" style={{fontSize:'2rem'}}></i>
                    </Link>

                    <ul className="nav col-md-4 justify-content-end text-light">
                        <li className="nav-item"><Link to="/" className="text-light px-2">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="text-light px-2">About</Link></li>
                        <li className="nav-item"><Link to="/features" className="text-light px-2">Features</Link></li>
                        <li className="nav-item"><Link to="/contact-us" className="text-light px-2">Contact Us</Link></li>
                        <li className="nav-item"><Link to="/faq" className="text-light px-2">FAQs</Link></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer