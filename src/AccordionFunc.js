import {useState, useEffect} from "react"

const AccordionFunc = ()=>{
    const[countries, setCountries]=useState([])
    const[activeIndex, setActiveIndex]=useState("")
    const[showMore, setShowMore]=useState(false)

    useEffect(()=>{
        fetch("https://countriesnow.space/api/v0.1/countries/capital")
        .then(res=>res.json())
        .then(data=>setCountries(data.data))
        .catch(error=>console.log(error))
    },[])
    return(
        <div>
            {countries.slice(0, showMore ? countries.length : 20).map((country, index)=>(
                <div key={index}>
                    <button className="button"onClick={()=>setActiveIndex((prevState =>prevState === index ? null:index))}>{country.name}+</button>
                    {index === activeIndex && (
                        <div>
                        <p className="button"> Capital is: {country.capital}</p>
                        </div>
                    )}
                </div>
            ))}
            <div>
            <button className="button" onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}</button>
            </div>
        </div>
    ) 
}

export default AccordionFunc