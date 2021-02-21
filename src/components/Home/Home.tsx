import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import {Link} from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <Header />
            
            <section className="home-body">
                <div className="body-text">
                    <h3 className="body-title">Scan your ID</h3>
                    <span className="body-subtitle">Take a picture. It may take time to validate your personal information</span>
                </div>
                <div className="body-img">
                    <img src="/assets/ID-bg.svg" alt="id-image" />
                    <Link to="/take" className="take-btn">
                        <span className='btn-text'>Take Picture</span>
                    </Link>
                </div>
            </section>
        </>
        )
}