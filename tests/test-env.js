import { assert } from '@tjs/std';


(async () => {
    assert.throws(() => { tjs.getenv() }, Error, 'must pass a string');
    assert.throws(() => { tjs.getenv(1234) }, Error, 'must pass a string');
    assert.ok(tjs.getenv('PATH'));

    assert.throws(() => { tjs.setenv() }, Error, 'must pass a string');
    assert.throws(() => { tjs.setenv('FOO') }, Error, 'must pass a string');
    tjs.setenv('FOO', 123);
    assert.eq(tjs.environ.FOO, '123');
    tjs.setenv('FOO', 'BAR');
    assert.eq(tjs.environ.FOO, 'BAR');

    assert.throws(() => { tjs.unsetenv() }, Error, 'must pass a string');
    assert.throws(() => { tjs.unsetenv(1234) }, Error, 'must pass a string');
    tjs.unsetenv('FOO');
    assert.eq(tjs.environ.FOO, undefined);
})();
