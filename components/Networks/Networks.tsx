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
        <div className="network-container" key={`social-network-tag-${i}`}>
            <span className='icon'>{createIcon(x, i)}</span>
            {detailed 
                ? <span className='full-name'>
                    {capitalizeFirstLetter(x)}
                </span> 
                : null 
            }
        </div>
    )}
</div>
<style jsx>{`
.networks {
    display: flex;
    width: 100%;
    justify-content: left;
    align-items: space-between;
}

.network-container {
    margin-right: 6px;
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