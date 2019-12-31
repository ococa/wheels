<template>
    <div class="o-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            for (let node of this.$el.children) {
                if (node.nodeName.toLowerCase() !== 'button') {
                    console.warn('o-button-group的子元素应该全是o-button')
                }
            }
        }
    }
</script>

<style lang="scss">
    .o-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .o-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
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