describe('Testing greet function function' , function(){
    it('It should greet ' , function(){
        assert.equal(greet('Bob'), 'Dumela, Bob');

        assert.deepEqual([2,2],[2,2]);
});
it('the moment you enter Bob it should return Hello Bob' , function(){
    assert.equal(greet('Grace'), 'Dumela, Grace');

    assert.deepEqual([2,2],[2,2]);
});

});