
"use client";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// ここに先ほどお渡しした Range Tracer の本体を統合してください。
export default function RangeTracer(){
  return (
    <div className="min-h-screen p-6">
      <Card><CardContent>
        <div className="text-xl font-bold">Range Tracer Pro</div>
        <div className="text-sm text-neutral-600 mt-1">Vercel テンプレート。/app/range-tracer.tsx に本体を貼り付けて完成です。</div>
        <Separator className="my-3"/>
        <Badge>準備OK</Badge>
      </CardContent></Card>
    </div>
  );
}
