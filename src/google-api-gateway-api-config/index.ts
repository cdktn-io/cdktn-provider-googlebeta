/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleApiGatewayApiConfigAConfig extends cdktn.TerraformMetaArguments {
  /**
  * The API to attach the config to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#api GoogleApiGatewayApiConfigA#api}
  */
  readonly api: string;
  /**
  * Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#api_config_id GoogleApiGatewayApiConfigA#api_config_id}
  */
  readonly apiConfigId?: string;
  /**
  * Creates a unique name beginning with the specified prefix. If this and api_config_id are unspecified, a random value is chosen for the name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#api_config_id_prefix GoogleApiGatewayApiConfigA#api_config_id_prefix}
  */
  readonly apiConfigIdPrefix?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#deletion_policy GoogleApiGatewayApiConfigA#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A user-visible name for the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#display_name GoogleApiGatewayApiConfigA#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#id GoogleApiGatewayApiConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels to represent user-provided metadata.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#labels GoogleApiGatewayApiConfigA#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#project GoogleApiGatewayApiConfigA#project}
  */
  readonly project?: string;
  /**
  * gateway_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#gateway_config GoogleApiGatewayApiConfigA#gateway_config}
  */
  readonly gatewayConfig?: GoogleApiGatewayApiConfigGatewayConfig;
  /**
  * grpc_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#grpc_services GoogleApiGatewayApiConfigA#grpc_services}
  */
  readonly grpcServices?: GoogleApiGatewayApiConfigGrpcServices[] | cdktn.IResolvable;
  /**
  * managed_service_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#managed_service_configs GoogleApiGatewayApiConfigA#managed_service_configs}
  */
  readonly managedServiceConfigs?: GoogleApiGatewayApiConfigManagedServiceConfigs[] | cdktn.IResolvable;
  /**
  * openapi_documents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#openapi_documents GoogleApiGatewayApiConfigA#openapi_documents}
  */
  readonly openapiDocuments?: GoogleApiGatewayApiConfigOpenapiDocuments[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#timeouts GoogleApiGatewayApiConfigA#timeouts}
  */
  readonly timeouts?: GoogleApiGatewayApiConfigTimeouts;
}
export interface GoogleApiGatewayApiConfigGatewayConfigBackendConfig {
  /**
  * Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured
  * (https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#google_service_account GoogleApiGatewayApiConfigA#google_service_account}
  */
  readonly googleServiceAccount: string;
}

export function googleApiGatewayApiConfigGatewayConfigBackendConfigToTerraform(struct?: GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference | GoogleApiGatewayApiConfigGatewayConfigBackendConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_service_account: cdktn.stringToTerraform(struct!.googleServiceAccount),
  }
}


export function googleApiGatewayApiConfigGatewayConfigBackendConfigToHclTerraform(struct?: GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference | GoogleApiGatewayApiConfigGatewayConfigBackendConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_service_account: {
      value: cdktn.stringToHclTerraform(struct!.googleServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApiGatewayApiConfigGatewayConfigBackendConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccount = this._googleServiceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigGatewayConfigBackendConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._googleServiceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._googleServiceAccount = value.googleServiceAccount;
    }
  }

  // google_service_account - computed: false, optional: false, required: true
  private _googleServiceAccount?: string; 
  public get googleServiceAccount() {
    return this.getStringAttribute('google_service_account');
  }
  public set googleServiceAccount(value: string) {
    this._googleServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountInput() {
    return this._googleServiceAccount;
  }
}
export interface GoogleApiGatewayApiConfigGatewayConfig {
  /**
  * backend_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#backend_config GoogleApiGatewayApiConfigA#backend_config}
  */
  readonly backendConfig: GoogleApiGatewayApiConfigGatewayConfigBackendConfig;
}

export function googleApiGatewayApiConfigGatewayConfigToTerraform(struct?: GoogleApiGatewayApiConfigGatewayConfigOutputReference | GoogleApiGatewayApiConfigGatewayConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_config: googleApiGatewayApiConfigGatewayConfigBackendConfigToTerraform(struct!.backendConfig),
  }
}


export function googleApiGatewayApiConfigGatewayConfigToHclTerraform(struct?: GoogleApiGatewayApiConfigGatewayConfigOutputReference | GoogleApiGatewayApiConfigGatewayConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_config: {
      value: googleApiGatewayApiConfigGatewayConfigBackendConfigToHclTerraform(struct!.backendConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApiGatewayApiConfigGatewayConfigBackendConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApiGatewayApiConfigGatewayConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApiGatewayApiConfigGatewayConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendConfig = this._backendConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigGatewayConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendConfig.internalValue = value.backendConfig;
    }
  }

  // backend_config - computed: false, optional: false, required: true
  private _backendConfig = new GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference(this, "backend_config");
  public get backendConfig() {
    return this._backendConfig;
  }
  public putBackendConfig(value: GoogleApiGatewayApiConfigGatewayConfigBackendConfig) {
    this._backendConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendConfigInput() {
    return this._backendConfig.internalValue;
  }
}
export interface GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet {
  /**
  * Base64 encoded content of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}
  */
  readonly contents: string;
  /**
  * The file path (full or relative path). This is typically the path of the file when it is uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}
  */
  readonly path: string;
}

export function googleApiGatewayApiConfigGrpcServicesFileDescriptorSetToTerraform(struct?: GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference | GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktn.stringToTerraform(struct!.contents),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function googleApiGatewayApiConfigGrpcServicesFileDescriptorSetToHclTerraform(struct?: GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference | GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents: {
      value: cdktn.stringToHclTerraform(struct!.contents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contents = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contents = value.contents;
      this._path = value.path;
    }
  }

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface GoogleApiGatewayApiConfigGrpcServicesSource {
  /**
  * Base64 encoded content of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}
  */
  readonly contents: string;
  /**
  * The file path (full or relative path). This is typically the path of the file when it is uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}
  */
  readonly path: string;
}

export function googleApiGatewayApiConfigGrpcServicesSourceToTerraform(struct?: GoogleApiGatewayApiConfigGrpcServicesSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktn.stringToTerraform(struct!.contents),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function googleApiGatewayApiConfigGrpcServicesSourceToHclTerraform(struct?: GoogleApiGatewayApiConfigGrpcServicesSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents: {
      value: cdktn.stringToHclTerraform(struct!.contents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleApiGatewayApiConfigGrpcServicesSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigGrpcServicesSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contents = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contents = value.contents;
      this._path = value.path;
    }
  }

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class GoogleApiGatewayApiConfigGrpcServicesSourceList extends cdktn.ComplexList {
  public internalValue? : GoogleApiGatewayApiConfigGrpcServicesSource[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference {
    return new GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApiGatewayApiConfigGrpcServices {
  /**
  * file_descriptor_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#file_descriptor_set GoogleApiGatewayApiConfigA#file_descriptor_set}
  */
  readonly fileDescriptorSet: GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#source GoogleApiGatewayApiConfigA#source}
  */
  readonly source?: GoogleApiGatewayApiConfigGrpcServicesSource[] | cdktn.IResolvable;
}

export function googleApiGatewayApiConfigGrpcServicesToTerraform(struct?: GoogleApiGatewayApiConfigGrpcServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_descriptor_set: googleApiGatewayApiConfigGrpcServicesFileDescriptorSetToTerraform(struct!.fileDescriptorSet),
    source: cdktn.listMapper(googleApiGatewayApiConfigGrpcServicesSourceToTerraform, true)(struct!.source),
  }
}


export function googleApiGatewayApiConfigGrpcServicesToHclTerraform(struct?: GoogleApiGatewayApiConfigGrpcServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_descriptor_set: {
      value: googleApiGatewayApiConfigGrpcServicesFileDescriptorSetToHclTerraform(struct!.fileDescriptorSet),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetList",
    },
    source: {
      value: cdktn.listMapperHcl(googleApiGatewayApiConfigGrpcServicesSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApiGatewayApiConfigGrpcServicesSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApiGatewayApiConfigGrpcServicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleApiGatewayApiConfigGrpcServices | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileDescriptorSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileDescriptorSet = this._fileDescriptorSet?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigGrpcServices | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileDescriptorSet.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileDescriptorSet.internalValue = value.fileDescriptorSet;
      this._source.internalValue = value.source;
    }
  }

  // file_descriptor_set - computed: false, optional: false, required: true
  private _fileDescriptorSet = new GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference(this, "file_descriptor_set");
  public get fileDescriptorSet() {
    return this._fileDescriptorSet;
  }
  public putFileDescriptorSet(value: GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet) {
    this._fileDescriptorSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDescriptorSetInput() {
    return this._fileDescriptorSet.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new GoogleApiGatewayApiConfigGrpcServicesSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: GoogleApiGatewayApiConfigGrpcServicesSource[] | cdktn.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class GoogleApiGatewayApiConfigGrpcServicesList extends cdktn.ComplexList {
  public internalValue? : GoogleApiGatewayApiConfigGrpcServices[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleApiGatewayApiConfigGrpcServicesOutputReference {
    return new GoogleApiGatewayApiConfigGrpcServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApiGatewayApiConfigManagedServiceConfigs {
  /**
  * Base64 encoded content of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}
  */
  readonly contents: string;
  /**
  * The file path (full or relative path). This is typically the path of the file when it is uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}
  */
  readonly path: string;
}

export function googleApiGatewayApiConfigManagedServiceConfigsToTerraform(struct?: GoogleApiGatewayApiConfigManagedServiceConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktn.stringToTerraform(struct!.contents),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function googleApiGatewayApiConfigManagedServiceConfigsToHclTerraform(struct?: GoogleApiGatewayApiConfigManagedServiceConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents: {
      value: cdktn.stringToHclTerraform(struct!.contents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleApiGatewayApiConfigManagedServiceConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigManagedServiceConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contents = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contents = value.contents;
      this._path = value.path;
    }
  }

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class GoogleApiGatewayApiConfigManagedServiceConfigsList extends cdktn.ComplexList {
  public internalValue? : GoogleApiGatewayApiConfigManagedServiceConfigs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference {
    return new GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApiGatewayApiConfigOpenapiDocumentsDocument {
  /**
  * Base64 encoded content of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}
  */
  readonly contents: string;
  /**
  * The file path (full or relative path). This is typically the path of the file when it is uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}
  */
  readonly path: string;
}

export function googleApiGatewayApiConfigOpenapiDocumentsDocumentToTerraform(struct?: GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference | GoogleApiGatewayApiConfigOpenapiDocumentsDocument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktn.stringToTerraform(struct!.contents),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function googleApiGatewayApiConfigOpenapiDocumentsDocumentToHclTerraform(struct?: GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference | GoogleApiGatewayApiConfigOpenapiDocumentsDocument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents: {
      value: cdktn.stringToHclTerraform(struct!.contents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApiGatewayApiConfigOpenapiDocumentsDocument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigOpenapiDocumentsDocument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contents = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contents = value.contents;
      this._path = value.path;
    }
  }

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface GoogleApiGatewayApiConfigOpenapiDocuments {
  /**
  * document block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#document GoogleApiGatewayApiConfigA#document}
  */
  readonly document: GoogleApiGatewayApiConfigOpenapiDocumentsDocument;
}

export function googleApiGatewayApiConfigOpenapiDocumentsToTerraform(struct?: GoogleApiGatewayApiConfigOpenapiDocuments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    document: googleApiGatewayApiConfigOpenapiDocumentsDocumentToTerraform(struct!.document),
  }
}


export function googleApiGatewayApiConfigOpenapiDocumentsToHclTerraform(struct?: GoogleApiGatewayApiConfigOpenapiDocuments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    document: {
      value: googleApiGatewayApiConfigOpenapiDocumentsDocumentToHclTerraform(struct!.document),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApiGatewayApiConfigOpenapiDocumentsDocumentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleApiGatewayApiConfigOpenapiDocuments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._document?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.document = this._document?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigOpenapiDocuments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._document.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._document.internalValue = value.document;
    }
  }

  // document - computed: false, optional: false, required: true
  private _document = new GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference(this, "document");
  public get document() {
    return this._document;
  }
  public putDocument(value: GoogleApiGatewayApiConfigOpenapiDocumentsDocument) {
    this._document.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentInput() {
    return this._document.internalValue;
  }
}

export class GoogleApiGatewayApiConfigOpenapiDocumentsList extends cdktn.ComplexList {
  public internalValue? : GoogleApiGatewayApiConfigOpenapiDocuments[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference {
    return new GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApiGatewayApiConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#create GoogleApiGatewayApiConfigA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#delete GoogleApiGatewayApiConfigA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#update GoogleApiGatewayApiConfigA#update}
  */
  readonly update?: string;
}

export function googleApiGatewayApiConfigTimeoutsToTerraform(struct?: GoogleApiGatewayApiConfigTimeouts | cdktn.IResolvable): any {
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


export function googleApiGatewayApiConfigTimeoutsToHclTerraform(struct?: GoogleApiGatewayApiConfigTimeouts | cdktn.IResolvable): any {
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

export class GoogleApiGatewayApiConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleApiGatewayApiConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleApiGatewayApiConfigTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config google_api_gateway_api_config}
*/
export class GoogleApiGatewayApiConfigA extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_api_gateway_api_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleApiGatewayApiConfigA resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleApiGatewayApiConfigA to import
  * @param importFromId The id of the existing GoogleApiGatewayApiConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleApiGatewayApiConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_api_gateway_api_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_api_gateway_api_config google_api_gateway_api_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleApiGatewayApiConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleApiGatewayApiConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'google_api_gateway_api_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '7.34.0',
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
    this._api = config.api;
    this._apiConfigId = config.apiConfigId;
    this._apiConfigIdPrefix = config.apiConfigIdPrefix;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._gatewayConfig.internalValue = config.gatewayConfig;
    this._grpcServices.internalValue = config.grpcServices;
    this._managedServiceConfigs.internalValue = config.managedServiceConfigs;
    this._openapiDocuments.internalValue = config.openapiDocuments;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api - computed: false, optional: false, required: true
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // api_config_id - computed: true, optional: true, required: false
  private _apiConfigId?: string; 
  public get apiConfigId() {
    return this.getStringAttribute('api_config_id');
  }
  public set apiConfigId(value: string) {
    this._apiConfigId = value;
  }
  public resetApiConfigId() {
    this._apiConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiConfigIdInput() {
    return this._apiConfigId;
  }

  // api_config_id_prefix - computed: true, optional: true, required: false
  private _apiConfigIdPrefix?: string; 
  public get apiConfigIdPrefix() {
    return this.getStringAttribute('api_config_id_prefix');
  }
  public set apiConfigIdPrefix(value: string) {
    this._apiConfigIdPrefix = value;
  }
  public resetApiConfigIdPrefix() {
    this._apiConfigIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiConfigIdPrefixInput() {
    return this._apiConfigIdPrefix;
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // display_name - computed: true, optional: true, required: false
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // service_config_id - computed: true, optional: false, required: false
  public get serviceConfigId() {
    return this.getStringAttribute('service_config_id');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // gateway_config - computed: false, optional: true, required: false
  private _gatewayConfig = new GoogleApiGatewayApiConfigGatewayConfigOutputReference(this, "gateway_config");
  public get gatewayConfig() {
    return this._gatewayConfig;
  }
  public putGatewayConfig(value: GoogleApiGatewayApiConfigGatewayConfig) {
    this._gatewayConfig.internalValue = value;
  }
  public resetGatewayConfig() {
    this._gatewayConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayConfigInput() {
    return this._gatewayConfig.internalValue;
  }

  // grpc_services - computed: false, optional: true, required: false
  private _grpcServices = new GoogleApiGatewayApiConfigGrpcServicesList(this, "grpc_services", false);
  public get grpcServices() {
    return this._grpcServices;
  }
  public putGrpcServices(value: GoogleApiGatewayApiConfigGrpcServices[] | cdktn.IResolvable) {
    this._grpcServices.internalValue = value;
  }
  public resetGrpcServices() {
    this._grpcServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServicesInput() {
    return this._grpcServices.internalValue;
  }

  // managed_service_configs - computed: false, optional: true, required: false
  private _managedServiceConfigs = new GoogleApiGatewayApiConfigManagedServiceConfigsList(this, "managed_service_configs", false);
  public get managedServiceConfigs() {
    return this._managedServiceConfigs;
  }
  public putManagedServiceConfigs(value: GoogleApiGatewayApiConfigManagedServiceConfigs[] | cdktn.IResolvable) {
    this._managedServiceConfigs.internalValue = value;
  }
  public resetManagedServiceConfigs() {
    this._managedServiceConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServiceConfigsInput() {
    return this._managedServiceConfigs.internalValue;
  }

  // openapi_documents - computed: false, optional: true, required: false
  private _openapiDocuments = new GoogleApiGatewayApiConfigOpenapiDocumentsList(this, "openapi_documents", false);
  public get openapiDocuments() {
    return this._openapiDocuments;
  }
  public putOpenapiDocuments(value: GoogleApiGatewayApiConfigOpenapiDocuments[] | cdktn.IResolvable) {
    this._openapiDocuments.internalValue = value;
  }
  public resetOpenapiDocuments() {
    this._openapiDocuments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openapiDocumentsInput() {
    return this._openapiDocuments.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleApiGatewayApiConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleApiGatewayApiConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api: cdktn.stringToTerraform(this._api),
      api_config_id: cdktn.stringToTerraform(this._apiConfigId),
      api_config_id_prefix: cdktn.stringToTerraform(this._apiConfigIdPrefix),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      project: cdktn.stringToTerraform(this._project),
      gateway_config: googleApiGatewayApiConfigGatewayConfigToTerraform(this._gatewayConfig.internalValue),
      grpc_services: cdktn.listMapper(googleApiGatewayApiConfigGrpcServicesToTerraform, true)(this._grpcServices.internalValue),
      managed_service_configs: cdktn.listMapper(googleApiGatewayApiConfigManagedServiceConfigsToTerraform, true)(this._managedServiceConfigs.internalValue),
      openapi_documents: cdktn.listMapper(googleApiGatewayApiConfigOpenapiDocumentsToTerraform, true)(this._openapiDocuments.internalValue),
      timeouts: googleApiGatewayApiConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api: {
        value: cdktn.stringToHclTerraform(this._api),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_config_id: {
        value: cdktn.stringToHclTerraform(this._apiConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_config_id_prefix: {
        value: cdktn.stringToHclTerraform(this._apiConfigIdPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
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
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_config: {
        value: googleApiGatewayApiConfigGatewayConfigToHclTerraform(this._gatewayConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleApiGatewayApiConfigGatewayConfigList",
      },
      grpc_services: {
        value: cdktn.listMapperHcl(googleApiGatewayApiConfigGrpcServicesToHclTerraform, true)(this._grpcServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleApiGatewayApiConfigGrpcServicesList",
      },
      managed_service_configs: {
        value: cdktn.listMapperHcl(googleApiGatewayApiConfigManagedServiceConfigsToHclTerraform, true)(this._managedServiceConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleApiGatewayApiConfigManagedServiceConfigsList",
      },
      openapi_documents: {
        value: cdktn.listMapperHcl(googleApiGatewayApiConfigOpenapiDocumentsToHclTerraform, true)(this._openapiDocuments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleApiGatewayApiConfigOpenapiDocumentsList",
      },
      timeouts: {
        value: googleApiGatewayApiConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleApiGatewayApiConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
