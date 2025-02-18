
import React, { Fragment } from "react";
import data from "./Zomatodata";

function RestaurantList(){
    return(
        <>
        {data.map((restaurant,index)=>{
            return(
               <Fragment>
                  <div key={index}>
                    <img src={restaurant.info.image.url} alt={restaurant.info.name} />
                    <h2>Restaurant Name:{restaurant.info.name}</h2>
                    <p>Rating:{restaurant.info.rating.rating_text}</p>
                  </div>
               </Fragment> 
            )
        })}
        </>
    )
}

export default RestaurantList;