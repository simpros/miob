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

import { ContentType, HttpClient, RequestParams } from './http-client';

export class File<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags file
	 * @name ReadFile
	 * @summary Reads file
	 * @request GET:/file/{objectId}/{fileName}
	 * @secure
	 */
	readFile = (objectId: string, fileName: string, params: RequestParams = {}) =>
		this.request<void, void>({
			path: `/file/${objectId}/${fileName}`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags file
	 * @name WriteFile
	 * @summary Writes file
	 * @request POST:/file/{objectId}/{fileName}
	 * @secure
	 */
	writeFile = (
		objectId: string,
		fileName: string,
		data: {
			/** File content */
			file: File;
		},
		params: RequestParams = {}
	) =>
		this.request<void, void>({
			path: `/file/${objectId}/${fileName}`,
			method: 'POST',
			body: data,
			secure: true,
			type: ContentType.FormData,
			...params
		});
	/**
	 * No description
	 *
	 * @tags file
	 * @name DeleteFile
	 * @summary deletes file
	 * @request DELETE:/file/{objectId}/{fileName}
	 * @secure
	 */
	deleteFile = (objectId: string, fileName: string, params: RequestParams = {}) =>
		this.request<void, void>({
			path: `/file/${objectId}/${fileName}`,
			method: 'DELETE',
			secure: true,
			...params
		});
}
