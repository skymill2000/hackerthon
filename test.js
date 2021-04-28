const user = require('./services/user_db');
const tester = async () => {
    const point = await user.userPoint(1);
    console.log('my',point);
}
tester();
