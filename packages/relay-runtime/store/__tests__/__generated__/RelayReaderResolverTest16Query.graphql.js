/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<f272163b436987b3d8caa2d44a27e9f1>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import userUserProfilePictureUriWithScaleResolver from "../resolvers/UserProfilePictureResolver.js";
export type RelayReaderResolverTest16Query$variables = {|
  scale: number,
|};
export type RelayReaderResolverTest16Query$data = {|
  +me: ?{|
    +user_profile_picture_uri_with_scale: ?$Call<<R>((...empty[]) => R) => R, typeof userUserProfilePictureUriWithScaleResolver>,
  |},
|};
export type RelayReaderResolverTest16Query = {|
  response: RelayReaderResolverTest16Query$data,
  variables: RelayReaderResolverTest16Query$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "scale"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "scale",
    "variableName": "scale"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayReaderResolverTest16Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "fragment": {
              "args": (v1/*: any*/),
              "kind": "FragmentSpread",
              "name": "UserProfilePictureResolver"
            },
            "kind": "RelayResolver",
            "name": "user_profile_picture_uri_with_scale",
            "resolverModule": require('./../resolvers/UserProfilePictureResolver.js'),
            "path": "me.user_profile_picture_uri_with_scale"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RelayReaderResolverTest16Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "profile_picture",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "uri",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ce6c81d70d91f0c123cae5944acf974a",
    "id": null,
    "metadata": {},
    "name": "RelayReaderResolverTest16Query",
    "operationKind": "query",
    "text": "query RelayReaderResolverTest16Query(\n  $scale: Float!\n) {\n  me {\n    ...UserProfilePictureResolver_Z91dU\n    id\n  }\n}\n\nfragment UserProfilePictureResolver_Z91dU on User {\n  profile_picture(scale: $scale) {\n    uri\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "5375be16852267c4a2ae04391121a772";
}

module.exports = ((node/*: any*/)/*: Query<
  RelayReaderResolverTest16Query$variables,
  RelayReaderResolverTest16Query$data,
>*/);