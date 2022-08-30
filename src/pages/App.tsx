import React, { useState } from 'react';

import Form from '../components/form/index';
import List from '../components/list/index';
import StopWatch from '../components/stopwatch/stopwatch';
import IFullTask from '../types/FullTask';
import AppStyled from './styles';

function App() {   
  const [taskInForm,setTaskInForm] = useState<IFullTask[] | []>([]);
  return (
    <AppStyled>
      <Form AddTaskToList={setTaskInForm}/>
      <List Tasks={taskInForm}/>
      <StopWatch time={''}/>
    </AppStyled>
  );
}

export default App;
