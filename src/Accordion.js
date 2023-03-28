import { Component } from "react";

class Accordion extends Component{
state={countries:[], activeIndex:null}

componentDidMount(){
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
    .then(res=>res.json())
    .then(data=>this.setState({countries:data.data}))
    .catch(error => console.log(error))
}

render(){
    const {countries, activeIndex} = this.state

return(
    <div>
        {countries.map((country, index)=>(
            <div key={index} >
                <button className="button" onClick={()=>this.setState((prevState)=>({activeIndex:prevState.activeIndex === index ? null : index}))}> 
                {country.name} +</button>
                {index === activeIndex && (
                    <div className="content">
                        <p className="button">  {country.capital}</p>
                        
                    </div>
                ) }
            </div>

        ))}
    </div>
)
}
}

export default Accordion