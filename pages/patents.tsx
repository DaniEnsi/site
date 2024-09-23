import React from "react";
import { Main } from "../components/Layouts";
import { SEO } from "../components/SEO";
import { LinkExternal } from "../components/Links";

// TODO: Fetch from CMS
const PATENTS = [
  { id: "DE202024102461", title: "Gepäckträger für ein Fahrrad sowie Fahrrad mit Gepäckträger", link: "https://register.dpma.de/DPMAregister/pat/register?AKZ=2020241024613" },
];

export default function Patents() {
  return (
    <>
      <SEO
        seo={{
          title: "Patents",
          path: "/patents",
        }}
      />
      <Main>
        <h1 className="pb-6 text-2xl text-neutral-800 [font-variation-settings:'opsz'_32,_'wght'_500] dark:text-white sm:pb-12 sm:text-3xl">
          Patents
        </h1>
        <dl className="list-container items-center gap-2">
          {PATENTS.map((patent) => (
            <React.Fragment key={patent.id}>
              <dt className="list-title border-none pt-0">
                <div className="time time-lg">{patent.id}</div>
              </dt>
              <dd className="list-content border-none pb-4 pt-0 sm:pb-0">
                <div>
                  <LinkExternal
                    href={patent.link}
                  >
                    {patent.title}
                  </LinkExternal>
                </div>
              </dd>
            </React.Fragment>
          ))}
        </dl>
      </Main>
    </>
  );
}
