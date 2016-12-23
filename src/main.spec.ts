import { Main } from './main';

describe('main', () => {

    it("should be defined", () => {
        var m = new Main();
        expect(m).toBeTruthy();
    });

    it("should be true", () => {
        expect(true).toBeTruthy();
    });

});