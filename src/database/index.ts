import { createConnection } from 'typeorm';
import debug from 'debug';

const log = debug('app:database');

createConnection()
  .then(() => {
    log(`Database running`);
  })
  .catch(err => {
    log(`Database broken`)
  });
