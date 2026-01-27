'use client';
import { Tag } from "@/ui/tag";

export function Card(props: {
    title: string,
    company: string,
    location?: string,
    date?: string,
    img: string,
    tags?: string[],
    comingSoon?: boolean,
}) {
  return (
    <div className="card relative h-full w-[320px] md:w-[526px] p-4 flex flex-col bg-canvas rounded-lg border-2 border-accent shrink-0">
        {props.comingSoon && (
          <div className="absolute top-4 right-4 bg-accent text-xs font-semibold tracking-wide px-2 py-1 rounded-bl-lg rounded-tr-lg">
            Coming soon
          </div>
        )}
        <img className="card__img w-full h-80 object-cover rounded-lg mb-4" src={props.img}/>
        <div className="card__body">
            <h3>{props.title}</h3>
            <h4>{props.company}{props.location && ` • ${props.location}`}</h4>
        </div>
        {props.tags && (
            <div className="card__tags mt-4 flex flex-row gap-2 flex-wrap">
                {props.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </div>
        )}
    </div>
  );
}
