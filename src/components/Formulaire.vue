<template>
	<div>
		<form action="">
			<label for=""
				>Nom :<input
					type="text"
					v-model="nom"
					id=""
					class="form-control form-control"
			/></label>
			<br />
			<br />
			<label for=""
				>Prenom :<input
					type="text"
					v-model="prenom"
					id=""
					class="form-control form-control"
			/></label>
			<br />
			<br />
			<label for=""
				>Contact :<input
					type="text"
					v-model="contact"
					id=""
					class="form-control form-control"
			/></label>
			<br />
			<br />
			<button class="btn btn-primary" @click.prevent="ajout">Ajouter</button>
		</form>
	</div>
</template>

<script>
	import { ref } from "vue";
	export default {
		name: "Formulaire",

		setup(props, { emit }) {
			let nom = ref("");
			let prenom = ref("");
			let contact = ref("");
			let dataUser = ref([]);

			const ajout = function () {
				if (nom.value !== "" && prenom.value !== "") {
					dataUser.value.push({
						firstName: nom.value,
						lastName: prenom.value,
						contact: contact.value,
					});
					localStorage.setItem("dataUser", JSON.stringify(dataUser.value));
					emit("newData", dataUser);
					nom.value = "";
					prenom.value = "";
					contact.value = "";
				}
			};

			return {
				nom,
				prenom,
				contact,
				ajout,
			};
		},
	};
</script>

<style>
</style>