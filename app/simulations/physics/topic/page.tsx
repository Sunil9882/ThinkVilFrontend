import { useRouter } from 'next/router';

export default function TopicPage() {
  const router = useRouter();
  const { topic } = router.query; // Get the dynamic topic

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Physics Topic: {topic}</h1>
      <p>Simulation content for {topic} goes here...</p>
    </div>
  );
}
