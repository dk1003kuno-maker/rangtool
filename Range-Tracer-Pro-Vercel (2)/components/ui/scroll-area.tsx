
import * as React from 'react';
export function ScrollArea({ className='', children }:{className?:string, children:React.ReactNode}){
  return <div className={`scrollarea ${className}`}>{children}</div>;
}
