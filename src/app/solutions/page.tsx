'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SolutionsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/development');
  }, [router]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p>Redirecting to development page...</p>
    </div>
  );
};

export default SolutionsPage; 