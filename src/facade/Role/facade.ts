
import { Utils } from "../../commons/constants/utils/Utils";
import { ParametersError } from "../../config/error";
import { RoleService } from "../../services";
import { RoleTo } from "../../to/RoleTo";
import { IRoleFacade } from "./interface";


/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleFacade: IRoleFacade = {
    
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async create(role: RoleTo): Promise<RoleTo> {
        Utils.required({name: role.name});
        let RoleResponse: RoleTo = await RoleService.create(role);
        return RoleResponse;
    },

     /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
     async findAll(): Promise<any[]> {
        let rolesResponse = await RoleService.findAll();
        return rolesResponse;
    },

    /**
   * @returns {Promise < any[] >}
   * @memberof RoleFacade
   */
  async delete_role(idToDelete: number): Promise<void> {
    try {
      await RoleService.delete_role(idToDelete);
    } catch (error) {
      throw new ParametersError("No se pudo eliminar");
    }
  },

  /**
   * @returns {Promise < any[] >}
   * @memberof RoleFacade
   */
  async update_role(idToUpdate: number, userTo: RoleTo): Promise<void> {
    try {
      await RoleService.update_role(idToUpdate, userTo);
    } catch (error) {
      throw new ParametersError("No se pudo actualizar");
    }
  },
}

export default RoleFacade;