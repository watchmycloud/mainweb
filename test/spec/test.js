(function () {
    'use strict';

    describe( 'Give it some context', function () {
        describe( 'maybe a bit more context here', function () {
            it( 'should run here few assertions', function () {
                assert.ok( 'Nothing to see here' )
                expect( true ).to.be.ok
            } );
        } );
    } );
})();
