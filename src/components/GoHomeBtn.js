import { useHistory } from 'react-router';

const GoHomeBtn = () => {
  const history = useHistory();
  const handleHome = () => {
    history.push('/');
  };
  return (
    <button type="button" onClick={handleHome}>Back to home</button>
  );
};

export default GoHomeBtn;
