import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import type { SessionContextValue } from 'next-auth/react'
import Loader from '../components/Loader/Loader'
import UnauthorizedAccess from '../components/UnauthorizedAccess/UnauthorizedAccess'

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
      return <Loader/>;
    default:
      return <div>Eror</div>
  }
}

export default Home;