// Fetch data from Directus
export async function load() {
	// Get all data from seperate collections
	const reqWorkform = await fetch(
		'https://platform-big-themes.directus.app/items/workform?fields=*.*.*'
	);
	const reqCourse = await fetch('https://platform-big-themes.directus.app/items/course');
	const reqContact = await fetch('https://platform-big-themes.directus.app/items/contact');
	const reqTag = await fetch('https://platform-big-themes.directus.app/items/tag');
	const dataWorkform = await reqWorkform.json();
	const dataCourse = await reqCourse.json();
	const dataContact = await reqContact.json();
	const dataTag = await reqTag.json();

	const data = {
		workform: dataWorkform.data,
		course: dataCourse.data,
		contact: dataContact.data,
		tag: dataTag.data
	};

	return data;
}
