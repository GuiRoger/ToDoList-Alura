import React from 'react';
import LiComponent, {ListComponentStyle} from './list';

export default function List() {
  let tarefas = [
    { name: 'React', tempo: '02:00:00' },
    { name: 'JavaScript', tempo: '01:01:00' }
  ]
  
  return (
    <ListComponentStyle>
      <h2 onClick={()=>{
        console.log("Tarefas", tarefas)
        tarefas = [...tarefas,{name:'Estudar Estados',tempo:'02:00:00'}]
        }} >Estudos do dia</h2>
      <ul>
        
        {tarefas.map((item,index) => (               
          <LiComponent  Key={index} Titulo={item.name} Tempo={item.tempo} />
          
        ))}
      </ul>
    </ListComponentStyle>
  )
}