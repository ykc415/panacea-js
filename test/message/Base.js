import { expect } from 'chai';
import config, { test } from '../../src/config';
import Base from '../../src/message';

describe('Base message', () => {
  describe('constructor', () => {
    it('throws an error without required parameters', () => {
      expect(() => new Base()).to.throw();
    });

    it('generates default message object', () => {
      const msg = new Base(test.MESSAGE.BASE);

      expect(msg.type).to.be.equal(config.MSG_TYPE.BASE.SEND);
      expect(msg.value.from_address).to.be.equal(test.MESSAGE.BASE.fromAddress);
      expect(msg.value.to_address).to.be.equal(test.MESSAGE.BASE.toAddress);
      expect(msg.value.amount).to.be.eql(test.MESSAGE.BASE.amount);
    });
  });
});
