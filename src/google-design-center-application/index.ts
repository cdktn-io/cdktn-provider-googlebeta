/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleDesignCenterApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#application_id GoogleDesignCenterApplication#application_id}
  */
  readonly applicationId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deletion_policy GoogleDesignCenterApplication#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Deployment project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_project GoogleDesignCenterApplication#deployment_project}
  */
  readonly deploymentProject?: string;
  /**
  * Deployment region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_region GoogleDesignCenterApplication#deployment_region}
  */
  readonly deploymentRegion?: string;
  /**
  * Description of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#description GoogleDesignCenterApplication#description}
  */
  readonly description?: string;
  /**
  * Display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#id GoogleDesignCenterApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#location GoogleDesignCenterApplication#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project GoogleDesignCenterApplication#project}
  */
  readonly project?: string;
  /**
  * Service account for deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#service_account GoogleDesignCenterApplication#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The space for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#space GoogleDesignCenterApplication#space}
  */
  readonly space: string;
  /**
  * app_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#app_parameters GoogleDesignCenterApplication#app_parameters}
  */
  readonly appParameters?: GoogleDesignCenterApplicationAppParameters[] | cdktn.IResolvable;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#attributes GoogleDesignCenterApplication#attributes}
  */
  readonly attributes?: GoogleDesignCenterApplicationAttributes;
  /**
  * component_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#component_parameters GoogleDesignCenterApplication#component_parameters}
  */
  readonly componentParameters?: GoogleDesignCenterApplicationComponentParameters[] | cdktn.IResolvable;
  /**
  * composite_application_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#composite_application_parameters GoogleDesignCenterApplication#composite_application_parameters}
  */
  readonly compositeApplicationParameters?: GoogleDesignCenterApplicationCompositeApplicationParameters;
  /**
  * connection_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#connection_configs GoogleDesignCenterApplication#connection_configs}
  */
  readonly connectionConfigs?: GoogleDesignCenterApplicationConnectionConfigs[] | cdktn.IResolvable;
  /**
  * deployment_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#deployment_target GoogleDesignCenterApplication#deployment_target}
  */
  readonly deploymentTarget?: GoogleDesignCenterApplicationDeploymentTarget;
  /**
  * roles_apis_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#roles_apis_config GoogleDesignCenterApplication#roles_apis_config}
  */
  readonly rolesApisConfig?: GoogleDesignCenterApplicationRolesApisConfig[] | cdktn.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#scope GoogleDesignCenterApplication#scope}
  */
  readonly scope: GoogleDesignCenterApplicationScope;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#source GoogleDesignCenterApplication#source}
  */
  readonly source: GoogleDesignCenterApplicationSource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#timeouts GoogleDesignCenterApplication#timeouts}
  */
  readonly timeouts?: GoogleDesignCenterApplicationTimeouts;
}
export interface GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters {
}

export function googleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersToTerraform(struct?: GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersToHclTerraform(struct?: GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList extends cdktn.ComplexList {

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
  public get(index: number): GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference {
    return new GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters {
}

export function googleDesignCenterApplicationDeploymentMetadataComponentOutputParametersToTerraform(struct?: GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleDesignCenterApplicationDeploymentMetadataComponentOutputParametersToHclTerraform(struct?: GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
}

export class GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList extends cdktn.ComplexList {

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
  public get(index: number): GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference {
    return new GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationDeploymentMetadataError {
}

export function googleDesignCenterApplicationDeploymentMetadataErrorToTerraform(struct?: GoogleDesignCenterApplicationDeploymentMetadataError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleDesignCenterApplicationDeploymentMetadataErrorToHclTerraform(struct?: GoogleDesignCenterApplicationDeploymentMetadataError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDesignCenterApplicationDeploymentMetadataError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationDeploymentMetadataError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // detail - computed: true, optional: false, required: false
  public get detail() {
    return this.getStringAttribute('detail');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleDesignCenterApplicationDeploymentMetadataErrorList extends cdktn.ComplexList {

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
  public get(index: number): GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference {
    return new GoogleDesignCenterApplicationDeploymentMetadataErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationDeploymentMetadata {
}

export function googleDesignCenterApplicationDeploymentMetadataToTerraform(struct?: GoogleDesignCenterApplicationDeploymentMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleDesignCenterApplicationDeploymentMetadataToHclTerraform(struct?: GoogleDesignCenterApplicationDeploymentMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDesignCenterApplicationDeploymentMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDesignCenterApplicationDeploymentMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationDeploymentMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // component_output_parameters - computed: true, optional: false, required: false
  private _componentOutputParameters = new GoogleDesignCenterApplicationDeploymentMetadataComponentOutputParametersList(this, "component_output_parameters", false);
  public get componentOutputParameters() {
    return this._componentOutputParameters;
  }

  // error - computed: true, optional: false, required: false
  private _error = new GoogleDesignCenterApplicationDeploymentMetadataErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // retry_attempts - computed: true, optional: false, required: false
  public get retryAttempts() {
    return this.getNumberAttribute('retry_attempts');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // worker_pool - computed: true, optional: false, required: false
  public get workerPool() {
    return this.getStringAttribute('worker_pool');
  }
}

export class GoogleDesignCenterApplicationDeploymentMetadataList extends cdktn.ComplexList {

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
  public get(index: number): GoogleDesignCenterApplicationDeploymentMetadataOutputReference {
    return new GoogleDesignCenterApplicationDeploymentMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationAppParameters {
  /**
  * The key of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}
  */
  readonly key: string;
  /**
  * The value of the parameter, as a JSON-encoded string. Use
  * 'jsonencode()' to set it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}
  */
  readonly value?: string;
}

export function googleDesignCenterApplicationAppParametersToTerraform(struct?: GoogleDesignCenterApplicationAppParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleDesignCenterApplicationAppParametersToHclTerraform(struct?: GoogleDesignCenterApplicationAppParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationAppParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDesignCenterApplicationAppParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationAppParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleDesignCenterApplicationAppParametersList extends cdktn.ComplexList {
  public internalValue? : GoogleDesignCenterApplicationAppParameters[] | cdktn.IResolvable

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
  public get(index: number): GoogleDesignCenterApplicationAppParametersOutputReference {
    return new GoogleDesignCenterApplicationAppParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationAttributesBusinessOwners {
  /**
  * Contact's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * Email address of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#email GoogleDesignCenterApplication#email}
  */
  readonly email: string;
}

export function googleDesignCenterApplicationAttributesBusinessOwnersToTerraform(struct?: GoogleDesignCenterApplicationAttributesBusinessOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function googleDesignCenterApplicationAttributesBusinessOwnersToHclTerraform(struct?: GoogleDesignCenterApplicationAttributesBusinessOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDesignCenterApplicationAttributesBusinessOwners | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationAttributesBusinessOwners | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._email = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._email = value.email;
    }
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

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class GoogleDesignCenterApplicationAttributesBusinessOwnersList extends cdktn.ComplexList {
  public internalValue? : GoogleDesignCenterApplicationAttributesBusinessOwners[] | cdktn.IResolvable

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
  public get(index: number): GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference {
    return new GoogleDesignCenterApplicationAttributesBusinessOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationAttributesCriticality {
  /**
  * Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH',
  * 'MEDIUM' and 'LOW'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}
  */
  readonly type: string;
}

export function googleDesignCenterApplicationAttributesCriticalityToTerraform(struct?: GoogleDesignCenterApplicationAttributesCriticalityOutputReference | GoogleDesignCenterApplicationAttributesCriticality): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function googleDesignCenterApplicationAttributesCriticalityToHclTerraform(struct?: GoogleDesignCenterApplicationAttributesCriticalityOutputReference | GoogleDesignCenterApplicationAttributesCriticality): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationAttributesCriticalityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDesignCenterApplicationAttributesCriticality | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationAttributesCriticality | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleDesignCenterApplicationAttributesDeveloperOwners {
  /**
  * Contact's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * Email address of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#email GoogleDesignCenterApplication#email}
  */
  readonly email: string;
}

export function googleDesignCenterApplicationAttributesDeveloperOwnersToTerraform(struct?: GoogleDesignCenterApplicationAttributesDeveloperOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function googleDesignCenterApplicationAttributesDeveloperOwnersToHclTerraform(struct?: GoogleDesignCenterApplicationAttributesDeveloperOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDesignCenterApplicationAttributesDeveloperOwners | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationAttributesDeveloperOwners | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._email = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._email = value.email;
    }
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

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class GoogleDesignCenterApplicationAttributesDeveloperOwnersList extends cdktn.ComplexList {
  public internalValue? : GoogleDesignCenterApplicationAttributesDeveloperOwners[] | cdktn.IResolvable

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
  public get(index: number): GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference {
    return new GoogleDesignCenterApplicationAttributesDeveloperOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationAttributesEnvironment {
  /**
  * Environment type. Possible values are 'PRODUCTION', 'STAGING',
  * 'TEST' and 'DEVELOPMENT'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}
  */
  readonly type: string;
}

export function googleDesignCenterApplicationAttributesEnvironmentToTerraform(struct?: GoogleDesignCenterApplicationAttributesEnvironmentOutputReference | GoogleDesignCenterApplicationAttributesEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function googleDesignCenterApplicationAttributesEnvironmentToHclTerraform(struct?: GoogleDesignCenterApplicationAttributesEnvironmentOutputReference | GoogleDesignCenterApplicationAttributesEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationAttributesEnvironmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDesignCenterApplicationAttributesEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationAttributesEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleDesignCenterApplicationAttributesOperatorOwners {
  /**
  * Contact's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#display_name GoogleDesignCenterApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * Email address of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#email GoogleDesignCenterApplication#email}
  */
  readonly email: string;
}

export function googleDesignCenterApplicationAttributesOperatorOwnersToTerraform(struct?: GoogleDesignCenterApplicationAttributesOperatorOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function googleDesignCenterApplicationAttributesOperatorOwnersToHclTerraform(struct?: GoogleDesignCenterApplicationAttributesOperatorOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDesignCenterApplicationAttributesOperatorOwners | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationAttributesOperatorOwners | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._email = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._email = value.email;
    }
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

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class GoogleDesignCenterApplicationAttributesOperatorOwnersList extends cdktn.ComplexList {
  public internalValue? : GoogleDesignCenterApplicationAttributesOperatorOwners[] | cdktn.IResolvable

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
  public get(index: number): GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference {
    return new GoogleDesignCenterApplicationAttributesOperatorOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationAttributes {
  /**
  * business_owners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#business_owners GoogleDesignCenterApplication#business_owners}
  */
  readonly businessOwners?: GoogleDesignCenterApplicationAttributesBusinessOwners[] | cdktn.IResolvable;
  /**
  * criticality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#criticality GoogleDesignCenterApplication#criticality}
  */
  readonly criticality?: GoogleDesignCenterApplicationAttributesCriticality;
  /**
  * developer_owners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#developer_owners GoogleDesignCenterApplication#developer_owners}
  */
  readonly developerOwners?: GoogleDesignCenterApplicationAttributesDeveloperOwners[] | cdktn.IResolvable;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#environment GoogleDesignCenterApplication#environment}
  */
  readonly environment?: GoogleDesignCenterApplicationAttributesEnvironment;
  /**
  * operator_owners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#operator_owners GoogleDesignCenterApplication#operator_owners}
  */
  readonly operatorOwners?: GoogleDesignCenterApplicationAttributesOperatorOwners[] | cdktn.IResolvable;
}

export function googleDesignCenterApplicationAttributesToTerraform(struct?: GoogleDesignCenterApplicationAttributesOutputReference | GoogleDesignCenterApplicationAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    business_owners: cdktn.listMapper(googleDesignCenterApplicationAttributesBusinessOwnersToTerraform, true)(struct!.businessOwners),
    criticality: googleDesignCenterApplicationAttributesCriticalityToTerraform(struct!.criticality),
    developer_owners: cdktn.listMapper(googleDesignCenterApplicationAttributesDeveloperOwnersToTerraform, true)(struct!.developerOwners),
    environment: googleDesignCenterApplicationAttributesEnvironmentToTerraform(struct!.environment),
    operator_owners: cdktn.listMapper(googleDesignCenterApplicationAttributesOperatorOwnersToTerraform, true)(struct!.operatorOwners),
  }
}


export function googleDesignCenterApplicationAttributesToHclTerraform(struct?: GoogleDesignCenterApplicationAttributesOutputReference | GoogleDesignCenterApplicationAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    business_owners: {
      value: cdktn.listMapperHcl(googleDesignCenterApplicationAttributesBusinessOwnersToHclTerraform, true)(struct!.businessOwners),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDesignCenterApplicationAttributesBusinessOwnersList",
    },
    criticality: {
      value: googleDesignCenterApplicationAttributesCriticalityToHclTerraform(struct!.criticality),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDesignCenterApplicationAttributesCriticalityList",
    },
    developer_owners: {
      value: cdktn.listMapperHcl(googleDesignCenterApplicationAttributesDeveloperOwnersToHclTerraform, true)(struct!.developerOwners),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDesignCenterApplicationAttributesDeveloperOwnersList",
    },
    environment: {
      value: googleDesignCenterApplicationAttributesEnvironmentToHclTerraform(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDesignCenterApplicationAttributesEnvironmentList",
    },
    operator_owners: {
      value: cdktn.listMapperHcl(googleDesignCenterApplicationAttributesOperatorOwnersToHclTerraform, true)(struct!.operatorOwners),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDesignCenterApplicationAttributesOperatorOwnersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDesignCenterApplicationAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._businessOwners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessOwners = this._businessOwners?.internalValue;
    }
    if (this._criticality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticality = this._criticality?.internalValue;
    }
    if (this._developerOwners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.developerOwners = this._developerOwners?.internalValue;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._operatorOwners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorOwners = this._operatorOwners?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._businessOwners.internalValue = undefined;
      this._criticality.internalValue = undefined;
      this._developerOwners.internalValue = undefined;
      this._environment.internalValue = undefined;
      this._operatorOwners.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._businessOwners.internalValue = value.businessOwners;
      this._criticality.internalValue = value.criticality;
      this._developerOwners.internalValue = value.developerOwners;
      this._environment.internalValue = value.environment;
      this._operatorOwners.internalValue = value.operatorOwners;
    }
  }

  // business_owners - computed: false, optional: true, required: false
  private _businessOwners = new GoogleDesignCenterApplicationAttributesBusinessOwnersList(this, "business_owners", false);
  public get businessOwners() {
    return this._businessOwners;
  }
  public putBusinessOwners(value: GoogleDesignCenterApplicationAttributesBusinessOwners[] | cdktn.IResolvable) {
    this._businessOwners.internalValue = value;
  }
  public resetBusinessOwners() {
    this._businessOwners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessOwnersInput() {
    return this._businessOwners.internalValue;
  }

  // criticality - computed: false, optional: true, required: false
  private _criticality = new GoogleDesignCenterApplicationAttributesCriticalityOutputReference(this, "criticality");
  public get criticality() {
    return this._criticality;
  }
  public putCriticality(value: GoogleDesignCenterApplicationAttributesCriticality) {
    this._criticality.internalValue = value;
  }
  public resetCriticality() {
    this._criticality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalityInput() {
    return this._criticality.internalValue;
  }

  // developer_owners - computed: false, optional: true, required: false
  private _developerOwners = new GoogleDesignCenterApplicationAttributesDeveloperOwnersList(this, "developer_owners", false);
  public get developerOwners() {
    return this._developerOwners;
  }
  public putDeveloperOwners(value: GoogleDesignCenterApplicationAttributesDeveloperOwners[] | cdktn.IResolvable) {
    this._developerOwners.internalValue = value;
  }
  public resetDeveloperOwners() {
    this._developerOwners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerOwnersInput() {
    return this._developerOwners.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new GoogleDesignCenterApplicationAttributesEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: GoogleDesignCenterApplicationAttributesEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // operator_owners - computed: false, optional: true, required: false
  private _operatorOwners = new GoogleDesignCenterApplicationAttributesOperatorOwnersList(this, "operator_owners", false);
  public get operatorOwners() {
    return this._operatorOwners;
  }
  public putOperatorOwners(value: GoogleDesignCenterApplicationAttributesOperatorOwners[] | cdktn.IResolvable) {
    this._operatorOwners.internalValue = value;
  }
  public resetOperatorOwners() {
    this._operatorOwners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorOwnersInput() {
    return this._operatorOwners.internalValue;
  }
}
export interface GoogleDesignCenterApplicationComponentParametersParameters {
  /**
  * The key of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}
  */
  readonly key: string;
  /**
  * The value of the parameter, as a JSON-encoded string. Use
  * 'jsonencode()' to set it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}
  */
  readonly value?: string;
}

export function googleDesignCenterApplicationComponentParametersParametersToTerraform(struct?: GoogleDesignCenterApplicationComponentParametersParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleDesignCenterApplicationComponentParametersParametersToHclTerraform(struct?: GoogleDesignCenterApplicationComponentParametersParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationComponentParametersParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDesignCenterApplicationComponentParametersParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationComponentParametersParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleDesignCenterApplicationComponentParametersParametersList extends cdktn.ComplexList {
  public internalValue? : GoogleDesignCenterApplicationComponentParametersParameters[] | cdktn.IResolvable

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
  public get(index: number): GoogleDesignCenterApplicationComponentParametersParametersOutputReference {
    return new GoogleDesignCenterApplicationComponentParametersParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationComponentParameters {
  /**
  * The URI of the component that the parameters belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#component GoogleDesignCenterApplication#component}
  */
  readonly component: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#parameters GoogleDesignCenterApplication#parameters}
  */
  readonly parameters?: GoogleDesignCenterApplicationComponentParametersParameters[] | cdktn.IResolvable;
}

export function googleDesignCenterApplicationComponentParametersToTerraform(struct?: GoogleDesignCenterApplicationComponentParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    component: cdktn.stringToTerraform(struct!.component),
    parameters: cdktn.listMapper(googleDesignCenterApplicationComponentParametersParametersToTerraform, true)(struct!.parameters),
  }
}


export function googleDesignCenterApplicationComponentParametersToHclTerraform(struct?: GoogleDesignCenterApplicationComponentParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    component: {
      value: cdktn.stringToHclTerraform(struct!.component),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(googleDesignCenterApplicationComponentParametersParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDesignCenterApplicationComponentParametersParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationComponentParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDesignCenterApplicationComponentParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationComponentParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component = value.component;
      this._parameters.internalValue = value.parameters;
    }
  }

  // component - computed: false, optional: false, required: true
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GoogleDesignCenterApplicationComponentParametersParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GoogleDesignCenterApplicationComponentParametersParameters[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class GoogleDesignCenterApplicationComponentParametersList extends cdktn.ComplexList {
  public internalValue? : GoogleDesignCenterApplicationComponentParameters[] | cdktn.IResolvable

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
  public get(index: number): GoogleDesignCenterApplicationComponentParametersOutputReference {
    return new GoogleDesignCenterApplicationComponentParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationCompositeApplicationParameters {
  /**
  * A map from a component URI to the service account that deploys the
  * component. Keys use the format
  * 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component}'
  * and values use the format
  * 'projects/{project}/serviceAccounts/{email_address}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#service_account_map GoogleDesignCenterApplication#service_account_map}
  */
  readonly serviceAccountMap?: { [key: string]: string };
}

export function googleDesignCenterApplicationCompositeApplicationParametersToTerraform(struct?: GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference | GoogleDesignCenterApplicationCompositeApplicationParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_account_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.serviceAccountMap),
  }
}


export function googleDesignCenterApplicationCompositeApplicationParametersToHclTerraform(struct?: GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference | GoogleDesignCenterApplicationCompositeApplicationParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service_account_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.serviceAccountMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDesignCenterApplicationCompositeApplicationParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountMap = this._serviceAccountMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationCompositeApplicationParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccountMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccountMap = value.serviceAccountMap;
    }
  }

  // service_account_map - computed: false, optional: true, required: false
  private _serviceAccountMap?: { [key: string]: string }; 
  public get serviceAccountMap() {
    return this.getStringMapAttribute('service_account_map');
  }
  public set serviceAccountMap(value: { [key: string]: string }) {
    this._serviceAccountMap = value;
  }
  public resetServiceAccountMap() {
    this._serviceAccountMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountMapInput() {
    return this._serviceAccountMap;
  }
}
export interface GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters {
  /**
  * The key of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}
  */
  readonly key: string;
  /**
  * The value of the parameter, as a JSON-encoded string. Use
  * 'jsonencode()' to set it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}
  */
  readonly value?: string;
}

export function googleDesignCenterApplicationConnectionConfigsDestinationComponentParametersToTerraform(struct?: GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleDesignCenterApplicationConnectionConfigsDestinationComponentParametersToHclTerraform(struct?: GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList extends cdktn.ComplexList {
  public internalValue? : GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters[] | cdktn.IResolvable

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
  public get(index: number): GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference {
    return new GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters {
  /**
  * The key of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#key GoogleDesignCenterApplication#key}
  */
  readonly key: string;
  /**
  * The value of the parameter, as a JSON-encoded string. Use
  * 'jsonencode()' to set it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#value GoogleDesignCenterApplication#value}
  */
  readonly value?: string;
}

export function googleDesignCenterApplicationConnectionConfigsSourceComponentParametersToTerraform(struct?: GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleDesignCenterApplicationConnectionConfigsSourceComponentParametersToHclTerraform(struct?: GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList extends cdktn.ComplexList {
  public internalValue? : GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters[] | cdktn.IResolvable

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
  public get(index: number): GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference {
    return new GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationConnectionConfigs {
  /**
  * The URI of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#connection_uri GoogleDesignCenterApplication#connection_uri}
  */
  readonly connectionUri: string;
  /**
  * destination_component_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#destination_component_parameters GoogleDesignCenterApplication#destination_component_parameters}
  */
  readonly destinationComponentParameters?: GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters[] | cdktn.IResolvable;
  /**
  * source_component_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#source_component_parameters GoogleDesignCenterApplication#source_component_parameters}
  */
  readonly sourceComponentParameters?: GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters[] | cdktn.IResolvable;
}

export function googleDesignCenterApplicationConnectionConfigsToTerraform(struct?: GoogleDesignCenterApplicationConnectionConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_uri: cdktn.stringToTerraform(struct!.connectionUri),
    destination_component_parameters: cdktn.listMapper(googleDesignCenterApplicationConnectionConfigsDestinationComponentParametersToTerraform, true)(struct!.destinationComponentParameters),
    source_component_parameters: cdktn.listMapper(googleDesignCenterApplicationConnectionConfigsSourceComponentParametersToTerraform, true)(struct!.sourceComponentParameters),
  }
}


export function googleDesignCenterApplicationConnectionConfigsToHclTerraform(struct?: GoogleDesignCenterApplicationConnectionConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_uri: {
      value: cdktn.stringToHclTerraform(struct!.connectionUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_component_parameters: {
      value: cdktn.listMapperHcl(googleDesignCenterApplicationConnectionConfigsDestinationComponentParametersToHclTerraform, true)(struct!.destinationComponentParameters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList",
    },
    source_component_parameters: {
      value: cdktn.listMapperHcl(googleDesignCenterApplicationConnectionConfigsSourceComponentParametersToHclTerraform, true)(struct!.sourceComponentParameters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationConnectionConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDesignCenterApplicationConnectionConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUri = this._connectionUri;
    }
    if (this._destinationComponentParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationComponentParameters = this._destinationComponentParameters?.internalValue;
    }
    if (this._sourceComponentParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceComponentParameters = this._sourceComponentParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationConnectionConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionUri = undefined;
      this._destinationComponentParameters.internalValue = undefined;
      this._sourceComponentParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionUri = value.connectionUri;
      this._destinationComponentParameters.internalValue = value.destinationComponentParameters;
      this._sourceComponentParameters.internalValue = value.sourceComponentParameters;
    }
  }

  // connection_uri - computed: false, optional: false, required: true
  private _connectionUri?: string; 
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }
  public set connectionUri(value: string) {
    this._connectionUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUriInput() {
    return this._connectionUri;
  }

  // destination_component_parameters - computed: false, optional: true, required: false
  private _destinationComponentParameters = new GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParametersList(this, "destination_component_parameters", false);
  public get destinationComponentParameters() {
    return this._destinationComponentParameters;
  }
  public putDestinationComponentParameters(value: GoogleDesignCenterApplicationConnectionConfigsDestinationComponentParameters[] | cdktn.IResolvable) {
    this._destinationComponentParameters.internalValue = value;
  }
  public resetDestinationComponentParameters() {
    this._destinationComponentParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationComponentParametersInput() {
    return this._destinationComponentParameters.internalValue;
  }

  // source_component_parameters - computed: false, optional: true, required: false
  private _sourceComponentParameters = new GoogleDesignCenterApplicationConnectionConfigsSourceComponentParametersList(this, "source_component_parameters", false);
  public get sourceComponentParameters() {
    return this._sourceComponentParameters;
  }
  public putSourceComponentParameters(value: GoogleDesignCenterApplicationConnectionConfigsSourceComponentParameters[] | cdktn.IResolvable) {
    this._sourceComponentParameters.internalValue = value;
  }
  public resetSourceComponentParameters() {
    this._sourceComponentParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceComponentParametersInput() {
    return this._sourceComponentParameters.internalValue;
  }
}

export class GoogleDesignCenterApplicationConnectionConfigsList extends cdktn.ComplexList {
  public internalValue? : GoogleDesignCenterApplicationConnectionConfigs[] | cdktn.IResolvable

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
  public get(index: number): GoogleDesignCenterApplicationConnectionConfigsOutputReference {
    return new GoogleDesignCenterApplicationConnectionConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget {
  /**
  * The self link of the cluster where the GKE based application is
  * deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#cluster_self_link GoogleDesignCenterApplication#cluster_self_link}
  */
  readonly clusterSelfLink: string;
  /**
  * The Kubernetes service account in the namespace, such as
  * 'default'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#kubernetes_service_account GoogleDesignCenterApplication#kubernetes_service_account}
  */
  readonly kubernetesServiceAccount: string;
  /**
  * Whether to create the Kubernetes service account. If 'true', the
  * service account is created in the namespace. If 'false', the
  * service account must already exist in the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#kubernetes_service_account_creation GoogleDesignCenterApplication#kubernetes_service_account_creation}
  */
  readonly kubernetesServiceAccountCreation?: boolean | cdktn.IResolvable;
  /**
  * The namespace where the application is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#namespace GoogleDesignCenterApplication#namespace}
  */
  readonly namespace: string;
}

export function googleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetToTerraform(struct?: GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference | GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_self_link: cdktn.stringToTerraform(struct!.clusterSelfLink),
    kubernetes_service_account: cdktn.stringToTerraform(struct!.kubernetesServiceAccount),
    kubernetes_service_account_creation: cdktn.booleanToTerraform(struct!.kubernetesServiceAccountCreation),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function googleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetToHclTerraform(struct?: GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference | GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_self_link: {
      value: cdktn.stringToHclTerraform(struct!.clusterSelfLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_service_account: {
      value: cdktn.stringToHclTerraform(struct!.kubernetesServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_service_account_creation: {
      value: cdktn.booleanToHclTerraform(struct!.kubernetesServiceAccountCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterSelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSelfLink = this._clusterSelfLink;
    }
    if (this._kubernetesServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesServiceAccount = this._kubernetesServiceAccount;
    }
    if (this._kubernetesServiceAccountCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesServiceAccountCreation = this._kubernetesServiceAccountCreation;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterSelfLink = undefined;
      this._kubernetesServiceAccount = undefined;
      this._kubernetesServiceAccountCreation = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterSelfLink = value.clusterSelfLink;
      this._kubernetesServiceAccount = value.kubernetesServiceAccount;
      this._kubernetesServiceAccountCreation = value.kubernetesServiceAccountCreation;
      this._namespace = value.namespace;
    }
  }

  // cluster_self_link - computed: false, optional: false, required: true
  private _clusterSelfLink?: string; 
  public get clusterSelfLink() {
    return this.getStringAttribute('cluster_self_link');
  }
  public set clusterSelfLink(value: string) {
    this._clusterSelfLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSelfLinkInput() {
    return this._clusterSelfLink;
  }

  // kubernetes_service_account - computed: false, optional: false, required: true
  private _kubernetesServiceAccount?: string; 
  public get kubernetesServiceAccount() {
    return this.getStringAttribute('kubernetes_service_account');
  }
  public set kubernetesServiceAccount(value: string) {
    this._kubernetesServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesServiceAccountInput() {
    return this._kubernetesServiceAccount;
  }

  // kubernetes_service_account_creation - computed: false, optional: true, required: false
  private _kubernetesServiceAccountCreation?: boolean | cdktn.IResolvable; 
  public get kubernetesServiceAccountCreation() {
    return this.getBooleanAttribute('kubernetes_service_account_creation');
  }
  public set kubernetesServiceAccountCreation(value: boolean | cdktn.IResolvable) {
    this._kubernetesServiceAccountCreation = value;
  }
  public resetKubernetesServiceAccountCreation() {
    this._kubernetesServiceAccountCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesServiceAccountCreationInput() {
    return this._kubernetesServiceAccountCreation;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface GoogleDesignCenterApplicationDeploymentTarget {
  /**
  * gke_deployment_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#gke_deployment_target GoogleDesignCenterApplication#gke_deployment_target}
  */
  readonly gkeDeploymentTarget?: GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget;
}

export function googleDesignCenterApplicationDeploymentTargetToTerraform(struct?: GoogleDesignCenterApplicationDeploymentTargetOutputReference | GoogleDesignCenterApplicationDeploymentTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gke_deployment_target: googleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetToTerraform(struct!.gkeDeploymentTarget),
  }
}


export function googleDesignCenterApplicationDeploymentTargetToHclTerraform(struct?: GoogleDesignCenterApplicationDeploymentTargetOutputReference | GoogleDesignCenterApplicationDeploymentTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gke_deployment_target: {
      value: googleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetToHclTerraform(struct!.gkeDeploymentTarget),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationDeploymentTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDesignCenterApplicationDeploymentTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gkeDeploymentTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeDeploymentTarget = this._gkeDeploymentTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationDeploymentTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gkeDeploymentTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gkeDeploymentTarget.internalValue = value.gkeDeploymentTarget;
    }
  }

  // gke_deployment_target - computed: false, optional: true, required: false
  private _gkeDeploymentTarget = new GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference(this, "gke_deployment_target");
  public get gkeDeploymentTarget() {
    return this._gkeDeploymentTarget;
  }
  public putGkeDeploymentTarget(value: GoogleDesignCenterApplicationDeploymentTargetGkeDeploymentTarget) {
    this._gkeDeploymentTarget.internalValue = value;
  }
  public resetGkeDeploymentTarget() {
    this._gkeDeploymentTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeDeploymentTargetInput() {
    return this._gkeDeploymentTarget.internalValue;
  }
}
export interface GoogleDesignCenterApplicationRolesApisConfigApis {
  /**
  * API name, such as 'compute.googleapis.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#api GoogleDesignCenterApplication#api}
  */
  readonly api: string;
}

export function googleDesignCenterApplicationRolesApisConfigApisToTerraform(struct?: GoogleDesignCenterApplicationRolesApisConfigApis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api: cdktn.stringToTerraform(struct!.api),
  }
}


export function googleDesignCenterApplicationRolesApisConfigApisToHclTerraform(struct?: GoogleDesignCenterApplicationRolesApisConfigApis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api: {
      value: cdktn.stringToHclTerraform(struct!.api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationRolesApisConfigApisOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDesignCenterApplicationRolesApisConfigApis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationRolesApisConfigApis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._api = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._api = value.api;
    }
  }

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

  // system_provided - computed: true, optional: false, required: false
  public get systemProvided() {
    return this.getBooleanAttribute('system_provided');
  }
}

export class GoogleDesignCenterApplicationRolesApisConfigApisList extends cdktn.ComplexList {
  public internalValue? : GoogleDesignCenterApplicationRolesApisConfigApis[] | cdktn.IResolvable

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
  public get(index: number): GoogleDesignCenterApplicationRolesApisConfigApisOutputReference {
    return new GoogleDesignCenterApplicationRolesApisConfigApisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationRolesApisConfigRoles {
  /**
  * IAM role name, such as 'roles/editor'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#role GoogleDesignCenterApplication#role}
  */
  readonly role: string;
}

export function googleDesignCenterApplicationRolesApisConfigRolesToTerraform(struct?: GoogleDesignCenterApplicationRolesApisConfigRoles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role: cdktn.stringToTerraform(struct!.role),
  }
}


export function googleDesignCenterApplicationRolesApisConfigRolesToHclTerraform(struct?: GoogleDesignCenterApplicationRolesApisConfigRoles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDesignCenterApplicationRolesApisConfigRoles | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationRolesApisConfigRoles | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // system_provided - computed: true, optional: false, required: false
  public get systemProvided() {
    return this.getBooleanAttribute('system_provided');
  }
}

export class GoogleDesignCenterApplicationRolesApisConfigRolesList extends cdktn.ComplexList {
  public internalValue? : GoogleDesignCenterApplicationRolesApisConfigRoles[] | cdktn.IResolvable

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
  public get(index: number): GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference {
    return new GoogleDesignCenterApplicationRolesApisConfigRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationRolesApisConfig {
  /**
  * The project ID to which these configurations apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#project_id GoogleDesignCenterApplication#project_id}
  */
  readonly projectId: string;
  /**
  * apis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#apis GoogleDesignCenterApplication#apis}
  */
  readonly apis?: GoogleDesignCenterApplicationRolesApisConfigApis[] | cdktn.IResolvable;
  /**
  * roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#roles GoogleDesignCenterApplication#roles}
  */
  readonly roles?: GoogleDesignCenterApplicationRolesApisConfigRoles[] | cdktn.IResolvable;
}

export function googleDesignCenterApplicationRolesApisConfigToTerraform(struct?: GoogleDesignCenterApplicationRolesApisConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    project_id: cdktn.stringToTerraform(struct!.projectId),
    apis: cdktn.listMapper(googleDesignCenterApplicationRolesApisConfigApisToTerraform, true)(struct!.apis),
    roles: cdktn.listMapper(googleDesignCenterApplicationRolesApisConfigRolesToTerraform, true)(struct!.roles),
  }
}


export function googleDesignCenterApplicationRolesApisConfigToHclTerraform(struct?: GoogleDesignCenterApplicationRolesApisConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apis: {
      value: cdktn.listMapperHcl(googleDesignCenterApplicationRolesApisConfigApisToHclTerraform, true)(struct!.apis),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDesignCenterApplicationRolesApisConfigApisList",
    },
    roles: {
      value: cdktn.listMapperHcl(googleDesignCenterApplicationRolesApisConfigRolesToHclTerraform, true)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDesignCenterApplicationRolesApisConfigRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationRolesApisConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDesignCenterApplicationRolesApisConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._apis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apis = this._apis?.internalValue;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationRolesApisConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._apis.internalValue = undefined;
      this._roles.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._apis.internalValue = value.apis;
      this._roles.internalValue = value.roles;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // apis - computed: false, optional: true, required: false
  private _apis = new GoogleDesignCenterApplicationRolesApisConfigApisList(this, "apis", false);
  public get apis() {
    return this._apis;
  }
  public putApis(value: GoogleDesignCenterApplicationRolesApisConfigApis[] | cdktn.IResolvable) {
    this._apis.internalValue = value;
  }
  public resetApis() {
    this._apis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apisInput() {
    return this._apis.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new GoogleDesignCenterApplicationRolesApisConfigRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: GoogleDesignCenterApplicationRolesApisConfigRoles[] | cdktn.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }
}

export class GoogleDesignCenterApplicationRolesApisConfigList extends cdktn.ComplexList {
  public internalValue? : GoogleDesignCenterApplicationRolesApisConfig[] | cdktn.IResolvable

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
  public get(index: number): GoogleDesignCenterApplicationRolesApisConfigOutputReference {
    return new GoogleDesignCenterApplicationRolesApisConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDesignCenterApplicationScope {
  /**
  * Scope type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#type GoogleDesignCenterApplication#type}
  */
  readonly type?: string;
}

export function googleDesignCenterApplicationScopeToTerraform(struct?: GoogleDesignCenterApplicationScopeOutputReference | GoogleDesignCenterApplicationScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function googleDesignCenterApplicationScopeToHclTerraform(struct?: GoogleDesignCenterApplicationScopeOutputReference | GoogleDesignCenterApplicationScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDesignCenterApplicationScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleDesignCenterApplicationSource {
  /**
  * Application template revision URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#application_template_revision GoogleDesignCenterApplication#application_template_revision}
  */
  readonly applicationTemplateRevision?: string;
}

export function googleDesignCenterApplicationSourceToTerraform(struct?: GoogleDesignCenterApplicationSourceOutputReference | GoogleDesignCenterApplicationSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_template_revision: cdktn.stringToTerraform(struct!.applicationTemplateRevision),
  }
}


export function googleDesignCenterApplicationSourceToHclTerraform(struct?: GoogleDesignCenterApplicationSourceOutputReference | GoogleDesignCenterApplicationSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_template_revision: {
      value: cdktn.stringToHclTerraform(struct!.applicationTemplateRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDesignCenterApplicationSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDesignCenterApplicationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationTemplateRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationTemplateRevision = this._applicationTemplateRevision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDesignCenterApplicationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationTemplateRevision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationTemplateRevision = value.applicationTemplateRevision;
    }
  }

  // application_template_revision - computed: false, optional: true, required: false
  private _applicationTemplateRevision?: string; 
  public get applicationTemplateRevision() {
    return this.getStringAttribute('application_template_revision');
  }
  public set applicationTemplateRevision(value: string) {
    this._applicationTemplateRevision = value;
  }
  public resetApplicationTemplateRevision() {
    this._applicationTemplateRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTemplateRevisionInput() {
    return this._applicationTemplateRevision;
  }
}
export interface GoogleDesignCenterApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#create GoogleDesignCenterApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#delete GoogleDesignCenterApplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#update GoogleDesignCenterApplication#update}
  */
  readonly update?: string;
}

export function googleDesignCenterApplicationTimeoutsToTerraform(struct?: GoogleDesignCenterApplicationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function googleDesignCenterApplicationTimeoutsToHclTerraform(struct?: GoogleDesignCenterApplicationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class GoogleDesignCenterApplicationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDesignCenterApplicationTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleDesignCenterApplicationTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application google_design_center_application}
*/
export class GoogleDesignCenterApplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_design_center_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleDesignCenterApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDesignCenterApplication to import
  * @param importFromId The id of the existing GoogleDesignCenterApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDesignCenterApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_design_center_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_design_center_application google_design_center_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDesignCenterApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDesignCenterApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_design_center_application',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '8.12.0',
        providerVersionConstraint: '~> 8.0'
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
    this._deletionPolicy = config.deletionPolicy;
    this._deploymentProject = config.deploymentProject;
    this._deploymentRegion = config.deploymentRegion;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._space = config.space;
    this._appParameters.internalValue = config.appParameters;
    this._attributes.internalValue = config.attributes;
    this._componentParameters.internalValue = config.componentParameters;
    this._compositeApplicationParameters.internalValue = config.compositeApplicationParameters;
    this._connectionConfigs.internalValue = config.connectionConfigs;
    this._deploymentTarget.internalValue = config.deploymentTarget;
    this._rolesApisConfig.internalValue = config.rolesApisConfig;
    this._scope.internalValue = config.scope;
    this._source.internalValue = config.source;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apphub_application - computed: true, optional: false, required: false
  public get apphubApplication() {
    return this.getStringAttribute('apphub_application');
  }

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

  // deployment_metadata - computed: true, optional: false, required: false
  private _deploymentMetadata = new GoogleDesignCenterApplicationDeploymentMetadataList(this, "deployment_metadata", false);
  public get deploymentMetadata() {
    return this._deploymentMetadata;
  }

  // deployment_project - computed: false, optional: true, required: false
  private _deploymentProject?: string; 
  public get deploymentProject() {
    return this.getStringAttribute('deployment_project');
  }
  public set deploymentProject(value: string) {
    this._deploymentProject = value;
  }
  public resetDeploymentProject() {
    this._deploymentProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentProjectInput() {
    return this._deploymentProject;
  }

  // deployment_region - computed: false, optional: true, required: false
  private _deploymentRegion?: string; 
  public get deploymentRegion() {
    return this.getStringAttribute('deployment_region');
  }
  public set deploymentRegion(value: string) {
    this._deploymentRegion = value;
  }
  public resetDeploymentRegion() {
    this._deploymentRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentRegionInput() {
    return this._deploymentRegion;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // space - computed: false, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // app_parameters - computed: false, optional: true, required: false
  private _appParameters = new GoogleDesignCenterApplicationAppParametersList(this, "app_parameters", false);
  public get appParameters() {
    return this._appParameters;
  }
  public putAppParameters(value: GoogleDesignCenterApplicationAppParameters[] | cdktn.IResolvable) {
    this._appParameters.internalValue = value;
  }
  public resetAppParameters() {
    this._appParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appParametersInput() {
    return this._appParameters.internalValue;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new GoogleDesignCenterApplicationAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: GoogleDesignCenterApplicationAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // component_parameters - computed: false, optional: true, required: false
  private _componentParameters = new GoogleDesignCenterApplicationComponentParametersList(this, "component_parameters", false);
  public get componentParameters() {
    return this._componentParameters;
  }
  public putComponentParameters(value: GoogleDesignCenterApplicationComponentParameters[] | cdktn.IResolvable) {
    this._componentParameters.internalValue = value;
  }
  public resetComponentParameters() {
    this._componentParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentParametersInput() {
    return this._componentParameters.internalValue;
  }

  // composite_application_parameters - computed: false, optional: true, required: false
  private _compositeApplicationParameters = new GoogleDesignCenterApplicationCompositeApplicationParametersOutputReference(this, "composite_application_parameters");
  public get compositeApplicationParameters() {
    return this._compositeApplicationParameters;
  }
  public putCompositeApplicationParameters(value: GoogleDesignCenterApplicationCompositeApplicationParameters) {
    this._compositeApplicationParameters.internalValue = value;
  }
  public resetCompositeApplicationParameters() {
    this._compositeApplicationParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeApplicationParametersInput() {
    return this._compositeApplicationParameters.internalValue;
  }

  // connection_configs - computed: false, optional: true, required: false
  private _connectionConfigs = new GoogleDesignCenterApplicationConnectionConfigsList(this, "connection_configs", false);
  public get connectionConfigs() {
    return this._connectionConfigs;
  }
  public putConnectionConfigs(value: GoogleDesignCenterApplicationConnectionConfigs[] | cdktn.IResolvable) {
    this._connectionConfigs.internalValue = value;
  }
  public resetConnectionConfigs() {
    this._connectionConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigsInput() {
    return this._connectionConfigs.internalValue;
  }

  // deployment_target - computed: false, optional: true, required: false
  private _deploymentTarget = new GoogleDesignCenterApplicationDeploymentTargetOutputReference(this, "deployment_target");
  public get deploymentTarget() {
    return this._deploymentTarget;
  }
  public putDeploymentTarget(value: GoogleDesignCenterApplicationDeploymentTarget) {
    this._deploymentTarget.internalValue = value;
  }
  public resetDeploymentTarget() {
    this._deploymentTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTargetInput() {
    return this._deploymentTarget.internalValue;
  }

  // roles_apis_config - computed: false, optional: true, required: false
  private _rolesApisConfig = new GoogleDesignCenterApplicationRolesApisConfigList(this, "roles_apis_config", false);
  public get rolesApisConfig() {
    return this._rolesApisConfig;
  }
  public putRolesApisConfig(value: GoogleDesignCenterApplicationRolesApisConfig[] | cdktn.IResolvable) {
    this._rolesApisConfig.internalValue = value;
  }
  public resetRolesApisConfig() {
    this._rolesApisConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesApisConfigInput() {
    return this._rolesApisConfig.internalValue;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new GoogleDesignCenterApplicationScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: GoogleDesignCenterApplicationScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new GoogleDesignCenterApplicationSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: GoogleDesignCenterApplicationSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDesignCenterApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDesignCenterApplicationTimeouts) {
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
      application_id: cdktn.stringToTerraform(this._applicationId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      deployment_project: cdktn.stringToTerraform(this._deploymentProject),
      deployment_region: cdktn.stringToTerraform(this._deploymentRegion),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      service_account: cdktn.stringToTerraform(this._serviceAccount),
      space: cdktn.stringToTerraform(this._space),
      app_parameters: cdktn.listMapper(googleDesignCenterApplicationAppParametersToTerraform, true)(this._appParameters.internalValue),
      attributes: googleDesignCenterApplicationAttributesToTerraform(this._attributes.internalValue),
      component_parameters: cdktn.listMapper(googleDesignCenterApplicationComponentParametersToTerraform, true)(this._componentParameters.internalValue),
      composite_application_parameters: googleDesignCenterApplicationCompositeApplicationParametersToTerraform(this._compositeApplicationParameters.internalValue),
      connection_configs: cdktn.listMapper(googleDesignCenterApplicationConnectionConfigsToTerraform, true)(this._connectionConfigs.internalValue),
      deployment_target: googleDesignCenterApplicationDeploymentTargetToTerraform(this._deploymentTarget.internalValue),
      roles_apis_config: cdktn.listMapper(googleDesignCenterApplicationRolesApisConfigToTerraform, true)(this._rolesApisConfig.internalValue),
      scope: googleDesignCenterApplicationScopeToTerraform(this._scope.internalValue),
      source: googleDesignCenterApplicationSourceToTerraform(this._source.internalValue),
      timeouts: googleDesignCenterApplicationTimeoutsToTerraform(this._timeouts.internalValue),
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
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_project: {
        value: cdktn.stringToHclTerraform(this._deploymentProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_region: {
        value: cdktn.stringToHclTerraform(this._deploymentRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
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
      service_account: {
        value: cdktn.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space: {
        value: cdktn.stringToHclTerraform(this._space),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_parameters: {
        value: cdktn.listMapperHcl(googleDesignCenterApplicationAppParametersToHclTerraform, true)(this._appParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDesignCenterApplicationAppParametersList",
      },
      attributes: {
        value: googleDesignCenterApplicationAttributesToHclTerraform(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDesignCenterApplicationAttributesList",
      },
      component_parameters: {
        value: cdktn.listMapperHcl(googleDesignCenterApplicationComponentParametersToHclTerraform, true)(this._componentParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDesignCenterApplicationComponentParametersList",
      },
      composite_application_parameters: {
        value: googleDesignCenterApplicationCompositeApplicationParametersToHclTerraform(this._compositeApplicationParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDesignCenterApplicationCompositeApplicationParametersList",
      },
      connection_configs: {
        value: cdktn.listMapperHcl(googleDesignCenterApplicationConnectionConfigsToHclTerraform, true)(this._connectionConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDesignCenterApplicationConnectionConfigsList",
      },
      deployment_target: {
        value: googleDesignCenterApplicationDeploymentTargetToHclTerraform(this._deploymentTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDesignCenterApplicationDeploymentTargetList",
      },
      roles_apis_config: {
        value: cdktn.listMapperHcl(googleDesignCenterApplicationRolesApisConfigToHclTerraform, true)(this._rolesApisConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDesignCenterApplicationRolesApisConfigList",
      },
      scope: {
        value: googleDesignCenterApplicationScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDesignCenterApplicationScopeList",
      },
      source: {
        value: googleDesignCenterApplicationSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDesignCenterApplicationSourceList",
      },
      timeouts: {
        value: googleDesignCenterApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDesignCenterApplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
