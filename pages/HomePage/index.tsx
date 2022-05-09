import Head from 'next/head'
import Layout from '../../components/Layout/Layout';
import {Bot, BotDetails} from '../../components/BotDetails/BotDetails';
import { AllSocialNetworks } from '../../botomania/server/botCreationData';

const mockDetails = [
{
  name: 'Try me :)',
  description: 'My first bot',
  SocialNetwork: AllSocialNetworks,
  isActive: true,
},
{
  name: 'Satoshi Nakamoto',
  description: 'My second bot',
  SocialNetwork: ['telegram'],
  isActive: false,
},
{
  name: 'Call of the legion',
  description: 'My third bot',
  SocialNetwork: ['facebook', 'instagram', 'linkedin', 'youtube'],
  isActive: false,
},
{
  name: 'For the Horde',
  description: 'My 4th bot',
  SocialNetwork: ['reddit', 'twitter', 'telegram'],
  isActive: true,
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