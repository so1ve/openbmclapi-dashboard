<script setup lang="ts">
interface Item {
	title: string;
	to: string;
	icon: string;
}

const { mobile } = useDisplay();
const { t } = useI18n();
const appStore = useAppStore();

const items = computed(
	() =>
		[
			{
				title: t("pages.clusters.label"),
				to: "/clusters",
				icon: "i-carbon:web-services-cluster",
			},
		] satisfies Item[],
);
</script>

<template>
	<VNavigationDrawer v-model="appStore.showDrawer" :temporary="mobile">
		<VList density="compact" nav>
			<VListItem v-for="item in items" :key="item.to" link :to="item.to">
				<template #prepend>
					<span :class="item.icon" m="2.5" />
				</template>
				{{ item.title }}
			</VListItem>
		</VList>
	</VNavigationDrawer>
</template>
