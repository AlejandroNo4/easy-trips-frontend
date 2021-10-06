import React from 'react';
import { useNavigate } from 'react-router';

const GoHomeBtn = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  };
  return (
    <button type="button" onClick={handleHome}>Back to home</button>
  );
};

export default GoHomeBtn;
