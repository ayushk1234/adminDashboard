

import DashboardIcon from '@mui/icons-material/Dashboard';
import "./sidebar.scss"

const SideBar = ()=>{

    return(
        <div className="sidebar">
            {/* <h1 className="title">hi</h1> */}
            <div className="top">
            <span className="logo">lamaadmin</span></div>

            {/* <hr> */}
            <div className="center"></div>

            <ul>
                <li>
                    <DashboardIcon/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
            </ul>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>

            </div>
            {/* <div className=""></div> */}
        </div>
    )


}

export default SideBar