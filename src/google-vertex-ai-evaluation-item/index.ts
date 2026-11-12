/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleVertexAiEvaluationItemConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#deletion_policy GoogleVertexAiEvaluationItem#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The user-friendly display name for the EvaluationItem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#display_name GoogleVertexAiEvaluationItem#display_name}
  */
  readonly displayName: string;
  /**
  * The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#evaluation_item_type GoogleVertexAiEvaluationItem#evaluation_item_type}
  */
  readonly evaluationItemType: string;
  /**
  * The Cloud Storage object where the request or response is stored.
  * Exactly one of 'evaluation_request' or 'gcs_uri' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#gcs_uri GoogleVertexAiEvaluationItem#gcs_uri}
  */
  readonly gcsUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#id GoogleVertexAiEvaluationItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels for the EvaluationItem.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#labels GoogleVertexAiEvaluationItem#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * User-defined metadata for this evaluation item as a JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#metadata GoogleVertexAiEvaluationItem#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#project GoogleVertexAiEvaluationItem#project}
  */
  readonly project?: string;
  /**
  * The region of the EvaluationItem. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#region GoogleVertexAiEvaluationItem#region}
  */
  readonly region: string;
  /**
  * evaluation_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#evaluation_request GoogleVertexAiEvaluationItem#evaluation_request}
  */
  readonly evaluationRequest?: GoogleVertexAiEvaluationItemEvaluationRequest;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#timeouts GoogleVertexAiEvaluationItem#timeouts}
  */
  readonly timeouts?: GoogleVertexAiEvaluationItemTimeouts;
}
export interface GoogleVertexAiEvaluationItemError {
}

export function googleVertexAiEvaluationItemErrorToTerraform(struct?: GoogleVertexAiEvaluationItemError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiEvaluationItemErrorToHclTerraform(struct?: GoogleVertexAiEvaluationItemError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiEvaluationItemErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiEvaluationItemError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemError | undefined) {
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

export class GoogleVertexAiEvaluationItemErrorList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiEvaluationItemErrorOutputReference {
    return new GoogleVertexAiEvaluationItemErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError {
}

export function googleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsError | undefined) {
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

export class GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference {
    return new GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts {
}

export function googleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluated_rubric - computed: true, optional: false, required: false
  public get evaluatedRubric() {
    return this.getStringAttribute('evaluated_rubric');
  }

  // reasoning - computed: true, optional: false, required: false
  public get reasoning() {
    return this.getStringAttribute('reasoning');
  }

  // verdict - computed: true, optional: false, required: false
  public get verdict() {
    return this.getBooleanAttribute('verdict');
  }
}

export class GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference {
    return new GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults {
}

export function googleVertexAiEvaluationItemEvaluationResponseCandidateResultsToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiEvaluationItemEvaluationResponseCandidateResultsToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationResponseCandidateResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_results - computed: true, optional: false, required: false
  public get additionalResults() {
    return this.getStringAttribute('additional_results');
  }

  // candidate - computed: true, optional: false, required: false
  public get candidate() {
    return this.getStringAttribute('candidate');
  }

  // error - computed: true, optional: false, required: false
  private _error = new GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // explanation - computed: true, optional: false, required: false
  public get explanation() {
    return this.getStringAttribute('explanation');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // rubric_verdicts - computed: true, optional: false, required: false
  private _rubricVerdicts = new GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList(this, "rubric_verdicts", false);
  public get rubricVerdicts() {
    return this._rubricVerdicts;
  }

  // score - computed: true, optional: false, required: false
  public get score() {
    return this.getNumberAttribute('score');
  }
}

export class GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference {
    return new GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiEvaluationItemEvaluationResponse {
}

export function googleVertexAiEvaluationItemEvaluationResponseToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiEvaluationItemEvaluationResponseToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiEvaluationItemEvaluationResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // candidate_results - computed: true, optional: false, required: false
  private _candidateResults = new GoogleVertexAiEvaluationItemEvaluationResponseCandidateResultsList(this, "candidate_results", false);
  public get candidateResults() {
    return this._candidateResults;
  }

  // evaluation_request - computed: true, optional: false, required: false
  public get evaluationRequest() {
    return this.getStringAttribute('evaluation_request');
  }

  // evaluation_run - computed: true, optional: false, required: false
  public get evaluationRun() {
    return this.getStringAttribute('evaluation_run');
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // request - computed: true, optional: false, required: false
  public get request() {
    return this.getStringAttribute('request');
  }
}

export class GoogleVertexAiEvaluationItemEvaluationResponseList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiEvaluationItemEvaluationResponseOutputReference {
    return new GoogleVertexAiEvaluationItemEvaluationResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError {
}

export function googleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesError | undefined) {
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

export class GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference {
    return new GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses {
  /**
  * Represents the complete execution trace of a multi-turn conversation,
  * which can involve single or multiple agents, as a JSON string. This
  * field is used to provide the full output of an agent's run, including
  * all turns and events, for direct evaluation.
  * At most one of 'text', 'value', or 'agent_data' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#agent_data GoogleVertexAiEvaluationItem#agent_data}
  */
  readonly agentData?: string;
  /**
  * The name of the candidate that produced the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#candidate GoogleVertexAiEvaluationItem#candidate}
  */
  readonly candidate: string;
  /**
  * Text response.
  * At most one of 'text', 'value', or 'agent_data' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#text GoogleVertexAiEvaluationItem#text}
  */
  readonly text?: string;
  /**
  * Fields and values that can be used to populate the response template, as a JSON string.
  * At most one of 'text', 'value', or 'agent_data' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#value GoogleVertexAiEvaluationItem#value}
  */
  readonly value?: string;
}

export function googleVertexAiEvaluationItemEvaluationRequestCandidateResponsesToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_data: cdktn.stringToTerraform(struct!.agentData),
    candidate: cdktn.stringToTerraform(struct!.candidate),
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleVertexAiEvaluationItemEvaluationRequestCandidateResponsesToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_data: {
      value: cdktn.stringToHclTerraform(struct!.agentData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    candidate: {
      value: cdktn.stringToHclTerraform(struct!.candidate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
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

export class GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentData !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentData = this._agentData;
    }
    if (this._candidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.candidate = this._candidate;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentData = undefined;
      this._candidate = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentData = value.agentData;
      this._candidate = value.candidate;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // agent_data - computed: false, optional: true, required: false
  private _agentData?: string; 
  public get agentData() {
    return this.getStringAttribute('agent_data');
  }
  public set agentData(value: string) {
    this._agentData = value;
  }
  public resetAgentData() {
    this._agentData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentDataInput() {
    return this._agentData;
  }

  // candidate - computed: false, optional: false, required: true
  private _candidate?: string; 
  public get candidate() {
    return this.getStringAttribute('candidate');
  }
  public set candidate(value: string) {
    this._candidate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get candidateInput() {
    return this._candidate;
  }

  // error - computed: true, optional: false, required: false
  private _error = new GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
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

export class GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference {
    return new GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError {
}

export function googleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseError | undefined) {
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

export class GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference {
    return new GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse {
  /**
  * Represents the complete execution trace of a multi-turn conversation,
  * which can involve single or multiple agents, as a JSON string. This
  * field is used to provide the full output of an agent's run, including
  * all turns and events, for direct evaluation.
  * At most one of 'text', 'value', or 'agent_data' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#agent_data GoogleVertexAiEvaluationItem#agent_data}
  */
  readonly agentData?: string;
  /**
  * The name of the candidate that produced the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#candidate GoogleVertexAiEvaluationItem#candidate}
  */
  readonly candidate: string;
  /**
  * Text response.
  * At most one of 'text', 'value', or 'agent_data' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#text GoogleVertexAiEvaluationItem#text}
  */
  readonly text?: string;
  /**
  * Fields and values that can be used to populate the response template, as a JSON string.
  * At most one of 'text', 'value', or 'agent_data' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#value GoogleVertexAiEvaluationItem#value}
  */
  readonly value?: string;
}

export function googleVertexAiEvaluationItemEvaluationRequestGoldenResponseToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference | GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_data: cdktn.stringToTerraform(struct!.agentData),
    candidate: cdktn.stringToTerraform(struct!.candidate),
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleVertexAiEvaluationItemEvaluationRequestGoldenResponseToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference | GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_data: {
      value: cdktn.stringToHclTerraform(struct!.agentData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    candidate: {
      value: cdktn.stringToHclTerraform(struct!.candidate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
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

export class GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentData !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentData = this._agentData;
    }
    if (this._candidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.candidate = this._candidate;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentData = undefined;
      this._candidate = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentData = value.agentData;
      this._candidate = value.candidate;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // agent_data - computed: false, optional: true, required: false
  private _agentData?: string; 
  public get agentData() {
    return this.getStringAttribute('agent_data');
  }
  public set agentData(value: string) {
    this._agentData = value;
  }
  public resetAgentData() {
    this._agentData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentDataInput() {
    return this._agentData;
  }

  // candidate - computed: false, optional: false, required: true
  private _candidate?: string; 
  public get candidate() {
    return this.getStringAttribute('candidate');
  }
  public set candidate(value: string) {
    this._candidate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get candidateInput() {
    return this._candidate;
  }

  // error - computed: true, optional: false, required: false
  private _error = new GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
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
export interface GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData {
  /**
  * The values for fields in the prompt template, as a JSON string mapping
  * field names to Content objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#values GoogleVertexAiEvaluationItem#values}
  */
  readonly values?: string;
}

export function googleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference | GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    values: cdktn.stringToTerraform(struct!.values),
  }
}


export function googleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference | GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    values: {
      value: cdktn.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
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
export interface GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario {
  /**
  * The plan for the conversation, used to drive the multi-turn agent run and
  * generate the simulated agent evaluation dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#conversation_plan GoogleVertexAiEvaluationItem#conversation_plan}
  */
  readonly conversationPlan: string;
  /**
  * The prompt that starts the conversation between the simulated user and
  * the agent under test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#starting_prompt GoogleVertexAiEvaluationItem#starting_prompt}
  */
  readonly startingPrompt: string;
}

export function googleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference | GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conversation_plan: cdktn.stringToTerraform(struct!.conversationPlan),
    starting_prompt: cdktn.stringToTerraform(struct!.startingPrompt),
  }
}


export function googleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference | GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conversation_plan: {
      value: cdktn.stringToHclTerraform(struct!.conversationPlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_prompt: {
      value: cdktn.stringToHclTerraform(struct!.startingPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conversationPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationPlan = this._conversationPlan;
    }
    if (this._startingPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPrompt = this._startingPrompt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conversationPlan = undefined;
      this._startingPrompt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conversationPlan = value.conversationPlan;
      this._startingPrompt = value.startingPrompt;
    }
  }

  // conversation_plan - computed: false, optional: false, required: true
  private _conversationPlan?: string; 
  public get conversationPlan() {
    return this.getStringAttribute('conversation_plan');
  }
  public set conversationPlan(value: string) {
    this._conversationPlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationPlanInput() {
    return this._conversationPlan;
  }

  // starting_prompt - computed: false, optional: false, required: true
  private _startingPrompt?: string; 
  public get startingPrompt() {
    return this.getStringAttribute('starting_prompt');
  }
  public set startingPrompt(value: string) {
    this._startingPrompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPromptInput() {
    return this._startingPrompt;
  }
}
export interface GoogleVertexAiEvaluationItemEvaluationRequestPrompt {
  /**
  * Represents the complete execution trace of a multi-turn conversation,
  * which can involve single or multiple agents, as a JSON string. This
  * serves as the input context for agent scraping.
  * At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#agent_data GoogleVertexAiEvaluationItem#agent_data}
  */
  readonly agentData?: string;
  /**
  * Text prompt.
  * At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#text GoogleVertexAiEvaluationItem#text}
  */
  readonly text?: string;
  /**
  * Fields and values that can be used to populate the prompt template, as a JSON string.
  * At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#value GoogleVertexAiEvaluationItem#value}
  */
  readonly value?: string;
  /**
  * prompt_template_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#prompt_template_data GoogleVertexAiEvaluationItem#prompt_template_data}
  */
  readonly promptTemplateData?: GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData;
  /**
  * user_scenario block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#user_scenario GoogleVertexAiEvaluationItem#user_scenario}
  */
  readonly userScenario?: GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario;
}

export function googleVertexAiEvaluationItemEvaluationRequestPromptToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference | GoogleVertexAiEvaluationItemEvaluationRequestPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_data: cdktn.stringToTerraform(struct!.agentData),
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
    prompt_template_data: googleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataToTerraform(struct!.promptTemplateData),
    user_scenario: googleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioToTerraform(struct!.userScenario),
  }
}


export function googleVertexAiEvaluationItemEvaluationRequestPromptToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference | GoogleVertexAiEvaluationItemEvaluationRequestPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_data: {
      value: cdktn.stringToHclTerraform(struct!.agentData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
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
    prompt_template_data: {
      value: googleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataToHclTerraform(struct!.promptTemplateData),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataList",
    },
    user_scenario: {
      value: googleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioToHclTerraform(struct!.userScenario),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationRequestPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentData !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentData = this._agentData;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._promptTemplateData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptTemplateData = this._promptTemplateData?.internalValue;
    }
    if (this._userScenario?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userScenario = this._userScenario?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationRequestPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentData = undefined;
      this._text = undefined;
      this._value = undefined;
      this._promptTemplateData.internalValue = undefined;
      this._userScenario.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentData = value.agentData;
      this._text = value.text;
      this._value = value.value;
      this._promptTemplateData.internalValue = value.promptTemplateData;
      this._userScenario.internalValue = value.userScenario;
    }
  }

  // agent_data - computed: false, optional: true, required: false
  private _agentData?: string; 
  public get agentData() {
    return this.getStringAttribute('agent_data');
  }
  public set agentData(value: string) {
    this._agentData = value;
  }
  public resetAgentData() {
    this._agentData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentDataInput() {
    return this._agentData;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
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

  // prompt_template_data - computed: false, optional: true, required: false
  private _promptTemplateData = new GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference(this, "prompt_template_data");
  public get promptTemplateData() {
    return this._promptTemplateData;
  }
  public putPromptTemplateData(value: GoogleVertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData) {
    this._promptTemplateData.internalValue = value;
  }
  public resetPromptTemplateData() {
    this._promptTemplateData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptTemplateDataInput() {
    return this._promptTemplateData.internalValue;
  }

  // user_scenario - computed: false, optional: true, required: false
  private _userScenario = new GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference(this, "user_scenario");
  public get userScenario() {
    return this._userScenario;
  }
  public putUserScenario(value: GoogleVertexAiEvaluationItemEvaluationRequestPromptUserScenario) {
    this._userScenario.internalValue = value;
  }
  public resetUserScenario() {
    this._userScenario.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userScenarioInput() {
    return this._userScenario.internalValue;
  }
}
export interface GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty {
  /**
  * Description of the property being evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#description GoogleVertexAiEvaluationItem#description}
  */
  readonly description?: string;
}

export function googleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference | GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
  }
}


export function googleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference | GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
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
}
export interface GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent {
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#property GoogleVertexAiEvaluationItem#property}
  */
  readonly property?: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty;
}

export function googleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference | GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    property: googleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyToTerraform(struct!.property),
  }
}


export function googleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference | GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    property: {
      value: googleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyToHclTerraform(struct!.property),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._property.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._property.internalValue = value.property;
    }
  }

  // property - computed: false, optional: true, required: false
  private _property = new GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference(this, "property");
  public get property() {
    return this._property;
  }
  public putProperty(value: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}
export interface GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics {
  /**
  * The relative importance of this rubric. Possible values: ["HIGH", "MEDIUM", "LOW"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#importance GoogleVertexAiEvaluationItem#importance}
  */
  readonly importance?: string;
  /**
  * Unique identifier for the rubric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#rubric_id GoogleVertexAiEvaluationItem#rubric_id}
  */
  readonly rubricId?: string;
  /**
  * A type designator for the rubric, e.g. 'SUMMARIZATION_QUALITY'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#type GoogleVertexAiEvaluationItem#type}
  */
  readonly type?: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#content GoogleVertexAiEvaluationItem#content}
  */
  readonly content: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent;
}

export function googleVertexAiEvaluationItemEvaluationRequestRubricsRubricsToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    importance: cdktn.stringToTerraform(struct!.importance),
    rubric_id: cdktn.stringToTerraform(struct!.rubricId),
    type: cdktn.stringToTerraform(struct!.type),
    content: googleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentToTerraform(struct!.content),
  }
}


export function googleVertexAiEvaluationItemEvaluationRequestRubricsRubricsToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    importance: {
      value: cdktn.stringToHclTerraform(struct!.importance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rubric_id: {
      value: cdktn.stringToHclTerraform(struct!.rubricId),
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
    content: {
      value: googleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._importance !== undefined) {
      hasAnyValues = true;
      internalValueResult.importance = this._importance;
    }
    if (this._rubricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rubricId = this._rubricId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._importance = undefined;
      this._rubricId = undefined;
      this._type = undefined;
      this._content.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._importance = value.importance;
      this._rubricId = value.rubricId;
      this._type = value.type;
      this._content.internalValue = value.content;
    }
  }

  // importance - computed: false, optional: true, required: false
  private _importance?: string; 
  public get importance() {
    return this.getStringAttribute('importance');
  }
  public set importance(value: string) {
    this._importance = value;
  }
  public resetImportance() {
    this._importance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importanceInput() {
    return this._importance;
  }

  // rubric_id - computed: false, optional: true, required: false
  private _rubricId?: string; 
  public get rubricId() {
    return this.getStringAttribute('rubric_id');
  }
  public set rubricId(value: string) {
    this._rubricId = value;
  }
  public resetRubricId() {
    this._rubricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rubricIdInput() {
    return this._rubricId;
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

  // content - computed: false, optional: false, required: true
  private _content = new GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsContent) {
    this._content.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }
}

export class GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference {
    return new GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiEvaluationItemEvaluationRequestRubrics {
  /**
  * Human-readable name for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#display_name GoogleVertexAiEvaluationItem#display_name}
  */
  readonly displayName?: string;
  /**
  * Unique identifier for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#group_id GoogleVertexAiEvaluationItem#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#name GoogleVertexAiEvaluationItem#name}
  */
  readonly name: string;
  /**
  * rubrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#rubrics GoogleVertexAiEvaluationItem#rubrics}
  */
  readonly rubrics?: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics[] | cdktn.IResolvable;
}

export function googleVertexAiEvaluationItemEvaluationRequestRubricsToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestRubrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    group_id: cdktn.stringToTerraform(struct!.groupId),
    name: cdktn.stringToTerraform(struct!.name),
    rubrics: cdktn.listMapper(googleVertexAiEvaluationItemEvaluationRequestRubricsRubricsToTerraform, true)(struct!.rubrics),
  }
}


export function googleVertexAiEvaluationItemEvaluationRequestRubricsToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestRubrics | cdktn.IResolvable): any {
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
    group_id: {
      value: cdktn.stringToHclTerraform(struct!.groupId),
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
    rubrics: {
      value: cdktn.listMapperHcl(googleVertexAiEvaluationItemEvaluationRequestRubricsRubricsToHclTerraform, true)(struct!.rubrics),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationRequestRubrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rubrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rubrics = this._rubrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationRequestRubrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._groupId = undefined;
      this._name = undefined;
      this._rubrics.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._groupId = value.groupId;
      this._name = value.name;
      this._rubrics.internalValue = value.rubrics;
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

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // rubrics - computed: false, optional: true, required: false
  private _rubrics = new GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubricsList(this, "rubrics", false);
  public get rubrics() {
    return this._rubrics;
  }
  public putRubrics(value: GoogleVertexAiEvaluationItemEvaluationRequestRubricsRubrics[] | cdktn.IResolvable) {
    this._rubrics.internalValue = value;
  }
  public resetRubrics() {
    this._rubrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rubricsInput() {
    return this._rubrics.internalValue;
  }
}

export class GoogleVertexAiEvaluationItemEvaluationRequestRubricsList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiEvaluationItemEvaluationRequestRubrics[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference {
    return new GoogleVertexAiEvaluationItemEvaluationRequestRubricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiEvaluationItemEvaluationRequest {
  /**
  * candidate_responses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#candidate_responses GoogleVertexAiEvaluationItem#candidate_responses}
  */
  readonly candidateResponses?: GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses[] | cdktn.IResolvable;
  /**
  * golden_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#golden_response GoogleVertexAiEvaluationItem#golden_response}
  */
  readonly goldenResponse?: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse;
  /**
  * prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#prompt GoogleVertexAiEvaluationItem#prompt}
  */
  readonly prompt?: GoogleVertexAiEvaluationItemEvaluationRequestPrompt;
  /**
  * rubrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#rubrics GoogleVertexAiEvaluationItem#rubrics}
  */
  readonly rubrics?: GoogleVertexAiEvaluationItemEvaluationRequestRubrics[] | cdktn.IResolvable;
}

export function googleVertexAiEvaluationItemEvaluationRequestToTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestOutputReference | GoogleVertexAiEvaluationItemEvaluationRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    candidate_responses: cdktn.listMapper(googleVertexAiEvaluationItemEvaluationRequestCandidateResponsesToTerraform, true)(struct!.candidateResponses),
    golden_response: googleVertexAiEvaluationItemEvaluationRequestGoldenResponseToTerraform(struct!.goldenResponse),
    prompt: googleVertexAiEvaluationItemEvaluationRequestPromptToTerraform(struct!.prompt),
    rubrics: cdktn.listMapper(googleVertexAiEvaluationItemEvaluationRequestRubricsToTerraform, true)(struct!.rubrics),
  }
}


export function googleVertexAiEvaluationItemEvaluationRequestToHclTerraform(struct?: GoogleVertexAiEvaluationItemEvaluationRequestOutputReference | GoogleVertexAiEvaluationItemEvaluationRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    candidate_responses: {
      value: cdktn.listMapperHcl(googleVertexAiEvaluationItemEvaluationRequestCandidateResponsesToHclTerraform, true)(struct!.candidateResponses),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList",
    },
    golden_response: {
      value: googleVertexAiEvaluationItemEvaluationRequestGoldenResponseToHclTerraform(struct!.goldenResponse),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseList",
    },
    prompt: {
      value: googleVertexAiEvaluationItemEvaluationRequestPromptToHclTerraform(struct!.prompt),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiEvaluationItemEvaluationRequestPromptList",
    },
    rubrics: {
      value: cdktn.listMapperHcl(googleVertexAiEvaluationItemEvaluationRequestRubricsToHclTerraform, true)(struct!.rubrics),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleVertexAiEvaluationItemEvaluationRequestRubricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiEvaluationItemEvaluationRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiEvaluationItemEvaluationRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._candidateResponses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.candidateResponses = this._candidateResponses?.internalValue;
    }
    if (this._goldenResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goldenResponse = this._goldenResponse?.internalValue;
    }
    if (this._prompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt?.internalValue;
    }
    if (this._rubrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rubrics = this._rubrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiEvaluationItemEvaluationRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._candidateResponses.internalValue = undefined;
      this._goldenResponse.internalValue = undefined;
      this._prompt.internalValue = undefined;
      this._rubrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._candidateResponses.internalValue = value.candidateResponses;
      this._goldenResponse.internalValue = value.goldenResponse;
      this._prompt.internalValue = value.prompt;
      this._rubrics.internalValue = value.rubrics;
    }
  }

  // candidate_responses - computed: false, optional: true, required: false
  private _candidateResponses = new GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponsesList(this, "candidate_responses", false);
  public get candidateResponses() {
    return this._candidateResponses;
  }
  public putCandidateResponses(value: GoogleVertexAiEvaluationItemEvaluationRequestCandidateResponses[] | cdktn.IResolvable) {
    this._candidateResponses.internalValue = value;
  }
  public resetCandidateResponses() {
    this._candidateResponses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get candidateResponsesInput() {
    return this._candidateResponses.internalValue;
  }

  // golden_response - computed: false, optional: true, required: false
  private _goldenResponse = new GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference(this, "golden_response");
  public get goldenResponse() {
    return this._goldenResponse;
  }
  public putGoldenResponse(value: GoogleVertexAiEvaluationItemEvaluationRequestGoldenResponse) {
    this._goldenResponse.internalValue = value;
  }
  public resetGoldenResponse() {
    this._goldenResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goldenResponseInput() {
    return this._goldenResponse.internalValue;
  }

  // prompt - computed: false, optional: true, required: false
  private _prompt = new GoogleVertexAiEvaluationItemEvaluationRequestPromptOutputReference(this, "prompt");
  public get prompt() {
    return this._prompt;
  }
  public putPrompt(value: GoogleVertexAiEvaluationItemEvaluationRequestPrompt) {
    this._prompt.internalValue = value;
  }
  public resetPrompt() {
    this._prompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt.internalValue;
  }

  // rubrics - computed: false, optional: true, required: false
  private _rubrics = new GoogleVertexAiEvaluationItemEvaluationRequestRubricsList(this, "rubrics", true);
  public get rubrics() {
    return this._rubrics;
  }
  public putRubrics(value: GoogleVertexAiEvaluationItemEvaluationRequestRubrics[] | cdktn.IResolvable) {
    this._rubrics.internalValue = value;
  }
  public resetRubrics() {
    this._rubrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rubricsInput() {
    return this._rubrics.internalValue;
  }
}
export interface GoogleVertexAiEvaluationItemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#create GoogleVertexAiEvaluationItem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#delete GoogleVertexAiEvaluationItem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#update GoogleVertexAiEvaluationItem#update}
  */
  readonly update?: string;
}

export function googleVertexAiEvaluationItemTimeoutsToTerraform(struct?: GoogleVertexAiEvaluationItemTimeouts | cdktn.IResolvable): any {
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


export function googleVertexAiEvaluationItemTimeoutsToHclTerraform(struct?: GoogleVertexAiEvaluationItemTimeouts | cdktn.IResolvable): any {
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

export class GoogleVertexAiEvaluationItemTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVertexAiEvaluationItemTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleVertexAiEvaluationItemTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item google_vertex_ai_evaluation_item}
*/
export class GoogleVertexAiEvaluationItem extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_evaluation_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleVertexAiEvaluationItem resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVertexAiEvaluationItem to import
  * @param importFromId The id of the existing GoogleVertexAiEvaluationItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVertexAiEvaluationItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_evaluation_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_evaluation_item google_vertex_ai_evaluation_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiEvaluationItemConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiEvaluationItemConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_evaluation_item',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '8.11.0',
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
    this._evaluationItemType = config.evaluationItemType;
    this._gcsUri = config.gcsUri;
    this._id = config.id;
    this._labels = config.labels;
    this._metadata = config.metadata;
    this._project = config.project;
    this._region = config.region;
    this._evaluationRequest.internalValue = config.evaluationRequest;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // error - computed: true, optional: false, required: false
  private _error = new GoogleVertexAiEvaluationItemErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // evaluation_item_type - computed: false, optional: false, required: true
  private _evaluationItemType?: string; 
  public get evaluationItemType() {
    return this.getStringAttribute('evaluation_item_type');
  }
  public set evaluationItemType(value: string) {
    this._evaluationItemType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationItemTypeInput() {
    return this._evaluationItemType;
  }

  // evaluation_response - computed: true, optional: false, required: false
  private _evaluationResponse = new GoogleVertexAiEvaluationItemEvaluationResponseList(this, "evaluation_response", false);
  public get evaluationResponse() {
    return this._evaluationResponse;
  }

  // gcs_uri - computed: false, optional: true, required: false
  private _gcsUri?: string; 
  public get gcsUri() {
    return this.getStringAttribute('gcs_uri');
  }
  public set gcsUri(value: string) {
    this._gcsUri = value;
  }
  public resetGcsUri() {
    this._gcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsUriInput() {
    return this._gcsUri;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // evaluation_request - computed: false, optional: true, required: false
  private _evaluationRequest = new GoogleVertexAiEvaluationItemEvaluationRequestOutputReference(this, "evaluation_request");
  public get evaluationRequest() {
    return this._evaluationRequest;
  }
  public putEvaluationRequest(value: GoogleVertexAiEvaluationItemEvaluationRequest) {
    this._evaluationRequest.internalValue = value;
  }
  public resetEvaluationRequest() {
    this._evaluationRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationRequestInput() {
    return this._evaluationRequest.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiEvaluationItemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiEvaluationItemTimeouts) {
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
      evaluation_item_type: cdktn.stringToTerraform(this._evaluationItemType),
      gcs_uri: cdktn.stringToTerraform(this._gcsUri),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      metadata: cdktn.stringToTerraform(this._metadata),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      evaluation_request: googleVertexAiEvaluationItemEvaluationRequestToTerraform(this._evaluationRequest.internalValue),
      timeouts: googleVertexAiEvaluationItemTimeoutsToTerraform(this._timeouts.internalValue),
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
      evaluation_item_type: {
        value: cdktn.stringToHclTerraform(this._evaluationItemType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcs_uri: {
        value: cdktn.stringToHclTerraform(this._gcsUri),
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
      metadata: {
        value: cdktn.stringToHclTerraform(this._metadata),
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
      evaluation_request: {
        value: googleVertexAiEvaluationItemEvaluationRequestToHclTerraform(this._evaluationRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiEvaluationItemEvaluationRequestList",
      },
      timeouts: {
        value: googleVertexAiEvaluationItemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVertexAiEvaluationItemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
