// ----------- import Packs
import { initializeApp } from 'firebase/app';

// ----------- project Packs
import { getFirestore } from 'firebase/firestore';

// ----------- placeHolder Packs
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// ---------- Novo Esquema de Território 06/01/24
const fbConfig = {
  apiKey: 'AIzaSyB9ntwrJDypFXm87NofdXn_oZpGlLzmeYw',
  authDomain: 'cong-maps2.firebaseapp.com',
  projectId: 'cong-maps2',
  storageBucket: 'cong-maps2.appspot.com',
  messagingSenderId: '646415050546',
  appId: '1:646415050546:web:ed4fc689f629a9b397592b',
};

// ---------- Antigo Esquema de Território
// const fbConfig = {
//   apiKey: 'AIzaSyBN6Lvo566ByD4qhh13N7045agersS5jHo',
//   authDomain: 'cong-maps.firebaseapp.com',
//   projectId: 'cong-maps',
//   storageBucket: 'cong-maps.appspot.com',
//   messagingSenderId: '1065057474979',
//   appId: '1:1065057474979:web:b9548fe3d01f9805bf2216',
// };

// ----------- start Firebase
export const fbInit = initializeApp(fbConfig);

// ----------- project Packs
export const firestoreInit = getFirestore(fbInit);

// ----------- placeHolder Packs
export const auth = getAuth(fbInit);
export const storage = getStorage(fbInit);

// ---------- set Type to FirebaseData
export const fbType = <T>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap: any) => snap.data() as T,
});
