import { useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';
import gsap from 'gsap/all';
import RoundedCorners from './RounedCorners';
import Button from './Button';

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;
    const react = element.getBoundingClientRect();

    const x = clientX - react.left;
    const y = clientY - react.top;

    const centerX = react.width / 2;
    const centerY = react.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      rotateX,
      rotateY,
      duration: 0.3,
      transformPerspective: 500,
      ease: 'power1.inOut',
    });
  };
  const handleMouseLeave = (e) => {
    const element = frameRef.current;
    if (!element) return;
    gsap.to(element, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.3,
      ease: 'power1.inOut',
    });
  };
  return (
    <div className="min-h-screen w-screen bg-black text-blue-50" id="story">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general tex-sm uppercase md:text-[10px]">
          the multiversal ip work
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title={`<b>W</b>elcome to the <b>W</b>orld of <b>Z</b>entry`}
            sectionId={'#story'}
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
