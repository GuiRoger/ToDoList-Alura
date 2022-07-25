import React from 'react';
import styled from 'styled-components';

import { StyledComponent} from 'styled-components';
import {ListaStyledComponent,ItemStyledComponent} from './list';

export default function List() {


  const tarefas = [
    { name: 'React', tempo: '02:00:00' },
    { name: 'JavaScript', tempo: '01:01:00' }
  ]
  return (
    <ListaStyledComponent>
      <h2>Estudos do dia</h2>
      <ul>
        
        {tarefas.map((item,index) => (               
          <ItemStyledComponent  key={index}>
            <h3>{item.name}</h3>
            <span>{item.tempo}</span>
          </ItemStyledComponent>        
        ))}
      </ul>
    </ListaStyledComponent>
  )
}