export async function load({ params }) {
	const reqWorkform = await fetch(
		'https://platform-big-themes.directus.app/items/workform?filter[link]=' +
			params.id +
			'&fields=*.*.*'
	);
	const dataWorkform = await reqWorkform.json();
	const data = {
		workform: dataWorkform.data
	};

	return data;
}
