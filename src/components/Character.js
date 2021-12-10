import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
  background-color: #f9e3ce;
  color: #220e10;
  border: 3px solid #b21c1c;
  width: 15%;
  margin: 5px auto;
  border-radius: 25%;
`

export default function Character({ id, info, open }) {
  return (
    <StyledCharacter>
      <h3>{info.name}</h3>
      <button onClick={() => open(id)}>Details</button>
    </StyledCharacter>
  )
}