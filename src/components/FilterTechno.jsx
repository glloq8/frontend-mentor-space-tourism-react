import React from 'react';

const FilterStaff = ({planets, selectedPlanet, onSelectPlanet }) => {

    return (
        <ul className='steps'>
            {planets.map((planet, key) => (
                <li
                    key={planet.name}
                    rel={planet.name.toLowerCase()}
                    onClick={() => onSelectPlanet(planet.name)}
                    className={selectedPlanet.name === planet.name ? 'active' : ''}
                >{key + 1}</li>
            ))}
        </ul>
    );
};

export default FilterStaff;