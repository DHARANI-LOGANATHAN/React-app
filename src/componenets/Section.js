export default function Section({ title, cards }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">{title}</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-md transition">
            <img src={card.image} alt={card.label} className="h-40 w-full object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-medium text-indigo-700">{card.label}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}