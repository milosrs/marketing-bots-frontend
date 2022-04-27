import { Button, Tag } from "@blueprintjs/core";
import React, { useState } from "react";
import {createIcon, SocialNetwork, SocialNetworkCollors} from '../../const/constants';
import {capitalizeFirstLetter} from '../../ts-lib/strings';

interface IProps { 
    socialNetwork: SocialNetwork;
    onClick?: () => void;
    interactive?: boolean;
}

export const NetworkTag = ({socialNetwork, interactive, onClick}: IProps) => {
    const [hover, setHover] = useState<boolean>(false);
    const [click, setClick] = useState<boolean>(false);
    const opacity = () => {
        if(hover) {
            return 85;
        } else if(click) {
            return 50;
        }
        return 100;
    }

    const commonStyle = {
        background: SocialNetworkCollors[socialNetwork],
        color: "white",
        margin: '6px',
        [interactive ? 'opacity' : ''] : `${opacity()}%`
    }

    return (
        interactive
        ? <Button
            className="clickable"
            style={commonStyle}
            icon={createIcon(socialNetwork)}
            text={capitalizeFirstLetter(socialNetwork)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => {
                setHover(false) 
                setClick(false)
            }}
            onClick={() => onClick ? onClick() : null}
            onMouseDown={() => {
                setHover(false) 
                setClick(true)
            }}
            onMouseUp={() => {
                setHover(true) 
                setClick(false)
            }}
            alignText='left'

          />
        : <Tag
            className="clickable"
            large
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={commonStyle}
            icon={createIcon(socialNetwork)} 
            round
            interactive={onClick ? true: false}
        >
            {capitalizeFirstLetter(socialNetwork)}
        </Tag>
    )
}