import { expect } from 'chai';
import * as Color from '../../src/color';

describe('Color', () => {
  describe('#colorLuminance', () => {

  });

  describe('#hexToRgb', () => {
    it('works', () => {
      expect(Color.hexToRgb('#000000')).to.deep.equal({ r: 0, g: 0, b: 0 });
      expect(Color.hexToRgb('#1883d7')).to.deep.equal({ r: 24, g: 131, b: 215 });
      expect(Color.hexToRgb('#ffffff')).to.deep.equal({ r: 255, g: 255, b: 255 });
      expect(Color.hexToRgb('#000')).to.deep.equal({ r: 0, g: 0, b: 0 });
      expect(Color.hexToRgb('#fff')).to.deep.equal({ r: 255, g: 255, b: 255 });
    });
  });

  describe('#transparentize', () => {
    it('works', () => {
      expect(Color.transparentize('#000000', 0)).to.deep.equal('rgba(0, 0, 0, 1)');
      expect(Color.transparentize('#000000', 0.4)).to.deep.equal('rgba(0, 0, 0, 0.6)');
      expect(Color.transparentize('#000000', 0.7)).to.deep.equal('rgba(0, 0, 0, 0.3)');
      expect(Color.transparentize('#000000', 1)).to.deep.equal('rgba(0, 0, 0, 0)');
    });
  });

  describe('#darkenColor', () => {

  });

  describe('#ligthenColor', () => {

  });

  describe('#convertColor', () => {
    it('works', () => {
      expect(Color.convertColor('white')).to.equal('#ffffff');
      expect(Color.convertColor('blue')).to.equal('#0000ff');
      expect(Color.convertColor('black')).to.equal('#000000');
    });
  });

  describe('#isDarkColor', () => {
    it('works', () => {
      expect(Color.isDarkColor('#000000')).to.be.true;
      expect(Color.isDarkColor('#ffffff')).to.be.false;
    });
  });
});
