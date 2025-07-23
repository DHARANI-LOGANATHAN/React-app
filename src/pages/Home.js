import HeroSection from "../componenets/HeroSection";
import Section from "../componenets/Section";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* 📚 Book Categories Section */}
      <Section
        title="Book Categories"
        cards={[
          { image: "images/fiction.jpg", label: "Fiction" },
          { image: "images/nonfiction.jpg", label: "Non-Fiction" },
          { image: "images/academic.jpg", label: "Academic" },
          { image: "images/comics.jpg", label: "Comics" }
        ]}
      />

      {/* 🚀 Updated Trending & Themes Section with 8 cards */}
      <Section
        title="Trending & Themes"
        cards={[
          { image: "images/trending.PNG", label: "Trending Books" },
          { image: "images/offers.jpg", label: "Offers & Deals" },
          { image: "images/adults.jpg", label: "For Adults" },
          { image: "images/children.jpg", label: "Children’s Picks" },
          { image: "images/thriller.PNG", label: "Thriller" },
          { image: "images/romance.jpg", label: "Romance" },
          { image: "images/mystery.jpg", label: "Mystery" },
          { image: "images/sci-fi.jpg", label: "Science Fiction" }
        ]}
      />

      {/* 💡 Why Us Section */}
      <Section
        title="Why Shop With Us?"
        cards={[
          { image: "images/discount.jpg", label: "Best Prices" },
          { image: "images/fast-delivery.jpg", label: "Fast Delivery" },
          { image: "images/variety.jpg", label: "Huge Collection" },
          { image: "images/support.jpg", label: "24/7 Support" }
        ]}
      />
    </>
  );
}