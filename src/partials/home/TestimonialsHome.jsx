import React from 'react';

import TestimonialsImage01 from '../../images/testimonial-01.jpg';
import TestimonialsImage02 from '../../images/testimonial-02.jpg';
import TestimonialsImage03 from '../../images/testimonial-03.jpg';
import TestimonialsImage04 from '../../images/testimonial-04.jpg';
import TestimonialsImage05 from '../../images/testimonial-05.jpg';
import TestimonialsImage06 from '../../images/testimonial-06.jpg';
import TestimonialsImage07 from '../../images/testimonial-07.jpg';
import TestimonialsImage08 from '../../images/testimonial-08.jpg';
import TestimonialsImage09 from '../../images/testimonial-09.jpg';

const TestimonialData = [
  {
    id: 1,
    avatar: TestimonialsImage01,
    name: 'Mark Luiss',
    company: 'Apprenda',
    content:
      'Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.',
  },
  {
    id: 2,
    avatar: TestimonialsImage02,
    name: 'Patrick Mills',
    company: 'Apprenda',
    content:
      'Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.',
  },
  {
    id: 3,
    avatar: TestimonialsImage03,
    name: 'Patrick Mills',
    company: 'Apprenda',
    content:
      'Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.',
  },
  {
    id: 4,
    avatar: TestimonialsImage04,
    name: 'Patrick Mills',
    company: 'Apprenda',
    content:
      'Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.',
  },
  {
    id: 5,
    avatar: TestimonialsImage04,
    name: 'Patrick Mills',
    company: 'Apprenda',
    content:
      'Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.',
  },
  {
    id: 6,
    avatar: TestimonialsImage04,
    name: 'Patrick Mills',
    company: 'Apprenda',
    content:
      'Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.',
  },
  {
    id: 7,
    avatar: TestimonialsImage04,
    name: 'Patrick Mills',
    company: 'Apprenda',
    content:
      'Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.',
  },
  {
    id: 8,
    avatar: TestimonialsImage04,
    name: 'Patrick Mills',
    company: 'Apprenda',
    content:
      'Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.',
  },
  {
    id: 9,
    avatar: TestimonialsImage04,
    name: 'Patrick Mills',
    company: 'Apprenda',
    content:
      'Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.',
  },
];

function TestimonialItems({ id, avatar, name, company, content }) {
  return (
    <article
      className="h-full flex flex-col p-6 bg-transparent hover:bg-gray-800/40 rounded-lg border dark:border-slate-800 shadow-lg transition duration-300 ease-in-out"
      data-aos="fade"
      data-aos-anchor="[data-aos-id-testimonials]"
    >
      <header className="mb-4">
        <img
          className="rounded-full shrink-0"
          src={avatar}
          width="48"
          height="48"
          alt="Testimonial 01"
        />
      </header>
      <div className="grow mb-3">
        <p className="text-gray-400">{content}</p>
      </div>
      <footer className="text-sm text-gray-400">
        <span className="text-gray-300">{name}</span> -{' '}
        <a
          className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out"
          href="#0"
        >
          {company}
        </a>
      </footer>
    </article>
  );
}

function TestimonialsHome() {
  return (
    <section className="relative dark:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 to-black">
      {/* Bg gradient: bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-[15rem] pointer-events-none z-10"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-oxygen dark:text-slate-200">
              Ce que disent nos joueurs...
            </h2>
          </div>
          {/* Testimonials container */}
          <div
            className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start"
            data-aos-id-testimonials
          >
            {TestimonialData.map((item) => (
              <TestimonialItems key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsHome;
