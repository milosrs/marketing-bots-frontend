import { Button, Navbar, SpinnerSize } from '@blueprintjs/core'
import { useRouter } from 'next/router'
import { SessionContextValue, signOut, useSession } from 'next-auth/react'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Paths } from '../../botomania/paths'
import { IconName } from '@blueprintjs/core'
import { Loader } from '../Loader/Loader'
import UnauthorizedAccess from '../UnauthorizedAccess/UnauthorizedAccess'

interface IProps {
    children: React.ReactElement
}

const Layout = ({ children }: IProps) => {
    const router = useRouter()
    const sessionData: SessionContextValue = useSession()
    const [loading, setLoading] = useState<boolean>()
    const [unauthorized, setUnauthorized] = useState<boolean>()

    useEffect(() => {
        if (!sessionData || sessionData.status === 'loading') {
            setLoading(true)
        } else if (sessionData.status === 'unauthenticated') {
            setLoading(false)
            setUnauthorized(true)
        } else {
            setLoading(false)
            setUnauthorized(false)
        }
    }, [sessionData])

    const testRoute = (url: string) => router.pathname.includes(url)

    const navButton = (url: string, icon: IconName, text: string) => (
        <Button
            type="button"
            className="bp4-button .bp4-large"
            icon={icon}
            text={text}
            onClick={() => router.push(url)}
            disabled={testRoute(url)}
        />
    )

    if (loading) {
        return <Loader size={SpinnerSize.LARGE} />
    } else if (unauthorized) {
        return <UnauthorizedAccess />
    }

    return (
        <div className="padded">
            <Navbar fixedToTop={true} className="bp4-dark">
                <Navbar.Group align="left">
                    <Navbar.Heading>Botomania</Navbar.Heading>
                    <Navbar.Divider />
                    {navButton(Paths.HOME, 'home', 'Home')}
                    {navButton(Paths.CREATE_BOT, 'map', 'Create Bot')}
                    {navButton(
                        Paths.BOT_ACTIONS,
                        'predictive-analysis',
                        'Bot Actions'
                    )}
                    {navButton(
                        Paths.USER_ACTIONS,
                        'take-action',
                        'User Actions'
                    )}
                </Navbar.Group>

                <Navbar.Group align="right">
                    <span className="greet">
                        {' '}
                        Hello, {sessionData?.data?.user?.name}
                    </span>
                    <Button
                        icon="power"
                        type="button"
                        className="bp4-button .bp4-large .bp4-fill"
                        text="Logout"
                        onClick={() =>
                            signOut({ redirect: true, callbackUrl: '/' })
                        }
                    />
                </Navbar.Group>
            </Navbar>
            {children}
            <style jsx>{`
                .greet {
                    margin-right: 15px;
                }

                .padded {
                    padding-top: 60px;
                }
            `}</style>
        </div>
    )
}

export default Layout
