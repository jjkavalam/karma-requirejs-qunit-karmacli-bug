define(['QUnit', 'calculator'],function(QUnit, calculator){
    QUnit.test('calculator add two numbers correctly',function(assert){
        assert.equal(5, calculator.add(2,3));
    });
    QUnit.test('calculator performs trignometry calculations correctly',function(assert){
        assert.equal(1, calculator.sin(Math.PI/2));
    });
});