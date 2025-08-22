import React, { useState } from 'react';

const BuggyComponent: React.FC = () => {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('Intentional error for testing ErrorBoundary');
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Buggy Component</h2>
      <button
        onClick={() => setThrowError(true)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Trigger Error
      </button>
    </div>
  );
};

export default BuggyComponent;
