import Home from "../view/Home/Home";

import Products from "../view/Products/Products";
import {Routes, Route} from "react-router-dom"
function AppRouter(){

    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>
        </>
    )
}
export default AppRouter