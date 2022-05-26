<template>
	<v-container style="margin-top: 10px; margin-bottom: 10px">
		<v-layout row wrap style>
			<details-card
				v-for="allx in all"
				:id="allx.isbn"
				:det="allx.name"
				:naziv="allx.name"
				:aut="allx.authors"
				:key="allx.isbn"
			/>
		</v-layout>
	</v-container>
</template>

<script>
	import axios from "axios";
	import DetailsCard from "@/components/DetailsCard.vue";
	export default {
		name: "Home",
		data() {
			return {
				all: [],
			};
		},
		async mounted() {
			const temp = await axios.get("http://localhost:5000/");
			this.all = temp.data;
			console.log("api", this.all);
		},
		components: {
			DetailsCard,
		},
	};
</script>
