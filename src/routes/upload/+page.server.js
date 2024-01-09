import { DIRECTUS_KEY } from '$env/static/private'

export async function load() {
	// Get all data for select fields
	const reqCourse = await fetch('https://platform-big-themes.directus.app/items/course');
	const reqContact = await fetch('https://platform-big-themes.directus.app/items/contact');
	const reqTag = await fetch('https://platform-big-themes.directus.app/items/tag');
	const dataCourse = await reqCourse.json();
	const dataContact = await reqContact.json();
	const dataTag = await reqTag.json();

	const data = {
		course: dataCourse.data,
		contact: dataContact.data,
		tag: dataTag.data
	};

	return data;
}

// Upload file to Directus files

// Use returned file object to get file id and use file id in workform upload.

async function uploadFile(filedata) {
    const response = await fetch('https://platform-big-themes.directus.app/files', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${DIRECTUS_KEY}`
        },
        body: filedata
    })

    const data = await response.json()

    return data
}

export const actions = {
    'create-werkvorm': async ({ request }) => {
        const formData = await request.formData()

        // Get all files from formData object
        const werkvormThumbnail = formData.get('werkvormThumbnail')
        const werkvormVideo = formData.get('werkvormVideo')

        const filesToUpload = new FormData();

        const allFiles = [werkvormThumbnail, werkvormVideo]

        console.log(allFiles);

        allFiles.forEach((file) => {
            // If file size is 0, don't upload
            if (file.size === 0) {
                console.log('File size is 0');
            }
            else {
                // Push all files with size > 0 to filesToUpload array
                filesToUpload.append('files', file);
            }
        })

        // Upload files to Directus
        const uploadData = await uploadFile(filesToUpload)

        console.log(uploadData);
    }
}



/* -------------------------------------------------------------------------- */
/*                                  OUDE CODE                                 */
/* -------------------------------------------------------------------------- */
// export const actions = {
// 	'create-werkvorm': async ({ request }) => {
// 		// TODO - Upload files to assets with /upload endpoint Hygraph

// 		// TODO - Use response from uploading assets to get ID of added file and add to formData object

// 		const formData = await request.formData();

// 		// Get all files from formData object
// 		const werkvormThumbnail = formData.get('werkvormThumbnail');
// 		const werkvormVideo = formData.get('werkvormVideo');
// 		const werkvormMaterialen = formData.get('werkvormMaterialen');

// 		console.log('werkvormThumbnail', werkvormThumbnail);

// 		const filesToUpload = new FormData();

// 		const files = [werkvormThumbnail, werkvormVideo, werkvormMaterialen];

// 		files.forEach((file) => {
// 			filesToUpload.append('files', file);
// 			console.log(`Added ${file.name} to filesToUpload`);
// 		});

// 		const uploadData = await uploadFile(filesToUpload);
// 		console.log(uploadData);

// 		const werkvormName = formData.get('werkvormName')?.toString();
// 		const werkvormShortDesc = formData.get('werkvormShortDesc')?.toString();
// 		const werkvormDesc = formData.get('werkvormDesc')?.toString();
// 		const werkvormOpleiding = formData.get('werkvormOpleiding')?.toString();
// 		const werkvormStudiejaar = formData.get('werkvormStudiejaar')?.toString();
// 		const werkvormContactpersoon = formData.get('werkvormContactpersoon')?.toString();
// 		// const thumbnailName = formData.get('thumbnailName')?.toString();
// 		// const thumbnailHandle = formData.get('thumbnailHandle')?.toString();
// 		// const videoName = formData.get('videoName')?.toString();
// 		// const videoHandle = formData.get('videoHandle')?.toString();
// 		// const materialenName = formData.get('materialenName')?.toString();
// 		// const materialenHandle = formData.get('materialenHandle')?.toString();
// 	}
// };
