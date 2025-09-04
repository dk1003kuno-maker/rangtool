
import dynamic from 'next/dynamic';
const RangeTracer = dynamic(()=>import('./range-tracer'),{ ssr:false });
export default function Page(){ return <RangeTracer/>; }
