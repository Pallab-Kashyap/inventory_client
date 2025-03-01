import { registerUser } from "../../API/auth";
import { useState } from "react";

const Register = () => {
  const inputStyle = `border-2 border-white  text-white py-1 px-2 rounded-[6px]`;

 const [ username, setUsername ] = useState('');
 const [ email, setEmail ] = useState('');
 const [ password, setPassword ] = useState('')

  const handleSubmit = async () => {
    registerUser({ username, email, password });
  };

  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-center">

    <h1 className="text-2xl font-medium">Welcome</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className=" shadow-2xl  shadow-gray-500 backdrop-blur-2xl p-10 rounded-xl flex flex-col space-y-5"
      >
        <input
          type="text"
          id="name"
          required
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          placeholder="Name"
          className={" " + inputStyle}
        />


        <input
          type="text"
          id="email"
          required
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          placeholder="Email"
          className={"" + inputStyle}
        />


        <input
          type="text"
          id="password"
          required
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          placeholder="Password"
          className={"" + inputStyle}
        />

        <button type="submit" className="bg-white text-black py-1 rounded-[6px] font-medium">Submit</button>
      </form>
    </div>
  );
};

export default Register;
