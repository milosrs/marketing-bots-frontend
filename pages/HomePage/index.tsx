import Head from 'next/head'
import Layout from '../../components/Layout/Layout';
import {BotDetails} from '../../components/BotDetails/BotDetails';

const HomePage = () => 
<Layout>
  <div className="container">
    <Head>
      <title>Botomania Homepage</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <h1>Your active bots</h1>
    </div>

    <div className='panel'>
      <BotDetails 
        name='Kurosawa'
        description='My first bot' 
        socialNetworks={['facebook', 'instagram', 'linkedin', 'telegram', 'tiktok', 'youtube']} 
        isActive={true}
      />
    </div>
    <style jsx>{`
      h1 {
        text-align: center;
      }
    `}</style>
  </div>
</Layout>

export default HomePage;