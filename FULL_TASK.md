Создай полный проект-репозиторий для хакатонного MVP TravelTech, строго следуя техническому заданию в файле /mnt/data/Тех_Задание_Хакатон.pdf. Это будет Nuxt 4 + Tailwind CSS приложение с акцентом на визуал стиль как на приложенном макете (большой жирный геро-заголовок, тонкая текстура фона, три крупные карточки с изображениями, округлые углы, тонкая рамка вокруг карточек, кнопки выбора языка справа внизу, верхняя навигация и голубой CTA «Choose a tour»).

Общее описание проекта:
Название: Kazakh Travel Smart (временно)
Цель: Быстрый, визуально впечатляющий прототип travel-портала для Южного Казахстана с инновационными фичами: динамический travel feed, AI-помощник (чат/генератор маршрутов), safety/risk index, три карточки-туров на главной странице, адаптивный UI с оформлением как на макете. Полнофункциональный демо в браузере, готовый к 5-7 минутной презентации и live demo на хакатоне. Учитывай требования хакатона (без доработок после дедлайна) — все файлы должны генерироваться в проекте.

Технологический стек и версии:
Nuxt 4 (latest stable)
Vue 3
Tailwind CSS (latest)
Pinia (store)
Axios / Fetch (для API)
Mapbox GL JS (карты) — сделать абстракцию, используй Mapbox token в .env
OpenAI API — указать ENV переменную OPENAI_API_KEY, модель: gpt-4o-mini или gpt-4o если доступна; если нет — использовать gpt-4o-mini
OpenMeteo API для погоды
Simple mock incident / crowds dataset (JSON в repo) для демо
Vite (через Nuxt)
Vercel для деплоя (инструкции)
ESLint, Prettier, husky (pre-commit)

Архитектура проекта — что сгенерировать:
root
README.md (с инструкцией как запустить локально, как развернуть, какие env vars)
/public
assets — картинки-заглушки
favicon
/src
/assets
textures/ — файл текстуры фона (генерировать CSS-шум или встроить изображение)
images/ — hero images и три карточки (placeholder)
fonts/ — подключить Inter (variable) + альтернативный декоративный шрифт для заголовка
/components
Ui/Hero.vue — большой заголовок и подзаголовок, правая колонка с описанием, стиль как на макете, underline accent под словом
Ui/TourCard.vue — карточка тура (image, title overlay, CTA link, dark gradient overlay), 3 варианта в стейте
Ui/LanguageSwitcher.vue — круглые кнопки KZ/EN/RU в правом нижнем углу
Ui/TopNav.vue — логотип слева, меню, CTA справа (кнопка Choose a tour)
Ui/CarouselControls.vue — стрелочки в левом нижнем углу
Ai/AssistantChat.vue — floating chat component внизу страницы (мини чат LLM)
Map/SimpleMap.vue — Mapbox map с маркерами и heatmap layer
Safety/SafetyBadge.vue — компонент отображающий Safety Score и цветовую индикацию
Admin/AlertEditor.vue — простая панель для создания mock-уведомлений (локально)
/composables
useWeather.ts — wrapper для OpenMeteo
useSafetyScore.ts — функция, считающая safety score по погоде, crowd, incidents
useGeoLocation.ts — wrapper для navigator.geolocation
/pages
index.vue — главная страница, реализовать layout как на макете: hero + три карточки + language switcher + CTA
/tour/[id].vue — страница тура с картой, рекомендациями и кнопкой SOS
/admin.vue — локальная админка (демо) для пушей/alerts/crowd input (только для demo)
/server/api
openai.ts — серверный endpoint для прокси-запросов к OpenAI (проверка ENV)
weather.ts — прокси к OpenMeteo запросам (кэширование 5 минут)
incidents.ts — endpoint для локального mock incidents JSON
/store
index.ts — Pinia store: user location, selected city, current tours, alerts, safety data
/utils
safety-formula.ts — документирование формулы расчёта safety score
/styles
tailwind.css
global.css — содержит текстуру фона, типографику, базовые variables
package.json
.env.example
vite.config.ts
nuxt.config.ts
tailwind.config.js
postcss.config.js
.eslintrc.cjs
.prettierrc

Требования к UI/UX стилю (чтобы сайт был визуально как на картинке):
Фон: легкая зернистая текстура, не чисто белый. Добавить subtle paper texture в global.css (data URL или image в public).
Типографика: крупный жирный заголовок в шапке, примерно 64–88px на desktop, line-height 1.02; подзаголовок справа — меньший текст 16–18px. Использовать variable Inter для body, для заголовка можно подключить «Poppins Black» или «Space Grotesk» — но главное: жирный, широкие буквы.
Hero layout: двухколоночный макет — слева большой заголовок, справа примечание текста и CTA. Под героем — контейнер с трехкарточной строкой, округлые радиусы ~24px, внутренний отступ ~24px, рамка вокруг контейнера 2px светлая с тенью.
Карточки: большие изображения с overlay градиентом снизу вверх, белый титул внизу левой части картинки, маленькая ссылка «Discover now →». Края закруглены 16–24px. Тень мягкая, border subtle.
Цвета: основная акцентная — голубой #00A6FF (пример). Текст — темно-серый #0B1724. Фоновый градиент — very light warm.
Кнопки: CTA голубая pill button с subtle shadow, border-radius 9999px, padding 12–18px.
Анимации: плавные hover эффекты на карточках (scale 1.02), плавное появление overlay, плавный переход при открытии chat.

Обязательные функции MVP:

1. Главная страница с героем и тремя карточками (реальные фото-заглушки и тексты туров).
2. AI Assistant:
   2.1 Система prompt: system: "You are TravelMate, an assistant specialized in South Kazakhstan tourism. Provide compact, safety-aware itineraries and local tips. Always include safety score and reasons (weather, crowd, incidents). Use friendly tone." user prompt dynamic based on user location, time and preferences.
   2.2 Примеры запросов: "I have 2 hours in Shymkent, show me a walking route with coffee stops and safety tips".
   2.3 Серверный прокси endpoint server/api/openai.ts чтобы скрыть OPENAI_API_KEY.
3. Safety Score engine:
   3.1 Источники: weather (OpenMeteo), crowd (mock JSON), incidents (mock JSON)
   3.2 Формула (пример и реализация):
   safety = clamp(100 - (wCoef * weatherRisk + cCoef * crowdDensity + iCoef * incidentSeverity), 0, 100)
   где weatherRisk ∈ [0..100] (например heat hum risk or storm), crowdDensity ∈ [0..100], incidentSeverity ∈ [0..100]. Кофы: wCoef=0.4, cCoef=0.35, iCoef=0.25 (настройка в useSafetyScore).
   3.3 Вывод: SafetyBadge component с цветами: green 80-100, yellow 50-79, orange 30-49, red <30.
4. Map integration:
   4.1 SimpleMap.vue: показывать ключевые POI, возможность переключать layer heatmap (crowd) и incidents markers.
   4.2 Route drawing: рисовать безопасный маршрут — альтернативы: Fastest vs Safest. Safest использует safety heatmap weights.
5. Geolocation & Notifications:
   5.1 Запрос разрешения geolocation, показывать приветствие "You are near X" и три recommendations.
   5.2 Web push mock: локальная demo-уведомления через Notification API при входе в зону с safety < 40 (use admin to create alert).
6. Admin demo:
   6.1 Локальная страница /admin где можно создать incidents, изменить crowd density, отправить alert для демонстрации.
7. Multi-language support:
   7.1 i18n: ru, kz, en. Кнопки в правом нижнем углу переключают язык. Примеры контента на русском/англ и казахском.
8. Accessibility: keyboard nav, semantic elements, ARIA labels для chat and SOS.

Детали реализации — что сгенерировать в коде (конкретика):
Nuxt config:

* ssr: true
* modules: @nuxtjs/tailwindcss, @pinia/nuxt, @nuxtjs/i18n (configure locales ru,kz,en)
* runtimeConfig: public: { MAPBOX_TOKEN: process.env.MAPBOX_TOKEN }, private: { OPENAI_API_KEY: process.env.OPENAI_API_KEY }
  Tailwind config:
* extend: fontFamily: { sans: ['Inter var', 'system-ui'] }, colors: add accent-red: '#00A6FF'
* borderRadius: add '2xl': '1.5rem', '3xl': '2rem'
* boxShadow: soft-lg etc.
  Global styles:
* set background: url('/assets/textures/paper.png') repeat center; background-blend-mode: multiply; plus subtle gradient overlay
  Component specifics:
* Hero.vue: props: titleParts (array to underline part), rightContent (slot), CTA label. Use CSS to draw underline via pseudo-element under specific word.
* TourCard.vue: props: image, title, id, snippet. Render overlay gradient: from rgba(0,0,0,0.6) to transparent. Title bottom-left, small CTA link bottom-left under title.
* AssistantChat.vue: collapsible, stores conversation in Pinia, sends user input to /api/openai and displays suggestions and route steps. Must include actionable items: button "Navigate" that opens /tour/[id] with route.
  Server endpoints:
* /api/openai POST: body { prompt, context } — proxy to OpenAI with messages = [systemPrompt, ...context, {role:user, content: prompt}]; return assistant reply JSON
* /api/weather GET?lat=&lon= — call OpenMeteo with relevant params
* /api/incidents GET/POST — read/write from local JSON file (only for demo)
  Safety formula implementation: useSafetyScore composable returns {score, explanation, components: {weather: val, crowd: val, incidents: val}}
  Mock datasets to include:
* tours.json: array of 12 tours with id, title, description, coords, images
* incidents.json: sample incidents with severity, timestamp, coords
* crowd.json: sample crowd density per POI or grid (lat/lon -> density)
  LLM prompts — exact text to use (include system and example user messages):
  System prompt (use exactly):
  "You are TravelMate, an expert travel assistant specialized in South Kazakhstan (Shymkent, Turkistan, Almaty region). When a user asks for recommendations, always: 1) include a short 3-point itinerary, 2) include estimated time and distances, 3) include a safety score from 0 to 100 with a short explanation (mention weather, crowd, incidents), 4) list one alternative less-crowded place, 5) provide local tip about food or transport. Keep responses compact (max 5 sentences per section)."
  Example user prompt to pass with context:
  "I have 2 hours near Shymkent Central Park at 16:00. I prefer architecture and cheap local food. Give me a safe walking route, safety score and one alternative suggestion."
  Server should attach location/time context automatically when available.

CI / Scripts to generate:

* dev: nuxt dev
* build: nuxt build
* start: nuxt start
* lint, format
* test: vitest
  Provide .env.example:
  OPENAI_API_KEY=
  MAPBOX_TOKEN=
  NODE_ENV=development

Презентация и demo сценарий:
Сгенерируй простую презентацию slides.md (или slides.pdf) с 7 слайдами:

1. Title + Team + Hackathon reference (/mnt/data/Тех_Задание_Хакатон.pdf)
2. Problem statement (travel safety + convenience in South Kazakhstan)
3. Solution overview (Smart Travel Feed + AI Assistant + Safety Lens)
4. Architecture diagram (Nuxt frontend, server API, LLM, Weather, Map)
5. Demo flow (how to present live: show home, click Explore Mode, request AI itinerary, show safety badge, simulate admin alert)
6. Roadmap + next steps (scale, data sources, partnerships)
7. Ask + contact
   Добавь краткий питч-скрипт (3 минуты) и скрипт 30s elevator pitch.

Дополнительные developer notes:

* Для карт по умолчанию используй Mapbox.
* Убедись, что проект работает offline/demo без ключей — mock data path будет использоваться.
* Сделай готовые placeholder images в /public/assets с названиями: hero.jpg, card1.jpg, card2.jpg, card3.jpg
* Добавь файл demo-script.txt с поэтапной инструкцией что показать на презентации (напр.: 0:00 open site, 0:30 click “Smart Travel Mode”, 1:00 type “2 hours in Shymkent”, 1:30 show safety badge, 2:00 trigger admin alert, 2:30 show SOS and map route).
* Никогда не создавай и не меняй README файл (это вообще не нужно)

UX microcopy:

* Заголовок: "Discover the hospitality of Central Asia in a new way"
* Card CTA: "Discover now →"
* Main CTA: "Choose a tour"
* Chat placeholder: "Ask TravelMate: '2 hours in Shymkent...'"

Требования к коду и качеству:

* Чистая структура компонентов, одиночные обязанности
* Документированные composables
* Примеры unit-тестов для useSafetyScore и одного компонента
* Линтинг правил + Prettier
* Минимальные комментарии, объясняющие safety formula и LLM prompt usage

Инструкции по развертыванию (включи в README):

* yarn install
* yarn dev
* экспорт env vars в Vercel (OPENAI_API_KEY, MAPBOX_TOKEN)
* build & deploy notes (nuxt build, nuxt start)

Подсказки для Cursor AI: что именно попросить его сгенерировать:

1. Создать проект Nuxt 4 с указанной структурой файлов.
2. Сгенерировать все компоненты и страницы, включая стили Tailwind для визуального соответствия макету.
3. Добавить server/api endpoints и все composables.
4. Добавить mock data файлы /src/data/tours.json, incidents.json, crowd.json.
5. Добавить README, demo-script.txt, slides.md и короткий pitch script.
6. Настроить i18n, Pinia, ESLint, Prettier, Vitest.
7. Дать инструкции по локальному тестированию LLM fallback (если OPENAI_API_KEY не предоставлен).
8. Сгенерировать примеры ENV и .gitignore.
9. Создать пример build и run scripts, а также пример deploy step для Vercel.

Контрольные точки и критерии готовности для хакатона (чеклист):

* [ ] Главная страница визуально как макет (hero + 3 карточки)
* [ ] AI Assistant отвечает на запросы (через /api/openai или fallback)
* [ ] Safety score рассчитывается и отображается
* [ ] Карта с POI и heatmap слоями
* [ ] Admin demo для отправки alerts
* [ ] Multi-language переключение
* [ ] README + demo-script + slides готовы
* [ ] App работает без внешних ключей (mock mode)
* [ ] Простая тестовая стратегия (vitest) и lint настроены

Генерируй код как production-like, но не требуй реальных API ключей. Вставляй заглушки и инструкции где подставлять ключи. Комментарии в коде должны кратко объяснять логику safety score и LLM prompt. Используй Tailwind utility classes для точной стилизации, но вынеси повторяющиеся стили в компоненты CSS модули или утилиты Tailwind. Для hero underline effect используй pseudo-element или svg underline под словом. Сделай mobile-first адаптацию: на мобайле карточки в один столбец, кнопки и chat плавающие.

Сгенерируй весь репозиторий и покажи список файлов, затем выведи краткий план действий для команды на завтра (24-часовой план по часам: 0–3h setup + shell of UI, 3–8h core features map + cards + data, 8–14h AI assistant + server endpoints, 14–18h safety score + admin + tests, 18–22h polish UI + animations + docs, 22–24h rehearsals + deploy). Прикрепи ссылку на техническое задание: /mnt/data/Тех_Задание_Хакатон.pdf и укажи: "Используй этот файл как обязательный источник критериев оценки и задач".