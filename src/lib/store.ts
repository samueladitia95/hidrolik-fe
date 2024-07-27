import { writable, type Writable } from 'svelte/store';

export const isTopbarTransparent: Writable<boolean> = writable(false);
