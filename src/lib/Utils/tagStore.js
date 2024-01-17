import { writable } from 'svelte/store';

// standaard waarde is alltags en hierin zit data.tag

export const selectedTag = writable('allTags');

// Functie om de selected tag mee te updaten
export const setTag = (tag) => {
	selectedTag.set(tag);
};
