import Badge from "../Badge";
import { LinkExternal } from "../Links";

export default function Resume() {
  return (
    <dl className="list-container">
      <dt className="list-title">
        <h3 className="text-neutral-500 dark:text-silver-dark">
          <div className="flex items-center gap-2">
            2024
            
          </div>
        </h3>
      </dt>
      <dd className="list-content border-none pt-0">
      <div>Working Stundent in Software Developemnt</div>
        <div>
          <LinkExternal href="//brainlab.com">BrainLab</LinkExternal>
        </div>
        <div className="pt-1 text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
          Munich, Germany
        </div>
      </dd>
      
      <dt className="list-title">
        <h3 className="text-neutral-500 dark:text-silver-dark">
          <div className="flex items-center gap-2">
            2024
            
          </div>
        </h3>
      </dt>
      <dd className="list-content">
        <div>Biomedical Engineering Intern</div>
        <div>
        <LinkExternal href="//biosensors.com">Biosensors</LinkExternal>
        </div>
        
        <div className="pt-1 text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
          Stuttgart, Germany
        </div>
      </dd>

      <dt className="list-title mt-4 border-none pt-0 sm:mt-0">
        <h3 className="text-neutral-500 dark:text-silver-dark">2024 <Badge>Present</Badge></h3>
      </dt>
      <dd className="list-content border-none pt-0">
      <div>Founder, User Experience & Large Action Models (LAM)</div>
        <div>
          <LinkExternal href="//x70.one">x70</LinkExternal>
        </div>
        <div className="pt-1 text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
          Remote, Germany
        </div>
      </dd>

      <dt className="list-title mt-4 border-none pt-0 sm:mt-0">
        <h3 className="text-neutral-500 dark:text-silver-dark">2020</h3>
      </dt>
      <dd className="list-content border-none pt-0">
        <div>Founder, Webdeveloper & LLM Implementation</div>
        <div>
          <LinkExternal href="//xams.app">Exams</LinkExternal>
        </div>
        <div className="pt-1 text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
          London, UK
        </div>
      </dd>

      <dt className="list-title mt-4 border-none pt-0 sm:mt-0">
        <h3 className="text-neutral-500 dark:text-silver-dark">2018</h3>
      </dt>
      <dd className="list-content border-none pt-0">
        <div>Technology Intern</div>
        <div>
          <LinkExternal href="//www.hia.rwth-aachen.de">Helmholtz Institute</LinkExternal>
        </div>
        <div className="pt-1 text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
          Aachen, Germany
        </div>
      </dd>
    </dl>
  );
}
