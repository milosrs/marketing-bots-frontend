import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SocialNetworks } from "../../const/constants";

interface IProps {
    name: string;
    description: string;
    socialNetworks: SocialNetworks[];
    isActive: boolean;
}

const createIcon = (network: SocialNetworks, key: number) => {
    switch(network) {
        case 'facebook': return <FontAwesomeIcon icon={['fab', 'facebook-f']} key={key}/>
        case 'instagram': return <FontAwesomeIcon icon={['fab', 'instagram']} key={key}/>
        case 'linkedin': return <FontAwesomeIcon icon={['fab', 'linkedin']} key={key}/>
        case 'telegram': return <FontAwesomeIcon icon={['fab', 'telegram']} key={key}/>
        case 'tiktok': return <FontAwesomeIcon icon={['fab', 'tiktok']} key={key}/>
        case 'youtube': return <FontAwesomeIcon icon={['fab', 'youtube']} key={key}/>
    }
}

export const BotDetails = ({name, description, socialNetworks, isActive}: IProps) => 
    <span className="container">
        <div className="name">{name}</div>
        <div className="description">{description}</div>
        <div className="networks">{socialNetworks.map((sn, i) => createIcon(sn, i))}</div>
        <div className="active">
            <FontAwesomeIcon icon={'circle'} color={isActive ? 'green' : 'red'}/>
        </div>
    </span>