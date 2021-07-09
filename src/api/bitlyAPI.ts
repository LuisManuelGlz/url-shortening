import { bitly as bitlyConfig } from '../config';

export const shortenLink = async (url: string) => {
  return await fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bitlyConfig.accessToken}`,
    },
    body: JSON.stringify({
      group_guid: bitlyConfig.groupGuid,
      domain: bitlyConfig.domain,
      long_url: url,
    }),
  });
};
