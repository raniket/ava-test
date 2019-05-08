import test from 'ava';

const checkAuth = async (username, password) => {
    if (!username) return `username is missing`;
    if(!password) return  `password is missing`;
    if((username === 'raniket') && (password === 'password')) return true;
}

test(`check user auth`, async (t) => {
    const username = 'raniket';
    const password = 'password';
    t.is(await checkAuth(username, password), true);
});

test(`pass`, t => {
    t.pass();
})