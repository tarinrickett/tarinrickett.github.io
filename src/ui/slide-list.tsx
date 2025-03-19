'use client';
import { useRef } from 'react';

interface SlideListProps {
  children: React.ReactNode;
  scrollAmount?: number;
  title?: string;
}

const SlideListButton = ({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => (
  <button
      onClick={onClick}
      className={`slide-list__button--${direction} p-2 hover:cursor-pointer hover:bg-accent rounded-md`}
      aria-label={`Scroll ${direction}`}
    >
      {direction === 'left' ? '←' : '→'}
    </button>
);

export const SlideList = ({
  children,
  scrollAmount = 526,
  title 
}: SlideListProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollValue = direction === 'left' ? -scrollAmount : scrollAmount;
    scrollContainerRef.current.scrollBy({
      left: scrollValue,
      behavior: 'smooth'
    });
  };

  return (
    <div className="slide-list">
      <div className="slide-list__header flex flex-row justify-between items-center mb-4">
        <h2>{title}</h2>
        <div className="slide-list__button-container shrink-0">
            <SlideListButton
              direction="left"
              onClick={() => scroll('left')}
            />
            <SlideListButton
                direction="right"
                onClick={() => scroll('right')}
            />
        </div>
      </div>
      <div
        className="slide-list__container flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
        ref={scrollContainerRef}
      >
        {children}
      </div>
    </div>
  );
};
