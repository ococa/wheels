<template>
    <div :class="{'error': error}" class="wrapper">
        <input :disabled="disabled" :readonly="readonly" :value="value" type="text">
        <template v-if="error">
            <Icon class="icon-error" name="error"></Icon>
            <span class="error-message">{{ error }}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon';

    export default {
        components: {
            Icon,
        },
        name: 'OInput',
        props: {
            value: String,
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .wrapper {
        display: inline-flex;
        align-items: center;
        font-size: $font-size;
        > *:not(:last-child) {
            margin-right: .5em;
        }
        > input {
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;
            font-size: inherit;
            height: $height;
            &:hover {
                border: 1px solid $border-color-hover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled], &[readonly] {
                border-color: #ccc;
                color: #ccc;
                cursor: not-allowed;
            }
        }
        &.error {
            > input {
                border-color: $red;
            }
        }
        .icon-error {
            fill: $red;
        }
        .error-message {
            color: $red;
        }
    }
</style>