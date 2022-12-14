import { getNickUser } from './getNickUser';

const weatherArr = [
    {
        nickname: 'Denis',
    },
    {
        nickname: 'Igor',
    },
    {
        nickname: 'Lera',
    },
];

describe('getIndexCity', () => {
    test('Correct name', () => {
        expect(getNickUser(weatherArr, 'Denis')).toEqual(0);
    });
    test('Incorrect  name', () => {
        expect(getNickUser(weatherArr, 'Ilona')).toEqual(-1);
    });
    test('Empty name array', () => {
        expect(getNickUser([], 'Denis')).toEqual(-1);
    });
});
