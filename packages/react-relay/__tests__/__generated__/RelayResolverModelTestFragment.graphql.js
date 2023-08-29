/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<738708508d4694b90cdd6075d74708f6>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { tests_TodoDescription____relay_model_instance$data } from "./../../../relay-runtime/store/__tests__/resolvers/__generated__/tests_TodoDescription____relay_model_instance.graphql";
import type { tests_TodoModel____relay_model_instance$data } from "./../../../relay-runtime/store/__tests__/resolvers/__generated__/tests_TodoModel____relay_model_instance.graphql";
import type { tests_TodoModel__fancy_description$normalization } from "./../../../relay-runtime/store/__tests__/resolvers/__generated__/tests_TodoModel__fancy_description$normalization.graphql";
import type { TodoDescription } from "../../../relay-runtime/store/__tests__/resolvers/TodoDescription.js";
import type { FragmentType } from "relay-runtime";
import {color as todoDescriptionColorResolverType} from "../../../relay-runtime/store/__tests__/resolvers/TodoDescription.js";
// Type assertion validating that `todoDescriptionColorResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(todoDescriptionColorResolverType: (
  __relay_model_instance: tests_TodoDescription____relay_model_instance$data['__relay_model_instance'],
) => ?mixed);
import {text as todoDescriptionTextResolverType} from "../../../relay-runtime/store/__tests__/resolvers/TodoDescription.js";
// Type assertion validating that `todoDescriptionTextResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(todoDescriptionTextResolverType: (
  __relay_model_instance: tests_TodoDescription____relay_model_instance$data['__relay_model_instance'],
) => ?string);
import {fancy_description as todoModelFancyDescriptionResolverType} from "../../../relay-runtime/store/__tests__/resolvers/TodoModel.js";
// Type assertion validating that `todoModelFancyDescriptionResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(todoModelFancyDescriptionResolverType: (
  __relay_model_instance: tests_TodoModel____relay_model_instance$data['__relay_model_instance'],
) => ?TodoDescription);
declare export opaque type RelayResolverModelTestFragment$fragmentType: FragmentType;
export type RelayResolverModelTestFragment$data = {|
  +fancy_description: ?{|
    +color: ?ReturnType<typeof todoDescriptionColorResolverType>,
    +text: ?string,
  |},
  +id: string,
  +$fragmentType: RelayResolverModelTestFragment$fragmentType,
|};
export type RelayResolverModelTestFragment$key = {
  +$data?: RelayResolverModelTestFragment$data,
  +$fragmentSpreads: RelayResolverModelTestFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "tests_TodoDescription____relay_model_instance"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true
  },
  "name": "RelayResolverModelTestFragment",
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
        "kind": "RelayResolver",
        "name": "fancy_description",
        "resolverModule": require('relay-runtime/experimental').weakObjectWrapper(require('relay-runtime/experimental').resolverDataInjector(require('./../../../relay-runtime/store/__tests__/resolvers/__generated__/tests_TodoModel____relay_model_instance.graphql'), require('./../../../relay-runtime/store/__tests__/resolvers/TodoModel').fancy_description, '__relay_model_instance', true), '__relay_model_instance', false),
        "path": "fancy_description",
        "normalizationInfo": {
          "concreteType": "TodoDescription",
          "plural": false,
          "normalizationNode": require('./../../../relay-runtime/store/__tests__/resolvers/__generated__/tests_TodoModel__fancy_description$normalization.graphql')
        }
      },
      "linkedField": {
        "alias": null,
        "args": null,
        "concreteType": "TodoDescription",
        "kind": "LinkedField",
        "name": "fancy_description",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "fragment": (v0/*: any*/),
            "kind": "RelayResolver",
            "name": "text",
            "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./../../../relay-runtime/store/__tests__/resolvers/__generated__/tests_TodoDescription____relay_model_instance.graphql'), require('./../../../relay-runtime/store/__tests__/resolvers/TodoDescription').text, '__relay_model_instance', true),
            "path": "fancy_description.text"
          },
          {
            "alias": null,
            "args": null,
            "fragment": (v0/*: any*/),
            "kind": "RelayResolver",
            "name": "color",
            "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./../../../relay-runtime/store/__tests__/resolvers/__generated__/tests_TodoDescription____relay_model_instance.graphql'), require('./../../../relay-runtime/store/__tests__/resolvers/TodoDescription').color, '__relay_model_instance', true),
            "path": "fancy_description.color"
          }
        ],
        "storageKey": null
      }
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "TodoModel",
  "abstractKey": null
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "7bd57e46b080996faed28eb55ca25855";
}

module.exports = ((node/*: any*/)/*: Fragment<
  RelayResolverModelTestFragment$fragmentType,
  RelayResolverModelTestFragment$data,
>*/);
