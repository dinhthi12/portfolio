'use client';

import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/BACKEND DEVELOPER_ NGUYEN DINH THI.pdf'; // Update the path as needed
    link.setAttribute('download', 'BACKEND DEVELOPER_ NGUYEN DINH THI.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload} variant="secondary" className="gap-x-2">
      Download CV <Download size={18} />
    </Button>
  );
};

export default DownloadButton;
