import React from 'react'
import { signIn } from 'next-auth/react'
import { Button, ButtonGroup } from '@blueprintjs/core'
import { Networks } from '../Networks/Networks'
import { AllSocialNetworks } from '../../botomania/server/botCreationData'
import { get } from '../../api/base'

const UnauthorizedAccess = () => (
    <div className="container bp4-dark">
        <div className="unauthorized-access">
            <h1 className="bp4-heading">Welcome to Botomania</h1>

            <div className="social-container">
                <Networks networks={AllSocialNetworks} />
            </div>

            <div className="bp4-running-text">
                In order to continue using this service you have to log in. If
                you don&apos;t have an account, contact the administrator.
            </div>

            <div className="bp4-text-small">
                Administrator e-mail: milosribar@yahoo.com
            </div>

            <ButtonGroup
                className="bp4-fill bp4-large btn-group"
                style={{ padding: '16px' }}
            >
                <Button
                    type="button"
                    className="bp4-button bp4-large bp4-fill"
                    text={`Log In`}
                    onClick={() => signIn('keycloak')}
                    active={false}
                />
                <Button
                    type="button"
                    className="bp4-button bp4-large bp4-fill"
                    text={`Get Server Info`}
                    onClick={() => get({url: '/service/info'})}
                    active={false}
                />
            </ButtonGroup>
        </div>
        <style jsx>
            {`
                .container {
                    width: 100%;
                    height: 100%;
                    background-color: black;
                    color: white;
                    display: flex;
                    justify-content: center;
                    justify-items: center;
                    align-items: center;
                }

                .unauthorized-access {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .social-container {
                    font-size: 24px;
                    margin: 4px 0px 24px 0px;
                }

                h1 {
                    padding: 16px;
                    text-align: center;
                    color: white !important;
                }
            `}
        </style>
    </div>
)

export default UnauthorizedAccess
