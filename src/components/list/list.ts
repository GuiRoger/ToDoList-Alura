import styled from "styled-components";

export const  ListaStyledComponent = styled.aside`
grid-area: tarefas;
height: 100%;

h2 {
 font-size: 1.25rem;
 margin-bottom: 12px;
}

ul {
 max-height: 350px;
 overflow-y: scroll;
 scrollbar-width: thin;
}

@media screen and (min-width:1280px) {
 
 h2{
   text-align: center;
   font-size: 2.25rem;
   margin-bottom: 24px;
 }

 ul {
   overflow: auto;
   max-height: 500px;
 }
}
`;



export const ItemStyledComponent = styled.li`
background-color: #4D4D4D;
border-radius: 8px;
box-shadow: 2px 4px 4px #0000009F;
padding: 12px;
margin-bottom: 8px;
position: relative;
cursor: pointer;

h3 {
  margin-bottom: 8px;
  word-break: break-all;
}

span {
  color: #D0D0D0;
}

@media screen and (min-width:1280px) {
  font-size: 1.8rem;
}
`;
