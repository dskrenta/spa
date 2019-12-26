const AnotherOne = {
  render: async ({ someVal = 'Haha' }) => {
    return `
      <p>Another One - ${someVal}</p>
    `;
  }
};

export default AnotherOne;
