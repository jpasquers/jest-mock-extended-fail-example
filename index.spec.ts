import { mockDeep, mock } from "jest-mock-extended";


interface X {
    y: {
        [a: string]: string
    }
    z: {
        z1: string;
    }
}


describe('nested mock', () => {
    it('mockDeep should be empty inner object', () => {
        let deepMock = mockDeep<X>({y: {}});
        //This fails -> Received: [Function mockConstructor]
        expect(deepMock.y["something"]).toBeUndefined();
    })

    it('mock should be empty inner object', () => {
        let shallowMock = mock<X>({y: {}});
        //This fails -> Received: [Function mockConstructor]
        expect(shallowMock.y["something"]).toBeUndefined();
    })
})


