import { addUpdateMapping } from '../spa.js';

const Home = {
  render: async () => {
    addUpdateMapping('foo', {
      type: 'replaceContent',
      className: 'foo',
      expression: 'window.state.foo'
    });

    return `
      <p>Home</p>
      <p class="foo">${window.state.foo}</p>
    `;
  },
  afterRender: async () => {
    setTimeout(() => {
      window.state.foo = !window.state.foo;
    }, 1000)
  }
};

export default Home;
