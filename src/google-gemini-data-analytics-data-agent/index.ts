/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleGeminiDataAnalyticsDataAgentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Required. The ID to use for the DataAgent, which becomes the final component
  * of the resource name. The ID must start with a lowercase letter and may
  * contain lowercase letters, digits, underscores, and hyphens, up to 63
  * characters in total.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#data_agent_id GoogleGeminiDataAnalyticsDataAgent#data_agent_id}
  */
  readonly dataAgentId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#deletion_policy GoogleGeminiDataAnalyticsDataAgent#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Optional. Description of the agent. Must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. User friendly display name. Must be between 1 and 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#display_name GoogleGeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#id GoogleGeminiDataAnalyticsDataAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Customer managed encryption key (CMEK) to use for encrypting the
  * DataAgent resources. Cloud KMS CryptoKeys must reside in the same location
  * as the DataAgent. The expected format is
  * projects/* /locations/* /keyRings/* /cryptoKeys/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#kms_key GoogleGeminiDataAnalyticsDataAgent#kms_key}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKey?: string;
  /**
  * Optional. Labels to help users filter related agents.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#labels GoogleGeminiDataAnalyticsDataAgent#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the DataAgent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#location GoogleGeminiDataAnalyticsDataAgent#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#project GoogleGeminiDataAnalyticsDataAgent#project}
  */
  readonly project?: string;
  /**
  * data_analytics_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#data_analytics_agent GoogleGeminiDataAnalyticsDataAgent#data_analytics_agent}
  */
  readonly dataAnalyticsAgent?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgent;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#timeouts GoogleGeminiDataAnalyticsDataAgent#timeouts}
  */
  readonly timeouts?: GoogleGeminiDataAnalyticsDataAgentTimeouts;
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences {
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_id - computed: true, optional: false, required: false
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // table_id - computed: true, optional: false, required: false
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList extends cdktn.ComplexList {

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq {
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // table_references - computed: true, optional: false, required: false
  private _tableReferences = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList(this, "table_references", false);
  public get tableReferences() {
    return this._tableReferences;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList extends cdktn.ComplexList {

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences {
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bq - computed: true, optional: false, required: false
  private _bq = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList(this, "bq", false);
  public get bq() {
    return this._bq;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList extends cdktn.ComplexList {

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext {
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datasource_references - computed: true, optional: false, required: false
  private _datasourceReferences = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList(this, "datasource_references", false);
  public get datasourceReferences() {
    return this._datasourceReferences;
  }

  // system_instruction - computed: true, optional: false, required: false
  public get systemInstruction() {
    return this.getStringAttribute('system_instruction');
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList extends cdktn.ComplexList {

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences {
  /**
  * Required. The dataset that the property graph belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#dataset_id GoogleGeminiDataAnalyticsDataAgent#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Required. The project that the property graph belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#project_id GoogleGeminiDataAnalyticsDataAgent#project_id}
  */
  readonly projectId: string;
  /**
  * Required. The property graph ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#property_graph_id GoogleGeminiDataAnalyticsDataAgent#property_graph_id}
  */
  readonly propertyGraphId: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    property_graph_id: cdktn.stringToTerraform(struct!.propertyGraphId),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_graph_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyGraphId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._propertyGraphId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyGraphId = this._propertyGraphId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._propertyGraphId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._propertyGraphId = value.propertyGraphId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
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

  // property_graph_id - computed: false, optional: false, required: true
  private _propertyGraphId?: string; 
  public get propertyGraphId() {
    return this.getStringAttribute('property_graph_id');
  }
  public set propertyGraphId(value: string) {
    this._propertyGraphId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyGraphIdInput() {
    return this._propertyGraphId;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields {
  /**
  * Optional. Field category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#category GoogleGeminiDataAnalyticsDataAgent#category}
  */
  readonly category?: string;
  /**
  * Optional. A brief description of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. The mode of the field (e.g., NULLABLE, REPEATED).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#mode GoogleGeminiDataAnalyticsDataAgent#mode}
  */
  readonly mode?: string;
  /**
  * Optional. The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#name GoogleGeminiDataAnalyticsDataAgent#name}
  */
  readonly name?: string;
  /**
  * Optional. Recursive property for nested schema structures, encoded as a JSON string representing a list of Field objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#subfields GoogleGeminiDataAnalyticsDataAgent#subfields}
  */
  readonly subfields?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#synonyms GoogleGeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the field, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#tags GoogleGeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * Optional. The type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#type GoogleGeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. Value format of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#value_format GoogleGeminiDataAnalyticsDataAgent#value_format}
  */
  readonly valueFormat?: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    description: cdktn.stringToTerraform(struct!.description),
    mode: cdktn.stringToTerraform(struct!.mode),
    name: cdktn.stringToTerraform(struct!.name),
    subfields: cdktn.stringToTerraform(struct!.subfields),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    type: cdktn.stringToTerraform(struct!.type),
    value_format: cdktn.stringToTerraform(struct!.valueFormat),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subfields: {
      value: cdktn.stringToHclTerraform(struct!.subfields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_format: {
      value: cdktn.stringToHclTerraform(struct!.valueFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subfields !== undefined) {
      hasAnyValues = true;
      internalValueResult.subfields = this._subfields;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valueFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFormat = this._valueFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._description = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._subfields = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._valueFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._description = value.description;
      this._mode = value.mode;
      this._name = value.name;
      this._subfields = value.subfields;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._type = value.type;
      this._valueFormat = value.valueFormat;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // subfields - computed: false, optional: true, required: false
  private _subfields?: string; 
  public get subfields() {
    return this.getStringAttribute('subfields');
  }
  public set subfields(value: string) {
    this._subfields = value;
  }
  public resetSubfields() {
    this._subfields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subfieldsInput() {
    return this._subfields;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // value_format - computed: false, optional: true, required: false
  private _valueFormat?: string; 
  public get valueFormat() {
    return this.getStringAttribute('value_format');
  }
  public set valueFormat(value: string) {
    this._valueFormat = value;
  }
  public resetValueFormat() {
    this._valueFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFormatInput() {
    return this._valueFormat;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters {
  /**
  * Optional. The field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#field GoogleGeminiDataAnalyticsDataAgent#field}
  */
  readonly field?: string;
  /**
  * Optional. The type of filter present on a datasource, such as ALWAYS_FILTER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#type GoogleGeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. The default value used for this filter if the filter is not overridden in a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#value GoogleGeminiDataAnalyticsDataAgent#value}
  */
  readonly value?: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchema {
  /**
  * Optional. A textual description of the table's content and purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. Table display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#display_name GoogleGeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#synonyms GoogleGeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the table, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#tags GoogleGeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#fields GoogleGeminiDataAnalyticsDataAgent#fields}
  */
  readonly fields?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields[] | cdktn.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#filters GoogleGeminiDataAnalyticsDataAgent#filters}
  */
  readonly filters?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    fields: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsToTerraform, true)(struct!.fields),
    filters: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersToTerraform, true)(struct!.filters),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fields: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsList",
    },
    filters: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._fields.internalValue = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._fields.internalValue = value.fields;
      this._filters.internalValue = value.filters;
    }
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

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences {
  /**
  * Required. The dataset that the table belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#dataset_id GoogleGeminiDataAnalyticsDataAgent#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Required. The project that the table belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#project_id GoogleGeminiDataAnalyticsDataAgent#project_id}
  */
  readonly projectId: string;
  /**
  * Required. The table ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#table_id GoogleGeminiDataAnalyticsDataAgent#table_id}
  */
  readonly tableId: string;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#schema GoogleGeminiDataAnalyticsDataAgent#schema}
  */
  readonly schema?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchema;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    table_id: cdktn.stringToTerraform(struct!.tableId),
    schema: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaToTerraform(struct!.schema),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktn.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
      this._schema.internalValue = value.schema;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
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

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq {
  /**
  * property_graph_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#property_graph_references GoogleGeminiDataAnalyticsDataAgent#property_graph_references}
  */
  readonly propertyGraphReferences?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences[] | cdktn.IResolvable;
  /**
  * table_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#table_references GoogleGeminiDataAnalyticsDataAgent#table_references}
  */
  readonly tableReferences?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    property_graph_references: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesToTerraform, true)(struct!.propertyGraphReferences),
    table_references: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesToTerraform, true)(struct!.tableReferences),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    property_graph_references: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesToHclTerraform, true)(struct!.propertyGraphReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesList",
    },
    table_references: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesToHclTerraform, true)(struct!.tableReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertyGraphReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyGraphReferences = this._propertyGraphReferences?.internalValue;
    }
    if (this._tableReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableReferences = this._tableReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._propertyGraphReferences.internalValue = undefined;
      this._tableReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._propertyGraphReferences.internalValue = value.propertyGraphReferences;
      this._tableReferences.internalValue = value.tableReferences;
    }
  }

  // property_graph_references - computed: false, optional: true, required: false
  private _propertyGraphReferences = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesList(this, "property_graph_references", false);
  public get propertyGraphReferences() {
    return this._propertyGraphReferences;
  }
  public putPropertyGraphReferences(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences[] | cdktn.IResolvable) {
    this._propertyGraphReferences.internalValue = value;
  }
  public resetPropertyGraphReferences() {
    this._propertyGraphReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyGraphReferencesInput() {
    return this._propertyGraphReferences.internalValue;
  }

  // table_references - computed: false, optional: true, required: false
  private _tableReferences = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList(this, "table_references", false);
  public get tableReferences() {
    return this._tableReferences;
  }
  public putTableReferences(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[] | cdktn.IResolvable) {
    this._tableReferences.internalValue = value;
  }
  public resetTableReferences() {
    this._tableReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableReferencesInput() {
    return this._tableReferences.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo {
  /**
  * Optional. The Looker instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#looker_instance_id GoogleGeminiDataAnalyticsDataAgent#looker_instance_id}
  */
  readonly lookerInstanceId?: string;
  /**
  * Optional. The service directory name of the Looker instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#service_directory_name GoogleGeminiDataAnalyticsDataAgent#service_directory_name}
  */
  readonly serviceDirectoryName?: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    looker_instance_id: cdktn.stringToTerraform(struct!.lookerInstanceId),
    service_directory_name: cdktn.stringToTerraform(struct!.serviceDirectoryName),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    looker_instance_id: {
      value: cdktn.stringToHclTerraform(struct!.lookerInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_directory_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceDirectoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lookerInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerInstanceId = this._lookerInstanceId;
    }
    if (this._serviceDirectoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryName = this._serviceDirectoryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lookerInstanceId = undefined;
      this._serviceDirectoryName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lookerInstanceId = value.lookerInstanceId;
      this._serviceDirectoryName = value.serviceDirectoryName;
    }
  }

  // looker_instance_id - computed: false, optional: true, required: false
  private _lookerInstanceId?: string; 
  public get lookerInstanceId() {
    return this.getStringAttribute('looker_instance_id');
  }
  public set lookerInstanceId(value: string) {
    this._lookerInstanceId = value;
  }
  public resetLookerInstanceId() {
    this._lookerInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerInstanceIdInput() {
    return this._lookerInstanceId;
  }

  // service_directory_name - computed: false, optional: true, required: false
  private _serviceDirectoryName?: string; 
  public get serviceDirectoryName() {
    return this.getStringAttribute('service_directory_name');
  }
  public set serviceDirectoryName(value: string) {
    this._serviceDirectoryName = value;
  }
  public resetServiceDirectoryName() {
    this._serviceDirectoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryNameInput() {
    return this._serviceDirectoryName;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields {
  /**
  * Optional. Field category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#category GoogleGeminiDataAnalyticsDataAgent#category}
  */
  readonly category?: string;
  /**
  * Optional. A brief description of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. The mode of the field (e.g., NULLABLE, REPEATED).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#mode GoogleGeminiDataAnalyticsDataAgent#mode}
  */
  readonly mode?: string;
  /**
  * Optional. The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#name GoogleGeminiDataAnalyticsDataAgent#name}
  */
  readonly name?: string;
  /**
  * Optional. Recursive property for nested schema structures, encoded as a JSON string representing a list of Field objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#subfields GoogleGeminiDataAnalyticsDataAgent#subfields}
  */
  readonly subfields?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#synonyms GoogleGeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the field, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#tags GoogleGeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * Optional. The type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#type GoogleGeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. Value format of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#value_format GoogleGeminiDataAnalyticsDataAgent#value_format}
  */
  readonly valueFormat?: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    description: cdktn.stringToTerraform(struct!.description),
    mode: cdktn.stringToTerraform(struct!.mode),
    name: cdktn.stringToTerraform(struct!.name),
    subfields: cdktn.stringToTerraform(struct!.subfields),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    type: cdktn.stringToTerraform(struct!.type),
    value_format: cdktn.stringToTerraform(struct!.valueFormat),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subfields: {
      value: cdktn.stringToHclTerraform(struct!.subfields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_format: {
      value: cdktn.stringToHclTerraform(struct!.valueFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subfields !== undefined) {
      hasAnyValues = true;
      internalValueResult.subfields = this._subfields;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valueFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFormat = this._valueFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._description = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._subfields = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._valueFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._description = value.description;
      this._mode = value.mode;
      this._name = value.name;
      this._subfields = value.subfields;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._type = value.type;
      this._valueFormat = value.valueFormat;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // subfields - computed: false, optional: true, required: false
  private _subfields?: string; 
  public get subfields() {
    return this.getStringAttribute('subfields');
  }
  public set subfields(value: string) {
    this._subfields = value;
  }
  public resetSubfields() {
    this._subfields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subfieldsInput() {
    return this._subfields;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // value_format - computed: false, optional: true, required: false
  private _valueFormat?: string; 
  public get valueFormat() {
    return this.getStringAttribute('value_format');
  }
  public set valueFormat(value: string) {
    this._valueFormat = value;
  }
  public resetValueFormat() {
    this._valueFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFormatInput() {
    return this._valueFormat;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters {
  /**
  * Optional. The field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#field GoogleGeminiDataAnalyticsDataAgent#field}
  */
  readonly field?: string;
  /**
  * Optional. The type of filter present on a datasource, such as ALWAYS_FILTER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#type GoogleGeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. The default value used for this filter if the filter is not overridden in a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#value GoogleGeminiDataAnalyticsDataAgent#value}
  */
  readonly value?: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchema {
  /**
  * Optional. A textual description of the explore's content and purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. Explore display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#display_name GoogleGeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to the explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#synonyms GoogleGeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the explore, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#tags GoogleGeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#fields GoogleGeminiDataAnalyticsDataAgent#fields}
  */
  readonly fields?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields[] | cdktn.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#filters GoogleGeminiDataAnalyticsDataAgent#filters}
  */
  readonly filters?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    fields: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToTerraform, true)(struct!.fields),
    filters: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToTerraform, true)(struct!.filters),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fields: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsList",
    },
    filters: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._fields.internalValue = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._fields.internalValue = value.fields;
      this._filters.internalValue = value.filters;
    }
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

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences {
  /**
  * Required. Name of the LookML Explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#explore GoogleGeminiDataAnalyticsDataAgent#explore}
  */
  readonly explore: string;
  /**
  * Optional. The base URL of the Looker instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#looker_instance_uri GoogleGeminiDataAnalyticsDataAgent#looker_instance_uri}
  */
  readonly lookerInstanceUri?: string;
  /**
  * Required. Name of the LookML model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#lookml_model GoogleGeminiDataAnalyticsDataAgent#lookml_model}
  */
  readonly lookmlModel: string;
  /**
  * private_looker_instance_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#private_looker_instance_info GoogleGeminiDataAnalyticsDataAgent#private_looker_instance_info}
  */
  readonly privateLookerInstanceInfo?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#schema GoogleGeminiDataAnalyticsDataAgent#schema}
  */
  readonly schema?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchema;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    explore: cdktn.stringToTerraform(struct!.explore),
    looker_instance_uri: cdktn.stringToTerraform(struct!.lookerInstanceUri),
    lookml_model: cdktn.stringToTerraform(struct!.lookmlModel),
    private_looker_instance_info: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToTerraform(struct!.privateLookerInstanceInfo),
    schema: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaToTerraform(struct!.schema),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    explore: {
      value: cdktn.stringToHclTerraform(struct!.explore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    looker_instance_uri: {
      value: cdktn.stringToHclTerraform(struct!.lookerInstanceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookml_model: {
      value: cdktn.stringToHclTerraform(struct!.lookmlModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_looker_instance_info: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToHclTerraform(struct!.privateLookerInstanceInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoList",
    },
    schema: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explore !== undefined) {
      hasAnyValues = true;
      internalValueResult.explore = this._explore;
    }
    if (this._lookerInstanceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerInstanceUri = this._lookerInstanceUri;
    }
    if (this._lookmlModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookmlModel = this._lookmlModel;
    }
    if (this._privateLookerInstanceInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLookerInstanceInfo = this._privateLookerInstanceInfo?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explore = undefined;
      this._lookerInstanceUri = undefined;
      this._lookmlModel = undefined;
      this._privateLookerInstanceInfo.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explore = value.explore;
      this._lookerInstanceUri = value.lookerInstanceUri;
      this._lookmlModel = value.lookmlModel;
      this._privateLookerInstanceInfo.internalValue = value.privateLookerInstanceInfo;
      this._schema.internalValue = value.schema;
    }
  }

  // explore - computed: false, optional: false, required: true
  private _explore?: string; 
  public get explore() {
    return this.getStringAttribute('explore');
  }
  public set explore(value: string) {
    this._explore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exploreInput() {
    return this._explore;
  }

  // looker_instance_uri - computed: false, optional: true, required: false
  private _lookerInstanceUri?: string; 
  public get lookerInstanceUri() {
    return this.getStringAttribute('looker_instance_uri');
  }
  public set lookerInstanceUri(value: string) {
    this._lookerInstanceUri = value;
  }
  public resetLookerInstanceUri() {
    this._lookerInstanceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerInstanceUriInput() {
    return this._lookerInstanceUri;
  }

  // lookml_model - computed: false, optional: false, required: true
  private _lookmlModel?: string; 
  public get lookmlModel() {
    return this.getStringAttribute('lookml_model');
  }
  public set lookmlModel(value: string) {
    this._lookmlModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookmlModelInput() {
    return this._lookmlModel;
  }

  // private_looker_instance_info - computed: false, optional: true, required: false
  private _privateLookerInstanceInfo = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference(this, "private_looker_instance_info");
  public get privateLookerInstanceInfo() {
    return this._privateLookerInstanceInfo;
  }
  public putPrivateLookerInstanceInfo(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo) {
    this._privateLookerInstanceInfo.internalValue = value;
  }
  public resetPrivateLookerInstanceInfo() {
    this._privateLookerInstanceInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLookerInstanceInfoInput() {
    return this._privateLookerInstanceInfo.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLooker {
  /**
  * explore_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#explore_references GoogleGeminiDataAnalyticsDataAgent#explore_references}
  */
  readonly exploreReferences: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLooker): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    explore_references: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesToTerraform, true)(struct!.exploreReferences),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLooker): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    explore_references: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesToHclTerraform, true)(struct!.exploreReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLooker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exploreReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exploreReferences = this._exploreReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLooker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exploreReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exploreReferences.internalValue = value.exploreReferences;
    }
  }

  // explore_references - computed: false, optional: false, required: true
  private _exploreReferences = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesList(this, "explore_references", false);
  public get exploreReferences() {
    return this._exploreReferences;
  }
  public putExploreReferences(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences[] | cdktn.IResolvable) {
    this._exploreReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exploreReferencesInput() {
    return this._exploreReferences.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences {
  /**
  * Required. The ID of the datasource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#datasource_id GoogleGeminiDataAnalyticsDataAgent#datasource_id}
  */
  readonly datasourceId: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    datasource_id: cdktn.stringToTerraform(struct!.datasourceId),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    datasource_id: {
      value: cdktn.stringToHclTerraform(struct!.datasourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceId = this._datasourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasourceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasourceId = value.datasourceId;
    }
  }

  // datasource_id - computed: false, optional: false, required: true
  private _datasourceId?: string; 
  public get datasourceId() {
    return this.getStringAttribute('datasource_id');
  }
  public set datasourceId(value: string) {
    this._datasourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceIdInput() {
    return this._datasourceId;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudio {
  /**
  * studio_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#studio_references GoogleGeminiDataAnalyticsDataAgent#studio_references}
  */
  readonly studioReferences?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    studio_references: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesToTerraform, true)(struct!.studioReferences),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    studio_references: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesToHclTerraform, true)(struct!.studioReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._studioReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioReferences = this._studioReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._studioReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._studioReferences.internalValue = value.studioReferences;
    }
  }

  // studio_references - computed: false, optional: true, required: false
  private _studioReferences = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesList(this, "studio_references", false);
  public get studioReferences() {
    return this._studioReferences;
  }
  public putStudioReferences(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences[] | cdktn.IResolvable) {
    this._studioReferences.internalValue = value;
  }
  public resetStudioReferences() {
    this._studioReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioReferencesInput() {
    return this._studioReferences.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences {
  /**
  * bq block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#bq GoogleGeminiDataAnalyticsDataAgent#bq}
  */
  readonly bq?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq;
  /**
  * looker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#looker GoogleGeminiDataAnalyticsDataAgent#looker}
  */
  readonly looker?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLooker;
  /**
  * studio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#studio GoogleGeminiDataAnalyticsDataAgent#studio}
  */
  readonly studio?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudio;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bq: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqToTerraform(struct!.bq),
    looker: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerToTerraform(struct!.looker),
    studio: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioToTerraform(struct!.studio),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bq: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqToHclTerraform(struct!.bq),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqList",
    },
    looker: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerToHclTerraform(struct!.looker),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerList",
    },
    studio: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioToHclTerraform(struct!.studio),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bq?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bq = this._bq?.internalValue;
    }
    if (this._looker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.looker = this._looker?.internalValue;
    }
    if (this._studio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.studio = this._studio?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bq.internalValue = undefined;
      this._looker.internalValue = undefined;
      this._studio.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bq.internalValue = value.bq;
      this._looker.internalValue = value.looker;
      this._studio.internalValue = value.studio;
    }
  }

  // bq - computed: false, optional: true, required: false
  private _bq = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference(this, "bq");
  public get bq() {
    return this._bq;
  }
  public putBq(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq) {
    this._bq.internalValue = value;
  }
  public resetBq() {
    this._bq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bqInput() {
    return this._bq.internalValue;
  }

  // looker - computed: false, optional: true, required: false
  private _looker = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerOutputReference(this, "looker");
  public get looker() {
    return this._looker;
  }
  public putLooker(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLooker) {
    this._looker.internalValue = value;
  }
  public resetLooker() {
    this._looker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerInput() {
    return this._looker.internalValue;
  }

  // studio - computed: false, optional: true, required: false
  private _studio = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioOutputReference(this, "studio");
  public get studio() {
    return this._studio;
  }
  public putStudio(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudio) {
    this._studio.internalValue = value;
  }
  public resetStudio() {
    this._studio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioInput() {
    return this._studio.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters {
  /**
  * Required. The data type of the parameter, e.g. "STRING", "INT64", "DATE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#data_type GoogleGeminiDataAnalyticsDataAgent#data_type}
  */
  readonly dataType: string;
  /**
  * Optional. The description of the parameter that can be used by the LLM to extract the parameter value from the user question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Required. The name of the parameter reference in the SQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#name GoogleGeminiDataAnalyticsDataAgent#name}
  */
  readonly name: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_type: cdktn.stringToTerraform(struct!.dataType),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries {
  /**
  * Optional. A natural language question that a user might ask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#natural_language_question GoogleGeminiDataAnalyticsDataAgent#natural_language_question}
  */
  readonly naturalLanguageQuestion?: string;
  /**
  * Optional. The SQL query that should be generated to answer
  * the natural language question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#sql_query GoogleGeminiDataAnalyticsDataAgent#sql_query}
  */
  readonly sqlQuery?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#parameters GoogleGeminiDataAnalyticsDataAgent#parameters}
  */
  readonly parameters?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    natural_language_question: cdktn.stringToTerraform(struct!.naturalLanguageQuestion),
    sql_query: cdktn.stringToTerraform(struct!.sqlQuery),
    parameters: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersToTerraform, true)(struct!.parameters),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    natural_language_question: {
      value: cdktn.stringToHclTerraform(struct!.naturalLanguageQuestion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_query: {
      value: cdktn.stringToHclTerraform(struct!.sqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naturalLanguageQuestion !== undefined) {
      hasAnyValues = true;
      internalValueResult.naturalLanguageQuestion = this._naturalLanguageQuestion;
    }
    if (this._sqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlQuery = this._sqlQuery;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestion = undefined;
      this._sqlQuery = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestion = value.naturalLanguageQuestion;
      this._sqlQuery = value.sqlQuery;
      this._parameters.internalValue = value.parameters;
    }
  }

  // natural_language_question - computed: false, optional: true, required: false
  private _naturalLanguageQuestion?: string; 
  public get naturalLanguageQuestion() {
    return this.getStringAttribute('natural_language_question');
  }
  public set naturalLanguageQuestion(value: string) {
    this._naturalLanguageQuestion = value;
  }
  public resetNaturalLanguageQuestion() {
    this._naturalLanguageQuestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naturalLanguageQuestionInput() {
    return this._naturalLanguageQuestion;
  }

  // sql_query - computed: false, optional: true, required: false
  private _sqlQuery?: string; 
  public get sqlQuery() {
    return this.getStringAttribute('sql_query');
  }
  public set sqlQuery(value: string) {
    this._sqlQuery = value;
  }
  public resetSqlQuery() {
    this._sqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlQueryInput() {
    return this._sqlQuery;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters[] | cdktn.IResolvable) {
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms {
  /**
  * Required. The description or meaning of the term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description: string;
  /**
  * Required. User friendly display name of the glossary term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#display_name GoogleGeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName: string;
  /**
  * Optional. A list of general purpose labels associated with this term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#labels GoogleGeminiDataAnalyticsDataAgent#labels}
  */
  readonly labels?: string[];
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    labels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.labels),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._labels = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._labels = value.labels;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters {
  /**
  * Required. The field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#field GoogleGeminiDataAnalyticsDataAgent#field}
  */
  readonly field: string;
  /**
  * Optional. The value for the field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#value GoogleGeminiDataAnalyticsDataAgent#value}
  */
  readonly value?: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQuery {
  /**
  * Optional. The short alphanumeric identifier for the query, used for share links and Explore URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#client_id GoogleGeminiDataAnalyticsDataAgent#client_id}
  */
  readonly clientId?: string;
  /**
  * Required. The LookML explore used to generate the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#explore GoogleGeminiDataAnalyticsDataAgent#explore}
  */
  readonly explore: string;
  /**
  * Optional. The fields to retrieve from the explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#fields GoogleGeminiDataAnalyticsDataAgent#fields}
  */
  readonly fields?: string[];
  /**
  * Optional. Limit in the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#limit GoogleGeminiDataAnalyticsDataAgent#limit}
  */
  readonly limit?: string;
  /**
  * Required. The LookML model used to generate the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#model GoogleGeminiDataAnalyticsDataAgent#model}
  */
  readonly model: string;
  /**
  * Optional. The primary identifier for the query resource in Looker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#query_id GoogleGeminiDataAnalyticsDataAgent#query_id}
  */
  readonly queryId?: string;
  /**
  * Optional. The sorts to apply to the explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#sorts GoogleGeminiDataAnalyticsDataAgent#sorts}
  */
  readonly sorts?: string[];
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#filters GoogleGeminiDataAnalyticsDataAgent#filters}
  */
  readonly filters?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    explore: cdktn.stringToTerraform(struct!.explore),
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
    limit: cdktn.stringToTerraform(struct!.limit),
    model: cdktn.stringToTerraform(struct!.model),
    query_id: cdktn.stringToTerraform(struct!.queryId),
    sorts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sorts),
    filters: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersToTerraform, true)(struct!.filters),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    explore: {
      value: cdktn.stringToHclTerraform(struct!.explore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    limit: {
      value: cdktn.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_id: {
      value: cdktn.stringToHclTerraform(struct!.queryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sorts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filters: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._explore !== undefined) {
      hasAnyValues = true;
      internalValueResult.explore = this._explore;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    if (this._sorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sorts = this._sorts;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._explore = undefined;
      this._fields = undefined;
      this._limit = undefined;
      this._model = undefined;
      this._queryId = undefined;
      this._sorts = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._explore = value.explore;
      this._fields = value.fields;
      this._limit = value.limit;
      this._model = value.model;
      this._queryId = value.queryId;
      this._sorts = value.sorts;
      this._filters.internalValue = value.filters;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // explore - computed: false, optional: false, required: true
  private _explore?: string; 
  public get explore() {
    return this.getStringAttribute('explore');
  }
  public set explore(value: string) {
    this._explore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exploreInput() {
    return this._explore;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // query_id - computed: false, optional: true, required: false
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  public resetQueryId() {
    this._queryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }

  // sorts - computed: false, optional: true, required: false
  private _sorts?: string[]; 
  public get sorts() {
    return this.getListAttribute('sorts');
  }
  public set sorts(value: string[]) {
    this._sorts = value;
  }
  public resetSorts() {
    this._sorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortsInput() {
    return this._sorts;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries {
  /**
  * Optional. Natural language questions that a user might ask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#natural_language_questions GoogleGeminiDataAnalyticsDataAgent#natural_language_questions}
  */
  readonly naturalLanguageQuestions?: string[];
  /**
  * looker_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#looker_query GoogleGeminiDataAnalyticsDataAgent#looker_query}
  */
  readonly lookerQuery?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQuery;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    natural_language_questions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.naturalLanguageQuestions),
    looker_query: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryToTerraform(struct!.lookerQuery),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    natural_language_questions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.naturalLanguageQuestions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    looker_query: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryToHclTerraform(struct!.lookerQuery),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naturalLanguageQuestions !== undefined) {
      hasAnyValues = true;
      internalValueResult.naturalLanguageQuestions = this._naturalLanguageQuestions;
    }
    if (this._lookerQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerQuery = this._lookerQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestions = undefined;
      this._lookerQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestions = value.naturalLanguageQuestions;
      this._lookerQuery.internalValue = value.lookerQuery;
    }
  }

  // natural_language_questions - computed: false, optional: true, required: false
  private _naturalLanguageQuestions?: string[]; 
  public get naturalLanguageQuestions() {
    return this.getListAttribute('natural_language_questions');
  }
  public set naturalLanguageQuestions(value: string[]) {
    this._naturalLanguageQuestions = value;
  }
  public resetNaturalLanguageQuestions() {
    this._naturalLanguageQuestions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naturalLanguageQuestionsInput() {
    return this._naturalLanguageQuestions;
  }

  // looker_query - computed: false, optional: true, required: false
  private _lookerQuery = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryOutputReference(this, "looker_query");
  public get lookerQuery() {
    return this._lookerQuery;
  }
  public putLookerQuery(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQuery) {
    this._lookerQuery.internalValue = value;
  }
  public resetLookerQuery() {
    this._lookerQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerQueryInput() {
    return this._lookerQuery.internalValue;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython {
  /**
  * Optional. Whether to enable Python analysis. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#enabled GoogleGeminiDataAnalyticsDataAgent#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis {
  /**
  * python block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#python GoogleGeminiDataAnalyticsDataAgent#python}
  */
  readonly python?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    python: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonToTerraform(struct!.python),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    python: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonToHclTerraform(struct!.python),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._python?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.python = this._python?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._python.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._python.internalValue = value.python;
    }
  }

  // python - computed: false, optional: true, required: false
  private _python = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference(this, "python");
  public get python() {
    return this._python;
  }
  public putPython(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython) {
    this._python.internalValue = value;
  }
  public resetPython() {
    this._python.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonInput() {
    return this._python.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource {
  /**
  * Optional. Limits the bytes billed for each BigQuery query job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#big_query_max_billed_bytes GoogleGeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}
  */
  readonly bigQueryMaxBilledBytes?: number;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    big_query_max_billed_bytes: cdktn.numberToTerraform(struct!.bigQueryMaxBilledBytes),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    big_query_max_billed_bytes: {
      value: cdktn.numberToHclTerraform(struct!.bigQueryMaxBilledBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigQueryMaxBilledBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigQueryMaxBilledBytes = this._bigQueryMaxBilledBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigQueryMaxBilledBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigQueryMaxBilledBytes = value.bigQueryMaxBilledBytes;
    }
  }

  // big_query_max_billed_bytes - computed: false, optional: true, required: false
  private _bigQueryMaxBilledBytes?: number; 
  public get bigQueryMaxBilledBytes() {
    return this.getNumberAttribute('big_query_max_billed_bytes');
  }
  public set bigQueryMaxBilledBytes(value: number) {
    this._bigQueryMaxBilledBytes = value;
  }
  public resetBigQueryMaxBilledBytes() {
    this._bigQueryMaxBilledBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryMaxBilledBytesInput() {
    return this._bigQueryMaxBilledBytes;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions {
  /**
  * Optional. The model to use for the agent loop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#model GoogleGeminiDataAnalyticsDataAgent#model}
  */
  readonly model?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#analysis GoogleGeminiDataAnalyticsDataAgent#analysis}
  */
  readonly analysis?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis;
  /**
  * datasource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#datasource GoogleGeminiDataAnalyticsDataAgent#datasource}
  */
  readonly datasource?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    analysis: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisToTerraform(struct!.analysis),
    datasource: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceToTerraform(struct!.datasource),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisList",
    },
    datasource: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceToHclTerraform(struct!.datasource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._datasource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._analysis.internalValue = undefined;
      this._datasource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._analysis.internalValue = value.analysis;
      this._datasource.internalValue = value.datasource;
    }
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // datasource - computed: false, optional: true, required: false
  private _datasource = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference(this, "datasource");
  public get datasource() {
    return this._datasource;
  }
  public putDatasource(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource) {
    this._datasource.internalValue = value;
  }
  public resetDatasource() {
    this._datasource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths {
  /**
  * Required. The ordered list of paths within the table schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#paths GoogleGeminiDataAnalyticsDataAgent#paths}
  */
  readonly paths: string[];
  /**
  * Required. The service-qualified full resource name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#table_fqn GoogleGeminiDataAnalyticsDataAgent#table_fqn}
  */
  readonly tableFqn: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.paths),
    table_fqn: cdktn.stringToTerraform(struct!.tableFqn),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table_fqn: {
      value: cdktn.stringToHclTerraform(struct!.tableFqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._tableFqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFqn = this._tableFqn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paths = undefined;
      this._tableFqn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paths = value.paths;
      this._tableFqn = value.tableFqn;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // table_fqn - computed: false, optional: false, required: true
  private _tableFqn?: string; 
  public get tableFqn() {
    return this.getStringAttribute('table_fqn');
  }
  public set tableFqn(value: string) {
    this._tableFqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFqnInput() {
    return this._tableFqn;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths {
  /**
  * Required. The ordered list of paths within the table schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#paths GoogleGeminiDataAnalyticsDataAgent#paths}
  */
  readonly paths: string[];
  /**
  * Required. The service-qualified full resource name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#table_fqn GoogleGeminiDataAnalyticsDataAgent#table_fqn}
  */
  readonly tableFqn: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.paths),
    table_fqn: cdktn.stringToTerraform(struct!.tableFqn),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table_fqn: {
      value: cdktn.stringToHclTerraform(struct!.tableFqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._tableFqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFqn = this._tableFqn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paths = undefined;
      this._tableFqn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paths = value.paths;
      this._tableFqn = value.tableFqn;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // table_fqn - computed: false, optional: false, required: true
  private _tableFqn?: string; 
  public get tableFqn() {
    return this.getStringAttribute('table_fqn');
  }
  public set tableFqn(value: string) {
    this._tableFqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFqnInput() {
    return this._tableFqn;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships {
  /**
  * Optional. A confidence score for the suggested relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#confidence_score GoogleGeminiDataAnalyticsDataAgent#confidence_score}
  */
  readonly confidenceScore?: number;
  /**
  * Optional. Sources which generated the schema relation edge.
  * Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#sources GoogleGeminiDataAnalyticsDataAgent#sources}
  */
  readonly sources?: string[];
  /**
  * left_schema_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#left_schema_paths GoogleGeminiDataAnalyticsDataAgent#left_schema_paths}
  */
  readonly leftSchemaPaths: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths;
  /**
  * right_schema_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#right_schema_paths GoogleGeminiDataAnalyticsDataAgent#right_schema_paths}
  */
  readonly rightSchemaPaths: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confidence_score: cdktn.numberToTerraform(struct!.confidenceScore),
    sources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sources),
    left_schema_paths: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsToTerraform(struct!.leftSchemaPaths),
    right_schema_paths: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsToTerraform(struct!.rightSchemaPaths),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confidence_score: {
      value: cdktn.numberToHclTerraform(struct!.confidenceScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    left_schema_paths: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsToHclTerraform(struct!.leftSchemaPaths),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsList",
    },
    right_schema_paths: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsToHclTerraform(struct!.rightSchemaPaths),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceScore = this._confidenceScore;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._leftSchemaPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftSchemaPaths = this._leftSchemaPaths?.internalValue;
    }
    if (this._rightSchemaPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightSchemaPaths = this._rightSchemaPaths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidenceScore = undefined;
      this._sources = undefined;
      this._leftSchemaPaths.internalValue = undefined;
      this._rightSchemaPaths.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidenceScore = value.confidenceScore;
      this._sources = value.sources;
      this._leftSchemaPaths.internalValue = value.leftSchemaPaths;
      this._rightSchemaPaths.internalValue = value.rightSchemaPaths;
    }
  }

  // confidence_score - computed: false, optional: true, required: false
  private _confidenceScore?: number; 
  public get confidenceScore() {
    return this.getNumberAttribute('confidence_score');
  }
  public set confidenceScore(value: number) {
    this._confidenceScore = value;
  }
  public resetConfidenceScore() {
    this._confidenceScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceScoreInput() {
    return this._confidenceScore;
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // left_schema_paths - computed: false, optional: false, required: true
  private _leftSchemaPaths = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference(this, "left_schema_paths");
  public get leftSchemaPaths() {
    return this._leftSchemaPaths;
  }
  public putLeftSchemaPaths(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths) {
    this._leftSchemaPaths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftSchemaPathsInput() {
    return this._leftSchemaPaths.internalValue;
  }

  // right_schema_paths - computed: false, optional: false, required: true
  private _rightSchemaPaths = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference(this, "right_schema_paths");
  public get rightSchemaPaths() {
    return this._rightSchemaPaths;
  }
  public putRightSchemaPaths(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths) {
    this._rightSchemaPaths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightSchemaPathsInput() {
    return this._rightSchemaPaths.internalValue;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReference {
  /**
  * Optional. The dataset ID of the routine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#dataset_id GoogleGeminiDataAnalyticsDataAgent#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * Optional. The project ID of the routine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#project_id GoogleGeminiDataAnalyticsDataAgent#project_id}
  */
  readonly projectId?: string;
  /**
  * Optional. The routine ID of the routine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#routine_id GoogleGeminiDataAnalyticsDataAgent#routine_id}
  */
  readonly routineId?: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    routine_id: cdktn.stringToTerraform(struct!.routineId),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine_id: {
      value: cdktn.stringToHclTerraform(struct!.routineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._routineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routineId = this._routineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._routineId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._routineId = value.routineId;
    }
  }

  // dataset_id - computed: false, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // routine_id - computed: false, optional: true, required: false
  private _routineId?: string; 
  public get routineId() {
    return this.getStringAttribute('routine_id');
  }
  public set routineId(value: string) {
    this._routineId = value;
  }
  public resetRoutineId() {
    this._routineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineIdInput() {
    return this._routineId;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines {
  /**
  * Optional. User override or addition to description, to tell the agent when to use the UDF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * routine_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#routine_reference GoogleGeminiDataAnalyticsDataAgent#routine_reference}
  */
  readonly routineReference?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReference;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    routine_reference: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceToTerraform(struct!.routineReference),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine_reference: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceToHclTerraform(struct!.routineReference),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._routineReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routineReference = this._routineReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._routineReference.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._routineReference.internalValue = value.routineReference;
    }
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

  // routine_reference - computed: false, optional: true, required: false
  private _routineReference = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceOutputReference(this, "routine_reference");
  public get routineReference() {
    return this._routineReference;
  }
  public putRoutineReference(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReference) {
    this._routineReference.internalValue = value;
  }
  public resetRoutineReference() {
    this._routineReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineReferenceInput() {
    return this._routineReference.internalValue;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctions {
  /**
  * bq_routines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#bq_routines GoogleGeminiDataAnalyticsDataAgent#bq_routines}
  */
  readonly bqRoutines?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bq_routines: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesToTerraform, true)(struct!.bqRoutines),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bq_routines: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesToHclTerraform, true)(struct!.bqRoutines),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bqRoutines?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bqRoutines = this._bqRoutines?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bqRoutines.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bqRoutines.internalValue = value.bqRoutines;
    }
  }

  // bq_routines - computed: false, optional: true, required: false
  private _bqRoutines = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesList(this, "bq_routines", false);
  public get bqRoutines() {
    return this._bqRoutines;
  }
  public putBqRoutines(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines[] | cdktn.IResolvable) {
    this._bqRoutines.internalValue = value;
  }
  public resetBqRoutines() {
    this._bqRoutines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bqRoutinesInput() {
    return this._bqRoutines.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext {
  /**
  * Optional. The basic entry point for data owners creating domain
  * knowledge for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#system_instruction GoogleGeminiDataAnalyticsDataAgent#system_instruction}
  */
  readonly systemInstruction?: string;
  /**
  * datasource_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#datasource_references GoogleGeminiDataAnalyticsDataAgent#datasource_references}
  */
  readonly datasourceReferences: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences;
  /**
  * example_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#example_queries GoogleGeminiDataAnalyticsDataAgent#example_queries}
  */
  readonly exampleQueries?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[] | cdktn.IResolvable;
  /**
  * glossary_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#glossary_terms GoogleGeminiDataAnalyticsDataAgent#glossary_terms}
  */
  readonly glossaryTerms?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[] | cdktn.IResolvable;
  /**
  * looker_golden_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#looker_golden_queries GoogleGeminiDataAnalyticsDataAgent#looker_golden_queries}
  */
  readonly lookerGoldenQueries?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries[] | cdktn.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#options GoogleGeminiDataAnalyticsDataAgent#options}
  */
  readonly options?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions;
  /**
  * schema_relationships block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#schema_relationships GoogleGeminiDataAnalyticsDataAgent#schema_relationships}
  */
  readonly schemaRelationships?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[] | cdktn.IResolvable;
  /**
  * user_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#user_functions GoogleGeminiDataAnalyticsDataAgent#user_functions}
  */
  readonly userFunctions?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctions;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    system_instruction: cdktn.stringToTerraform(struct!.systemInstruction),
    datasource_references: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesToTerraform(struct!.datasourceReferences),
    example_queries: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesToTerraform, true)(struct!.exampleQueries),
    glossary_terms: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsToTerraform, true)(struct!.glossaryTerms),
    looker_golden_queries: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesToTerraform, true)(struct!.lookerGoldenQueries),
    options: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsToTerraform(struct!.options),
    schema_relationships: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsToTerraform, true)(struct!.schemaRelationships),
    user_functions: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsToTerraform(struct!.userFunctions),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    system_instruction: {
      value: cdktn.stringToHclTerraform(struct!.systemInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasource_references: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesToHclTerraform(struct!.datasourceReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesList",
    },
    example_queries: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesToHclTerraform, true)(struct!.exampleQueries),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList",
    },
    glossary_terms: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsToHclTerraform, true)(struct!.glossaryTerms),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList",
    },
    looker_golden_queries: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesToHclTerraform, true)(struct!.lookerGoldenQueries),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesList",
    },
    options: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsList",
    },
    schema_relationships: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsToHclTerraform, true)(struct!.schemaRelationships),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList",
    },
    user_functions: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsToHclTerraform(struct!.userFunctions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemInstruction = this._systemInstruction;
    }
    if (this._datasourceReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceReferences = this._datasourceReferences?.internalValue;
    }
    if (this._exampleQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exampleQueries = this._exampleQueries?.internalValue;
    }
    if (this._glossaryTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glossaryTerms = this._glossaryTerms?.internalValue;
    }
    if (this._lookerGoldenQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerGoldenQueries = this._lookerGoldenQueries?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._schemaRelationships?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRelationships = this._schemaRelationships?.internalValue;
    }
    if (this._userFunctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFunctions = this._userFunctions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._systemInstruction = undefined;
      this._datasourceReferences.internalValue = undefined;
      this._exampleQueries.internalValue = undefined;
      this._glossaryTerms.internalValue = undefined;
      this._lookerGoldenQueries.internalValue = undefined;
      this._options.internalValue = undefined;
      this._schemaRelationships.internalValue = undefined;
      this._userFunctions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemInstruction = value.systemInstruction;
      this._datasourceReferences.internalValue = value.datasourceReferences;
      this._exampleQueries.internalValue = value.exampleQueries;
      this._glossaryTerms.internalValue = value.glossaryTerms;
      this._lookerGoldenQueries.internalValue = value.lookerGoldenQueries;
      this._options.internalValue = value.options;
      this._schemaRelationships.internalValue = value.schemaRelationships;
      this._userFunctions.internalValue = value.userFunctions;
    }
  }

  // system_instruction - computed: false, optional: true, required: false
  private _systemInstruction?: string; 
  public get systemInstruction() {
    return this.getStringAttribute('system_instruction');
  }
  public set systemInstruction(value: string) {
    this._systemInstruction = value;
  }
  public resetSystemInstruction() {
    this._systemInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemInstructionInput() {
    return this._systemInstruction;
  }

  // datasource_references - computed: false, optional: false, required: true
  private _datasourceReferences = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference(this, "datasource_references");
  public get datasourceReferences() {
    return this._datasourceReferences;
  }
  public putDatasourceReferences(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences) {
    this._datasourceReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceReferencesInput() {
    return this._datasourceReferences.internalValue;
  }

  // example_queries - computed: false, optional: true, required: false
  private _exampleQueries = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList(this, "example_queries", false);
  public get exampleQueries() {
    return this._exampleQueries;
  }
  public putExampleQueries(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[] | cdktn.IResolvable) {
    this._exampleQueries.internalValue = value;
  }
  public resetExampleQueries() {
    this._exampleQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleQueriesInput() {
    return this._exampleQueries.internalValue;
  }

  // glossary_terms - computed: false, optional: true, required: false
  private _glossaryTerms = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList(this, "glossary_terms", false);
  public get glossaryTerms() {
    return this._glossaryTerms;
  }
  public putGlossaryTerms(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[] | cdktn.IResolvable) {
    this._glossaryTerms.internalValue = value;
  }
  public resetGlossaryTerms() {
    this._glossaryTerms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glossaryTermsInput() {
    return this._glossaryTerms.internalValue;
  }

  // looker_golden_queries - computed: false, optional: true, required: false
  private _lookerGoldenQueries = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesList(this, "looker_golden_queries", false);
  public get lookerGoldenQueries() {
    return this._lookerGoldenQueries;
  }
  public putLookerGoldenQueries(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries[] | cdktn.IResolvable) {
    this._lookerGoldenQueries.internalValue = value;
  }
  public resetLookerGoldenQueries() {
    this._lookerGoldenQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerGoldenQueriesInput() {
    return this._lookerGoldenQueries.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // schema_relationships - computed: false, optional: true, required: false
  private _schemaRelationships = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList(this, "schema_relationships", false);
  public get schemaRelationships() {
    return this._schemaRelationships;
  }
  public putSchemaRelationships(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[] | cdktn.IResolvable) {
    this._schemaRelationships.internalValue = value;
  }
  public resetSchemaRelationships() {
    this._schemaRelationships.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRelationshipsInput() {
    return this._schemaRelationships.internalValue;
  }

  // user_functions - computed: false, optional: true, required: false
  private _userFunctions = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsOutputReference(this, "user_functions");
  public get userFunctions() {
    return this._userFunctions;
  }
  public putUserFunctions(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctions) {
    this._userFunctions.internalValue = value;
  }
  public resetUserFunctions() {
    this._userFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFunctionsInput() {
    return this._userFunctions.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences {
  /**
  * Required. The dataset that the property graph belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#dataset_id GoogleGeminiDataAnalyticsDataAgent#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Required. The project that the property graph belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#project_id GoogleGeminiDataAnalyticsDataAgent#project_id}
  */
  readonly projectId: string;
  /**
  * Required. The property graph ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#property_graph_id GoogleGeminiDataAnalyticsDataAgent#property_graph_id}
  */
  readonly propertyGraphId: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    property_graph_id: cdktn.stringToTerraform(struct!.propertyGraphId),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_graph_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyGraphId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._propertyGraphId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyGraphId = this._propertyGraphId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._propertyGraphId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._propertyGraphId = value.propertyGraphId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
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

  // property_graph_id - computed: false, optional: false, required: true
  private _propertyGraphId?: string; 
  public get propertyGraphId() {
    return this.getStringAttribute('property_graph_id');
  }
  public set propertyGraphId(value: string) {
    this._propertyGraphId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyGraphIdInput() {
    return this._propertyGraphId;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields {
  /**
  * Optional. Field category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#category GoogleGeminiDataAnalyticsDataAgent#category}
  */
  readonly category?: string;
  /**
  * Optional. A brief description of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. The mode of the field (e.g., NULLABLE, REPEATED).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#mode GoogleGeminiDataAnalyticsDataAgent#mode}
  */
  readonly mode?: string;
  /**
  * Optional. The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#name GoogleGeminiDataAnalyticsDataAgent#name}
  */
  readonly name?: string;
  /**
  * Optional. Recursive property for nested schema structures, encoded as a JSON string representing a list of Field objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#subfields GoogleGeminiDataAnalyticsDataAgent#subfields}
  */
  readonly subfields?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#synonyms GoogleGeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the field, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#tags GoogleGeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * Optional. The type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#type GoogleGeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. Value format of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#value_format GoogleGeminiDataAnalyticsDataAgent#value_format}
  */
  readonly valueFormat?: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    description: cdktn.stringToTerraform(struct!.description),
    mode: cdktn.stringToTerraform(struct!.mode),
    name: cdktn.stringToTerraform(struct!.name),
    subfields: cdktn.stringToTerraform(struct!.subfields),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    type: cdktn.stringToTerraform(struct!.type),
    value_format: cdktn.stringToTerraform(struct!.valueFormat),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subfields: {
      value: cdktn.stringToHclTerraform(struct!.subfields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_format: {
      value: cdktn.stringToHclTerraform(struct!.valueFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subfields !== undefined) {
      hasAnyValues = true;
      internalValueResult.subfields = this._subfields;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valueFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFormat = this._valueFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._description = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._subfields = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._valueFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._description = value.description;
      this._mode = value.mode;
      this._name = value.name;
      this._subfields = value.subfields;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._type = value.type;
      this._valueFormat = value.valueFormat;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // subfields - computed: false, optional: true, required: false
  private _subfields?: string; 
  public get subfields() {
    return this.getStringAttribute('subfields');
  }
  public set subfields(value: string) {
    this._subfields = value;
  }
  public resetSubfields() {
    this._subfields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subfieldsInput() {
    return this._subfields;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // value_format - computed: false, optional: true, required: false
  private _valueFormat?: string; 
  public get valueFormat() {
    return this.getStringAttribute('value_format');
  }
  public set valueFormat(value: string) {
    this._valueFormat = value;
  }
  public resetValueFormat() {
    this._valueFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFormatInput() {
    return this._valueFormat;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters {
  /**
  * Optional. The field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#field GoogleGeminiDataAnalyticsDataAgent#field}
  */
  readonly field?: string;
  /**
  * Optional. The type of filter present on a datasource, such as ALWAYS_FILTER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#type GoogleGeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. The default value used for this filter if the filter is not overridden in a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#value GoogleGeminiDataAnalyticsDataAgent#value}
  */
  readonly value?: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchema {
  /**
  * Optional. A textual description of the table's content and purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. Table display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#display_name GoogleGeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#synonyms GoogleGeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the table, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#tags GoogleGeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#fields GoogleGeminiDataAnalyticsDataAgent#fields}
  */
  readonly fields?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields[] | cdktn.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#filters GoogleGeminiDataAnalyticsDataAgent#filters}
  */
  readonly filters?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    fields: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsToTerraform, true)(struct!.fields),
    filters: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersToTerraform, true)(struct!.filters),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fields: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsList",
    },
    filters: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._fields.internalValue = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._fields.internalValue = value.fields;
      this._filters.internalValue = value.filters;
    }
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

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences {
  /**
  * Required. The dataset that the table belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#dataset_id GoogleGeminiDataAnalyticsDataAgent#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Required. The project that the table belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#project_id GoogleGeminiDataAnalyticsDataAgent#project_id}
  */
  readonly projectId: string;
  /**
  * Required. The table ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#table_id GoogleGeminiDataAnalyticsDataAgent#table_id}
  */
  readonly tableId: string;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#schema GoogleGeminiDataAnalyticsDataAgent#schema}
  */
  readonly schema?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchema;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    table_id: cdktn.stringToTerraform(struct!.tableId),
    schema: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaToTerraform(struct!.schema),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktn.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
      this._schema.internalValue = value.schema;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
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

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq {
  /**
  * property_graph_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#property_graph_references GoogleGeminiDataAnalyticsDataAgent#property_graph_references}
  */
  readonly propertyGraphReferences?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences[] | cdktn.IResolvable;
  /**
  * table_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#table_references GoogleGeminiDataAnalyticsDataAgent#table_references}
  */
  readonly tableReferences?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    property_graph_references: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesToTerraform, true)(struct!.propertyGraphReferences),
    table_references: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesToTerraform, true)(struct!.tableReferences),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    property_graph_references: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesToHclTerraform, true)(struct!.propertyGraphReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesList",
    },
    table_references: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesToHclTerraform, true)(struct!.tableReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertyGraphReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyGraphReferences = this._propertyGraphReferences?.internalValue;
    }
    if (this._tableReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableReferences = this._tableReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._propertyGraphReferences.internalValue = undefined;
      this._tableReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._propertyGraphReferences.internalValue = value.propertyGraphReferences;
      this._tableReferences.internalValue = value.tableReferences;
    }
  }

  // property_graph_references - computed: false, optional: true, required: false
  private _propertyGraphReferences = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesList(this, "property_graph_references", false);
  public get propertyGraphReferences() {
    return this._propertyGraphReferences;
  }
  public putPropertyGraphReferences(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences[] | cdktn.IResolvable) {
    this._propertyGraphReferences.internalValue = value;
  }
  public resetPropertyGraphReferences() {
    this._propertyGraphReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyGraphReferencesInput() {
    return this._propertyGraphReferences.internalValue;
  }

  // table_references - computed: false, optional: true, required: false
  private _tableReferences = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList(this, "table_references", false);
  public get tableReferences() {
    return this._tableReferences;
  }
  public putTableReferences(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[] | cdktn.IResolvable) {
    this._tableReferences.internalValue = value;
  }
  public resetTableReferences() {
    this._tableReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableReferencesInput() {
    return this._tableReferences.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo {
  /**
  * Optional. The Looker instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#looker_instance_id GoogleGeminiDataAnalyticsDataAgent#looker_instance_id}
  */
  readonly lookerInstanceId?: string;
  /**
  * Optional. The service directory name of the Looker instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#service_directory_name GoogleGeminiDataAnalyticsDataAgent#service_directory_name}
  */
  readonly serviceDirectoryName?: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    looker_instance_id: cdktn.stringToTerraform(struct!.lookerInstanceId),
    service_directory_name: cdktn.stringToTerraform(struct!.serviceDirectoryName),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    looker_instance_id: {
      value: cdktn.stringToHclTerraform(struct!.lookerInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_directory_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceDirectoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lookerInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerInstanceId = this._lookerInstanceId;
    }
    if (this._serviceDirectoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryName = this._serviceDirectoryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lookerInstanceId = undefined;
      this._serviceDirectoryName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lookerInstanceId = value.lookerInstanceId;
      this._serviceDirectoryName = value.serviceDirectoryName;
    }
  }

  // looker_instance_id - computed: false, optional: true, required: false
  private _lookerInstanceId?: string; 
  public get lookerInstanceId() {
    return this.getStringAttribute('looker_instance_id');
  }
  public set lookerInstanceId(value: string) {
    this._lookerInstanceId = value;
  }
  public resetLookerInstanceId() {
    this._lookerInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerInstanceIdInput() {
    return this._lookerInstanceId;
  }

  // service_directory_name - computed: false, optional: true, required: false
  private _serviceDirectoryName?: string; 
  public get serviceDirectoryName() {
    return this.getStringAttribute('service_directory_name');
  }
  public set serviceDirectoryName(value: string) {
    this._serviceDirectoryName = value;
  }
  public resetServiceDirectoryName() {
    this._serviceDirectoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryNameInput() {
    return this._serviceDirectoryName;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields {
  /**
  * Optional. Field category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#category GoogleGeminiDataAnalyticsDataAgent#category}
  */
  readonly category?: string;
  /**
  * Optional. A brief description of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. The mode of the field (e.g., NULLABLE, REPEATED).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#mode GoogleGeminiDataAnalyticsDataAgent#mode}
  */
  readonly mode?: string;
  /**
  * Optional. The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#name GoogleGeminiDataAnalyticsDataAgent#name}
  */
  readonly name?: string;
  /**
  * Optional. Recursive property for nested schema structures, encoded as a JSON string representing a list of Field objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#subfields GoogleGeminiDataAnalyticsDataAgent#subfields}
  */
  readonly subfields?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#synonyms GoogleGeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the field, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#tags GoogleGeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * Optional. The type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#type GoogleGeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. Value format of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#value_format GoogleGeminiDataAnalyticsDataAgent#value_format}
  */
  readonly valueFormat?: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    description: cdktn.stringToTerraform(struct!.description),
    mode: cdktn.stringToTerraform(struct!.mode),
    name: cdktn.stringToTerraform(struct!.name),
    subfields: cdktn.stringToTerraform(struct!.subfields),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    type: cdktn.stringToTerraform(struct!.type),
    value_format: cdktn.stringToTerraform(struct!.valueFormat),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subfields: {
      value: cdktn.stringToHclTerraform(struct!.subfields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_format: {
      value: cdktn.stringToHclTerraform(struct!.valueFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subfields !== undefined) {
      hasAnyValues = true;
      internalValueResult.subfields = this._subfields;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valueFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFormat = this._valueFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._description = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._subfields = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._valueFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._description = value.description;
      this._mode = value.mode;
      this._name = value.name;
      this._subfields = value.subfields;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._type = value.type;
      this._valueFormat = value.valueFormat;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // subfields - computed: false, optional: true, required: false
  private _subfields?: string; 
  public get subfields() {
    return this.getStringAttribute('subfields');
  }
  public set subfields(value: string) {
    this._subfields = value;
  }
  public resetSubfields() {
    this._subfields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subfieldsInput() {
    return this._subfields;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // value_format - computed: false, optional: true, required: false
  private _valueFormat?: string; 
  public get valueFormat() {
    return this.getStringAttribute('value_format');
  }
  public set valueFormat(value: string) {
    this._valueFormat = value;
  }
  public resetValueFormat() {
    this._valueFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFormatInput() {
    return this._valueFormat;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters {
  /**
  * Optional. The field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#field GoogleGeminiDataAnalyticsDataAgent#field}
  */
  readonly field?: string;
  /**
  * Optional. The type of filter present on a datasource, such as ALWAYS_FILTER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#type GoogleGeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. The default value used for this filter if the filter is not overridden in a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#value GoogleGeminiDataAnalyticsDataAgent#value}
  */
  readonly value?: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchema {
  /**
  * Optional. A textual description of the explore's content and purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. Explore display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#display_name GoogleGeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to the explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#synonyms GoogleGeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the explore, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#tags GoogleGeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#fields GoogleGeminiDataAnalyticsDataAgent#fields}
  */
  readonly fields?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields[] | cdktn.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#filters GoogleGeminiDataAnalyticsDataAgent#filters}
  */
  readonly filters?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    fields: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToTerraform, true)(struct!.fields),
    filters: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToTerraform, true)(struct!.filters),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fields: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsList",
    },
    filters: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._fields.internalValue = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._fields.internalValue = value.fields;
      this._filters.internalValue = value.filters;
    }
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

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences {
  /**
  * Required. Name of the LookML Explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#explore GoogleGeminiDataAnalyticsDataAgent#explore}
  */
  readonly explore: string;
  /**
  * Optional. The base URL of the Looker instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#looker_instance_uri GoogleGeminiDataAnalyticsDataAgent#looker_instance_uri}
  */
  readonly lookerInstanceUri?: string;
  /**
  * Required. Name of the LookML model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#lookml_model GoogleGeminiDataAnalyticsDataAgent#lookml_model}
  */
  readonly lookmlModel: string;
  /**
  * private_looker_instance_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#private_looker_instance_info GoogleGeminiDataAnalyticsDataAgent#private_looker_instance_info}
  */
  readonly privateLookerInstanceInfo?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#schema GoogleGeminiDataAnalyticsDataAgent#schema}
  */
  readonly schema?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchema;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    explore: cdktn.stringToTerraform(struct!.explore),
    looker_instance_uri: cdktn.stringToTerraform(struct!.lookerInstanceUri),
    lookml_model: cdktn.stringToTerraform(struct!.lookmlModel),
    private_looker_instance_info: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToTerraform(struct!.privateLookerInstanceInfo),
    schema: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaToTerraform(struct!.schema),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    explore: {
      value: cdktn.stringToHclTerraform(struct!.explore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    looker_instance_uri: {
      value: cdktn.stringToHclTerraform(struct!.lookerInstanceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookml_model: {
      value: cdktn.stringToHclTerraform(struct!.lookmlModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_looker_instance_info: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToHclTerraform(struct!.privateLookerInstanceInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoList",
    },
    schema: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explore !== undefined) {
      hasAnyValues = true;
      internalValueResult.explore = this._explore;
    }
    if (this._lookerInstanceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerInstanceUri = this._lookerInstanceUri;
    }
    if (this._lookmlModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookmlModel = this._lookmlModel;
    }
    if (this._privateLookerInstanceInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLookerInstanceInfo = this._privateLookerInstanceInfo?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explore = undefined;
      this._lookerInstanceUri = undefined;
      this._lookmlModel = undefined;
      this._privateLookerInstanceInfo.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explore = value.explore;
      this._lookerInstanceUri = value.lookerInstanceUri;
      this._lookmlModel = value.lookmlModel;
      this._privateLookerInstanceInfo.internalValue = value.privateLookerInstanceInfo;
      this._schema.internalValue = value.schema;
    }
  }

  // explore - computed: false, optional: false, required: true
  private _explore?: string; 
  public get explore() {
    return this.getStringAttribute('explore');
  }
  public set explore(value: string) {
    this._explore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exploreInput() {
    return this._explore;
  }

  // looker_instance_uri - computed: false, optional: true, required: false
  private _lookerInstanceUri?: string; 
  public get lookerInstanceUri() {
    return this.getStringAttribute('looker_instance_uri');
  }
  public set lookerInstanceUri(value: string) {
    this._lookerInstanceUri = value;
  }
  public resetLookerInstanceUri() {
    this._lookerInstanceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerInstanceUriInput() {
    return this._lookerInstanceUri;
  }

  // lookml_model - computed: false, optional: false, required: true
  private _lookmlModel?: string; 
  public get lookmlModel() {
    return this.getStringAttribute('lookml_model');
  }
  public set lookmlModel(value: string) {
    this._lookmlModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookmlModelInput() {
    return this._lookmlModel;
  }

  // private_looker_instance_info - computed: false, optional: true, required: false
  private _privateLookerInstanceInfo = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference(this, "private_looker_instance_info");
  public get privateLookerInstanceInfo() {
    return this._privateLookerInstanceInfo;
  }
  public putPrivateLookerInstanceInfo(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo) {
    this._privateLookerInstanceInfo.internalValue = value;
  }
  public resetPrivateLookerInstanceInfo() {
    this._privateLookerInstanceInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLookerInstanceInfoInput() {
    return this._privateLookerInstanceInfo.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLooker {
  /**
  * explore_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#explore_references GoogleGeminiDataAnalyticsDataAgent#explore_references}
  */
  readonly exploreReferences: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLooker): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    explore_references: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesToTerraform, true)(struct!.exploreReferences),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLooker): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    explore_references: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesToHclTerraform, true)(struct!.exploreReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLooker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exploreReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exploreReferences = this._exploreReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLooker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exploreReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exploreReferences.internalValue = value.exploreReferences;
    }
  }

  // explore_references - computed: false, optional: false, required: true
  private _exploreReferences = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesList(this, "explore_references", false);
  public get exploreReferences() {
    return this._exploreReferences;
  }
  public putExploreReferences(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences[] | cdktn.IResolvable) {
    this._exploreReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exploreReferencesInput() {
    return this._exploreReferences.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences {
  /**
  * Required. The ID of the datasource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#datasource_id GoogleGeminiDataAnalyticsDataAgent#datasource_id}
  */
  readonly datasourceId: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    datasource_id: cdktn.stringToTerraform(struct!.datasourceId),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    datasource_id: {
      value: cdktn.stringToHclTerraform(struct!.datasourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceId = this._datasourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasourceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasourceId = value.datasourceId;
    }
  }

  // datasource_id - computed: false, optional: false, required: true
  private _datasourceId?: string; 
  public get datasourceId() {
    return this.getStringAttribute('datasource_id');
  }
  public set datasourceId(value: string) {
    this._datasourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceIdInput() {
    return this._datasourceId;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudio {
  /**
  * studio_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#studio_references GoogleGeminiDataAnalyticsDataAgent#studio_references}
  */
  readonly studioReferences?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    studio_references: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesToTerraform, true)(struct!.studioReferences),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    studio_references: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesToHclTerraform, true)(struct!.studioReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._studioReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioReferences = this._studioReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._studioReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._studioReferences.internalValue = value.studioReferences;
    }
  }

  // studio_references - computed: false, optional: true, required: false
  private _studioReferences = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesList(this, "studio_references", false);
  public get studioReferences() {
    return this._studioReferences;
  }
  public putStudioReferences(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences[] | cdktn.IResolvable) {
    this._studioReferences.internalValue = value;
  }
  public resetStudioReferences() {
    this._studioReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioReferencesInput() {
    return this._studioReferences.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences {
  /**
  * bq block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#bq GoogleGeminiDataAnalyticsDataAgent#bq}
  */
  readonly bq?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq;
  /**
  * looker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#looker GoogleGeminiDataAnalyticsDataAgent#looker}
  */
  readonly looker?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLooker;
  /**
  * studio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#studio GoogleGeminiDataAnalyticsDataAgent#studio}
  */
  readonly studio?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudio;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bq: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqToTerraform(struct!.bq),
    looker: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerToTerraform(struct!.looker),
    studio: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioToTerraform(struct!.studio),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bq: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqToHclTerraform(struct!.bq),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqList",
    },
    looker: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerToHclTerraform(struct!.looker),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerList",
    },
    studio: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioToHclTerraform(struct!.studio),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bq?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bq = this._bq?.internalValue;
    }
    if (this._looker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.looker = this._looker?.internalValue;
    }
    if (this._studio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.studio = this._studio?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bq.internalValue = undefined;
      this._looker.internalValue = undefined;
      this._studio.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bq.internalValue = value.bq;
      this._looker.internalValue = value.looker;
      this._studio.internalValue = value.studio;
    }
  }

  // bq - computed: false, optional: true, required: false
  private _bq = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference(this, "bq");
  public get bq() {
    return this._bq;
  }
  public putBq(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq) {
    this._bq.internalValue = value;
  }
  public resetBq() {
    this._bq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bqInput() {
    return this._bq.internalValue;
  }

  // looker - computed: false, optional: true, required: false
  private _looker = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerOutputReference(this, "looker");
  public get looker() {
    return this._looker;
  }
  public putLooker(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLooker) {
    this._looker.internalValue = value;
  }
  public resetLooker() {
    this._looker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerInput() {
    return this._looker.internalValue;
  }

  // studio - computed: false, optional: true, required: false
  private _studio = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioOutputReference(this, "studio");
  public get studio() {
    return this._studio;
  }
  public putStudio(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudio) {
    this._studio.internalValue = value;
  }
  public resetStudio() {
    this._studio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioInput() {
    return this._studio.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters {
  /**
  * Required. The data type of the parameter, e.g. "STRING", "INT64", "DATE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#data_type GoogleGeminiDataAnalyticsDataAgent#data_type}
  */
  readonly dataType: string;
  /**
  * Optional. The description of the parameter that can be used by the LLM to extract the parameter value from the user question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Required. The name of the parameter reference in the SQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#name GoogleGeminiDataAnalyticsDataAgent#name}
  */
  readonly name: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_type: cdktn.stringToTerraform(struct!.dataType),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries {
  /**
  * Optional. A natural language question that a user might ask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#natural_language_question GoogleGeminiDataAnalyticsDataAgent#natural_language_question}
  */
  readonly naturalLanguageQuestion?: string;
  /**
  * Optional. The SQL query that should be generated to answer
  * the natural language question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#sql_query GoogleGeminiDataAnalyticsDataAgent#sql_query}
  */
  readonly sqlQuery?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#parameters GoogleGeminiDataAnalyticsDataAgent#parameters}
  */
  readonly parameters?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    natural_language_question: cdktn.stringToTerraform(struct!.naturalLanguageQuestion),
    sql_query: cdktn.stringToTerraform(struct!.sqlQuery),
    parameters: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersToTerraform, true)(struct!.parameters),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    natural_language_question: {
      value: cdktn.stringToHclTerraform(struct!.naturalLanguageQuestion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_query: {
      value: cdktn.stringToHclTerraform(struct!.sqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naturalLanguageQuestion !== undefined) {
      hasAnyValues = true;
      internalValueResult.naturalLanguageQuestion = this._naturalLanguageQuestion;
    }
    if (this._sqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlQuery = this._sqlQuery;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestion = undefined;
      this._sqlQuery = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestion = value.naturalLanguageQuestion;
      this._sqlQuery = value.sqlQuery;
      this._parameters.internalValue = value.parameters;
    }
  }

  // natural_language_question - computed: false, optional: true, required: false
  private _naturalLanguageQuestion?: string; 
  public get naturalLanguageQuestion() {
    return this.getStringAttribute('natural_language_question');
  }
  public set naturalLanguageQuestion(value: string) {
    this._naturalLanguageQuestion = value;
  }
  public resetNaturalLanguageQuestion() {
    this._naturalLanguageQuestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naturalLanguageQuestionInput() {
    return this._naturalLanguageQuestion;
  }

  // sql_query - computed: false, optional: true, required: false
  private _sqlQuery?: string; 
  public get sqlQuery() {
    return this.getStringAttribute('sql_query');
  }
  public set sqlQuery(value: string) {
    this._sqlQuery = value;
  }
  public resetSqlQuery() {
    this._sqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlQueryInput() {
    return this._sqlQuery;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters[] | cdktn.IResolvable) {
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms {
  /**
  * Required. The description or meaning of the term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description: string;
  /**
  * Required. User friendly display name of the glossary term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#display_name GoogleGeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName: string;
  /**
  * Optional. A list of general purpose labels associated with this term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#labels GoogleGeminiDataAnalyticsDataAgent#labels}
  */
  readonly labels?: string[];
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    labels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.labels),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._labels = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._labels = value.labels;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters {
  /**
  * Required. The field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#field GoogleGeminiDataAnalyticsDataAgent#field}
  */
  readonly field: string;
  /**
  * Optional. The value for the field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#value GoogleGeminiDataAnalyticsDataAgent#value}
  */
  readonly value?: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQuery {
  /**
  * Optional. The short alphanumeric identifier for the query, used for share links and Explore URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#client_id GoogleGeminiDataAnalyticsDataAgent#client_id}
  */
  readonly clientId?: string;
  /**
  * Required. The LookML explore used to generate the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#explore GoogleGeminiDataAnalyticsDataAgent#explore}
  */
  readonly explore: string;
  /**
  * Optional. The fields to retrieve from the explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#fields GoogleGeminiDataAnalyticsDataAgent#fields}
  */
  readonly fields?: string[];
  /**
  * Optional. Limit in the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#limit GoogleGeminiDataAnalyticsDataAgent#limit}
  */
  readonly limit?: string;
  /**
  * Required. The LookML model used to generate the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#model GoogleGeminiDataAnalyticsDataAgent#model}
  */
  readonly model: string;
  /**
  * Optional. The primary identifier for the query resource in Looker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#query_id GoogleGeminiDataAnalyticsDataAgent#query_id}
  */
  readonly queryId?: string;
  /**
  * Optional. The sorts to apply to the explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#sorts GoogleGeminiDataAnalyticsDataAgent#sorts}
  */
  readonly sorts?: string[];
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#filters GoogleGeminiDataAnalyticsDataAgent#filters}
  */
  readonly filters?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    explore: cdktn.stringToTerraform(struct!.explore),
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
    limit: cdktn.stringToTerraform(struct!.limit),
    model: cdktn.stringToTerraform(struct!.model),
    query_id: cdktn.stringToTerraform(struct!.queryId),
    sorts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sorts),
    filters: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersToTerraform, true)(struct!.filters),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    explore: {
      value: cdktn.stringToHclTerraform(struct!.explore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    limit: {
      value: cdktn.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_id: {
      value: cdktn.stringToHclTerraform(struct!.queryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sorts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filters: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._explore !== undefined) {
      hasAnyValues = true;
      internalValueResult.explore = this._explore;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    if (this._sorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sorts = this._sorts;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._explore = undefined;
      this._fields = undefined;
      this._limit = undefined;
      this._model = undefined;
      this._queryId = undefined;
      this._sorts = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._explore = value.explore;
      this._fields = value.fields;
      this._limit = value.limit;
      this._model = value.model;
      this._queryId = value.queryId;
      this._sorts = value.sorts;
      this._filters.internalValue = value.filters;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // explore - computed: false, optional: false, required: true
  private _explore?: string; 
  public get explore() {
    return this.getStringAttribute('explore');
  }
  public set explore(value: string) {
    this._explore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exploreInput() {
    return this._explore;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // query_id - computed: false, optional: true, required: false
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  public resetQueryId() {
    this._queryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }

  // sorts - computed: false, optional: true, required: false
  private _sorts?: string[]; 
  public get sorts() {
    return this.getListAttribute('sorts');
  }
  public set sorts(value: string[]) {
    this._sorts = value;
  }
  public resetSorts() {
    this._sorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortsInput() {
    return this._sorts;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries {
  /**
  * Optional. Natural language questions that a user might ask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#natural_language_questions GoogleGeminiDataAnalyticsDataAgent#natural_language_questions}
  */
  readonly naturalLanguageQuestions?: string[];
  /**
  * looker_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#looker_query GoogleGeminiDataAnalyticsDataAgent#looker_query}
  */
  readonly lookerQuery?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQuery;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    natural_language_questions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.naturalLanguageQuestions),
    looker_query: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryToTerraform(struct!.lookerQuery),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    natural_language_questions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.naturalLanguageQuestions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    looker_query: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryToHclTerraform(struct!.lookerQuery),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naturalLanguageQuestions !== undefined) {
      hasAnyValues = true;
      internalValueResult.naturalLanguageQuestions = this._naturalLanguageQuestions;
    }
    if (this._lookerQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerQuery = this._lookerQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestions = undefined;
      this._lookerQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestions = value.naturalLanguageQuestions;
      this._lookerQuery.internalValue = value.lookerQuery;
    }
  }

  // natural_language_questions - computed: false, optional: true, required: false
  private _naturalLanguageQuestions?: string[]; 
  public get naturalLanguageQuestions() {
    return this.getListAttribute('natural_language_questions');
  }
  public set naturalLanguageQuestions(value: string[]) {
    this._naturalLanguageQuestions = value;
  }
  public resetNaturalLanguageQuestions() {
    this._naturalLanguageQuestions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naturalLanguageQuestionsInput() {
    return this._naturalLanguageQuestions;
  }

  // looker_query - computed: false, optional: true, required: false
  private _lookerQuery = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryOutputReference(this, "looker_query");
  public get lookerQuery() {
    return this._lookerQuery;
  }
  public putLookerQuery(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQuery) {
    this._lookerQuery.internalValue = value;
  }
  public resetLookerQuery() {
    this._lookerQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerQueryInput() {
    return this._lookerQuery.internalValue;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython {
  /**
  * Optional. Whether to enable Python analysis. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#enabled GoogleGeminiDataAnalyticsDataAgent#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis {
  /**
  * python block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#python GoogleGeminiDataAnalyticsDataAgent#python}
  */
  readonly python?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    python: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonToTerraform(struct!.python),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    python: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonToHclTerraform(struct!.python),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._python?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.python = this._python?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._python.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._python.internalValue = value.python;
    }
  }

  // python - computed: false, optional: true, required: false
  private _python = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference(this, "python");
  public get python() {
    return this._python;
  }
  public putPython(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython) {
    this._python.internalValue = value;
  }
  public resetPython() {
    this._python.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonInput() {
    return this._python.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource {
  /**
  * Optional. Limits the bytes billed for each BigQuery query job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#big_query_max_billed_bytes GoogleGeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}
  */
  readonly bigQueryMaxBilledBytes?: number;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    big_query_max_billed_bytes: cdktn.numberToTerraform(struct!.bigQueryMaxBilledBytes),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    big_query_max_billed_bytes: {
      value: cdktn.numberToHclTerraform(struct!.bigQueryMaxBilledBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigQueryMaxBilledBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigQueryMaxBilledBytes = this._bigQueryMaxBilledBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigQueryMaxBilledBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigQueryMaxBilledBytes = value.bigQueryMaxBilledBytes;
    }
  }

  // big_query_max_billed_bytes - computed: false, optional: true, required: false
  private _bigQueryMaxBilledBytes?: number; 
  public get bigQueryMaxBilledBytes() {
    return this.getNumberAttribute('big_query_max_billed_bytes');
  }
  public set bigQueryMaxBilledBytes(value: number) {
    this._bigQueryMaxBilledBytes = value;
  }
  public resetBigQueryMaxBilledBytes() {
    this._bigQueryMaxBilledBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryMaxBilledBytesInput() {
    return this._bigQueryMaxBilledBytes;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions {
  /**
  * Optional. The model to use for the agent loop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#model GoogleGeminiDataAnalyticsDataAgent#model}
  */
  readonly model?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#analysis GoogleGeminiDataAnalyticsDataAgent#analysis}
  */
  readonly analysis?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis;
  /**
  * datasource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#datasource GoogleGeminiDataAnalyticsDataAgent#datasource}
  */
  readonly datasource?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    analysis: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisToTerraform(struct!.analysis),
    datasource: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceToTerraform(struct!.datasource),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisList",
    },
    datasource: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceToHclTerraform(struct!.datasource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._datasource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._analysis.internalValue = undefined;
      this._datasource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._analysis.internalValue = value.analysis;
      this._datasource.internalValue = value.datasource;
    }
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // datasource - computed: false, optional: true, required: false
  private _datasource = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference(this, "datasource");
  public get datasource() {
    return this._datasource;
  }
  public putDatasource(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource) {
    this._datasource.internalValue = value;
  }
  public resetDatasource() {
    this._datasource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths {
  /**
  * Required. The ordered list of paths within the table schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#paths GoogleGeminiDataAnalyticsDataAgent#paths}
  */
  readonly paths: string[];
  /**
  * Required. The service-qualified full resource name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#table_fqn GoogleGeminiDataAnalyticsDataAgent#table_fqn}
  */
  readonly tableFqn: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.paths),
    table_fqn: cdktn.stringToTerraform(struct!.tableFqn),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table_fqn: {
      value: cdktn.stringToHclTerraform(struct!.tableFqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._tableFqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFqn = this._tableFqn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paths = undefined;
      this._tableFqn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paths = value.paths;
      this._tableFqn = value.tableFqn;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // table_fqn - computed: false, optional: false, required: true
  private _tableFqn?: string; 
  public get tableFqn() {
    return this.getStringAttribute('table_fqn');
  }
  public set tableFqn(value: string) {
    this._tableFqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFqnInput() {
    return this._tableFqn;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths {
  /**
  * Required. The ordered list of paths within the table schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#paths GoogleGeminiDataAnalyticsDataAgent#paths}
  */
  readonly paths: string[];
  /**
  * Required. The service-qualified full resource name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#table_fqn GoogleGeminiDataAnalyticsDataAgent#table_fqn}
  */
  readonly tableFqn: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.paths),
    table_fqn: cdktn.stringToTerraform(struct!.tableFqn),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table_fqn: {
      value: cdktn.stringToHclTerraform(struct!.tableFqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._tableFqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFqn = this._tableFqn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paths = undefined;
      this._tableFqn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paths = value.paths;
      this._tableFqn = value.tableFqn;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // table_fqn - computed: false, optional: false, required: true
  private _tableFqn?: string; 
  public get tableFqn() {
    return this.getStringAttribute('table_fqn');
  }
  public set tableFqn(value: string) {
    this._tableFqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFqnInput() {
    return this._tableFqn;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships {
  /**
  * Optional. A confidence score for the suggested relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#confidence_score GoogleGeminiDataAnalyticsDataAgent#confidence_score}
  */
  readonly confidenceScore?: number;
  /**
  * Optional. Sources which generated the schema relation edge.
  * Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#sources GoogleGeminiDataAnalyticsDataAgent#sources}
  */
  readonly sources?: string[];
  /**
  * left_schema_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#left_schema_paths GoogleGeminiDataAnalyticsDataAgent#left_schema_paths}
  */
  readonly leftSchemaPaths: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths;
  /**
  * right_schema_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#right_schema_paths GoogleGeminiDataAnalyticsDataAgent#right_schema_paths}
  */
  readonly rightSchemaPaths: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confidence_score: cdktn.numberToTerraform(struct!.confidenceScore),
    sources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sources),
    left_schema_paths: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsToTerraform(struct!.leftSchemaPaths),
    right_schema_paths: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsToTerraform(struct!.rightSchemaPaths),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confidence_score: {
      value: cdktn.numberToHclTerraform(struct!.confidenceScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    left_schema_paths: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsToHclTerraform(struct!.leftSchemaPaths),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsList",
    },
    right_schema_paths: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsToHclTerraform(struct!.rightSchemaPaths),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceScore = this._confidenceScore;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._leftSchemaPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftSchemaPaths = this._leftSchemaPaths?.internalValue;
    }
    if (this._rightSchemaPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightSchemaPaths = this._rightSchemaPaths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidenceScore = undefined;
      this._sources = undefined;
      this._leftSchemaPaths.internalValue = undefined;
      this._rightSchemaPaths.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidenceScore = value.confidenceScore;
      this._sources = value.sources;
      this._leftSchemaPaths.internalValue = value.leftSchemaPaths;
      this._rightSchemaPaths.internalValue = value.rightSchemaPaths;
    }
  }

  // confidence_score - computed: false, optional: true, required: false
  private _confidenceScore?: number; 
  public get confidenceScore() {
    return this.getNumberAttribute('confidence_score');
  }
  public set confidenceScore(value: number) {
    this._confidenceScore = value;
  }
  public resetConfidenceScore() {
    this._confidenceScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceScoreInput() {
    return this._confidenceScore;
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // left_schema_paths - computed: false, optional: false, required: true
  private _leftSchemaPaths = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference(this, "left_schema_paths");
  public get leftSchemaPaths() {
    return this._leftSchemaPaths;
  }
  public putLeftSchemaPaths(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths) {
    this._leftSchemaPaths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftSchemaPathsInput() {
    return this._leftSchemaPaths.internalValue;
  }

  // right_schema_paths - computed: false, optional: false, required: true
  private _rightSchemaPaths = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference(this, "right_schema_paths");
  public get rightSchemaPaths() {
    return this._rightSchemaPaths;
  }
  public putRightSchemaPaths(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths) {
    this._rightSchemaPaths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightSchemaPathsInput() {
    return this._rightSchemaPaths.internalValue;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReference {
  /**
  * Optional. The dataset ID of the routine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#dataset_id GoogleGeminiDataAnalyticsDataAgent#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * Optional. The project ID of the routine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#project_id GoogleGeminiDataAnalyticsDataAgent#project_id}
  */
  readonly projectId?: string;
  /**
  * Optional. The routine ID of the routine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#routine_id GoogleGeminiDataAnalyticsDataAgent#routine_id}
  */
  readonly routineId?: string;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    routine_id: cdktn.stringToTerraform(struct!.routineId),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine_id: {
      value: cdktn.stringToHclTerraform(struct!.routineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._routineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routineId = this._routineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._routineId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._routineId = value.routineId;
    }
  }

  // dataset_id - computed: false, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // routine_id - computed: false, optional: true, required: false
  private _routineId?: string; 
  public get routineId() {
    return this.getStringAttribute('routine_id');
  }
  public set routineId(value: string) {
    this._routineId = value;
  }
  public resetRoutineId() {
    this._routineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineIdInput() {
    return this._routineId;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines {
  /**
  * Optional. User override or addition to description, to tell the agent when to use the UDF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#description GoogleGeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * routine_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#routine_reference GoogleGeminiDataAnalyticsDataAgent#routine_reference}
  */
  readonly routineReference?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReference;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    routine_reference: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceToTerraform(struct!.routineReference),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine_reference: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceToHclTerraform(struct!.routineReference),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._routineReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routineReference = this._routineReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._routineReference.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._routineReference.internalValue = value.routineReference;
    }
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

  // routine_reference - computed: false, optional: true, required: false
  private _routineReference = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceOutputReference(this, "routine_reference");
  public get routineReference() {
    return this._routineReference;
  }
  public putRoutineReference(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReference) {
    this._routineReference.internalValue = value;
  }
  public resetRoutineReference() {
    this._routineReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineReferenceInput() {
    return this._routineReference.internalValue;
  }
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesList extends cdktn.ComplexList {
  public internalValue? : GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines[] | cdktn.IResolvable

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
  public get(index: number): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesOutputReference {
    return new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctions {
  /**
  * bq_routines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#bq_routines GoogleGeminiDataAnalyticsDataAgent#bq_routines}
  */
  readonly bqRoutines?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines[] | cdktn.IResolvable;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bq_routines: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesToTerraform, true)(struct!.bqRoutines),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bq_routines: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesToHclTerraform, true)(struct!.bqRoutines),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bqRoutines?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bqRoutines = this._bqRoutines?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bqRoutines.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bqRoutines.internalValue = value.bqRoutines;
    }
  }

  // bq_routines - computed: false, optional: true, required: false
  private _bqRoutines = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesList(this, "bq_routines", false);
  public get bqRoutines() {
    return this._bqRoutines;
  }
  public putBqRoutines(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines[] | cdktn.IResolvable) {
    this._bqRoutines.internalValue = value;
  }
  public resetBqRoutines() {
    this._bqRoutines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bqRoutinesInput() {
    return this._bqRoutines.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext {
  /**
  * Optional. The basic entry point for data owners creating domain
  * knowledge for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#system_instruction GoogleGeminiDataAnalyticsDataAgent#system_instruction}
  */
  readonly systemInstruction?: string;
  /**
  * datasource_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#datasource_references GoogleGeminiDataAnalyticsDataAgent#datasource_references}
  */
  readonly datasourceReferences: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences;
  /**
  * example_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#example_queries GoogleGeminiDataAnalyticsDataAgent#example_queries}
  */
  readonly exampleQueries?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[] | cdktn.IResolvable;
  /**
  * glossary_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#glossary_terms GoogleGeminiDataAnalyticsDataAgent#glossary_terms}
  */
  readonly glossaryTerms?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[] | cdktn.IResolvable;
  /**
  * looker_golden_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#looker_golden_queries GoogleGeminiDataAnalyticsDataAgent#looker_golden_queries}
  */
  readonly lookerGoldenQueries?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries[] | cdktn.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#options GoogleGeminiDataAnalyticsDataAgent#options}
  */
  readonly options?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions;
  /**
  * schema_relationships block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#schema_relationships GoogleGeminiDataAnalyticsDataAgent#schema_relationships}
  */
  readonly schemaRelationships?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[] | cdktn.IResolvable;
  /**
  * user_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#user_functions GoogleGeminiDataAnalyticsDataAgent#user_functions}
  */
  readonly userFunctions?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctions;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    system_instruction: cdktn.stringToTerraform(struct!.systemInstruction),
    datasource_references: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesToTerraform(struct!.datasourceReferences),
    example_queries: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesToTerraform, true)(struct!.exampleQueries),
    glossary_terms: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsToTerraform, true)(struct!.glossaryTerms),
    looker_golden_queries: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesToTerraform, true)(struct!.lookerGoldenQueries),
    options: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsToTerraform(struct!.options),
    schema_relationships: cdktn.listMapper(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsToTerraform, true)(struct!.schemaRelationships),
    user_functions: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsToTerraform(struct!.userFunctions),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    system_instruction: {
      value: cdktn.stringToHclTerraform(struct!.systemInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasource_references: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesToHclTerraform(struct!.datasourceReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesList",
    },
    example_queries: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesToHclTerraform, true)(struct!.exampleQueries),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList",
    },
    glossary_terms: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsToHclTerraform, true)(struct!.glossaryTerms),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList",
    },
    looker_golden_queries: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesToHclTerraform, true)(struct!.lookerGoldenQueries),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesList",
    },
    options: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsList",
    },
    schema_relationships: {
      value: cdktn.listMapperHcl(googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsToHclTerraform, true)(struct!.schemaRelationships),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList",
    },
    user_functions: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsToHclTerraform(struct!.userFunctions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemInstruction = this._systemInstruction;
    }
    if (this._datasourceReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceReferences = this._datasourceReferences?.internalValue;
    }
    if (this._exampleQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exampleQueries = this._exampleQueries?.internalValue;
    }
    if (this._glossaryTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glossaryTerms = this._glossaryTerms?.internalValue;
    }
    if (this._lookerGoldenQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerGoldenQueries = this._lookerGoldenQueries?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._schemaRelationships?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRelationships = this._schemaRelationships?.internalValue;
    }
    if (this._userFunctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFunctions = this._userFunctions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._systemInstruction = undefined;
      this._datasourceReferences.internalValue = undefined;
      this._exampleQueries.internalValue = undefined;
      this._glossaryTerms.internalValue = undefined;
      this._lookerGoldenQueries.internalValue = undefined;
      this._options.internalValue = undefined;
      this._schemaRelationships.internalValue = undefined;
      this._userFunctions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemInstruction = value.systemInstruction;
      this._datasourceReferences.internalValue = value.datasourceReferences;
      this._exampleQueries.internalValue = value.exampleQueries;
      this._glossaryTerms.internalValue = value.glossaryTerms;
      this._lookerGoldenQueries.internalValue = value.lookerGoldenQueries;
      this._options.internalValue = value.options;
      this._schemaRelationships.internalValue = value.schemaRelationships;
      this._userFunctions.internalValue = value.userFunctions;
    }
  }

  // system_instruction - computed: false, optional: true, required: false
  private _systemInstruction?: string; 
  public get systemInstruction() {
    return this.getStringAttribute('system_instruction');
  }
  public set systemInstruction(value: string) {
    this._systemInstruction = value;
  }
  public resetSystemInstruction() {
    this._systemInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemInstructionInput() {
    return this._systemInstruction;
  }

  // datasource_references - computed: false, optional: false, required: true
  private _datasourceReferences = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference(this, "datasource_references");
  public get datasourceReferences() {
    return this._datasourceReferences;
  }
  public putDatasourceReferences(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences) {
    this._datasourceReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceReferencesInput() {
    return this._datasourceReferences.internalValue;
  }

  // example_queries - computed: false, optional: true, required: false
  private _exampleQueries = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList(this, "example_queries", false);
  public get exampleQueries() {
    return this._exampleQueries;
  }
  public putExampleQueries(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[] | cdktn.IResolvable) {
    this._exampleQueries.internalValue = value;
  }
  public resetExampleQueries() {
    this._exampleQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleQueriesInput() {
    return this._exampleQueries.internalValue;
  }

  // glossary_terms - computed: false, optional: true, required: false
  private _glossaryTerms = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList(this, "glossary_terms", false);
  public get glossaryTerms() {
    return this._glossaryTerms;
  }
  public putGlossaryTerms(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[] | cdktn.IResolvable) {
    this._glossaryTerms.internalValue = value;
  }
  public resetGlossaryTerms() {
    this._glossaryTerms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glossaryTermsInput() {
    return this._glossaryTerms.internalValue;
  }

  // looker_golden_queries - computed: false, optional: true, required: false
  private _lookerGoldenQueries = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesList(this, "looker_golden_queries", false);
  public get lookerGoldenQueries() {
    return this._lookerGoldenQueries;
  }
  public putLookerGoldenQueries(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries[] | cdktn.IResolvable) {
    this._lookerGoldenQueries.internalValue = value;
  }
  public resetLookerGoldenQueries() {
    this._lookerGoldenQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerGoldenQueriesInput() {
    return this._lookerGoldenQueries.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // schema_relationships - computed: false, optional: true, required: false
  private _schemaRelationships = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList(this, "schema_relationships", false);
  public get schemaRelationships() {
    return this._schemaRelationships;
  }
  public putSchemaRelationships(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[] | cdktn.IResolvable) {
    this._schemaRelationships.internalValue = value;
  }
  public resetSchemaRelationships() {
    this._schemaRelationships.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRelationshipsInput() {
    return this._schemaRelationships.internalValue;
  }

  // user_functions - computed: false, optional: true, required: false
  private _userFunctions = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsOutputReference(this, "user_functions");
  public get userFunctions() {
    return this._userFunctions;
  }
  public putUserFunctions(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctions) {
    this._userFunctions.internalValue = value;
  }
  public resetUserFunctions() {
    this._userFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFunctionsInput() {
    return this._userFunctions.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgent {
  /**
  * published_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#published_context GoogleGeminiDataAnalyticsDataAgent#published_context}
  */
  readonly publishedContext?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext;
  /**
  * staging_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#staging_context GoogleGeminiDataAnalyticsDataAgent#staging_context}
  */
  readonly stagingContext?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext;
}

export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    published_context: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextToTerraform(struct!.publishedContext),
    staging_context: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextToTerraform(struct!.stagingContext),
  }
}


export function googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference | GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    published_context: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextToHclTerraform(struct!.publishedContext),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextList",
    },
    staging_context: {
      value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextToHclTerraform(struct!.stagingContext),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publishedContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishedContext = this._publishedContext?.internalValue;
    }
    if (this._stagingContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingContext = this._stagingContext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publishedContext.internalValue = undefined;
      this._stagingContext.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publishedContext.internalValue = value.publishedContext;
      this._stagingContext.internalValue = value.stagingContext;
    }
  }

  // last_published_context - computed: true, optional: false, required: false
  private _lastPublishedContext = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList(this, "last_published_context", false);
  public get lastPublishedContext() {
    return this._lastPublishedContext;
  }

  // published_context - computed: false, optional: true, required: false
  private _publishedContext = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference(this, "published_context");
  public get publishedContext() {
    return this._publishedContext;
  }
  public putPublishedContext(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext) {
    this._publishedContext.internalValue = value;
  }
  public resetPublishedContext() {
    this._publishedContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedContextInput() {
    return this._publishedContext.internalValue;
  }

  // staging_context - computed: false, optional: true, required: false
  private _stagingContext = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference(this, "staging_context");
  public get stagingContext() {
    return this._stagingContext;
  }
  public putStagingContext(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext) {
    this._stagingContext.internalValue = value;
  }
  public resetStagingContext() {
    this._stagingContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingContextInput() {
    return this._stagingContext.internalValue;
  }
}
export interface GoogleGeminiDataAnalyticsDataAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#create GoogleGeminiDataAnalyticsDataAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#delete GoogleGeminiDataAnalyticsDataAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#update GoogleGeminiDataAnalyticsDataAgent#update}
  */
  readonly update?: string;
}

export function googleGeminiDataAnalyticsDataAgentTimeoutsToTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentTimeouts | cdktn.IResolvable): any {
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


export function googleGeminiDataAnalyticsDataAgentTimeoutsToHclTerraform(struct?: GoogleGeminiDataAnalyticsDataAgentTimeouts | cdktn.IResolvable): any {
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

export class GoogleGeminiDataAnalyticsDataAgentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleGeminiDataAnalyticsDataAgentTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleGeminiDataAnalyticsDataAgentTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent google_gemini_data_analytics_data_agent}
*/
export class GoogleGeminiDataAnalyticsDataAgent extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gemini_data_analytics_data_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleGeminiDataAnalyticsDataAgent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleGeminiDataAnalyticsDataAgent to import
  * @param importFromId The id of the existing GoogleGeminiDataAnalyticsDataAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleGeminiDataAnalyticsDataAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_gemini_data_analytics_data_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent google_gemini_data_analytics_data_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleGeminiDataAnalyticsDataAgentConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleGeminiDataAnalyticsDataAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gemini_data_analytics_data_agent',
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
    this._dataAgentId = config.dataAgentId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._kmsKey = config.kmsKey;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._dataAnalyticsAgent.internalValue = config.dataAnalyticsAgent;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_agent_id - computed: false, optional: false, required: true
  private _dataAgentId?: string; 
  public get dataAgentId() {
    return this.getStringAttribute('data_agent_id');
  }
  public set dataAgentId(value: string) {
    this._dataAgentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAgentIdInput() {
    return this._dataAgentId;
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
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

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
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

  // purge_time - computed: true, optional: false, required: false
  public get purgeTime() {
    return this.getStringAttribute('purge_time');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // data_analytics_agent - computed: false, optional: true, required: false
  private _dataAnalyticsAgent = new GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference(this, "data_analytics_agent");
  public get dataAnalyticsAgent() {
    return this._dataAnalyticsAgent;
  }
  public putDataAnalyticsAgent(value: GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgent) {
    this._dataAnalyticsAgent.internalValue = value;
  }
  public resetDataAnalyticsAgent() {
    this._dataAnalyticsAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAnalyticsAgentInput() {
    return this._dataAnalyticsAgent.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleGeminiDataAnalyticsDataAgentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleGeminiDataAnalyticsDataAgentTimeouts) {
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
      data_agent_id: cdktn.stringToTerraform(this._dataAgentId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      kms_key: cdktn.stringToTerraform(this._kmsKey),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      data_analytics_agent: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentToTerraform(this._dataAnalyticsAgent.internalValue),
      timeouts: googleGeminiDataAnalyticsDataAgentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_agent_id: {
        value: cdktn.stringToHclTerraform(this._dataAgentId),
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
      kms_key: {
        value: cdktn.stringToHclTerraform(this._kmsKey),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_analytics_agent: {
        value: googleGeminiDataAnalyticsDataAgentDataAnalyticsAgentToHclTerraform(this._dataAnalyticsAgent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGeminiDataAnalyticsDataAgentDataAnalyticsAgentList",
      },
      timeouts: {
        value: googleGeminiDataAnalyticsDataAgentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleGeminiDataAnalyticsDataAgentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
