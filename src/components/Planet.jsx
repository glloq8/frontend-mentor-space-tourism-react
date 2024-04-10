import React, { useState } from 'react';
import Filter from './Filter';

const Planet = ({planets}) => {

    const [selectedPlanet, setSelectedPlanet] = useState(planets[0])

    // Fonction pour gérer la sélection d'une planète dans le composant Filter
    const handleSelectPlanet = (planetName) => {
        const selectedPlanet = planets.find((planet) => planet.name === planetName);

        document.querySelector('.planet .left').classList.add('transitioning-out')
        document.querySelector('.infos-planet').classList.add('transitioning-out')

        window.setTimeout(function() {
            setSelectedPlanet(selectedPlanet);
            document.querySelector('.planet .left').classList.remove('transitioning-out')
            document.querySelector('.infos-planet').classList.remove('transitioning-out')
            document.querySelector('.planet .left').classList.add('transitioning-in')
            document.querySelector('.infos-planet').classList.add('transitioning-in')
        }, 250)
        window.setTimeout(function() {
            setSelectedPlanet(selectedPlanet);
            document.querySelector('.planet .left').classList.remove('transitioning-in')
            document.querySelector('.infos-planet').classList.remove('transitioning-in')
        }, 500)
    };

    return (
        <div className="planet">
            <div className="left"><img src={`./${selectedPlanet.name.toLowerCase()}.png`} alt="" /></div>

            <div className="right">
                <Filter planets={planets} selectedPlanet={selectedPlanet} onSelectPlanet={(handleSelectPlanet)} />

                <div className="infos-planet">
                    <h1>{selectedPlanet.name}</h1>
                    <p className="desc">
                        {selectedPlanet.text}
                    </p>
                    <div className="bottom">
                        <div className="distance">
                            <p className="title">Avg. distance</p>
                            <strong>{selectedPlanet.distance}</strong>
                        </div>
                        <div className="time">
                            <p className="title">Est. travel time</p>
                            <strong>{selectedPlanet.travel}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Planet;