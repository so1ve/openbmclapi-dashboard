<script setup lang="ts">
const clusters = [{ name: "xxx", id: "1145141919810" }];

const { t } = useI18n();
</script>

<template>
	<div>
		<VCol v-for="cluster in clusters" :key="cluster.id">
			<VCard class="mx-auto" color="primary" variant="tonal">
				<VCardItem>
					<div>
						<h4 class="mb-1">{{ t("pages.clusters.cluster-name") }}</h4>
						<div>
							{{ cluster.name }}
						</div>
						<h4 class="mb-1">{{ t("pages.clusters.cluster-id") }}</h4>
						<div>
							{{ cluster.id }}
						</div>
					</div>
				</VCardItem>
			</VCard>
		</VCol>
	</div>
</template>
