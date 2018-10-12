import app from '../index';

const port = 8080;
app().listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server was started on '${port}'`);
});
