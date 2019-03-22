import {MdDoNotDisturbOn} from "react-icons/md";
import React from 'react';
import {Marker} from 'react-map-gl';
import { IconContext } from "react-icons";

export const CustomMarker = ({data}) => (
    <Marker latitude={data.point.y} longitude={data.point.x} offsetLeft={-20} offsetTop={-10} >
        <IconContext.Provider value={{ color: "red" , size: "2em"}}>
            <MdDoNotDisturbOn onClick={()=> console.log("CLICKCLIK")}/>
        </IconContext.Provider>
    </Marker>
);
