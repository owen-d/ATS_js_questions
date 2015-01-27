var expect = require('chai').expect;
var ATS = require('./ATS_js_questions');

describe('indexFinder', function(){
    it('should pass tests', function(){
      expect(ATS.indexFinder([1,2,3,4,5,6], 5)).to.equal(4);
      expect(ATS.indexFinder([1,2], 4)).to.equal(-1);
      expect(ATS.indexFinder([], 2)).to.equal(-1);
      expect(ATS.indexFinder([1,2,3,4,5], 2)).to.equal(1);
    });
  });
