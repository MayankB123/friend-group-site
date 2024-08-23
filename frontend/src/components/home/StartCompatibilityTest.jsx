import { useNavigate } from "react-router-dom"

export default function StartCompatibilityTest() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/compatibility-test');
  };

  return <button onClick={handleClick}>Compatibility Test</button>
}