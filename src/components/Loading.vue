<script setup lang="ts">
const props = defineProps<{
	loading: boolean;
}>();
</script>

<template>
	<VOverlay items-center justify-center :model-value="props.loading">
		<VProgressCircular indeterminate size="64" />
	</VOverlay>
</template>
