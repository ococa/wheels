import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';

Vue.component('o-button', Button);
Vue.component('o-icon', Icon);
Vue.component('o-button-group', ButtonGroup);
Vue.component('o-input', Input);

new Vue({
    el: '#app',
    data: {
        message: 'hello',
        loading1: true,
    }
});

import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);
const expect = chai.expect;

{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'setting'
        }
    });
    button.$mount();
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');

    expect(href).to.equal('#i-setting');
    button.$el.remove();
    button.$destroy();
}

// {
//     const Constructor = Vue.extend(Button);
//     const button = new Constructor({
//         propsData: {
//             icon: 'setting',
//             loading: true,
//         }
//     });
//     button.$mount();
//     let useElement = button.$el.querySelector('use');
//     let href = useElement.getAttribute('xlink:href');
//
//     expect(href).to.equal('#i-loading');
//     button.$el.remove();
//     button.$destroy();
// }
//
// {
//     const Constructor = Vue.extend(Button);
//     const div = document.createElement('div');
//     div.id = '123123'
//     document.body.appendChild(div);
//     const button = new Constructor({
//         propsData: {
//             icon: 'setting',
//         }
//     });
//     button.$mount(div);
//     let svg = button.$el.querySelector('svg');
//     let {order} = window.getComputedStyle(svg);
//
//     expect(order).to.equal('0');
//
//     button.$el.remove();
//     button.$destroy();
// }
// //
// {
//     const Constructor = Vue.extend(Button);
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     const button = new Constructor({
//         propsData: {
//             icon: 'setting',
//             iconPosition: 'right'
//         }
//     });
//     button.$mount(div);
//     let svg = button.$el.querySelector('svg');
//     let { order } = window.getComputedStyle(svg);
//
//     expect(order).to.equal('2');
//     button.$el.remove();
//     button.$destroy();
// }
//
// {
//     const Constructor = Vue.extend(Button);
//     const oButton = new Constructor({
//         propsData: {
//             icon: 'setting',
//             iconPosition: 'right'
//         }
//     });
//     oButton.$mount();
//     let spy = chai.spy(function () {});
//     oButton.$on('click', spy);
//     oButton.$el.click();
//
//     expect(spy).to.have.been.called();
//
// }
