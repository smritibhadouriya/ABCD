// components/loader/Loader.jsx
const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="animate-spin rounded-full h-18 w-18 border-t-6 border-orange-600"></div>
    </div>
  );
};

export default Loader;
