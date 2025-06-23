import WorkCard from "@/components/WorkCard";
import { currentWork, volunteeringWork } from "@/data/workData";

export default function WorkSection() {
  return (
    <div className="space-y-8 px-4 md:px-12 py-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Work</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {currentWork.map((item, idx) => (
            <WorkCard key={idx} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
