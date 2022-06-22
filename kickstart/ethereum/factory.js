import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x965cb5716E940782Cc38708fc5fA26334cB747E8'
);

export default instance;
