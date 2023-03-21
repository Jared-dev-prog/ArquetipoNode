import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @interface IRoleService
 */
export interface IRoleService {

     /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleService
     */
    create(role: RoleTo): Promise<RoleTo>;

    /**
   * @returns {Promise<any[]>}
   * @memberof IUserService
   */
  findAll(): Promise<any[]>;
}