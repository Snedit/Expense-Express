import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase.js";
import { useGetUserInfo } from "./useGetUserInfo";
export const useAddTransaction= (description,transactionAmount, transactionType)=>{
    const TransCollectionRef  = collection(db, "transactions");
    const {userID} = useGetUserInfo();
    async function addTransaction()
{   
    console.log(description);
    console.log(transactionAmount);
    console.log(transactionType);
    
    await addDoc(TransCollectionRef, {
        userID ,
        description: description,
        transactionAmount,
        transactionType,
        createdAt: serverTimestamp()
        
    });
}
return {addTransaction};
}