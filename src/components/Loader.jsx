function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-500 border-t-transparent mb-6"></div>
      <p className="text-lg text-green-800">Loading... Please wait</p>
    </div>
  );
};

export default LoadingPage;
