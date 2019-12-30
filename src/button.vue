
<template>
    <button class="o-button" :class="{[`icon-${iconPosition}`]: true}">
        <o-icon class="icon" v-if="icon" :name="icon"></o-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        // props: ['icon', 'iconPosition'],
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    console.log('value', value);
                    return value === 'left' || value === 'right';
                }
            }
        }
    }
</script>
<style lang="scss">
    .o-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--button-border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-horver);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        &> .icon {
            margin-right: 0.3em;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin: 0 0 0 0.3em;
            }
            > .content {
                order: 1;
            }
        }
    }
</style>