import React from 'react';


export default function List() {
  const tarefas = [
    { name: 'React', tempo: '02:00:00' },
    { name: 'JavaScript', tempo: '01:01:00' }
  ]
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item,index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}