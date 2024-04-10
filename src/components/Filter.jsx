import React from 'react';

const Filter = ({planets, selectedPlanet, onSelectPlanet }) => {

    return (
        <ul className='planets'>
            {planets.map((planet) => (
                <li
                    key={planet.name}
                    rel={planet.name.toLowerCase()}
                    onClick={() => onSelectPlanet(planet.name)}
                    className={selectedPlanet.name === planet.name ? 'active' : ''}
                ><span>{planet.name}</span></li>
            ))}
        </ul>
    );
};

export default Filter;