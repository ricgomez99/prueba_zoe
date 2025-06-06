import { Advisor } from "@/app/types";

interface Params {
  data: Advisor[];
  onClick: (id: string) => void;
}

export default function ItmesList({ data, onClick }: Params) {
  return (
    <div>
      <ul>
        {data &&
          data.map((advisor: Advisor) => (
            <div key={advisor.id}>
              <span>{advisor.name}</span>
              <button onClick={() => onClick(advisor.id)}>See details</button>
            </div>
          ))}
      </ul>
    </div>
  );
}
