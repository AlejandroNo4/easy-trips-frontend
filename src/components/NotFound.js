import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column justify-center align-center w-100 h-100">
      <h1 className="session-title">Page not found :(</h1>
      <button type="button" className="session-btn white" onClick={() => navigate('/')}>Home</button>
    </div>
  );
};

export default NotFound;
