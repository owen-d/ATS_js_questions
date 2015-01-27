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

describe('set', function(){
  var set;
  beforeEach(function(){
    set = new ATS.set();
  });
  it('should add', function(){
    set.add(2);
    set.add(6);
    expect(set.storage).to.eql([2, 6]);
  });
  it('should implement intersect', function(){
    set.add(2);
    set.add(4);
    set.intersect(2, 4);
    expect(set.storage).to.eql([[2, 4]]);
    set.add(5);
    expect(set.storage).to.eql([[2, 4], 5]);
    set.intersect();
    expect(set.storage).to.eql([[2, 4], 5]);
  });
});
