import { Button, Menu, MenuItem, Navbar } from '@blueprintjs/core';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import React from 'react'
import { Session } from 'next-auth';

interface IProps {
    children: React.ReactElement;
}

const Layout = ({children}: IProps) => {
    const router = useRouter();
    const {data} = useSession();

    const testRoute = (url: string) => router.pathname.includes(url)

    return (
        <div>
            <Navbar fixedToTop={true} className='bp4-dark'>
                <Navbar.Group align='left'>
                    <Navbar.Heading>Botomania</Navbar.Heading>
                    <Navbar.Divider/>
                    <Button 
                        type='button' className='bp4-button .bp4-large' icon='home' text='Home'
                        onClick={() => router.push("/HomePage")}
                        disabled={testRoute("HomePage")}
                    />
                    <Button
                        type='button' className='bp4-button .bp4-large' icon='map-create' text='Create Bot'
                        onClick={() => router.push("/CreateBot")}
                        disabled={testRoute('CreateBot')}
                    />
                    <Button
                        type='button' className='bp4-button .bp4-large' icon='predictive-analysis' text='Bot Actions'
                        onClick={() => router.push("/BotActions")}
                        disabled={testRoute('BotActions')}
                    />
                    <Button
                        type='button' className='bp4-button .bp4-large' icon='take-action' text='User Actions'
                        onClick={() => router.push("/UserActions")}
                        disabled={testRoute('UserActions')}
                    />
                </Navbar.Group>

                <Navbar.Group align='right'>
                    <span className='greet'> Hello, {data?.user?.name}</span>
                    <Button
                        icon='power' type='button' className='bp4-button .bp4-large .bp4-fill' text='Logout'
                        onClick={() => signOut({redirect: true, callbackUrl: "/"})}
                    />
                </Navbar.Group>
            </Navbar>
            {children}
            <style jsx>{`
                .greet {
                    margin-right: 15px;
                }
            `}</style>
        </div>
    )
}

export default Layout;
