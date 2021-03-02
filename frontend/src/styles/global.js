import { createGlobalStyle } from 'styled-components';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';


export default createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Exo' !important;
      transition: all 0.1s;
   }

   body {
      color: #fff;
      font-family: 'Exo', sans-serif;
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
   }

   html, body, #root {
      height: 100%;
   }

   input, button {
      font-family: 'Exo', sans-serif;
   }

   button {
      cursor: pointer;
   }
`;
