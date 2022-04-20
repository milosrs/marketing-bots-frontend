import { useRouter } from 'next/router'
import { signIn, signOut } from 'next-auth/react'

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => signIn('keycloak')}>Log in</button>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  )
}

export default Home;