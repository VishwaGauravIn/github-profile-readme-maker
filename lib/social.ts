import { Social } from '@builddao/near-social-js';
import { NETWORK_ID } from './near';

export type Profile = {
  name: string;
  description: string;
  image: {
    ipfs_cid: string;
  };
  backgroundImage: {
    ipfs_cid: string;
  };
};

export const SOCIAL_CONTRACT = {
  mainnet: 'social.near',
  testnet: 'v1.social08.testnet'
};

const social = new Social({
  contractId: SOCIAL_CONTRACT[NETWORK_ID],
  network: NETWORK_ID
});

export async function getProfile(username: string): Promise<Profile | null> {
  const response = await social.get({
    keys: [`${username}/profile/**`]
  });
  if (!response) {
    return null;
  }
  const { profile } = (response as Record<string, { profile: Profile }>)[
    username
  ];

  return profile;
}
