import React from 'react';

import './styles.css';

import useStyles from './styles';

const LoadingSpinner = () => {
  let classes = useStyles();
  return <div className="spinner"></div>;
};

export default LoadingSpinner;
