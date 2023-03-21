process.env.NODE_ENV = "test";

import { expect } from "chai";
import UserFacade from "../../src/facade/User/facade";
import { db } from "../../src/config/connection/database";
import User from "../../src/models/User.model";
import * as Kafka from "../../src/config/stream/kafka";
import { UserTo } from "../../src/to/UserTo";
import { ParametersError } from "../../src/config/error";
import { RoleTo } from "../../src/to/RoleTo";
import RoleFacade from "../../src/facade/Role/facade";
import Role from "../../src/models/Role.model";

describe("RoleFacade Test", () => {
  before("Init", async () => {
    await db.sync({ force: true });
  });

  describe("Create", () => {
    it("should return one role", async () => {
      let roleTo: RoleTo = {
        name: "Admin2.0",
      };
      const role: RoleTo = await RoleFacade.create(roleTo);
      expect(role.id).to.not.be.null
      expect(role.name).equal("Admin2.0");
    });
  });

  describe("FindAll", () => {
    it("should return one roles", async () => {
      const roles: any[] = await RoleFacade.findAll();
      expect(1).equal(roles.length);
    });
  });

  describe("Create Error atributes required", () => {
    it("should return error -> attributes required", async () => {
      let roleTo: RoleTo = {
        
      };
      try {
        await RoleFacade.create(roleTo);
      } catch (error: any) {
        expect(error).instanceOf(ParametersError);
        expect(error.message).equal("El atributo name es requerido");
      }
    });
  });

  describe("Delete", () => {
    it("should return id deleted", async () => {
      let idToDelete: number =  5;
      try {
        await RoleFacade.delete_role(idToDelete);
      } catch (error) {
        expect(error).equal(new ParametersError("No se pudo eliminar"));
      }
    });
  });

  describe("Update", () => {
    it("should return id updated", async () => {
      let idToUpdate: number = 2;
      let roleTo: RoleTo = {
        name: "Admin2.0",
      };
      try {
        await RoleFacade.update_role(idToUpdate, roleTo);
      } catch (error) {
        expect(error).equal(new ParametersError("No se pudo actualizar"));
      }
    });
  });
});
