import React,{Component} from 'react'
class ChangeTextColorDemo extends Component{
    constructor(props){
        super(props);
        this.State={
            color:'#FF00FF',
        }
    }
    redHandler=()=>{
        this.setState({color:'#FF0000'});
    }
    greenHandler=()=>{
        this.setState({color:'#00FF00'});
    }
    blueHandler=()=>{
        this.setState({color:'#0000FF'});
    }
    render(){
        return(
            <div>
                <h1 style={{color:this.State.color}}>Welcome to Reactjs</h1>
                <button type="button" onClick={this.redHandler}>RED</button>&nbsp;&nbsp;
                <button type="button" onClick={this.greenHandler}>Green</button>&nbsp;&nbsp;
                <button type="button" onClick={this.blueHandler}>Blue</button>
            </div>
        );
    }
}
export default ChangeTextColorDemo;