// LoaderComponent.jsx
const LoaderComponent = () => {
  return (
    <div className="fixed inset-0 bg-slate-950 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="space-x-2 flex flex-row">
        <div className="animate-bounce bg-primaryDark rounded-full w-5 h-5"></div>
        <div className="animate-bounce200 bg-primaryDark rounded-full w-5 h-5"></div>
        <div className="animate-bounce400 bg-primaryDark rounded-full w-5 h-5"></div>
      </div>
    </div>
  );
};

export default LoaderComponent;