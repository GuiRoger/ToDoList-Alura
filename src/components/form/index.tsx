import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { v4 as IdGenerator} from 'uuid';
import IFullTask from '../../types/FullTask';

import Button from '../button';
import FormComponentStyle, { InputContainerStyle } from './stylesForm';


export default function Form ({AddTaskToList}:{AddTaskToList: React.Dispatch<React.SetStateAction<IFullTask[]>>}) {
  const [Task,setTask] = useState<IFullTask>({Name:"",RunTime:"00:00:00"});
  
  function AddTask(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    AddTaskToList(OldTasks=>[...OldTasks,{...Task,selected:false,completed:false, Id: IdGenerator()}]);
    setTask({Name:"",RunTime:"00:00:00"});
  }

  return (
    <FormComponentStyle onSubmit={AddTask.bind(eventWrapper)}>
      <InputContainerStyle>
        <label htmlFor="tarefa">Tarefa:</label>
        <input 
        type="text" 
        name="tarefa" 
        id="tarefa"     
        value={Task.Name}   
        onChange={e=> setTask({...Task, Name: e.target.value})}
        placeholder="Tarefa a estudar" 
        required
        />
      </InputContainerStyle>
      <InputContainerStyle>
        <label htmlFor="tempo">Tempo:</label>
        <input 
        type="time" 
        step="1"
        value={Task.RunTime}
        onChange={e => setTask({...Task,RunTime:e.target.value})}
        name="tempo" 
        id="tempo"        
        min="00:00:00"
        max="01:30:00"
        required
        />
      </InputContainerStyle>
      <Button 
      onClick={(e)=>{e.preventDefault(); console.log(Task)}}
      text="Adicionar"
      type="submit"
      />

    </FormComponentStyle>
  );
}

 