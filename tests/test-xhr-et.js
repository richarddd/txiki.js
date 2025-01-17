import { assert } from '@tjs/std';


const url = 'https://httpbin.org/get';
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.addEventListener('loadend', () => {
    assert.eq(xhr.readyState, xhr.DONE, 'readyState is DONE');
    assert.eq(xhr.responseURL, url, 'url is the same');
    assert.eq(xhr.status, 200, 'status is 200');
});
xhr.send();
