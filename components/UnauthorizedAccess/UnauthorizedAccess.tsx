import React from 'react'
import {signIn, signOut} from 'next-auth/react'
import { Button, ButtonGroup } from '@blueprintjs/core';

const UnauthorizedAccess = () => 
<div className='container bp4-dark'>
    <div className='unauthorized-access'>
        <h1 className='bp4-heading'>Welcome to Botomania</h1>

        <div className='bp4-running-text'>
            In order to continue using this service you have to log in. 
            If you don't have an account, contact the administrator.
        </div>
        <div className='bp4-text-small'>Administrator e-mail: milosribar@yahoo.com</div>

        <ButtonGroup className='bp4-fill bp4-large btn-group' style={{padding: '16px'}}>
            <Button 
                type='button' 
                className='bp4-button bp4-large bp4-fill'
                text={`Log In`} 
                onClick={() => signIn('keycloak')}
            />
           <Button 
                type='button' 
                className='bp4-button bp4-large bp4-fill'
                text={`Log Out`} 
                onClick={() => signOut({
                    redirect: true,
                    callbackUrl: "/",
                })}
            />
        </ButtonGroup>
    </div>
    <style jsx>
        {`
            .container{
                width: 100%;
                height: 100%;
                background-color: black;
                color: white;
                display: flex;
                justify-content: center;
                justify-items: center;
                align-items: center;
            }

            h1 {
                padding: 16px;
                text-align: center;
                color: white !important;
            }
        `}
    </style>
</div>

export default UnauthorizedAccess;