import Image from "next/image";

const testimonials = 
    {
      content:
        "Uncomfortable with the colors of this website? I'm sorry, can't help it. I just LOVE LOVE LOVE pink and purple",
      link: "https://portfoliomaster20091.gatsbyjs.io/",
      author: {
        name: "Daya",
        role: "Founder of YTtoMP3",
        image: "/g.jpg",
      }
    }

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-mogra text-4xl font-bold tracking-normal text-[#F0F8FF] sm:text-6xl">
            Loved by many worldwide.
          </h1>
        </div>

        <div className="gap-4 px-10 py-10">
          <a href={testimonials.link} target="_blank" rel="noreferrer">
            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
              <blockquote className="relative">
                <p className="text-lg tracking-tight text-slate-900">
                    "{testimonials.content}"
                </p>
              </blockquote>
            <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
            <div>
                <div className="font-display text-base text-slate-900">
                    {testimonials.author.name}
                </div>
                <div className="mt-1 text-sm text-slate-500">
                    {testimonials.author.role}
                </div>
            </div>
                <div className="overflow-hidden rounded-full bg-slate-50">
                            
                </div>
            </figcaption>
            </figure>
          </a>
        </div>

      </div>
    </section>
  );
}
