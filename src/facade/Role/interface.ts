import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @interface IRoleFacade
 */
export interface IRoleFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IRoleFacade
     */
    create(role: RoleTo): Promise<RoleTo>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    findAll(): Promise<any[]>;

    /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  delete_role(id: number): Promise<void>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  update_role(idToUpdate: number, roleTo: RoleTo): Promise<void>;
}