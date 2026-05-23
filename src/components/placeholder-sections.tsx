import { SectionContainer } from "./ui/section-container";
import { Mail } from "lucide-react";

export function ContactPlaceholder() {
  return (
    <SectionContainer id="contact" className="border-t border-zinc-900/60 pb-32">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-pink-400 mb-2">
          <Mail className="w-5 h-5" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
          Get in Touch
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
          Обсудить проект, вакансию или предложить сотрудничество. На этапе 5 здесь будет полностью функциональная и интерактивная форма обратной связи с валидацией, анимацией отправки и социальными линками.
        </p>
        <div className="pt-6 flex justify-center gap-4">
          <span className="text-xs font-mono text-zinc-500">TG: @username</span>
          <span className="text-zinc-700">•</span>
          <span className="text-xs font-mono text-zinc-500">Email: kirill@example.com</span>
        </div>
      </div>
    </SectionContainer>
  );
}
