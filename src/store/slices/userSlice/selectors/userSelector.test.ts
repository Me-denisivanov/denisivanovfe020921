import { RootState } from '../../../index';
import { getUserData } from './userSelectors';

describe('weatherSelectors test', () => {
    test('should return data', () => {
        const data = [{
            id: 2,
            name: 'namess',
        }];

        const state: DeepPartial<RootState> = {
            users: {
                data,
            },
        };

        expect(getUserData(state as RootState)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<RootState> = {};

        expect(getUserData(state as RootState)).toEqual(undefined);
    });
});
