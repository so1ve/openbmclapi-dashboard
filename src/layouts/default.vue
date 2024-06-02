<template>
	<VApp>
		<VLayout bg="#f0f2f5">
			<LayoutHeader />
			<LayoutDrawer />
			<VMain m="8" max-w="[calc(100vw_-_64px)]">
				<RouterView />
			</VMain>
		</VLayout>
	</VApp>
</template>
