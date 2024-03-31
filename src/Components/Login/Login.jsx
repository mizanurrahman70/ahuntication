
import {signOut ,getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider  } from "firebase/auth"
import { app } from "../../fire-base/Fire-base";
import { useState } from "react";

const Login = () => {
    const [data, setData] = useState(null)
    const auth = getAuth(app)

    const provider = new GoogleAuthProvider()
    const gitProvider=new GithubAuthProvider ()

    const handaling = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                
                setData(user)
            })
            .catch((error) => {
                console.log('error', error.message)
            })
            console.log(data)

        

    }
    const handalingOut=()=>{
        const auth =getAuth()
        signOut(auth)
        .then((result)=>{
             // Sign-out successful. 
             console.log(result)
             setData(null)
        })
        .catch((error)=>{
            console.log(error)
        })

    }
    const gitHandle=()=>{
        const auth=getAuth()
        signInWithPopup(auth,gitProvider)
        .then((result)=>
       { const user =result.user
        setData(user)
        console.log(user)
    })
    .catch((error)=>{
        console.log(error)
    })
     
        
    }
    return (
        <div>
          {data?
              <button onClick={handalingOut}>out</button>:
              <>
              <button onClick={handaling}>google Login</button>
              <button onClick={gitHandle}>git login</button>
              </>
              
          }
          
         
            {data  && <div>
                <h1>user name:{data?.displayName}</h1>
                <h2>email:{data?.
                    email}</h2>
                <img src={data?.
                    photoURL
                } alt="" />
            </div>}
        </div>
    );
};

export default Login;