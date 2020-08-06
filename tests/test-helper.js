import Application from 'lee-and-wrangler/app';
import config from 'lee-and-wrangler/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
