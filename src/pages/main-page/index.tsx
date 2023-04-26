import { Button } from '@mui/material';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '@shared/api/firebase';

export const MainPage = () => {
  const [data, setData] = useState<any[]>([]);
  const handleTest = async () => {
    const docRef = await addDoc(collection(db, 'users'), {
      name: 'Ada',
      role: 'user',
      surname: 'black',
    });
    console.log('Document written with ID: ', docRef.id);
  };

  const handleRead = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setData((prev) => [...prev, doc.data()]);
      // console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  return (
    <div>
      MainPage
      <Button onClick={handleTest}>ADD</Button>
      <Button onClick={handleRead}>READ</Button>
      {data ? JSON.stringify(data) : 'empty'}
    </div>
  );
};
