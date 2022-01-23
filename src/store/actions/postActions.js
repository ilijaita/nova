import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const createPost = ({ firestore }, post ) => {
    return ( dispatch, getState ) => {
        // make async call to databse
        db
        .collection('posts')
        .add({
            ...post,
            authorUsername: 'Milance',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post });
        }).catch((err) => {
            dispatch({ type: 'CREATE_POST_ERROR', err })
        })
        
        
    }
};