import React from "react";
import { Link } from "react-router-dom";
import { IRoutesMap } from "../../interfaces/IRoutesMap";

interface MyRoutesMapProps {
    routesMap: IRoutesMap[]
}

function MyRoutesMap({routesMap}: MyRoutesMapProps) {
    return (
        <div className="routes">
            {routesMap.map(route => (
                <Link 
                    className={routesMap[routesMap.length - 1] === route ? "routes__item routes__item_active" : "routes__item"} 
                    key={route.path} 
                    to={routesMap[routesMap.length - 1] === route ? '' : route.path}>{route.name}
                </Link>
            ))}
        </div>
    )
}

export default MyRoutesMap