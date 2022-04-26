import React from 'react'
import {NetworkTag} from '../../components/NetworkTag/NetworkTag';
import { AllSocialNetworks } from '../../const/constants';

const CreateBot = () => {
    return <div>
        {AllSocialNetworks.map((x, i) => <NetworkTag socialNetwork={x} key={i}/>)}
    </div>
}

export default CreateBot;