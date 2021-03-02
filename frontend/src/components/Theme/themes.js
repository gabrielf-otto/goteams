import { css } from 'styled-components';


export const colors = [
   'default', 
   'red', 
   'blue'
];

const themes = {
   default: {
      primary: css`
         background: #202225;
      `,
      secundary: css`
         background: #353940;
      `
   },
   red: {
      primary: css`
         background: #800000;
      `,
      secundary: css`
         background: #B22222;
      `
   },
   blue: {
      primary: css`
         background: #0E2A4A;
      `,
      secundary: css`
         background: #43627F;
      `
   }
};


export default themes;
