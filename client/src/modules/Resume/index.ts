
import axios from "axios";

import config from '../../configs/config';

export const FetchResumes = async (userID: string, fire_token: string) => {
  try {
      let response = await axios({
          method: 'GET',
          url: `${config.server.url}/resume/readAll/${userID}`,
          headers: { Authorization: `Bearer ${fire_token}` }
      });

      if (response.status === 200 || response.status === 201 || response.status === 304) {
        return response.data;
      } else {
          return new Error('Unable to authenticate');
      }
    } catch (error) {
        return new Error('Unable to authenticate');
    }
}