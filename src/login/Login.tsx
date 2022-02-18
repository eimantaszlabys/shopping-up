import React, { FunctionComponent } from 'react';

const Login: FunctionComponent = () => {
  return (
    <form action="/auth/login">
      <input id="userName" placeholder="User name" />
      <input id="password" placeholder="Password" type="password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export { Login };
