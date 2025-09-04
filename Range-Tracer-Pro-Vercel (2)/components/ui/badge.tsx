
import * as React from 'react';
export function Badge({ variant='outline', className='', children }:
 { variant?: 'outline'|'default'|'secondary', className?: string, children: React.ReactNode}) {
  const base = 'badge';
  const style = variant==='default' ? 'bg-black text-white border-black' :
                variant==='secondary' ? 'bg-neutral-100 text-neutral-800 border-neutral-200' :
                'bg-white text-neutral-800 border-neutral-300';
  return <span className={`${base} ${style} ${className}`}>{children}</span>;
}
