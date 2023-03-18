import React from 'react';

const dummyData = {
    date:"2023-03-18",
    explanation:"Driven by powerful stellar winds, expanding shrouds of gas and dust frame hot, luminous star Wolf-Rayet 124 in this sharp infrared view. The eye-catching 6-spike star pattern is characteristic of stellar images made with the 18 hexagonal mirrors of the James Webb Space Telescope. About 15,000 light-years distant toward the pointed northern constellation Sagitta, WR 124 has over 30 times the mass of the Sun. Produced in a brief and rarely spotted phase of massive star evolution in the Milky Way, this star's turbulent nebula is nearly 6 light-years across. It heralds WR 124's impending stellar death in a supernova explosion.  Formed in the expanding nebula, dusty interstellar debris that survives the supernova will influence the formation of future generations of stars." ,
    hdurl:"https://apod.nasa.gov/apod/image/2303/WR124_Webb.png",
    title:"Wolf-Rayet 124"
}

const NasaPhoto = (props) => {
    return (
        <div className = "nasa-photo-wrapper">
            <h3>{props.photo.title}</h3>
            <p className="date">{props.photo.date}</p>
          <img  src = {props.photo.hdurl}></img>
          <p className= "explanation">{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;