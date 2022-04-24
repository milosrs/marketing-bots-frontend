import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import type { SessionContextValue } from 'next-auth/react'
import UnauthorizedAccess from '../components/UnauthorizedAccess/UnauthorizedAccess'
import { Loader } from '../components/Loader/Loader'
import Head from 'next/head'

const Home = () => {
  const data: SessionContextValue = useSession()
  const router = useRouter();
  let ret = <></>
  const head = 
  <Head>
    <title>Welcome to botomania</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  
  switch(data.status) {
    case 'authenticated': {
      router.push("/HomePage")
      ret = <></>;
      break;
    }
    case 'unauthenticated': 
      ret = <UnauthorizedAccess/>;
      break;
    case 'loading': 
      ret = <Loader/>;
      break;
    default:
      ret = <div>Eror</div>;
      break;
  }

  return <div className='container'>
    {head}
    {ret}
  </div>
}

export default Home;