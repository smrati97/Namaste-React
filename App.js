const heading = React.createElement(
'h1', {
    id:'title1'
}, 
"Namaste Everyone");

const heading1 = React.createElement(
'h1', {
    id:'title2'
}, 
"heading1");

const heading2 = React.createElement(
'h2', {
    id:'title3'
}, 
"heading2");

const container = React.createElement(
'div', {
    id:'container'
}, 
[heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading, container]);