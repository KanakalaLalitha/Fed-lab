import React,{Component} from 'react'
class Counter extends Component{
    state={
        Count:0,
    };
    incrementHandler=()=>{
        this.setState({Count:this.state.Count+1});
    };
    decrementHandler=()=>{
        this.setState({Count:this.state.Count-1});
    };
    render(){
        return(
            <div>
                <button type="button" onClick={this.incrementHandler}>+</button>
                &nbsp;&nbsp;
                {this.state.Count}
                &nbsp;&nbsp;
                <button type="button" onClick={this.decrementHandler}>-</button>
             </div>
        );
    }
}
export default Counter;