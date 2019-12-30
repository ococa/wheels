<template>
    <div class="o-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
    .o-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .o-button {
            border-radius: 0;
            margin-left: -1px;
            &:first-child {
                border-bottom-left-radius: var(--button-border-radius);
                border-top-left-radius: var(--button-border-radius);
            }
            &:last-child {
                border-bottom-right-radius: var(--button-border-radius);
                border-top-right-radius: var(--button-border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>