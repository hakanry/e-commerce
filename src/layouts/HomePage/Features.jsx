import features from "../../data/featuresCards.json";
import FeatureCard from "../../components/FeatureCard";
function Features() {
  return (
    <div>
      <main className="flex flex-col pb-20">
        <section className="text-center p-20">
          <h4 className="text-neutral-500">Featured Products</h4>
          <h3 className="text-slate-800">THE BEST SERVICES</h3>
          <p className="text-neutral-500">
            Problems trying to resolve
            <br />
            the conflict between{" "}
          </p>
        </section>
        <section className="flex flex-col items-center text-center px-12.5 gap-7.5 md:flex-row md:justify-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Features;
