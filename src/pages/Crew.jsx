import React from 'react';
import Staff from '../components/Staff';

const Crew = () => {
    
    document.querySelector('body').setAttribute('class', '')
    document.querySelector('body').classList.add('page-crew')

    const Planets = [
        {
            id: 1,
            name: "Douglas Hurley",
            role: "Commander",
            text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            id: 2,
            name: "Mark Shuttleworth",
            role: "Mission Specialist",
            text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based<br />Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            id: 3,
            name: "Victor Glover",
            role: "Pilot",
            text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            id: 4,
            name: "Anousheh Ansari",
            role: "Flight engineer",
            text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        },
    ]

    return (
        <>
            <div className="content">
                <section className="entry destinations">
                    <p className="breadcrumb"><span>02</span>Meet your crew</p>

                    <div className="content-crew">
                        <Staff planets={Planets} />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Crew;