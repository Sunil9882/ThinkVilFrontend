export default function QuotesSection() {
  return (
    <section className="bg-sky-50 p-6 rounded-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Inspiring Quotes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <blockquote className="text-lg italic text-center">
          "The important thing is to never stop questioning." <br />
          <span className="font-semibold">- Albert Einstein</span>
        </blockquote>
        <blockquote className="text-lg italic text-center">
          "The science of today is the technology of tomorrow." <br />
          <span className="font-semibold">- Edward Teller</span>
        </blockquote>
      </div>
    </section>
  );
}
