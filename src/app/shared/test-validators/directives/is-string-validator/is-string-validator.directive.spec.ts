import {FormControl} from '@angular/forms';
import {IsStringValidatorDirective} from './is-string-validator.directive';

describe('IsStringValidatorDirective', () => {
    let directive: IsStringValidatorDirective;

    beforeEach(() => {
        directive = new IsStringValidatorDirective();
    });

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });

    it('Форма с числом', () => {
        const expectedValue = directive.validate(new FormControl('2000'));

        expect(expectedValue).toEqual({isString: 'Is not string'});
    });

    it('Форма без числа', () => {
        const expectedValue = directive.validate(new FormControl('ABC'));

        expect(expectedValue).toBeNull();
    });
});
