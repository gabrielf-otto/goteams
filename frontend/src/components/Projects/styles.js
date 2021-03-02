import styled from 'styled-components';

import themes from '../Theme/themes';


export const Container = styled.div`
   flex: 1;
   padding: 20px;
   overflow: auto;

   ${props => themes[props.bg].secundary}

   > header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 0 20px;

      > div {
         margin-right: 20px;
      }

      h1 {
         font-size: 22px;
         margin-left: 10px;
      }

      div {
         button {
            margin-left: 10px;
         }
      }

      & ~span {
         display: flex;
         align-items: center;
         justify-content: center;
      }
   }

   div.projects {
      display: flex;
      flex-wrap: wrap;
      margin-right: 10px;
   }

   p {
      margin-left: 10px;
   }
`;

export const Project = styled.div`
   ${props => themes[props.bg].primary}

   border-radius: 5px;
   margin: 15px 10px;
   padding: 20px;
   box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1);

   min-width: 340px;

   flex: 1;
   display: flex;
   align-items: center;
   flex-direction: column;

   h3 {
      font-weight: 500;
      padding-bottom: 7px;
      margin-bottom: 7px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
   }

   small {
      font-weight: 300;
   }
`;
