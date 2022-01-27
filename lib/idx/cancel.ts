/*!
 * Copyright (c) 2021, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { OktaAuthInterface, IdxOptions, IdxTransactionMeta } from '../types';
import { run } from './run';
import { getFlowSpecification } from './flow';

export type CancelOptions = IdxOptions;

export async function cancel (authClient: OktaAuthInterface, options?: CancelOptions) {
  const meta = authClient.transactionManager.load() as IdxTransactionMeta;
  const flowSpec = getFlowSpecification(authClient, meta.flow);
  return run(authClient, {
    ...options,
    ...flowSpec,
    actions: ['cancel']
  });
}
