import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.css';
import { useState } from 'react'
// import { FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare } from "react-icons/fa";

export default function Home() {
    const [show, setshow] = useState(false);
    return (
        <>
            <section className="navbar-bg">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container my-0">
                        <a className="navbar-brand mb-1 h1" href="#lad">WatchTime</a>
                        <button className="navbar-toggler custom-tog"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon " onClick={ () => setshow(!show) }></span>
                        </button>
                        <div className={ `collapse navbar-collapse ${show ? "show" : ""}` } id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#lad">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#lad">Movies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#lad">Tv Shows</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#lad">Memes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#lad">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#lad">Contact Us</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}