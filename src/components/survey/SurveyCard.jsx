import { Clapperboard } from "lucide-react";

function SurveyCard({ children }) {
  return (
    <article className="survey-card w-full max-w-lg overflow-hidden rounded-xl bg-card shadow-lg">
      <header className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-violet-700 px-6 py-4">
        <Clapperboard className="size-5 text-white" aria-hidden="true" />
        <h1 className="text-lg font-semibold text-white">Movie Survey</h1>
      </header>
      <section className="p-6">{children}</section>
    </article>
  );
}

export { SurveyCard };
