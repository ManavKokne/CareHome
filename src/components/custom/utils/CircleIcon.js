export default function IconCircle({ Icon, size = 36, className = "" }) {
    return (
      <div className={`w-[64px] h-[64px] flex items-center justify-center rounded-full border-2 border-purple-700 bg-purple-50 ${className}`}>
        <Icon size={size} className="text-purple-700" />
      </div>
    );
  }
  