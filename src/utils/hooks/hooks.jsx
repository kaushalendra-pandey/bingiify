import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../../context/firebase';

export function useAuthListener() {
  const [curUser, setCurUser] = useState(JSON.parse(localStorage.getItem('user')));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setCurUser(user);
      } else {
        localStorage.removeItem('user');
        setCurUser(null);
      }
    });

    return () => listener();
  }, []);

  return { curUser };
}

export function useContent(target) {
    const [content,setContent] = useState([])
    const {firebase} = useContext(FirebaseContext)

    useEffect(() => {
        firebase.firestore().collection(target).get()
        .then((snapshot) => {
            const allContent = snapshot.docs.map((content) => ({
                ...content.data(),
                docId: content.id
            }))

            setContent(allContent)

        })
        .catch((err) => {
            console.log(err)
        })

    },[])
    return {[target] : content}
}