import React, { useEffect, useState, useRef } from 'react';

const CountUp = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let current = 0;
          const increment = target / 60;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(current));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default function Stats() {
  return (
    <section className="py-16 border-b border-white/5 bg-surface relative z-20">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 divide-x-0 lg:divide-x lg:divide-white/5">
          <div className="text-center px-4">
            <h3 className="text-4xl font-bold text-white mb-2 flex justify-center">
              <CountUp target={10000} />+
            </h3>
            <p className="text-xs uppercase tracking-widest text-text-secondary">Learners</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-4xl font-bold text-gold mb-2 flex justify-center">
              <CountUp target={92} />%
            </h3>
            <p className="text-xs uppercase tracking-widest text-text-secondary">Placement Rate</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-4xl font-bold text-white mb-2 flex justify-center">
              <CountUp target={150} />+
            </h3>
            <p className="text-xs uppercase tracking-widest text-text-secondary">Mentors</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-4xl font-bold text-gold mb-2 flex justify-center">
              4.9/5
            </h3>
            <p className="text-xs uppercase tracking-widest text-text-secondary">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
