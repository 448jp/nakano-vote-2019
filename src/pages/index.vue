<template>
	<b-table :data="candidates">
		<template slot-scope="candidate">
			<b-table-column field="name" label="名前">
				<nuxt-link :to="`/candidates/${candidate.row.notificationId}`">
					{{ candidate.row.name }}
				</nuxt-link>
			</b-table-column>
			<b-table-column field="partyId" label="党派">
				{{ getPartyById(candidate.row.partyId).shortName }}
			</b-table-column>
			<b-table-column
				field="hasCar"
				label="選挙カーを"
				sortable
				:custom-sort="sortByHasCar"
			>
				{{ hasCar(candidate.row.hasCar) }}
			</b-table-column>
			<b-table-column field="url" label="公式サイト">
				<a
					v-if="candidate.row.url"
					:href="candidate.row.url"
					target="_blank"
					rel="noreferrer"
				>
					🌐
				</a>
			</b-table-column>
		</template>
	</b-table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "HomePage",
	computed: {
		// 立候補者
		candidates() {
			return this.$store.getters.candidatesSortedByNotificationId;
		},
		...mapGetters(["getPartyById"]),
	},
	methods: {
		// 選挙カーを使っているかどうかの文言を返します
		hasWebsite(hasWebsite) {
			switch (hasWebsite) {
				case undefined:
					return "持っていません";
				case true:
					return "🔈持っています";
			}
		},
		// 選挙カーを使っているかどうかの文言を返します
		hasCar(hasCar) {
			switch (hasCar) {
				case undefined:
					return "❓不明です";
				case true:
					return "🔈使っています";
				case false:
					return "🔇使っていません";
			}
		},
		// 選挙カーを使っているかどうかでソートします
		sortByHasCar(a, b, isAsc) {
			if (isAsc) {
				if (a.hasCar === undefined) return 1;
				if (a.hasCar && b.hasCar) return 1;
				return -1;
			} else {
				if (a.hasCar === undefined) return -1;
				if (a.hasCar && b.hasCar) return -1;
				return 1;
			}
		},
	},
};
</script>
