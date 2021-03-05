class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (
                (id === 'Puwan' && password === 'Taehwan') ||
                (id === 'coder' && password === 'good')
            ) {
                resolve(id);
            } else {
                reject(new Error('not Found'));
            }
        }, 2000);
    });
}

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'Puwan') {
                    resolve({ name: 'Puwan', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('이름을 입력하세요');
const password = prompt('비밀번호를 입력하세요');

userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log());