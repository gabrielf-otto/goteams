import styled from 'styled-components';

import themes from '../Theme/themes';


export const Container = styled.aside`
   ${props => themes[props.bg].primary}

   padding: 20px 10px;
   box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1);

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
`;

export const TeamList = styled.div`
   display: flex;
   flex-direction: column;
`;

export const Team = styled.button`
   border: 0;
   background: transparent;
   margin: 0 0 8px;

   img {
      transition: all 0.2s;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
   }

   &:hover img {
      border-radius: 30%;
   }
`;

export const NewTeam = styled.button`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   border: 1px dashed rgba(255,255,255,0.3);
   margin: 0 0 8px;
   background: transparent;
   color: rgba(255,255,255,0.3);
   font-weight: 500;
   transition: all 0.2s;

   &:hover {
      border: 1px dashed rgba(255,255,255,0.6);
      color: rgba(255,255,255,0.6);
   }
`;

export const ThemeButton = styled.button`
   ${props => themes[props.bg].secundary}

   width: 50px;
   height: 50px;
   margin-top: 3px;
   border-radius: 50%;
   border: 1px solid #fff;
   transition: all 0.2s;

   &:hover {
      ${props => themes[props.bg].primary}
   }
`;

export const Signout = styled.button`
   width: 50px;
   height: 50px;

   border-radius: 50%;
   border: 1px dashed #e04848;
   background: transparent;
   color: #e04848;
   font-weight: 400;
   transition: all 0.2s ;

   &:hover {
      border-color: #a43d3d;
      color: #a43d3d;
   }
`;

