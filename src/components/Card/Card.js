import "../Card/Card.css"
import { useState, useEffect } from "react"
import { json } from "react-router-dom"

function Card (){
const [baza, setBaza] = useState([])
useEffect( ()=>{
    function Demo(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setBaza(json))
        .catch((err) => console.log(err))
    }
    Demo()
},[])
    return(
            <div>
                <h1 className="d-flex justify-content-center p-3">Products</h1>
                <div className="row">
                {
                baza.map((item,index) => {
                    return(
                        <div className="col-md-4" key={index}>
                            <div className="card">
                                <img src="./logo192.png" alt="logo" />
                                <h3>Title: {item.title.slice(0,20)}</h3>
                                <p>Description: {item.body.slice(0,40)}</p>
                                <button className="btn btn-success mb-3">Buy Now</button>
                            </div>
                        </div>
                    )
                })
                }
                </div>
            </div>
    )
}
export default Card