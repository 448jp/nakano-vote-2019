<template>
	<div>
		<nav
			class="navbar header has-shadow is-primary"
			role="navigation"
			aria-label="main navigation"
		>
			<div class="navbar-brand">
				<a class="navbar-item" href="/">
					中野区で選挙カーを使っているのは誰？
				</a>
			</div>
		</nav>

		<section class="section">
			<div class="container">
				<!--<aside class="column is-2 section">
					<p class="menu-label is-hidden-touch">General</p>
					<ul class="menu-list">
						<li v-for="(item, key) of items" :key="key">
							<nuxt-link :to="item.to" exact-active-class="is-active">
								<b-icon :icon="item.icon" /> {{ item.title }}
							</nuxt-link>
						</li>
					</ul>
				</aside>-->
				<nuxt />
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					title: "Home",
					icon: "home",
					to: { name: "index" },
				},
				{
					title: "Inspire",
					icon: "lightbulb",
					to: { name: "inspire" },
				},
			],
		};
	},
};
</script>
