// components/SkeletonLoader.tsx
import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonLoader: React.FC = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={250}
    viewBox="0 0 300 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="300" height="180" />
    <rect x="0" y="190" rx="5" ry="5" width="250" height="20" />
    <rect x="0" y="220" rx="5" ry="5" width="180" height="20" />
  </ContentLoader>
);

export default SkeletonLoader;
