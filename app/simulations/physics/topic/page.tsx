"use client"; // This ensures it's a client component

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function TopicContent() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") || "Unknown";

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Physics Topic: {topic}</h1>
      <p>Simulation content for {topic} goes here...</p>
    </div>
  );
}

export default function TopicPage() {
  return (
    <Suspense fallback={<p>Loading topic...</p>}>
      <TopicContent />
    </Suspense>
  );
}
