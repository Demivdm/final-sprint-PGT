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

        /* ------------------------------- FILE UPLOAD ------------------------------ */
        // Get all files from formData object
        const werkvormThumbnail = formData.get('werkvormThumbnail')
        const werkvormVideo = formData.get('werkvormVideo')
        const filesToUpload = new FormData();

        const allFiles = [werkvormThumbnail, werkvormVideo]

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

        /* -------------------------------- FORM DATA ------------------------------- */
        // Get all data from formData object
        const werkvormName = formData.get('werkvormName')?.toString()
        const werkvormShortDesc = formData.get('werkvormShortDesc')?.toString()
        const werkvormDesc = formData.get('werkvormDesc')?.toString()
        const werkvormOpleiding = formData.get('werkvormOpleiding')?.toString()
        const werkvormStudiejaar = formData.get('werkvormStudiejaar')?.toString()
        const werkvormContactpersoon = formData.get('werkvormContactpersoon')?.toString()

        // TODO - Create checker to see if thumbnail and video are uploaded, else find fix for non-array filtering.

        // Get file id from uploaded thumbnail if filename_download equals werkvormThumbnail.name
        const werkvormThumbnailID = uploadData.data.filter((file) => {
            return file.filename_download === werkvormThumbnail.name
        })
        console.log(werkvormThumbnailID[0].id);

        // Get file id from uploaded video if filename_download equals werkvormVideo.name
        const werkvormVideoID = uploadData.data.filter((file) => {
            return file.filename_download === werkvormVideo.name
        })
        console.log(werkvormVideoID[0].id);

        // Slugify werkvormName
        const slug = werkvormName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
        console.log(slug);

        // Create data object to send to Directus
        const data = {
            title: werkvormName,
            shortDescription: werkvormShortDesc,
            description: werkvormDesc,
            year: werkvormStudiejaar,
            course: werkvormOpleiding,
            contact: werkvormContactpersoon,
            thumbnail: werkvormThumbnailID[0].id,
            video: werkvormVideoID[0].id,
            link: slug
        }
        console.log(data);

        // TODO - Send data to Directus
    }
}