import React,{useState,useEffect} from "react"
import firebase from "firebase";
import './App.css';
import { Userauth } from "./Userauth";
import { auth } from "./Firebase";
import Home from "./Home";
import { Provider } from "react-redux";
import { store } from "./Store";

const App = () => {

  const[user,setuser] = useState(null)

  useEffect(()=>{
    auth.onAuthStateChanged(user => {
      if(user){
        setuser({email:user.email,uid:user.uid})
      }else{
        setuser(null)
      }
    })
  },[])

  return (
    <Provider store={store}>
      <center>
        {user ? <Home user={user}/> : <Userauth />}
      </center>
    </Provider>
  );
}

export default App;
