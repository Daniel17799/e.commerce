import React from "react";
import "../css/articulo.css";
import Footer from "./footer";
import { Link } from 'react-router-dom';



function Busos() {
    return (
        <>
            <div className="header"></div>

            <nav className="navbar">
                <ul>
                    <li className="items">
                        <Link to="/#">Camisas</Link>
                    </li>
                    <li className="items">
                        <Link to="/busos">Busos</Link>
                    </li>
                </ul>
            </nav>

            <section className="articles">
            <Link to="/articulo2">
                <div className="container-general">
                    <div className="container-img2"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>

                <Link to="/articulo2">
                <div className="container-general">
                    <div className="container-img2"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>

                <Link to="/articulo2">
                <div className="container-general">
                    <div className="container-img2"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>

                
                <Link to="/articulo2">
                <div className="container-general">
                    <div className="container-img2"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>

                <Link to="/articulo2">
                <div className="container-general">
                    <div className="container-img2"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>

                <Link to="/articulo2">
                <div className="container-general">
                    <div className="container-img2"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>

                <Link to="/articulo2">
                <div className="container-general">
                    <div className="container-img2"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>

                <Link to="/articulo2">
                <div className="container-general">
                    <div className="container-img2"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>
            </section>

            <div>
            <Footer/>
            
            </div>
        </>
    )
}

export default Busos;