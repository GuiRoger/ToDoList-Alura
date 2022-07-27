import styled from "styled-components";

//Encapsular Lis nos componentes criados caso seja concluido ou completo

export const  ListComponentStyle = styled.aside`
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

export const SelectedItem = styled.li`
  background-color: #292929;
  box-shadow: 2px 4px 4px #0000009F inset;
`;

export const CompleteItem = styled.li`
  background-color: #566F42;
  cursor: auto;
`;
export const ConcludedItem = styled.li`


    display: block;
    background-image: url('../../assets/img/check-mark.svg');
    background-repeat: no-repeat;
    background-size: 38px 38px;
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 42px;
    height: 43px;
  
`;