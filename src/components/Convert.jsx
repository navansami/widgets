import React, { useState, useEffect } from 'react';

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log('New Lanaguage or Text');
  }, [language, text])

  return <div />
}

export default Convert;