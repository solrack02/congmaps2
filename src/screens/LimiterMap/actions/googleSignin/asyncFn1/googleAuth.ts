import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../../../config/firebase';

export const googleAuth = async () => {
  // ---------- set Popup Auth Permission
  const provider = new GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  const result = await signInWithPopup(auth, provider);

  // ---------- set User Data
  const userData = result?.user;
  const condNoUser = !userData && userData !== null;
  if (condNoUser) throw new Error('Authentication error');

  // ---------- set Google Access Token
  // const credential = GoogleAuthProvider.credentialFromResult(result);
  // const token = credential.accessToken;
  // ---------- set Return
  return userData;
};
