import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { workerData } from 'worker_threads';


import Button from '../button';
import FormComponentStyle, { InputContainerStyle } from './stylesForm';
// interface FormProps {
//   inputTarefa: string;
//   inputTimer: string;
// }

function Form () {
  const [work,setWork] = useState<{tarefa:string,temp:string}>({tarefa:"",temp:"00:00:00"});
  function adicionarTarefa(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    console.log('state: ',work)
  }
  return (
    <FormComponentStyle onSubmit={adicionarTarefa.bind(eventWrapper)}>
      <InputContainerStyle>
        <label htmlFor="tarefa">Tarefa:</label>
        <input 
        type="text" 
        name="tarefa" 
        id="tarefa"     
        value={work.tarefa}   
        onChange={e=> setWork({...work, tarefa: e.target.value})}
        placeholder="Tarefa a estudar" 
        required
        />
      </InputContainerStyle>
      <InputContainerStyle>
        <label htmlFor="tempo">Tempo:</label>
        <input 
        type="time" 
        step="1"
        value={work.temp}
        onChange={e => setWork({...work,temp:e.target.value})}
        name="tempo" 
        id="tempo"        
        min="00:00:00"
        max="01:30:00"
        required
        />
      </InputContainerStyle>
      <Button 
      // onClick={(e)=>{e.preventDefault(); console.log(work)}}
      text="Adicionar"
      />

    </FormComponentStyle>
  );
}

export default Form;