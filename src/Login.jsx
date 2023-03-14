import React, { useState } from 'react';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };
  return (
    <div className="container mx-auto">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded-lg px-8 py-6 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Déjà Client.e ?
            </label>
            <input
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="mot de passe"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit">
              Me Connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;