import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import type { SessionContextValue } from 'next-auth/react'
import UnauthorizedAccess from '../components/UnauthorizedAccess/UnauthorizedAccess'
import { Loader } from '../components/Loader/Loader'
import Head from 'next/head'
import { SpinnerSize } from '@blueprintjs/core'

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
      console.log("Authenticated!", data)
      router.push("/HomePage")
      ret = <></>;
      break;
    }
    case 'unauthenticated': 
      console.log("Unauthenticated!", data)
      ret = <UnauthorizedAccess/>;
      break;
    case 'loading': 
      console.log("Loading!", data)
      ret = <Loader size={SpinnerSize.LARGE}/>;
      break;
    default:
      ret = <div>Eror</div>;
      break;
  }

  return <><div className='container'>
    {head}
    {ret}
  </div>
  <style jsx>{`
    .container{
      width: 100%;
      height: 100%;
    }
  `}</style>
  </>
}

export default Home;