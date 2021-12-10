import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledDetails = styled.div`
  background-color: #dd998e;
  margin: 0 auto;
  width: 50%;
  border: 5px solid #8e433c;
  border-radius: 35%;
`

export default function Details({ current, close }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${current}/`)
      .then(resp => {
        setDetails(resp.data);
        console.log(resp.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [current])

  return (
    <StyledDetails>
      {
        details &&
        <>
          <h2>Details: {details.name}</h2>
          <p>Born: {details.birth_year}</p>
          <p>Gender: {details.gender}</p>
          <p>Eye Color: {details.eye_color}</p>
          <p>Hair Color: {details.hair_color}</p>
          <p>Skin Color: {details.skin_color}</p>
          <p>Height: {details.height}</p>
          <p>Mass: {details.mass}</p>
        </>
      }
      <button onClick={close}>Close</button>
    </StyledDetails>
  )
}