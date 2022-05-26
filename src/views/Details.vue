<template>
	<div>
		<!-- Drugi page prikazuje detalje za odabranu knjigu, i to: sve autore, ISBN, broj stranica, izdavača,
        zemlju podrijetla te broj likova (charactera) koji se u knjizi pojavljuju -->
		<v-card v-if="test.isbn">
			<v-card-title v-for="(j, i) in test.authors" :key="i"
				>Authors: {{ j }}</v-card-title
			>
			<v-card-subtitle>isbn: {{ test.isbn }}</v-card-subtitle>
			<v-card-subtitle
				>Number of pages: {{ test.numberOfPages }}</v-card-subtitle
			>
			<v-card-subtitle>Publisher: {{ test.publisher }}</v-card-subtitle>
			<v-card-subtitle>Country: {{ test.country }}</v-card-subtitle>
			<v-card-subtitle>Number of char.: {{ help2 }}</v-card-subtitle>

			<v-spacer></v-spacer>
			<v-btn
				color="#026fa6"
				style="margin-left: 10px; margin-bottom: 10px"
				@click="home()"
				>Go back</v-btn
			>
		</v-card>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "Home",
		data() {
			return {
				all: [],
				test: [],
				help: 0,
				help2: 0,
			};
		},
		async mounted() {
			const temp = await axios.get("http://localhost:5000/");
			this.all = temp.data;
			console.log("details", this.$route.params.isbn);
			console.log(this.all);
			for (let i = 0; i < this.all.length; i++) {
				if (this.all[i].isbn == this.$route.params.isbn) this.help = i;
			}
			console.log("ito", this.all[this.help]);
			this.test = this.all[this.help];
			console.log("test", this.test);
			this.help2 = this.test.characters.length;
			console.log("help2", this.help2);
		},
		methods: {
			home() {
				this.$router.replace({ name: "Home" });
			},
		},
	};
</script>
