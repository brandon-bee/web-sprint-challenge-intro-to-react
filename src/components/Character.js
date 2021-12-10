import React from 'react';
import styled from 'styled-components';



export default function Character({ id, info, open }) {
  return (
    <>
      <h3>{info.name}</h3>
      <button onClick={() => open(id)}>Details</button>
    </>
  )
}