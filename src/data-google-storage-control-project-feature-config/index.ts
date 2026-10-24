/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/data-sources/google_storage_control_project_feature_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleStorageControlProjectFeatureConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the feature configuration, which becomes the final component of its resource name.
  * The ID must be 1 to 63 characters long, start with a lowercase letter, and contain only
  * lowercase letters, digits, and dashes. The last character can't be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/data-sources/google_storage_control_project_feature_config#feature_config_id DataGoogleStorageControlProjectFeatureConfig#feature_config_id}
  */
  readonly featureConfigId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/data-sources/google_storage_control_project_feature_config#id DataGoogleStorageControlProjectFeatureConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/data-sources/google_storage_control_project_feature_config#project DataGoogleStorageControlProjectFeatureConfig#project}
  */
  readonly project?: string;
}
export interface DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels {
}

export function dataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsToTerraform(struct?: DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsToHclTerraform(struct?: DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference {
    return new DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig {
}

export function dataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigToTerraform(struct?: DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigToHclTerraform(struct?: DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // models - computed: true, optional: false, required: false
  private _models = new DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList(this, "models", false);
  public get models() {
    return this._models;
  }

  // processing_location - computed: true, optional: false, required: false
  public get processingLocation() {
    return this.getStringAttribute('processing_location');
  }
}

export class DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference {
    return new DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets {
}

export function dataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsToTerraform(struct?: DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_id_regexes - computed: true, optional: false, required: false
  public get bucketIdRegexes() {
    return this.getListAttribute('bucket_id_regexes');
  }
}

export class DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference {
    return new DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectFeatureConfigFilter {
}

export function dataGoogleStorageControlProjectFeatureConfigFilterToTerraform(struct?: DataGoogleStorageControlProjectFeatureConfigFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectFeatureConfigFilterToHclTerraform(struct?: DataGoogleStorageControlProjectFeatureConfigFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectFeatureConfigFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectFeatureConfigFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectFeatureConfigFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // included_cloud_storage_buckets - computed: true, optional: false, required: false
  private _includedCloudStorageBuckets = new DataGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsList(this, "included_cloud_storage_buckets", false);
  public get includedCloudStorageBuckets() {
    return this._includedCloudStorageBuckets;
  }
}

export class DataGoogleStorageControlProjectFeatureConfigFilterList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectFeatureConfigFilterOutputReference {
    return new DataGoogleStorageControlProjectFeatureConfigFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/data-sources/google_storage_control_project_feature_config google_storage_control_project_feature_config}
*/
export class DataGoogleStorageControlProjectFeatureConfig extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_control_project_feature_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleStorageControlProjectFeatureConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleStorageControlProjectFeatureConfig to import
  * @param importFromId The id of the existing DataGoogleStorageControlProjectFeatureConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/data-sources/google_storage_control_project_feature_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleStorageControlProjectFeatureConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_control_project_feature_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/data-sources/google_storage_control_project_feature_config google_storage_control_project_feature_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleStorageControlProjectFeatureConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleStorageControlProjectFeatureConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_control_project_feature_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '8.8.1',
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
    this._featureConfigId = config.featureConfigId;
    this._id = config.id;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_annotate_config - computed: true, optional: false, required: false
  private _autoAnnotateConfig = new DataGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigList(this, "auto_annotate_config", false);
  public get autoAnnotateConfig() {
    return this._autoAnnotateConfig;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: true, optional: false, required: false
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // filter - computed: true, optional: false, required: false
  private _filter = new DataGoogleStorageControlProjectFeatureConfigFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
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

  // project - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_config_id: cdktn.stringToTerraform(this._featureConfigId),
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
