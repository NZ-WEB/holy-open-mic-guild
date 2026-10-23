<script setup lang="ts">
import { reactive } from 'vue'

interface GameCard {
  id: string
  price: number
  answer: string
  detail: string
  icon?: string
}

const cards: GameCard[] = [
  { id: 'burned-out', price: 450, answer: 'Выгоревший сеньор', detail: 'Просто зарплата пока джунская.' },
  { id: 'confident', price: 200, answer: 'Уверенный мидл', detail: '«Тут на пару часов».' },
  { id: 'archaeologist', price: 600, answer: 'Археолог легаси', detail: 'Помнит, зачем тут этот if.' },
  { id: 'fresh', price: 80, answer: 'Свежий джун', detail: 'Ещё предлагает всё переписать.' },
  { id: 'wolf', price: 250, answer: 'Хитрый волк', detail: 'Знает, когда уйти в отпуск.', icon: '🐺' },
  { id: 'enlightened', price: 300, answer: 'Просветлённый сеньор', detail: 'Удалил код. Закрыл задачу.', icon: '🚜' },
]

const openedCards = reactive(new Set<string>())

function toggleCard(id: string) {
  if (openedCards.has(id))
    openedCards.delete(id)
  else
    openedCards.add(id)
}
</script>

<template>
  <div class="competency-game">
    <div class="game-board" role="group" aria-label="Игровая матрица компетенций">
      <button
        v-for="card in cards"
        :key="card.id"
        type="button"
        class="game-card"
        :class="{ 'is-open': openedCards.has(card.id) }"
        :aria-expanded="openedCards.has(card.id)"
        :aria-label="`Карточка за ${card.price}. ${openedCards.has(card.id) ? 'Закрыть' : 'Открыть'} карточку`"
        @click.stop="toggleCard(card.id)"
        @keydown.enter.stop
        @keydown.space.stop
        @keyup.enter.stop
        @keyup.space.stop
      >
        <template v-if="openedCards.has(card.id)">
          <span class="card-denomination">{{ card.price }}</span>
          <span class="card-answer"><span v-if="card.icon" aria-hidden="true">{{ card.icon }} </span>{{ card.answer }}</span>
          <span class="card-detail">{{ card.detail }}</span>
        </template>
        <span v-else class="card-price">{{ card.price }}</span>
      </button>
    </div>
    <div class="game-footer">
      <button type="button" class="game-reset" @click.stop="openedCards.clear()">Закрыть все</button>
    </div>
  </div>
</template>

<style scoped>
.competency-game {
  --game-bg: #152b7b;
  --game-card-bg: #1c3694;
  --game-gold: #ffe17a;
  width: 100%;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  padding: 10px;
  border-radius: 14px;
  background: var(--game-bg);
}

.game-card {
  position: relative;
  display: flex;
  width: 100%;
  height: 220px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 26px 18px 18px;
  border: 1px solid #3852a6;
  border-radius: 6px;
  background: var(--game-card-bg);
  color: #fff;
  font-family: inherit;
  text-align: center;
  cursor: pointer;
  transition: background-color 140ms ease, border-color 140ms ease;
}

.game-card:hover,
.game-card:focus-visible {
  border-color: var(--game-gold);
  background: #2442aa;
}

.game-card:focus-visible,
.game-reset:focus-visible {
  outline: 3px solid var(--game-gold);
  outline-offset: 2px;
}

.game-card.is-open {
  background: #112363;
}

.card-price {
  color: var(--game-gold);
  font-size: 72px;
  font-weight: 700;
  line-height: 1;
}

.card-denomination {
  position: absolute;
  top: 10px;
  right: 12px;
  color: var(--game-gold);
  font-size: 16px;
  line-height: 1;
}

.card-answer {
  max-width: 100%;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.6px;
}

.card-detail {
  color: #d6dffb;
  font-size: 21px;
  font-weight: 400;
  line-height: 1.2;
}

.game-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 18px;
  color: var(--deck-secondary);
  font-size: 20px;
  line-height: 1.3;
}

.game-reset {
  padding: 5px 0 5px 12px;
  border: 0;
  background: transparent;
  color: var(--deck-secondary);
  font: inherit;
  cursor: pointer;
}

.game-reset:hover {
  color: var(--deck-ink);
}

@media (prefers-reduced-motion: reduce) {
  .game-card {
    transition: none;
  }
}
</style>
