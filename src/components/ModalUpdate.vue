<template>
	<!-- Button to Open the Modal -->
	<button
		type="button"
		class="btn btn-primary"
		data-toggle="modal"
		data-target="#myModal"
	>
		Open modal
	</button>
</template>
   
<script>
	export default {
		name: "ModalUpdate",
		emits: { close },
		props: {
			defaultValue: {
				default() {
					return {};
				},
			},
		},
		setup() {
			// const updated = function () {
			// 	if (firstName.value !== "" && lastName.value !== "") {
			// 		dataUpdated.value.push({
			// 			firstName: firstName.value,
			// 			lastName: lastName.value,
			// 			contact: contact.value,
			// 		});
			// 		localStorage.setItem("updataUser", JSON.stringify(dataUpdated.value));
			// 		emit("newDataUpdated", dataUpdated);
			// 	}
			// };

			return {};
		},
	};
</script>

<style  scoped>
</style>