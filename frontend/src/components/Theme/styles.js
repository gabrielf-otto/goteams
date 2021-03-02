import styled from 'styled-components';

import themes from './themes';


export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin-bottom: 20px;
`;

export const ThemeOption = styled.span`
   width: 60px;
   height: 60px;
   border-radius: 50%;
   border: 1px solid #fff;
   cursor: pointer;

   ${props => themes[props.bg].primary};
`;

