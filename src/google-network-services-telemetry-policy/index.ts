/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleNetworkServicesTelemetryPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#deletion_policy GoogleNetworkServicesTelemetryPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Provides a human-readable name for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#display_name GoogleNetworkServicesTelemetryPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of label tags associated with the TelemetryPolicy resource.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#labels GoogleNetworkServicesTelemetryPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#location GoogleNetworkServicesTelemetryPolicy#location}
  */
  readonly location?: string;
  /**
  * Short name of the TelemetryPolicy resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#name GoogleNetworkServicesTelemetryPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}
  */
  readonly project?: string;
  /**
  * metrics_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#metrics_configuration GoogleNetworkServicesTelemetryPolicy#metrics_configuration}
  */
  readonly metricsConfiguration?: GoogleNetworkServicesTelemetryPolicyMetricsConfiguration;
  /**
  * telemetry_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#telemetry_target GoogleNetworkServicesTelemetryPolicy#telemetry_target}
  */
  readonly telemetryTarget: GoogleNetworkServicesTelemetryPolicyTelemetryTarget;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#timeouts GoogleNetworkServicesTelemetryPolicy#timeouts}
  */
  readonly timeouts?: GoogleNetworkServicesTelemetryPolicyTimeouts;
  /**
  * tracing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#tracing_configuration GoogleNetworkServicesTelemetryPolicy#tracing_configuration}
  */
  readonly tracingConfiguration?: GoogleNetworkServicesTelemetryPolicyTracingConfiguration;
}
export interface GoogleNetworkServicesTelemetryPolicyMetricsConfiguration {
  /**
  * Indicates whether metrics are enabled or disabled. Set to true to explicitly enable, or false to explicitly disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#enabled GoogleNetworkServicesTelemetryPolicy#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function googleNetworkServicesTelemetryPolicyMetricsConfigurationToTerraform(struct?: GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference | GoogleNetworkServicesTelemetryPolicyMetricsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleNetworkServicesTelemetryPolicyMetricsConfigurationToHclTerraform(struct?: GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference | GoogleNetworkServicesTelemetryPolicyMetricsConfiguration): any {
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

export class GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkServicesTelemetryPolicyMetricsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkServicesTelemetryPolicyMetricsConfiguration | undefined) {
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
export interface GoogleNetworkServicesTelemetryPolicyTelemetryTarget {
  /**
  * Lists references to the resources that are targeted by the policy.
  * Types of resources supported:
  * - 'run.googleapis.com/'
  * - 'compute.googleapis.com/'
  * - 'networkservices.googleapis.com/'
  * The format must be the full resource name of a supported resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#resources GoogleNetworkServicesTelemetryPolicy#resources}
  */
  readonly resources: string[];
}

export function googleNetworkServicesTelemetryPolicyTelemetryTargetToTerraform(struct?: GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference | GoogleNetworkServicesTelemetryPolicyTelemetryTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function googleNetworkServicesTelemetryPolicyTelemetryTargetToHclTerraform(struct?: GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference | GoogleNetworkServicesTelemetryPolicyTelemetryTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkServicesTelemetryPolicyTelemetryTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkServicesTelemetryPolicyTelemetryTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
    }
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}
export interface GoogleNetworkServicesTelemetryPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#create GoogleNetworkServicesTelemetryPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#delete GoogleNetworkServicesTelemetryPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#update GoogleNetworkServicesTelemetryPolicy#update}
  */
  readonly update?: string;
}

export function googleNetworkServicesTelemetryPolicyTimeoutsToTerraform(struct?: GoogleNetworkServicesTelemetryPolicyTimeouts | cdktn.IResolvable): any {
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


export function googleNetworkServicesTelemetryPolicyTimeoutsToHclTerraform(struct?: GoogleNetworkServicesTelemetryPolicyTimeouts | cdktn.IResolvable): any {
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

export class GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleNetworkServicesTelemetryPolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleNetworkServicesTelemetryPolicyTimeouts | cdktn.IResolvable | undefined) {
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
export interface GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes {
  /**
  * Defines the key for a custom attribute that is added to the trace spans generated by the Google Cloud Load Balancer (GCLB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#attribute_name GoogleNetworkServicesTelemetryPolicy#attribute_name}
  */
  readonly attributeName: string;
  /**
  * Specifies an incoming request header name from which the value for the custom span attribute should be dynamically extracted. Mutually exclusive with literalValue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#from_header_value GoogleNetworkServicesTelemetryPolicy#from_header_value}
  */
  readonly fromHeaderValue?: string;
  /**
  * Assigns a static, constant value to the custom trace span attribute defined by the corresponding attributeName. Mutually exclusive with fromHeaderValue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#literal_value GoogleNetworkServicesTelemetryPolicy#literal_value}
  */
  readonly literalValue?: string;
}

export function googleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesToTerraform(struct?: GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_name: cdktn.stringToTerraform(struct!.attributeName),
    from_header_value: cdktn.stringToTerraform(struct!.fromHeaderValue),
    literal_value: cdktn.stringToTerraform(struct!.literalValue),
  }
}


export function googleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesToHclTerraform(struct?: GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_header_value: {
      value: cdktn.stringToHclTerraform(struct!.fromHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    literal_value: {
      value: cdktn.stringToHclTerraform(struct!.literalValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._fromHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromHeaderValue = this._fromHeaderValue;
    }
    if (this._literalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literalValue = this._literalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._fromHeaderValue = undefined;
      this._literalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._fromHeaderValue = value.fromHeaderValue;
      this._literalValue = value.literalValue;
    }
  }

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // from_header_value - computed: false, optional: true, required: false
  private _fromHeaderValue?: string; 
  public get fromHeaderValue() {
    return this.getStringAttribute('from_header_value');
  }
  public set fromHeaderValue(value: string) {
    this._fromHeaderValue = value;
  }
  public resetFromHeaderValue() {
    this._fromHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromHeaderValueInput() {
    return this._fromHeaderValue;
  }

  // literal_value - computed: false, optional: true, required: false
  private _literalValue?: string; 
  public get literalValue() {
    return this.getStringAttribute('literal_value');
  }
  public set literalValue(value: string) {
    this._literalValue = value;
  }
  public resetLiteralValue() {
    this._literalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalValueInput() {
    return this._literalValue;
  }
}

export class GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList extends cdktn.ComplexList {
  public internalValue? : GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes[] | cdktn.IResolvable

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
  public get(index: number): GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference {
    return new GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling {
  /**
  * Provides a master switch to respect a sampled bit in incoming traceparentID headers. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#enabled GoogleNetworkServicesTelemetryPolicy#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Specifies the sampling rate to use when the sampled bit is set in the incoming traceparentID header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#sampling_rate GoogleNetworkServicesTelemetryPolicy#sampling_rate}
  */
  readonly samplingRate?: number;
}

export function googleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingToTerraform(struct?: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference | GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    sampling_rate: cdktn.numberToTerraform(struct!.samplingRate),
  }
}


export function googleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingToHclTerraform(struct?: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference | GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling): any {
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
    sampling_rate: {
      value: cdktn.numberToHclTerraform(struct!.samplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._samplingRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._samplingRate = value.samplingRate;
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

  // sampling_rate - computed: false, optional: true, required: false
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  public resetSamplingRate() {
    this._samplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }
}
export interface GoogleNetworkServicesTelemetryPolicyTracingConfiguration {
  /**
  * Specifies the tracing sampling rate. The sampling rate is a float number in the interval [0, 1]. The sampling rate is applied to all requests to the targeted resources. The default value is 0.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#sampling_rate GoogleNetworkServicesTelemetryPolicy#sampling_rate}
  */
  readonly samplingRate?: number;
  /**
  * custom_span_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#custom_span_attributes GoogleNetworkServicesTelemetryPolicy#custom_span_attributes}
  */
  readonly customSpanAttributes?: GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes[] | cdktn.IResolvable;
  /**
  * parent_based_sampling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#parent_based_sampling GoogleNetworkServicesTelemetryPolicy#parent_based_sampling}
  */
  readonly parentBasedSampling?: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling;
}

export function googleNetworkServicesTelemetryPolicyTracingConfigurationToTerraform(struct?: GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference | GoogleNetworkServicesTelemetryPolicyTracingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sampling_rate: cdktn.numberToTerraform(struct!.samplingRate),
    custom_span_attributes: cdktn.listMapper(googleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesToTerraform, true)(struct!.customSpanAttributes),
    parent_based_sampling: googleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingToTerraform(struct!.parentBasedSampling),
  }
}


export function googleNetworkServicesTelemetryPolicyTracingConfigurationToHclTerraform(struct?: GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference | GoogleNetworkServicesTelemetryPolicyTracingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sampling_rate: {
      value: cdktn.numberToHclTerraform(struct!.samplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_span_attributes: {
      value: cdktn.listMapperHcl(googleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesToHclTerraform, true)(struct!.customSpanAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList",
    },
    parent_based_sampling: {
      value: googleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingToHclTerraform(struct!.parentBasedSampling),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkServicesTelemetryPolicyTracingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    if (this._customSpanAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSpanAttributes = this._customSpanAttributes?.internalValue;
    }
    if (this._parentBasedSampling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentBasedSampling = this._parentBasedSampling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkServicesTelemetryPolicyTracingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._samplingRate = undefined;
      this._customSpanAttributes.internalValue = undefined;
      this._parentBasedSampling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._samplingRate = value.samplingRate;
      this._customSpanAttributes.internalValue = value.customSpanAttributes;
      this._parentBasedSampling.internalValue = value.parentBasedSampling;
    }
  }

  // sampling_rate - computed: false, optional: true, required: false
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  public resetSamplingRate() {
    this._samplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }

  // custom_span_attributes - computed: false, optional: true, required: false
  private _customSpanAttributes = new GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList(this, "custom_span_attributes", false);
  public get customSpanAttributes() {
    return this._customSpanAttributes;
  }
  public putCustomSpanAttributes(value: GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes[] | cdktn.IResolvable) {
    this._customSpanAttributes.internalValue = value;
  }
  public resetCustomSpanAttributes() {
    this._customSpanAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSpanAttributesInput() {
    return this._customSpanAttributes.internalValue;
  }

  // parent_based_sampling - computed: false, optional: true, required: false
  private _parentBasedSampling = new GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference(this, "parent_based_sampling");
  public get parentBasedSampling() {
    return this._parentBasedSampling;
  }
  public putParentBasedSampling(value: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling) {
    this._parentBasedSampling.internalValue = value;
  }
  public resetParentBasedSampling() {
    this._parentBasedSampling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentBasedSamplingInput() {
    return this._parentBasedSampling.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy google_network_services_telemetry_policy}
*/
export class GoogleNetworkServicesTelemetryPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_services_telemetry_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleNetworkServicesTelemetryPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleNetworkServicesTelemetryPolicy to import
  * @param importFromId The id of the existing GoogleNetworkServicesTelemetryPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleNetworkServicesTelemetryPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_services_telemetry_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy google_network_services_telemetry_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleNetworkServicesTelemetryPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleNetworkServicesTelemetryPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_telemetry_policy',
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
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._metricsConfiguration.internalValue = config.metricsConfiguration;
    this._telemetryTarget.internalValue = config.telemetryTarget;
    this._timeouts.internalValue = config.timeouts;
    this._tracingConfiguration.internalValue = config.tracingConfiguration;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
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

  // metrics_configuration - computed: false, optional: true, required: false
  private _metricsConfiguration = new GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference(this, "metrics_configuration");
  public get metricsConfiguration() {
    return this._metricsConfiguration;
  }
  public putMetricsConfiguration(value: GoogleNetworkServicesTelemetryPolicyMetricsConfiguration) {
    this._metricsConfiguration.internalValue = value;
  }
  public resetMetricsConfiguration() {
    this._metricsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsConfigurationInput() {
    return this._metricsConfiguration.internalValue;
  }

  // telemetry_target - computed: false, optional: false, required: true
  private _telemetryTarget = new GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference(this, "telemetry_target");
  public get telemetryTarget() {
    return this._telemetryTarget;
  }
  public putTelemetryTarget(value: GoogleNetworkServicesTelemetryPolicyTelemetryTarget) {
    this._telemetryTarget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryTargetInput() {
    return this._telemetryTarget.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleNetworkServicesTelemetryPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tracing_configuration - computed: false, optional: true, required: false
  private _tracingConfiguration = new GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference(this, "tracing_configuration");
  public get tracingConfiguration() {
    return this._tracingConfiguration;
  }
  public putTracingConfiguration(value: GoogleNetworkServicesTelemetryPolicyTracingConfiguration) {
    this._tracingConfiguration.internalValue = value;
  }
  public resetTracingConfiguration() {
    this._tracingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigurationInput() {
    return this._tracingConfiguration.internalValue;
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
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      metrics_configuration: googleNetworkServicesTelemetryPolicyMetricsConfigurationToTerraform(this._metricsConfiguration.internalValue),
      telemetry_target: googleNetworkServicesTelemetryPolicyTelemetryTargetToTerraform(this._telemetryTarget.internalValue),
      timeouts: googleNetworkServicesTelemetryPolicyTimeoutsToTerraform(this._timeouts.internalValue),
      tracing_configuration: googleNetworkServicesTelemetryPolicyTracingConfigurationToTerraform(this._tracingConfiguration.internalValue),
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
      metrics_configuration: {
        value: googleNetworkServicesTelemetryPolicyMetricsConfigurationToHclTerraform(this._metricsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkServicesTelemetryPolicyMetricsConfigurationList",
      },
      telemetry_target: {
        value: googleNetworkServicesTelemetryPolicyTelemetryTargetToHclTerraform(this._telemetryTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkServicesTelemetryPolicyTelemetryTargetList",
      },
      timeouts: {
        value: googleNetworkServicesTelemetryPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleNetworkServicesTelemetryPolicyTimeouts",
      },
      tracing_configuration: {
        value: googleNetworkServicesTelemetryPolicyTracingConfigurationToHclTerraform(this._tracingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkServicesTelemetryPolicyTracingConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
