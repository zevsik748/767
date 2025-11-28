import React, { useMemo } from "react";
import { Brain, Video, Image as ImageIcon, Music, Mic, Layers, Wand2, ArrowRight, Check } from "lucide-react";

const AUTHOR_TELEGRAM = "https://t.me/dmitriy_ferixdi";
const PAYMENT_IMAGE_URL = "https://i.postimg.cc/SxQW2tH5/photo-2025-11-28-09-09-12.jpg";

const AI_MODELS: string[] = [
  "Google Nano Banana Pro",
  "ByteDance Seedance 1.0 Pro Fast",
  "Grok Imagine",
  "Hailuo 2.3",
  "Sora 2 Pro Storyboard",
  "Veo 3.1",
  "Kling 2.5 Turbo",
  "Wan 2.2 A14B",
  "Runway Video Generation",
  "Ideogram V3",
  "Imagen 4",
  "Midjourney API",
  "4o Image",
  "Flux Kontext",
  "Topaz Video Upscaler",
  "Suno API",
  "ElevenLabs Text to Speech",
  "ElevenLabs Speech to Text",
  "Infinitalk Lip-Sync",
];

type Feature = { icon: React.ElementType; title: string; desc: string };
const FEATURES: Feature[] = [
  { icon: Brain, title: "Текст и логика", desc: "Сценарии, промпты, продающие тексты, ответы бота." },
  { icon: Video, title: "Видео", desc: "Генерация и упаковка видео под маркетплейсы/рекламу." },
  { icon: ImageIcon, title: "Изображения", desc: "Карточки, обложки, креативы, визуал под оффер." },
  { icon: Music, title: "Музыка и SFX", desc: "Музыка, эффекты, обработка и чистка аудио." },
  { icon: Mic, title: "Голос", desc: "TTS/STT, клонирование, реалистичная озвучка." },
  { icon: Wand2, title: "Липсинк/аватары", desc: "Оживление лица под голос и говорящие аватары." },
  { icon: Layers, title: "Воронка", desc: "Лендинг → Telegram → оплата → выдача доступа/результата." },
];

const CURRICULUM = [
  { day: "Старт", title: "Запуск основы", desc: "Поднимаем сайт на Timeweb и связываем с Telegram." },
  { day: "Настройка", title: "Упаковка продукта", desc: "Чтобы человек сразу понял: что это, зачем, куда нажимать." },
  { day: "Системность", title: "Модели и режимы", desc: "Какие нейронки, какие параметры, что поддерживает text/img/video." },
  { day: "Монетизация", title: "Тарифы и оплатa", desc: "Прайс, CTA, выдача. Структура, которая реально продаёт." },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-white/90">
      {children}
    </span>
  );
}

function ButtonPrimary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-slate-950
                 bg-gradient-to-r from-primary via-fuchsia-500 to-accent hover:opacity-95 transition"
    >
      {children}
      <ArrowRight size={18} />
    </a>
  );
}

function ButtonGhost({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold
                 border border-white/15 bg-white/5 hover:bg-white/10 transition"
    >
      {children}
    </a>
  );
}

export default function App() {
  const topModels = useMemo(() => AI_MODELS.slice(0, 18), []);

  return (
    <div className="min-h-screen bg-dark text-slate-50">
      <div className="bg-noise" />

      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
              Ferixdi AI
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a className="hover:text-white" href="#features">Возможности</a>
            <a className="hover:text-white" href="#models">Модели</a>
            <a className="hover:text-white" href="#pricing">Тарифы</a>
          </div>
          <a
            href={AUTHOR_TELEGRAM}
            className="px-4 py-2 rounded-lg bg-white/8 border border-white/12 hover:bg-white/12 transition text-sm font-semibold"
          >
            Написать
          </a>
        </div>
      </nav>

      <header className="pt-28 pb-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2">
            <Chip>42 нейросети</Chip>
            <Chip>Telegram-бот</Chip>
            <Chip>Запуск на Timeweb</Chip>
            <Chip>Без заморочек</Chip>
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.02] tracking-tight">
            Нормальный сайт, который объясняет оффер и ведет в Telegram
          </h1>

          <p className="mt-4 text-lg text-white/80 max-w-3xl leading-relaxed">
            У тебя будет витрина: что ты делаешь, какие режимы генерации поддерживаешь, какие нейросети внутри,
            и куда человеку нажать, чтобы получить результат.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonPrimary href={AUTHOR_TELEGRAM}>Запустить со мной</ButtonPrimary>
            <ButtonGhost href="#pricing">Посмотреть тарифы</ButtonGhost>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "Понятный UX", d: "Кнопки и секции сделаны так, чтобы человек не тупил." },
              { t: "Быстрый деплой", d: "Vite билд в dist и раздача статикой на Timeweb." },
              { t: "Готово к продажам", d: "CTA, тарифы, оплата, лид сразу в Telegram." },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="font-extrabold">{x.t}</div>
                <div className="mt-2 text-white/80 leading-relaxed">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="px-4 pb-16">
        <section id="features" className="container mx-auto py-10">
          <h2 className="text-3xl font-extrabold">Возможности</h2>
          <p className="mt-3 text-white/80 max-w-3xl leading-relaxed">
            Здесь ты показываешь, что бот умеет: текст, фото, видео, голос, липсинк. Всё в одном стиле.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl grid place-items-center bg-primary/20 border border-primary/25">
                      <Icon size={20} />
                    </div>
                    <div className="font-extrabold">{f.title}</div>
                  </div>
                  <div className="mt-3 text-white/80 leading-relaxed">{f.desc}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="models" className="container mx-auto py-10">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl font-extrabold">Модели (витрина)</h2>
              <p className="mt-3 text-white/80 max-w-3xl leading-relaxed">
                Список можно расширять. Главное: пользователь видит, что внутри реально много всего.
              </p>
            </div>
            <a href={AUTHOR_TELEGRAM} className="text-sm font-semibold text-white/85 hover:text-white">
              Хочу полный список →
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex flex-wrap gap-2">
              {topModels.map((m) => (
                <span key={m} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/85">
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-4 text-sm text-white/60">
              Примечание: в боте можно сделать фильтры по типу (видео/фото/аудио), режимам и параметрам.
            </div>
          </div>
        </section>

        <section className="container mx-auto py-10">
          <h2 className="text-3xl font-extrabold">План запуска</h2>
          <p className="mt-3 text-white/80 max-w-3xl leading-relaxed">
            Чтобы всё было “ультра-четко”: структура, кнопки, и чтобы ты понимал что дальше улучшать.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {CURRICULUM.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs text-white/60">{s.day}</div>
                <div className="mt-2 font-extrabold">{s.title}</div>
                <div className="mt-2 text-white/80 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="container mx-auto py-10">
          <h2 className="text-3xl font-extrabold">Тарифы</h2>
          <p className="mt-3 text-white/80 max-w-3xl leading-relaxed">
            Пример. Можешь поменять на свои пакеты и добавить “под ключ” сценарии.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="font-extrabold text-lg">Старт</div>
                <div className="font-extrabold">0 ₽</div>
              </div>
              <div className="mt-2 text-white/80">
                Поднять сайт на Timeweb и чтобы он вел в Telegram.
              </div>
              <ul className="mt-4 space-y-2 text-white/85">
                {["Готовый лендинг", "CTA кнопки", "Сборка Vite → dist"].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <Check size={18} className="text-accent" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ButtonGhost href={AUTHOR_TELEGRAM}>Хочу старт</ButtonGhost>
              </div>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="font-extrabold text-lg">Настройка / Курс</div>
                <div className="font-extrabold">20 000 ₽</div>
              </div>
              <div className="mt-2 text-white/80">
                Докручиваем в продукт: меню, режимы, монетизация, чтобы оно реально продавало.
              </div>
              <ul className="mt-4 space-y-2 text-white/85">
                {["Упаковка оффера", "UX “куда нажимать”", "Витрина моделей/режимов", "Оплата + выдача"].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <Check size={18} className="text-accent" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ButtonPrimary href={AUTHOR_TELEGRAM}>Хочу докрутить</ButtonPrimary>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="font-extrabold">Картинка оплаты (пример)</div>
            <img
              className="mt-4 w-full max-w-2xl rounded-2xl border border-white/10"
              src={PAYMENT_IMAGE_URL}
              alt="Оплата"
              loading="lazy"
            />
            <div className="mt-3 text-sm text-white/60">
              Можно заменить на твои реквизиты/Want2PayBot (как тебе нужно в системе).
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="text-white/70 text-sm">© {new Date().getFullYear()} Ferixdi AI</div>
          <a className="text-white/80 hover:text-white text-sm" href={AUTHOR_TELEGRAM}>
            {AUTHOR_TELEGRAM}
          </a>
        </div>
      </footer>
    </div>
  );
}
