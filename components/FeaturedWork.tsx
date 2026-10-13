import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function FeaturedWork({ full = false }: { full?: boolean }) {
  return (
    <section
      id="work"
      aria-label="Selected website projects"
      className={full ? "" : "py-16 md:py-24 bg-white"}
    >
      <div className="max-w-7xl mx-auto px-6">
        {!full && (
          <div className="mb-10">
            <p className="text-sm text-blue-700 font-bold uppercase tracking-widest mb-3">
              Selected work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              See what we build.
            </h2>
            <p className="mt-4 text-slate-600">
              Two frontend projects, with different audiences and visual styles.
            </p>
          </div>
        )}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100"
            >
              <div className="relative aspect-[16/10] bg-slate-200">
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  fill
                  sizes="(min-width: 1280px) 600px, (min-width: 1024px) 46vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 md:p-10">
                <p className="text-xs uppercase tracking-widest text-blue-700 font-bold mb-3">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {project.description}
                </p>
                {full && (
                  <ul
                    aria-label="Project technologies"
                    className="mt-5 flex flex-wrap gap-2"
                  >
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs text-slate-600"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex py-2 text-blue-700 font-bold underline underline-offset-4"
                  >
                    {project.linkLabel}{" "}
                    <span className="sr-only">(opens in a new tab)</span>
                    <span aria-hidden="true" className="ml-2">
                      ↗
                    </span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        {!full && (
          <Link
            href="/our-work"
            className="mt-8 inline-flex py-3 font-bold text-blue-700 underline underline-offset-4"
          >
            View our work →
          </Link>
        )}
      </div>
    </section>
  );
}
