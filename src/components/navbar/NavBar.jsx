


import "./navbar.scss"

const NavBar = ()=>{

    return(
        <div className="navbar">
        <div className="wrapper">
        <div className="search">
        <input type="text" placeholder="Search..."/>
        </div>
        <div className="items">
        <div className="item">
        English
        </div>
        <div className="item">
        Contact
        </div>
        <div className="item">
        item
        <div className="counter">1</div>
        </div>
        <div className="item">
        chat
        <div className="counter">1</div>

        </div>
        
        </div>
        </div>
            {/* <h1 className="title">hi</h1> */}
        </div>
    )


}

export default NavBar