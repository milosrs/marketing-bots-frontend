import { Button, ButtonGroup } from '@blueprintjs/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { SocialNetwork } from '../../botomania/server/botCreationData'
import { Networks } from '../Networks/Networks'

export interface Bot {
    name: string
    description: string
    SocialNetwork: SocialNetwork[]
    isActive: boolean
}

interface IProps {
    bots: Bot[]
}

export const BotDetails = ({ bots }: IProps) => (
    <>
        <table className="bp4-html-table details-table">
            <thead>
                <tr>
                    <th>Bot Name</th>
                    <th>Description</th>
                    <th>Supported Social Networks</th>
                    <th>Status</th>
                    <th>Controls</th>
                </tr>
            </thead>
            <tbody>
                {bots.map((x, i) => (
                    <tr key={`bot-desc-${i}`}>
                        <td>{x.name}</td>
                        <td>{x.description}</td>
                        <td className="sn">
                            <Networks networks={x.SocialNetwork} />
                        </td>
                        <td align="center" valign="middle">
                            <div className="indicator">
                                <FontAwesomeIcon
                                    icon={'circle'}
                                    color={x.isActive ? 'green' : 'red'}
                                />
                            </div>
                        </td>
                        <td>
                            <ButtonGroup alignText="center">
                                {x.isActive ? (
                                    <Button intent="danger" text="Stop" />
                                ) : (
                                    <Button intent="success" text="Start" />
                                )}
                                <Button intent="primary" text="View Logs" />
                            </ButtonGroup>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <style jsx>{`
            table {
                max-width: fit-content;
            }

            th,
            tr:not(:last-child) > td {
                border-bottom: 1px solid;
                border-color: white;
            }

            th:not(:last-child),
            td:not(:last-child) {
                border-right: 1px solid;
                border-color: white;
            }

            .indicator {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 100%;
            }

            .details-table {
                width: 100%;
                height: 100%;
            }

            .details-table > tbody > tr > td {
                color: white;
                border-color: white;
                vertical-align: middle;
            }

            .details-table > thead > tr > th {
                text-align: center;
                color: white;
            }
        `}</style>
    </>
)
