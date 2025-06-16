import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ComingSoon = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 p-6">
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold mb-4">
          Competition Coming Soon
        </h1>
        <p className="text-xl text-white mb-4">Stay Tuned!!</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
