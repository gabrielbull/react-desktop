import { expect } from 'chai';
import { os } from '../../src/index';

describe('index', () => {
  it('detect os', () => {
    expect(os()).to.be.oneOf(['osx', 'windows']);
  });
});
