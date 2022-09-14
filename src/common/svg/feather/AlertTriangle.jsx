import React from 'react';

function AlertTriangle() {
  return (
    <svg
      className='feather feather-alert-triangle'
      height='24'
      width='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' />
      <line x1='12' x2='12' y1='9' y2='13' />
      <line x1='12' x2='12.01' y1='17' y2='17' />
    </svg>
  );
}

export default AlertTriangle;
