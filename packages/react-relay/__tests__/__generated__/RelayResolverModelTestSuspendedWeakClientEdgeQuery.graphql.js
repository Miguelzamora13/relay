/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<cbdd98f51630a08492070ac9dcafde3f>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ClientRequest, ClientQuery } from 'relay-runtime';
import type { LiveState } from "relay-runtime/store/experimental-live-resolvers/LiveResolverStore";
import type { DataID } from "relay-runtime";
import type { tests_TodoDescription____relay_model_instance$data } from "./../../../relay-runtime/store/__tests__/resolvers/__generated__/tests_TodoDescription____relay_model_instance.graphql";
import type { tests_TodoModel____relay_model_instance$data } from "./../../../relay-runtime/store/__tests__/resolvers/__generated__/tests_TodoModel____relay_model_instance.graphql";
import {todo_model as queryTodoModelResolverType} from "../../../relay-runtime/store/__tests__/resolvers/QueryTodoModel.js";
// Type assertion validating that `queryTodoModelResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryTodoModelResolverType: (
  args: {|
    todoID: string,
  |},
) => ?{|
  +id: DataID,
|});
import {text_with_prefix as todoDescriptionTextWithPrefixResolverType} from "../../../relay-runtime/store/__tests__/resolvers/TodoDescription.js";
// Type assertion validating that `todoDescriptionTextWithPrefixResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(todoDescriptionTextWithPrefixResolverType: (
  __relay_model_instance: tests_TodoDescription____relay_model_instance$data['__relay_model_instance'],
  args: {|
    prefix: string,
  |},
) => ?string);
import {fancy_description_suspends as todoModelFancyDescriptionSuspendsResolverType} from "../../../relay-runtime/store/__tests__/resolvers/TodoModel.js";
// Type assertion validating that `todoModelFancyDescriptionSuspendsResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(todoModelFancyDescriptionSuspendsResolverType: (
  __relay_model_instance: tests_TodoModel____relay_model_instance$data['__relay_model_instance'],
) => LiveState<?TodoDescription>);
import type { tests_TodoModel__fancy_description_suspends$normalization } from "./../../../relay-runtime/store/__tests__/resolvers/__generated__/tests_TodoModel__fancy_description_suspends$normalization.graphql";
import type { TodoDescription } from "../../../relay-runtime/store/__tests__/resolvers/TodoDescription.js";
export type RelayResolverModelTestSuspendedWeakClientEdgeQuery$variables = {|
  id: string,
|};
export type RelayResolverModelTestSuspendedWeakClientEdgeQuery$data = {|
  +todo_model: ?{|
    +fancy_description_suspends: ?{|
      +text_with_prefix: ?string,
    |},
  |},
|};
export type RelayResolverModelTestSuspendedWeakClientEdgeQuery = {|
  response: RelayResolverModelTestSuspendedWeakClientEdgeQuery$data,
  variables: RelayResolverModelTestSuspendedWeakClientEdgeQuery$variables,
|};
*/

var node/*: ClientRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "todoID",
    "variableName": "id"
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "prefix",
    "value": "[x]"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": {
      "hasClientEdges": true
    },
    "name": "RelayResolverModelTestSuspendedWeakClientEdgeQuery",
    "selections": [
      {
        "kind": "ClientEdgeToClientObject",
        "concreteType": "TodoModel",
        "backingField": {
          "alias": null,
          "args": (v1/*: any*/),
          "fragment": null,
          "kind": "RelayResolver",
          "name": "todo_model",
          "resolverModule": require('./../../../relay-runtime/store/__tests__/resolvers/QueryTodoModel').todo_model,
          "path": "todo_model"
        },
        "linkedField": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "TodoModel",
          "kind": "LinkedField",
          "name": "todo_model",
          "plural": false,
          "selections": [
            {
              "kind": "ClientEdgeToClientObject",
              "concreteType": "TodoDescription",
              "backingField": {
                "alias": null,
                "args": null,
                "fragment": {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "tests_TodoModel____relay_model_instance"
                },
                "kind": "RelayLiveResolver",
                "name": "fancy_description_suspends",
                "resolverModule": require('relay-runtime/experimental').weakObjectWrapperLive(require('relay-runtime/experimental').resolverDataInjector(require('./../../../relay-runtime/store/__tests__/resolvers/__generated__/tests_TodoModel____relay_model_instance.graphql'), require('./../../../relay-runtime/store/__tests__/resolvers/TodoModel').fancy_description_suspends, '__relay_model_instance', true), '__relay_model_instance', false),
                "path": "todo_model.fancy_description_suspends",
                "normalizationInfo": {
                  "concreteType": "TodoDescription",
                  "plural": false,
                  "normalizationNode": require('./../../../relay-runtime/store/__tests__/resolvers/__generated__/tests_TodoModel__fancy_description_suspends$normalization.graphql')
                }
              },
              "linkedField": {
                "alias": null,
                "args": null,
                "concreteType": "TodoDescription",
                "kind": "LinkedField",
                "name": "fancy_description_suspends",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": (v2/*: any*/),
                    "fragment": {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "tests_TodoDescription____relay_model_instance"
                    },
                    "kind": "RelayResolver",
                    "name": "text_with_prefix",
                    "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./../../../relay-runtime/store/__tests__/resolvers/__generated__/tests_TodoDescription____relay_model_instance.graphql'), require('./../../../relay-runtime/store/__tests__/resolvers/TodoDescription').text_with_prefix, '__relay_model_instance', true),
                    "path": "todo_model.fancy_description_suspends.text_with_prefix"
                  }
                ],
                "storageKey": null
              }
            }
          ],
          "storageKey": null
        }
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RelayResolverModelTestSuspendedWeakClientEdgeQuery",
    "selections": [
      {
        "kind": "ClientEdgeToClientObject",
        "backingField": {
          "name": "todo_model",
          "args": (v1/*: any*/),
          "fragment": null,
          "kind": "RelayResolver",
          "storageKey": null,
          "isOutputType": false
        },
        "linkedField": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "TodoModel",
          "kind": "LinkedField",
          "name": "todo_model",
          "plural": false,
          "selections": [
            {
              "kind": "ClientEdgeToClientObject",
              "backingField": {
                "name": "fancy_description_suspends",
                "args": null,
                "fragment": {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "name": "__relay_model_instance",
                      "args": null,
                      "fragment": {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/)
                        ],
                        "type": "TodoModel",
                        "abstractKey": null
                      },
                      "kind": "RelayResolver",
                      "storageKey": null,
                      "isOutputType": false
                    }
                  ],
                  "type": "TodoModel",
                  "abstractKey": null
                },
                "kind": "RelayResolver",
                "storageKey": null,
                "isOutputType": true
              },
              "linkedField": {
                "alias": null,
                "args": null,
                "concreteType": "TodoDescription",
                "kind": "LinkedField",
                "name": "fancy_description_suspends",
                "plural": false,
                "selections": [
                  {
                    "name": "text_with_prefix",
                    "args": (v2/*: any*/),
                    "fragment": {
                      "kind": "InlineFragment",
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "__relay_model_instance",
                          "storageKey": null
                        }
                      ],
                      "type": "TodoDescription",
                      "abstractKey": null
                    },
                    "kind": "RelayResolver",
                    "storageKey": "text_with_prefix(prefix:\"[x]\")",
                    "isOutputType": true
                  }
                ],
                "storageKey": null
              }
            },
            (v3/*: any*/)
          ],
          "storageKey": null
        }
      }
    ]
  },
  "params": {
    "cacheID": "c2dfd6dff420802199109b2dc95c47d8",
    "id": null,
    "metadata": {},
    "name": "RelayResolverModelTestSuspendedWeakClientEdgeQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "c111f7607023b81dcb652418f91c61df";
}

module.exports = ((node/*: any*/)/*: ClientQuery<
  RelayResolverModelTestSuspendedWeakClientEdgeQuery$variables,
  RelayResolverModelTestSuspendedWeakClientEdgeQuery$data,
>*/);
