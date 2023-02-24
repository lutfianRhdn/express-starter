
const {Users} = require('../../../utils/database');
const {GetAllUsersRepository} = require('../repositories');
const {expect} = require('chai');

describe('GetAllUsersRepository()', () => {
    it('should return an array of users', async () => {
        const users = await GetAllUsersRepository();
        expect(users).to.be.an('array');
    });

    it('should return an array of objects', async () => {
        const users = await GetAllUsersRepository();
        expect(users[0]).to.be.an('object');
    });

    it('should contain the correct properties for each user object', async () => {
        const users = await GetAllUsersRepository();
        expect(users[0]).to.have.all.keys(['id', 'name', 'username','createdAt','password','role','updatedAt']);  // assuming these are the properties of a user object in our database 
    });

  
});