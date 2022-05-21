import React, {
    ChangeEvent,
    CSSProperties,
    RefObject,
    useEffect,
    useRef,
    useState,
} from 'react'
import Layout from '../../components/Layout/Layout'
import { NetworkTag } from '../../components/NetworkTag/NetworkTag'
import {
    AllSocialNetworks,
    AllModules,
    createModuleIcon,
} from '../../botomania/server/botCreationData'
import { Panel } from '../../components/Panel/Panel'
import {
    Button,
    ButtonGroup,
    Classes,
    FormGroup,
    InputGroup,
    ResizeSensor,
    SpinnerSize,
    TextArea,
} from '@blueprintjs/core'
import { capitalizeFirstLetter } from '../../ts-lib/strings'
import dynamic from 'next/dynamic'
import { Loader } from '../../components/Loader/Loader'
import { BotData } from '../../botomania/graph/graphModel'

const BotCreationChart = dynamic(
    () => import('../../components/BotCreationChart/BotCreationChart'),
    {
        ssr: false,
        loading: () => <Loader size={SpinnerSize.STANDARD} />,
    }
)

const initialBotData: BotData = {
    name: 'Enter bot name',
    description: '',
    networks: [],
    module: undefined,
}

type Size = {
    width: number
    height: number
}

const CreateBot = () => {
    const [botData, setBotData] = useState<BotData>(initialBotData)
    const [panelSize, setPanelSize] = useState<Size>({
        width: 450,
        height: 400,
    })
    const panelContentStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }

    const modulesPanel = (
        <div style={panelContentStyle}>
            {AllModules.map((x, i) => (
                <Button
                    icon={createModuleIcon(x)}
                    style={{ margin: '6px', color: 'black' }}
                    intent="warning"
                    key={`module-${i}`}
                    onClick={() =>
                        setBotData({
                            ...botData,
                            module: x,
                        })
                    }
                >
                    {capitalizeFirstLetter(x)}
                </Button>
            ))}
        </div>
    )

    const networksPanel = (
        <div style={panelContentStyle}>
            {AllSocialNetworks.map((x, i) => (
                <NetworkTag
                    socialNetwork={x}
                    key={i}
                    interactive
                    onClick={() =>
                        setBotData({
                            ...botData,
                            networks: [...botData.networks, x],
                        })
                    }
                />
            ))}
        </div>
    )

    const botPanelContent = (
        <div className="bp4-dark">
            <FormGroup
                style={{ width: '100%' }}
                inline
                label="Bot Name: "
                labelInfo="(required)"
                labelFor="bot-name"
            >
                <InputGroup
                    id="bot-name"
                    dir="auto"
                    fill
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setBotData({
                            ...botData,
                            name: e.target.value,
                        })
                    }
                />
            </FormGroup>
            <FormGroup
                inline
                label="Bot Description: "
                labelInfo="(recommended)"
                labelFor="bot-desc"
            >
                <TextArea
                    id="bot-desc"
                    className={Classes.INPUT}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        setBotData({
                            ...botData,
                            description: e.target.value,
                        })
                    }
                />
            </FormGroup>
            <div style={{ display: 'flex' }}>
                <Panel
                    noBackground
                    hOrient="center"
                    vOrient="top"
                    header={<h3>Social Networks</h3>}
                    content={networksPanel}
                />
                <Panel
                    noBackground
                    hOrient="center"
                    vOrient="top"
                    header={<h3>Modules</h3>}
                    content={modulesPanel}
                />
            </div>
        </div>
    )

    const chartRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (chartRef.current) {
            setPanelSize({
                width: chartRef.current.clientWidth - 50,
                height: chartRef.current.clientHeight - 50,
            })
        }
    }, [])

    return (
        <Layout>
            <>
                <h1> Create your bot</h1>
                <form about="Creates your bot" className="grid-form">
                    <div className="first-panel fit-content">
                        <Panel
                            header={<h3>Bot data</h3>}
                            content={botPanelContent}
                        />
                    </div>
                    <div ref={chartRef}>
                        <Panel
                            header={<h3>Bot visualisation</h3>}
                            content={
                                <BotCreationChart
                                    width={panelSize.width}
                                    height={panelSize.height}
                                    botData={botData}
                                />
                            }
                        />
                    </div>
                    <ButtonGroup
                        fill
                        style={{
                            width: 'calc(100% - 16px)',
                            margin: '8px',
                            minHeight: '40px',
                        }}
                    >
                        <Button
                            type="submit"
                            intent="primary"
                            text="Create Me"
                        />
                        <Button
                            type="submit"
                            intent="danger"
                            text="Reset"
                            onClick={() => setBotData(initialBotData)}
                        />
                    </ButtonGroup>
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
                        grid-template-rows: auto auto;
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

export default CreateBot
