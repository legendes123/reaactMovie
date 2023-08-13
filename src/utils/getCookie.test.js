import { getCookie } from './getCookie'


// Первый аргумент функции test - это описание того, что мы тестируем и что будем ожидать
// Описание всегда должно быть простым и понятным

describe('check cookies value',()=>{
	test('equal no undefined in cookies', () => {
		expect(getCookie('token')).not.toBe(null);
	});
	test('equal no undefined in cookies', () => {
		expect(getCookie('account_id')).not.toBe(null);
	});
})
