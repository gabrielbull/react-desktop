import { expect } from 'chai';
import { os } from '../../index';

describe('index', () => {
  it('detect os', () => {
    expect(os()).to.be.oneOf(['osx', 'windows']);
  });
});
