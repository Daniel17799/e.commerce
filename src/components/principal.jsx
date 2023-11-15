import React from "react";
import "../css/principal.css";
import "../css/articulo.css";
import Footer from "./footer";
import { Link } from 'react-router-dom';


function Principal() {
    return (
        <>
            <div className="header"></div>

            <nav className="navbar">
                <ul>
                    <li className="items">
                        <Link to="/#">Camisas</Link>
                    </li>
                    <li className="items">
                        <Link to="/#">Busos</Link>
                    </li>
                </ul>
            </nav>

            <section className="articles">
            <Link to="/articulo">
                <div className="container-general">
                    <div className="container-img"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>

                <Link to="/articulo">
                <div className="container-general">
                    <div className="container-img"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>

                <Link to="/articulo">
                <div className="container-general">
                    <div className="container-img"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>

                
                <Link to="/articulo">
                <div className="container-general">
                    <div className="container-img"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>

                <Link to="/articulo">
                <div className="container-general">
                    <div className="container-img"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>

                <Link to="/articulo">
                <div className="container-general">
                    <div className="container-img"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>

                <Link to="/articulo">
                <div className="container-general">
                    <div className="container-img"></div>
                    <div className="container-text">
                        <p className="nombre">Camisa gris</p>
                        <p className="precio">15$</p>
                    </div>
                </div>
                </Link>

                <Link to="/articulo">
                <div className="container-general">
                    <div className="container-img"></div>
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

export default Principal;