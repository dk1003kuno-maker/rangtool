
import * as React from 'react';
export function Button({ variant='default', className='', ...props }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default'|'secondary'|'outline'} ) {
  const v = variant==='default' ? 'btn btn-primary' : variant==='outline' ? 'btn btn-outline' : 'btn btn-outline';
  return <button className={`${v} ${className}`} {...props} />;
}
