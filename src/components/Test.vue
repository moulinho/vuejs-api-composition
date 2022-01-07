<template>
	<div>
		<h1>Good morning</h1>
		<form @submit.prevent="addTask">
			<div class="detail">
				<input
					type="text"
					name=""
					v-model="detail"
					placeholder="Entrer la tache "
				/><button>Ajouter</button>
			</div>
		</form>
		<ul class="list">
			<li v-for="(task, index) in taches" :key="index" class="item-list">
				<h2>Tache : {{ index + 1 }}</h2>
				<h3>A faire : {{ task.content2 }}</h3>
				<input
					type="text"
					name=""
					v-model="editing"
					placeholder="Modifier la tache"
				/>
				<button @click="supprimer(index)">supprimer</button>
				<button @click="updateTache(index)">Modifier</button><br /><br />
				<button @click="toutSup(index)">Tout supprimer</button>
			</li>
		</ul>
	</div>
</template>
<script>
	import { ref } from "vue";
	export default {
		setup() {
			const detail = ref("");
			const taches = ref([]);
			const editing = ref("");

			function addTask() {
				if (detail.value !== "") {
					taches.value.push({
						content2: detail.value,
					});
					localStorage.setItem("taches", JSON.stringify(taches.value));
					detail.value = "";
				}
			}
			function supprimer(index) {
				taches.value.splice(index, 1);
				localStorage.setItem("taches", JSON.stringify(taches.value));
			}

			function updateTache(index) {
				let tachesTable = {
					content2: detail.value,
				};

				if (editing.value !== "") {
					taches.value[index] = tachesTable;
					tachesTable.content2 = editing.value;
					localStorage.setItem("taches", JSON.stringify(taches.value));
					let tableParse = JSON.parse(localStorage.getItem("taches"));
					taches.value = tableParse;
				}
				console.log(taches.value);
				editing.value = "";
			}

			function toutSup(index) {
				taches.value.splice(index);
				localStorage.setItem("taches", JSON.stringify(taches.value));
			}

			return {
				detail,
				taches,
				editing,
				supprimer,
				updateTache,
				toutSup,
				addTask,
			};
		},
	};
</script>
<style src="@/assets/css/style.css">
</style>