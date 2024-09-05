const request = require('supertest');
const crypto = require('crypto');
const app = require('../../app'); // Your Express app
const endpoint = '/extract'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function makeId() {
    const characters = 'abcdef0123456789';
    return makeRandomString(32, characters);
}
function makePropertyName(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return makeRandomString(length, characters);
}

function makeRandomString(length, characters) {
    let result = '';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}



describe('POST /extract', () => {
    it('should return an array of values', async () => {
        const propName = makePropertyName()
        const properties = []
        const nbProps = getRandomInt(10) + 1 // at least 1, max 11
        for (let index = 0; index < nbProps; index++) {
            properties.push(makePropertyName)
        }

        const nbObjects = getRandomInt(10) + 1 // at least 1, max 11
        const objs = []
        const expecteValues = []
        for (let index = 0; index < nbObjects; index++) {
            const val = crypto.randomUUID()
            const element = { [propName]: val }
            for (let index = 0; index < properties.length; index++) {
                const prop = properties[index];
                element[prop] = makeId()
            }
            expecteValues.push(val)
            objs.push(element)
        }


        const response = await request(app).post(`${endpoint}?property=${propName}`)
            .send(objs)



        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(expecteValues);
    });

    it('should return an empty array for an empty array', async () => {
        const propName = makePropertyName()
        const response = await request(app).post(`${endpoint}?property=${propName}`)
            .send([])


        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual([]);
    });

    
    it('should return an empty array for an empty body', async () => {
        const propName = makePropertyName()
        const response = await request(app).post(`${endpoint}?property=${propName}`)
            .send()


        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual([]);
    });
});
