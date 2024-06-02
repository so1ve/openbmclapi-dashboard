<script setup lang="ts">
const router = useRouter();
const { t } = useI18n();

function back() {
	router.back();
}
</script>

<template>
	<div
		flex="~ wrap col"
		h="full"
		items="center"
		justify="center"
		text="[30px]"
		w="full"
	>
		{{ t("not-found.not-found") }}
		<VBtn @click="back">
			{{ t("not-found.back") }}
		</VBtn>
	</div>
</template>
