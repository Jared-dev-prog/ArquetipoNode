process.env.NODE_ENV = 'test'

import { expect } from "chai";
import UserFacade from '../../src/facade/User/facade';
import { db } from '../../src/config/connection/database';
import User from "../../src/models/User.model";
import * as Kafka from "../../src/config/stream/kafka";
import { UserTo } from "../../src/to/UserTo";
import { ParametersError } from "../../src/config/error";
import { RoleTo } from "../../src/to/RoleTo";

describe('RoleFacade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
       
    });

    describe('Create', () => {
        it('should return one user', async () => {
            let roleTo: RoleTo = {
                name: "Admin",
            }
            const user: RoleTo = await UserFacade.create(roleTo);
            expect(user.id).to.not.be.null;
            expect(user.name).equal("Admin");
        });
    });

    describe('Create Error atributes required', () => {
        it('should return error -> attributes required', async () => {
            let roleTo: RoleTo = {
                name: "Admin",
            }
            try {
                await UserFacade.create(roleTo);
            } catch(error: any){
                expect(error).instanceOf(ParametersError)
                expect(error.message).equal('El atributo name es requerido')
            }
        });
    });
});