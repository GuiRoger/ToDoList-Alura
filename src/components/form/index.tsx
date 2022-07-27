import React from 'react';


import Button from '../button';
import FormComponentStyle, { InputContainerStyle } from './stylesForm';
// interface FormProps {
//   inputTarefa: string;
//   inputTimer: string;
// }

function Form () {

  return (
    <FormComponentStyle>
      <InputContainerStyle>
        <label htmlFor="tarefa">Tarefa:</label>
        <input 
        type="text" 
        name="tarefa" 
        id="tarefa"        
        placeholder="Tarefa a estudar" 
        required
        />
      </InputContainerStyle>
      <InputContainerStyle>
        <label htmlFor="tempo">Tempo:</label>
        <input 
        type="time" 
        name="tempo" 
        id="tempo"        
        min="00:00:00"
        max="01:30:00"
        required
        />
      </InputContainerStyle>
      <Button />

    </FormComponentStyle>
  );
}

export default Form;