import React,{useState, useEffect} from "react"
import quotes from "./QuoteData"
import colors from "./Colors"
function App(){
    const [colorGen, setColorGen] = useState([])
    const [data, setData] = useState({})
    const [index, setIndex] = useState(0)

    useEffect(()=>setData(quotes[index % quotes.length]),[index])

    useEffect(()=>setColorGen(colors[index % colors.length]),[index])
    
    useEffect(()=>{
        document.body.animate({backgroundColor: colorGen,colorGen},1100)
        setTimeout(() => {document.body.style.backgroundColor= colorGen}, 1000)
    })
      
    return(
        <div className="Main">
            <h1 style={{color:colorGen}}>''{data.quote}'' </h1>
            <h2 style={{color:colorGen}} className="author">-{data.author}</h2>
            <button className="button"style={{backgroundColor: colorGen}} onClick={()=>setIndex((a)=>a+1)}>Next quote {index % quotes.length+1}/{quotes.length}</button>
        </div>
    )
}
export default App