import "./App.css";
import React from "react";
import {
  Route,
  Link,
  Navigate,
  Routes,
  useParams,
  Outlet,
} from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Link to="/users">Users list</Link>
    </>
  );
};

const UsersList = () => {
  return (
    <>
      <Link to="/">Home page</Link>
      <h1>UsersList</h1>
      <ul>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>
        <li>
          <Link to="/users/2">User 2</Link>
        </li>
        <li>
          <Link to="/users/3">User 3</Link>
        </li>
        <li>
          <Link to="/users/4">User 4</Link>
        </li>
      </ul>
    </>
  );
};

const UserPage = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>User page</h1>
      <br />
      <Link to={`/users/${userId}/profile`}>User edit page</Link>
      <h3>Users list</h3>
      <Link to="/users">Users list</Link>
      <h3>userID: {userId}</h3>
    </>
  );
};

const UserProfilePage = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>User edit page</h1>
      <ul>
        <li>
          <Link to={`/users/${userId}`}>User page</Link>
        </li>
        <li>
          <Link to={`/users/${+userId + 1}`}>Another user page</Link>
        </li>
        <li>
          <Link to="/users">Users list</Link>
        </li>
      </ul>
    </>
  );
};

const UsersLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="users" element={<UsersLayout />}>
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
          <Route path=":userId/profile" element={<UserProfilePage />} />
          <Route path=":userId/*" element={<Navigate to="" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
