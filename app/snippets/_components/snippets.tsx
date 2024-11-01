import Card from "@/components/card";
import snippets from "@/constants/snippets";
import Filter from "./filter";

const Snippets = () => {
  return (
    <section className="w-full py-12 md:py-12 lg:py-24 bg-gray-100 dark:bg-black-800 flex justify-center">
      <div className="container px-4 md:px-6">
        <Filter/>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {snippets.map((snippet, index) => (
            <Card
              key={index}
              title={snippet.title}
              language={snippet.language}
              code={snippet.code}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Snippets;
