import React, { useState } from 'react';
import FilterStaff from './FilterStaff';

const Staff = ({planets}) => {

    const [selectedPlanet, setSelectedPlanet] = useState(planets[0])

    // Fonction pour gérer la sélection d'une planète dans le composant Filter
    const handleSelectPlanet = (planetName) => {
        const selectedPlanet = planets.find((planet) => planet.name === planetName);

        document.querySelector('.staff .left').classList.add('transitioning-out-left')
        document.querySelector('.staff .right').classList.add('transitioning-out-right')
        
        window.setTimeout(function() {
            setSelectedPlanet(selectedPlanet);
            document.querySelector('.staff .left').classList.remove('transitioning-out-left')
            document.querySelector('.staff .right').classList.remove('transitioning-out-right')
            document.querySelector('.staff .left').classList.add('transitioning-in-left')
            document.querySelector('.staff .right').classList.add('transitioning-in-right')
        }, 250)
        window.setTimeout(function() {
            setSelectedPlanet(selectedPlanet);
            document.querySelector('.staff .left').classList.remove('transitioning-in-left')
            document.querySelector('.staff .right').classList.remove('transitioning-in-right')
        }, 500)
    };

    return (
        <>
            <div className="staff">
                <div className="left">
                    <p className="role">{selectedPlanet.role}</p>
                    <h1 className="name">{selectedPlanet.name}</h1>
                    <p className="bio">{selectedPlanet.text}</p>
                    <FilterStaff planets={planets} selectedPlanet={selectedPlanet} onSelectPlanet={(handleSelectPlanet)} />
                </div>

                <div className="right">
                
                    <img src={`./${selectedPlanet.name.replace(' ', '-').toLowerCase()}.png`} alt="" />

                </div>

            </div>
        </>
    );
};

export default Staff;