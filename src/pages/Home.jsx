import React from 'react';
import { NavLink } from "react-router-dom";

const Home = () => {

    document.querySelector('body').setAttribute('class', '')
    document.querySelector('body').classList.add('page-home')
    
    return (
        <>
            <div className="content">
                <section className="home">
                    <div className="left">
                        <h2>So, you want to travel to</h2>
                        <h1>Space</h1>
                        <p className="intro">
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
                        kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
                        experience!
                        </p>
                    </div>
                    <div className="right">
                        <NavLink to="/destinations" className="btn"><span >Explore</span></NavLink>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;