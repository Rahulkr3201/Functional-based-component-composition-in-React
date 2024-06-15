import React from "react";
import ReactDOM from "react-dom";
//this was simply using react element
const root=ReactDOM.createRoot(document.getElementById("root"));
// const heading=(<h1 className="heading">
//     lets see namste react<br></br>
//     namaste react using jsx</h1>);
//     root.render(heading);//for render react elements
// this was using react functional component
         // const HeadingComponent=()=>{
         //     return <h1>namaste react functional componenet</h1>
         // } can be written as:


//component composition  

const subtitle=<p>i am subtitle</p>
 
const title= (<h1 className="title">
    {subtitle}
    i am ssamll title</h1>);
 

 const Title=()=>(
    <h1 className="head">
        namste dostoooo
    </h1>
);

const number =100
const number2=500
 //you can insert any piece of js inside your function ({})


const HeadingComponent=()=> (
    <div id="box">
        {number}
        <h2>{number2}</h2>
        {title}
        <Title/>  
       <h1 className="heading">namaste react functional component</h1>
</div>
);

root.render(<HeadingComponent/>);//render for function 

