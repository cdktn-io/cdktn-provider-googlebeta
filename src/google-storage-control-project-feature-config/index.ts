/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleStorageControlProjectFeatureConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#deletion_policy GoogleStorageControlProjectFeatureConfig#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A description of the feature configuration. The description can be up to 256 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#description GoogleStorageControlProjectFeatureConfig#description}
  */
  readonly description?: string;
  /**
  * The ID of the feature configuration, which becomes the final component of its resource name.
  * The ID must be 1 to 63 characters long, start with a lowercase letter, and contain only
  * lowercase letters, digits, and dashes. The last character can't be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#feature_config_id GoogleStorageControlProjectFeatureConfig#feature_config_id}
  */
  readonly featureConfigId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#id GoogleStorageControlProjectFeatureConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#project GoogleStorageControlProjectFeatureConfig#project}
  */
  readonly project?: string;
  /**
  * auto_annotate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#auto_annotate_config GoogleStorageControlProjectFeatureConfig#auto_annotate_config}
  */
  readonly autoAnnotateConfig: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#filter GoogleStorageControlProjectFeatureConfig#filter}
  */
  readonly filter?: GoogleStorageControlProjectFeatureConfigFilter;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#timeouts GoogleStorageControlProjectFeatureConfig#timeouts}
  */
  readonly timeouts?: GoogleStorageControlProjectFeatureConfigTimeouts;
}
export interface GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels {
  /**
  * The name of the model. Supported values include 'face-detector',
  * 'object-detector', 'label-detector', and 'content-safety'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#name GoogleStorageControlProjectFeatureConfig#name}
  */
  readonly name: string;
}

export function googleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsToTerraform(struct?: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function googleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsToHclTerraform(struct?: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList extends cdktn.ComplexList {
  public internalValue? : GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels[] | cdktn.IResolvable

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
  public get(index: number): GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference {
    return new GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig {
  /**
  * The geographic location (case-sensitive) where data is processed. Currently, only
  * multi-region locations such as 'us', 'eu', or 'asia' are supported.
  * 
  * To avoid duplicate billing, configure exactly one processing location for each bucket
  * and model combination. If you configure multiple processing locations for the same
  * bucket and model across different feature configurations, a separate annotation run is
  * triggered in each location, and you're billed for each resulting annotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#processing_location GoogleStorageControlProjectFeatureConfig#processing_location}
  */
  readonly processingLocation: string;
  /**
  * models block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#models GoogleStorageControlProjectFeatureConfig#models}
  */
  readonly models: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels[] | cdktn.IResolvable;
}

export function googleStorageControlProjectFeatureConfigAutoAnnotateConfigToTerraform(struct?: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference | GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    processing_location: cdktn.stringToTerraform(struct!.processingLocation),
    models: cdktn.listMapper(googleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsToTerraform, true)(struct!.models),
  }
}


export function googleStorageControlProjectFeatureConfigAutoAnnotateConfigToHclTerraform(struct?: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference | GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    processing_location: {
      value: cdktn.stringToHclTerraform(struct!.processingLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    models: {
      value: cdktn.listMapperHcl(googleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsToHclTerraform, true)(struct!.models),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processingLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingLocation = this._processingLocation;
    }
    if (this._models?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.models = this._models?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._processingLocation = undefined;
      this._models.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._processingLocation = value.processingLocation;
      this._models.internalValue = value.models;
    }
  }

  // processing_location - computed: false, optional: false, required: true
  private _processingLocation?: string; 
  public get processingLocation() {
    return this.getStringAttribute('processing_location');
  }
  public set processingLocation(value: string) {
    this._processingLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingLocationInput() {
    return this._processingLocation;
  }

  // models - computed: false, optional: false, required: true
  private _models = new GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList(this, "models", false);
  public get models() {
    return this._models;
  }
  public putModels(value: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels[] | cdktn.IResolvable) {
    this._models.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelsInput() {
    return this._models.internalValue;
  }
}
export interface GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets {
  /**
  * The names of the buckets to include. For Auto Annotate, regex wildcards aren't
  * supported, so specify exact bucket names (for example, 'my-bucket'). Each bucket
  * must already exist in the feature configuration's project. Up to 1,000 buckets can
  * be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#bucket_id_regexes GoogleStorageControlProjectFeatureConfig#bucket_id_regexes}
  */
  readonly bucketIdRegexes: string[];
}

export function googleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsToTerraform(struct?: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference | GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_id_regexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.bucketIdRegexes),
  }
}


export function googleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsToHclTerraform(struct?: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference | GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_id_regexes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.bucketIdRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketIdRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketIdRegexes = this._bucketIdRegexes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketIdRegexes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketIdRegexes = value.bucketIdRegexes;
    }
  }

  // bucket_id_regexes - computed: false, optional: false, required: true
  private _bucketIdRegexes?: string[]; 
  public get bucketIdRegexes() {
    return this.getListAttribute('bucket_id_regexes');
  }
  public set bucketIdRegexes(value: string[]) {
    this._bucketIdRegexes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdRegexesInput() {
    return this._bucketIdRegexes;
  }
}
export interface GoogleStorageControlProjectFeatureConfigFilter {
  /**
  * included_cloud_storage_buckets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#included_cloud_storage_buckets GoogleStorageControlProjectFeatureConfig#included_cloud_storage_buckets}
  */
  readonly includedCloudStorageBuckets: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets;
}

export function googleStorageControlProjectFeatureConfigFilterToTerraform(struct?: GoogleStorageControlProjectFeatureConfigFilterOutputReference | GoogleStorageControlProjectFeatureConfigFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    included_cloud_storage_buckets: googleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsToTerraform(struct!.includedCloudStorageBuckets),
  }
}


export function googleStorageControlProjectFeatureConfigFilterToHclTerraform(struct?: GoogleStorageControlProjectFeatureConfigFilterOutputReference | GoogleStorageControlProjectFeatureConfigFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    included_cloud_storage_buckets: {
      value: googleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsToHclTerraform(struct!.includedCloudStorageBuckets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageControlProjectFeatureConfigFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageControlProjectFeatureConfigFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedCloudStorageBuckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCloudStorageBuckets = this._includedCloudStorageBuckets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageControlProjectFeatureConfigFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includedCloudStorageBuckets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includedCloudStorageBuckets.internalValue = value.includedCloudStorageBuckets;
    }
  }

  // included_cloud_storage_buckets - computed: false, optional: false, required: true
  private _includedCloudStorageBuckets = new GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference(this, "included_cloud_storage_buckets");
  public get includedCloudStorageBuckets() {
    return this._includedCloudStorageBuckets;
  }
  public putIncludedCloudStorageBuckets(value: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets) {
    this._includedCloudStorageBuckets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCloudStorageBucketsInput() {
    return this._includedCloudStorageBuckets.internalValue;
  }
}
export interface GoogleStorageControlProjectFeatureConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#create GoogleStorageControlProjectFeatureConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#delete GoogleStorageControlProjectFeatureConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#update GoogleStorageControlProjectFeatureConfig#update}
  */
  readonly update?: string;
}

export function googleStorageControlProjectFeatureConfigTimeoutsToTerraform(struct?: GoogleStorageControlProjectFeatureConfigTimeouts | cdktn.IResolvable): any {
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


export function googleStorageControlProjectFeatureConfigTimeoutsToHclTerraform(struct?: GoogleStorageControlProjectFeatureConfigTimeouts | cdktn.IResolvable): any {
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

export class GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleStorageControlProjectFeatureConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleStorageControlProjectFeatureConfigTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config google_storage_control_project_feature_config}
*/
export class GoogleStorageControlProjectFeatureConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_control_project_feature_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleStorageControlProjectFeatureConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleStorageControlProjectFeatureConfig to import
  * @param importFromId The id of the existing GoogleStorageControlProjectFeatureConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleStorageControlProjectFeatureConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_control_project_feature_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config google_storage_control_project_feature_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleStorageControlProjectFeatureConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleStorageControlProjectFeatureConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_control_project_feature_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '8.9.0',
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
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._featureConfigId = config.featureConfigId;
    this._id = config.id;
    this._project = config.project;
    this._autoAnnotateConfig.internalValue = config.autoAnnotateConfig;
    this._filter.internalValue = config.filter;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // feature_config_id - computed: false, optional: false, required: true
  private _featureConfigId?: string; 
  public get featureConfigId() {
    return this.getStringAttribute('feature_config_id');
  }
  public set featureConfigId(value: string) {
    this._featureConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureConfigIdInput() {
    return this._featureConfigId;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // auto_annotate_config - computed: false, optional: false, required: true
  private _autoAnnotateConfig = new GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference(this, "auto_annotate_config");
  public get autoAnnotateConfig() {
    return this._autoAnnotateConfig;
  }
  public putAutoAnnotateConfig(value: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig) {
    this._autoAnnotateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAnnotateConfigInput() {
    return this._autoAnnotateConfig.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new GoogleStorageControlProjectFeatureConfigFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: GoogleStorageControlProjectFeatureConfigFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleStorageControlProjectFeatureConfigTimeouts) {
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
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      feature_config_id: cdktn.stringToTerraform(this._featureConfigId),
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
      auto_annotate_config: googleStorageControlProjectFeatureConfigAutoAnnotateConfigToTerraform(this._autoAnnotateConfig.internalValue),
      filter: googleStorageControlProjectFeatureConfigFilterToTerraform(this._filter.internalValue),
      timeouts: googleStorageControlProjectFeatureConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      feature_config_id: {
        value: cdktn.stringToHclTerraform(this._featureConfigId),
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
      auto_annotate_config: {
        value: googleStorageControlProjectFeatureConfigAutoAnnotateConfigToHclTerraform(this._autoAnnotateConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList",
      },
      filter: {
        value: googleStorageControlProjectFeatureConfigFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageControlProjectFeatureConfigFilterList",
      },
      timeouts: {
        value: googleStorageControlProjectFeatureConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleStorageControlProjectFeatureConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
