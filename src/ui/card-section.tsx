'use client';

import { SlideList } from "./slide-list";
import { Card } from "./card";

export function CardSection(props: {
  title: string, 
  cards: Array<{ 
    title: string, 
    company: string, 
    location?: string, 
    date?: string, 
    img: string, 
    tags?: string[] 
  }>
}) {
  return (
    <section className="card-section flex flex-col gap-4 px-4 sm:px-8 max-w-7xl w-full mx-auto">
      <SlideList title={props.title}>
        {props.cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </SlideList>
    </section>
  );
}
