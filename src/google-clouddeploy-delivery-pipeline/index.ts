/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleClouddeployDeliveryPipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field `effective_annotations` for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#annotations GoogleClouddeployDeliveryPipeline#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#deletion_policy GoogleClouddeployDeliveryPipeline#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Description of the `DeliveryPipeline`. Max length is 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#description GoogleClouddeployDeliveryPipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#id GoogleClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field `effective_labels` for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#labels GoogleClouddeployDeliveryPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#location GoogleClouddeployDeliveryPipeline#location}
  */
  readonly location: string;
  /**
  * Name of the `DeliveryPipeline`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#name GoogleClouddeployDeliveryPipeline#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#project GoogleClouddeployDeliveryPipeline#project}
  */
  readonly project?: string;
  /**
  * When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#suspended GoogleClouddeployDeliveryPipeline#suspended}
  */
  readonly suspended?: boolean | cdktn.IResolvable;
  /**
  * serial_pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#serial_pipeline GoogleClouddeployDeliveryPipeline#serial_pipeline}
  */
  readonly serialPipeline?: GoogleClouddeployDeliveryPipelineSerialPipeline;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#timeouts GoogleClouddeployDeliveryPipeline#timeouts}
  */
  readonly timeouts?: GoogleClouddeployDeliveryPipelineTimeouts;
}
export interface GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition {
}

export function googleClouddeployDeliveryPipelineConditionPipelineReadyConditionToTerraform(struct?: GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleClouddeployDeliveryPipelineConditionPipelineReadyConditionToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList extends cdktn.ComplexList {

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
  public get(index: number): GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference {
    return new GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition {
}

export function googleClouddeployDeliveryPipelineConditionTargetsPresentConditionToTerraform(struct?: GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleClouddeployDeliveryPipelineConditionTargetsPresentConditionToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // missing_targets - computed: true, optional: false, required: false
  public get missingTargets() {
    return this.getListAttribute('missing_targets');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList extends cdktn.ComplexList {

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
  public get(index: number): GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference {
    return new GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition {
}

export function googleClouddeployDeliveryPipelineConditionTargetsTypeConditionToTerraform(struct?: GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleClouddeployDeliveryPipelineConditionTargetsTypeConditionToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_details - computed: true, optional: false, required: false
  public get errorDetails() {
    return this.getStringAttribute('error_details');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
  }
}

export class GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList extends cdktn.ComplexList {

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
  public get(index: number): GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference {
    return new GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineCondition {
}

export function googleClouddeployDeliveryPipelineConditionToTerraform(struct?: GoogleClouddeployDeliveryPipelineCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleClouddeployDeliveryPipelineConditionToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleClouddeployDeliveryPipelineConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pipeline_ready_condition - computed: true, optional: false, required: false
  private _pipelineReadyCondition = new GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList(this, "pipeline_ready_condition", false);
  public get pipelineReadyCondition() {
    return this._pipelineReadyCondition;
  }

  // targets_present_condition - computed: true, optional: false, required: false
  private _targetsPresentCondition = new GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList(this, "targets_present_condition", false);
  public get targetsPresentCondition() {
    return this._targetsPresentCondition;
  }

  // targets_type_condition - computed: true, optional: false, required: false
  private _targetsTypeCondition = new GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList(this, "targets_type_condition", false);
  public get targetsTypeCondition() {
    return this._targetsTypeCondition;
  }
}

export class GoogleClouddeployDeliveryPipelineConditionList extends cdktn.ComplexList {

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
  public get(index: number): GoogleClouddeployDeliveryPipelineConditionOutputReference {
    return new GoogleClouddeployDeliveryPipelineConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters {
  /**
  * Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#match_target_labels GoogleClouddeployDeliveryPipeline#match_target_labels}
  */
  readonly matchTargetLabels?: { [key: string]: string };
  /**
  * Required. Values are deploy parameters in key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#values GoogleClouddeployDeliveryPipeline#values}
  */
  readonly values: { [key: string]: string };
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_target_labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.matchTargetLabels),
    values: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.values),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_target_labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.matchTargetLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    values: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchTargetLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTargetLabels = this._matchTargetLabels;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchTargetLabels = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchTargetLabels = value.matchTargetLabels;
      this._values = value.values;
    }
  }

  // match_target_labels - computed: false, optional: true, required: false
  private _matchTargetLabels?: { [key: string]: string }; 
  public get matchTargetLabels() {
    return this.getStringMapAttribute('match_target_labels');
  }
  public set matchTargetLabels(value: { [key: string]: string }) {
    this._matchTargetLabels = value;
  }
  public resetMatchTargetLabels() {
    this._matchTargetLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTargetLabelsInput() {
    return this._matchTargetLabels;
  }

  // values - computed: false, optional: false, required: true
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList extends cdktn.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[] | cdktn.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#args GoogleClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#command GoogleClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#env GoogleClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#image GoogleClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTask {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#container GoogleClouddeployDeliveryPipeline#container}
  */
  readonly container?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainer;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerToTerraform(struct!.container),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks {
  /**
  * Optional. Frequency of the custom check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#frequency GoogleClouddeployDeliveryPipeline#frequency}
  */
  readonly frequency?: string;
  /**
  * Required. Unique identifier for the custom check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#id GoogleClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#task GoogleClouddeployDeliveryPipeline#task}
  */
  readonly task?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTask;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktn.stringToTerraform(struct!.frequency),
    id: cdktn.stringToTerraform(struct!.id),
    task: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskToTerraform(struct!.task),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktn.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskToHclTerraform(struct!.task),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._task?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequency = undefined;
      this._id = undefined;
      this._task.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequency = value.frequency;
      this._id = value.id;
      this._task.internalValue = value.task;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // task - computed: false, optional: true, required: false
  private _task = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTaskOutputReference(this, "task");
  public get task() {
    return this._task;
  }
  public putTask(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksTask) {
    this._task.internalValue = value;
  }
  public resetTask() {
    this._task.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksList extends cdktn.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks[] | cdktn.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks {
  /**
  * Required. The list of alert policy names to check. Format: `projects/{project}/alertPolicies/{alert_policy}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#alert_policies GoogleClouddeployDeliveryPipeline#alert_policies}
  */
  readonly alertPolicies: string[];
  /**
  * Required. Unique identifier for the alert policy check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#id GoogleClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional. Labels to filter the alert policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#labels GoogleClouddeployDeliveryPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alertPolicies),
    id: cdktn.stringToTerraform(struct!.id),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_policies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alertPolicies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPolicies = this._alertPolicies;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertPolicies = undefined;
      this._id = undefined;
      this._labels = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertPolicies = value.alertPolicies;
      this._id = value.id;
      this._labels = value.labels;
    }
  }

  // alert_policies - computed: false, optional: false, required: true
  private _alertPolicies?: string[]; 
  public get alertPolicies() {
    return this.getListAttribute('alert_policies');
  }
  public set alertPolicies(value: string[]) {
    this._alertPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPoliciesInput() {
    return this._alertPolicies;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksList extends cdktn.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloud {
  /**
  * alert_policy_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#alert_policy_checks GoogleClouddeployDeliveryPipeline#alert_policy_checks}
  */
  readonly alertPolicyChecks?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloud): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_policy_checks: cdktn.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksToTerraform, true)(struct!.alertPolicyChecks),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloud): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_policy_checks: {
      value: cdktn.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksToHclTerraform, true)(struct!.alertPolicyChecks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertPolicyChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPolicyChecks = this._alertPolicyChecks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertPolicyChecks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertPolicyChecks.internalValue = value.alertPolicyChecks;
    }
  }

  // alert_policy_checks - computed: false, optional: true, required: false
  private _alertPolicyChecks = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecksList(this, "alert_policy_checks", false);
  public get alertPolicyChecks() {
    return this._alertPolicyChecks;
  }
  public putAlertPolicyChecks(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable) {
    this._alertPolicyChecks.internalValue = value;
  }
  public resetAlertPolicyChecks() {
    this._alertPolicyChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPolicyChecksInput() {
    return this._alertPolicyChecks.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysis {
  /**
  * Required. Duration of the analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#duration GoogleClouddeployDeliveryPipeline#duration}
  */
  readonly duration: string;
  /**
  * custom_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#custom_checks GoogleClouddeployDeliveryPipeline#custom_checks}
  */
  readonly customChecks?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks[] | cdktn.IResolvable;
  /**
  * google_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#google_cloud GoogleClouddeployDeliveryPipeline#google_cloud}
  */
  readonly googleCloud?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloud;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktn.stringToTerraform(struct!.duration),
    custom_checks: cdktn.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksToTerraform, true)(struct!.customChecks),
    google_cloud: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudToTerraform(struct!.googleCloud),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_checks: {
      value: cdktn.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksToHclTerraform, true)(struct!.customChecks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksList",
    },
    google_cloud: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudToHclTerraform(struct!.googleCloud),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._customChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customChecks = this._customChecks?.internalValue;
    }
    if (this._googleCloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloud = this._googleCloud?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._customChecks.internalValue = undefined;
      this._googleCloud.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._customChecks.internalValue = value.customChecks;
      this._googleCloud.internalValue = value.googleCloud;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // custom_checks - computed: false, optional: true, required: false
  private _customChecks = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecksList(this, "custom_checks", false);
  public get customChecks() {
    return this._customChecks;
  }
  public putCustomChecks(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisCustomChecks[] | cdktn.IResolvable) {
    this._customChecks.internalValue = value;
  }
  public resetCustomChecks() {
    this._customChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customChecksInput() {
    return this._customChecks.internalValue;
  }

  // google_cloud - computed: false, optional: true, required: false
  private _googleCloud = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloudOutputReference(this, "google_cloud");
  public get googleCloud() {
    return this._googleCloud;
  }
  public putGoogleCloud(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisGoogleCloud) {
    this._googleCloud.internalValue = value;
  }
  public resetGoogleCloud() {
    this._googleCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudInput() {
    return this._googleCloud.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#args GoogleClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#command GoogleClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#env GoogleClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#image GoogleClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#container GoogleClouddeployDeliveryPipeline#container}
  */
  readonly container?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainer;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerToTerraform(struct!.container),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksList extends cdktn.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks[] | cdktn.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfig {
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#tasks GoogleClouddeployDeliveryPipeline#tasks}
  */
  readonly tasks?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks[] | cdktn.IResolvable;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tasks: cdktn.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksToTerraform, true)(struct!.tasks),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tasks: {
      value: cdktn.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tasks.internalValue = value.tasks;
    }
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigTasks[] | cdktn.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment {
  /**
  * Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#percentages GoogleClouddeployDeliveryPipeline#percentages}
  */
  readonly percentages: number[];
  /**
  * Whether to run verify tests after each percentage deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#verify GoogleClouddeployDeliveryPipeline#verify}
  */
  readonly verify?: boolean | cdktn.IResolvable;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#analysis GoogleClouddeployDeliveryPipeline#analysis}
  */
  readonly analysis?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysis;
  /**
  * postdeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#postdeploy GoogleClouddeployDeliveryPipeline#postdeploy}
  */
  readonly postdeploy?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy;
  /**
  * predeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#predeploy GoogleClouddeployDeliveryPipeline#predeploy}
  */
  readonly predeploy?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy;
  /**
  * verify_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#verify_config GoogleClouddeployDeliveryPipeline#verify_config}
  */
  readonly verifyConfig?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfig;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentages: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.percentages),
    verify: cdktn.booleanToTerraform(struct!.verify),
    analysis: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisToTerraform(struct!.analysis),
    postdeploy: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployToTerraform(struct!.postdeploy),
    predeploy: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployToTerraform(struct!.predeploy),
    verify_config: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigToTerraform(struct!.verifyConfig),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentages: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.percentages),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    verify: {
      value: cdktn.booleanToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    analysis: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisList",
    },
    postdeploy: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployToHclTerraform(struct!.postdeploy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployList",
    },
    predeploy: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployToHclTerraform(struct!.predeploy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployList",
    },
    verify_config: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigToHclTerraform(struct!.verifyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentages !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentages = this._percentages;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._postdeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postdeploy = this._postdeploy?.internalValue;
    }
    if (this._predeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predeploy = this._predeploy?.internalValue;
    }
    if (this._verifyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConfig = this._verifyConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentages = undefined;
      this._verify = undefined;
      this._analysis.internalValue = undefined;
      this._postdeploy.internalValue = undefined;
      this._predeploy.internalValue = undefined;
      this._verifyConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentages = value.percentages;
      this._verify = value.verify;
      this._analysis.internalValue = value.analysis;
      this._postdeploy.internalValue = value.postdeploy;
      this._predeploy.internalValue = value.predeploy;
      this._verifyConfig.internalValue = value.verifyConfig;
    }
  }

  // percentages - computed: false, optional: false, required: true
  private _percentages?: number[]; 
  public get percentages() {
    return this.getNumberListAttribute('percentages');
  }
  public set percentages(value: number[]) {
    this._percentages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentagesInput() {
    return this._percentages;
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktn.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktn.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // postdeploy - computed: false, optional: true, required: false
  private _postdeploy = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference(this, "postdeploy");
  public get postdeploy() {
    return this._postdeploy;
  }
  public putPostdeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy) {
    this._postdeploy.internalValue = value;
  }
  public resetPostdeploy() {
    this._postdeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postdeployInput() {
    return this._postdeploy.internalValue;
  }

  // predeploy - computed: false, optional: true, required: false
  private _predeploy = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference(this, "predeploy");
  public get predeploy() {
    return this._predeploy;
  }
  public putPredeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy) {
    this._predeploy.internalValue = value;
  }
  public resetPredeploy() {
    this._predeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predeployInput() {
    return this._predeploy.internalValue;
  }

  // verify_config - computed: false, optional: true, required: false
  private _verifyConfig = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfigOutputReference(this, "verify_config");
  public get verifyConfig() {
    return this._verifyConfig;
  }
  public putVerifyConfig(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentVerifyConfig) {
    this._verifyConfig.internalValue = value;
  }
  public resetVerifyConfig() {
    this._verifyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConfigInput() {
    return this._verifyConfig.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#args GoogleClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#command GoogleClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#env GoogleClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#image GoogleClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTask {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#container GoogleClouddeployDeliveryPipeline#container}
  */
  readonly container?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainer;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerToTerraform(struct!.container),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks {
  /**
  * Optional. Frequency of the custom check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#frequency GoogleClouddeployDeliveryPipeline#frequency}
  */
  readonly frequency?: string;
  /**
  * Required. Unique identifier for the custom check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#id GoogleClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#task GoogleClouddeployDeliveryPipeline#task}
  */
  readonly task?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTask;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktn.stringToTerraform(struct!.frequency),
    id: cdktn.stringToTerraform(struct!.id),
    task: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskToTerraform(struct!.task),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktn.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskToHclTerraform(struct!.task),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._task?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequency = undefined;
      this._id = undefined;
      this._task.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequency = value.frequency;
      this._id = value.id;
      this._task.internalValue = value.task;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // task - computed: false, optional: true, required: false
  private _task = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTaskOutputReference(this, "task");
  public get task() {
    return this._task;
  }
  public putTask(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksTask) {
    this._task.internalValue = value;
  }
  public resetTask() {
    this._task.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksList extends cdktn.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks[] | cdktn.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks {
  /**
  * Required. The list of alert policy names to check. Format: `projects/{project}/alertPolicies/{alert_policy}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#alert_policies GoogleClouddeployDeliveryPipeline#alert_policies}
  */
  readonly alertPolicies: string[];
  /**
  * Required. Unique identifier for the alert policy check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#id GoogleClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional. Labels to filter the alert policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#labels GoogleClouddeployDeliveryPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alertPolicies),
    id: cdktn.stringToTerraform(struct!.id),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_policies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alertPolicies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPolicies = this._alertPolicies;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertPolicies = undefined;
      this._id = undefined;
      this._labels = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertPolicies = value.alertPolicies;
      this._id = value.id;
      this._labels = value.labels;
    }
  }

  // alert_policies - computed: false, optional: false, required: true
  private _alertPolicies?: string[]; 
  public get alertPolicies() {
    return this.getListAttribute('alert_policies');
  }
  public set alertPolicies(value: string[]) {
    this._alertPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPoliciesInput() {
    return this._alertPolicies;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksList extends cdktn.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloud {
  /**
  * alert_policy_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#alert_policy_checks GoogleClouddeployDeliveryPipeline#alert_policy_checks}
  */
  readonly alertPolicyChecks?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloud): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_policy_checks: cdktn.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksToTerraform, true)(struct!.alertPolicyChecks),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloud): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_policy_checks: {
      value: cdktn.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksToHclTerraform, true)(struct!.alertPolicyChecks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertPolicyChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPolicyChecks = this._alertPolicyChecks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertPolicyChecks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertPolicyChecks.internalValue = value.alertPolicyChecks;
    }
  }

  // alert_policy_checks - computed: false, optional: true, required: false
  private _alertPolicyChecks = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecksList(this, "alert_policy_checks", false);
  public get alertPolicyChecks() {
    return this._alertPolicyChecks;
  }
  public putAlertPolicyChecks(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable) {
    this._alertPolicyChecks.internalValue = value;
  }
  public resetAlertPolicyChecks() {
    this._alertPolicyChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPolicyChecksInput() {
    return this._alertPolicyChecks.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysis {
  /**
  * Required. Duration of the analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#duration GoogleClouddeployDeliveryPipeline#duration}
  */
  readonly duration: string;
  /**
  * custom_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#custom_checks GoogleClouddeployDeliveryPipeline#custom_checks}
  */
  readonly customChecks?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks[] | cdktn.IResolvable;
  /**
  * google_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#google_cloud GoogleClouddeployDeliveryPipeline#google_cloud}
  */
  readonly googleCloud?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloud;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktn.stringToTerraform(struct!.duration),
    custom_checks: cdktn.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksToTerraform, true)(struct!.customChecks),
    google_cloud: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudToTerraform(struct!.googleCloud),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_checks: {
      value: cdktn.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksToHclTerraform, true)(struct!.customChecks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksList",
    },
    google_cloud: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudToHclTerraform(struct!.googleCloud),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._customChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customChecks = this._customChecks?.internalValue;
    }
    if (this._googleCloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloud = this._googleCloud?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._customChecks.internalValue = undefined;
      this._googleCloud.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._customChecks.internalValue = value.customChecks;
      this._googleCloud.internalValue = value.googleCloud;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // custom_checks - computed: false, optional: true, required: false
  private _customChecks = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecksList(this, "custom_checks", false);
  public get customChecks() {
    return this._customChecks;
  }
  public putCustomChecks(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisCustomChecks[] | cdktn.IResolvable) {
    this._customChecks.internalValue = value;
  }
  public resetCustomChecks() {
    this._customChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customChecksInput() {
    return this._customChecks.internalValue;
  }

  // google_cloud - computed: false, optional: true, required: false
  private _googleCloud = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloudOutputReference(this, "google_cloud");
  public get googleCloud() {
    return this._googleCloud;
  }
  public putGoogleCloud(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisGoogleCloud) {
    this._googleCloud.internalValue = value;
  }
  public resetGoogleCloud() {
    this._googleCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudInput() {
    return this._googleCloud.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#args GoogleClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#command GoogleClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#env GoogleClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#image GoogleClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#container GoogleClouddeployDeliveryPipeline#container}
  */
  readonly container?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainer;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerToTerraform(struct!.container),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksList extends cdktn.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks[] | cdktn.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfig {
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#tasks GoogleClouddeployDeliveryPipeline#tasks}
  */
  readonly tasks?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks[] | cdktn.IResolvable;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tasks: cdktn.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksToTerraform, true)(struct!.tasks),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tasks: {
      value: cdktn.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tasks.internalValue = value.tasks;
    }
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigTasks[] | cdktn.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs {
  /**
  * Required. Percentage deployment for the phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#percentage GoogleClouddeployDeliveryPipeline#percentage}
  */
  readonly percentage: number;
  /**
  * Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#phase_id GoogleClouddeployDeliveryPipeline#phase_id}
  */
  readonly phaseId: string;
  /**
  * Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the `DeliveryPipeline` stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#profiles GoogleClouddeployDeliveryPipeline#profiles}
  */
  readonly profiles?: string[];
  /**
  * Whether to run verify tests after the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#verify GoogleClouddeployDeliveryPipeline#verify}
  */
  readonly verify?: boolean | cdktn.IResolvable;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#analysis GoogleClouddeployDeliveryPipeline#analysis}
  */
  readonly analysis?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysis;
  /**
  * postdeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#postdeploy GoogleClouddeployDeliveryPipeline#postdeploy}
  */
  readonly postdeploy?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy;
  /**
  * predeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#predeploy GoogleClouddeployDeliveryPipeline#predeploy}
  */
  readonly predeploy?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy;
  /**
  * verify_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#verify_config GoogleClouddeployDeliveryPipeline#verify_config}
  */
  readonly verifyConfig?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfig;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktn.numberToTerraform(struct!.percentage),
    phase_id: cdktn.stringToTerraform(struct!.phaseId),
    profiles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.profiles),
    verify: cdktn.booleanToTerraform(struct!.verify),
    analysis: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisToTerraform(struct!.analysis),
    postdeploy: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployToTerraform(struct!.postdeploy),
    predeploy: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployToTerraform(struct!.predeploy),
    verify_config: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigToTerraform(struct!.verifyConfig),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    phase_id: {
      value: cdktn.stringToHclTerraform(struct!.phaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profiles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.profiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify: {
      value: cdktn.booleanToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    analysis: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisList",
    },
    postdeploy: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployToHclTerraform(struct!.postdeploy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployList",
    },
    predeploy: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployToHclTerraform(struct!.predeploy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployList",
    },
    verify_config: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigToHclTerraform(struct!.verifyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._phaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.phaseId = this._phaseId;
    }
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._postdeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postdeploy = this._postdeploy?.internalValue;
    }
    if (this._predeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predeploy = this._predeploy?.internalValue;
    }
    if (this._verifyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConfig = this._verifyConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentage = undefined;
      this._phaseId = undefined;
      this._profiles = undefined;
      this._verify = undefined;
      this._analysis.internalValue = undefined;
      this._postdeploy.internalValue = undefined;
      this._predeploy.internalValue = undefined;
      this._verifyConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentage = value.percentage;
      this._phaseId = value.phaseId;
      this._profiles = value.profiles;
      this._verify = value.verify;
      this._analysis.internalValue = value.analysis;
      this._postdeploy.internalValue = value.postdeploy;
      this._predeploy.internalValue = value.predeploy;
      this._verifyConfig.internalValue = value.verifyConfig;
    }
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // phase_id - computed: false, optional: false, required: true
  private _phaseId?: string; 
  public get phaseId() {
    return this.getStringAttribute('phase_id');
  }
  public set phaseId(value: string) {
    this._phaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseIdInput() {
    return this._phaseId;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktn.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktn.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // postdeploy - computed: false, optional: true, required: false
  private _postdeploy = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference(this, "postdeploy");
  public get postdeploy() {
    return this._postdeploy;
  }
  public putPostdeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy) {
    this._postdeploy.internalValue = value;
  }
  public resetPostdeploy() {
    this._postdeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postdeployInput() {
    return this._postdeploy.internalValue;
  }

  // predeploy - computed: false, optional: true, required: false
  private _predeploy = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference(this, "predeploy");
  public get predeploy() {
    return this._predeploy;
  }
  public putPredeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy) {
    this._predeploy.internalValue = value;
  }
  public resetPredeploy() {
    this._predeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predeployInput() {
    return this._predeploy.internalValue;
  }

  // verify_config - computed: false, optional: true, required: false
  private _verifyConfig = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfigOutputReference(this, "verify_config");
  public get verifyConfig() {
    return this._verifyConfig;
  }
  public putVerifyConfig(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsVerifyConfig) {
    this._verifyConfig.internalValue = value;
  }
  public resetVerifyConfig() {
    this._verifyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConfigInput() {
    return this._verifyConfig.internalValue;
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList extends cdktn.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[] | cdktn.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment {
  /**
  * phase_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#phase_configs GoogleClouddeployDeliveryPipeline#phase_configs}
  */
  readonly phaseConfigs: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[] | cdktn.IResolvable;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phase_configs: cdktn.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsToTerraform, true)(struct!.phaseConfigs),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    phase_configs: {
      value: cdktn.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsToHclTerraform, true)(struct!.phaseConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phaseConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phaseConfigs = this._phaseConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._phaseConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._phaseConfigs.internalValue = value.phaseConfigs;
    }
  }

  // phase_configs - computed: false, optional: false, required: true
  private _phaseConfigs = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList(this, "phase_configs", false);
  public get phaseConfigs() {
    return this._phaseConfigs;
  }
  public putPhaseConfigs(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[] | cdktn.IResolvable) {
    this._phaseConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseConfigsInput() {
    return this._phaseConfigs.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun {
  /**
  * Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#automatic_traffic_control GoogleClouddeployDeliveryPipeline#automatic_traffic_control}
  */
  readonly automaticTrafficControl?: boolean | cdktn.IResolvable;
  /**
  * Optional. A list of tags that are added to the canary revision while the canary phase is in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#canary_revision_tags GoogleClouddeployDeliveryPipeline#canary_revision_tags}
  */
  readonly canaryRevisionTags?: string[];
  /**
  * Optional. A list of tags that are added to the prior revision while the canary phase is in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#prior_revision_tags GoogleClouddeployDeliveryPipeline#prior_revision_tags}
  */
  readonly priorRevisionTags?: string[];
  /**
  * Optional. A list of tags that are added to the final stable revision when the stable phase is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#stable_revision_tags GoogleClouddeployDeliveryPipeline#stable_revision_tags}
  */
  readonly stableRevisionTags?: string[];
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_traffic_control: cdktn.booleanToTerraform(struct!.automaticTrafficControl),
    canary_revision_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.canaryRevisionTags),
    prior_revision_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.priorRevisionTags),
    stable_revision_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stableRevisionTags),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_traffic_control: {
      value: cdktn.booleanToHclTerraform(struct!.automaticTrafficControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    canary_revision_tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.canaryRevisionTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prior_revision_tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.priorRevisionTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    stable_revision_tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stableRevisionTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticTrafficControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticTrafficControl = this._automaticTrafficControl;
    }
    if (this._canaryRevisionTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryRevisionTags = this._canaryRevisionTags;
    }
    if (this._priorRevisionTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorRevisionTags = this._priorRevisionTags;
    }
    if (this._stableRevisionTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.stableRevisionTags = this._stableRevisionTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticTrafficControl = undefined;
      this._canaryRevisionTags = undefined;
      this._priorRevisionTags = undefined;
      this._stableRevisionTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticTrafficControl = value.automaticTrafficControl;
      this._canaryRevisionTags = value.canaryRevisionTags;
      this._priorRevisionTags = value.priorRevisionTags;
      this._stableRevisionTags = value.stableRevisionTags;
    }
  }

  // automatic_traffic_control - computed: false, optional: true, required: false
  private _automaticTrafficControl?: boolean | cdktn.IResolvable; 
  public get automaticTrafficControl() {
    return this.getBooleanAttribute('automatic_traffic_control');
  }
  public set automaticTrafficControl(value: boolean | cdktn.IResolvable) {
    this._automaticTrafficControl = value;
  }
  public resetAutomaticTrafficControl() {
    this._automaticTrafficControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticTrafficControlInput() {
    return this._automaticTrafficControl;
  }

  // canary_revision_tags - computed: false, optional: true, required: false
  private _canaryRevisionTags?: string[]; 
  public get canaryRevisionTags() {
    return this.getListAttribute('canary_revision_tags');
  }
  public set canaryRevisionTags(value: string[]) {
    this._canaryRevisionTags = value;
  }
  public resetCanaryRevisionTags() {
    this._canaryRevisionTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryRevisionTagsInput() {
    return this._canaryRevisionTags;
  }

  // prior_revision_tags - computed: false, optional: true, required: false
  private _priorRevisionTags?: string[]; 
  public get priorRevisionTags() {
    return this.getListAttribute('prior_revision_tags');
  }
  public set priorRevisionTags(value: string[]) {
    this._priorRevisionTags = value;
  }
  public resetPriorRevisionTags() {
    this._priorRevisionTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorRevisionTagsInput() {
    return this._priorRevisionTags;
  }

  // stable_revision_tags - computed: false, optional: true, required: false
  private _stableRevisionTags?: string[]; 
  public get stableRevisionTags() {
    return this.getListAttribute('stable_revision_tags');
  }
  public set stableRevisionTags(value: string[]) {
    this._stableRevisionTags = value;
  }
  public resetStableRevisionTags() {
    this._stableRevisionTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stableRevisionTagsInput() {
    return this._stableRevisionTags;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations {
  /**
  * Required. The clusters where the Gateway API HTTPRoute resource will be deployed to. Valid entries include the associated entities IDs configured in the Target resource and "@self" to include the Target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#destination_ids GoogleClouddeployDeliveryPipeline#destination_ids}
  */
  readonly destinationIds: string[];
  /**
  * Optional. Whether to propagate the Kubernetes Service to the route destination clusters. The Service will always be deployed to the Target cluster even if the HTTPRoute is not. This option may be used to facilitiate successful DNS lookup in the route destination clusters. Can only be set to true if destinations are specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#propagate_service GoogleClouddeployDeliveryPipeline#propagate_service}
  */
  readonly propagateService?: boolean | cdktn.IResolvable;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationIds),
    propagate_service: cdktn.booleanToTerraform(struct!.propagateService),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    propagate_service: {
      value: cdktn.booleanToHclTerraform(struct!.propagateService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIds = this._destinationIds;
    }
    if (this._propagateService !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateService = this._propagateService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationIds = undefined;
      this._propagateService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationIds = value.destinationIds;
      this._propagateService = value.propagateService;
    }
  }

  // destination_ids - computed: false, optional: false, required: true
  private _destinationIds?: string[]; 
  public get destinationIds() {
    return this.getListAttribute('destination_ids');
  }
  public set destinationIds(value: string[]) {
    this._destinationIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdsInput() {
    return this._destinationIds;
  }

  // propagate_service - computed: false, optional: true, required: false
  private _propagateService?: boolean | cdktn.IResolvable; 
  public get propagateService() {
    return this.getBooleanAttribute('propagate_service');
  }
  public set propagateService(value: boolean | cdktn.IResolvable) {
    this._propagateService = value;
  }
  public resetPropagateService() {
    this._propagateService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateServiceInput() {
    return this._propagateService;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh {
  /**
  * Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#deployment GoogleClouddeployDeliveryPipeline#deployment}
  */
  readonly deployment: string;
  /**
  * Required. Name of the Gateway API HTTPRoute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#http_route GoogleClouddeployDeliveryPipeline#http_route}
  */
  readonly httpRoute: string;
  /**
  * Optional. The label to use when selecting Pods for the Deployment and Service resources. This label must already be present in both resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#pod_selector_label GoogleClouddeployDeliveryPipeline#pod_selector_label}
  */
  readonly podSelectorLabel?: string;
  /**
  * Optional. The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#route_update_wait_time GoogleClouddeployDeliveryPipeline#route_update_wait_time}
  */
  readonly routeUpdateWaitTime?: string;
  /**
  * Required. Name of the Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#service GoogleClouddeployDeliveryPipeline#service}
  */
  readonly service: string;
  /**
  * Optional. The amount of time to migrate traffic back from the canary Service to the original Service during the stable phase deployment. If specified, must be between 15s and 3600s. If unspecified, there is no cutback time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#stable_cutback_duration GoogleClouddeployDeliveryPipeline#stable_cutback_duration}
  */
  readonly stableCutbackDuration?: string;
  /**
  * route_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#route_destinations GoogleClouddeployDeliveryPipeline#route_destinations}
  */
  readonly routeDestinations?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: cdktn.stringToTerraform(struct!.deployment),
    http_route: cdktn.stringToTerraform(struct!.httpRoute),
    pod_selector_label: cdktn.stringToTerraform(struct!.podSelectorLabel),
    route_update_wait_time: cdktn.stringToTerraform(struct!.routeUpdateWaitTime),
    service: cdktn.stringToTerraform(struct!.service),
    stable_cutback_duration: cdktn.stringToTerraform(struct!.stableCutbackDuration),
    route_destinations: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsToTerraform(struct!.routeDestinations),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment: {
      value: cdktn.stringToHclTerraform(struct!.deployment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_route: {
      value: cdktn.stringToHclTerraform(struct!.httpRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_selector_label: {
      value: cdktn.stringToHclTerraform(struct!.podSelectorLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_update_wait_time: {
      value: cdktn.stringToHclTerraform(struct!.routeUpdateWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stable_cutback_duration: {
      value: cdktn.stringToHclTerraform(struct!.stableCutbackDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_destinations: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsToHclTerraform(struct!.routeDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment;
    }
    if (this._httpRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRoute = this._httpRoute;
    }
    if (this._podSelectorLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelectorLabel = this._podSelectorLabel;
    }
    if (this._routeUpdateWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeUpdateWaitTime = this._routeUpdateWaitTime;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._stableCutbackDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.stableCutbackDuration = this._stableCutbackDuration;
    }
    if (this._routeDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeDestinations = this._routeDestinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deployment = undefined;
      this._httpRoute = undefined;
      this._podSelectorLabel = undefined;
      this._routeUpdateWaitTime = undefined;
      this._service = undefined;
      this._stableCutbackDuration = undefined;
      this._routeDestinations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deployment = value.deployment;
      this._httpRoute = value.httpRoute;
      this._podSelectorLabel = value.podSelectorLabel;
      this._routeUpdateWaitTime = value.routeUpdateWaitTime;
      this._service = value.service;
      this._stableCutbackDuration = value.stableCutbackDuration;
      this._routeDestinations.internalValue = value.routeDestinations;
    }
  }

  // deployment - computed: false, optional: false, required: true
  private _deployment?: string; 
  public get deployment() {
    return this.getStringAttribute('deployment');
  }
  public set deployment(value: string) {
    this._deployment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment;
  }

  // http_route - computed: false, optional: false, required: true
  private _httpRoute?: string; 
  public get httpRoute() {
    return this.getStringAttribute('http_route');
  }
  public set httpRoute(value: string) {
    this._httpRoute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteInput() {
    return this._httpRoute;
  }

  // pod_selector_label - computed: false, optional: true, required: false
  private _podSelectorLabel?: string; 
  public get podSelectorLabel() {
    return this.getStringAttribute('pod_selector_label');
  }
  public set podSelectorLabel(value: string) {
    this._podSelectorLabel = value;
  }
  public resetPodSelectorLabel() {
    this._podSelectorLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorLabelInput() {
    return this._podSelectorLabel;
  }

  // route_update_wait_time - computed: false, optional: true, required: false
  private _routeUpdateWaitTime?: string; 
  public get routeUpdateWaitTime() {
    return this.getStringAttribute('route_update_wait_time');
  }
  public set routeUpdateWaitTime(value: string) {
    this._routeUpdateWaitTime = value;
  }
  public resetRouteUpdateWaitTime() {
    this._routeUpdateWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeUpdateWaitTimeInput() {
    return this._routeUpdateWaitTime;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // stable_cutback_duration - computed: false, optional: true, required: false
  private _stableCutbackDuration?: string; 
  public get stableCutbackDuration() {
    return this.getStringAttribute('stable_cutback_duration');
  }
  public set stableCutbackDuration(value: string) {
    this._stableCutbackDuration = value;
  }
  public resetStableCutbackDuration() {
    this._stableCutbackDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stableCutbackDurationInput() {
    return this._stableCutbackDuration;
  }

  // route_destinations - computed: false, optional: true, required: false
  private _routeDestinations = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference(this, "route_destinations");
  public get routeDestinations() {
    return this._routeDestinations;
  }
  public putRouteDestinations(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations) {
    this._routeDestinations.internalValue = value;
  }
  public resetRouteDestinations() {
    this._routeDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDestinationsInput() {
    return this._routeDestinations.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking {
  /**
  * Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#deployment GoogleClouddeployDeliveryPipeline#deployment}
  */
  readonly deployment: string;
  /**
  * Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#disable_pod_overprovisioning GoogleClouddeployDeliveryPipeline#disable_pod_overprovisioning}
  */
  readonly disablePodOverprovisioning?: boolean | cdktn.IResolvable;
  /**
  * Optional. The label to use when selecting Pods for the Deployment resource. This label must already be present in the Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#pod_selector_label GoogleClouddeployDeliveryPipeline#pod_selector_label}
  */
  readonly podSelectorLabel?: string;
  /**
  * Required. Name of the Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#service GoogleClouddeployDeliveryPipeline#service}
  */
  readonly service: string;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: cdktn.stringToTerraform(struct!.deployment),
    disable_pod_overprovisioning: cdktn.booleanToTerraform(struct!.disablePodOverprovisioning),
    pod_selector_label: cdktn.stringToTerraform(struct!.podSelectorLabel),
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment: {
      value: cdktn.stringToHclTerraform(struct!.deployment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_pod_overprovisioning: {
      value: cdktn.booleanToHclTerraform(struct!.disablePodOverprovisioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_selector_label: {
      value: cdktn.stringToHclTerraform(struct!.podSelectorLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment;
    }
    if (this._disablePodOverprovisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePodOverprovisioning = this._disablePodOverprovisioning;
    }
    if (this._podSelectorLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelectorLabel = this._podSelectorLabel;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deployment = undefined;
      this._disablePodOverprovisioning = undefined;
      this._podSelectorLabel = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deployment = value.deployment;
      this._disablePodOverprovisioning = value.disablePodOverprovisioning;
      this._podSelectorLabel = value.podSelectorLabel;
      this._service = value.service;
    }
  }

  // deployment - computed: false, optional: false, required: true
  private _deployment?: string; 
  public get deployment() {
    return this.getStringAttribute('deployment');
  }
  public set deployment(value: string) {
    this._deployment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment;
  }

  // disable_pod_overprovisioning - computed: false, optional: true, required: false
  private _disablePodOverprovisioning?: boolean | cdktn.IResolvable; 
  public get disablePodOverprovisioning() {
    return this.getBooleanAttribute('disable_pod_overprovisioning');
  }
  public set disablePodOverprovisioning(value: boolean | cdktn.IResolvable) {
    this._disablePodOverprovisioning = value;
  }
  public resetDisablePodOverprovisioning() {
    this._disablePodOverprovisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePodOverprovisioningInput() {
    return this._disablePodOverprovisioning;
  }

  // pod_selector_label - computed: false, optional: true, required: false
  private _podSelectorLabel?: string; 
  public get podSelectorLabel() {
    return this.getStringAttribute('pod_selector_label');
  }
  public set podSelectorLabel(value: string) {
    this._podSelectorLabel = value;
  }
  public resetPodSelectorLabel() {
    this._podSelectorLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorLabelInput() {
    return this._podSelectorLabel;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes {
  /**
  * gateway_service_mesh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#gateway_service_mesh GoogleClouddeployDeliveryPipeline#gateway_service_mesh}
  */
  readonly gatewayServiceMesh?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh;
  /**
  * service_networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#service_networking GoogleClouddeployDeliveryPipeline#service_networking}
  */
  readonly serviceNetworking?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_service_mesh: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshToTerraform(struct!.gatewayServiceMesh),
    service_networking: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingToTerraform(struct!.serviceNetworking),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_service_mesh: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshToHclTerraform(struct!.gatewayServiceMesh),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshList",
    },
    service_networking: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingToHclTerraform(struct!.serviceNetworking),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayServiceMesh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayServiceMesh = this._gatewayServiceMesh?.internalValue;
    }
    if (this._serviceNetworking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNetworking = this._serviceNetworking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gatewayServiceMesh.internalValue = undefined;
      this._serviceNetworking.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gatewayServiceMesh.internalValue = value.gatewayServiceMesh;
      this._serviceNetworking.internalValue = value.serviceNetworking;
    }
  }

  // gateway_service_mesh - computed: false, optional: true, required: false
  private _gatewayServiceMesh = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference(this, "gateway_service_mesh");
  public get gatewayServiceMesh() {
    return this._gatewayServiceMesh;
  }
  public putGatewayServiceMesh(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh) {
    this._gatewayServiceMesh.internalValue = value;
  }
  public resetGatewayServiceMesh() {
    this._gatewayServiceMesh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayServiceMeshInput() {
    return this._gatewayServiceMesh.internalValue;
  }

  // service_networking - computed: false, optional: true, required: false
  private _serviceNetworking = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference(this, "service_networking");
  public get serviceNetworking() {
    return this._serviceNetworking;
  }
  public putServiceNetworking(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking) {
    this._serviceNetworking.internalValue = value;
  }
  public resetServiceNetworking() {
    this._serviceNetworking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworkingInput() {
    return this._serviceNetworking.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig {
  /**
  * cloud_run block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#cloud_run GoogleClouddeployDeliveryPipeline#cloud_run}
  */
  readonly cloudRun?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun;
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#kubernetes GoogleClouddeployDeliveryPipeline#kubernetes}
  */
  readonly kubernetes?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_run: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunToTerraform(struct!.cloudRun),
    kubernetes: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesToTerraform(struct!.kubernetes),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_run: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunToHclTerraform(struct!.cloudRun),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunList",
    },
    kubernetes: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudRun?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudRun = this._cloudRun?.internalValue;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudRun.internalValue = undefined;
      this._kubernetes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudRun.internalValue = value.cloudRun;
      this._kubernetes.internalValue = value.kubernetes;
    }
  }

  // cloud_run - computed: false, optional: true, required: false
  private _cloudRun = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference(this, "cloud_run");
  public get cloudRun() {
    return this._cloudRun;
  }
  public putCloudRun(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun) {
    this._cloudRun.internalValue = value;
  }
  public resetCloudRun() {
    this._cloudRun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunInput() {
    return this._cloudRun.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary {
  /**
  * canary_deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#canary_deployment GoogleClouddeployDeliveryPipeline#canary_deployment}
  */
  readonly canaryDeployment?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment;
  /**
  * custom_canary_deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#custom_canary_deployment GoogleClouddeployDeliveryPipeline#custom_canary_deployment}
  */
  readonly customCanaryDeployment?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment;
  /**
  * runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#runtime_config GoogleClouddeployDeliveryPipeline#runtime_config}
  */
  readonly runtimeConfig?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canary_deployment: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentToTerraform(struct!.canaryDeployment),
    custom_canary_deployment: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentToTerraform(struct!.customCanaryDeployment),
    runtime_config: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigToTerraform(struct!.runtimeConfig),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canary_deployment: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentToHclTerraform(struct!.canaryDeployment),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentList",
    },
    custom_canary_deployment: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentToHclTerraform(struct!.customCanaryDeployment),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentList",
    },
    runtime_config: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigToHclTerraform(struct!.runtimeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canaryDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryDeployment = this._canaryDeployment?.internalValue;
    }
    if (this._customCanaryDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCanaryDeployment = this._customCanaryDeployment?.internalValue;
    }
    if (this._runtimeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeConfig = this._runtimeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canaryDeployment.internalValue = undefined;
      this._customCanaryDeployment.internalValue = undefined;
      this._runtimeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canaryDeployment.internalValue = value.canaryDeployment;
      this._customCanaryDeployment.internalValue = value.customCanaryDeployment;
      this._runtimeConfig.internalValue = value.runtimeConfig;
    }
  }

  // canary_deployment - computed: false, optional: true, required: false
  private _canaryDeployment = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference(this, "canary_deployment");
  public get canaryDeployment() {
    return this._canaryDeployment;
  }
  public putCanaryDeployment(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment) {
    this._canaryDeployment.internalValue = value;
  }
  public resetCanaryDeployment() {
    this._canaryDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryDeploymentInput() {
    return this._canaryDeployment.internalValue;
  }

  // custom_canary_deployment - computed: false, optional: true, required: false
  private _customCanaryDeployment = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference(this, "custom_canary_deployment");
  public get customCanaryDeployment() {
    return this._customCanaryDeployment;
  }
  public putCustomCanaryDeployment(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment) {
    this._customCanaryDeployment.internalValue = value;
  }
  public resetCustomCanaryDeployment() {
    this._customCanaryDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCanaryDeploymentInput() {
    return this._customCanaryDeployment.internalValue;
  }

  // runtime_config - computed: false, optional: true, required: false
  private _runtimeConfig = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference(this, "runtime_config");
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#args GoogleClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#command GoogleClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#env GoogleClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#image GoogleClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTask {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#container GoogleClouddeployDeliveryPipeline#container}
  */
  readonly container?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainer;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerToTerraform(struct!.container),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks {
  /**
  * Optional. Frequency of the custom check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#frequency GoogleClouddeployDeliveryPipeline#frequency}
  */
  readonly frequency?: string;
  /**
  * Required. Unique identifier for the custom check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#id GoogleClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#task GoogleClouddeployDeliveryPipeline#task}
  */
  readonly task?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTask;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktn.stringToTerraform(struct!.frequency),
    id: cdktn.stringToTerraform(struct!.id),
    task: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskToTerraform(struct!.task),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktn.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskToHclTerraform(struct!.task),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._task?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequency = undefined;
      this._id = undefined;
      this._task.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequency = value.frequency;
      this._id = value.id;
      this._task.internalValue = value.task;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // task - computed: false, optional: true, required: false
  private _task = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTaskOutputReference(this, "task");
  public get task() {
    return this._task;
  }
  public putTask(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksTask) {
    this._task.internalValue = value;
  }
  public resetTask() {
    this._task.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksList extends cdktn.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks[] | cdktn.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks {
  /**
  * Required. The list of alert policy names to check. Format: `projects/{project}/alertPolicies/{alert_policy}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#alert_policies GoogleClouddeployDeliveryPipeline#alert_policies}
  */
  readonly alertPolicies: string[];
  /**
  * Required. Unique identifier for the alert policy check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#id GoogleClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional. Labels to filter the alert policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#labels GoogleClouddeployDeliveryPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alertPolicies),
    id: cdktn.stringToTerraform(struct!.id),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_policies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alertPolicies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPolicies = this._alertPolicies;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertPolicies = undefined;
      this._id = undefined;
      this._labels = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertPolicies = value.alertPolicies;
      this._id = value.id;
      this._labels = value.labels;
    }
  }

  // alert_policies - computed: false, optional: false, required: true
  private _alertPolicies?: string[]; 
  public get alertPolicies() {
    return this.getListAttribute('alert_policies');
  }
  public set alertPolicies(value: string[]) {
    this._alertPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPoliciesInput() {
    return this._alertPolicies;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksList extends cdktn.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloud {
  /**
  * alert_policy_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#alert_policy_checks GoogleClouddeployDeliveryPipeline#alert_policy_checks}
  */
  readonly alertPolicyChecks?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloud): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_policy_checks: cdktn.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksToTerraform, true)(struct!.alertPolicyChecks),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloud): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_policy_checks: {
      value: cdktn.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksToHclTerraform, true)(struct!.alertPolicyChecks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertPolicyChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPolicyChecks = this._alertPolicyChecks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertPolicyChecks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertPolicyChecks.internalValue = value.alertPolicyChecks;
    }
  }

  // alert_policy_checks - computed: false, optional: true, required: false
  private _alertPolicyChecks = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecksList(this, "alert_policy_checks", false);
  public get alertPolicyChecks() {
    return this._alertPolicyChecks;
  }
  public putAlertPolicyChecks(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudAlertPolicyChecks[] | cdktn.IResolvable) {
    this._alertPolicyChecks.internalValue = value;
  }
  public resetAlertPolicyChecks() {
    this._alertPolicyChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPolicyChecksInput() {
    return this._alertPolicyChecks.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysis {
  /**
  * Required. Duration of the analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#duration GoogleClouddeployDeliveryPipeline#duration}
  */
  readonly duration: string;
  /**
  * custom_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#custom_checks GoogleClouddeployDeliveryPipeline#custom_checks}
  */
  readonly customChecks?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks[] | cdktn.IResolvable;
  /**
  * google_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#google_cloud GoogleClouddeployDeliveryPipeline#google_cloud}
  */
  readonly googleCloud?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloud;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktn.stringToTerraform(struct!.duration),
    custom_checks: cdktn.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksToTerraform, true)(struct!.customChecks),
    google_cloud: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudToTerraform(struct!.googleCloud),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_checks: {
      value: cdktn.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksToHclTerraform, true)(struct!.customChecks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksList",
    },
    google_cloud: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudToHclTerraform(struct!.googleCloud),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._customChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customChecks = this._customChecks?.internalValue;
    }
    if (this._googleCloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloud = this._googleCloud?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._customChecks.internalValue = undefined;
      this._googleCloud.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._customChecks.internalValue = value.customChecks;
      this._googleCloud.internalValue = value.googleCloud;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // custom_checks - computed: false, optional: true, required: false
  private _customChecks = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecksList(this, "custom_checks", false);
  public get customChecks() {
    return this._customChecks;
  }
  public putCustomChecks(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisCustomChecks[] | cdktn.IResolvable) {
    this._customChecks.internalValue = value;
  }
  public resetCustomChecks() {
    this._customChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customChecksInput() {
    return this._customChecks.internalValue;
  }

  // google_cloud - computed: false, optional: true, required: false
  private _googleCloud = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloudOutputReference(this, "google_cloud");
  public get googleCloud() {
    return this._googleCloud;
  }
  public putGoogleCloud(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisGoogleCloud) {
    this._googleCloud.internalValue = value;
  }
  public resetGoogleCloud() {
    this._googleCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudInput() {
    return this._googleCloud.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#args GoogleClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#command GoogleClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#env GoogleClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#image GoogleClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#container GoogleClouddeployDeliveryPipeline#container}
  */
  readonly container?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainer;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerToTerraform(struct!.container),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksList extends cdktn.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks[] | cdktn.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#tasks GoogleClouddeployDeliveryPipeline#tasks}
  */
  readonly tasks?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks[] | cdktn.IResolvable;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    tasks: cdktn.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksToTerraform, true)(struct!.tasks),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tasks: {
      value: cdktn.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
      this._tasks.internalValue = value.tasks;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployTasks[] | cdktn.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#args GoogleClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#command GoogleClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#env GoogleClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#image GoogleClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#container GoogleClouddeployDeliveryPipeline#container}
  */
  readonly container?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainer;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerToTerraform(struct!.container),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksList extends cdktn.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks[] | cdktn.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy {
  /**
  * Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}
  */
  readonly actions?: string[];
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#tasks GoogleClouddeployDeliveryPipeline#tasks}
  */
  readonly tasks?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks[] | cdktn.IResolvable;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    tasks: cdktn.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksToTerraform, true)(struct!.tasks),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tasks: {
      value: cdktn.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
      this._tasks.internalValue = value.tasks;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployTasks[] | cdktn.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainer {
  /**
  * Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#args GoogleClouddeployDeliveryPipeline#args}
  */
  readonly args?: string[];
  /**
  * Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#command GoogleClouddeployDeliveryPipeline#command}
  */
  readonly command?: string[];
  /**
  * Optional. Environment variables that are set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#env GoogleClouddeployDeliveryPipeline#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Required. Image is the container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#image GoogleClouddeployDeliveryPipeline#image}
  */
  readonly image: string;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    env: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.env),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#container GoogleClouddeployDeliveryPipeline#container}
  */
  readonly container?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainer;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerToTerraform(struct!.container),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container.internalValue = value.container;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksList extends cdktn.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks[] | cdktn.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfig {
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#tasks GoogleClouddeployDeliveryPipeline#tasks}
  */
  readonly tasks?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks[] | cdktn.IResolvable;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tasks: cdktn.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksToTerraform, true)(struct!.tasks),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tasks: {
      value: cdktn.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksToHclTerraform, true)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tasks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tasks.internalValue = value.tasks;
    }
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigTasks[] | cdktn.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard {
  /**
  * Whether to verify a deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#verify GoogleClouddeployDeliveryPipeline#verify}
  */
  readonly verify?: boolean | cdktn.IResolvable;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#analysis GoogleClouddeployDeliveryPipeline#analysis}
  */
  readonly analysis?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysis;
  /**
  * postdeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#postdeploy GoogleClouddeployDeliveryPipeline#postdeploy}
  */
  readonly postdeploy?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy;
  /**
  * predeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#predeploy GoogleClouddeployDeliveryPipeline#predeploy}
  */
  readonly predeploy?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy;
  /**
  * verify_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#verify_config GoogleClouddeployDeliveryPipeline#verify_config}
  */
  readonly verifyConfig?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfig;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    verify: cdktn.booleanToTerraform(struct!.verify),
    analysis: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisToTerraform(struct!.analysis),
    postdeploy: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployToTerraform(struct!.postdeploy),
    predeploy: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployToTerraform(struct!.predeploy),
    verify_config: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigToTerraform(struct!.verifyConfig),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    verify: {
      value: cdktn.booleanToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    analysis: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisList",
    },
    postdeploy: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployToHclTerraform(struct!.postdeploy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployList",
    },
    predeploy: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployToHclTerraform(struct!.predeploy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployList",
    },
    verify_config: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigToHclTerraform(struct!.verifyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._postdeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postdeploy = this._postdeploy?.internalValue;
    }
    if (this._predeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predeploy = this._predeploy?.internalValue;
    }
    if (this._verifyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConfig = this._verifyConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._verify = undefined;
      this._analysis.internalValue = undefined;
      this._postdeploy.internalValue = undefined;
      this._predeploy.internalValue = undefined;
      this._verifyConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._verify = value.verify;
      this._analysis.internalValue = value.analysis;
      this._postdeploy.internalValue = value.postdeploy;
      this._predeploy.internalValue = value.predeploy;
      this._verifyConfig.internalValue = value.verifyConfig;
    }
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktn.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktn.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // postdeploy - computed: false, optional: true, required: false
  private _postdeploy = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference(this, "postdeploy");
  public get postdeploy() {
    return this._postdeploy;
  }
  public putPostdeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy) {
    this._postdeploy.internalValue = value;
  }
  public resetPostdeploy() {
    this._postdeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postdeployInput() {
    return this._postdeploy.internalValue;
  }

  // predeploy - computed: false, optional: true, required: false
  private _predeploy = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference(this, "predeploy");
  public get predeploy() {
    return this._predeploy;
  }
  public putPredeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy) {
    this._predeploy.internalValue = value;
  }
  public resetPredeploy() {
    this._predeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predeployInput() {
    return this._predeploy.internalValue;
  }

  // verify_config - computed: false, optional: true, required: false
  private _verifyConfig = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfigOutputReference(this, "verify_config");
  public get verifyConfig() {
    return this._verifyConfig;
  }
  public putVerifyConfig(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardVerifyConfig) {
    this._verifyConfig.internalValue = value;
  }
  public resetVerifyConfig() {
    this._verifyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConfigInput() {
    return this._verifyConfig.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy {
  /**
  * canary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#canary GoogleClouddeployDeliveryPipeline#canary}
  */
  readonly canary?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary;
  /**
  * standard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#standard GoogleClouddeployDeliveryPipeline#standard}
  */
  readonly standard?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canary: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryToTerraform(struct!.canary),
    standard: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardToTerraform(struct!.standard),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canary: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryToHclTerraform(struct!.canary),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryList",
    },
    standard: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canary = this._canary?.internalValue;
    }
    if (this._standard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canary.internalValue = undefined;
      this._standard.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canary.internalValue = value.canary;
      this._standard.internalValue = value.standard;
    }
  }

  // canary - computed: false, optional: true, required: false
  private _canary = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference(this, "canary");
  public get canary() {
    return this._canary;
  }
  public putCanary(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary) {
    this._canary.internalValue = value;
  }
  public resetCanary() {
    this._canary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryInput() {
    return this._canary.internalValue;
  }

  // standard - computed: false, optional: true, required: false
  private _standard = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard) {
    this._standard.internalValue = value;
  }
  public resetStandard() {
    this._standard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipelineStages {
  /**
  * Skaffold profiles to use when rendering the manifest for this stage's `Target`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#profiles GoogleClouddeployDeliveryPipeline#profiles}
  */
  readonly profiles?: string[];
  /**
  * The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#target_id GoogleClouddeployDeliveryPipeline#target_id}
  */
  readonly targetId?: string;
  /**
  * deploy_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#deploy_parameters GoogleClouddeployDeliveryPipeline#deploy_parameters}
  */
  readonly deployParameters?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[] | cdktn.IResolvable;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#strategy GoogleClouddeployDeliveryPipeline#strategy}
  */
  readonly strategy?: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy;
}

export function googleClouddeployDeliveryPipelineSerialPipelineStagesToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profiles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.profiles),
    target_id: cdktn.stringToTerraform(struct!.targetId),
    deploy_parameters: cdktn.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersToTerraform, true)(struct!.deployParameters),
    strategy: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyToTerraform(struct!.strategy),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineStagesToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineStages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profiles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.profiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_id: {
      value: cdktn.stringToHclTerraform(struct!.targetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deploy_parameters: {
      value: cdktn.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersToHclTerraform, true)(struct!.deployParameters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList",
    },
    strategy: {
      value: googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipelineStages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    if (this._targetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetId = this._targetId;
    }
    if (this._deployParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployParameters = this._deployParameters?.internalValue;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipelineStages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profiles = undefined;
      this._targetId = undefined;
      this._deployParameters.internalValue = undefined;
      this._strategy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profiles = value.profiles;
      this._targetId = value.targetId;
      this._deployParameters.internalValue = value.deployParameters;
      this._strategy.internalValue = value.strategy;
    }
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // deploy_parameters - computed: false, optional: true, required: false
  private _deployParameters = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList(this, "deploy_parameters", false);
  public get deployParameters() {
    return this._deployParameters;
  }
  public putDeployParameters(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[] | cdktn.IResolvable) {
    this._deployParameters.internalValue = value;
  }
  public resetDeployParameters() {
    this._deployParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployParametersInput() {
    return this._deployParameters.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineStagesList extends cdktn.ComplexList {
  public internalValue? : GoogleClouddeployDeliveryPipelineSerialPipelineStages[] | cdktn.IResolvable

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
  public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference {
    return new GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployDeliveryPipelineSerialPipeline {
  /**
  * stages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#stages GoogleClouddeployDeliveryPipeline#stages}
  */
  readonly stages?: GoogleClouddeployDeliveryPipelineSerialPipelineStages[] | cdktn.IResolvable;
}

export function googleClouddeployDeliveryPipelineSerialPipelineToTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference | GoogleClouddeployDeliveryPipelineSerialPipeline): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stages: cdktn.listMapper(googleClouddeployDeliveryPipelineSerialPipelineStagesToTerraform, true)(struct!.stages),
  }
}


export function googleClouddeployDeliveryPipelineSerialPipelineToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference | GoogleClouddeployDeliveryPipelineSerialPipeline): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stages: {
      value: cdktn.listMapperHcl(googleClouddeployDeliveryPipelineSerialPipelineStagesToHclTerraform, true)(struct!.stages),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineStagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineSerialPipeline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stages = this._stages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployDeliveryPipelineSerialPipeline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stages.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stages.internalValue = value.stages;
    }
  }

  // stages - computed: false, optional: true, required: false
  private _stages = new GoogleClouddeployDeliveryPipelineSerialPipelineStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
  public putStages(value: GoogleClouddeployDeliveryPipelineSerialPipelineStages[] | cdktn.IResolvable) {
    this._stages.internalValue = value;
  }
  public resetStages() {
    this._stages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages.internalValue;
  }
}
export interface GoogleClouddeployDeliveryPipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#create GoogleClouddeployDeliveryPipeline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#delete GoogleClouddeployDeliveryPipeline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#update GoogleClouddeployDeliveryPipeline#update}
  */
  readonly update?: string;
}

export function googleClouddeployDeliveryPipelineTimeoutsToTerraform(struct?: GoogleClouddeployDeliveryPipelineTimeouts | cdktn.IResolvable): any {
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


export function googleClouddeployDeliveryPipelineTimeoutsToHclTerraform(struct?: GoogleClouddeployDeliveryPipelineTimeouts | cdktn.IResolvable): any {
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

export class GoogleClouddeployDeliveryPipelineTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleClouddeployDeliveryPipelineTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleClouddeployDeliveryPipelineTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline google_clouddeploy_delivery_pipeline}
*/
export class GoogleClouddeployDeliveryPipeline extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_clouddeploy_delivery_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleClouddeployDeliveryPipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleClouddeployDeliveryPipeline to import
  * @param importFromId The id of the existing GoogleClouddeployDeliveryPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleClouddeployDeliveryPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_clouddeploy_delivery_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_clouddeploy_delivery_pipeline google_clouddeploy_delivery_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleClouddeployDeliveryPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleClouddeployDeliveryPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_clouddeploy_delivery_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '7.35.0',
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
    this._annotations = config.annotations;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._suspended = config.suspended;
    this._serialPipeline.internalValue = config.serialPipeline;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new GoogleClouddeployDeliveryPipelineConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktn.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // suspended - computed: false, optional: true, required: false
  private _suspended?: boolean | cdktn.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktn.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // serial_pipeline - computed: false, optional: true, required: false
  private _serialPipeline = new GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference(this, "serial_pipeline");
  public get serialPipeline() {
    return this._serialPipeline;
  }
  public putSerialPipeline(value: GoogleClouddeployDeliveryPipelineSerialPipeline) {
    this._serialPipeline.internalValue = value;
  }
  public resetSerialPipeline() {
    this._serialPipeline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialPipelineInput() {
    return this._serialPipeline.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleClouddeployDeliveryPipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleClouddeployDeliveryPipelineTimeouts) {
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
      annotations: cdktn.hashMapper(cdktn.stringToTerraform)(this._annotations),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      suspended: cdktn.booleanToTerraform(this._suspended),
      serial_pipeline: googleClouddeployDeliveryPipelineSerialPipelineToTerraform(this._serialPipeline.internalValue),
      timeouts: googleClouddeployDeliveryPipelineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      suspended: {
        value: cdktn.booleanToHclTerraform(this._suspended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      serial_pipeline: {
        value: googleClouddeployDeliveryPipelineSerialPipelineToHclTerraform(this._serialPipeline.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleClouddeployDeliveryPipelineSerialPipelineList",
      },
      timeouts: {
        value: googleClouddeployDeliveryPipelineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleClouddeployDeliveryPipelineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
