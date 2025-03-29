import { createGlobalStyle } from "styled-components";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from 'recoil';
import App from "./App.tsx";

const GlobalStyle = createGlobalStyle`
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,p,table,th,td,form,fieldset,legend,input,select,textarea,button,article,aside,dialog,header,section,footer,nav,figure,main{margin:0;padding:0}
  article,aside,dialog,header,section,footer,nav,figure,main{display:block}
  html,body{-webkit-text-size-adjust:none;-ms-text-size-adjust:none}
  ul,ol{list-style:none}
  table{table-layout:fixed;border-spacing:0}
  input,button,select{-webkit-appearance:none;appearance:none;border:0;border-radius:0;background-color:transparent}
  input::-ms-clear{display:none}
  img,fieldset{border:0;vertical-align:top}
  em,address{font-style:normal}
  a{color:#242424;text-decoration:none;cursor:pointer}
  a,button,input,label,img{-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select: none;user-select:none}
  button{cursor:pointer;white-space:nowrap}
  button::-moz-focus-inner{padding:0;border:0}
  ::-webkit-file-upload-button{cursor:pointer}
  hr{display:none}
  .blind,caption span,legend{overflow:hidden;position:absolute;width:1px;height:1px;margin:-1px;padding:0;clip:rect(0,0,0,0)}
`

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </StrictMode>
);
