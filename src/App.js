import React from 'react';
import ".//components/Button.css"
import Button from ".//components/Button"
import Input from "./components/Input"
import ClearBtn from "./components/ClearBtn"


function App() {
  return (
    <div className="App">
      <div className="calc-wraper">
                 <Input> rjnajn</Input>
               <div className="row">
                   <Button>7</Button>
                   <Button>8</Button>
                   <Button>9</Button>
                   <Button>/</Button>
               </div>     

               <div className="row">
                   <Button>4</Button>
                   <Button>5</Button>
                   <Button>6</Button>
                   <Button>*</Button>
               </div>

               <div className="row">
                   <Button>1</Button>
                   <Button>2</Button>
                   <Button>3</Button>
                   <Button>+</Button>
               </div>

               <div className="row">
                   <Button>.</Button>
                   <Button>0</Button>
                   <Button>=</Button>
                   <Button>-</Button>
               </div> 
               <ClearBtn>Clear</ClearBtn>
            </div>
    </div>
  );
}

export default App;
