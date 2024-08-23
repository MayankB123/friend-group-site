import { useNavigate } from "react-router-dom"

export default function StartSituationTest() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/situation-test');
  };

  return <>
        <button onClick={handleClick}>Situation Test</button>
    </>
}
