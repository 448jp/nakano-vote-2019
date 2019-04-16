<template>
	<div>
		<img
			:src="
				require(`~/assets/images/candidates/candidate_${notificationId}.jpg`)
			"
			class="face"
			alt=""
		/>
		<div class="subtitle">
			中野区議会議員選挙2019の立候補者である
		</div>
		<h1 class="title is-1">
			{{ my.name }}さん（{{ party.shortName }}）は、
		</h1>
		<div class="columns is-vcentered">
			<p class="column is-3">
				<img :src="carImage" alt="" />
			</p>
			<div class="column">
				<h1 class="title is-1">
					{{ carBody }}
				</h1>
				<b-notification
					v-if="my.hasCar === undefined"
					type="is-info"
					:closable="false"
				>
					この候補者が選挙カーを使っているかどうかの情報をお持ちの方は、<a
						href="https://twitter.com/448jp"
						target="_blank"
						rel="noreferrer"
					>
						運営者のTwitterアカウント
					</a>
					までお寄せください。
				</b-notification>
			</div>
		</div>
		<hr />
		<h2 class="title is-2">{{ my.name }}さんの詳細情報</h2>
		<p>党派：{{ party.name }}</p>
		<b-button v-if="my.url" @click="gotoWeb">公式サイト</b-button>
		<hr />
		<nuxt-link to="/">トップページに戻る</nuxt-link>
	</div>
</template>

<script>
export default {
	name: "Candidates",
	data() {
		return {
			notificationId: null,
		};
	},
	computed: {
		// 候補者
		my() {
			return this.$store.getters.getCandidateByNotificationId(
				this.notificationId,
			);
		},
		// 政党
		party() {
			return this.$store.getters.getPartyById(this.my.partyId);
		},
		// 選挙カーを使っているかどうかの画像を返します
		carImage() {
			switch (this.my.hasCar) {
				case undefined:
					return require("~/assets/images/has-car.png");
				case true:
					return require("~/assets/images/has-car.png");
				default:
					return require("~/assets/images/has-no-car.png");
			}
		},
		// 選挙カーを使っているかどうかの文言を返します
		carBody() {
			switch (this.my.hasCar) {
				case undefined:
					return "選挙カーを使っているか不明です";
				case true:
					return "選挙カーを使っています";
				default:
					return "選挙カーを使っていません";
			}
		},
	},
	methods: {
		gotoWeb() {
			window.open(this.my.url, "_blank");
		},
	},
	asyncData({ route }) {
		const { notificationId } = route.params;
		return {
			notificationId,
		};
	},
};
</script>

<style lang="scss" scoped>
.face {
	float: left;
	margin-right: 10px;
}
</style>
