import React, { CSSProperties } from 'react'
import Layout from '../../components/Layout/Layout';
import {NetworkTag} from '../../components/NetworkTag/NetworkTag';
import { AllSocialNetworks, AllModules, createModuleIcon } from '../../const/constants';
import {Panel} from '../../components/Panel/Panel';
import { Button, Classes, FormGroup, TextArea } from '@blueprintjs/core';
import { capitalizeFirstLetter } from '../../ts-lib/strings';

const CreateBot = () => {
    const panelContentStyle: CSSProperties = {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between'
    }

    const modulesPanel = <div style={panelContentStyle}>
        {AllModules.map((x, i) =>
            <Button 
                icon={createModuleIcon(x)} 
                style={{margin: '6px', color: 'black'}} 
                intent='warning' 
                key={`module-${i}`}>
                    {capitalizeFirstLetter(x)}
            </Button>
        )}
    </div>

    const networksPanel = <div style={panelContentStyle}>
        {AllSocialNetworks.map((x, i) => 
            <NetworkTag socialNetwork={x} key={i} interactive/>
        )}
    </div>

    const botPanelContent = (
        <div className='bp4-dark'>
            <FormGroup >
                <FormGroup inline label='Bot Name: ' labelInfo='(required)' labelFor='bot-name'>
                        <input id='bot-name' type='text' dir='auto' className={`${Classes.INPUT}`}/>
                </FormGroup>
                <FormGroup inline label='Bot Description: ' labelInfo='(recommended)' labelFor='bot-desc'>
                        <TextArea id='bot-desc' className={Classes.INPUT}/>
                </FormGroup>
            </FormGroup>
            <div style={{display: 'flex'}}>
                <Panel
                    noBackground
                    hOrient='center'
                    vOrient='top'
                    header={<h3>Social Networks</h3>}
                    content={networksPanel}
                />
                <Panel
                    noBackground
                    hOrient='center'
                    vOrient='top'
                    header={<h3>Modules</h3>}
                    content={modulesPanel}
                />
            </div>
        </div>
    )

    return (
        <Layout>
            <>
            <h1> Create your bot</h1>
            <form about='Creates your bot' className='grid-form'>
                <div className='fit-content'>
                    <Panel
                        header={<h3>Bot data</h3>}
                        content={botPanelContent}
                    />
                </div>
                <div className='fit-content'>
                </div>
            </form>
            <style jsx>{`
                    h1 {
                        text-align: center;
                    }

                    .grid-form {
                        display: grid;
                        column-gap: 15px;
                        row-gap: 15px;
                        grid-template-columns: 40% auto;
                        grid-template-rows: auto auto auto;
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

                    .percent40 {
                        width: 40%;
                    }

                    .fit-content {
                        width: fit-content;
                    }
            `}</style>
            </>
        </Layout>
    )
}

export default CreateBot;