<template>
	<table class="table-info trtab">
		<tr>
			<div>
				<td>
					<div>
						<span class="firstName"> {{ list.firstName }}</span
						><span class="lastName">{{ list.lastName }}</span
						><span class="contact">{{ list.contact }}</span>
					</div>

					<div>
						<button class="btn btn-danger">Supprimer</button>
						<button @click="showModal = true" class="btn btn-info">
							Modifier
						</button>
						<div v-show="showModal">
							<ModalUpdate
								@newDataUpdated="getnewDataUpdated"
								:defaultValue="list"
							/>
						</div>
					</div>
				</td>
			</div>
		</tr>
	</table>
</template>

<script>
	import { onMounted, ref } from "vue";
	import ModalUpdate from "./ModalUpdate.vue";

	export default {
		name: "Shower",
		components: { ModalUpdate },

		props: {
			list: {
				default() {
					return {};
				},
			},
		},

		setup() {
			const showModal = ref(false);
			const showData = ref(false);

			let datas = ref([]);

			const dataOnPage = ref(false);

			const getnewDataUpdated = function (newDataUpdated) {
				datas.value = newDataUpdated.value;
			};

			onMounted(() => {
				datas.value = JSON.parse(localStorage.getItem("updataUser"));
			});

			return {
				datas,
				dataOnPage,
				showData,
				showModal,

				getnewDataUpdated,
			};
		},
	};
</script>

<style scoped>
</style>
