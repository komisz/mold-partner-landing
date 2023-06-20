import Image from 'next/image';
import React from 'react';

import mpLogo from '../../public/images/mp-logo.svg';

export const CompanyLogo = () => {
  return (
    <Image
      priority
      src={mpLogo}
      width={0}
      height={0}
      sizes="100vw"
      alt="Mold Partner Kft. logo"
      className="block h-8 w-auto"
    />
  );
};
