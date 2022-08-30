import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { workerData } from 'worker_threads';
import IFullTask from '../../types/FullTask';
import FullTask from '../../types/FullTask';


import Button from '../button';
import FormComponentStyle, { InputContainerStyle } from './stylesForm';
// interface FormProps {
//   inputTarefa: string;
//   inputTimer: string;
// }

function Form ({AddTaskToList}:{AddTaskToList:React.Dispatch<React.SetStateAction<IFullTask[]>>}) {
  const [task,setTask] = useState<IFullTask>({Name:"",RunTime:"00:00:00"});
  
  function AddTask(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    AddTaskToList(OldTasks=> [...OldTasks,{...task}]);
    console.log('state: ',task)
  }

  return (
    <FormComponentStyle onSubmit={AddTask.bind(eventWrapper)}>
      <InputContainerStyle>
        <label htmlFor="tarefa">Tarefa:</label>
        <input 
        type="text" 
        name="tarefa" 
        id="tarefa"     
        value={task.Name}    
        onChange={e=> setTask({...task, Name: e.target.value})}
        placeholder="Tarefa a estudar" 
        required
        />
      </InputContainerStyle>
      <InputContainerStyle>
        <label htmlFor="tempo">Tempo:</label>
        <input 
        type="time" 
        step="1"
        value={task.RunTime}
        onChange={e => setTask({...task,RunTime:e.target.value})}
        name="tempo" 
        id="tempo"        
        min="00:00:00"
        max="01:30:00"
        required
        />
      </InputContainerStyle>
      <Button 
      onClick={(e)=>{e.preventDefault(); console.log(task)}}
      text="Adicionar"
      type="submit"
      />

    </FormComponentStyle>
  );
}

export default Form;