import styled, { css } from 'styled-components';


const sizes = {
   small: css`
      height: 28px;
      font-size: 12px;
   `,

   default: css`
      height: 36px;
      font-size: 14px;
   `,

   big: css`
      height: 44px;
      font-size: 18px;
   `
};

const colors = {
   default: css`
      background: #7289da;

      &:hover {
         background: #5f73bc;
      }
   `,

   danger: css`
      background: #e04848;

      &:hover {
         background: #a43d3d;
      }
   `,

   gray: css`
      background: #b9bbbe;
      color: #666;

      &:hover {
         background: #999;
      }
   `
};

const loading = css`
   cursor: not-allowed;
   background: #5f73bc;

   &:hover {
      background: #5f73bc;
   }

   display: flex;
   align-items: center;
   justify-content: center;
`;

const Button = styled.button.attrs(props => ({
   type: props.type || 'button'
}))`
   border-radius: 3px;
   transition: background-color 0.15s ease;
   background: #7289da;
   border: 0;
   color: #fff;
   font-size: 12px;
   padding: 0 10px;
   text-transform: uppercase;
   font-weight: 600;
   box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
   
   ${props => sizes[props.size || 'default']}
   ${props => colors[props.color || 'default']}

   ${props => props.filled === false && css`
      background: none;
      box-shadow: none;

      &:hover {
         background: none;
         opacity: 0.6;
      }
   `}

   // For sign-in and sign-up button
   ${props => props.loading && loading}
`;


export default Button;
