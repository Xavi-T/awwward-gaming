/* eslint-disable react/prop-types */
import gsap from 'gsap/all';
import { useEffect, useRef } from 'react';

const AnimatedTitle = ({ title, containerClass, sectionId }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        },
      });

      titleAnimation.to('.animated-word', {
        opacity: 1,
        transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
        ease: 'power2.inOut',
        stagger: 0.05,
      });

      return () => ctx.revert();
    }, containerRef);
  }, []);
  return (
    <div
      id={sectionId}
      ref={containerRef}
      className={`animated-title ${containerClass}`}
    >
      {title.split('<br />').map((line, index) => (
        <div
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          key={index}
        >
          {line.split(' ').map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
