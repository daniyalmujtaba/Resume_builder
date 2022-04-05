import axios from 'axios';
import firebase from 'firebase/compat/app';
import config from '../../configs/config';
import IUser from '../../interfaces/user';

const NAMESPACE = 'Auth';


export const Authenticate = async (uid: string, name: string, fire_token: string) => {
  try {
      let response = await axios({
          method: 'POST',
          url: `${config.server.url}/user/login`,
          data: {
              uid,
              name
          },
          headers: { Authorization: `Bearer ${fire_token}` }
      });

      if (response.status === 200 || response.status === 201 || response.status === 304) {
          
          return response.data.user;
      } else {
          return new Error('Unable to authenticate');
      }
  } catch (error) {
       return new Error('Unable to authenticate');
  }
};

export const Validate = async (fire_token: string) => {
  try {
      let response = await axios({
          method: 'GET',
          url: `${config.server.url}/users/validate`,
          headers: { Authorization: `Bearer ${fire_token}` }
      });

      if (response.status === 200 || response.status === 304) {
           // logging.info('Successfully validated.', NAMESPACE);
          return response.data.user;
      } else {
        throw new Error('Unable to Validaate');
      }
  } catch (error) {
      return error
  }
};

export const SignInWithSocialMedia = (provider: firebase.auth.AuthProvider) =>
  new Promise<firebase.auth.UserCredential>((resolve, reject) => {
    firebase.auth().signInWithPopup(provider)
          .then((result) => resolve(result))
          .catch((error) => reject(error));
  });