import { IRoleService } from "./interface";
import { RoleTo } from "../../to/RoleTo";
import Roles from "../../models/Role.model";

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
    }
}

export default RoleService;