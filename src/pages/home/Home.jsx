
import "./home.scss"
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'

const Home = ()=>{

    return(
        <div className="home">
        <SideBar/>
        <div className="homeContainer">
        <NavBar/> 
        home containers
        </div>
            {/* <h1 className="title">hi</h1> */}
        </div>
    )


}

export default Home