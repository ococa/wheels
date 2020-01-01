<template>
    <button class="o-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <o-icon class="icon" v-if="icon && !loading" :name="icon"></o-icon>
        <o-icon class="loading icon" v-if="loading" name="loading"></o-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon';
    export default {
        // props: ['icon', 'iconPosition'],
        component: {
            'o-icon': Icon,
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false,
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right';
                }
            }
        },
        methods: {
            btnClick(...args){
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
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
        .loading {
            animation: spin 1s infinite linear;
        }
    }

</style>