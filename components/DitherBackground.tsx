'use client';

import dynamic from 'next/dynamic';
import type { DitherProps } from './Dither';

const Dither = dynamic(() => import('./Dither'), { ssr: false });

export default function DitherBackground(props: DitherProps) {
  return <Dither {...props} />;
}
