/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleVertexAiPipelineJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_pipeline_job.html.markdown for specifics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#deletion_policy GoogleVertexAiPipelineJob#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The display name of the Pipeline. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#display_name GoogleVertexAiPipelineJob#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#id GoogleVertexAiPipelineJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels with user-defined metadata to organize PipelineJob.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#labels GoogleVertexAiPipelineJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The full name of the Compute Engine network to which the Pipeline Job's workload should be peered. For example, 'projects/12345/global/networks/myVPC'. Format is of the form 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is a network name. Private services access must already be configured for the network. Pipeline job will apply the network configuration to the Google Cloud resources being launched, if applied, such as Vertex AI Training or Dataflow job. If left unspecified, the workload is not peered with any network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#network GoogleVertexAiPipelineJob#network}
  */
  readonly network?: string;
  /**
  * The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. If not provided, an ID will be automatically generated.
  * This value should be less than 128 characters, and valid characters are '/[a-z][0-9]-/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#pipeline_job_id GoogleVertexAiPipelineJob#pipeline_job_id}
  */
  readonly pipelineJobId?: string;
  /**
  * The spec of the pipeline. This is a JSON object that describes the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#pipeline_spec GoogleVertexAiPipelineJob#pipeline_spec}
  */
  readonly pipelineSpec?: string;
  /**
  * Whether to do component level validations before job creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#preflight_validations GoogleVertexAiPipelineJob#preflight_validations}
  */
  readonly preflightValidations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#project GoogleVertexAiPipelineJob#project}
  */
  readonly project?: string;
  /**
  * The region of the pipeline job. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#region GoogleVertexAiPipelineJob#region}
  */
  readonly region?: string;
  /**
  * A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload. If set, we will deploy the Pipeline Job's workload within the provided ip ranges. Otherwise, the job will be deployed to any ip ranges under the provided VPC network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#reserved_ip_ranges GoogleVertexAiPipelineJob#reserved_ip_ranges}
  */
  readonly reservedIpRanges?: string[];
  /**
  * The service account that the pipeline workload runs as. If not specified, the Compute Engine default service account in the project will be used. Users starting the pipeline must have the iam.serviceAccounts.actAs permission on this service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#service_account GoogleVertexAiPipelineJob#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#template_uri GoogleVertexAiPipelineJob#template_uri}
  */
  readonly templateUri?: string;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#encryption_spec GoogleVertexAiPipelineJob#encryption_spec}
  */
  readonly encryptionSpec?: GoogleVertexAiPipelineJobEncryptionSpec;
  /**
  * psc_interface_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#psc_interface_config GoogleVertexAiPipelineJob#psc_interface_config}
  */
  readonly pscInterfaceConfig?: GoogleVertexAiPipelineJobPscInterfaceConfig;
  /**
  * runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#runtime_config GoogleVertexAiPipelineJob#runtime_config}
  */
  readonly runtimeConfig?: GoogleVertexAiPipelineJobRuntimeConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#timeouts GoogleVertexAiPipelineJob#timeouts}
  */
  readonly timeouts?: GoogleVertexAiPipelineJobTimeouts;
}
export interface GoogleVertexAiPipelineJobError {
}

export function googleVertexAiPipelineJobErrorToTerraform(struct?: GoogleVertexAiPipelineJobError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiPipelineJobErrorToHclTerraform(struct?: GoogleVertexAiPipelineJobError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiPipelineJobErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiPipelineJobError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPipelineJobError | undefined) {
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

export class GoogleVertexAiPipelineJobErrorList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiPipelineJobErrorOutputReference {
    return new GoogleVertexAiPipelineJobErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiPipelineJobJobDetailPipelineContext {
}

export function googleVertexAiPipelineJobJobDetailPipelineContextToTerraform(struct?: GoogleVertexAiPipelineJobJobDetailPipelineContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiPipelineJobJobDetailPipelineContextToHclTerraform(struct?: GoogleVertexAiPipelineJobJobDetailPipelineContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiPipelineJobJobDetailPipelineContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPipelineJobJobDetailPipelineContext | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktn.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_contexts - computed: true, optional: false, required: false
  public get parentContexts() {
    return this.getListAttribute('parent_contexts');
  }

  // schema_title - computed: true, optional: false, required: false
  public get schemaTitle() {
    return this.getStringAttribute('schema_title');
  }

  // schema_version - computed: true, optional: false, required: false
  public get schemaVersion() {
    return this.getStringAttribute('schema_version');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleVertexAiPipelineJobJobDetailPipelineContextList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference {
    return new GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiPipelineJobJobDetailPipelineRunContext {
}

export function googleVertexAiPipelineJobJobDetailPipelineRunContextToTerraform(struct?: GoogleVertexAiPipelineJobJobDetailPipelineRunContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiPipelineJobJobDetailPipelineRunContextToHclTerraform(struct?: GoogleVertexAiPipelineJobJobDetailPipelineRunContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiPipelineJobJobDetailPipelineRunContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPipelineJobJobDetailPipelineRunContext | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktn.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_contexts - computed: true, optional: false, required: false
  public get parentContexts() {
    return this.getListAttribute('parent_contexts');
  }

  // schema_title - computed: true, optional: false, required: false
  public get schemaTitle() {
    return this.getStringAttribute('schema_title');
  }

  // schema_version - computed: true, optional: false, required: false
  public get schemaVersion() {
    return this.getStringAttribute('schema_version');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleVertexAiPipelineJobJobDetailPipelineRunContextList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference {
    return new GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiPipelineJobJobDetailTaskDetailsError {
}

export function googleVertexAiPipelineJobJobDetailTaskDetailsErrorToTerraform(struct?: GoogleVertexAiPipelineJobJobDetailTaskDetailsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiPipelineJobJobDetailTaskDetailsErrorToHclTerraform(struct?: GoogleVertexAiPipelineJobJobDetailTaskDetailsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiPipelineJobJobDetailTaskDetailsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPipelineJobJobDetailTaskDetailsError | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference {
    return new GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiPipelineJobJobDetailTaskDetails {
}

export function googleVertexAiPipelineJobJobDetailTaskDetailsToTerraform(struct?: GoogleVertexAiPipelineJobJobDetailTaskDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiPipelineJobJobDetailTaskDetailsToHclTerraform(struct?: GoogleVertexAiPipelineJobJobDetailTaskDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiPipelineJobJobDetailTaskDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPipelineJobJobDetailTaskDetails | undefined) {
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

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // error - computed: true, optional: false, required: false
  private _error = new GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // parent_task_id - computed: true, optional: false, required: false
  public get parentTaskId() {
    return this.getStringAttribute('parent_task_id');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }

  // task_unique_name - computed: true, optional: false, required: false
  public get taskUniqueName() {
    return this.getStringAttribute('task_unique_name');
  }
}

export class GoogleVertexAiPipelineJobJobDetailTaskDetailsList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference {
    return new GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiPipelineJobJobDetail {
}

export function googleVertexAiPipelineJobJobDetailToTerraform(struct?: GoogleVertexAiPipelineJobJobDetail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiPipelineJobJobDetailToHclTerraform(struct?: GoogleVertexAiPipelineJobJobDetail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiPipelineJobJobDetailOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiPipelineJobJobDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPipelineJobJobDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pipeline_context - computed: true, optional: false, required: false
  private _pipelineContext = new GoogleVertexAiPipelineJobJobDetailPipelineContextList(this, "pipeline_context", false);
  public get pipelineContext() {
    return this._pipelineContext;
  }

  // pipeline_run_context - computed: true, optional: false, required: false
  private _pipelineRunContext = new GoogleVertexAiPipelineJobJobDetailPipelineRunContextList(this, "pipeline_run_context", false);
  public get pipelineRunContext() {
    return this._pipelineRunContext;
  }

  // task_details - computed: true, optional: false, required: false
  private _taskDetails = new GoogleVertexAiPipelineJobJobDetailTaskDetailsList(this, "task_details", false);
  public get taskDetails() {
    return this._taskDetails;
  }
}

export class GoogleVertexAiPipelineJobJobDetailList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiPipelineJobJobDetailOutputReference {
    return new GoogleVertexAiPipelineJobJobDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiPipelineJobTemplateMetadata {
}

export function googleVertexAiPipelineJobTemplateMetadataToTerraform(struct?: GoogleVertexAiPipelineJobTemplateMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiPipelineJobTemplateMetadataToHclTerraform(struct?: GoogleVertexAiPipelineJobTemplateMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiPipelineJobTemplateMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiPipelineJobTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPipelineJobTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class GoogleVertexAiPipelineJobTemplateMetadataList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiPipelineJobTemplateMetadataOutputReference {
    return new GoogleVertexAiPipelineJobTemplateMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiPipelineJobEncryptionSpec {
  /**
  * The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#kms_key_name GoogleVertexAiPipelineJob#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleVertexAiPipelineJobEncryptionSpecToTerraform(struct?: GoogleVertexAiPipelineJobEncryptionSpecOutputReference | GoogleVertexAiPipelineJobEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleVertexAiPipelineJobEncryptionSpecToHclTerraform(struct?: GoogleVertexAiPipelineJobEncryptionSpecOutputReference | GoogleVertexAiPipelineJobEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPipelineJobEncryptionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiPipelineJobEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPipelineJobEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs {
  /**
  * The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#domain GoogleVertexAiPipelineJob#domain}
  */
  readonly domain: string;
  /**
  * The VPC network name in the targetProject where the DNS zone specified by domain is visible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#target_network GoogleVertexAiPipelineJob#target_network}
  */
  readonly targetNetwork: string;
  /**
  * The project ID hosting the Cloud DNS managed zone that contains the above domain. The Vertex AI Service Agent must be granted the dns.peer role on this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#target_project GoogleVertexAiPipelineJob#target_project}
  */
  readonly targetProject: string;
}

export function googleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsToTerraform(struct?: GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
    target_network: cdktn.stringToTerraform(struct!.targetNetwork),
    target_project: cdktn.stringToTerraform(struct!.targetProject),
  }
}


export function googleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsToHclTerraform(struct?: GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_network: {
      value: cdktn.stringToHclTerraform(struct!.targetNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_project: {
      value: cdktn.stringToHclTerraform(struct!.targetProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._targetNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNetwork = this._targetNetwork;
    }
    if (this._targetProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProject = this._targetProject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._targetNetwork = undefined;
      this._targetProject = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._targetNetwork = value.targetNetwork;
      this._targetProject = value.targetProject;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // target_network - computed: false, optional: false, required: true
  private _targetNetwork?: string; 
  public get targetNetwork() {
    return this.getStringAttribute('target_network');
  }
  public set targetNetwork(value: string) {
    this._targetNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkInput() {
    return this._targetNetwork;
  }

  // target_project - computed: false, optional: false, required: true
  private _targetProject?: string; 
  public get targetProject() {
    return this.getStringAttribute('target_project');
  }
  public set targetProject(value: string) {
    this._targetProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProjectInput() {
    return this._targetProject;
  }
}

export class GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference {
    return new GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiPipelineJobPscInterfaceConfig {
  /**
  * The name of the Compute Engine network attachment to attach to the resource within the region and user project. To specify this field, you must have already created a network attachment. This field is only used for resources using PSC-I.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#network_attachment GoogleVertexAiPipelineJob#network_attachment}
  */
  readonly networkAttachment?: string;
  /**
  * dns_peering_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#dns_peering_configs GoogleVertexAiPipelineJob#dns_peering_configs}
  */
  readonly dnsPeeringConfigs?: GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable;
}

export function googleVertexAiPipelineJobPscInterfaceConfigToTerraform(struct?: GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference | GoogleVertexAiPipelineJobPscInterfaceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_attachment: cdktn.stringToTerraform(struct!.networkAttachment),
    dns_peering_configs: cdktn.listMapper(googleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsToTerraform, true)(struct!.dnsPeeringConfigs),
  }
}


export function googleVertexAiPipelineJobPscInterfaceConfigToHclTerraform(struct?: GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference | GoogleVertexAiPipelineJobPscInterfaceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_attachment: {
      value: cdktn.stringToHclTerraform(struct!.networkAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_peering_configs: {
      value: cdktn.listMapperHcl(googleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsToHclTerraform, true)(struct!.dnsPeeringConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiPipelineJobPscInterfaceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    if (this._dnsPeeringConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPeeringConfigs = this._dnsPeeringConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPipelineJobPscInterfaceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAttachment = undefined;
      this._dnsPeeringConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAttachment = value.networkAttachment;
      this._dnsPeeringConfigs.internalValue = value.dnsPeeringConfigs;
    }
  }

  // network_attachment - computed: false, optional: true, required: false
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  public resetNetworkAttachment() {
    this._networkAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }

  // dns_peering_configs - computed: false, optional: true, required: false
  private _dnsPeeringConfigs = new GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList(this, "dns_peering_configs", false);
  public get dnsPeeringConfigs() {
    return this._dnsPeeringConfigs;
  }
  public putDnsPeeringConfigs(value: GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable) {
    this._dnsPeeringConfigs.internalValue = value;
  }
  public resetDnsPeeringConfigs() {
    this._dnsPeeringConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPeeringConfigsInput() {
    return this._dnsPeeringConfigs.internalValue;
  }
}
export interface GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail {
  /**
  * PersistentResource name, format: 'projects/{project}/locations/{location}/persistentResources/{persistent_resource}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#persistent_resource_name GoogleVertexAiPipelineJob#persistent_resource_name}
  */
  readonly persistentResourceName?: string;
  /**
  * Sets the behavior when a task has reached the defined wait duration while waiting for task resources to become available in the specified persistent resource.
  * Possible values are: 'TASK_RESOURCE_UNAVAILABLE_TIMEOUT_BEHAVIOR_UNSPECIFIED', 'FAIL', 'FALL_BACK_TO_ON_DEMAND'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#task_resource_unavailable_timeout_behavior GoogleVertexAiPipelineJob#task_resource_unavailable_timeout_behavior}
  */
  readonly taskResourceUnavailableTimeoutBehavior?: string;
  /**
  * The maxWaitTime for the task if the persistent resource is unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#task_resource_unavailable_wait_time_ms GoogleVertexAiPipelineJob#task_resource_unavailable_wait_time_ms}
  */
  readonly taskResourceUnavailableWaitTimeMs?: string;
}

export function googleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailToTerraform(struct?: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference | GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    persistent_resource_name: cdktn.stringToTerraform(struct!.persistentResourceName),
    task_resource_unavailable_timeout_behavior: cdktn.stringToTerraform(struct!.taskResourceUnavailableTimeoutBehavior),
    task_resource_unavailable_wait_time_ms: cdktn.stringToTerraform(struct!.taskResourceUnavailableWaitTimeMs),
  }
}


export function googleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailToHclTerraform(struct?: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference | GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    persistent_resource_name: {
      value: cdktn.stringToHclTerraform(struct!.persistentResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_resource_unavailable_timeout_behavior: {
      value: cdktn.stringToHclTerraform(struct!.taskResourceUnavailableTimeoutBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_resource_unavailable_wait_time_ms: {
      value: cdktn.stringToHclTerraform(struct!.taskResourceUnavailableWaitTimeMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistentResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentResourceName = this._persistentResourceName;
    }
    if (this._taskResourceUnavailableTimeoutBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskResourceUnavailableTimeoutBehavior = this._taskResourceUnavailableTimeoutBehavior;
    }
    if (this._taskResourceUnavailableWaitTimeMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskResourceUnavailableWaitTimeMs = this._taskResourceUnavailableWaitTimeMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._persistentResourceName = undefined;
      this._taskResourceUnavailableTimeoutBehavior = undefined;
      this._taskResourceUnavailableWaitTimeMs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._persistentResourceName = value.persistentResourceName;
      this._taskResourceUnavailableTimeoutBehavior = value.taskResourceUnavailableTimeoutBehavior;
      this._taskResourceUnavailableWaitTimeMs = value.taskResourceUnavailableWaitTimeMs;
    }
  }

  // persistent_resource_name - computed: false, optional: true, required: false
  private _persistentResourceName?: string; 
  public get persistentResourceName() {
    return this.getStringAttribute('persistent_resource_name');
  }
  public set persistentResourceName(value: string) {
    this._persistentResourceName = value;
  }
  public resetPersistentResourceName() {
    this._persistentResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentResourceNameInput() {
    return this._persistentResourceName;
  }

  // task_resource_unavailable_timeout_behavior - computed: true, optional: true, required: false
  private _taskResourceUnavailableTimeoutBehavior?: string; 
  public get taskResourceUnavailableTimeoutBehavior() {
    return this.getStringAttribute('task_resource_unavailable_timeout_behavior');
  }
  public set taskResourceUnavailableTimeoutBehavior(value: string) {
    this._taskResourceUnavailableTimeoutBehavior = value;
  }
  public resetTaskResourceUnavailableTimeoutBehavior() {
    this._taskResourceUnavailableTimeoutBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskResourceUnavailableTimeoutBehaviorInput() {
    return this._taskResourceUnavailableTimeoutBehavior;
  }

  // task_resource_unavailable_wait_time_ms - computed: false, optional: true, required: false
  private _taskResourceUnavailableWaitTimeMs?: string; 
  public get taskResourceUnavailableWaitTimeMs() {
    return this.getStringAttribute('task_resource_unavailable_wait_time_ms');
  }
  public set taskResourceUnavailableWaitTimeMs(value: string) {
    this._taskResourceUnavailableWaitTimeMs = value;
  }
  public resetTaskResourceUnavailableWaitTimeMs() {
    this._taskResourceUnavailableWaitTimeMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskResourceUnavailableWaitTimeMsInput() {
    return this._taskResourceUnavailableWaitTimeMs;
  }
}
export interface GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime {
  /**
  * persistent_resource_runtime_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#persistent_resource_runtime_detail GoogleVertexAiPipelineJob#persistent_resource_runtime_detail}
  */
  readonly persistentResourceRuntimeDetail?: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail;
}

export function googleVertexAiPipelineJobRuntimeConfigDefaultRuntimeToTerraform(struct?: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference | GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    persistent_resource_runtime_detail: googleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailToTerraform(struct!.persistentResourceRuntimeDetail),
  }
}


export function googleVertexAiPipelineJobRuntimeConfigDefaultRuntimeToHclTerraform(struct?: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference | GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    persistent_resource_runtime_detail: {
      value: googleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailToHclTerraform(struct!.persistentResourceRuntimeDetail),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistentResourceRuntimeDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentResourceRuntimeDetail = this._persistentResourceRuntimeDetail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._persistentResourceRuntimeDetail.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._persistentResourceRuntimeDetail.internalValue = value.persistentResourceRuntimeDetail;
    }
  }

  // persistent_resource_runtime_detail - computed: false, optional: true, required: false
  private _persistentResourceRuntimeDetail = new GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference(this, "persistent_resource_runtime_detail");
  public get persistentResourceRuntimeDetail() {
    return this._persistentResourceRuntimeDetail;
  }
  public putPersistentResourceRuntimeDetail(value: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail) {
    this._persistentResourceRuntimeDetail.internalValue = value;
  }
  public resetPersistentResourceRuntimeDetail() {
    this._persistentResourceRuntimeDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentResourceRuntimeDetailInput() {
    return this._persistentResourceRuntimeDetail.internalValue;
  }
}
export interface GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts {
  /**
  * Artifact resource id from MLMD. Which is the last portion of an artifact resource name: 'projects/{project}/locations/{location}/metadataStores/default/artifacts/{artifact_id}'. The artifact must be within the same project, location and default metadatastore as the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#artifact_id GoogleVertexAiPipelineJob#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#artifact_key GoogleVertexAiPipelineJob#artifact_key}
  */
  readonly artifactKey: string;
}

export function googleVertexAiPipelineJobRuntimeConfigInputArtifactsToTerraform(struct?: GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_id: cdktn.stringToTerraform(struct!.artifactId),
    artifact_key: cdktn.stringToTerraform(struct!.artifactKey),
  }
}


export function googleVertexAiPipelineJobRuntimeConfigInputArtifactsToHclTerraform(struct?: GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_id: {
      value: cdktn.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    artifact_key: {
      value: cdktn.stringToHclTerraform(struct!.artifactKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._artifactKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactKey = this._artifactKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._artifactKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactId = value.artifactId;
      this._artifactKey = value.artifactKey;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // artifact_key - computed: false, optional: false, required: true
  private _artifactKey?: string; 
  public get artifactKey() {
    return this.getStringAttribute('artifact_key');
  }
  public set artifactKey(value: string) {
    this._artifactKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactKeyInput() {
    return this._artifactKey;
  }
}

export class GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference {
    return new GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiPipelineJobRuntimeConfig {
  /**
  * Represents the failure policy of a pipeline. Currently, the default of a pipeline is that the pipeline will continue to run until no more tasks can be executed, also known as 'PIPELINE_FAILURE_POLICY_FAIL_SLOW'. However, if a pipeline is set to 'PIPELINE_FAILURE_POLICY_FAIL_FAST', it will stop scheduling any new tasks as soon as the pipeline fails.
  * Possible values are: 'PIPELINE_FAILURE_POLICY_UNSPECIFIED', 'PIPELINE_FAILURE_POLICY_FAIL_SLOW', 'PIPELINE_FAILURE_POLICY_FAIL_FAST'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#failure_policy GoogleVertexAiPipelineJob#failure_policy}
  */
  readonly failurePolicy?: string;
  /**
  * A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline. It is used by the system to generate the paths of output artifacts. The artifact paths are generated with a sub-directory pattern '{job_id}/{task_id}/{output_key}' under the specified output directory. The service account specified in this pipeline must have the 'storage.objects.get' and 'storage.objects.create' permissions for this bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#gcs_output_directory GoogleVertexAiPipelineJob#gcs_output_directory}
  */
  readonly gcsOutputDirectory: string;
  /**
  * The runtime parameters of the PipelineJob. The parameters will be passed into PipelineJob.pipeline_spec to replace the placeholders at runtime. This field is used by pipelines built using 'PipelineJob.pipeline_spec.schema_version' 2.1.0, such as pipelines built using Kubeflow Pipelines SDK 1.9 or higher and the v2 DSL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#parameter_values GoogleVertexAiPipelineJob#parameter_values}
  */
  readonly parameterValues?: { [key: string]: string };
  /**
  * default_runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#default_runtime GoogleVertexAiPipelineJob#default_runtime}
  */
  readonly defaultRuntime?: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime;
  /**
  * input_artifacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#input_artifacts GoogleVertexAiPipelineJob#input_artifacts}
  */
  readonly inputArtifacts?: GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts[] | cdktn.IResolvable;
}

export function googleVertexAiPipelineJobRuntimeConfigToTerraform(struct?: GoogleVertexAiPipelineJobRuntimeConfigOutputReference | GoogleVertexAiPipelineJobRuntimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_policy: cdktn.stringToTerraform(struct!.failurePolicy),
    gcs_output_directory: cdktn.stringToTerraform(struct!.gcsOutputDirectory),
    parameter_values: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameterValues),
    default_runtime: googleVertexAiPipelineJobRuntimeConfigDefaultRuntimeToTerraform(struct!.defaultRuntime),
    input_artifacts: cdktn.listMapper(googleVertexAiPipelineJobRuntimeConfigInputArtifactsToTerraform, true)(struct!.inputArtifacts),
  }
}


export function googleVertexAiPipelineJobRuntimeConfigToHclTerraform(struct?: GoogleVertexAiPipelineJobRuntimeConfigOutputReference | GoogleVertexAiPipelineJobRuntimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.failurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_output_directory: {
      value: cdktn.stringToHclTerraform(struct!.gcsOutputDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_values: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameterValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default_runtime: {
      value: googleVertexAiPipelineJobRuntimeConfigDefaultRuntimeToHclTerraform(struct!.defaultRuntime),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeList",
    },
    input_artifacts: {
      value: cdktn.listMapperHcl(googleVertexAiPipelineJobRuntimeConfigInputArtifactsToHclTerraform, true)(struct!.inputArtifacts),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiPipelineJobRuntimeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiPipelineJobRuntimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.failurePolicy = this._failurePolicy;
    }
    if (this._gcsOutputDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsOutputDirectory = this._gcsOutputDirectory;
    }
    if (this._parameterValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValues = this._parameterValues;
    }
    if (this._defaultRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRuntime = this._defaultRuntime?.internalValue;
    }
    if (this._inputArtifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputArtifacts = this._inputArtifacts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiPipelineJobRuntimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failurePolicy = undefined;
      this._gcsOutputDirectory = undefined;
      this._parameterValues = undefined;
      this._defaultRuntime.internalValue = undefined;
      this._inputArtifacts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failurePolicy = value.failurePolicy;
      this._gcsOutputDirectory = value.gcsOutputDirectory;
      this._parameterValues = value.parameterValues;
      this._defaultRuntime.internalValue = value.defaultRuntime;
      this._inputArtifacts.internalValue = value.inputArtifacts;
    }
  }

  // failure_policy - computed: true, optional: true, required: false
  private _failurePolicy?: string; 
  public get failurePolicy() {
    return this.getStringAttribute('failure_policy');
  }
  public set failurePolicy(value: string) {
    this._failurePolicy = value;
  }
  public resetFailurePolicy() {
    this._failurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePolicyInput() {
    return this._failurePolicy;
  }

  // gcs_output_directory - computed: false, optional: false, required: true
  private _gcsOutputDirectory?: string; 
  public get gcsOutputDirectory() {
    return this.getStringAttribute('gcs_output_directory');
  }
  public set gcsOutputDirectory(value: string) {
    this._gcsOutputDirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsOutputDirectoryInput() {
    return this._gcsOutputDirectory;
  }

  // parameter_values - computed: true, optional: true, required: false
  private _parameterValues?: { [key: string]: string }; 
  public get parameterValues() {
    return this.getStringMapAttribute('parameter_values');
  }
  public set parameterValues(value: { [key: string]: string }) {
    this._parameterValues = value;
  }
  public resetParameterValues() {
    this._parameterValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValuesInput() {
    return this._parameterValues;
  }

  // default_runtime - computed: false, optional: true, required: false
  private _defaultRuntime = new GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference(this, "default_runtime");
  public get defaultRuntime() {
    return this._defaultRuntime;
  }
  public putDefaultRuntime(value: GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime) {
    this._defaultRuntime.internalValue = value;
  }
  public resetDefaultRuntime() {
    this._defaultRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRuntimeInput() {
    return this._defaultRuntime.internalValue;
  }

  // input_artifacts - computed: false, optional: true, required: false
  private _inputArtifacts = new GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList(this, "input_artifacts", true);
  public get inputArtifacts() {
    return this._inputArtifacts;
  }
  public putInputArtifacts(value: GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts[] | cdktn.IResolvable) {
    this._inputArtifacts.internalValue = value;
  }
  public resetInputArtifacts() {
    this._inputArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactsInput() {
    return this._inputArtifacts.internalValue;
  }
}
export interface GoogleVertexAiPipelineJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#create GoogleVertexAiPipelineJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#delete GoogleVertexAiPipelineJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#update GoogleVertexAiPipelineJob#update}
  */
  readonly update?: string;
}

export function googleVertexAiPipelineJobTimeoutsToTerraform(struct?: GoogleVertexAiPipelineJobTimeouts | cdktn.IResolvable): any {
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


export function googleVertexAiPipelineJobTimeoutsToHclTerraform(struct?: GoogleVertexAiPipelineJobTimeouts | cdktn.IResolvable): any {
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

export class GoogleVertexAiPipelineJobTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVertexAiPipelineJobTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleVertexAiPipelineJobTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job google_vertex_ai_pipeline_job}
*/
export class GoogleVertexAiPipelineJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_pipeline_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleVertexAiPipelineJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVertexAiPipelineJob to import
  * @param importFromId The id of the existing GoogleVertexAiPipelineJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVertexAiPipelineJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_pipeline_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job google_vertex_ai_pipeline_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiPipelineJobConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiPipelineJobConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_pipeline_job',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._network = config.network;
    this._pipelineJobId = config.pipelineJobId;
    this._pipelineSpec = config.pipelineSpec;
    this._preflightValidations = config.preflightValidations;
    this._project = config.project;
    this._region = config.region;
    this._reservedIpRanges = config.reservedIpRanges;
    this._serviceAccount = config.serviceAccount;
    this._templateUri = config.templateUri;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._pscInterfaceConfig.internalValue = config.pscInterfaceConfig;
    this._runtimeConfig.internalValue = config.runtimeConfig;
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

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // error - computed: true, optional: false, required: false
  private _error = new GoogleVertexAiPipelineJobErrorList(this, "error", false);
  public get error() {
    return this._error;
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

  // job_detail - computed: true, optional: false, required: false
  private _jobDetail = new GoogleVertexAiPipelineJobJobDetailList(this, "job_detail", false);
  public get jobDetail() {
    return this._jobDetail;
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // pipeline_job_id - computed: false, optional: true, required: false
  private _pipelineJobId?: string; 
  public get pipelineJobId() {
    return this.getStringAttribute('pipeline_job_id');
  }
  public set pipelineJobId(value: string) {
    this._pipelineJobId = value;
  }
  public resetPipelineJobId() {
    this._pipelineJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineJobIdInput() {
    return this._pipelineJobId;
  }

  // pipeline_spec - computed: true, optional: true, required: false
  private _pipelineSpec?: string; 
  public get pipelineSpec() {
    return this.getStringAttribute('pipeline_spec');
  }
  public set pipelineSpec(value: string) {
    this._pipelineSpec = value;
  }
  public resetPipelineSpec() {
    this._pipelineSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineSpecInput() {
    return this._pipelineSpec;
  }

  // preflight_validations - computed: false, optional: true, required: false
  private _preflightValidations?: boolean | cdktn.IResolvable; 
  public get preflightValidations() {
    return this.getBooleanAttribute('preflight_validations');
  }
  public set preflightValidations(value: boolean | cdktn.IResolvable) {
    this._preflightValidations = value;
  }
  public resetPreflightValidations() {
    this._preflightValidations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preflightValidationsInput() {
    return this._preflightValidations;
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

  // reserved_ip_ranges - computed: false, optional: true, required: false
  private _reservedIpRanges?: string[]; 
  public get reservedIpRanges() {
    return this.getListAttribute('reserved_ip_ranges');
  }
  public set reservedIpRanges(value: string[]) {
    this._reservedIpRanges = value;
  }
  public resetReservedIpRanges() {
    this._reservedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpRangesInput() {
    return this._reservedIpRanges;
  }

  // schedule_name - computed: true, optional: false, required: false
  public get scheduleName() {
    return this.getStringAttribute('schedule_name');
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

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // template_metadata - computed: true, optional: false, required: false
  private _templateMetadata = new GoogleVertexAiPipelineJobTemplateMetadataList(this, "template_metadata", false);
  public get templateMetadata() {
    return this._templateMetadata;
  }

  // template_uri - computed: false, optional: true, required: false
  private _templateUri?: string; 
  public get templateUri() {
    return this.getStringAttribute('template_uri');
  }
  public set templateUri(value: string) {
    this._templateUri = value;
  }
  public resetTemplateUri() {
    this._templateUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUriInput() {
    return this._templateUri;
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

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new GoogleVertexAiPipelineJobEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: GoogleVertexAiPipelineJobEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // psc_interface_config - computed: false, optional: true, required: false
  private _pscInterfaceConfig = new GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference(this, "psc_interface_config");
  public get pscInterfaceConfig() {
    return this._pscInterfaceConfig;
  }
  public putPscInterfaceConfig(value: GoogleVertexAiPipelineJobPscInterfaceConfig) {
    this._pscInterfaceConfig.internalValue = value;
  }
  public resetPscInterfaceConfig() {
    this._pscInterfaceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscInterfaceConfigInput() {
    return this._pscInterfaceConfig.internalValue;
  }

  // runtime_config - computed: false, optional: true, required: false
  private _runtimeConfig = new GoogleVertexAiPipelineJobRuntimeConfigOutputReference(this, "runtime_config");
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: GoogleVertexAiPipelineJobRuntimeConfig) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiPipelineJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiPipelineJobTimeouts) {
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
      network: cdktn.stringToTerraform(this._network),
      pipeline_job_id: cdktn.stringToTerraform(this._pipelineJobId),
      pipeline_spec: cdktn.stringToTerraform(this._pipelineSpec),
      preflight_validations: cdktn.booleanToTerraform(this._preflightValidations),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      reserved_ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(this._reservedIpRanges),
      service_account: cdktn.stringToTerraform(this._serviceAccount),
      template_uri: cdktn.stringToTerraform(this._templateUri),
      encryption_spec: googleVertexAiPipelineJobEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      psc_interface_config: googleVertexAiPipelineJobPscInterfaceConfigToTerraform(this._pscInterfaceConfig.internalValue),
      runtime_config: googleVertexAiPipelineJobRuntimeConfigToTerraform(this._runtimeConfig.internalValue),
      timeouts: googleVertexAiPipelineJobTimeoutsToTerraform(this._timeouts.internalValue),
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
      network: {
        value: cdktn.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_job_id: {
        value: cdktn.stringToHclTerraform(this._pipelineJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_spec: {
        value: cdktn.stringToHclTerraform(this._pipelineSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preflight_validations: {
        value: cdktn.booleanToHclTerraform(this._preflightValidations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      reserved_ip_ranges: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._reservedIpRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_account: {
        value: cdktn.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_uri: {
        value: cdktn.stringToHclTerraform(this._templateUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_spec: {
        value: googleVertexAiPipelineJobEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiPipelineJobEncryptionSpecList",
      },
      psc_interface_config: {
        value: googleVertexAiPipelineJobPscInterfaceConfigToHclTerraform(this._pscInterfaceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiPipelineJobPscInterfaceConfigList",
      },
      runtime_config: {
        value: googleVertexAiPipelineJobRuntimeConfigToHclTerraform(this._runtimeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiPipelineJobRuntimeConfigList",
      },
      timeouts: {
        value: googleVertexAiPipelineJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVertexAiPipelineJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
