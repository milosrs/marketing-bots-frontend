import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type SocialNetwork = 'facebook' | 'reddit' | 'instagram' | 'tiktok' | 'twitter' | 'linkedin' | 'youtube' | 'telegram';
export const AllSocialNetworks = ['facebook', 'instagram', 'reddit', 'linkedin', 'telegram', 'twitter', 'tiktok', 'youtube'] as SocialNetwork[];

export const SocialNetworkCollors: Record<SocialNetwork, string> = {
    'facebook': '#3B5998',
    'instagram': 'linear-gradient(90deg, #833AB4 20%, #E1306C 30%, #F56040 50%, #FFDC80 100%)',
    'tiktok': 'linear-gradient(90deg, #010101 15%, #69c9d0 35%, #ee1d52 100%)',
    'telegram': '#0088cc',
    'linkedin': '#6495ED',
    'twitter': '#55ACEE',
    'reddit': '#ff4500',
    'youtube': '#ff0000',
}

export const createIcon = (network: SocialNetwork, k?: number): JSX.Element => {
    switch(network) {
        case 'facebook': return <FontAwesomeIcon icon={['fab', 'facebook-f']} key={k}/>
        case 'instagram': return <FontAwesomeIcon icon={['fab', 'instagram']} key={k}/>
        case 'linkedin': return <FontAwesomeIcon icon={['fab', 'linkedin-in']} key={k}/>
        case 'telegram': return <FontAwesomeIcon icon={['fab', 'telegram']} key={k}/>
        case 'tiktok': return <FontAwesomeIcon icon={['fab', 'tiktok']} key={k}/>
        case 'youtube': return <FontAwesomeIcon icon={['fab', 'youtube']} key={k}/>
        case 'twitter': return <FontAwesomeIcon icon={['fab', 'twitter']} key={k}/>
        case 'reddit': return <FontAwesomeIcon icon={['fab', 'reddit']} key={k}/>
    }
}
