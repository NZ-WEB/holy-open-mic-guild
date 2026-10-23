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
    <div class="photo-placeholder" role="img" aria-label="Место для будущего фото сообщества"></div>
  </section>
  <section>
    <h2>бызнес</h2>
    <div class="photo-placeholder" role="img" aria-label="Место для будущего фото бизнеса"></div>
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
class: mascot-slide
---

# Маскот гильдии

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
clicks: 1
class: closing-slide
---

<div class="closing-copy">
  <h1>Я просто хотел<br>быть главным</h1>
  <p class="closing-intention">и важно поправлять причёску<br>на звонках.</p>
  <p v-click="1" class="closing-punchline">В итоге так и вышло.</p>
</div>

<img class="closing-photo" src="/hair-on-calls.jpg" alt="Евгений Федосеев поправляет причёску, сидя в кресле" />
