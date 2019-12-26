import AnotherOne from './AnotherOne.js';

const About = {
  render: async () => {
    return `
      <p>About</p>
      ${await AnotherOne.render({ someVal: 'Something else!' })}
    `;
  },
  afterRender: async () => {
    console.log(About.request);
  }
};

export default About;
