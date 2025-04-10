const CircleIcon = ({ icon: Icon, sizeClasses = "w-10 h-10" }) => {
  return (
    <div className={`flex items-center justify-center rounded-full border-2 border-purple-700 bg-purple-50 ${sizeClasses}`}>
      <Icon className="w-5 h-5 text-purple-700" />
    </div>
  );
};

export default CircleIcon;