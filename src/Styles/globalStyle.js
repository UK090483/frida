import { createGlobalStyle } from "styled-components"
import { flexUnit } from "./theme"

const Global = createGlobalStyle`

body {
  font-family: "Montserrat", sans-serif;
  color: #000000;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 800;
  line-height: 1.1;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}

h1 {
  font-family: "Montserrat", sans-serif;
  ${flexUnit(6, 40, 100)}
}
h2 {
  font-family: "Montserrat", sans-serif;
  ${flexUnit(5, 32, 80)}
}
h3 {
  font-family: "Montserrat", sans-serif;
  ${flexUnit(4, 24, 60)}
}
h4 {
  font-family: "Montserrat", sans-serif;
  ${flexUnit(3, 20, 50)}
}

h5 {
  font-family: "Montserrat", sans-serif;
  ${flexUnit(2, 16, 40)}
}
h6 {
  font-family: "Montserrat", sans-serif;
  ${flexUnit(2, 15, 30)}
}

p,
li {
  font-weight: 500;
  font-family: "Montserrat", sans-serif;


  
    
  font-size:calc(.9375rem + 15.6*(100vw - 20rem)/1280);

  @media screen and (min-width: 1600px)
 {
    font-size: 1.9125rem;
}

 
  line-height: 1.3em;
  padding-bottom: 20px;
}



body::-webkit-scrollbar {
  display: none;
}

a {
  color: #fa464c;
}

.page-layout {
  transition: opacity 1s;
  opacity: 1;
}
.frida_mouse_active {
  cursor: none;
}

@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}
html {
  /* font: 112.5%/1.45em georgia, serif; */
  box-sizing: border-box;
  overflow-y: scroll;
}
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.snipcart-cart--opened {
  .page-layout {
    transition: opacity 1s;
    opacity: 0;
  }
  .frida_mouse_active {
    cursor: auto;
  }
}

.snipcart-item-line__container {
  margin-bottom: 10px !important;
}
.snipcart-layout {
  font-family: "Montserrat", sans-serif !important;
  font-weight: 500;
}
.snipcart-item-quantity__quantity,
.snipcart-item-quantity__label {
  opacity: 0;
}

// .snipcart-cart-header {
//   border: red solid 1px;
//   .snipcart-cart-header__close-button {
//     border: red solid 1px;
//     max-width: fit-content;
//     min-width: fit-content;
//   }
//   div {
//     width: 100%;
//     h3 {
//       border: green solid 1px;
//       width: 100%;
//     }
//   }
// }
`
export default Global