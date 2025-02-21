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

import { HistoryRequest, HistoryResponse } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class GetHistory<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags history
	 * @name PostHistory
	 * @summary Reads history
	 * @request POST:/getHistory
	 * @secure
	 */
	postHistory = (Options: HistoryRequest, params: RequestParams = {}) =>
		this.request<HistoryResponse, void>({
			path: `/getHistory`,
			method: 'POST',
			body: Options,
			secure: true,
			type: ContentType.Json,
			format: 'json',
			...params
		});
	/**
	 * No description
	 *
	 * @tags history
	 * @name GetHistory
	 * @summary Reads history
	 * @request GET:/getHistory/{stateId}
	 * @secure
	 */
	getHistory = (
		stateId: string,
		query?: {
			/** Start time in ms */
			start?: number;
			/** End time in ms */
			end?: number;
			/** number of values if aggregate is 'onchange' or number of intervals if other aggregate method. Count will be ignored if step is set, else default is 500 if not set */
			count?: number;
			/** if FROM field should be included in answer */
			from?: boolean;
			/** if ACK field should be included in answer */
			ack?: boolean;
			/** if Q field should be included in answer */
			q?: boolean;
			/** if ID field should be included in answer */
			addId?: boolean;
			/** do not return more entries than limit */
			limit?: number;
			/** if null values should be included (false), replaced by last not null value (true) or replaced with 0 (0) */
			ignoreNull?: boolean;
			/** By default additional border values are returned to optimize charting. Set this option to true if this is not wanted (e.g. for script data processing) */
			removeBorderValues?: boolean;
			/** The returned data are always sorted by timestamp ascending. When using aggregate none and also providing count or limit this means that normally the oldest entries are returned (unless no start data is provided). Set this option to true to get the newest entries instead. */
			returnNewestEntries?: boolean;
			/** Aggregation method */
			aggregate?:
				| 'minmax'
				| 'max'
				| 'min'
				| 'average'
				| 'total'
				| 'count'
				| 'percentile'
				| 'quantile'
				| 'integral'
				| 'none';
			/** (optional) when using aggregate method percentile defines the percentile level (0..100)(defaults to 50) */
			percentile?: number;
			/** (optional) when using aggregate method quantile defines the quantile level (0..1)(defaults to 0.5) */
			quantile?: number;
			/** (optional) when using aggregate method integral defines the unit in seconds (defaults to 60s). e.g. to get integral in hours for Wh or such, set to 3600. */
			integralUnit?: string;
			/** (optional) when using aggregate method integral defines the interpolation method (defaults to none). */
			integralInterpolation?: 'linear' | 'none';
		},
		params: RequestParams = {}
	) =>
		this.request<HistoryResponse, void>({
			path: `/getHistory/${stateId}`,
			method: 'GET',
			query: query,
			secure: true,
			format: 'json',
			...params
		});
}
