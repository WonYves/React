import React, { Component } from 'react'

export default class APP extends Component {
    myref = React.createRef()
    state = {
        list:[ {id:1,mytext:"aaa"},{id:2,mytext:"bbb"},{id:3,mytext:"ccc"}]
    }
  render() {
    return (
      <div>
          <input ref={this.myref}></input>
          <button onClick={this.handleClick}>add</button>
          <ul>
                {
                    this.state.list.map((item,index) => 
                    <li key={item.id}>
                        {item.mytext}
                        <button onClick={()=>this.handleDelete(index)}>del</button>
                    </li>
                    )
                }
          </ul>
                    {this.state.list.length===0 && <div>待办事项空空如也</div>}
      </div>
    )
  }
  handleClick = () =>{
    console.log("click",this.myref.current.value);
    let newlist = [...this.state.list]
    newlist.push({
        id:Math.random()*10000000,
        mytext:this.myref.current.value
    })
        this.setState({
            list:newlist
        }) 
    this.myref.current.value=''
  }
  handleDelete(index){
    console.log("delete",index);
    let newlist = this.state.list.slice()
    newlist.splice(index,1)
    this.setState({
        list:newlist
    })
  }
}
