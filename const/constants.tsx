import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type SocialNetworks = 'facebook' | 'instagram' | 'tiktok' | 'linkedin' | 'youtube' | 'telegram';
export const AllSocialNetworks = ['facebook', 'instagram', 'linkedin', 'telegram', 'tiktok', 'youtube'] as SocialNetworks[];

export const createIcon = (network: SocialNetworks, k: number): JSX.Element => {
    switch(network) {
        case 'facebook': return <FontAwesomeIcon icon={['fab', 'facebook-f']} key={k}/>
        case 'instagram': return <FontAwesomeIcon icon={['fab', 'instagram']} key={k}/>
        case 'linkedin': return <FontAwesomeIcon icon={['fab', 'linkedin-in']} key={k}/>
        case 'telegram': return <FontAwesomeIcon icon={['fab', 'telegram']} key={k}/>
        case 'tiktok': return <FontAwesomeIcon icon={['fab', 'tiktok']} key={k}/>
        case 'youtube': return <FontAwesomeIcon icon={['fab', 'youtube']} key={k}/>
    }
}