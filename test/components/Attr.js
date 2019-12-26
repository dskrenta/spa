import { addUpdateMapping } from '../../src/spa.js';

const Attr = {
  render: async () => {
    addUpdateMapping('route', {
      type: 'replaceAttribute',
      className: 'someClass',
      attribute: 'class',
      expression: `'someClass' + window.state.route === 'roulette' ? 'active' : ''`
    });

    return `
      <p class="someClass ${window.state.route === 'roulette' ? 'active' : ''}">Attr</p>
    `;
  },
  afterRender: async () => {
    setTimeout(() => {
      window.state.route = 'foo';
    }, 2000);
  }
};

export default Attr;
