const PREFIX = '[ERROR]';

const throwError = (msg) => {
  throw new Error(`${PREFIX} ${msg}`);
};

export default throwError;
