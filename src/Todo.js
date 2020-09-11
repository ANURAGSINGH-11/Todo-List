import React, { Component } from 'react'
import './Todo.css'
class Todo extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            items:[],
            currentItem:{
                text:'',
                key:''
            }
       }
       this.handleSubmit=this.handleSubmit.bind(this)
       this.handleChange=this.handleChange.bind(this)
       this.deleteItem=this.deleteItem.bind(this)
   }
   
   handleChange(e){
    this.setState({
        currentItem:{
            text:e.target.value,
            key:Date.now()
        }
    })
   }
   handleSubmit(e){
    e.preventDefault();
    const newItem=this.state.currentItem;
    if(newItem.text!==''){
        const items=[...this.state.items,newItem];
        this.setState({
            items:items,
            currentItem:{
                text:'',
                key:''
            }
        })
    }
   }
   deleteItem(key){
       const filteritems=this.state.items.filter(item =>item.key!==key)
        this.setState({
            items:filteritems
        })
   }
    render() {
        return (
            <div>
                <h1>ToDo List</h1>
              <form onSubmit={this.handleSubmit} id="form">
                <input type="text" value={this.state.currentItem.text} placeholder="Enter the Todo Item" onChange={this.handleChange}/> 
                <button type="submit">Add</button>     
            </form>
        <h3>{this.state.items.map((item)=>{
            return <div key={item.key} id="section">
                {item.text}
                <img role="button" alt="trash" src="https://www.flaticon.com/svg/static/icons/svg/3143/3143497.svg" onClick={()=>{this.deleteItem(item.key)}} />
                </div>
            })}
        </h3>
            </div>
        )
    }
}

export default Todo
