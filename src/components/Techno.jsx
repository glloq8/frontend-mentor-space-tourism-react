import React, { useState } from 'react';
import FilterTechno from './FilterTechno';

const Techno = ({planets}) => {

    const [selectedPlanet, setSelectedPlanet] = useState(planets[0])

    // Fonction pour gérer la sélection d'une planète dans le composant Filter
    const handleSelectPlanet = (planetName) => {
        const selectedPlanet = planets.find((planet) => planet.name === planetName);

        document.querySelector('.tech .content').classList.add('transitioning-out')
        document.querySelector('.tech .right').classList.add('transitioning-out')

        window.setTimeout(function() {
            setSelectedPlanet(selectedPlanet);
            document.querySelector('.tech .content').classList.remove('transitioning-out')
            document.querySelector('.tech .right').classList.remove('transitioning-out')
            document.querySelector('.tech .content').classList.add('transitioning-in')
            document.querySelector('.tech .right').classList.add('transitioning-in')
        }, 250)
        window.setTimeout(function() {
            setSelectedPlanet(selectedPlanet);
            document.querySelector('.tech .content').classList.remove('transitioning-in')
            document.querySelector('.tech .right').classList.remove('transitioning-in')
        }, 500)
    };

    return (
        <>
            <div className="tech">
                <div className="left">
                    <FilterTechno planets={planets} selectedPlanet={selectedPlanet} onSelectPlanet={(handleSelectPlanet)} />
                    <div className="content">
                        <p className="role">{selectedPlanet.role}</p>
                        <h1 className="name">{selectedPlanet.name}</h1>
                        <p className="bio">{selectedPlanet.text}</p>
                    </div>
                </div>

                <div className="right">
                
                    <img src={`./${selectedPlanet.name.replace(' ', '-').toLowerCase()}.jpg`} alt="" />

                </div>

            </div>
        </>
    );
};

export default Techno;