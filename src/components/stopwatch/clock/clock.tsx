import React from 'react';
import styled from 'styled-components';


const Clock : React.FC = ()=>{
  const ClockStyled = styled.span` 
    background-color: #5D677C;
    box-shadow: 2px 2px 4px #2B2B2B inset;
    height: 3.6rem;
    width: 3rem;
    padding: 8px 4px;
    border-radius: 10px;

  @media screen and (min-width:1280px) {
    height: 10.8rem;
    width: 9rem;
  }
  `;
  const DivisionClock = styled.span`

  height: 4.2rem;

  @media screen and (min-width:1280px) {
    height: 12.6rem;
  }

  `;

  return (<>
    <ClockStyled>0</ClockStyled>
    <ClockStyled>0</ClockStyled>
    <DivisionClock>:</DivisionClock>
    <ClockStyled>0</ClockStyled>
    <ClockStyled>0</ClockStyled>
  </>)
}
export default Clock;