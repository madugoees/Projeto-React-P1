import React from 'react';
import { useState, useEffect } from 'react';
import "./Login.css";
import amazonLogo from "../../assets/amazonLogo.png"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [count, setCount] = useState(0);

    function addCount() {

      setCount(count => count+1);
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Envio");
  };

    useEffect(() => {
      console.log("username", username);
      console.log("password", password);      
    }, [count]);
  

  return (
    <div>
      <div className='Logo'>
       <a href="https://www.amazon.com.br/" target="_blank"> <img src= {amazonLogo} alt="logo amazon" className='amazonLogo' /> </a> 
      </div>
      <div className="container">
                    <form onSubmit={handleSubmit}>
                <h1>Fazer Login</h1>
                <h2>E-mail ou número de telefone celular</h2>

                <div className= "username">
                <input type="userName"
                onChange={(e) => setUsername(e.target.value)} />
                </div>

                <h3>Senha</h3>

                <div className="password">
                <input type="password"
                onChange={(e) => setpassword(e.target.value)} />
                </div>

                <button onClick={addCount}>Continuar</button>

                <div className="ajuda">
                    <p>
                    <a href='#'>Precisa de ajuda?</a> 
                    </p>
                </div>

            </form>
      </div>
    
      <div className="container2">

            <h1>Novo na Amazon?</h1>
            <button>Criar sua conta da Amazon</button>
     
        </div>  

    </div>
    
  )
}

export default Login
