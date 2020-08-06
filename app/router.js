import EmberRouter from '@ember/routing/router';
import config from 'lee-and-wrangler/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('general', function() {
    this.route('button');
    this.route('image');
    this.route('typography');
    this.route('title');
  });
  this.route('banner', function() {
    this.route('standard-text-positions');
    this.route('mobile-text-position-examples');
    this.route('customised-styling-examples');
    this.route('Banner hover styles');
    this.route('banner-grid');
    this.route('banner-hotspot');
  });
  this.route('video', function() {
    this.route('standard-video-embed');
    this.route('standard-video-embed-with-title-option');
    this.route('youtube-video-embed');
    this.route('youtube-video-embed-with-title-option');
    this.route('background-video');
    this.route('background-video-in-banner');
    this.route('background-video-with-overlay');
    this.route('background-video-with-overlay-in-banner');
  });
  this.route('slider'), function() {
    this.route('slider');
  }
});
