import { createGlobalStyle } from "styled-components"

const Normalize = createGlobalStyle`

article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block}
audio,canvas,video{display:inline-block;*display:inline;*zoom:1}
audio:not([controls]){display:none;height:0}
[hidden]{display:none}
html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
html,button,input,select,textarea{font-family:sans-serif}
body{margin:0}
a:focus{outline:thin dotted}
a:active,a:hover{outline:0}
h1{font-size:2em;margin:.67em 0}
h2{font-size:1.5em;margin:.83em 0}
h3{font-size:1.17em;margin:1em 0}
h4{font-size:1em;margin:1.33em 0}
h5{font-size:.83em;margin:1.67em 0}
h6{font-size:.75em;margin:2.33em 0}
abbr[title]{border-bottom:1px dotted}
b,strong{font-weight:bold}
blockquote{margin:1em 40px}
dfn{font-style:italic}
mark{background:#ff0;color:#000}
p,pre{margin:1em 0}
code,kbd,pre,samp{font-family:monospace,serif;_font-family:'courier new',monospace;font-size:1em}
pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word}
q{quotes:none}
q:before,q:after{content:'';content:none}
small{font-size:80%}
sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sup{top:-0.5em}
sub{bottom:-0.25em}
dl,menu,ol,ul{margin:1em 0}
dd{margin:0 0 0 40px}
menu,ol,ul{padding:0 0 0 40px}
nav ul,nav ol{list-style:none;list-style-image:none}
img{border:0;-ms-interpolation-mode:bicubic}
svg:not(:root){overflow:hidden}
figure{margin:0}
form{margin:0}
fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}
legend{border:0;padding:0;white-space:normal;*margin-left:-7px}
button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle}
button,input{line-height:normal}
button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;*overflow:visible}
button[disabled],input[disabled]{cursor:default}
input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;*height:13px;*width:13px}
input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}
input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}
button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}
textarea{overflow:auto;vertical-align:top}
table{border-collapse:collapse;border-spacing:0}

`
export default Normalize
