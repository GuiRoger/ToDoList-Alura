import React from 'react';

import Form from '../components/form/index';
import List from '../components/list/index';
import StopWatch from '../components/stopwatch/stopwatch';
import AppStyled from './styles';

function App() {   

  return (
    <AppStyled>
      <Form/>
      <List/>
      <StopWatch time={''}/>
    </AppStyled>
  );
}

export default App;
