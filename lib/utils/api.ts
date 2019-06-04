import fetch from 'isomorphic-unfetch';
import { ErrorResponse, TQueryParams } from 'interfaces';
import { AnnounceStatus } from 'interfaces/announcement';

export const t_host = 'http://tobacco.oms-dev.os-pub.x5.ru';
export const a_host = 'http://announcement.oms-dev.os-pub.x5.ru';
export const t_api = '/api/v1/tobacco';
export const a_api = '/api/v1/announcement';
export const auth_api = '/tobacco-gk/v2/auth/signin';

// ============================================================================================ //
// fetch
export async function take<T>(
  url: string,
  params?: RequestInit
): Promise<T | ErrorResponse> {
  return await fetch(encodeURI(url), params)
    .then(response => {
      // console.log('TCL: take response :', response);
      if (response.ok) {
        if (response.status === 204) {
          return response;
        } else return response.json();
      } else {
        let errorResponse = {
          status: response.status,
          error: response.statusText,
          message: '',
          path: response.url,
          timestamp: new Date().toLocaleTimeString('ru'),
        };
        // application/json;charset=UTF-8
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
          const responseBody = response.json();
          if (typeof responseBody === 'object') {
            return responseBody;
          } else return errorResponse;
        } else return errorResponse;
      }
    })
    .catch(error => console.error(`take ${url} catch`, error));
}

// ============================================================================================ //
export type FilterParams = Partial<{
  accessCode: string;
  barcode: string;
  expireAt: Date;
  id: string;
  status: AnnounceStatus;
  storeId: string;
  tobaccoId: string;
}>;
export function createURI(obj: FilterParams) {
  return (
    '?' +
    Object.keys(obj)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
      .join('&')
  );
}

// ============================================================================================ //
export function transToQuery(pagerParams: TQueryParams | undefined) {
  return pagerParams
    ? `&page=${pagerParams.pageNumber - 1}&size=${pagerParams.pageSize}`
    : '';
}
