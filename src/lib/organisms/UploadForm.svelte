<script>
	import { applyAction, enhance } from '$app/forms'
    import Select from 'svelte-select'

	import FormField from '$lib/molecules/FormField.svelte'
	import SelectFormField from '$lib/molecules/SelectFormField.svelte';
    import FileFormField from '$lib/molecules/FileFormField.svelte';
	import Button from '$lib/atoms/Button.svelte'
	import LimitedFormField from '../molecules/LimitedFormField.svelte';
	import InputHint from '../atoms/InputHint.svelte'

	export let formAction
	export let formMethod
    export let btnText
	export let data

    let tagOptions = data.tag.map((tag) => {
        return {
            id: tag.id,
            label: tag.title,
            value: tag.value
        }
    })

    // Convert email field to titel field
    const contactpersoonObj = data.contact.map(({
        email: title,
        ...rest
    }) => ({
        ...rest,
        title
    }))

	let loading = false
    let showUpload = true;
    let showVerify = false;

	const handleSubmit = () => {
		loading = true
		return async ({ result }) => {
			await applyAction(result)
			loading = false
		}
	}

    const toggleUpload = () => {
        showUpload = !showUpload;
        showVerify = !showVerify;
    }
</script>

<form action={formAction} method={formMethod} use:enhance={handleSubmit} class:showLogin={showUpload} on:submit={toggleUpload} enctype="multipart/form-data">
	<div class="form-content">
		<!-- Naam -->
		<FormField
			iconSrc="/images/icons/user.svg"
			labelFor="werkvormName"
			labelText="Naam werkvorm"
			inputType="text"
			inputPlaceholder="Vul een naam in..."
			inputName="werkvormName"
			inputId="werkvormName"
            isRequired={true}
            inputHint="Bijv. Waarom is X belangrijk voor jou?"
		/>

        <!-- Korte beschrijving -->
		<LimitedFormField
            iconSrc="/images/icons/description.svg"
            labelFor="werkvormShortDesc"
            labelText="Korte beschrijving werkvorm"
            inputType="text"
            inputPlaceholder="Vul een korte beschrijving in..."
            inputName="werkvormShortDesc"
            inputId="werkvormShortDesc"
            isRequired={true}
            maxLength="200"
            inputHint="Schrijf hier een korte beschrijving van de werkvorm."
        />

		<!-- Beschrijving -->
		<FormField
			iconSrc="/images/icons/description.svg"
			labelFor="werkvormDesc"
			labelText="Beschrijving werkvorm"
			inputType="textarea"
			inputPlaceholder="Beschrijf de werkvorm..."
			inputName="werkvormDesc"
			inputId="werkvormDesc"
            isRequired={true}
            inputHint="Schrijf hier een uitgebreide beschrijving van de werkvorm."
		/>

        <!-- Opleiding -->
		<SelectFormField
			iconSrc="/images/icons/school.svg"
			labelFor="werkvormOpleiding"
			labelText="Opleiding"
			selectName="werkvormOpleiding"
			selectId="werkvormOpleiding"
			selectPlaceholder="Selecteer een opleiding..."
			options={data.course}
            isRequired={false}
		/>

        <!-- Contactpersoon -->
        <SelectFormField
			iconSrc="/images/icons/contact.svg"
			labelFor="werkvormContactpersoon"
			labelText="Contactpersoon"
			selectName="werkvormContactpersoon"
			selectId="werkvormContactpersoon"
			selectPlaceholder="Selecteer een contactpersoon..."
			options={contactpersoonObj}
            isRequired={false}
		/>

        <!-- Thumbnail -->
        <FileFormField
            iconSrc="/images/icons/thumbnail.svg"
            labelFor="werkvormThumbnail"
            labelText="Thumbnail werkvorm"
            inputType="file"
            inputName="werkvormThumbnail"
            inputId="werkvormThumbnail"
            inputPlaceholder="Selecteer een thumbnail..."
            isRequired={true}
            hasMultiple={false}
            accepted={"image/*"}
            inputHint="Bijv. Een afbeelding van de werkvorm."
        />

        <!-- Video -->
        <FileFormField
            iconSrc="/images/icons/video.svg"
            labelFor="werkvormVideo"
            labelText="Video werkvorm"
            inputType="file"
            inputName="werkvormVideo"
            inputId="werkvormVideo"
            inputPlaceholder="Selecteer een video..."
            isRequired={false}
            hasMultiple={false}
            accepted={"video/*"}
            inputHint="Bijv. Een video van de werkvorm."
        />

        <!-- Multi select dropdown for selecting tags -->
        <!-- <div class="form-field">
            <span>
                <div class="icon">
                    <img src="/images/icons/tag.svg" alt="" />
                </div>
                <label for="tags">Tags</label>
            </span>
            <Select id="tags" items={tagOptions} name="tags" multiple placeholder="Selecteer tags..." --background="#1E1649" --border="solid 2px #ffffff" --border-radius="0" --placeholder-color="rgba(255, 255, 255, 0.4)" --border-hover="2px solid #fff" --item-color="black" --item-hover-color="black" --font-size="0.9rem" --border-focused="2px solid #F25379"/>
            <InputHint inputHint="Selecteer een tag die bij de werkvorm past."/>
        </div> -->
	</div>

	<Button btnType="submit" {btnText}></Button>
</form>

<!-- After upload message -->
<article class:showVerify={showVerify}>
    <h2>Werkvorm succesvol geüpload.</h2>
    <p>Het kan even duren voor deze zichtbaar is.</p>
</article>

<style>
	form {
		display: none;
		flex-direction: column;
		row-gap: 2rem;
	}

    .showLogin {
        display: flex;
    }

	.form-content {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		background: var(--form-bg, #1e1649);
        row-gap: 1rem;
	}

    .showVerify {
        display: flex;
    }

    article {
        display: none;
        flex-direction: column;
        justify-content: center;
        row-gap: 0.5rem;
        padding: 2rem 2rem;
        background: var(--color-hva-navy);
    }

    article h2{
        font-size: 1.2rem;
        font-weight: 700;
        text-align: center;
    }

    article p{
        font-size: 0.9rem;
        font-weight: 400;
        text-align: center;
    }

    /* .icon {
        width: var(--icon-width, 1.4rem);
        height: auto;
        display: flex;
        align-items: center;
    }

    img {
		width: 100%;
		height: 100%;
	}

    .form-field {
        display: flex;
        flex-direction: column;
    }
	.form-field span {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 0.3rem;
		margin-bottom: 0.3rem;
	}

    label {
        font-size: 1rem;
        font-weight: 600;
        color: var(--label-color, #ffffff);
    } */

    @media (min-width: 48rem) {
        form {
            width: 30rem;
            margin-bottom: 5rem;
        }

        article {
            width: 30rem;
        }
    }
</style>
