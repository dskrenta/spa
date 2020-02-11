const Func = {
  render: async () => {
    return `
      <p>Func</p>
      <button id="button">Click me!</button>
    `;
  },
  afterRender: async () => {
    document.getElementById('button').addEventListener('click', () => {
      alert('Clicked!');
      window.navigate('#contact');
    })
  }
};

export default Func;
