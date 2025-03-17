'use client';

export function Card(props: { title: string, company: string, location: string, img: string }) {
  return (
    <div className="card h-full w-full md:w-[48%] p-4 flex flex-col bg-canvas rounded-lg border-2 border-accent">
        <img className="card__img w-full h-80 object-cover rounded-lg mb-4" src={props.img} alt="Tarin at BlueDot Impact" />
        <div className="card__body">
            <h3>{props.title}</h3>
            <h4>{props.company} • {props.location}</h4>
        </div>
    </div>
  );
}
