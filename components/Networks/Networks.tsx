import React from "react";
import { createIcon, SocialNetworks } from '../../const/constants';

interface IProps {
    networks: SocialNetworks[];
}

export const Networks = ({networks}: IProps) => 
<>
<div className='networks'>
    {networks.map((x, i) => createIcon(x, i))}
</div>
<style jsx>{`
.networks {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: space-between;
}
`}
</style>
</>