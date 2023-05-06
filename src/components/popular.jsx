
import React from "react"
import { useEffect } from "react"
function Popular() {

useEffect(()=>{
    

    let getpopular=async()=>{
        let api=await fetch(`https://api.spoonacular.com/recipes/random?apikey=${process.env.REACT_APP_API_KEY}&number=9`)
        let data=await api.json()
        console.log(data);
    }
    getpopular();},[])
  return (
    <div>
      popular
    </div>
  )
}

export default Popular
