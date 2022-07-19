import React from "react";
import TopBar from './TopBar'
import Footer from './Footer'
import Rowtop from './ContentRowTop'



function ContentWrapper () {

    return (
        <div id="content-wrapper" className="d-flex flex-column">

			<div id="content">
                <Rowtop />

             
			</div>


		</div>
    )

}

export default ContentWrapper;