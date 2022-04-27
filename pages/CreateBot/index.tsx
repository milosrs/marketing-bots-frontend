import React, { CSSProperties } from 'react'
import Layout from '../../components/Layout/Layout';
import {NetworkTag} from '../../components/NetworkTag/NetworkTag';
import { AllSocialNetworks, AllModules, createModuleIcon } from '../../const/constants';
import {Panel} from '../../components/Panel/Panel';
import { Button } from '@blueprintjs/core';

const CreateBot = () => {
    const panelContentStyle: CSSProperties = {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between'
    }

    const modulesPanel = <div style={panelContentStyle}>
        {AllModules.map((x, i) =>
            <Button icon={createModuleIcon(x)} style={{margin: '6px', color: 'black'}} intent='warning' key={`module-${i}`}>{x}</Button>
        )}
    </div>

    const networksPanel = <div style={panelContentStyle}>
        {AllSocialNetworks.map((x, i) => 
            <NetworkTag socialNetwork={x} key={i} interactive/>
        )}
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

            .modules-panel {
                display: flex;
                flex-direction: row;
            }

            .content > * {
                margin: 4px;
            }

            .separated > button {
                margin: 6px;
            }
            -
        `}</style>
        </>
    </Layout>
}

export default CreateBot;