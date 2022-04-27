import { Button, Tag } from "@blueprintjs/core";
import { on } from "events";
import React, { CSSProperties, useState } from "react";
import {createIcon, SocialNetwork, SocialNetworkCollors} from '../../const/constants';
import {capitalizeFirstLetter} from '../../ts-lib/strings';

interface IProps { 
    socialNetwork: SocialNetwork;
    onClick?: () => void;
    interactive?: boolean;
}

export const NetworkTag = ({socialNetwork, interactive, onClick}: IProps) => {
    const [hover, setHover] = useState<boolean>(false);
    const opacity = () => {
        if(hover) {
            return 80
        }
        return 100;
    }

    const myStyle:CSSProperties = {
        background: SocialNetworkCollors[socialNetwork],
        opacity: `${opacity()}%`,
        color: "white",
    }

    return (
        interactive
        ? <Button
            style={myStyle}
            icon={createIcon(socialNetwork)}
            text={capitalizeFirstLetter(socialNetwork)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => onClick ? onClick() : null}
            alignText='left'
          />
        : <Tag 
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