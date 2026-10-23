---
theme: default
title: Про гильдию фронтендеров в Магните
colorSchema: light
aspectRatio: 16/9
canvasWidth: 1280
fonts:
  provider: none
htmlAttrs:
  lang: ru
defaults:
  layout: default
class: title-slide
---

# Про гильдию<br>фронтендеров<br>в Магните

---
class: speaker-slide
---

# Я:

<ul class="speaker-facts">
  <li>Пожилой человек</li>
  <li>Лидер фронтенд гильдии<br>в Магните</li>
  <li>Раскладываю йогурты<br>в Магните</li>
</ul>

<img class="speaker-portrait" src="/speaker-kung-fu.jpg" alt="Евгений Федосеев" />

---
clicks: 2
class: guild-images-slide
---

# Что за гильдия?

<div class="guild-images">
  <img v-show="$clicks === 0" src="/guild-store.png" alt="Магазин «Гильдия — Алкомаркет»" />
  <img v-show="$clicks === 1" src="/guild-game.png" alt="Обложка игры «Гильдия 2»" />
  <img v-show="$clicks >= 2" src="/guild-raid.png" alt="Совместный рейд в World of Warcraft" />
</div>

---
class: mission-slide
---

# Гильдия в Магните:

<p class="guild-mission">Создать и развивать <strong>лучшую на рынке экосистему разработки</strong> для всех команд.</p>

<div class="mission-cards">
  <section class="mission-card mission-card-blue">
    <h2>Взаимодействие</h2>
    <ul>
      <li>Снижать порог входа для взаимодействия команд друг с другом.</li>
    </ul>
  </section>
  <section class="mission-card mission-card-green">
    <h2>Лучшие технологии</h2>
    <ul>
      <li>Производительность.</li>
      <li>Отказоустойчивость.</li>
      <li>Эксплуатация сервисов.</li>
    </ul>
  </section>
</div>

---
class: real-mission-slide
---

# Реальная миссия

<div class="real-mission-columns">
  <section>
    <h2>сообщество</h2>
    <img class="real-mission-photo" src="/guild-community.jpg" alt="Участники фронтенд-гильдии вместе на конференции" />
  </section>
  <section>
    <h2>бызнес</h2>
    <img class="real-mission-photo" src="/guild-business.png" alt="Кабан выглядывает из-за дерева" />
  </section>
</div>

---
class: section-slide
---

# Матрица<br>компетенций

---
class: competency-slide
---

<CompetencyGame />

---
class: initiatives-slide
---

# Инициативы

<p class="initiative-definition">Когда «кто-нибудь сделает»<br>превращается в <strong>«ладно, я».</strong></p>

<p class="initiative-invitation">Предложить и внедрить может каждый. Да, ты тоже.</p>

---
class: initiative-flow-slide
---

# От идеи до стандарта

<ol class="initiative-flow" aria-label="Путь инициативы">
  <li class="flow-idea"><span>Идея</span></li>
  <li class="flow-team"><span>Обсуждение<br>в команде</span></li>
  <li class="flow-guild"><span>Обсуждение<br>в гильдии</span></li>
  <li class="flow-proposal"><span>Пропозал<br>в гильдии</span></li>
  <li class="flow-adr"><span>ADR</span></li>
  <li class="flow-standard"><span>Стандарт<br>MAGNIT TECH</span></li>
</ol>

---
clicks: 4
class: real-problems-slide
---

# Реальные проблемы

<ul class="problem-list" :class="{ 'is-dismissed': $clicks >= 4 }">
  <li v-click="1"><span>Организация онбординга и найма</span></li>
  <li v-click="2"><span>Стандарты использования ИИ</span></li>
  <li v-click="3"><span>Обмен знаниями между командами</span></li>
</ul>

<p v-click="4" class="mascot-priority">Выбор маскота</p>

---
clicks: 3
class: community-mascots-slide
---

# Маскот гильдии

<p class="community-mascots-subtitle">Предложения от сообщества</p>

<div class="community-mascot-cards">
  <figure v-click="1" class="community-mascot-card">
    <img src="/paketych.png" alt="Пакетыч — персонаж в виде пакета Магнита" />
    <figcaption>Пакетыч</figcaption>
  </figure>
  <figure v-click="2" class="community-mascot-card">
    <img src="/rooster-developer.png" alt="Петух от народа за ноутбуком" />
    <figcaption>Петух от народа</figcaption>
  </figure>
  <figure v-click="3" class="community-mascot-card">
    <img src="/lorana.png" alt="Зелёная лягушка" />
    <figcaption>Лягушка</figcaption>
  </figure>
</div>

---
clicks: 3
class: mascot-slide
---

# Три кандидата

<div class="mascot-cards">
  <div
    v-for="number in 3"
    :key="number"
    class="mascot-card"
    :class="{ 'is-revealed': $clicks >= number }"
    role="group"
    :aria-label="$clicks >= number ? `Вариант маскота ${number}` : `Маскот ${number}: скрыт`"
  >
    <span v-if="$clicks < number" class="mascot-question" aria-hidden="true">?</span>
    <template v-else>
      <img v-if="number === 1" class="mascot-photo" src="/mascot-red-panda.png" alt="Концепт-арт: красная панда в кимоно" />
      <img v-else-if="number === 2" class="mascot-photo" src="/mascot-panda.png" alt="Концепт-арт: панда в кимоно" />
      <img v-else class="mascot-photo" src="/mascot-rooster.png" alt="Концепт-арт: петух в очках и футболке MAGNIT TECH" />
    </template>
  </div>
</div>

---
class: election-slide
---

# Три дня выборов

<div class="election-content">
  <ul class="election-facts">
    <li>Три дня выборов</li>
    <li>Все регионы России</li>
    <li>Два кандидата:<br>лиса и петух</li>
  </ul>
  <img class="election-image" src="/mascot-ballot.png" alt="Бюллетень выборов маскота гильдии с двумя кандидатами: петух и лиса" />
</div>

---
clicks: 1
class: election-results-slide
---

# Результаты выборов

<div class="election-content">
  <div class="election-result-copy">
    <p>Первые два дня уверенно побеждал кандидат от народа.</p>
    <p v-click="1" class="election-result-turn">В последний день — явка <strong>99%</strong> в республиках Северного Кавказа.<br><strong class="election-winner">Победила лиса.</strong></p>
  </div>
  <div class="election-result-images">
    <img v-show="$clicks === 0" class="election-image" src="/mascot-rooster.png" alt="Кандидат от народа — петух" />
    <img v-show="$clicks >= 1" class="election-image" src="/mascot-red-panda.png" alt="Победила лиса" />
  </div>
</div>

---
class: election-joke-slide
---

# Шутка

<div class="election-content">
  <h2 class="election-joke-subtitle">Победил петух.</h2>
  <img class="election-image" src="/mascot-rooster.png" alt="Настоящий победитель выборов маскота — петух" />
</div>

---
class: guild-life-slide
---

<h1>Наши посты<br>в гильдии<br>выглядят вот так</h1>

<img class="guild-life-photo" src="/guild-post.png" alt="Пост фронтенд-гильдии: петух в очках собирает инициативы на Q4" />

---
class: guild-life-slide
---

<h1>Наш флаг<br>выглядит вот так</h1>

<img class="guild-life-photo" src="/guild-flag.jpg" alt="Участники гильдии держат футболку с красным петухом" />

---
class: guild-life-slide
---

<h1>Наши мемы<br>выглядят вот так</h1>

<img class="guild-life-photo" src="/guild-meme.jpg" alt="Мем гильдии: новость о лисе, которая украла петуха на ВДНХ" />

---
class: guild-finale-slide
---

<h1>Были каждый сам за себя.<br>Стали <span class="finale-guild-accent">гильдией.</span></h1>

<div class="finale-panels">
  <section class="finale-before">
    <h2>Дикие коты</h2>
    <div class="finale-scattered-cats" role="img" aria-label="Коты шипят друг на друга из разных углов">
      <span>😾</span><span>🙀</span><span>😾</span>
    </div>
    <p>Шипели. Дрались. Сидели по углам.</p>
  </section>
  <section class="finale-after">
    <h2>Одна пожилая гильдия</h2>
    <div class="finale-together-cats" role="img" aria-label="Коты собрались вместе в одну команду">
      <span>😺</span><span>😺</span><span>😺</span>
    </div>
    <p>Свобода, равенство, братство.</p>
  </section>
</div>

<blockquote class="finale-message">«По одному — шипим, <strong>вместе — кукарекаем</strong>»</blockquote>
