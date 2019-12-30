import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

Vue.component('o-button', Button);
Vue.component('o-icon', Icon);
Vue.component('o-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        message: 'hello',
        loading1: true,
    }
});