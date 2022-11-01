import "../Home/Home.css"
import Card from "../../components/Card/Card"
import Carusel from "../../components/Carusel/Carusel"
function Home(){

    return(
        <div className="home-wrapper">
        <Card/>
        <Carusel/>
        </div>
    )
}
export default Home