
import * as React from 'react';
type TabsCtx = { value:string, set:(v:string)=>void };
const Ctx = React.createContext<TabsCtx|null>(null);
export function Tabs({ defaultValue, children }:{defaultValue:string, children:React.ReactNode}){
  const [value,setValue]=React.useState(defaultValue);
  return <div><Ctx.Provider value={{value,set:value}}>{children}</Ctx.Provider></div>;
}
export function TabsList({children}:{children:React.ReactNode}){ return <div className="tabs">{children}</div>; }
export function TabsTrigger({value, children}:{value:string, children:React.ReactNode}){
  const ctx = React.useContext(Ctx)!; const active = ctx.value===value;
  return <button onClick={()=>ctx.set(value)} className={`tab ${active?'tab-active':''}`}>{children}</button>;
}
export function TabsContent({value, children}:{value:string, children:React.ReactNode}){
  const ctx = React.useContext(Ctx)!; if (ctx.value!==value) return null; return <div className="mt-3">{children}</div>;
}
