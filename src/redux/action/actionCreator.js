import { INCREMENT_COUNT, DECREMENT_COUNT } from '../constatns';

export const increment = () => ({
  type: INCREMENT_COUNT
})

export const decrement = () => ({
  type: DECREMENT_COUNT
})