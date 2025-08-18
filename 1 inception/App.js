const HeadingReact = React.createElement(
    // what type of tag
    "h1", 
    // props attributes and children
    {id:"heading"},  //attributes
    "Hello World from react!!!"  //this is children
);


const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
    "div", {id:"child"}, 
    [
        React.createElement("h1", {id:"heading"}, "this is nesting"),
        React.createElement("h2", {id:"heading"}, "this is nesting h2 tag")
    ]
)
)

const rootEle = ReactDOM.createRoot(document.getElementById("root"));

rootEle.render(parent); //render the parent inside the root



// creates JS object - react element
// render method take this object, convert it and put it on the DOM


// react is a library, it can work independently in a small portion of the app (eg: header, footer, sidebar)

