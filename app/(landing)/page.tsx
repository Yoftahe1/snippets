import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import Snippets from "./_components/snippets";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Snippets />
      </main>

      <Footer />
    </div>
  );
};

export default Page;
