export const useAppStore = defineStore("app", () => {
	const { mobile } = useDisplay();
	const showDrawer = ref(!mobile.value);
	function toggleDrawer() {
		showDrawer.value = !showDrawer.value;
	}

	return {
		showDrawer,
		toggleDrawer,
	};
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
