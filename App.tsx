import React from "react";

const AUTHOR_TELEGRAM = "https://t.me/dmitriy_ferixdi";

const MODELS = [
  "Google Nano Banana Pro",
  "ByteDance Seedance 1.0 Pro Fast",
  "Grok Grok Imagine",
  "Hailuo 2.3",
  "Sora 2 Pro Storyboard",
  "Veo 3.1",
  "Sora 2 Pro",
  "Sora 2 Watermark Remove API",
  "Veo 3",
  "Seedance V1",
  "Kling V2.1",
  "Wan V2.2 A14B",
  "Hailuo 02",
  "Wan 2.2 Animate",
  "Kling 2.5 Turbo",
  "Wan 2.5",
  "Topaz Video Upscaler",
  "Wan 2.2 A14B Speech to Video Turbo",
  "Runway Video Generation",
  "Ideogram V3",
  "Imagen 4",
  "Midjourney API",
  "Seedream",
  "NanoBanana‑Gemini 2.5 Flash Image Preview",
  "Qwen Image",
  "Qwen Image Edit",
  "Ideogram Character",
  "4o Image",
  "Flux Kontext",
  "Topaz Image Upscale",
  "Seedream 4.0",
  "Recraft Remove Background",
  "Recraft Crisp Upscale",
  "Ideogram V3 Reframe Image",
  "Sora 2 (доп. режим)",
  "Suno API",
  "ElevenLabs Audio Isolation",
  "ElevenLabs Sound Effect",
  "ElevenLabs Speech to Text",
  "ElevenLabs Text to Speech",
  "Kling AI Avatar",
  "Infinitalk API‑AI Lip‑Sync Generator",
];

function Stat({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-3xl font-extrabold leading-none">{top}</div>
      <div className="mt-2 text-sm text-white/70">{bottom}</div>
    </div>
  );
}

function SectionTitle({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
      {desc ? <p className="mt-3 text-white/75 leading-relaxed">{desc}</p> : null}
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-lg font-extrabold">{title}</div>
      <div className="mt-3 text-white/80 leading-relaxed">{children}</div>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="font-extrabold">{title}</div>
      <div className="mt-2 text-white/75 leading-relaxed">{desc}</div>
    </div>
  );
}

function Step({
  num,
  title,
  subtitle,
  desc,
}: {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-xs text-white/60">{num}</div>
      <div className="mt-2 text-lg font-extrabold">{title}</div>
      <div className="mt-1 text-white/80">{subtitle}</div>
      <div className="mt-3 text-white/75 leading-relaxed">{desc}</div>
    </div>
  );
}

function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent" />
      <div className="flex gap-3 px-6 py-5 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
        {doubled.map((m, i) => (
          <span
            key={`${m}-${i}`}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/85"
          >
            {m}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <div className="font-extrabold tracking-tight">START</div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/75">
            <a href="#compare" className="hover:text-white">Сайт vs Telegram Бот</a>
            <a href="#power" className="hover:text-white">Мощность</a>
            <a href="#plan" className="hover:text-white">План</a>
            <a href="#pricing" className="hover:text-white">Инвестиция</a>
          </div>
          <a
            href={AUTHOR_TELEGRAM}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold hover:bg-white/10"
          >
            Написать Дмитрию
          </a>
        </div>
      </div>

      <header className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="text-sm text-white/70">СИСТЕМА ОНЛАЙН • СТАРТ В ПОНЕДЕЛЬНИК</div>

        <h1 className="mt-5 text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95]">
          ЗАПУСК AI
          <br />
          ИМПЕРИИ
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
          За 7 дней ты развернешь собственную нейро-платформу с 42 моделями.
          <br />
          Без кода. На твоем сервере. Полная свобода.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#pricing" className="rounded-xl bg-white text-slate-950 px-5 py-3 font-extrabold hover:opacity-95">
            Доступ к курсу
          </a>
          <a href="#pricing" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-extrabold hover:bg-white/10">
            Занять место
          </a>
          <a href={AUTHOR_TELEGRAM} className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-extrabold hover:bg-white/10">
            Написать Дмитрию
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat top="42" bottom="Нейросетей" />
          <Stat top="7 дней" bottom="Запуск за" />
          <Stat top="05" bottom="Свободных мест" />
          <Stat top="0%" bottom="Навыки кода" />
        </div>
      </header>

      <section id="compare" className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle title="Сайт vs Telegram Бот" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Сайты (Web 2.0)">
            <ul className="list-disc pl-5 space-y-2">
              <li>Блокировки и VPN</li>
              <li>Сложный тех. стек (VPS, SSL)</li>
              <li>Дорогая разработка</li>
              <li>Пользователю лень заходить</li>
            </ul>
          </Card>

          <Card title="Telegram Бот">
            <ul className="list-disc pl-5 space-y-2">
              <li>Стабильно работает без VPN</li>
              <li>Привычный интерфейс чата</li>
              <li>Мгновенный доступ к аудитории</li>
              <li>Легкая интеграция с платежами</li>
            </ul>
          </Card>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
          "Вся магия генерации происходит внутри, а сайт можно использовать просто как витрину."
        </div>
      </section>

      <section id="power" className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle
          kicker="МОЩНОСТЬ ПОД КАПОТОМ"
          title="42 Нейросети"
          desc="В одной коробке. Мультимодальная архитектура. Твой бот сам понимает, что нужно пользователю: видео, голос или картинка."
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Feature title="Генерация видео" desc="Sora, Veo, Kling, Runway — топовые модели для создания видеоконтента." />
          <Feature title="Создание изображений" desc="Midjourney, Ideogram, Flux — шедевры в один клик." />
          <Feature title="Улучшение и обработка" desc="Upscale, удаление фона, рефрейминг изображений." />
          <Feature title="Музыка и звук" desc="Suno для музыки, ElevenLabs для эффектов и обработки." />
          <Feature title="Голос и синтез" desc="Text-to-Speech, клонирование голоса, Speech-to-Text." />
          <Feature title="Лип-синк и аватары" desc="Оживление лиц под голос, создание говорящих аватаров." />
        </div>

        <div className="mt-10">
          <Marquee items={MODELS} />
        </div>
      </section>

      <section id="plan" className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle
          title="План захвата за 7 дней"
          desc='Мы пройдем путь от "пустой сервер" до "первая продажа". Архитектура готова. Твоя задача — собрать конструктор по инструкции.'
        />

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="font-extrabold">Бонус: Маркетинг</div>
          <div className="mt-2 text-white/75 leading-relaxed">
            Научу считать юнит-экономику, чтобы продавать генерации в 3 раза дороже себестоимости. Трафик: TG, Shorts, Взаимопиар.
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Step
            num="1"
            title="Старт"
            subtitle="Установка основы"
            desc="Разворачиваем бота на твоем сервере. Вставляем ключи в готовый шаблон."
          />
          <Step
            num="2"
            title="Настройка"
            subtitle="Подключение нейросетей"
            desc="Активируем нужные из 42 моделей. Выбираем режимы под твою нишу."
          />
          <Step
            num="3"
            title="Бизнес"
            subtitle="Монетизация и трафик"
            desc="Настраиваем тарифы. Разбираем, где брать клиентов и как продавать."
          />
          <Step
            num="4"
            title="Финал"
            subtitle="Первые деньги"
            desc="Готовый продукт, который можно показывать клиентам и принимать оплату."
          />
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle title="ИНВЕСТИЦИЯ В БУДУЩЕЕ" />

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-wrap items-end gap-4">
            <div className="text-3xl md:text-4xl font-extrabold line-through text-white/55">100 000 ₽</div>
            <div className="text-4xl md:text-5xl font-extrabold">15 000 ₽</div>
          </div>
          <div className="mt-4 text-white/75 leading-relaxed">
            Полный комплект: Сервер + Бот + Обучение + Маркетинг.
            <br />
            Цена ниже рынка, потому что я собираю портфолио успешных кейсов.
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xs text-white/60">1</div>
            <div className="mt-2 text-lg font-extrabold">СТАРТ</div>
            <div className="mt-2 text-3xl font-extrabold">7 500 ₽</div>
            <div className="mt-3 text-white/75 leading-relaxed">
              Предоплата для бронирования места. Фиксируем участие, начинаем подготовку сервера.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xs text-white/60">2</div>
            <div className="mt-2 text-lg font-extrabold">РЕЗУЛЬТАТ</div>
            <div className="mt-2 text-3xl font-extrabold">7 500 ₽</div>
            <div className="mt-3 text-white/75 leading-relaxed">
              Оплата только после запуска. Ты видишь, что бот работает и приносит пользу.
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="font-extrabold">Реквизиты</div>
          <div className="mt-2 text-white/75">Дмитрий</div>
          <div className="mt-4 text-white/75">Гарантия возврата: Бот не заработал — деньги назад.</div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={AUTHOR_TELEGRAM} className="rounded-xl bg-white text-slate-950 px-5 py-3 font-extrabold hover:opacity-95">
              Написать Дмитрию
            </a>
            <a href="#compare" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-extrabold hover:bg-white/10">
              Вернуться вверх
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-white/60">START</div>
      </footer>
    </div>
  );
}
