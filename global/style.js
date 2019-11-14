import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle `
 *{
   margin: 0;
   padding: 0;
   outline:0;
   box-sizing: border-box
 }
 html, body, #root {
   min-height: 100%
 }
 body {
   background: #40E0D0;
   -webkit-font-smoothing: antialiased !important
 }
 
 body, input, button {
   color: #222;
   font-size: 13px;
   font-family: Tahoma
 }

 button {
   cursor: pointer;
 }

`