import angular from 'angular';

// Directives
import isNumber from './isNumber.directive'


// Module
const directivesModule = 'directives.module';

angular
  .module(directivesModule, [])
  .directive('isNumber', () => new isNumber);

export default directivesModule



