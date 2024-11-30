// Módulo responsável por manter o estilo da pagina de LOGIN

// Usaremos o Styled-Component
// 1 - Instalar extenção: vscode styled components
// 2 - Instalar dependencia: npm i styled-component

import styled from 'styled-components';

// Styled Component funciona desta forma
export const Title = styled.h1`
  background: red;
  // Small é filho da tag H1 na hierarquia criada, então ele poderá ser manipulado por aqui também, da forma abaixo:
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }

  // E o que ficar por fora do escopo será atribuido ao elemento PAI
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
`;

export const Paragrafo = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-top: 50px;
`;
