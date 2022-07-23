import React from 'react';
import Button from '../button';

interface FormProps {
  inputTarefa: string;
  inputTimer: string;
}

function Form () {
  
  return (
    <form>
      <div className="form-control">
        <label htmlFor="tarefa">Tarefa:</label>
        <input 
        type="text" 
        name="tarefa" 
        id="tarefa"        
        placeholder="Tarefa a estudar" 
        required
        />
      </div>
      <div className="form-control">
        <label htmlFor="tempo">Tempo:</label>
        <input 
        type="time" 
        name="tempo" 
        id="tempo"        
        min="00:00:00"
        max="01:30:00"
        required
        />
      </div>
      <Button text="Enviar" id="SubmitButton"/>

    </form>
  );
}

export default Form;