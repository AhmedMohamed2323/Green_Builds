/// <reference types="cypress" />
/// <reference types="cypress" />
/// <reference types="cypress" />
/// <reference types="cypress" />
import * as React from 'react';
import type { InternalMountOptions, MountOptions, MountReturn, UnmountArgs } from './types';
/**
 * Create an `mount` function. Performs all the non-React-version specific
 * behavior related to mounting. The React-version-specific code
 * is injected. This helps us to maintain a consistent public API
 * and handle breaking changes in React's rendering API.
 *
 * This is designed to be consumed by `npm/react{16,17,18}`, and other React adapters,
 * or people writing adapters for third-party, custom adapters.
 */
export declare const makeMountFn: (type: 'mount' | 'rerender', jsx: React.ReactNode, options?: MountOptions, rerenderKey?: string, internalMountOptions?: InternalMountOptions) => globalThis.Cypress.Chainable<MountReturn>;
/**
 * Create an `unmount` function. Performs all the non-React-version specific
 * behavior related to unmounting.
 *
 * This is designed to be consumed by `npm/react{16,17,18}`, and other React adapters,
 * or people writing adapters for third-party, custom adapters.
 */
export declare const makeUnmountFn: (options: UnmountArgs) => Cypress.Chainable<undefined>;
declare const _mount: (jsx: React.ReactNode, options?: MountOptions) => Cypress.Chainable<MountReturn>;
export declare const createMount: (defaultOptions: MountOptions) => (element: React.ReactElement, options?: MountOptions) => Cypress.Chainable<MountReturn>;
/** @deprecated Should be removed in the next major version */
export default _mount;
export interface JSX extends Function {
    displayName: string;
}
