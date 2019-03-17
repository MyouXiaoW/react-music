import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
    width: 100%;
    height: 100%;
}
 
html {
    font-family: 'sans-serif', "Microsoft YaHei", "微软雅黑", "Tahoma", "Helvetica";
    font-size: 10px;
 
    background: #fff;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}
 
table {
    border-collapse: collapse;
    border-spacing: 0;
}
 
img {
    border: 0； max-width: 100%!important;
    vertical-align: middle;
}
 
address,
caption,
cite,
code,
dfn,
i,
em,
strong,
th,
var {
    font-weight: normal;
    font-style: normal;
}
 
ol,
ul {
    list-style: none;
}
 
a {
    text-decoration: none;
}
 
a:hover,
a:focus {
    outline: none;
}
 
caption,
th {
    text-align: left;
    font-weight: normal;
}
 
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
    font-size: 100%;
}
 
q:before,
q:after {
    content: ”;
}
 
abbr,
acronym {
    border: 0;
}
 
button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font: inherit;
    color: inherit;
}
/* 去除怪异和模型 */
/* * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
} */
 
:before,
:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
 
input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration {
    -webkit-appearance: none;
}
 
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section,
summary {
    display: block;
}
`;
