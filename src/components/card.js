import { Component } from "react";
import Input from "../Input";
import './card.css';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 

            <>
            <div className="container">
            <div className="card">
                <h1 className="tittle">To Do List</h1>
                <Input/>
            </div>
            </div>
            </>


         );
    }
}
 
export default Card;