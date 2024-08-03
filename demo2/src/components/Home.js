import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const obj = location.state;
  return (
    <>
      <h1>Welcome {obj.name} - {obj.id}</h1>
    </>
  );
}

export default Home;