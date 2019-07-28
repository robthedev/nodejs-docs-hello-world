import jwt_decode from 'jwt-decode';
import setAuthToken from 'utils/setAuthToken';

const authUser = (storeObj, func, token) => {
  let decodedToken;
  if (token) {
    setAuthToken(token);
    decodedToken = jwt_decode(token);
  }
  storeObj.dispatch(func(decodedToken));
};

export default authUser;
