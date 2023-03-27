import React, { useState, useEffect} from "react";
import axios from 'axios';
import styled from "styled-components";
import "./App.css";
import Button from "./Components/Button";
import NasaPhoto from './Components/NasaPhoto';

const dummyData = {
  date:"2023-03-18",
  explanation:"Driven by powerful stellar winds, expanding shrouds of gas and dust frame hot, luminous star Wolf-Rayet 124 in this sharp infrared view. The eye-catching 6-spike star pattern is characteristic of stellar images made with the 18 hexagonal mirrors of the James Webb Space Telescope. About 15,000 light-years distant toward the pointed northern constellation Sagitta, WR 124 has over 30 times the mass of the Sun. Produced in a brief and rarely spotted phase of massive star evolution in the Milky Way, this star's turbulent nebula is nearly 6 light-years across. It heralds WR 124's impending stellar death in a supernova explosion.  Formed in the expanding nebula, dusty interstellar debris that survives the supernova will influence the formation of future generations of stars." ,
  hdurl:"https://apod.nasa.gov/apod/image/2303/WR124_Webb.png",
  title:"Wolf-Rayet 124"
}


const WrapperDiv = styled.div`
font-family: arial;
text-align: center;`

function App() {
  const [data, setData] = useState(dummyData);
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setData(res.data);
    })
    .catch(err => console.error(err))
  }, [])
  return (
    <WrapperDiv className="App">
     { data && <NasaPhoto photo={data} /> }
     <Button type='primary'>Primary</Button>
    </WrapperDiv>
  );
}

export default App;


/**
date:"2023-03-18"
explanation:"Driven by powerful stellar winds, expanding shrouds of gas and dust frame hot, luminous star Wolf-Rayet 124 in this sharp infrared view. The eye-catching 6-spike star pattern is characteristic of stellar images made with the 18 hexagonal mirrors of the James Webb Space Telescope. About 15,000 light-years distant toward the pointed northern constellation Sagitta, WR 124 has over 30 times the mass of the Sun. Produced in a brief and rarely spotted phase of massive star evolution in the Milky Way, this star's turbulent nebula is nearly 6 light-years across. It heralds WR 124's impending stellar death in a supernova explosion.  Formed in the expanding nebula, dusty interstellar debris that survives the supernova will influence the formation of future generations of stars." 
hdurl:"https://apod.nasa.gov/apod/image/2303/WR124_Webb.png"
title:"Wolf-Rayet 124"
*/