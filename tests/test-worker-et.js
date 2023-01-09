import path from '@tjs/std/path';
import assert from '@tjs/std/assert';

const w = new Worker(path.join(import.meta.dirname, 'helpers', 'worker.js'));
const timer = setTimeout(() => {
    w.terminate();
}, 1000);
w.addEventListener('message', event => {
    const recvData = JSON.stringify(event.data);
    assert.eq(data, recvData, 'Message received matches');
    w.terminate();
    clearTimeout(timer);
});
