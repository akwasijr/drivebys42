import { useScrollProgress } from '../../hooks/useScrollProgress';

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-900/50">
      <div
        className="h-full bg-gradient-to-r from-studio-coral via-studio-pink to-studio-purple transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
