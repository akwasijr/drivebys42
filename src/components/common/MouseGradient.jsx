import { useMouseGradient } from '../../hooks/useMouseGradient';

const MouseGradient = ({ children, className = '' }) => {
  const mousePosition = useMouseGradient();

  return (
    <div className={`relative ${className}`}>
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.15), transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
};

export default MouseGradient;
