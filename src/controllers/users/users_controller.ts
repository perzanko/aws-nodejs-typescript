import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda';

/**
 *
 *
 * @class UsersController
 */
class UsersController {
  /**
   *
   *
   * @param {APIGatewayProxyEvent} event
   * @param {Context} context
   * @returns {Promise<APIGatewayProxyResult>}
   * @memberof UsersController
   */
  public async index(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
    return {
      statusCode: 200,
      body: JSON.stringify([]),
    }
  }

  /**
   *
   *
   * @param {APIGatewayProxyEvent} event
   * @param {Context} context
   * @returns {Promise<APIGatewayProxyResult>}
   * @memberof UsersController
   */
  public async show(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
    return {
      statusCode: 200,
      body: JSON.stringify({}),
    }
  }
}


export const show = new UsersController().show
export const index = new UsersController().index
