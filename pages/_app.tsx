import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import './global.scss'

// Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faFacebookF,
    faTwitter,
    faReddit,
    faInstagram,
    faTiktok,
    faYoutube,
    faLinkedinIn,
    faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import {
    faCheckSquare,
    faCoffee,
    faCircle,
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(
    faFacebookF,
    faTwitter,
    faReddit,
    faInstagram,
    faTiktok,
    faYoutube,
    faLinkedinIn,
    faTelegram,
    faCheckSquare,
    faCoffee,
    faCircle
)

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}
