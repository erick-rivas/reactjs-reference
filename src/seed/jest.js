import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Route } from 'react-router';
import { render as testRender } from '@testing-library/react';

import * as gql from "seed/gql";
import * as api from "seed/api";

const render = function(
  Component,
  {
    path = "/",
    history=null
  } = {}){
  testRender(
  <MemoryRouter history={history}>
    <Route path={path}
      component={(props) =>
        <div>
          { React.cloneElement(Component, Object.assign({}, props, Component.props)) }
        </div>
      }
    />
  </MemoryRouter>);
}

const mockQuery = (name, results = {}) =>
  jest.spyOn(gql, name).mockImplementation(
    (raw, id) => {
      for (let result in results){
        const model = raw.match(/[\w]+/g)[0];
        if (model == result)
          return { data: results[result], loading: false, error: null };
        }
      return { data: {}, loading: false, error: null };
    }
  );

const mockMutation = (name, results = {}) =>
  jest.spyOn(gql, name).mockImplementation((raw) => {
      for (let result in results){
        const model = raw.match(/[\w]+/g)[0];
        if (model == result)
          return [jest.fn(), { data: results[result], loading: false, error: null }];
      }
      return [jest.fn(), { data: {}, loading: false, error: null }];
    }
  );

const mockGet = (name, results = {}) =>
  jest.spyOn(api, name).mockImplementation((endpoint) => {
      for (let result in results){
        if (endpoint == result)
          return { data: results[result], loading: false, error: null };
        }
      return { data: {}, loading: false, error: null };
    }
  );

const mockReq = (name, results = {}) =>
  jest.spyOn(api, name).mockImplementation((endpoint) => {
      for (let result in results){
        if (endpoint == result)
          return { data: results[result], loading: false, error: null };
        }
      return { data: {}, loading: false, error: null };
    }
  );


const mockGql = {
    useDetail: (results = {}) => mockQuery("useDetail", results),
    useQuery: (results = {}) => mockQuery("useQuery", results),
    useCount: (results = {}) => mockQuery("useCount", results),
    usePagination: (results = {}) => mockQuery("usePagination", results),
    useSave: (results = {}) => mockMutation("useSave", results),
    useSet: (results = {}) => mockMutation("useSet", results),
    useDelete: (results = {}) => mockMutation("useDelete", results)
};

const mockApi = {
    useGet: (results = {}) => mockGet("useGet", results),
    usePost: (results = {}) => mockReq("usePost", results),
    usePut: (results = {}) => mockReq("usePut", results),
    useDelete: (results = {}) => mockReq("useDelete", results)
};

export { render, mockGql, mockApi };