<script setup lang="ts">
const { locale } = useI18n();
const appStore = useAppStore();

const locales = {
	"en": "English",
	"zh-CN": "中文（简体）",
};

function switchLang(name: keyof typeof locales) {
	locale.value = name;
}
</script>

<template>
	<VAppBar color="primary" prominent>
		<VAppBarNavIcon variant="text" @click.stop="appStore.toggleDrawer" />
		<VToolbarTitle>
			<RouterLink to="/">OpenBMCLAPI Dashboard</RouterLink>
		</VToolbarTitle>
		<VMenu :close-on-content-click="false" open-on-hover>
			<template #activator="{ props }">
				<VBtn icon="mdi-translate" variant="text" v-bind="props" />
			</template>
			<VList>
				<VListItem
					v-for="(name, key) in locales"
					:key
					:value="key"
					@click="switchLang(key)"
				>
					<VListItemTitle>{{ name }}</VListItemTitle>
				</VListItem>
			</VList>
		</VMenu>
	</VAppBar>
</template>
