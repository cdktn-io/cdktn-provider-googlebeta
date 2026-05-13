/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleBeyondcorpSecurityGatewayApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * User-settable Application resource ID.
  * * Must start with a letter.
  * * Must contain between 4-63 characters from '/a-z-/'.
  * * Must end with a number or letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#application_id GoogleBeyondcorpSecurityGatewayApplication#application_id}
  */
  readonly applicationId: string;
  /**
  * Optional. An arbitrary user-provided name for the Application resource.
  * Cannot exceed 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#display_name GoogleBeyondcorpSecurityGatewayApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}
  */
  readonly project?: string;
  /**
  * Type of the external application. Possible values: ["PROXY_GATEWAY", "API_GATEWAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#schema GoogleBeyondcorpSecurityGatewayApplication#schema}
  */
  readonly schema?: string;
  /**
  * ID of the Security Gateway resource this belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#security_gateway_id GoogleBeyondcorpSecurityGatewayApplication#security_gateway_id}
  */
  readonly securityGatewayId: string;
  /**
  * endpoint_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#endpoint_matchers GoogleBeyondcorpSecurityGatewayApplication#endpoint_matchers}
  */
  readonly endpointMatchers?: GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#timeouts GoogleBeyondcorpSecurityGatewayApplication#timeouts}
  */
  readonly timeouts?: GoogleBeyondcorpSecurityGatewayApplicationTimeouts;
  /**
  * upstreams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#upstreams GoogleBeyondcorpSecurityGatewayApplication#upstreams}
  */
  readonly upstreams?: GoogleBeyondcorpSecurityGatewayApplicationUpstreams[] | cdktn.IResolvable;
}
export interface GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers {
  /**
  * Required. Hostname of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#hostname GoogleBeyondcorpSecurityGatewayApplication#hostname}
  */
  readonly hostname: string;
  /**
  * Optional. Ports of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#ports GoogleBeyondcorpSecurityGatewayApplication#ports}
  */
  readonly ports: number[];
}

export function googleBeyondcorpSecurityGatewayApplicationEndpointMatchersToTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    ports: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.ports),
  }
}


export function googleBeyondcorpSecurityGatewayApplicationEndpointMatchersToHclTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ports = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ports = value.ports;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList extends cdktn.ComplexList {
  public internalValue? : GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference {
    return new GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBeyondcorpSecurityGatewayApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#create GoogleBeyondcorpSecurityGatewayApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#delete GoogleBeyondcorpSecurityGatewayApplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#update GoogleBeyondcorpSecurityGatewayApplication#update}
  */
  readonly update?: string;
}

export function googleBeyondcorpSecurityGatewayApplicationTimeoutsToTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function googleBeyondcorpSecurityGatewayApplicationTimeoutsToHclTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleBeyondcorpSecurityGatewayApplicationTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBeyondcorpSecurityGatewayApplicationTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy {
  /**
  * Required. List of regions where the application sends traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#regions GoogleBeyondcorpSecurityGatewayApplication#regions}
  */
  readonly regions: string[];
}

export function googleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyToTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
  }
}


export function googleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyToHclTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regions = value.regions;
    }
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}
export interface GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints {
  /**
  * Hostname of the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#hostname GoogleBeyondcorpSecurityGatewayApplication#hostname}
  */
  readonly hostname: string;
  /**
  * Port of the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#port GoogleBeyondcorpSecurityGatewayApplication#port}
  */
  readonly port: number;
}

export function googleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsToTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function googleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsToHclTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._port = value.port;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList extends cdktn.ComplexList {
  public internalValue? : GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference {
    return new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal {
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#endpoints GoogleBeyondcorpSecurityGatewayApplication#endpoints}
  */
  readonly endpoints: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints[] | cdktn.IResolvable;
}

export function googleBeyondcorpSecurityGatewayApplicationUpstreamsExternalToTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktn.listMapper(googleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsToTerraform, true)(struct!.endpoints),
  }
}


export function googleBeyondcorpSecurityGatewayApplicationUpstreamsExternalToHclTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktn.listMapperHcl(googleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsToHclTerraform, true)(struct!.endpoints),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoints.internalValue = value.endpoints;
    }
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints = new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints[] | cdktn.IResolvable) {
    this._endpoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }
}
export interface GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork {
  /**
  * Required. Network name is of the format:
  * 'projects/{project}/global/networks/{network}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#name GoogleBeyondcorpSecurityGatewayApplication#name}
  */
  readonly name: string;
}

export function googleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkToTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function googleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkToHclTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo {
  /**
  * The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}
  */
  readonly outputType?: string;
}

export function googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoToTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_type: cdktn.stringToTerraform(struct!.outputType),
  }
}


export function googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoToHclTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_type: {
      value: cdktn.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputType = value.outputType;
    }
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }
}
export interface GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo {
  /**
  * The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}
  */
  readonly outputType?: string;
}

export function googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoToTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_type: cdktn.stringToTerraform(struct!.outputType),
  }
}


export function googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoToHclTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_type: {
      value: cdktn.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputType = value.outputType;
    }
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }
}
export interface GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo {
  /**
  * The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}
  */
  readonly outputType?: string;
}

export function googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoToTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_type: cdktn.stringToTerraform(struct!.outputType),
  }
}


export function googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoToHclTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_type: {
      value: cdktn.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputType = value.outputType;
    }
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }
}
export interface GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders {
  /**
  * Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}
  */
  readonly outputType?: string;
  /**
  * device_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#device_info GoogleBeyondcorpSecurityGatewayApplication#device_info}
  */
  readonly deviceInfo?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo;
  /**
  * group_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#group_info GoogleBeyondcorpSecurityGatewayApplication#group_info}
  */
  readonly groupInfo?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo;
  /**
  * user_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#user_info GoogleBeyondcorpSecurityGatewayApplication#user_info}
  */
  readonly userInfo?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo;
}

export function googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersToTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_type: cdktn.stringToTerraform(struct!.outputType),
    device_info: googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoToTerraform(struct!.deviceInfo),
    group_info: googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoToTerraform(struct!.groupInfo),
    user_info: googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoToTerraform(struct!.userInfo),
  }
}


export function googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersToHclTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_type: {
      value: cdktn.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_info: {
      value: googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoToHclTerraform(struct!.deviceInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoList",
    },
    group_info: {
      value: googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoToHclTerraform(struct!.groupInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoList",
    },
    user_info: {
      value: googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoToHclTerraform(struct!.userInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    if (this._deviceInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceInfo = this._deviceInfo?.internalValue;
    }
    if (this._groupInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupInfo = this._groupInfo?.internalValue;
    }
    if (this._userInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfo = this._userInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputType = undefined;
      this._deviceInfo.internalValue = undefined;
      this._groupInfo.internalValue = undefined;
      this._userInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputType = value.outputType;
      this._deviceInfo.internalValue = value.deviceInfo;
      this._groupInfo.internalValue = value.groupInfo;
      this._userInfo.internalValue = value.userInfo;
    }
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // device_info - computed: false, optional: true, required: false
  private _deviceInfo = new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference(this, "device_info");
  public get deviceInfo() {
    return this._deviceInfo;
  }
  public putDeviceInfo(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo) {
    this._deviceInfo.internalValue = value;
  }
  public resetDeviceInfo() {
    this._deviceInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInfoInput() {
    return this._deviceInfo.internalValue;
  }

  // group_info - computed: false, optional: true, required: false
  private _groupInfo = new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference(this, "group_info");
  public get groupInfo() {
    return this._groupInfo;
  }
  public putGroupInfo(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo) {
    this._groupInfo.internalValue = value;
  }
  public resetGroupInfo() {
    this._groupInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInfoInput() {
    return this._groupInfo.internalValue;
  }

  // user_info - computed: false, optional: true, required: false
  private _userInfo = new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference(this, "user_info");
  public get userInfo() {
    return this._userInfo;
  }
  public putUserInfo(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo) {
    this._userInfo.internalValue = value;
  }
  public resetUserInfo() {
    this._userInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoInput() {
    return this._userInfo.internalValue;
  }
}
export interface GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol {
  /**
  * The configuration for the proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#allowed_client_headers GoogleBeyondcorpSecurityGatewayApplication#allowed_client_headers}
  */
  readonly allowedClientHeaders?: string[];
  /**
  * Client IP configuration. The client IP address is included if true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#client_ip GoogleBeyondcorpSecurityGatewayApplication#client_ip}
  */
  readonly clientIp?: boolean | cdktn.IResolvable;
  /**
  * Gateway identity configuration. Possible values: ["RESOURCE_NAME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#gateway_identity GoogleBeyondcorpSecurityGatewayApplication#gateway_identity}
  */
  readonly gatewayIdentity?: string;
  /**
  * Custom resource specific headers along with the values.
  * The names should conform to RFC 9110:
  * > Field names SHOULD constrain themselves to alphanumeric characters, "-",
  *   and ".", and SHOULD begin with a letter.
  * > Field values SHOULD contain only ASCII printable characters and tab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#metadata_headers GoogleBeyondcorpSecurityGatewayApplication#metadata_headers}
  */
  readonly metadataHeaders?: { [key: string]: string };
  /**
  * contextual_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#contextual_headers GoogleBeyondcorpSecurityGatewayApplication#contextual_headers}
  */
  readonly contextualHeaders?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders;
}

export function googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolToTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_client_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedClientHeaders),
    client_ip: cdktn.booleanToTerraform(struct!.clientIp),
    gateway_identity: cdktn.stringToTerraform(struct!.gatewayIdentity),
    metadata_headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadataHeaders),
    contextual_headers: googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersToTerraform(struct!.contextualHeaders),
  }
}


export function googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolToHclTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference | GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_client_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedClientHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_ip: {
      value: cdktn.booleanToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_identity: {
      value: cdktn.stringToHclTerraform(struct!.gatewayIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_headers: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadataHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    contextual_headers: {
      value: googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersToHclTerraform(struct!.contextualHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedClientHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClientHeaders = this._allowedClientHeaders;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._gatewayIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIdentity = this._gatewayIdentity;
    }
    if (this._metadataHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataHeaders = this._metadataHeaders;
    }
    if (this._contextualHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextualHeaders = this._contextualHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedClientHeaders = undefined;
      this._clientIp = undefined;
      this._gatewayIdentity = undefined;
      this._metadataHeaders = undefined;
      this._contextualHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedClientHeaders = value.allowedClientHeaders;
      this._clientIp = value.clientIp;
      this._gatewayIdentity = value.gatewayIdentity;
      this._metadataHeaders = value.metadataHeaders;
      this._contextualHeaders.internalValue = value.contextualHeaders;
    }
  }

  // allowed_client_headers - computed: false, optional: true, required: false
  private _allowedClientHeaders?: string[]; 
  public get allowedClientHeaders() {
    return this.getListAttribute('allowed_client_headers');
  }
  public set allowedClientHeaders(value: string[]) {
    this._allowedClientHeaders = value;
  }
  public resetAllowedClientHeaders() {
    this._allowedClientHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientHeadersInput() {
    return this._allowedClientHeaders;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: boolean | cdktn.IResolvable; 
  public get clientIp() {
    return this.getBooleanAttribute('client_ip');
  }
  public set clientIp(value: boolean | cdktn.IResolvable) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // gateway_identity - computed: false, optional: true, required: false
  private _gatewayIdentity?: string; 
  public get gatewayIdentity() {
    return this.getStringAttribute('gateway_identity');
  }
  public set gatewayIdentity(value: string) {
    this._gatewayIdentity = value;
  }
  public resetGatewayIdentity() {
    this._gatewayIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdentityInput() {
    return this._gatewayIdentity;
  }

  // metadata_headers - computed: false, optional: true, required: false
  private _metadataHeaders?: { [key: string]: string }; 
  public get metadataHeaders() {
    return this.getStringMapAttribute('metadata_headers');
  }
  public set metadataHeaders(value: { [key: string]: string }) {
    this._metadataHeaders = value;
  }
  public resetMetadataHeaders() {
    this._metadataHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataHeadersInput() {
    return this._metadataHeaders;
  }

  // contextual_headers - computed: false, optional: true, required: false
  private _contextualHeaders = new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference(this, "contextual_headers");
  public get contextualHeaders() {
    return this._contextualHeaders;
  }
  public putContextualHeaders(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders) {
    this._contextualHeaders.internalValue = value;
  }
  public resetContextualHeaders() {
    this._contextualHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextualHeadersInput() {
    return this._contextualHeaders.internalValue;
  }
}
export interface GoogleBeyondcorpSecurityGatewayApplicationUpstreams {
  /**
  * egress_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#egress_policy GoogleBeyondcorpSecurityGatewayApplication#egress_policy}
  */
  readonly egressPolicy?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy;
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#external GoogleBeyondcorpSecurityGatewayApplication#external}
  */
  readonly external?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#network GoogleBeyondcorpSecurityGatewayApplication#network}
  */
  readonly network?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork;
  /**
  * proxy_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#proxy_protocol GoogleBeyondcorpSecurityGatewayApplication#proxy_protocol}
  */
  readonly proxyProtocol?: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol;
}

export function googleBeyondcorpSecurityGatewayApplicationUpstreamsToTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_policy: googleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyToTerraform(struct!.egressPolicy),
    external: googleBeyondcorpSecurityGatewayApplicationUpstreamsExternalToTerraform(struct!.external),
    network: googleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkToTerraform(struct!.network),
    proxy_protocol: googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolToTerraform(struct!.proxyProtocol),
  }
}


export function googleBeyondcorpSecurityGatewayApplicationUpstreamsToHclTerraform(struct?: GoogleBeyondcorpSecurityGatewayApplicationUpstreams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_policy: {
      value: googleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyToHclTerraform(struct!.egressPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyList",
    },
    external: {
      value: googleBeyondcorpSecurityGatewayApplicationUpstreamsExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalList",
    },
    network: {
      value: googleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkList",
    },
    proxy_protocol: {
      value: googleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolToHclTerraform(struct!.proxyProtocol),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleBeyondcorpSecurityGatewayApplicationUpstreams | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPolicy = this._egressPolicy?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._proxyProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocol = this._proxyProtocol?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreams | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressPolicy.internalValue = undefined;
      this._external.internalValue = undefined;
      this._network.internalValue = undefined;
      this._proxyProtocol.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressPolicy.internalValue = value.egressPolicy;
      this._external.internalValue = value.external;
      this._network.internalValue = value.network;
      this._proxyProtocol.internalValue = value.proxyProtocol;
    }
  }

  // egress_policy - computed: false, optional: true, required: false
  private _egressPolicy = new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference(this, "egress_policy");
  public get egressPolicy() {
    return this._egressPolicy;
  }
  public putEgressPolicy(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy) {
    this._egressPolicy.internalValue = value;
  }
  public resetEgressPolicy() {
    this._egressPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPolicyInput() {
    return this._egressPolicy.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // proxy_protocol - computed: false, optional: true, required: false
  private _proxyProtocol = new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference(this, "proxy_protocol");
  public get proxyProtocol() {
    return this._proxyProtocol;
  }
  public putProxyProtocol(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol) {
    this._proxyProtocol.internalValue = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol.internalValue;
  }
}

export class GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList extends cdktn.ComplexList {
  public internalValue? : GoogleBeyondcorpSecurityGatewayApplicationUpstreams[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference {
    return new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application google_beyondcorp_security_gateway_application}
*/
export class GoogleBeyondcorpSecurityGatewayApplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_beyondcorp_security_gateway_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleBeyondcorpSecurityGatewayApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleBeyondcorpSecurityGatewayApplication to import
  * @param importFromId The id of the existing GoogleBeyondcorpSecurityGatewayApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleBeyondcorpSecurityGatewayApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_beyondcorp_security_gateway_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_beyondcorp_security_gateway_application google_beyondcorp_security_gateway_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBeyondcorpSecurityGatewayApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBeyondcorpSecurityGatewayApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_beyondcorp_security_gateway_application',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '7.32.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._project = config.project;
    this._schema = config.schema;
    this._securityGatewayId = config.securityGatewayId;
    this._endpointMatchers.internalValue = config.endpointMatchers;
    this._timeouts.internalValue = config.timeouts;
    this._upstreams.internalValue = config.upstreams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // security_gateway_id - computed: false, optional: false, required: true
  private _securityGatewayId?: string; 
  public get securityGatewayId() {
    return this.getStringAttribute('security_gateway_id');
  }
  public set securityGatewayId(value: string) {
    this._securityGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGatewayIdInput() {
    return this._securityGatewayId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // endpoint_matchers - computed: false, optional: true, required: false
  private _endpointMatchers = new GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList(this, "endpoint_matchers", false);
  public get endpointMatchers() {
    return this._endpointMatchers;
  }
  public putEndpointMatchers(value: GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers[] | cdktn.IResolvable) {
    this._endpointMatchers.internalValue = value;
  }
  public resetEndpointMatchers() {
    this._endpointMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointMatchersInput() {
    return this._endpointMatchers.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBeyondcorpSecurityGatewayApplicationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upstreams - computed: false, optional: true, required: false
  private _upstreams = new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList(this, "upstreams", false);
  public get upstreams() {
    return this._upstreams;
  }
  public putUpstreams(value: GoogleBeyondcorpSecurityGatewayApplicationUpstreams[] | cdktn.IResolvable) {
    this._upstreams.internalValue = value;
  }
  public resetUpstreams() {
    this._upstreams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamsInput() {
    return this._upstreams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktn.stringToTerraform(this._applicationId),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
      schema: cdktn.stringToTerraform(this._schema),
      security_gateway_id: cdktn.stringToTerraform(this._securityGatewayId),
      endpoint_matchers: cdktn.listMapper(googleBeyondcorpSecurityGatewayApplicationEndpointMatchersToTerraform, true)(this._endpointMatchers.internalValue),
      timeouts: googleBeyondcorpSecurityGatewayApplicationTimeoutsToTerraform(this._timeouts.internalValue),
      upstreams: cdktn.listMapper(googleBeyondcorpSecurityGatewayApplicationUpstreamsToTerraform, true)(this._upstreams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktn.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktn.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_gateway_id: {
        value: cdktn.stringToHclTerraform(this._securityGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_matchers: {
        value: cdktn.listMapperHcl(googleBeyondcorpSecurityGatewayApplicationEndpointMatchersToHclTerraform, true)(this._endpointMatchers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList",
      },
      timeouts: {
        value: googleBeyondcorpSecurityGatewayApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleBeyondcorpSecurityGatewayApplicationTimeouts",
      },
      upstreams: {
        value: cdktn.listMapperHcl(googleBeyondcorpSecurityGatewayApplicationUpstreamsToHclTerraform, true)(this._upstreams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
