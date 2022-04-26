import Head from 'next/head'
import Layout from '../../components/Layout/Layout';
import {Bot, BotDetails} from '../../components/BotDetails/BotDetails';

const mockDetails = [
{
  name: 'Kurosawa',
  description: 'My first bot',
  socialNetworks: ['facebook', 'instagram', 'linkedin', 'telegram', 'tiktok', 'youtube'],
  isActive: true,
},
{
  name: 'Kurosawa2',
  description: 'My second bot',
  socialNetworks: ['telegram'],
  isActive: false,
},
{
  name: 'Kurosawa3',
  description: 'My third bot',
  socialNetworks: ['facebook', 'instagram', 'linkedin', 'youtube'],
  isActive: false,
},
] as Bot[];

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
      <BotDetails bots={mockDetails}/>
    </div>
    <style jsx>{`
      h1 {
        text-align: center;
      }
    `}</style>
  </div>
</Layout>

export default HomePage;