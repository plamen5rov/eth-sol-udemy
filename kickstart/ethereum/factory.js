import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xfb5DBe9D728E9c2eDF86F3c5e5e573B024ac8e69'
);

export default instance;
