/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { EnumResponse } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Enum<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags enum
	 * @name ReadMainEnums
	 * @summary Reads categories of enums
	 * @request GET:/enum
	 * @secure
	 */
	readMainEnums = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/enum`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags enum
	 * @name ReadEnums
	 * @summary Reads enums of specific type
	 * @request GET:/enum/{enumId}
	 * @secure
	 */
	readEnums = (enumId: string, params: RequestParams = {}) =>
		this.request<EnumResponse, void>({
			path: `/enum/${enumId}`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params
		});
}
