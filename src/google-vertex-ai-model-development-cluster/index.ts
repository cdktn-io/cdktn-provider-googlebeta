/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleVertexAiModelDevelopmentClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#deletion_policy GoogleVertexAiModelDevelopmentCluster#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The display name of the ModelDevelopmentCluster.
  * The name can be up to 128 characters long and can consist of any UTF-8
  * characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#display_name GoogleVertexAiModelDevelopmentCluster#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels with user-defined metadata to organize PersistentResource.
  * 
  * Label keys and values can be no longer than 64 characters
  * (Unicode codepoints), can only contain lowercase letters, numeric
  * characters, underscores and dashes. International characters are allowed.
  * 
  * See https://goo.gl/xmQnxf for more information and examples of labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#labels GoogleVertexAiModelDevelopmentCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The ID to use for the cluster, which is the final component
  * of the ModelDevelopmentCluster's resource name.
  * 
  * This value should be 1-10 characters, and valid characters
  * are '/^[a-z]([a-z0-9-]{0,8}[a-z0-9])?$/'. When using 'slurm_spec',
  * hyphens are not allowed ('/^[a-z][a-z0-9]{0,9}$/').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#model_development_cluster_id GoogleVertexAiModelDevelopmentCluster#model_development_cluster_id}
  */
  readonly modelDevelopmentClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#project GoogleVertexAiModelDevelopmentCluster#project}
  */
  readonly project?: string;
  /**
  * The region of the ModelDevelopmentCluster. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#region GoogleVertexAiModelDevelopmentCluster#region}
  */
  readonly region?: string;
  /**
  * lustre_export_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#lustre_export_config GoogleVertexAiModelDevelopmentCluster#lustre_export_config}
  */
  readonly lustreExportConfig?: GoogleVertexAiModelDevelopmentClusterLustreExportConfig;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#network GoogleVertexAiModelDevelopmentCluster#network}
  */
  readonly network?: GoogleVertexAiModelDevelopmentClusterNetwork;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#node_pools GoogleVertexAiModelDevelopmentCluster#node_pools}
  */
  readonly nodePools: GoogleVertexAiModelDevelopmentClusterNodePools[] | cdktn.IResolvable;
  /**
  * orchestrator_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#orchestrator_spec GoogleVertexAiModelDevelopmentCluster#orchestrator_spec}
  */
  readonly orchestratorSpec: GoogleVertexAiModelDevelopmentClusterOrchestratorSpec;
  /**
  * runtime_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#runtime_spec GoogleVertexAiModelDevelopmentCluster#runtime_spec}
  */
  readonly runtimeSpec?: GoogleVertexAiModelDevelopmentClusterRuntimeSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#timeouts GoogleVertexAiModelDevelopmentCluster#timeouts}
  */
  readonly timeouts?: GoogleVertexAiModelDevelopmentClusterTimeouts;
}
export interface GoogleVertexAiModelDevelopmentClusterClusterEvents {
}

export function googleVertexAiModelDevelopmentClusterClusterEventsToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterClusterEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiModelDevelopmentClusterClusterEventsToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterClusterEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterClusterEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterClusterEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_message - computed: true, optional: false, required: false
  public get eventMessage() {
    return this.getStringAttribute('event_message');
  }

  // event_time - computed: true, optional: false, required: false
  public get eventTime() {
    return this.getStringAttribute('event_time');
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
}

export class GoogleVertexAiModelDevelopmentClusterClusterEventsList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference {
    return new GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiModelDevelopmentClusterClusterStatusError {
}

export function googleVertexAiModelDevelopmentClusterClusterStatusErrorToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterClusterStatusError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiModelDevelopmentClusterClusterStatusErrorToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterClusterStatusError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterClusterStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterClusterStatusError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktn.StringMapList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference {
    return new GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost {
}

export function googleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // subblock_id - computed: true, optional: false, required: false
  public get subblockId() {
    return this.getStringAttribute('subblock_id');
  }
}

export class GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference {
    return new GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus {
}

export function googleVertexAiModelDevelopmentClusterClusterStatusNodesStatusToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiModelDevelopmentClusterClusterStatusNodesStatusToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // detail - computed: true, optional: false, required: false
  public get detail() {
    return this.getStringAttribute('detail');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // node_pool_id - computed: true, optional: false, required: false
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }

  // node_pool_type - computed: true, optional: false, required: false
  public get nodePoolType() {
    return this.getStringAttribute('node_pool_type');
  }

  // node_state - computed: true, optional: false, required: false
  public get nodeState() {
    return this.getStringAttribute('node_state');
  }

  // physical_host - computed: true, optional: false, required: false
  private _physicalHost = new GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList(this, "physical_host", false);
  public get physicalHost() {
    return this._physicalHost;
  }
}

export class GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference {
    return new GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiModelDevelopmentClusterClusterStatus {
}

export function googleVertexAiModelDevelopmentClusterClusterStatusToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterClusterStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiModelDevelopmentClusterClusterStatusToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterClusterStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterClusterStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterClusterStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detail - computed: true, optional: false, required: false
  public get detail() {
    return this.getStringAttribute('detail');
  }

  // error - computed: true, optional: false, required: false
  private _error = new GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // nodes_status - computed: true, optional: false, required: false
  private _nodesStatus = new GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList(this, "nodes_status", false);
  public get nodesStatus() {
    return this._nodesStatus;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleVertexAiModelDevelopmentClusterClusterStatusList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference {
    return new GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec {
}

export function googleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // worker_node_count - computed: true, optional: false, required: false
  public get workerNodeCount() {
    return this.getNumberAttribute('worker_node_count');
  }

  // worker_node_pool_id - computed: true, optional: false, required: false
  public get workerNodePoolId() {
    return this.getStringAttribute('worker_node_pool_id');
  }
}

export class GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference {
    return new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus {
}

export function googleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detail - computed: true, optional: false, required: false
  public get detail() {
    return this.getStringAttribute('detail');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new cdktn.StringMap(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference {
    return new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices {
}

export function googleVertexAiModelDevelopmentClusterRuntimeTrainingServicesToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiModelDevelopmentClusterRuntimeTrainingServicesToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deployment_spec - computed: true, optional: false, required: false
  private _deploymentSpec = new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList(this, "deployment_spec", false);
  public get deploymentSpec() {
    return this._deploymentSpec;
  }

  // gcs_bucket - computed: true, optional: false, required: false
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
  }

  // image_uri - computed: true, optional: false, required: false
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service_status - computed: true, optional: false, required: false
  private _serviceStatus = new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList(this, "service_status", false);
  public get serviceStatus() {
    return this._serviceStatus;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference {
    return new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError {
}

export function googleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktn.StringMapList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference {
    return new GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiModelDevelopmentClusterRuntimeXmanager {
}

export function googleVertexAiModelDevelopmentClusterRuntimeXmanagerToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterRuntimeXmanager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiModelDevelopmentClusterRuntimeXmanagerToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterRuntimeXmanager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterRuntimeXmanager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterRuntimeXmanager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_endpoint - computed: true, optional: false, required: false
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }

  // error - computed: true, optional: false, required: false
  private _error = new GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // ui_endpoint - computed: true, optional: false, required: false
  public get uiEndpoint() {
    return this.getStringAttribute('ui_endpoint');
  }
}

export class GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference {
    return new GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiModelDevelopmentClusterRuntime {
}

export function googleVertexAiModelDevelopmentClusterRuntimeToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterRuntime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiModelDevelopmentClusterRuntimeToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterRuntime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // training_services - computed: true, optional: false, required: false
  private _trainingServices = new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList(this, "training_services", false);
  public get trainingServices() {
    return this._trainingServices;
  }

  // xmanager - computed: true, optional: false, required: false
  private _xmanager = new GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList(this, "xmanager", false);
  public get xmanager() {
    return this._xmanager;
  }
}

export class GoogleVertexAiModelDevelopmentClusterRuntimeList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference {
    return new GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime {
  /**
  * Hours of a day in 24 hour format. Must be greater than or equal to 0 and
  * typically must be less than or equal to 23. An API may choose to allow the
  * value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#hours GoogleVertexAiModelDevelopmentCluster#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of an hour. Must be greater than or equal to 0 and less than or
  * equal to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#minutes GoogleVertexAiModelDevelopmentCluster#minutes}
  */
  readonly minutes?: number;
}

export function googleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference | GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function googleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference | GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hours: {
      value: cdktn.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface GoogleVertexAiModelDevelopmentClusterLustreExportConfig {
  /**
  * Days of the week on which a backup runs, each at most once and
  * none of them DAY_OF_WEEK_UNSPECIFIED. If empty, a backup runs every day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#days_of_week GoogleVertexAiModelDevelopmentCluster#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * The Cloud Storage bucket that backups are written to, without
  * the "gs://" scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#destination_bucket GoogleVertexAiModelDevelopmentCluster#destination_bucket}
  */
  readonly destinationBucket: string;
  /**
  * The Managed Lustre instances to back up, each named as
  * "projects/{project}/locations/{zone}/instances/{instance}". Every entry
  * must be attached to one of the cluster's node pools, and no entry may
  * repeat. If empty, every attached instance is backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#lustres GoogleVertexAiModelDevelopmentCluster#lustres}
  */
  readonly lustres?: string[];
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#start_time GoogleVertexAiModelDevelopmentCluster#start_time}
  */
  readonly startTime?: GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime;
}

export function googleVertexAiModelDevelopmentClusterLustreExportConfigToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference | GoogleVertexAiModelDevelopmentClusterLustreExportConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_of_week: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.daysOfWeek),
    destination_bucket: cdktn.stringToTerraform(struct!.destinationBucket),
    lustres: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lustres),
    start_time: googleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeToTerraform(struct!.startTime),
  }
}


export function googleVertexAiModelDevelopmentClusterLustreExportConfigToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference | GoogleVertexAiModelDevelopmentClusterLustreExportConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days_of_week: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_bucket: {
      value: cdktn.stringToHclTerraform(struct!.destinationBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lustres: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lustres),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    start_time: {
      value: googleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterLustreExportConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._destinationBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationBucket = this._destinationBucket;
    }
    if (this._lustres !== undefined) {
      hasAnyValues = true;
      internalValueResult.lustres = this._lustres;
    }
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterLustreExportConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
      this._destinationBucket = undefined;
      this._lustres = undefined;
      this._startTime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
      this._destinationBucket = value.destinationBucket;
      this._lustres = value.lustres;
      this._startTime.internalValue = value.startTime;
    }
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // destination_bucket - computed: false, optional: false, required: true
  private _destinationBucket?: string; 
  public get destinationBucket() {
    return this.getStringAttribute('destination_bucket');
  }
  public set destinationBucket(value: string) {
    this._destinationBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationBucketInput() {
    return this._destinationBucket;
  }

  // lustres - computed: false, optional: true, required: false
  private _lustres?: string[]; 
  public get lustres() {
    return this.getListAttribute('lustres');
  }
  public set lustres(value: string[]) {
    this._lustres = value;
  }
  public resetLustres() {
    this._lustres = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lustresInput() {
    return this._lustres;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime = new GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime) {
    this._startTime.internalValue = value;
  }
  public resetStartTime() {
    this._startTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }
}
export interface GoogleVertexAiModelDevelopmentClusterNetwork {
  /**
  * The name of the VPC network where to create the cluster.
  * The 'default' network is used if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#network GoogleVertexAiModelDevelopmentCluster#network}
  */
  readonly network: string;
  /**
  * The name of the subnetwork in the above network to create the cluster.
  * If not specified:
  * * for auto mode VPC, the subnet in corresponding region is auto-selected;
  * * for custom mode VPC, a new subnet will be automatically created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#subnetwork GoogleVertexAiModelDevelopmentCluster#subnetwork}
  */
  readonly subnetwork?: string;
}

export function googleVertexAiModelDevelopmentClusterNetworkToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterNetworkOutputReference | GoogleVertexAiModelDevelopmentClusterNetwork): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network: cdktn.stringToTerraform(struct!.network),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
  }
}


export function googleVertexAiModelDevelopmentClusterNetworkToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterNetworkOutputReference | GoogleVertexAiModelDevelopmentClusterNetwork): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktn.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiModelDevelopmentClusterNetworkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network = undefined;
      this._subnetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network = value.network;
      this._subnetwork = value.subnetwork;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}
export interface GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk {
  /**
  * Size in GB of the boot disk (default is 100GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#boot_disk_size_gb GoogleVertexAiModelDevelopmentCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * Type of the boot disk. For non-A3U machines, the default value is
  * "pd-ssd", for A3U machines, the default value is "hyperdisk-balanced".
  * Valid values: "pd-ssd" (Persistent Disk Solid State Drive),
  * "pd-standard" (Persistent Disk Hard Disk Drive) or "hyperdisk-balanced".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#boot_disk_type GoogleVertexAiModelDevelopmentCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
}

export function googleVertexAiModelDevelopmentClusterNodePoolsBootDiskToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference | GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boot_disk_size_gb: cdktn.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktn.stringToTerraform(struct!.bootDiskType),
  }
}


export function googleVertexAiModelDevelopmentClusterNodePoolsBootDiskToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference | GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boot_disk_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_type: {
      value: cdktn.stringToHclTerraform(struct!.bootDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
    }
  }

  // boot_disk_size_gb - computed: true, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: true, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }
}
export interface GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity {
  /**
  * Specifies the reservation affinity type.
  * Possible values:
  * NO_RESERVATION
  * ANY_RESERVATION
  * SPECIFIC_RESERVATION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#reservation_affinity_type GoogleVertexAiModelDevelopmentCluster#reservation_affinity_type}
  */
  readonly reservationAffinityType: string;
  /**
  * Corresponds to the label values of a reservation resource. This must be the
  * resource name of the reservation, reservation block, or reservation sub-
  * block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#values GoogleVertexAiModelDevelopmentCluster#values}
  */
  readonly values?: string[];
}

export function googleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference | GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reservation_affinity_type: cdktn.stringToTerraform(struct!.reservationAffinityType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function googleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference | GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reservation_affinity_type: {
      value: cdktn.stringToHclTerraform(struct!.reservationAffinityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reservationAffinityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinityType = this._reservationAffinityType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reservationAffinityType = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reservationAffinityType = value.reservationAffinityType;
      this._values = value.values;
    }
  }

  // reservation_affinity_type - computed: false, optional: false, required: true
  private _reservationAffinityType?: string; 
  public get reservationAffinityType() {
    return this.getStringAttribute('reservation_affinity_type');
  }
  public set reservationAffinityType(value: string) {
    this._reservationAffinityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityTypeInput() {
    return this._reservationAffinityType;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec {
  /**
  * The type of the machine.
  * 
  * See the [list of machine types supported for
  * prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)
  * 
  * See the [list of machine types supported for custom
  * training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).
  * 
  * For DeployedModel this field is optional, and the default
  * value is 'n1-standard-2'. For BatchPredictionJob or as part of
  * WorkerPoolSpec this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#machine_type GoogleVertexAiModelDevelopmentCluster#machine_type}
  */
  readonly machineType: string;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#reservation_affinity GoogleVertexAiModelDevelopmentCluster#reservation_affinity}
  */
  readonly reservationAffinity?: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity;
}

export function googleVertexAiModelDevelopmentClusterNodePoolsMachineSpecToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference | GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    machine_type: cdktn.stringToTerraform(struct!.machineType),
    reservation_affinity: googleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityToTerraform(struct!.reservationAffinity),
  }
}


export function googleVertexAiModelDevelopmentClusterNodePoolsMachineSpecToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference | GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    machine_type: {
      value: cdktn.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reservation_affinity: {
      value: googleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineType = undefined;
      this._reservationAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineType = value.machineType;
      this._reservationAffinity.internalValue = value.reservationAffinity;
    }
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }
}
export interface GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec {
  /**
  * maximum size of the node pool,
  * must be ≥ min_node_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#max_node_count GoogleVertexAiModelDevelopmentCluster#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * minimum size of the node pool,
  * must be >= 0 and <= max_node_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#min_node_count GoogleVertexAiModelDevelopmentCluster#min_node_count}
  */
  readonly minNodeCount?: number;
}

export function googleVertexAiModelDevelopmentClusterNodePoolsScalingSpecToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference | GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_node_count: cdktn.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktn.numberToTerraform(struct!.minNodeCount),
  }
}


export function googleVertexAiModelDevelopmentClusterNodePoolsScalingSpecToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference | GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_node_count: {
      value: cdktn.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktn.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
    }
  }

  // max_node_count - computed: false, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: true, required: false
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  public resetMinNodeCount() {
    this._minNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }
}
export interface GoogleVertexAiModelDevelopmentClusterNodePools {
  /**
  * Whether to enable public IPs for the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#enable_public_ips GoogleVertexAiModelDevelopmentCluster#enable_public_ips}
  */
  readonly enablePublicIps?: boolean | cdktn.IResolvable;
  /**
  * List of the existing Filestore instances to be mounted.
  * For example:
  * if "projects/my-project/locations/us-central1-a/instances/my-instance" is
  * specified, the instance will be mounted to the node pool under the path
  * "mnt/filestore/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#filestores GoogleVertexAiModelDevelopmentCluster#filestores}
  */
  readonly filestores?: string[];
  /**
  * The maximum duration for instances in this node pool.
  * This field is only applicable when 'provisioning_model' is set to
  * 'FLEX_START'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#flex_start_max_duration GoogleVertexAiModelDevelopmentCluster#flex_start_max_duration}
  */
  readonly flexStartMaxDuration?: string;
  /**
  * The unique ID referring to this node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The labels with user-defined metadata to organize the node pool. These
  * labels are applied to the underlying compute resources (for example, the
  * VM instances) of the node pool, so they appear in billing exports and
  * Cloud Monitoring filters.
  * 
  * Label keys and values can be no longer than 64 characters
  * (Unicode codepoints), can only contain lowercase letters, numeric
  * characters, underscores and dashes. International characters are allowed.
  * 
  * See https://goo.gl/xmQnxf for more information and examples of labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#labels GoogleVertexAiModelDevelopmentCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * List of the existing Google Managed Lustre instances to be mounted.
  * Similar to the filestores, the instance will be mounted to the node pool
  * under the path "/mnt/lustre/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#lustres GoogleVertexAiModelDevelopmentCluster#lustres}
  */
  readonly lustres?: string[];
  /**
  * The node image to be used for the VMs in the node pool.
  * In format of "projects//global/images/" or
  * "projects/test-project/global/images/family/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#node_image GoogleVertexAiModelDevelopmentCluster#node_image}
  */
  readonly nodeImage?: string;
  /**
  * Specifies the provisioning model for the node pool.
  * 
  * Behavior for 'PROVISIONING_MODEL_UNSPECIFIED':
  * - For CPU node pools: Defaults to 'ON_DEMAND'.
  * - For GPU node pools:
  * - If
  * 'machine_spec.reservation_affinity'
  * is set, it defaults to 'RESERVATION'.
  * - If
  * 'machine_spec.reservation_affinity'
  * is NOT set, this is an INVALID state and the request will be rejected.
  * An explicit 'provisioning_model' must be provided.
  * 
  * ## Constraints:
  * 
  * 'machine_spec.reservation_affinity'
  * must not be set if 'provisioning_model' is 'ON_DEMAND', 'SPOT' or
  * ## 'FLEX_START'.
  * 
  * 'machine_spec.reservation_affinity'
  * must be set if 'provisioning_model' is 'RESERVATION'.
  * Possible values:
  * ON_DEMAND
  * RESERVATION
  * SPOT
  * FLEX_START
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#provisioning_model GoogleVertexAiModelDevelopmentCluster#provisioning_model}
  */
  readonly provisioningModel?: string;
  /**
  * Startup script for the node pool instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#startup_script GoogleVertexAiModelDevelopmentCluster#startup_script}
  */
  readonly startupScript?: string;
  /**
  * The zone of the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#zone GoogleVertexAiModelDevelopmentCluster#zone}
  */
  readonly zone?: string;
  /**
  * boot_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#boot_disk GoogleVertexAiModelDevelopmentCluster#boot_disk}
  */
  readonly bootDisk?: GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk;
  /**
  * machine_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#machine_spec GoogleVertexAiModelDevelopmentCluster#machine_spec}
  */
  readonly machineSpec: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec;
  /**
  * scaling_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#scaling_spec GoogleVertexAiModelDevelopmentCluster#scaling_spec}
  */
  readonly scalingSpec?: GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec;
}

export function googleVertexAiModelDevelopmentClusterNodePoolsToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterNodePools | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_public_ips: cdktn.booleanToTerraform(struct!.enablePublicIps),
    filestores: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.filestores),
    flex_start_max_duration: cdktn.stringToTerraform(struct!.flexStartMaxDuration),
    id: cdktn.stringToTerraform(struct!.id),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
    lustres: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lustres),
    node_image: cdktn.stringToTerraform(struct!.nodeImage),
    provisioning_model: cdktn.stringToTerraform(struct!.provisioningModel),
    startup_script: cdktn.stringToTerraform(struct!.startupScript),
    zone: cdktn.stringToTerraform(struct!.zone),
    boot_disk: googleVertexAiModelDevelopmentClusterNodePoolsBootDiskToTerraform(struct!.bootDisk),
    machine_spec: googleVertexAiModelDevelopmentClusterNodePoolsMachineSpecToTerraform(struct!.machineSpec),
    scaling_spec: googleVertexAiModelDevelopmentClusterNodePoolsScalingSpecToTerraform(struct!.scalingSpec),
  }
}


export function googleVertexAiModelDevelopmentClusterNodePoolsToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterNodePools | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_public_ips: {
      value: cdktn.booleanToHclTerraform(struct!.enablePublicIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filestores: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.filestores),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    flex_start_max_duration: {
      value: cdktn.stringToHclTerraform(struct!.flexStartMaxDuration),
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
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    lustres: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lustres),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_image: {
      value: cdktn.stringToHclTerraform(struct!.nodeImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioning_model: {
      value: cdktn.stringToHclTerraform(struct!.provisioningModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startup_script: {
      value: cdktn.stringToHclTerraform(struct!.startupScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktn.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_disk: {
      value: googleVertexAiModelDevelopmentClusterNodePoolsBootDiskToHclTerraform(struct!.bootDisk),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskList",
    },
    machine_spec: {
      value: googleVertexAiModelDevelopmentClusterNodePoolsMachineSpecToHclTerraform(struct!.machineSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecList",
    },
    scaling_spec: {
      value: googleVertexAiModelDevelopmentClusterNodePoolsScalingSpecToHclTerraform(struct!.scalingSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterNodePools | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePublicIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePublicIps = this._enablePublicIps;
    }
    if (this._filestores !== undefined) {
      hasAnyValues = true;
      internalValueResult.filestores = this._filestores;
    }
    if (this._flexStartMaxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexStartMaxDuration = this._flexStartMaxDuration;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._lustres !== undefined) {
      hasAnyValues = true;
      internalValueResult.lustres = this._lustres;
    }
    if (this._nodeImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeImage = this._nodeImage;
    }
    if (this._provisioningModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningModel = this._provisioningModel;
    }
    if (this._startupScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupScript = this._startupScript;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._bootDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDisk = this._bootDisk?.internalValue;
    }
    if (this._machineSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineSpec = this._machineSpec?.internalValue;
    }
    if (this._scalingSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingSpec = this._scalingSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterNodePools | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enablePublicIps = undefined;
      this._filestores = undefined;
      this._flexStartMaxDuration = undefined;
      this._id = undefined;
      this._labels = undefined;
      this._lustres = undefined;
      this._nodeImage = undefined;
      this._provisioningModel = undefined;
      this._startupScript = undefined;
      this._zone = undefined;
      this._bootDisk.internalValue = undefined;
      this._machineSpec.internalValue = undefined;
      this._scalingSpec.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enablePublicIps = value.enablePublicIps;
      this._filestores = value.filestores;
      this._flexStartMaxDuration = value.flexStartMaxDuration;
      this._id = value.id;
      this._labels = value.labels;
      this._lustres = value.lustres;
      this._nodeImage = value.nodeImage;
      this._provisioningModel = value.provisioningModel;
      this._startupScript = value.startupScript;
      this._zone = value.zone;
      this._bootDisk.internalValue = value.bootDisk;
      this._machineSpec.internalValue = value.machineSpec;
      this._scalingSpec.internalValue = value.scalingSpec;
    }
  }

  // effective_flex_start_max_duration - computed: true, optional: false, required: false
  public get effectiveFlexStartMaxDuration() {
    return this.getStringAttribute('effective_flex_start_max_duration');
  }

  // enable_public_ips - computed: false, optional: true, required: false
  private _enablePublicIps?: boolean | cdktn.IResolvable; 
  public get enablePublicIps() {
    return this.getBooleanAttribute('enable_public_ips');
  }
  public set enablePublicIps(value: boolean | cdktn.IResolvable) {
    this._enablePublicIps = value;
  }
  public resetEnablePublicIps() {
    this._enablePublicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicIpsInput() {
    return this._enablePublicIps;
  }

  // filestores - computed: false, optional: true, required: false
  private _filestores?: string[]; 
  public get filestores() {
    return this.getListAttribute('filestores');
  }
  public set filestores(value: string[]) {
    this._filestores = value;
  }
  public resetFilestores() {
    this._filestores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filestoresInput() {
    return this._filestores;
  }

  // flex_start_max_duration - computed: false, optional: true, required: false
  private _flexStartMaxDuration?: string; 
  public get flexStartMaxDuration() {
    return this.getStringAttribute('flex_start_max_duration');
  }
  public set flexStartMaxDuration(value: string) {
    this._flexStartMaxDuration = value;
  }
  public resetFlexStartMaxDuration() {
    this._flexStartMaxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexStartMaxDurationInput() {
    return this._flexStartMaxDuration;
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

  // lustres - computed: false, optional: true, required: false
  private _lustres?: string[]; 
  public get lustres() {
    return this.getListAttribute('lustres');
  }
  public set lustres(value: string[]) {
    this._lustres = value;
  }
  public resetLustres() {
    this._lustres = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lustresInput() {
    return this._lustres;
  }

  // node_image - computed: true, optional: true, required: false
  private _nodeImage?: string; 
  public get nodeImage() {
    return this.getStringAttribute('node_image');
  }
  public set nodeImage(value: string) {
    this._nodeImage = value;
  }
  public resetNodeImage() {
    this._nodeImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeImageInput() {
    return this._nodeImage;
  }

  // provisioning_model - computed: true, optional: true, required: false
  private _provisioningModel?: string; 
  public get provisioningModel() {
    return this.getStringAttribute('provisioning_model');
  }
  public set provisioningModel(value: string) {
    this._provisioningModel = value;
  }
  public resetProvisioningModel() {
    this._provisioningModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningModelInput() {
    return this._provisioningModel;
  }

  // startup_script - computed: false, optional: true, required: false
  private _startupScript?: string; 
  public get startupScript() {
    return this.getStringAttribute('startup_script');
  }
  public set startupScript(value: string) {
    this._startupScript = value;
  }
  public resetStartupScript() {
    this._startupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupScriptInput() {
    return this._startupScript;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // boot_disk - computed: false, optional: true, required: false
  private _bootDisk = new GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk) {
    this._bootDisk.internalValue = value;
  }
  public resetBootDisk() {
    this._bootDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // machine_spec - computed: false, optional: false, required: true
  private _machineSpec = new GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference(this, "machine_spec");
  public get machineSpec() {
    return this._machineSpec;
  }
  public putMachineSpec(value: GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec) {
    this._machineSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSpecInput() {
    return this._machineSpec.internalValue;
  }

  // scaling_spec - computed: false, optional: true, required: false
  private _scalingSpec = new GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference(this, "scaling_spec");
  public get scalingSpec() {
    return this._scalingSpec;
  }
  public putScalingSpec(value: GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec) {
    this._scalingSpec.internalValue = value;
  }
  public resetScalingSpec() {
    this._scalingSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingSpecInput() {
    return this._scalingSpec.internalValue;
  }
}

export class GoogleVertexAiModelDevelopmentClusterNodePoolsList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiModelDevelopmentClusterNodePools[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference {
    return new GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets {
  /**
  * Node-scoped Slurm settings, emitted as additional 'Key=Value' pairs on the
  * 'NodeName=' line for this node pool's nodes in slurm.conf.
  * 
  * Example:
  * { "Features":     "a3mega,nvlink",
  * "Weight":       "10",
  * "MemSpecLimit": "4096" }
  * 
  * On update this map is replaced wholesale; supply the complete desired set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#config GoogleVertexAiModelDevelopmentCluster#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Id of the node pool these settings apply to. Must match the 'id' of one of
  * the node pools in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#node_pool_id GoogleVertexAiModelDevelopmentCluster#node_pool_id}
  */
  readonly nodePoolId: string;
}

export function googleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    config: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.config),
    node_pool_id: cdktn.stringToTerraform(struct!.nodePoolId),
  }
}


export function googleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    config: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.nodePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._nodePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolId = this._nodePoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._nodePoolId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._nodePoolId = value.nodePoolId;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // node_pool_id - computed: false, optional: false, required: true
  private _nodePoolId?: string; 
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }
  public set nodePoolId(value: string) {
    this._nodePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolIdInput() {
    return this._nodePoolId;
  }
}

export class GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference {
    return new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions {
  /**
  * Partition-scoped Slurm settings, emitted as additional 'Key=Value' pairs
  * on this partition's 'PartitionName=' line in slurm.conf.
  * 
  * Example:
  * { "MaxTime":       "4-00:00:00",
  * "DenyAccounts":  "low-pri",
  * "PriorityTier":  "20",
  * "OverSubscribe": "YES:4" }
  * 
  * Note: values set here take precedence over service-computed defaults for
  * the same parameter (for example 'OverSubscribe' and 'DefMemPerCPU', which
  * the service otherwise derives from the partition's exclusivity and from
  * the memory per CPU of its nodes).
  * 
  * 'Default' is rejected here: which partition is the default is a
  * cluster-scoped choice, so it belongs in 'SlurmSpec.default_partition_id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#config GoogleVertexAiModelDevelopmentCluster#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Id of the slurm partiton
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Node pools for the slurm partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#node_pool_ids GoogleVertexAiModelDevelopmentCluster#node_pool_ids}
  */
  readonly nodePoolIds: string[];
}

export function googleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    config: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.config),
    id: cdktn.stringToTerraform(struct!.id),
    node_pool_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nodePoolIds),
  }
}


export function googleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    config: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_pool_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nodePoolIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodePoolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolIds = this._nodePoolIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._id = undefined;
      this._nodePoolIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._id = value.id;
      this._nodePoolIds = value.nodePoolIds;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // node_pool_ids - computed: false, optional: false, required: true
  private _nodePoolIds?: string[]; 
  public get nodePoolIds() {
    return this.getListAttribute('node_pool_ids');
  }
  public set nodePoolIds(value: string[]) {
    this._nodePoolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolIdsInput() {
    return this._nodePoolIds;
  }
}

export class GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference {
    return new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec {
  /**
  * Cluster-scoped Slurm settings, emitted as global 'Key=Value' lines in
  * slurm.conf.
  * 
  * Keys are Slurm parameter names exactly as documented by SchedMD
  * (https://slurm.schedmd.com/slurm.conf.html), matched case-insensitively.
  * Values are written the way slurm.conf writes them, including composite
  * forms such as 'bf_window=1440,bf_resolution=600'.
  * 
  * Example:
  * { "PriorityType":            "priority/multifactor",
  * "PriorityWeightAge":       "1000",
  * "PreemptMode":             "SUSPEND,GANG",
  * "SchedulerParameters":     "bf_window=1440,bf_resolution=600" }
  * 
  * Unsupported, reserved, or misspelled parameters, and values that are not
  * legal for the parameter, are rejected at request time with the offending
  * parameter named; they are never silently dropped. Settings
  * that apply to a single partition or node pool belong in
  * 'SlurmPartition.config' or 'SlurmNodeSet.config' instead -
  * several parameters (e.g. 'DefMemPerCPU', 'OverTimeLimit', 'PreemptMode')
  * are valid at more than one scope with different meanings and different
  * legal values.
  * 
  * On update this map is replaced wholesale; supply the complete desired set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#config GoogleVertexAiModelDevelopmentCluster#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Id of the partition that Slurm jobs submitted without an explicit
  * partition run on, for example 'sbatch' without '--partition'. Must match
  * the 'id' of one of 'partitions'.
  * 
  * If unset, the service uses the first entry of 'partitions' and this field
  * stays empty; the cluster always has a default partition whether or not this
  * field is set. Setting it makes the choice independent of list order, which
  * matters because 'partitions' is replaced wholesale on update: reordering
  * the list, or prepending a partition to it, otherwise moves the default and
  * silently redirects every job submitted without '--partition'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#default_partition_id GoogleVertexAiModelDevelopmentCluster#default_partition_id}
  */
  readonly defaultPartitionId?: string;
  /**
  * Custom bash scripts executed after each slurm job on every allocated node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#epilog_bash_scripts GoogleVertexAiModelDevelopmentCluster#epilog_bash_scripts}
  */
  readonly epilogBashScripts?: string[];
  /**
  * Full name of the Filestore to be mounted as /home directory on every node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#home_directory_storage GoogleVertexAiModelDevelopmentCluster#home_directory_storage}
  */
  readonly homeDirectoryStorage: string;
  /**
  * The node pool id to be used as slurm login node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#login_node_pool_id GoogleVertexAiModelDevelopmentCluster#login_node_pool_id}
  */
  readonly loginNodePoolId: string;
  /**
  * Custom bash scripts executed before each slurm job on every allocated node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#prolog_bash_scripts GoogleVertexAiModelDevelopmentCluster#prolog_bash_scripts}
  */
  readonly prologBashScripts?: string[];
  /**
  * node_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#node_sets GoogleVertexAiModelDevelopmentCluster#node_sets}
  */
  readonly nodeSets?: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets[] | cdktn.IResolvable;
  /**
  * partitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#partitions GoogleVertexAiModelDevelopmentCluster#partitions}
  */
  readonly partitions?: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions[] | cdktn.IResolvable;
}

export function googleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference | GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    config: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.config),
    default_partition_id: cdktn.stringToTerraform(struct!.defaultPartitionId),
    epilog_bash_scripts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.epilogBashScripts),
    home_directory_storage: cdktn.stringToTerraform(struct!.homeDirectoryStorage),
    login_node_pool_id: cdktn.stringToTerraform(struct!.loginNodePoolId),
    prolog_bash_scripts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.prologBashScripts),
    node_sets: cdktn.listMapper(googleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsToTerraform, true)(struct!.nodeSets),
    partitions: cdktn.listMapper(googleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsToTerraform, true)(struct!.partitions),
  }
}


export function googleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference | GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    config: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default_partition_id: {
      value: cdktn.stringToHclTerraform(struct!.defaultPartitionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    epilog_bash_scripts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.epilogBashScripts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    home_directory_storage: {
      value: cdktn.stringToHclTerraform(struct!.homeDirectoryStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_node_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.loginNodePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prolog_bash_scripts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.prologBashScripts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_sets: {
      value: cdktn.listMapperHcl(googleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsToHclTerraform, true)(struct!.nodeSets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList",
    },
    partitions: {
      value: cdktn.listMapperHcl(googleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsToHclTerraform, true)(struct!.partitions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._defaultPartitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPartitionId = this._defaultPartitionId;
    }
    if (this._epilogBashScripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.epilogBashScripts = this._epilogBashScripts;
    }
    if (this._homeDirectoryStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeDirectoryStorage = this._homeDirectoryStorage;
    }
    if (this._loginNodePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginNodePoolId = this._loginNodePoolId;
    }
    if (this._prologBashScripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.prologBashScripts = this._prologBashScripts;
    }
    if (this._nodeSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSets = this._nodeSets?.internalValue;
    }
    if (this._partitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitions = this._partitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._config = undefined;
      this._defaultPartitionId = undefined;
      this._epilogBashScripts = undefined;
      this._homeDirectoryStorage = undefined;
      this._loginNodePoolId = undefined;
      this._prologBashScripts = undefined;
      this._nodeSets.internalValue = undefined;
      this._partitions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._config = value.config;
      this._defaultPartitionId = value.defaultPartitionId;
      this._epilogBashScripts = value.epilogBashScripts;
      this._homeDirectoryStorage = value.homeDirectoryStorage;
      this._loginNodePoolId = value.loginNodePoolId;
      this._prologBashScripts = value.prologBashScripts;
      this._nodeSets.internalValue = value.nodeSets;
      this._partitions.internalValue = value.partitions;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // default_partition_id - computed: false, optional: true, required: false
  private _defaultPartitionId?: string; 
  public get defaultPartitionId() {
    return this.getStringAttribute('default_partition_id');
  }
  public set defaultPartitionId(value: string) {
    this._defaultPartitionId = value;
  }
  public resetDefaultPartitionId() {
    this._defaultPartitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPartitionIdInput() {
    return this._defaultPartitionId;
  }

  // epilog_bash_scripts - computed: false, optional: true, required: false
  private _epilogBashScripts?: string[]; 
  public get epilogBashScripts() {
    return this.getListAttribute('epilog_bash_scripts');
  }
  public set epilogBashScripts(value: string[]) {
    this._epilogBashScripts = value;
  }
  public resetEpilogBashScripts() {
    this._epilogBashScripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epilogBashScriptsInput() {
    return this._epilogBashScripts;
  }

  // home_directory_storage - computed: false, optional: false, required: true
  private _homeDirectoryStorage?: string; 
  public get homeDirectoryStorage() {
    return this.getStringAttribute('home_directory_storage');
  }
  public set homeDirectoryStorage(value: string) {
    this._homeDirectoryStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryStorageInput() {
    return this._homeDirectoryStorage;
  }

  // login_node_pool_id - computed: false, optional: false, required: true
  private _loginNodePoolId?: string; 
  public get loginNodePoolId() {
    return this.getStringAttribute('login_node_pool_id');
  }
  public set loginNodePoolId(value: string) {
    this._loginNodePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNodePoolIdInput() {
    return this._loginNodePoolId;
  }

  // prolog_bash_scripts - computed: false, optional: true, required: false
  private _prologBashScripts?: string[]; 
  public get prologBashScripts() {
    return this.getListAttribute('prolog_bash_scripts');
  }
  public set prologBashScripts(value: string[]) {
    this._prologBashScripts = value;
  }
  public resetPrologBashScripts() {
    this._prologBashScripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prologBashScriptsInput() {
    return this._prologBashScripts;
  }

  // node_sets - computed: false, optional: true, required: false
  private _nodeSets = new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList(this, "node_sets", false);
  public get nodeSets() {
    return this._nodeSets;
  }
  public putNodeSets(value: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets[] | cdktn.IResolvable) {
    this._nodeSets.internalValue = value;
  }
  public resetNodeSets() {
    this._nodeSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSetsInput() {
    return this._nodeSets.internalValue;
  }

  // partitions - computed: false, optional: true, required: false
  private _partitions = new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }
  public putPartitions(value: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions[] | cdktn.IResolvable) {
    this._partitions.internalValue = value;
  }
  public resetPartitions() {
    this._partitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions.internalValue;
  }
}
export interface GoogleVertexAiModelDevelopmentClusterOrchestratorSpec {
  /**
  * slurm_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#slurm_spec GoogleVertexAiModelDevelopmentCluster#slurm_spec}
  */
  readonly slurmSpec?: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec;
}

export function googleVertexAiModelDevelopmentClusterOrchestratorSpecToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference | GoogleVertexAiModelDevelopmentClusterOrchestratorSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    slurm_spec: googleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecToTerraform(struct!.slurmSpec),
  }
}


export function googleVertexAiModelDevelopmentClusterOrchestratorSpecToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference | GoogleVertexAiModelDevelopmentClusterOrchestratorSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    slurm_spec: {
      value: googleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecToHclTerraform(struct!.slurmSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterOrchestratorSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slurmSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slurmSpec = this._slurmSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterOrchestratorSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._slurmSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._slurmSpec.internalValue = value.slurmSpec;
    }
  }

  // slurm_spec - computed: false, optional: true, required: false
  private _slurmSpec = new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference(this, "slurm_spec");
  public get slurmSpec() {
    return this._slurmSpec;
  }
  public putSlurmSpec(value: GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec) {
    this._slurmSpec.internalValue = value;
  }
  public resetSlurmSpec() {
    this._slurmSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slurmSpecInput() {
    return this._slurmSpec.internalValue;
  }
}
export interface GoogleVertexAiModelDevelopmentClusterRuntimeSpec {
  /**
  * The default service account used by the cluster when running any workloads
  * on it. If not specified, the default compute engine service account will be
  * used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#service_account GoogleVertexAiModelDevelopmentCluster#service_account}
  */
  readonly serviceAccount?: string;
}

export function googleVertexAiModelDevelopmentClusterRuntimeSpecToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference | GoogleVertexAiModelDevelopmentClusterRuntimeSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
  }
}


export function googleVertexAiModelDevelopmentClusterRuntimeSpecToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference | GoogleVertexAiModelDevelopmentClusterRuntimeSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterRuntimeSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterRuntimeSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // service_account - computed: true, optional: true, required: false
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
}
export interface GoogleVertexAiModelDevelopmentClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#create GoogleVertexAiModelDevelopmentCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#delete GoogleVertexAiModelDevelopmentCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#update GoogleVertexAiModelDevelopmentCluster#update}
  */
  readonly update?: string;
}

export function googleVertexAiModelDevelopmentClusterTimeoutsToTerraform(struct?: GoogleVertexAiModelDevelopmentClusterTimeouts | cdktn.IResolvable): any {
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


export function googleVertexAiModelDevelopmentClusterTimeoutsToHclTerraform(struct?: GoogleVertexAiModelDevelopmentClusterTimeouts | cdktn.IResolvable): any {
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

export class GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVertexAiModelDevelopmentClusterTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleVertexAiModelDevelopmentClusterTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster google_vertex_ai_model_development_cluster}
*/
export class GoogleVertexAiModelDevelopmentCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_model_development_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleVertexAiModelDevelopmentCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVertexAiModelDevelopmentCluster to import
  * @param importFromId The id of the existing GoogleVertexAiModelDevelopmentCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVertexAiModelDevelopmentCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_model_development_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_vertex_ai_model_development_cluster google_vertex_ai_model_development_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiModelDevelopmentClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiModelDevelopmentClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_model_development_cluster',
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
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._modelDevelopmentClusterId = config.modelDevelopmentClusterId;
    this._project = config.project;
    this._region = config.region;
    this._lustreExportConfig.internalValue = config.lustreExportConfig;
    this._network.internalValue = config.network;
    this._nodePools.internalValue = config.nodePools;
    this._orchestratorSpec.internalValue = config.orchestratorSpec;
    this._runtimeSpec.internalValue = config.runtimeSpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_events - computed: true, optional: false, required: false
  private _clusterEvents = new GoogleVertexAiModelDevelopmentClusterClusterEventsList(this, "cluster_events", false);
  public get clusterEvents() {
    return this._clusterEvents;
  }

  // cluster_status - computed: true, optional: false, required: false
  private _clusterStatus = new GoogleVertexAiModelDevelopmentClusterClusterStatusList(this, "cluster_status", false);
  public get clusterStatus() {
    return this._clusterStatus;
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

  // model_development_cluster_id - computed: false, optional: false, required: true
  private _modelDevelopmentClusterId?: string; 
  public get modelDevelopmentClusterId() {
    return this.getStringAttribute('model_development_cluster_id');
  }
  public set modelDevelopmentClusterId(value: string) {
    this._modelDevelopmentClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDevelopmentClusterIdInput() {
    return this._modelDevelopmentClusterId;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // runtime - computed: true, optional: false, required: false
  private _runtime = new GoogleVertexAiModelDevelopmentClusterRuntimeList(this, "runtime", false);
  public get runtime() {
    return this._runtime;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
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

  // lustre_export_config - computed: false, optional: true, required: false
  private _lustreExportConfig = new GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference(this, "lustre_export_config");
  public get lustreExportConfig() {
    return this._lustreExportConfig;
  }
  public putLustreExportConfig(value: GoogleVertexAiModelDevelopmentClusterLustreExportConfig) {
    this._lustreExportConfig.internalValue = value;
  }
  public resetLustreExportConfig() {
    this._lustreExportConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lustreExportConfigInput() {
    return this._lustreExportConfig.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new GoogleVertexAiModelDevelopmentClusterNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: GoogleVertexAiModelDevelopmentClusterNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // node_pools - computed: false, optional: false, required: true
  private _nodePools = new GoogleVertexAiModelDevelopmentClusterNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: GoogleVertexAiModelDevelopmentClusterNodePools[] | cdktn.IResolvable) {
    this._nodePools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
  }

  // orchestrator_spec - computed: false, optional: false, required: true
  private _orchestratorSpec = new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference(this, "orchestrator_spec");
  public get orchestratorSpec() {
    return this._orchestratorSpec;
  }
  public putOrchestratorSpec(value: GoogleVertexAiModelDevelopmentClusterOrchestratorSpec) {
    this._orchestratorSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorSpecInput() {
    return this._orchestratorSpec.internalValue;
  }

  // runtime_spec - computed: false, optional: true, required: false
  private _runtimeSpec = new GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference(this, "runtime_spec");
  public get runtimeSpec() {
    return this._runtimeSpec;
  }
  public putRuntimeSpec(value: GoogleVertexAiModelDevelopmentClusterRuntimeSpec) {
    this._runtimeSpec.internalValue = value;
  }
  public resetRuntimeSpec() {
    this._runtimeSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeSpecInput() {
    return this._runtimeSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiModelDevelopmentClusterTimeouts) {
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
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      model_development_cluster_id: cdktn.stringToTerraform(this._modelDevelopmentClusterId),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      lustre_export_config: googleVertexAiModelDevelopmentClusterLustreExportConfigToTerraform(this._lustreExportConfig.internalValue),
      network: googleVertexAiModelDevelopmentClusterNetworkToTerraform(this._network.internalValue),
      node_pools: cdktn.listMapper(googleVertexAiModelDevelopmentClusterNodePoolsToTerraform, true)(this._nodePools.internalValue),
      orchestrator_spec: googleVertexAiModelDevelopmentClusterOrchestratorSpecToTerraform(this._orchestratorSpec.internalValue),
      runtime_spec: googleVertexAiModelDevelopmentClusterRuntimeSpecToTerraform(this._runtimeSpec.internalValue),
      timeouts: googleVertexAiModelDevelopmentClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      model_development_cluster_id: {
        value: cdktn.stringToHclTerraform(this._modelDevelopmentClusterId),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lustre_export_config: {
        value: googleVertexAiModelDevelopmentClusterLustreExportConfigToHclTerraform(this._lustreExportConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiModelDevelopmentClusterLustreExportConfigList",
      },
      network: {
        value: googleVertexAiModelDevelopmentClusterNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiModelDevelopmentClusterNetworkList",
      },
      node_pools: {
        value: cdktn.listMapperHcl(googleVertexAiModelDevelopmentClusterNodePoolsToHclTerraform, true)(this._nodePools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiModelDevelopmentClusterNodePoolsList",
      },
      orchestrator_spec: {
        value: googleVertexAiModelDevelopmentClusterOrchestratorSpecToHclTerraform(this._orchestratorSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiModelDevelopmentClusterOrchestratorSpecList",
      },
      runtime_spec: {
        value: googleVertexAiModelDevelopmentClusterRuntimeSpecToHclTerraform(this._runtimeSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiModelDevelopmentClusterRuntimeSpecList",
      },
      timeouts: {
        value: googleVertexAiModelDevelopmentClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVertexAiModelDevelopmentClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
