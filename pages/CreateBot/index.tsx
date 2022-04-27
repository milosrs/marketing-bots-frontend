import React, { CSSProperties } from 'react'
import Layout from '../../components/Layout/Layout';
import {NetworkTag} from '../../components/NetworkTag/NetworkTag';
import { AllSocialNetworks, AllModules } from '../../const/constants';
import {Panel} from '../../components/Panel/Panel';

const CreateBot = () => {
    const socialMediaStyle: CSSProperties = {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '350px'
    }

    const modulesPanel = <div className='modules-panel'>
        {AllModules.map((x, i) => <p key={`p-${i}`}>{x}</p>)}
    </div>

    const networksPanel = <div style={socialMediaStyle}>
        {AllSocialNetworks.map((x, i) => <NetworkTag socialNetwork={x} key={i}/>)}
    </div>

    return <Layout>
        <>
        <h1> Create your bot</h1>
        <div className='panel left top'>
            <Panel 
                header={<h3>Social Networks</h3>}
                content={networksPanel}
            />
            <Panel
                header={<h3>Modules</h3>}
                content={modulesPanel}
            />
        </div>
        <style jsx>{`
            h1 {
                text-align: center;
            }

            .content > * {
                margin: 4px;
            }
            -
        `}</style>
        </>
    </Layout>
}

export default CreateBot;