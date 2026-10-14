/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleVertexAiOnlineEvaluatorConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the agent that the OnlineEvaluator evaluates periodically.
  * This value is used to filter the traces with a matching cloud.resource_id
  * and link the evaluation results with relevant dashboards/UIs. This field
  * is immutable; once set, it cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#agent_resource GoogleVertexAiOnlineEvaluator#agent_resource}
  */
  readonly agentResource: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#deletion_policy GoogleVertexAiOnlineEvaluator#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Human-readable name for the OnlineEvaluator. The name doesn't have to be
  * unique. The name can consist of any UTF-8 characters. The maximum length
  * is 63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#display_name GoogleVertexAiOnlineEvaluator#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#id GoogleVertexAiOnlineEvaluator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#project GoogleVertexAiOnlineEvaluator#project}
  */
  readonly project?: string;
  /**
  * The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#region GoogleVertexAiOnlineEvaluator#region}
  */
  readonly region?: string;
  /**
  * cloud_observability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#cloud_observability GoogleVertexAiOnlineEvaluator#cloud_observability}
  */
  readonly cloudObservability: GoogleVertexAiOnlineEvaluatorCloudObservability;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#config GoogleVertexAiOnlineEvaluator#config}
  */
  readonly config: GoogleVertexAiOnlineEvaluatorConfigA;
  /**
  * metric_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#metric_sources GoogleVertexAiOnlineEvaluator#metric_sources}
  */
  readonly metricSources: GoogleVertexAiOnlineEvaluatorMetricSources[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#timeouts GoogleVertexAiOnlineEvaluator#timeouts}
  */
  readonly timeouts?: GoogleVertexAiOnlineEvaluatorTimeouts;
}
export interface GoogleVertexAiOnlineEvaluatorStateDetails {
}

export function googleVertexAiOnlineEvaluatorStateDetailsToTerraform(struct?: GoogleVertexAiOnlineEvaluatorStateDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiOnlineEvaluatorStateDetailsToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorStateDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiOnlineEvaluatorStateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorStateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleVertexAiOnlineEvaluatorStateDetailsList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference {
    return new GoogleVertexAiOnlineEvaluatorStateDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry {
  /**
  * Defines which version of the OTel Semantic Convention the data
  * follows. Can be "1.39.0" or newer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#semconv_version GoogleVertexAiOnlineEvaluator#semconv_version}
  */
  readonly semconvVersion: string;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    semconv_version: cdktn.stringToTerraform(struct!.semconvVersion),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    semconv_version: {
      value: cdktn.stringToHclTerraform(struct!.semconvVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._semconvVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.semconvVersion = this._semconvVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._semconvVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._semconvVersion = value.semconvVersion;
    }
  }

  // semconv_version - computed: false, optional: false, required: true
  private _semconvVersion?: string; 
  public get semconvVersion() {
    return this.getStringAttribute('semconv_version');
  }
  public set semconvVersion(value: string) {
    this._semconvVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get semconvVersionInput() {
    return this._semconvVersion;
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter {
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#duration GoogleVertexAiOnlineEvaluator#duration}
  */
  readonly duration?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration;
  /**
  * model_call_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#model_call_errors GoogleVertexAiOnlineEvaluator#model_call_errors}
  */
  readonly modelCallErrors?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors;
  /**
  * model_calls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#model_calls GoogleVertexAiOnlineEvaluator#model_calls}
  */
  readonly modelCalls?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls;
  /**
  * tool_call_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#tool_call_errors GoogleVertexAiOnlineEvaluator#tool_call_errors}
  */
  readonly toolCallErrors?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors;
  /**
  * tool_calls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#tool_calls GoogleVertexAiOnlineEvaluator#tool_calls}
  */
  readonly toolCalls?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls;
  /**
  * total_token_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#total_token_usage GoogleVertexAiOnlineEvaluator#total_token_usage}
  */
  readonly totalTokenUsage?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage;
  /**
  * user_turns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#user_turns GoogleVertexAiOnlineEvaluator#user_turns}
  */
  readonly userTurns?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationToTerraform(struct!.duration),
    model_call_errors: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsToTerraform(struct!.modelCallErrors),
    model_calls: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsToTerraform(struct!.modelCalls),
    tool_call_errors: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsToTerraform(struct!.toolCallErrors),
    tool_calls: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsToTerraform(struct!.toolCalls),
    total_token_usage: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageToTerraform(struct!.totalTokenUsage),
    user_turns: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsToTerraform(struct!.userTurns),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationList",
    },
    model_call_errors: {
      value: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsToHclTerraform(struct!.modelCallErrors),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsList",
    },
    model_calls: {
      value: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsToHclTerraform(struct!.modelCalls),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsList",
    },
    tool_call_errors: {
      value: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsToHclTerraform(struct!.toolCallErrors),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsList",
    },
    tool_calls: {
      value: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsToHclTerraform(struct!.toolCalls),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsList",
    },
    total_token_usage: {
      value: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageToHclTerraform(struct!.totalTokenUsage),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageList",
    },
    user_turns: {
      value: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsToHclTerraform(struct!.userTurns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._modelCallErrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelCallErrors = this._modelCallErrors?.internalValue;
    }
    if (this._modelCalls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelCalls = this._modelCalls?.internalValue;
    }
    if (this._toolCallErrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolCallErrors = this._toolCallErrors?.internalValue;
    }
    if (this._toolCalls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolCalls = this._toolCalls?.internalValue;
    }
    if (this._totalTokenUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTokenUsage = this._totalTokenUsage?.internalValue;
    }
    if (this._userTurns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTurns = this._userTurns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration.internalValue = undefined;
      this._modelCallErrors.internalValue = undefined;
      this._modelCalls.internalValue = undefined;
      this._toolCallErrors.internalValue = undefined;
      this._toolCalls.internalValue = undefined;
      this._totalTokenUsage.internalValue = undefined;
      this._userTurns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration.internalValue = value.duration;
      this._modelCallErrors.internalValue = value.modelCallErrors;
      this._modelCalls.internalValue = value.modelCalls;
      this._toolCallErrors.internalValue = value.toolCallErrors;
      this._toolCalls.internalValue = value.toolCalls;
      this._totalTokenUsage.internalValue = value.totalTokenUsage;
      this._userTurns.internalValue = value.userTurns;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // model_call_errors - computed: false, optional: true, required: false
  private _modelCallErrors = new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference(this, "model_call_errors");
  public get modelCallErrors() {
    return this._modelCallErrors;
  }
  public putModelCallErrors(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors) {
    this._modelCallErrors.internalValue = value;
  }
  public resetModelCallErrors() {
    this._modelCallErrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelCallErrorsInput() {
    return this._modelCallErrors.internalValue;
  }

  // model_calls - computed: false, optional: true, required: false
  private _modelCalls = new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference(this, "model_calls");
  public get modelCalls() {
    return this._modelCalls;
  }
  public putModelCalls(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls) {
    this._modelCalls.internalValue = value;
  }
  public resetModelCalls() {
    this._modelCalls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelCallsInput() {
    return this._modelCalls.internalValue;
  }

  // tool_call_errors - computed: false, optional: true, required: false
  private _toolCallErrors = new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference(this, "tool_call_errors");
  public get toolCallErrors() {
    return this._toolCallErrors;
  }
  public putToolCallErrors(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors) {
    this._toolCallErrors.internalValue = value;
  }
  public resetToolCallErrors() {
    this._toolCallErrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolCallErrorsInput() {
    return this._toolCallErrors.internalValue;
  }

  // tool_calls - computed: false, optional: true, required: false
  private _toolCalls = new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference(this, "tool_calls");
  public get toolCalls() {
    return this._toolCalls;
  }
  public putToolCalls(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls) {
    this._toolCalls.internalValue = value;
  }
  public resetToolCalls() {
    this._toolCalls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolCallsInput() {
    return this._toolCalls.internalValue;
  }

  // total_token_usage - computed: false, optional: true, required: false
  private _totalTokenUsage = new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference(this, "total_token_usage");
  public get totalTokenUsage() {
    return this._totalTokenUsage;
  }
  public putTotalTokenUsage(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage) {
    this._totalTokenUsage.internalValue = value;
  }
  public resetTotalTokenUsage() {
    this._totalTokenUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTokenUsageInput() {
    return this._totalTokenUsage.internalValue;
  }

  // user_turns - computed: false, optional: true, required: false
  private _userTurns = new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference(this, "user_turns");
  public get userTurns() {
    return this._userTurns;
  }
  public putUserTurns(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns) {
    this._userTurns.internalValue = value;
  }
  public resetUserTurns() {
    this._userTurns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTurnsInput() {
    return this._userTurns.internalValue;
  }
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference {
    return new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger {
  /**
  * The amount of time that must pass with no new traces before a
  * session is considered ready for evaluation. Must be a positive
  * duration no greater than 7 days (604800 seconds), e.g. "3600s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#threshold GoogleVertexAiOnlineEvaluator#threshold}
  */
  readonly threshold: string;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    threshold: cdktn.stringToTerraform(struct!.threshold),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    threshold: {
      value: cdktn.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#filter GoogleVertexAiOnlineEvaluator#filter}
  */
  readonly filter?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[] | cdktn.IResolvable;
  /**
  * inactivity_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#inactivity_trigger GoogleVertexAiOnlineEvaluator#inactivity_trigger}
  */
  readonly inactivityTrigger?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.listMapper(googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToTerraform, true)(struct!.filter),
    inactivity_trigger: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerToTerraform(struct!.inactivityTrigger),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.listMapperHcl(googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList",
    },
    inactivity_trigger: {
      value: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerToHclTerraform(struct!.inactivityTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._inactivityTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityTrigger = this._inactivityTrigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter.internalValue = undefined;
      this._inactivityTrigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter.internalValue = value.filter;
      this._inactivityTrigger.internalValue = value.inactivityTrigger;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[] | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // inactivity_trigger - computed: false, optional: true, required: false
  private _inactivityTrigger = new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference(this, "inactivity_trigger");
  public get inactivityTrigger() {
    return this._inactivityTrigger;
  }
  public putInactivityTrigger(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger) {
    this._inactivityTrigger.internalValue = value;
  }
  public resetInactivityTrigger() {
    this._inactivityTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTriggerInput() {
    return this._inactivityTrigger.internalValue;
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#comparison_operator GoogleVertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#value GoogleVertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter {
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#duration GoogleVertexAiOnlineEvaluator#duration}
  */
  readonly duration?: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration;
  /**
  * total_token_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#total_token_usage GoogleVertexAiOnlineEvaluator#total_token_usage}
  */
  readonly totalTokenUsage?: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationToTerraform(struct!.duration),
    total_token_usage: googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageToTerraform(struct!.totalTokenUsage),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationList",
    },
    total_token_usage: {
      value: googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageToHclTerraform(struct!.totalTokenUsage),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._totalTokenUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTokenUsage = this._totalTokenUsage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration.internalValue = undefined;
      this._totalTokenUsage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration.internalValue = value.duration;
      this._totalTokenUsage.internalValue = value.totalTokenUsage;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // total_token_usage - computed: false, optional: true, required: false
  private _totalTokenUsage = new GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference(this, "total_token_usage");
  public get totalTokenUsage() {
    return this._totalTokenUsage;
  }
  public putTotalTokenUsage(value: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage) {
    this._totalTokenUsage.internalValue = value;
  }
  public resetTotalTokenUsage() {
    this._totalTokenUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTokenUsageInput() {
    return this._totalTokenUsage.internalValue;
  }
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference {
    return new GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#filter GoogleVertexAiOnlineEvaluator#filter}
  */
  readonly filter?: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[] | cdktn.IResolvable;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.listMapper(googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterToTerraform, true)(struct!.filter),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.listMapperHcl(googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter.internalValue = value.filter;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[] | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface GoogleVertexAiOnlineEvaluatorCloudObservability {
  /**
  * Optional log view that will be used to query logs. If empty, the
  * project's default view ('projects/{{project_id}}') will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#log_view GoogleVertexAiOnlineEvaluator#log_view}
  */
  readonly logView?: string;
  /**
  * Optional trace view that will be used to query traces. If empty, the
  * '_AllSpans' view from the '_Trace' US bucket will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#trace_view GoogleVertexAiOnlineEvaluator#trace_view}
  */
  readonly traceView?: string;
  /**
  * open_telemetry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#open_telemetry GoogleVertexAiOnlineEvaluator#open_telemetry}
  */
  readonly openTelemetry: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry;
  /**
  * session_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#session_scope GoogleVertexAiOnlineEvaluator#session_scope}
  */
  readonly sessionScope?: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope;
  /**
  * trace_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#trace_scope GoogleVertexAiOnlineEvaluator#trace_scope}
  */
  readonly traceScope?: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope;
}

export function googleVertexAiOnlineEvaluatorCloudObservabilityToTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservability): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_view: cdktn.stringToTerraform(struct!.logView),
    trace_view: cdktn.stringToTerraform(struct!.traceView),
    open_telemetry: googleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryToTerraform(struct!.openTelemetry),
    session_scope: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeToTerraform(struct!.sessionScope),
    trace_scope: googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeToTerraform(struct!.traceScope),
  }
}


export function googleVertexAiOnlineEvaluatorCloudObservabilityToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference | GoogleVertexAiOnlineEvaluatorCloudObservability): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_view: {
      value: cdktn.stringToHclTerraform(struct!.logView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trace_view: {
      value: cdktn.stringToHclTerraform(struct!.traceView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_telemetry: {
      value: googleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryToHclTerraform(struct!.openTelemetry),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryList",
    },
    session_scope: {
      value: googleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeToHclTerraform(struct!.sessionScope),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeList",
    },
    trace_scope: {
      value: googleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeToHclTerraform(struct!.traceScope),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorCloudObservability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logView !== undefined) {
      hasAnyValues = true;
      internalValueResult.logView = this._logView;
    }
    if (this._traceView !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceView = this._traceView;
    }
    if (this._openTelemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openTelemetry = this._openTelemetry?.internalValue;
    }
    if (this._sessionScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionScope = this._sessionScope?.internalValue;
    }
    if (this._traceScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceScope = this._traceScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorCloudObservability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logView = undefined;
      this._traceView = undefined;
      this._openTelemetry.internalValue = undefined;
      this._sessionScope.internalValue = undefined;
      this._traceScope.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logView = value.logView;
      this._traceView = value.traceView;
      this._openTelemetry.internalValue = value.openTelemetry;
      this._sessionScope.internalValue = value.sessionScope;
      this._traceScope.internalValue = value.traceScope;
    }
  }

  // log_view - computed: false, optional: true, required: false
  private _logView?: string; 
  public get logView() {
    return this.getStringAttribute('log_view');
  }
  public set logView(value: string) {
    this._logView = value;
  }
  public resetLogView() {
    this._logView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logViewInput() {
    return this._logView;
  }

  // trace_view - computed: false, optional: true, required: false
  private _traceView?: string; 
  public get traceView() {
    return this.getStringAttribute('trace_view');
  }
  public set traceView(value: string) {
    this._traceView = value;
  }
  public resetTraceView() {
    this._traceView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceViewInput() {
    return this._traceView;
  }

  // open_telemetry - computed: false, optional: false, required: true
  private _openTelemetry = new GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference(this, "open_telemetry");
  public get openTelemetry() {
    return this._openTelemetry;
  }
  public putOpenTelemetry(value: GoogleVertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry) {
    this._openTelemetry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openTelemetryInput() {
    return this._openTelemetry.internalValue;
  }

  // session_scope - computed: false, optional: true, required: false
  private _sessionScope = new GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference(this, "session_scope");
  public get sessionScope() {
    return this._sessionScope;
  }
  public putSessionScope(value: GoogleVertexAiOnlineEvaluatorCloudObservabilitySessionScope) {
    this._sessionScope.internalValue = value;
  }
  public resetSessionScope() {
    this._sessionScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionScopeInput() {
    return this._sessionScope.internalValue;
  }

  // trace_scope - computed: false, optional: true, required: false
  private _traceScope = new GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference(this, "trace_scope");
  public get traceScope() {
    return this._traceScope;
  }
  public putTraceScope(value: GoogleVertexAiOnlineEvaluatorCloudObservabilityTraceScope) {
    this._traceScope.internalValue = value;
  }
  public resetTraceScope() {
    this._traceScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceScopeInput() {
    return this._traceScope.internalValue;
  }
}
export interface GoogleVertexAiOnlineEvaluatorConfigRandomSampling {
  /**
  * The percentage of traces to sample for evaluation. Must be an
  * integer between 1 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#percentage GoogleVertexAiOnlineEvaluator#percentage}
  */
  readonly percentage: number;
}

export function googleVertexAiOnlineEvaluatorConfigRandomSamplingToTerraform(struct?: GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference | GoogleVertexAiOnlineEvaluatorConfigRandomSampling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    percentage: cdktn.numberToTerraform(struct!.percentage),
  }
}


export function googleVertexAiOnlineEvaluatorConfigRandomSamplingToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference | GoogleVertexAiOnlineEvaluatorConfigRandomSampling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorConfigRandomSampling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorConfigRandomSampling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentage = value.percentage;
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
}
export interface GoogleVertexAiOnlineEvaluatorConfigA {
  /**
  * The maximum number of evaluations to perform per run. If set to 0, the
  * number is unbounded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#max_evaluated_samples_per_run GoogleVertexAiOnlineEvaluator#max_evaluated_samples_per_run}
  */
  readonly maxEvaluatedSamplesPerRun?: string;
  /**
  * random_sampling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#random_sampling GoogleVertexAiOnlineEvaluator#random_sampling}
  */
  readonly randomSampling?: GoogleVertexAiOnlineEvaluatorConfigRandomSampling;
}

export function googleVertexAiOnlineEvaluatorConfigAToTerraform(struct?: GoogleVertexAiOnlineEvaluatorConfigAOutputReference | GoogleVertexAiOnlineEvaluatorConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_evaluated_samples_per_run: cdktn.stringToTerraform(struct!.maxEvaluatedSamplesPerRun),
    random_sampling: googleVertexAiOnlineEvaluatorConfigRandomSamplingToTerraform(struct!.randomSampling),
  }
}


export function googleVertexAiOnlineEvaluatorConfigAToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorConfigAOutputReference | GoogleVertexAiOnlineEvaluatorConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_evaluated_samples_per_run: {
      value: cdktn.stringToHclTerraform(struct!.maxEvaluatedSamplesPerRun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    random_sampling: {
      value: googleVertexAiOnlineEvaluatorConfigRandomSamplingToHclTerraform(struct!.randomSampling),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiOnlineEvaluatorConfigRandomSamplingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorConfigAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEvaluatedSamplesPerRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvaluatedSamplesPerRun = this._maxEvaluatedSamplesPerRun;
    }
    if (this._randomSampling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomSampling = this._randomSampling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxEvaluatedSamplesPerRun = undefined;
      this._randomSampling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxEvaluatedSamplesPerRun = value.maxEvaluatedSamplesPerRun;
      this._randomSampling.internalValue = value.randomSampling;
    }
  }

  // max_evaluated_samples_per_run - computed: false, optional: true, required: false
  private _maxEvaluatedSamplesPerRun?: string; 
  public get maxEvaluatedSamplesPerRun() {
    return this.getStringAttribute('max_evaluated_samples_per_run');
  }
  public set maxEvaluatedSamplesPerRun(value: string) {
    this._maxEvaluatedSamplesPerRun = value;
  }
  public resetMaxEvaluatedSamplesPerRun() {
    this._maxEvaluatedSamplesPerRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEvaluatedSamplesPerRunInput() {
    return this._maxEvaluatedSamplesPerRun;
  }

  // random_sampling - computed: false, optional: true, required: false
  private _randomSampling = new GoogleVertexAiOnlineEvaluatorConfigRandomSamplingOutputReference(this, "random_sampling");
  public get randomSampling() {
    return this._randomSampling;
  }
  public putRandomSampling(value: GoogleVertexAiOnlineEvaluatorConfigRandomSampling) {
    this._randomSampling.internalValue = value;
  }
  public resetRandomSampling() {
    this._randomSampling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomSamplingInput() {
    return this._randomSampling.internalValue;
  }
}
export interface GoogleVertexAiOnlineEvaluatorMetricSources {
  /**
  * Inline metric config, provided as a JSON-formatted string using
  * camelCase field names to match the API format (see the
  * [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)).
  * The suggested predefined 'metricSpecName' values depend on the
  * evaluation scope configured in 'cloud_observability'; a predefined
  * metric must match the scope or the create request will be rejected:
  *   - 'trace_scope' (single trace): 'final_response_quality_v1',
  *     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.
  *   - 'session_scope' (multi-turn session):
  *     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',
  *     'multi_turn_trajectory_quality_v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#metric GoogleVertexAiOnlineEvaluator#metric}
  */
  readonly metric?: string;
  /**
  * Resource name of a registered metric (a
  * 'google_vertex_ai_evaluation_metric'), e.g.
  * projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#metric_resource_name GoogleVertexAiOnlineEvaluator#metric_resource_name}
  */
  readonly metricResourceName?: string;
}

export function googleVertexAiOnlineEvaluatorMetricSourcesToTerraform(struct?: GoogleVertexAiOnlineEvaluatorMetricSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric: cdktn.stringToTerraform(struct!.metric),
    metric_resource_name: cdktn.stringToTerraform(struct!.metricResourceName),
  }
}


export function googleVertexAiOnlineEvaluatorMetricSourcesToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorMetricSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_resource_name: {
      value: cdktn.stringToHclTerraform(struct!.metricResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiOnlineEvaluatorMetricSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricResourceName = this._metricResourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorMetricSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._metricResourceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._metricResourceName = value.metricResourceName;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_resource_name - computed: false, optional: true, required: false
  private _metricResourceName?: string; 
  public get metricResourceName() {
    return this.getStringAttribute('metric_resource_name');
  }
  public set metricResourceName(value: string) {
    this._metricResourceName = value;
  }
  public resetMetricResourceName() {
    this._metricResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricResourceNameInput() {
    return this._metricResourceName;
  }
}

export class GoogleVertexAiOnlineEvaluatorMetricSourcesList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiOnlineEvaluatorMetricSources[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference {
    return new GoogleVertexAiOnlineEvaluatorMetricSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiOnlineEvaluatorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#create GoogleVertexAiOnlineEvaluator#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#delete GoogleVertexAiOnlineEvaluator#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#update GoogleVertexAiOnlineEvaluator#update}
  */
  readonly update?: string;
}

export function googleVertexAiOnlineEvaluatorTimeoutsToTerraform(struct?: GoogleVertexAiOnlineEvaluatorTimeouts | cdktn.IResolvable): any {
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


export function googleVertexAiOnlineEvaluatorTimeoutsToHclTerraform(struct?: GoogleVertexAiOnlineEvaluatorTimeouts | cdktn.IResolvable): any {
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

export class GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVertexAiOnlineEvaluatorTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleVertexAiOnlineEvaluatorTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator google_vertex_ai_online_evaluator}
*/
export class GoogleVertexAiOnlineEvaluator extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_online_evaluator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleVertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVertexAiOnlineEvaluator to import
  * @param importFromId The id of the existing GoogleVertexAiOnlineEvaluator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVertexAiOnlineEvaluator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_online_evaluator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_vertex_ai_online_evaluator google_vertex_ai_online_evaluator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiOnlineEvaluatorConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiOnlineEvaluatorConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_online_evaluator',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '8.7.0',
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
    this._agentResource = config.agentResource;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._project = config.project;
    this._region = config.region;
    this._cloudObservability.internalValue = config.cloudObservability;
    this._config.internalValue = config.config;
    this._metricSources.internalValue = config.metricSources;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_resource - computed: false, optional: false, required: true
  private _agentResource?: string; 
  public get agentResource() {
    return this.getStringAttribute('agent_resource');
  }
  public set agentResource(value: string) {
    this._agentResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentResourceInput() {
    return this._agentResource;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_details - computed: true, optional: false, required: false
  private _stateDetails = new GoogleVertexAiOnlineEvaluatorStateDetailsList(this, "state_details", false);
  public get stateDetails() {
    return this._stateDetails;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // cloud_observability - computed: false, optional: false, required: true
  private _cloudObservability = new GoogleVertexAiOnlineEvaluatorCloudObservabilityOutputReference(this, "cloud_observability");
  public get cloudObservability() {
    return this._cloudObservability;
  }
  public putCloudObservability(value: GoogleVertexAiOnlineEvaluatorCloudObservability) {
    this._cloudObservability.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudObservabilityInput() {
    return this._cloudObservability.internalValue;
  }

  // config - computed: false, optional: false, required: true
  private _config = new GoogleVertexAiOnlineEvaluatorConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleVertexAiOnlineEvaluatorConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // metric_sources - computed: false, optional: false, required: true
  private _metricSources = new GoogleVertexAiOnlineEvaluatorMetricSourcesList(this, "metric_sources", false);
  public get metricSources() {
    return this._metricSources;
  }
  public putMetricSources(value: GoogleVertexAiOnlineEvaluatorMetricSources[] | cdktn.IResolvable) {
    this._metricSources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSourcesInput() {
    return this._metricSources.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiOnlineEvaluatorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiOnlineEvaluatorTimeouts) {
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
      agent_resource: cdktn.stringToTerraform(this._agentResource),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      cloud_observability: googleVertexAiOnlineEvaluatorCloudObservabilityToTerraform(this._cloudObservability.internalValue),
      config: googleVertexAiOnlineEvaluatorConfigAToTerraform(this._config.internalValue),
      metric_sources: cdktn.listMapper(googleVertexAiOnlineEvaluatorMetricSourcesToTerraform, true)(this._metricSources.internalValue),
      timeouts: googleVertexAiOnlineEvaluatorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_resource: {
        value: cdktn.stringToHclTerraform(this._agentResource),
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
      cloud_observability: {
        value: googleVertexAiOnlineEvaluatorCloudObservabilityToHclTerraform(this._cloudObservability.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiOnlineEvaluatorCloudObservabilityList",
      },
      config: {
        value: googleVertexAiOnlineEvaluatorConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiOnlineEvaluatorConfigAList",
      },
      metric_sources: {
        value: cdktn.listMapperHcl(googleVertexAiOnlineEvaluatorMetricSourcesToHclTerraform, true)(this._metricSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiOnlineEvaluatorMetricSourcesList",
      },
      timeouts: {
        value: googleVertexAiOnlineEvaluatorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVertexAiOnlineEvaluatorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
