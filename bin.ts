#!/usr/bin/env node

import { dog } from './src/dog';

import { main } from './src/main';

(() => {
  try {
    main();
  } catch (error) {
    dog.error(error);
  }
})();
