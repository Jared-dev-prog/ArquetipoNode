import { IRoleService } from "./interface";
import { RoleTo } from "../../to/RoleTo";
import Roles from "../../models/Role.model";
import Role from "../../models/Role.model";
import { delete_role } from "../../facade/Role";
import { ParametersError } from "../../config/error";

/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleService: IRoleService = {

    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */

    async create(role: RoleTo): Promise<RoleTo> {
        let roleModel = await Roles.create(role)
        return roleModel
    },

    /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
    async findAll(): Promise<any[]> {
    let roleResponse = await Role.findAll()
    return roleResponse;
  },

  async delete_role(idToDelete: number): Promise<void> {
    try {
      let result = Role.destroy({
        where: {
          id: idToDelete,
        },
      });
      console.log("Result on service: ", result);
    } catch (error) {
      console.log("Error on service: ", error);
      throw new ParametersError("No se pudo eliminar");
    }
  },

  async update_role(idToUpdate: number, userTo: RoleTo): Promise<void> {
    try {
      let result = await Role.update(userTo, { where: { id: idToUpdate } });
      console.log("Result on service update: ", result);
    } catch (error) {
      console.log("Error on service update ", error);
      throw new ParametersError("No se pudo eliminar");
    }
  },
}

export default RoleService;