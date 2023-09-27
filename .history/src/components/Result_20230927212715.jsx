import React, { useState, useEffect } from 'react';

const Result = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMessage(true);
    }, 2000); // Adjust the timeout duration in milliseconds (here, it's set to 2000 milliseconds or 2 seconds)

    // Clear the timeout when the component is unmounted or when the effect dependencies change
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      {showMessage && (
        <p>Your message has been successfully sent. I will contact you as soon as possible.</p>
      )}
    </div>
  );
};

export default Result;
