import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import type { SessionContextValue } from 'next-auth/react'
import UnauthorizedAccess from '../components/UnauthorizedAccess/UnauthorizedAccess'
import { Spinner } from '@blueprintjs/core'

const Home = () => {
  const data: SessionContextValue = useSession()
  const router = useRouter();

  switch(data.status) {
    case 'authenticated': {
      router.push("/HomePage")
      return <></>;
    }
    case 'unauthenticated': 
      return <UnauthorizedAccess/>;
    case 'loading': 
      return <Spinner/>;
    default:
      return <div>Eror</div>
  }
}

export default Home;