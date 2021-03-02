import styled from 'styled-components';


export const MembersList = styled.ul`
   list-style: none;
   margin: 0;

   li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0 0;

      strong {
         font-size: 18px;
      }

      > div:last-child {
         width: 320px;
         color: #666;
      }
   }
`;

export const Invite = styled.form.attrs(props => ({
   autoComplete: 'off'
}))`
   padding-bottom: 20px;
   border-bottom: 1px solid rgba(255,255,255,0.1);
`;

export const Action = styled.button.attrs(props => ({
   type: 'button'
}))`
   width: 50px !important;
   height: 50px;

   flex: 0;
   display: inline-block;
   border: none;
   outline: none;
   background: none;

`;
