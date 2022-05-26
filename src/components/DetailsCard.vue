<template>
	<v-layout wrap style="margin-top: 10px">
		<v-card
			class="text-xs-center ma-3"
			width="300"
			style="margin-top: 15px: margin-left:15px;"
		>
			<router-link
				style="text-decoration: none; color: black"
				:to="{ name: 'Details', params: { isbn: id } }"
			>
				<v-card-title> {{ naziv }} </v-card-title>
			</router-link>

			<v-card-subtitle> {{ aut[0] }} </v-card-subtitle>
			<v-card-subtitle> {{ det }} </v-card-subtitle>
			<v-card-actions>
				<router-link :to="{ name: 'Details', params: { isbn: id } }">
					<v-btn rounded color="primary" dark>Details</v-btn>
				</router-link>
			</v-card-actions>
		</v-card>
	</v-layout>
</template>
<script>
	export default {
		name: "DetailsCard",
		props: {
			id: String,
			det: String,
			naziv: String,
			aut: [],
		},
	};
</script>

<style></style>
