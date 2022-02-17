import { mockDeep } from "jest-mock-extended";


interface X {
    y: {
        [a: string]: string
    }
    z: {
        z1: string;
    }
}


describe('nested mock', () => {
    it('should be empty inner object', () => {
        let mock = mockDeep<X>({y: {}});
        //This fails -> Received: [Function mockConstructor]
        expect(mock.y["something"]).toBeUndefined();
    })
})


