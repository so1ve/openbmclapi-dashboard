<script setup lang="ts">
import { VSonner } from "vuetify-sonner";

import "vuetify-sonner/style.css";
</script>

<template>
	<VApp>
		<VLayout bg="#f0f2f5">
			<LayoutHeader />
			<LayoutDrawer />
			<VMain m="8" max-w="[calc(100vw_-_64px)]">
				<RouterView />
			</VMain>
		</VLayout>
		<VSonner />
	</VApp>
</template>
