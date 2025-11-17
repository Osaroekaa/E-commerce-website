import './SkeletonLoader.css';

function SkeletonLoader() {
  const skeletonItems = Array.from({ length: 6 }); // number of skeleton cards

  return (
    <div className="skeleton-grid">
      {skeletonItems.map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonLoader;
