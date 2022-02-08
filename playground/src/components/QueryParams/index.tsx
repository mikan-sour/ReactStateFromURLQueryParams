import React from 'react';
import QueryParamsController from './controller';
import QueryParamsView from './view';

export default function QueryParams() {
  return (
    <QueryParamsController>
        <QueryParamsView/>
    </QueryParamsController>
  );
}
