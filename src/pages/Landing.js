import { useEffect } from "react";
import "../styles/Landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }, []);

  return (
    <div className="landing-container bg-red-900 w-full h-full flex justify-center items-center">
      <h1 className="text-white text-5xl">MITASH</h1>
    </div>
  );
}

export default Landing;
