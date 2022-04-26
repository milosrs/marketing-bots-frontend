import { Tag } from "@blueprintjs/core";
import { on } from "events";
import React, { CSSProperties, useState } from "react";
import {createIcon, SocialNetwork, SocialNetworkCollors} from '../../const/constants';
import {capitalizeFirstLetter} from '../../ts-lib/strings';

interface IProps { 
    socialNetwork: SocialNetwork;
    onClick?: () => void;
}

export const NetworkTag = ({socialNetwork, onClick}: IProps) => {
    const [hover, setHover] = useState<boolean>(false)
    const myStyle:CSSProperties = {
        background: SocialNetworkCollors[socialNetwork],
        opacity: hover && onClick ? '80%' : '100%',
    }

    return (
        <Tag 
            large
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={myStyle}
            icon={createIcon(socialNetwork)} 
            round
            interactive={onClick ? true: false}
        >
            {capitalizeFirstLetter(socialNetwork)}
        </Tag>
    )
}