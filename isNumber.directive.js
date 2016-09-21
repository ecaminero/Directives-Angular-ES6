import _ from 'lodash';

class isNumber {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
        this.scope = {};
    }

    link(scope, element, attr, ctrl) {
        ctrl.$parsers.push(function (val) {
            if (_.isEmpty(val)) return '';
            var transformed = val.replace(/[^0-9]/g, '');
            if (!_.isEqual(transformed, val)) {
                ctrl.$setViewValue(transformed);
                ctrl.$render();
            }
            return transformed;
        });
    }

}

export default isNumber;
