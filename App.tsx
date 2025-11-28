import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Boxes,
  Check,
  ChevronDown,
  Copy,
  CreditCard,
  Flame,
  Layers,
  ShieldCheck,
  Sparkles,
  Timer,
  Wand2,
} from "lucide-react";

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

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ icon, children }: { icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {icon}
      {children}
    </span>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-extrabold text-slate-950 shadow-soft transition hover:-translate-y-0.5 hover:opacity-95"
    >
      <span>{children}</span>
      <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
    </a>
  );
}

function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 font-extrabold text-white transition hover:bg-white/10"
    >
      {children}
    </a>
  );
}

function Stat({
  top,
  bottom,
  icon,
}: {
  top: string;
  bottom: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-3xl font-extrabold leading-none tracking-tight">{top}</div>
          <div className="mt-2 text-sm text-white/70">{bottom}</div>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
          {icon}
        </div>
      </div>
    </div>
  );
}

function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
        {title}
      </h2>
      {desc ? <p className="mt-3 text-white/75 leading-relaxed">{desc}</p> : null}
    </div>
  );
}

function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow transition hover:-translate-y-0.5 hover:bg-white/10">
      <div className="flex items-center gap-3">
        {icon ? (
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
            {icon}
          </div>
        ) : null}
        <div className="text-lg font-extrabold">{title}</div>
      </div>
      <div className="mt-4 text-white/80 leading-relaxed">{children}</div>
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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          <span className="font-extrabold">{num}</span>
          этап
        </div>
      </div>
      <div className="mt-4 text-xl font-extrabold">{title}</div>
      <div className="mt-1 text-white/80">{subtitle}</div>
      <div className="mt-3 text-white/75 leading-relaxed">{desc}</div>
    </div>
  );
}

function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent" />
      <div className="flex gap-3 px-6 py-6 animate-[marquee_42s_linear_infinite] whitespace-nowrap">
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

function CopyRow({ label, value }: { label: string; value: string }) {
  const [ok, setOk] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setOk(true);
      window.setTimeout(() => setOk(false), 1200);
    } catch {}
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="min-w-0">
        <div className="text-xs text-white/60">{label}</div>
        <div className="truncate font-semibold text-white/90">{value}</div>
      </div>
      <button
        type="button"
        onClick={copy}
        className={cx(
          "shrink-0 inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm font-bold transition",
          ok
            ? "border-emerald-400/30 bg-emerald-500/15 text-emerald-200"
            : "border-white/12 bg-white/5 hover:bg-white/10"
        )}
      >
        {ok ? <Check size={16} /> : <Copy size={16} />}
        {ok ? "Скопировано" : "Копировать"}
      </button>
    </div>
  );
}

function FAQItem({
  q,
  a,
}: {
  q: string;
  a: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 shadow-glow">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <div className="font-extrabold">{q}</div>
        <ChevronDown className={cx("transition", open && "rotate-180")} size={18} />
      </button>
      {open ? (
        <div className="px-6 pb-6 text-white/75 leading-relaxed">{a}</div>
      ) : null}
    </div>
  );
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.05, 0.1, 0.2, 0.35] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids.join("|")]);

  return active;
}

export default function App() {
  const sections = useMemo(
    () => [
      { id: "top", label: "START" },
      { id: "compare", label: "Сравнение" },
      { id: "power", label: "Мощность" },
      { id: "plan", label: "План" },
      { id: "pricing", label: "Инвестиция" },
      { id: "faq", label: "FAQ" },
    ],
    []
  );

  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <div className="relative min-h-screen bg-ink text-white">
      <div className="radial" />
      <div className="bg-noise" />

      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#top" className="font-extrabold tracking-tight">
            START
          </a>

          <div className="hidden md:flex items-center gap-2 text-sm">
            {sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={cx(
                  "rounded-full px-3 py-2 transition",
                  active === s.id ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {s.label}
              </a>
            ))}
          </div>

          <a
            href={AUTHOR_TELEGRAM}
            className="rounded-2xl border border-white/12 bg-white/5 px-4 py-2 text-sm font-bold hover:bg-white/10"
          >
            Написать Дмитрию
          </a>
        </div>
      </div>

      {/* Hero */}
      <header id="top" className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="flex flex-wrap gap-2">
          <Pill icon={<ShieldCheck size={14} />}>СИСТЕМА ОНЛАЙН</Pill>
          <Pill icon={<Timer size={14} />}>СТАРТ В ПОНЕДЕЛЬНИК</Pill>
          <Pill icon={<Wand2 size={14} />}>Без кода</Pill>
          <Pill icon={<Layers size={14} />}>На твоем сервере</Pill>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_.8fr] items-start">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95]">
              ЗАПУСК AI
              <br />
              <span className="shine bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                ИМПЕРИИ
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
              За 7 дней ты развернешь собственную нейро-платформу с 42 моделями.
              <br />
              Без кода. На твоем сервере. Полная свобода.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton href="#pricing">Доступ к курсу</PrimaryButton>
              <GhostButton href="#pricing">Занять место</GhostButton>
              <GhostButton href={AUTHOR_TELEGRAM}>Написать Дмитрию</GhostButton>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Stat top="42" bottom="Нейросетей" icon={<Boxes size={20} />} />
              <Stat top="7 дней" bottom="Запуск за" icon={<Flame size={20} />} />
              <Stat top="05" bottom="Свободных мест" icon={<Sparkles size={20} />} />
              <Stat top="0%" bottom="Навыки кода" icon={<Bot size={20} />} />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-glow">
            <div className="text-sm text-white/70">Быстрый смысл</div>
            <div className="mt-3 text-xl font-extrabold">
              Витрина + бот = идеальная связка
            </div>
            <div className="mt-3 text-white/75 leading-relaxed">
              Сайт аккуратно объясняет оффер и ведет в Telegram. Вся магия генерации происходит внутри.
            </div>

            <div className="mt-5 space-y-3">
              {[
                "Понятная упаковка ценности за 30 секунд",
                "Мгновенный переход в Telegram",
                "Конверсия через ясные CTA",
                "Без лишнего тех. стресса",
              ].map((x) => (
                <div key={x} className="flex items-start gap-2 text-white/80">
                  <BadgeCheck size={18} className="mt-0.5 text-emerald-300" />
                  <span>{x}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-xs text-white/55">
              Подойдет как “визитка”, “прогрев”, “лендинг под запуск”.
            </div>
          </div>
        </div>
      </header>

      {/* Compare */}
      <section id="compare" className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle title="Сайт vs Telegram Бот" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Сайты (Web 2.0)" icon={<Layers size={20} />}>
            <ul className="list-disc pl-5 space-y-2">
              <li>Блокировки и VPN</li>
              <li>Сложный тех. стек (VPS, SSL)</li>
              <li>Дорогая разработка</li>
              <li>Пользователю лень заходить</li>
            </ul>
          </Card>
          <Card title="Telegram Бот" icon={<Bot size={20} />}>
            <ul className="list-disc pl-5 space-y-2">
              <li>Стабильно работает без VPN</li>
              <li>Привычный интерфейс чата</li>
              <li>Мгновенный доступ к аудитории</li>
              <li>Легкая интеграция с платежами</li>
            </ul>
          </Card>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow text-white/80">
          "Вся магия генерации происходит внутри, а сайт можно использовать просто как витрину."
        </div>
      </section>

      {/* Power */}
      <section id="power" className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle
          kicker="МОЩНОСТЬ ПОД КАПОТОМ"
          title="42 Нейросети в одной коробке"
          desc="Мультимодальная архитектура. Твой бот сам понимает, что нужно пользователю: видео, голос или картинка."
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Генерация видео" icon={<Flame size={20} />}>
            Sora, Veo, Kling, Runway — топовые модели для создания видеоконтента.
          </Card>
          <Card title="Создание изображений" icon={<Sparkles size={20} />}>
            Midjourney, Ideogram, Flux — шедевры в один клик.
          </Card>
          <Card title="Улучшение и обработка" icon={<Wand2 size={20} />}>
            Upscale, удаление фона, рефрейминг изображений.
          </Card>
          <Card title="Музыка и звук" icon={<Flame size={20} />}>
            Suno для музыки, ElevenLabs для эффектов и обработки.
          </Card>
          <Card title="Голос и синтез" icon={<Bot size={20} />}>
            Text-to-Speech, клонирование голоса, Speech-to-Text.
          </Card>
          <Card title="Лип-синк и аватары" icon={<Layers size={20} />}>
            Оживление лиц под голос, создание говорящих аватаров.
          </Card>
        </div>

        <div className="mt-10">
          <Marquee items={MODELS} />
        </div>
      </section>

      {/* Plan */}
      <section id="plan" className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle
          title="План захвата за 7 дней"
          desc='Мы пройдем путь от "пустой сервер" до "первая продажа". Архитектура готова. Твоя задача — собрать конструктор по инструкции.'
        />

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
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

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle title="ИНВЕСТИЦИЯ В БУДУЩЕЕ" />

        <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-glow">
          <div className="flex flex-wrap items-end gap-4">
            <div className="text-3xl md:text-4xl font-extrabold line-through text-white/55">
              100 000 ₽
            </div>
            <div className="text-4xl md:text-5xl font-extrabold">15 000 ₽</div>
          </div>
          <div className="mt-4 text-white/75 leading-relaxed">
            Полный комплект: Сервер + Бот + Обучение + Маркетинг.
            <br />
            Цена ниже рынка, потому что я собираю портфолио успешных кейсов.
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="font-extrabold">1</span> СТАРТ
            </div>
            <div className="mt-3 text-3xl font-extrabold">7 500 ₽</div>
            <div className="mt-3 text-white/75 leading-relaxed">
              Предоплата для бронирования места. Фиксируем участие, начинаем подготовку сервера.
            </div>
          </div>

          <div className="rounded-3xl border border-fuchsia-400/25 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-glow">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="font-extrabold">2</span> РЕЗУЛЬТАТ
            </div>
            <div className="mt-3 text-3xl font-extrabold">7 500 ₽</div>
            <div className="mt-3 text-white/75 leading-relaxed">
              Оплата только после запуска. Ты видишь, что бот работает и приносит пользу.
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <div className="font-extrabold">Реквизиты</div>
              <div className="mt-2 text-white/75">Дмитрий</div>
              <div className="mt-4 text-white/75">
                Гарантия возврата: Бот не заработал — деньги назад.
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <PrimaryButton href={AUTHOR_TELEGRAM}>Написать Дмитрию</PrimaryButton>
                <GhostButton href="#top">Вернуться вверх</GhostButton>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/60">Быстро скопировать</div>
              <div className="mt-4 space-y-3">
                <CopyRow label="Контакт" value="Дмитрий" />
                <CopyRow label="Telegram" value={AUTHOR_TELEGRAM} />
              </div>
              <div className="mt-4 text-xs text-white/55">
                Можно вставить реквизиты сюда же, если нужно.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle
          title="FAQ"
          desc="Короткие ответы на частые вопросы. Чтобы пользователь не зависал и быстрее нажал нужную кнопку."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <FAQItem
            q="Это реально без кода?"
            a="Да. Все собирается по инструкции: разворачиваем основу, вставляем ключи, активируем нужные режимы."
          />
          <FAQItem
            q="Где происходит генерация?"
            a="Внутри Telegram-бота. Сайт работает как витрина и быстро объясняет ценность."
          />
          <FAQItem
            q="Сколько времени занимает запуск?"
            a="План рассчитан на 7 дней: от пустого сервера до первых денег."
          />
          <FAQItem
            q="Что, если не получится?"
            a="Есть гарантия возврата: бот не заработал — деньги назад."
          />
        </div>
      </section>

      {/* Sticky CTA bar */}
      <div className="fixed bottom-4 left-0 right-0 z-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-white/10 bg-ink/60 backdrop-blur shadow-glow px-4 py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="text-sm text-white/80">
              <span className="font-extrabold">Старт в понедельник.</span>{" "}
              Успей занять одно из <span className="font-extrabold">05</span> мест.
            </div>
            <div className="flex flex-wrap gap-2">
              <PrimaryButton href="#pricing">Занять место</PrimaryButton>
              <GhostButton href={AUTHOR_TELEGRAM}>Написать</GhostButton>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-white/60">
          START
        </div>
      </footer>
    </div>
  );
}
