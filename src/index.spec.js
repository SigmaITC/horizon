import {expect} from 'chai';
import add from './index';

describe('add', () => {

    it('should return the sum', () => {
        expect(add(1, 3)).to.equal(4);
    });

});
