import React from 'react';

const ComingSoon = () => {
  return (
    <div className="relative flex items-center justify-center h-72 z-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 mb-6 animate-fadeIn">
          Coming Soon
        </h1>
        <div className="flex justify-center space-x-3">
          {[1, 2, 3].map((dot) => (
            <div
              key={dot}
              className="w-4 h-4 bg-white rounded-full animate-bounce"
              style={{
                animationDelay: `${dot * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;