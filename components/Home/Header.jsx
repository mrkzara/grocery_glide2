import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getApp } from 'firebase/app';

export default function Header() {
  const [username, setUsername] = useState('');
  
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const app = getApp(); 
        const auth = getAuth(app); 
        const db = getFirestore(app);
        
        const user = auth.currentUser;
        
        if (user) {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setUsername(docSnap.data().username);
          } else {
            console.log('No such document!');
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsername();
  }, []);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
      
      <Text style={{ fontSize: 25 }}>{username}</Text>
    </View>
  );
}
