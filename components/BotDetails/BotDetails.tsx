import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { createIcon, SocialNetworks } from "../../const/constants";
import { Networks } from "../Networks/Networks";

interface IProps {
    name: string;
    description: string;
    socialNetworks: SocialNetworks[];
    isActive: boolean;
}

export const BotDetails = ({name, description, socialNetworks, isActive}: IProps) => 
    <span className="container">
        <div className="name">{name}</div>
        <div className="description">{description}</div>
        <Networks networks={socialNetworks}/>
        <div className="active">
            <FontAwesomeIcon icon={'circle'} color={isActive ? 'green' : 'red'}/>
        </div>
    </span>