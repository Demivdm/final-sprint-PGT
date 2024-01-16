import { writable } from 'svelte/store';

// Initialize the store with the default value 'tag.title'
export const selectedTag = writable('tag.title');

// Function to update the value of the selectedTag store
export const setTag = (tag) => {
	selectedTag.set(tag);
};
