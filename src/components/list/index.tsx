import React, { useState } from 'react';
import IFullTask from '../../types/FullTask';
import LiComponent, {ListComponentStyle} from './list';
interface Tarefas{
 name:string;
 tempo:string;
}

export default function List({Tasks}:{Tasks:IFullTask[]}) {  
  return (
    <ListComponentStyle>
      <h2>Estudos do dia</h2>
      <ul>
        {Tasks.map((item,index) => (               
          <LiComponent  Key={index} Titulo={item.Name} Tempo={item.RunTime} />          
        ))}
      </ul>
    </ListComponentStyle>
  )
}