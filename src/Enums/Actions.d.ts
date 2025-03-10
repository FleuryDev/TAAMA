
/**
 * @enum {Actions}
 * list of differents action in an crud object element
 * ```
 *  function rqData() {
 *      ... if(satus.action === Action.DELETE) {
 *                  ...// request  delect
 *          }
 *  }
 * ```
 * @arguments INDEX | SHOW | DELETE |SEND | CREATE | LIKE 
 * @return number
 */
export enum  Actions  {
    /**
     * Show list or alls elements
     * @enum
     * @type {CODE_RESPONSE}
     */
    INDEX = 100,
    /**
     * Action to Show one element from list
     * @enum {this}
     * @type {CODE_RESPONSE}
     */
    SHOW = 110,
    /**
     * Create a new element
     * @enum
     * @type {CODE_RESPONSE}
     */
    CREATE = 300,
    /**
     * Send request acion
     * @enum
     * @type {CODE_RESPONSE}
     */
    SEND = 350,
    /**
     * React to an element 
     * @enum
     * @type {CODE_RESPONSE}
     */
    LIKE = 50,
    /**
     * Delete element action
     * @enum
     * @type {CODE_RESPONSE}
     */
    DELETE = 450,


}
