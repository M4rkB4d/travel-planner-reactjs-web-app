import { useAuthHook } from "../hooks/useAuthHook";

const Home = () => {
  const { logout } = useAuthHook();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
