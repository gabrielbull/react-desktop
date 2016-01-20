import { expect } from 'chai';
import requireUncached from 'require-uncached';

describe('Desktop', () => {
  describe('#get os', () => {
    describe('process.platform', () => {
      let _platform;
      beforeEach(() => {
        _platform = Object.getOwnPropertyDescriptor(process, 'platform');
      });

      afterEach(() => {
        Object.defineProperty(process, 'platform', _platform);
      });

      it('works on win32', () => {
        Object.defineProperty(process, 'platform', {
          value: 'win32'
        });
        const Desktop = requireUncached('../src/Desktop');
        expect(Desktop.os).to.equal('win');
      });

      it('works on darwin', () => {
        Object.defineProperty(process, 'platform', {
          value: 'darwin'
        });
        const Desktop = requireUncached('../src/Desktop');
        expect(Desktop.os).to.equal('osx');
      });

      it('uses default:osx on other platform', () => {
        Object.defineProperty(process, 'platform', {
          value: 'other-os'
        });
        const Desktop = requireUncached('../src/Desktop');
        expect(Desktop.os).to.equal('osx');
      });
    });

    describe('navigator.userAgent', () => {
      let _userAgent;
      beforeEach(() => {
        _userAgent = Object.getOwnPropertyDescriptor(navigator, 'userAgent');
      });

      afterEach(() => {
        Object.defineProperty(navigator, 'userAgent', _userAgent);
      });

      it('works on Macintosh', () => {
        Object.defineProperty(navigator, 'userAgent', {
          value: 'Mozilla/5.0 (Windows NT 6.3; WOW64;' +
            ' Trident/7.0; Touch; rv:11.0) like Gecko'
        });
        const Desktop = requireUncached('../src/Desktop');
        expect(Desktop.os).to.equal('win');
      });

      it('works on Macintosh', () => {
        Object.defineProperty(navigator, 'userAgent', {
          value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0)' +
            ' AppleWebKit/537.36 (KHTML, like Gecko)' +
            ' Chrome/46.0.2490.80 Safari/537.36'
        });
        const Desktop = requireUncached('../src/Desktop');
        expect(Desktop.os).to.equal('osx');
      });
    });
  });

  describe('#set os', () => {
    it('works', () => {
      const Desktop = requireUncached('../src/Desktop');
      Desktop.os = 'win';
      expect(Desktop.os).to.equal('win');
      Desktop.os = 'osx';
      expect(Desktop.os).to.equal('osx');
    });
  });
});
