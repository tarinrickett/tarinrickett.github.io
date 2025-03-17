'use client';

export function CardSection(props: { title: string, children: React.ReactNode }) {
  return (
    <section className="card-section flex flex-col gap-4 px-4 sm:px-8 max-w-7xl w-full mx-auto">
      <h2>{props.title}</h2>
      <div className="card-section__cards flex flex-row gap-4 flex-wrap">
        {props.children}
      </div>
    </section>
  );
}
