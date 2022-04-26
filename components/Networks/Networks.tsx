import React from "react";
import { createIcon, SocialNetwork } from '../../const/constants';
import {capitalizeFirstLetter} from '../../ts-lib/strings';

interface IProps {
    networks: SocialNetwork[];
    detailed?: boolean;
}

export const Networks = ({networks, detailed}: IProps) => 
<>
<div className='networks'>
    {networks.map((x, i) => 
        !detailed ? createIcon(x, i) : 
        <div key={`social-network-tag-${i}`}>
            <span className='icon'>{createIcon(x, i)}</span>
            <span className='full-name'>{capitalizeFirstLetter(x)}</span>
        </div>
    )}
</div>
<style jsx>{`
.networks {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: space-between;
}

.icon {
    margin-right: 6px;
}

.full-name {
    margin-left: 6px;
}
`}
</style>
</>