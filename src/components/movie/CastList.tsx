import type { CastMember } from "../../types/movie-credits";
import CastCard from "./CastCard";

type CastListProps = {
  cast: CastMember[];
};

const CastList = ({ cast }: CastListProps) => {
  return (
    <section className="mt-16">
      <h2 className="mb-5 text-2xl font-bold">Top Cast</h2>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {cast.slice(0, 10).map((member) => (
          <CastCard key={member.id} cast={member} />
        ))}
      </div>
    </section>
  );
};

export default CastList;
