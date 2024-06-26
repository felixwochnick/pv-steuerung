<template>
    <UHeader>
        <template #left>
            <UIcon class="text-4xl" name="i-ph-solar-panel-fill" />
            <span class="ml-2 text-xl font-semibold">PV Steuerung</span>
        </template>
        <template #right>
            <UColorModeButton />
        </template>
    </UHeader>
    <div
        class="h-[calc(100vh_-_var(--header-height))] max-h-[calc(100vh_-_var(--header-height))] w-full overflow-auto"
    >
        <slot />
    </div>
</template>
