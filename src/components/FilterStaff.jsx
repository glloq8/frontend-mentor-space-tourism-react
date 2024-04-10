import React from 'react';

const FilterStaff = ({planets, selectedPlanet, onSelectPlanet }) => {

    return (
        <ul className='dots'>
            {planets.map((planet) => (
                <li
                    key={planet.name}
                    rel={planet.name.toLowerCase()}
                    onClick={() => onSelectPlanet(planet.name)}
                    className={selectedPlanet.name === planet.name ? 'active' : ''}
                ></li>
            ))}
        </ul>
    );
};

export default FilterStaff;