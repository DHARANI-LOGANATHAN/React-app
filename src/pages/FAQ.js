export default function FAQ() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div>
          <p className="font-semibold">Q: What types of books are available?</p>
          <p>A: We offer fiction, non-fiction, academic, comics, and more.</p>
        </div>
        <div>
          <p className="font-semibold">Q: Do you offer home delivery?</p>
          <p>A: Yes, we deliver books all across India with fast delivery options.</p>
        </div>
        <div>
          <p className="font-semibold">Q: Can I return a damaged book?</p>
          <p>A: Absolutely! We offer easy returns for damaged items within 7 days.</p>
        </div>
      </div>
    </div>
  );
}