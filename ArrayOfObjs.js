import React,{Component} from 'react'
class ArrayOfObjs extends Component{
    constructor(props){
        super(props);
        this.state={
            Countriesinfo:[
                {name:'India',capital:'New Delhi'},
                {name:'china',capital:'Beijing'},
                {name:'usa',capital:'WashingtonDc'},
                {name:'Japan',capital:'Tokyo'},
            ]
        }
    }
    render(){
        const{Countriesinfo}=this.state;
        return(
            <div>
                <table border='1'>
                    <tr>
                        <th>Country Name</th>
                        <th>Capital</th>
                    </tr>
                        {Countriesinfo.length >0 && Countriesinfo.map(
                            (country)=>{
                                return <tr key={country.name}>
                                    <td>{country.name}</td>
                                    <td>{country.capital}</td>
                                    </tr>
                            }
                        )
    }
                </table>
            </div>
        )
    }
}
export default ArrayOfObjs;