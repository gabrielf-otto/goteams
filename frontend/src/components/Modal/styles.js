import styled from 'styled-components';

import themes from '../Theme/themes';


export const Container = styled.div`
   position: fixed;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   background: rgba(0,0,0,0.7);

   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Content = styled.div`
   ${props => themes[props.bg].primary}

   border-radius: 5px;
   box-shadow: 0 2px 10px 0 rgba(0,0,0,0.2);
   padding: 40px;
   margin: 0 10px;
   width: ${props => (props.size === 'big'? 700: 400)}px;

   h1 {
      font-size: 26px;
      font-weight: 500;
      text-align: center;
      margin: 0 10px 20px 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
   }

   form {
      display: flex;
      flex-direction: column;
      align-items: stretch;

      > span {
         color: #b9bbbe;
         font-size: 14px;
         line-height: 16px;
         font-weight: 500;
         margin-top: 15px;
         text-transform: uppercase;
      }

      > input {
         height: 40px;
         padding: 10px;
         border-radius: 3px;
         border: 1px solid rgba(0,0,0,0.3);
         background-color: rgba(0,0,0,0.1);
         color: #f6f6f6;
         margin-top: 8px;
         transition: border 0.15s ease;
         font-size: 16px;

         &:focus {
            border-color: #7289da;
         }
      }

      > button {
         margin: 20px 0 0;
      }
   }

   button {
      width: 100%;
   }
`;
