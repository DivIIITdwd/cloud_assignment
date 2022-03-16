import React from 'react'
import HomeInfoCard from './HomeInfoCard'
import {Link} from 'react-router-dom';

function HomeInfoCardContainer() {
    //console.log("homeinfocardcontner rendered");
    return (
        <div className="infoCardContainer d-flex flex-wrap justify-content-center align-items-center bd-grey">
            <Link to="/menu"><HomeInfoCard infoImg="https://cdn.pixabay.com/photo/2018/03/07/18/42/menu-3206749_960_720.jpg" infoTitle="Order your favourite food" infoLink="Check the Menu"/></Link>
            
            
        </div>
    )
}

export default React.memo(HomeInfoCardContainer)
