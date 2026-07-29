import type { CastMember } from "../../types/movie-credits";
import { getImageUrl } from "../../utils/image";

type CastCardProps = {
  cast: CastMember;
};

const CastCard = ({ cast }: CastCardProps) => {
  return (
    <div className="w-40 flex-shrink-0 overflow-hidden rounded-lg bg-slate-900 shadow">
      <img
        src={getImageUrl(cast.profile_path)}
        alt={cast.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-3">
        <h3 className="truncate font-semibold">{cast.name}</h3>

        <p className="mt-1 text-sm text-slate-400">{cast.character}</p>
      </div>
    </div>
  );
};

export default CastCard;
