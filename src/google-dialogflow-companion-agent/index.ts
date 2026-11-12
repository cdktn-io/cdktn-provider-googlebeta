/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleDialogflowCompanionAgentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID to use for the companion agent, which will become the final component of the companion agent's resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#companion_agent_id GoogleDialogflowCompanionAgent#companion_agent_id}
  */
  readonly companionAgentId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#deletion_policy GoogleDialogflowCompanionAgent#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Description for the companion agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#description GoogleDialogflowCompanionAgent#description}
  */
  readonly description?: string;
  /**
  * Display name for the companion agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_name GoogleDialogflowCompanionAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#id GoogleDialogflowCompanionAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the companion agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#location GoogleDialogflowCompanionAgent#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#project GoogleDialogflowCompanionAgent#project}
  */
  readonly project?: string;
  /**
  * ces_tool_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#ces_tool_specs GoogleDialogflowCompanionAgent#ces_tool_specs}
  */
  readonly cesToolSpecs?: GoogleDialogflowCompanionAgentCesToolSpecs[] | cdktn.IResolvable;
  /**
  * skill_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#skill_configs GoogleDialogflowCompanionAgent#skill_configs}
  */
  readonly skillConfigs?: GoogleDialogflowCompanionAgentSkillConfigs[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#timeouts GoogleDialogflowCompanionAgent#timeouts}
  */
  readonly timeouts?: GoogleDialogflowCompanionAgentTimeouts;
  /**
  * toolset_tools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#toolset_tools GoogleDialogflowCompanionAgent#toolset_tools}
  */
  readonly toolsetTools?: GoogleDialogflowCompanionAgentToolsetTools[] | cdktn.IResolvable;
}
export interface GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides {
  /**
  * The key of the context reference in ingested context references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#context_reference_key GoogleDialogflowCompanionAgent#context_reference_key}
  */
  readonly contextReferenceKey: string;
  /**
  * The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used.
  * If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#field_path GoogleDialogflowCompanionAgent#field_path}
  */
  readonly fieldPath?: string;
  /**
  * The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_name GoogleDialogflowCompanionAgent#parameter_name}
  */
  readonly parameterName: string;
}

export function googleDialogflowCompanionAgentCesToolSpecsParameterOverridesToTerraform(struct?: GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    context_reference_key: cdktn.stringToTerraform(struct!.contextReferenceKey),
    field_path: cdktn.stringToTerraform(struct!.fieldPath),
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
  }
}


export function googleDialogflowCompanionAgentCesToolSpecsParameterOverridesToHclTerraform(struct?: GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    context_reference_key: {
      value: cdktn.stringToHclTerraform(struct!.contextReferenceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktn.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextReferenceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextReferenceKey = this._contextReferenceKey;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextReferenceKey = undefined;
      this._fieldPath = undefined;
      this._parameterName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextReferenceKey = value.contextReferenceKey;
      this._fieldPath = value.fieldPath;
      this._parameterName = value.parameterName;
    }
  }

  // context_reference_key - computed: false, optional: false, required: true
  private _contextReferenceKey?: string; 
  public get contextReferenceKey() {
    return this.getStringAttribute('context_reference_key');
  }
  public set contextReferenceKey(value: string) {
    this._contextReferenceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextReferenceKeyInput() {
    return this._contextReferenceKey;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }
}

export class GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList extends cdktn.ComplexList {
  public internalValue? : GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides[] | cdktn.IResolvable

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
  public get(index: number): GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference {
    return new GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCompanionAgentCesToolSpecs {
  /**
  * The resource name of the CES tool.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#ces_tool GoogleDialogflowCompanionAgent#ces_tool}
  */
  readonly cesTool?: string;
  /**
  * Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#confirmation_requirement GoogleDialogflowCompanionAgent#confirmation_requirement}
  */
  readonly confirmationRequirement?: string;
  /**
  * Indicates whether the tool is enabled in proactive mode.
  * All tools are enabled in proactive mode by default. To disable a tool in proactive mode, set this field to 'false'.
  * NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the tool will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#proactive_enabled GoogleDialogflowCompanionAgent#proactive_enabled}
  */
  readonly proactiveEnabled?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether the tool is enabled in reactive mode.
  * All tools are disabled in reactive mode by default. To enable a tool in reactive mode, set this field to 'true'.
  * NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the tool will be ignored. CompanionAgent config will throw an error if any unsupported tool is enabled in reactive mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#reactive_enabled GoogleDialogflowCompanionAgent#reactive_enabled}
  */
  readonly reactiveEnabled?: boolean | cdktn.IResolvable;
  /**
  * parameter_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_overrides GoogleDialogflowCompanionAgent#parameter_overrides}
  */
  readonly parameterOverrides?: GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides[] | cdktn.IResolvable;
}

export function googleDialogflowCompanionAgentCesToolSpecsToTerraform(struct?: GoogleDialogflowCompanionAgentCesToolSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ces_tool: cdktn.stringToTerraform(struct!.cesTool),
    confirmation_requirement: cdktn.stringToTerraform(struct!.confirmationRequirement),
    proactive_enabled: cdktn.booleanToTerraform(struct!.proactiveEnabled),
    reactive_enabled: cdktn.booleanToTerraform(struct!.reactiveEnabled),
    parameter_overrides: cdktn.listMapper(googleDialogflowCompanionAgentCesToolSpecsParameterOverridesToTerraform, true)(struct!.parameterOverrides),
  }
}


export function googleDialogflowCompanionAgentCesToolSpecsToHclTerraform(struct?: GoogleDialogflowCompanionAgentCesToolSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ces_tool: {
      value: cdktn.stringToHclTerraform(struct!.cesTool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confirmation_requirement: {
      value: cdktn.stringToHclTerraform(struct!.confirmationRequirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proactive_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.proactiveEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reactive_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.reactiveEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameter_overrides: {
      value: cdktn.listMapperHcl(googleDialogflowCompanionAgentCesToolSpecsParameterOverridesToHclTerraform, true)(struct!.parameterOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCompanionAgentCesToolSpecsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCompanionAgentCesToolSpecs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cesTool !== undefined) {
      hasAnyValues = true;
      internalValueResult.cesTool = this._cesTool;
    }
    if (this._confirmationRequirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationRequirement = this._confirmationRequirement;
    }
    if (this._proactiveEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proactiveEnabled = this._proactiveEnabled;
    }
    if (this._reactiveEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactiveEnabled = this._reactiveEnabled;
    }
    if (this._parameterOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterOverrides = this._parameterOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCompanionAgentCesToolSpecs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cesTool = undefined;
      this._confirmationRequirement = undefined;
      this._proactiveEnabled = undefined;
      this._reactiveEnabled = undefined;
      this._parameterOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cesTool = value.cesTool;
      this._confirmationRequirement = value.confirmationRequirement;
      this._proactiveEnabled = value.proactiveEnabled;
      this._reactiveEnabled = value.reactiveEnabled;
      this._parameterOverrides.internalValue = value.parameterOverrides;
    }
  }

  // ces_tool - computed: false, optional: true, required: false
  private _cesTool?: string; 
  public get cesTool() {
    return this.getStringAttribute('ces_tool');
  }
  public set cesTool(value: string) {
    this._cesTool = value;
  }
  public resetCesTool() {
    this._cesTool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cesToolInput() {
    return this._cesTool;
  }

  // confirmation_requirement - computed: false, optional: true, required: false
  private _confirmationRequirement?: string; 
  public get confirmationRequirement() {
    return this.getStringAttribute('confirmation_requirement');
  }
  public set confirmationRequirement(value: string) {
    this._confirmationRequirement = value;
  }
  public resetConfirmationRequirement() {
    this._confirmationRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationRequirementInput() {
    return this._confirmationRequirement;
  }

  // proactive_enabled - computed: false, optional: true, required: false
  private _proactiveEnabled?: boolean | cdktn.IResolvable; 
  public get proactiveEnabled() {
    return this.getBooleanAttribute('proactive_enabled');
  }
  public set proactiveEnabled(value: boolean | cdktn.IResolvable) {
    this._proactiveEnabled = value;
  }
  public resetProactiveEnabled() {
    this._proactiveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveEnabledInput() {
    return this._proactiveEnabled;
  }

  // reactive_enabled - computed: false, optional: true, required: false
  private _reactiveEnabled?: boolean | cdktn.IResolvable; 
  public get reactiveEnabled() {
    return this.getBooleanAttribute('reactive_enabled');
  }
  public set reactiveEnabled(value: boolean | cdktn.IResolvable) {
    this._reactiveEnabled = value;
  }
  public resetReactiveEnabled() {
    this._reactiveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reactiveEnabledInput() {
    return this._reactiveEnabled;
  }

  // parameter_overrides - computed: false, optional: true, required: false
  private _parameterOverrides = new GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList(this, "parameter_overrides", false);
  public get parameterOverrides() {
    return this._parameterOverrides;
  }
  public putParameterOverrides(value: GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides[] | cdktn.IResolvable) {
    this._parameterOverrides.internalValue = value;
  }
  public resetParameterOverrides() {
    this._parameterOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterOverridesInput() {
    return this._parameterOverrides.internalValue;
  }
}

export class GoogleDialogflowCompanionAgentCesToolSpecsList extends cdktn.ComplexList {
  public internalValue? : GoogleDialogflowCompanionAgentCesToolSpecs[] | cdktn.IResolvable

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
  public get(index: number): GoogleDialogflowCompanionAgentCesToolSpecsOutputReference {
    return new GoogleDialogflowCompanionAgentCesToolSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions {
  /**
  * Description of action item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#description GoogleDialogflowCompanionAgent#description}
  */
  readonly description: string;
}

export function googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsToTerraform(struct?: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
  }
}


export function googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsToHclTerraform(struct?: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions | cdktn.IResolvable): any {
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

export class GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
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
}

export class GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList extends cdktn.ComplexList {
  public internalValue? : GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions[] | cdktn.IResolvable

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
  public get(index: number): GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference {
    return new GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions {
  /**
  * The condition of the instruction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#condition GoogleDialogflowCompanionAgent#condition}
  */
  readonly condition?: string;
  /**
  * Whether to disable suggested reply generation for this instruction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#disable_suggested_reply GoogleDialogflowCompanionAgent#disable_suggested_reply}
  */
  readonly disableSuggestedReply?: boolean | cdktn.IResolvable;
  /**
  * The detailed description of this instruction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_details GoogleDialogflowCompanionAgent#display_details}
  */
  readonly displayDetails?: string;
  /**
  * Display name for the instruction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_name GoogleDialogflowCompanionAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#trigger_event GoogleDialogflowCompanionAgent#trigger_event}
  */
  readonly triggerEvent?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#actions GoogleDialogflowCompanionAgent#actions}
  */
  readonly actions?: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions[] | cdktn.IResolvable;
}

export function googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsToTerraform(struct?: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.stringToTerraform(struct!.condition),
    disable_suggested_reply: cdktn.booleanToTerraform(struct!.disableSuggestedReply),
    display_details: cdktn.stringToTerraform(struct!.displayDetails),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    trigger_event: cdktn.stringToTerraform(struct!.triggerEvent),
    actions: cdktn.listMapper(googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsToTerraform, true)(struct!.actions),
  }
}


export function googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsToHclTerraform(struct?: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_suggested_reply: {
      value: cdktn.booleanToHclTerraform(struct!.disableSuggestedReply),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    display_details: {
      value: cdktn.stringToHclTerraform(struct!.displayDetails),
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
    trigger_event: {
      value: cdktn.stringToHclTerraform(struct!.triggerEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actions: {
      value: cdktn.listMapperHcl(googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._disableSuggestedReply !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSuggestedReply = this._disableSuggestedReply;
    }
    if (this._displayDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayDetails = this._displayDetails;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._triggerEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerEvent = this._triggerEvent;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._disableSuggestedReply = undefined;
      this._displayDetails = undefined;
      this._displayName = undefined;
      this._triggerEvent = undefined;
      this._actions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._disableSuggestedReply = value.disableSuggestedReply;
      this._displayDetails = value.displayDetails;
      this._displayName = value.displayName;
      this._triggerEvent = value.triggerEvent;
      this._actions.internalValue = value.actions;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // disable_suggested_reply - computed: false, optional: true, required: false
  private _disableSuggestedReply?: boolean | cdktn.IResolvable; 
  public get disableSuggestedReply() {
    return this.getBooleanAttribute('disable_suggested_reply');
  }
  public set disableSuggestedReply(value: boolean | cdktn.IResolvable) {
    this._disableSuggestedReply = value;
  }
  public resetDisableSuggestedReply() {
    this._disableSuggestedReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSuggestedReplyInput() {
    return this._disableSuggestedReply;
  }

  // display_details - computed: false, optional: true, required: false
  private _displayDetails?: string; 
  public get displayDetails() {
    return this.getStringAttribute('display_details');
  }
  public set displayDetails(value: string) {
    this._displayDetails = value;
  }
  public resetDisplayDetails() {
    this._displayDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayDetailsInput() {
    return this._displayDetails;
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

  // trigger_event - computed: false, optional: true, required: false
  private _triggerEvent?: string; 
  public get triggerEvent() {
    return this.getStringAttribute('trigger_event');
  }
  public set triggerEvent(value: string) {
    this._triggerEvent = value;
  }
  public resetTriggerEvent() {
    this._triggerEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerEventInput() {
    return this._triggerEvent;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }
}

export class GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList extends cdktn.ComplexList {
  public internalValue? : GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions[] | cdktn.IResolvable

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
  public get(index: number): GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference {
    return new GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig {
  /**
  * This is specific additional guidance that can be configured by the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#overarching_guidance GoogleDialogflowCompanionAgent#overarching_guidance}
  */
  readonly overarchingGuidance?: string;
  /**
  * guidance_instructions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#guidance_instructions GoogleDialogflowCompanionAgent#guidance_instructions}
  */
  readonly guidanceInstructions?: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions[] | cdktn.IResolvable;
}

export function googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigToTerraform(struct?: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference | GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    overarching_guidance: cdktn.stringToTerraform(struct!.overarchingGuidance),
    guidance_instructions: cdktn.listMapper(googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsToTerraform, true)(struct!.guidanceInstructions),
  }
}


export function googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigToHclTerraform(struct?: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference | GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    overarching_guidance: {
      value: cdktn.stringToHclTerraform(struct!.overarchingGuidance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guidance_instructions: {
      value: cdktn.listMapperHcl(googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsToHclTerraform, true)(struct!.guidanceInstructions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overarchingGuidance !== undefined) {
      hasAnyValues = true;
      internalValueResult.overarchingGuidance = this._overarchingGuidance;
    }
    if (this._guidanceInstructions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guidanceInstructions = this._guidanceInstructions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overarchingGuidance = undefined;
      this._guidanceInstructions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overarchingGuidance = value.overarchingGuidance;
      this._guidanceInstructions.internalValue = value.guidanceInstructions;
    }
  }

  // overarching_guidance - computed: false, optional: true, required: false
  private _overarchingGuidance?: string; 
  public get overarchingGuidance() {
    return this.getStringAttribute('overarching_guidance');
  }
  public set overarchingGuidance(value: string) {
    this._overarchingGuidance = value;
  }
  public resetOverarchingGuidance() {
    this._overarchingGuidance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overarchingGuidanceInput() {
    return this._overarchingGuidance;
  }

  // guidance_instructions - computed: false, optional: true, required: false
  private _guidanceInstructions = new GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList(this, "guidance_instructions", false);
  public get guidanceInstructions() {
    return this._guidanceInstructions;
  }
  public putGuidanceInstructions(value: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions[] | cdktn.IResolvable) {
    this._guidanceInstructions.internalValue = value;
  }
  public resetGuidanceInstructions() {
    this._guidanceInstructions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidanceInstructionsInput() {
    return this._guidanceInstructions.internalValue;
  }
}
export interface GoogleDialogflowCompanionAgentSkillConfigs {
  /**
  * The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#skill_triggering_event GoogleDialogflowCompanionAgent#skill_triggering_event}
  */
  readonly skillTriggeringEvent?: string;
  /**
  * guidance_skill_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#guidance_skill_config GoogleDialogflowCompanionAgent#guidance_skill_config}
  */
  readonly guidanceSkillConfig?: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig;
}

export function googleDialogflowCompanionAgentSkillConfigsToTerraform(struct?: GoogleDialogflowCompanionAgentSkillConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    skill_triggering_event: cdktn.stringToTerraform(struct!.skillTriggeringEvent),
    guidance_skill_config: googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigToTerraform(struct!.guidanceSkillConfig),
  }
}


export function googleDialogflowCompanionAgentSkillConfigsToHclTerraform(struct?: GoogleDialogflowCompanionAgentSkillConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    skill_triggering_event: {
      value: cdktn.stringToHclTerraform(struct!.skillTriggeringEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guidance_skill_config: {
      value: googleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigToHclTerraform(struct!.guidanceSkillConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCompanionAgentSkillConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCompanionAgentSkillConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skillTriggeringEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.skillTriggeringEvent = this._skillTriggeringEvent;
    }
    if (this._guidanceSkillConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guidanceSkillConfig = this._guidanceSkillConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCompanionAgentSkillConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._skillTriggeringEvent = undefined;
      this._guidanceSkillConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._skillTriggeringEvent = value.skillTriggeringEvent;
      this._guidanceSkillConfig.internalValue = value.guidanceSkillConfig;
    }
  }

  // skill_triggering_event - computed: false, optional: true, required: false
  private _skillTriggeringEvent?: string; 
  public get skillTriggeringEvent() {
    return this.getStringAttribute('skill_triggering_event');
  }
  public set skillTriggeringEvent(value: string) {
    this._skillTriggeringEvent = value;
  }
  public resetSkillTriggeringEvent() {
    this._skillTriggeringEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillTriggeringEventInput() {
    return this._skillTriggeringEvent;
  }

  // guidance_skill_config - computed: false, optional: true, required: false
  private _guidanceSkillConfig = new GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference(this, "guidance_skill_config");
  public get guidanceSkillConfig() {
    return this._guidanceSkillConfig;
  }
  public putGuidanceSkillConfig(value: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig) {
    this._guidanceSkillConfig.internalValue = value;
  }
  public resetGuidanceSkillConfig() {
    this._guidanceSkillConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidanceSkillConfigInput() {
    return this._guidanceSkillConfig.internalValue;
  }
}

export class GoogleDialogflowCompanionAgentSkillConfigsList extends cdktn.ComplexList {
  public internalValue? : GoogleDialogflowCompanionAgentSkillConfigs[] | cdktn.IResolvable

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
  public get(index: number): GoogleDialogflowCompanionAgentSkillConfigsOutputReference {
    return new GoogleDialogflowCompanionAgentSkillConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCompanionAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#create GoogleDialogflowCompanionAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#delete GoogleDialogflowCompanionAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#update GoogleDialogflowCompanionAgent#update}
  */
  readonly update?: string;
}

export function googleDialogflowCompanionAgentTimeoutsToTerraform(struct?: GoogleDialogflowCompanionAgentTimeouts | cdktn.IResolvable): any {
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


export function googleDialogflowCompanionAgentTimeoutsToHclTerraform(struct?: GoogleDialogflowCompanionAgentTimeouts | cdktn.IResolvable): any {
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

export class GoogleDialogflowCompanionAgentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDialogflowCompanionAgentTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCompanionAgentTimeouts | cdktn.IResolvable | undefined) {
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
export interface GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides {
  /**
  * The key of the context reference in ingested context references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#context_reference_key GoogleDialogflowCompanionAgent#context_reference_key}
  */
  readonly contextReferenceKey: string;
  /**
  * The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used.
  * If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#field_path GoogleDialogflowCompanionAgent#field_path}
  */
  readonly fieldPath?: string;
  /**
  * The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_name GoogleDialogflowCompanionAgent#parameter_name}
  */
  readonly parameterName: string;
}

export function googleDialogflowCompanionAgentToolsetToolsParameterOverridesToTerraform(struct?: GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    context_reference_key: cdktn.stringToTerraform(struct!.contextReferenceKey),
    field_path: cdktn.stringToTerraform(struct!.fieldPath),
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
  }
}


export function googleDialogflowCompanionAgentToolsetToolsParameterOverridesToHclTerraform(struct?: GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    context_reference_key: {
      value: cdktn.stringToHclTerraform(struct!.contextReferenceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktn.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextReferenceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextReferenceKey = this._contextReferenceKey;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextReferenceKey = undefined;
      this._fieldPath = undefined;
      this._parameterName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextReferenceKey = value.contextReferenceKey;
      this._fieldPath = value.fieldPath;
      this._parameterName = value.parameterName;
    }
  }

  // context_reference_key - computed: false, optional: false, required: true
  private _contextReferenceKey?: string; 
  public get contextReferenceKey() {
    return this.getStringAttribute('context_reference_key');
  }
  public set contextReferenceKey(value: string) {
    this._contextReferenceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextReferenceKeyInput() {
    return this._contextReferenceKey;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }
}

export class GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList extends cdktn.ComplexList {
  public internalValue? : GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides[] | cdktn.IResolvable

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
  public get(index: number): GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference {
    return new GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCompanionAgentToolsetTools {
  /**
  * Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#confirmation_requirement GoogleDialogflowCompanionAgent#confirmation_requirement}
  */
  readonly confirmationRequirement?: string;
  /**
  * The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#operation_id GoogleDialogflowCompanionAgent#operation_id}
  */
  readonly operationId?: string;
  /**
  * Indicates whether the toolset tool is enabled in proactive mode.
  * NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the toolset tool will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#proactive_enabled GoogleDialogflowCompanionAgent#proactive_enabled}
  */
  readonly proactiveEnabled?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether the toolset tool is enabled in reactive mode.
  * NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the toolset tool will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#reactive_enabled GoogleDialogflowCompanionAgent#reactive_enabled}
  */
  readonly reactiveEnabled?: boolean | cdktn.IResolvable;
  /**
  * The name of the toolset to retrieve the schema for.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#toolset GoogleDialogflowCompanionAgent#toolset}
  */
  readonly toolset: string;
  /**
  * parameter_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_overrides GoogleDialogflowCompanionAgent#parameter_overrides}
  */
  readonly parameterOverrides?: GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides[] | cdktn.IResolvable;
}

export function googleDialogflowCompanionAgentToolsetToolsToTerraform(struct?: GoogleDialogflowCompanionAgentToolsetTools | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confirmation_requirement: cdktn.stringToTerraform(struct!.confirmationRequirement),
    operation_id: cdktn.stringToTerraform(struct!.operationId),
    proactive_enabled: cdktn.booleanToTerraform(struct!.proactiveEnabled),
    reactive_enabled: cdktn.booleanToTerraform(struct!.reactiveEnabled),
    toolset: cdktn.stringToTerraform(struct!.toolset),
    parameter_overrides: cdktn.listMapper(googleDialogflowCompanionAgentToolsetToolsParameterOverridesToTerraform, true)(struct!.parameterOverrides),
  }
}


export function googleDialogflowCompanionAgentToolsetToolsToHclTerraform(struct?: GoogleDialogflowCompanionAgentToolsetTools | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confirmation_requirement: {
      value: cdktn.stringToHclTerraform(struct!.confirmationRequirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_id: {
      value: cdktn.stringToHclTerraform(struct!.operationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proactive_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.proactiveEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reactive_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.reactiveEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    toolset: {
      value: cdktn.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_overrides: {
      value: cdktn.listMapperHcl(googleDialogflowCompanionAgentToolsetToolsParameterOverridesToHclTerraform, true)(struct!.parameterOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCompanionAgentToolsetToolsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCompanionAgentToolsetTools | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confirmationRequirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationRequirement = this._confirmationRequirement;
    }
    if (this._operationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationId = this._operationId;
    }
    if (this._proactiveEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proactiveEnabled = this._proactiveEnabled;
    }
    if (this._reactiveEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactiveEnabled = this._reactiveEnabled;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    if (this._parameterOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterOverrides = this._parameterOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCompanionAgentToolsetTools | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confirmationRequirement = undefined;
      this._operationId = undefined;
      this._proactiveEnabled = undefined;
      this._reactiveEnabled = undefined;
      this._toolset = undefined;
      this._parameterOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confirmationRequirement = value.confirmationRequirement;
      this._operationId = value.operationId;
      this._proactiveEnabled = value.proactiveEnabled;
      this._reactiveEnabled = value.reactiveEnabled;
      this._toolset = value.toolset;
      this._parameterOverrides.internalValue = value.parameterOverrides;
    }
  }

  // confirmation_requirement - computed: false, optional: true, required: false
  private _confirmationRequirement?: string; 
  public get confirmationRequirement() {
    return this.getStringAttribute('confirmation_requirement');
  }
  public set confirmationRequirement(value: string) {
    this._confirmationRequirement = value;
  }
  public resetConfirmationRequirement() {
    this._confirmationRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationRequirementInput() {
    return this._confirmationRequirement;
  }

  // operation_id - computed: false, optional: true, required: false
  private _operationId?: string; 
  public get operationId() {
    return this.getStringAttribute('operation_id');
  }
  public set operationId(value: string) {
    this._operationId = value;
  }
  public resetOperationId() {
    this._operationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationIdInput() {
    return this._operationId;
  }

  // proactive_enabled - computed: false, optional: true, required: false
  private _proactiveEnabled?: boolean | cdktn.IResolvable; 
  public get proactiveEnabled() {
    return this.getBooleanAttribute('proactive_enabled');
  }
  public set proactiveEnabled(value: boolean | cdktn.IResolvable) {
    this._proactiveEnabled = value;
  }
  public resetProactiveEnabled() {
    this._proactiveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveEnabledInput() {
    return this._proactiveEnabled;
  }

  // reactive_enabled - computed: false, optional: true, required: false
  private _reactiveEnabled?: boolean | cdktn.IResolvable; 
  public get reactiveEnabled() {
    return this.getBooleanAttribute('reactive_enabled');
  }
  public set reactiveEnabled(value: boolean | cdktn.IResolvable) {
    this._reactiveEnabled = value;
  }
  public resetReactiveEnabled() {
    this._reactiveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reactiveEnabledInput() {
    return this._reactiveEnabled;
  }

  // toolset - computed: false, optional: false, required: true
  private _toolset?: string; 
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
  public set toolset(value: string) {
    this._toolset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetInput() {
    return this._toolset;
  }

  // parameter_overrides - computed: false, optional: true, required: false
  private _parameterOverrides = new GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList(this, "parameter_overrides", false);
  public get parameterOverrides() {
    return this._parameterOverrides;
  }
  public putParameterOverrides(value: GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides[] | cdktn.IResolvable) {
    this._parameterOverrides.internalValue = value;
  }
  public resetParameterOverrides() {
    this._parameterOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterOverridesInput() {
    return this._parameterOverrides.internalValue;
  }
}

export class GoogleDialogflowCompanionAgentToolsetToolsList extends cdktn.ComplexList {
  public internalValue? : GoogleDialogflowCompanionAgentToolsetTools[] | cdktn.IResolvable

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
  public get(index: number): GoogleDialogflowCompanionAgentToolsetToolsOutputReference {
    return new GoogleDialogflowCompanionAgentToolsetToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent google_dialogflow_companion_agent}
*/
export class GoogleDialogflowCompanionAgent extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_companion_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleDialogflowCompanionAgent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDialogflowCompanionAgent to import
  * @param importFromId The id of the existing GoogleDialogflowCompanionAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDialogflowCompanionAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_companion_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent google_dialogflow_companion_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDialogflowCompanionAgentConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDialogflowCompanionAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_companion_agent',
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
    this._companionAgentId = config.companionAgentId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._cesToolSpecs.internalValue = config.cesToolSpecs;
    this._skillConfigs.internalValue = config.skillConfigs;
    this._timeouts.internalValue = config.timeouts;
    this._toolsetTools.internalValue = config.toolsetTools;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // companion_agent_id - computed: false, optional: false, required: true
  private _companionAgentId?: string; 
  public get companionAgentId() {
    return this.getStringAttribute('companion_agent_id');
  }
  public set companionAgentId(value: string) {
    this._companionAgentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companionAgentIdInput() {
    return this._companionAgentId;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // ces_tool_specs - computed: false, optional: true, required: false
  private _cesToolSpecs = new GoogleDialogflowCompanionAgentCesToolSpecsList(this, "ces_tool_specs", false);
  public get cesToolSpecs() {
    return this._cesToolSpecs;
  }
  public putCesToolSpecs(value: GoogleDialogflowCompanionAgentCesToolSpecs[] | cdktn.IResolvable) {
    this._cesToolSpecs.internalValue = value;
  }
  public resetCesToolSpecs() {
    this._cesToolSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cesToolSpecsInput() {
    return this._cesToolSpecs.internalValue;
  }

  // skill_configs - computed: false, optional: true, required: false
  private _skillConfigs = new GoogleDialogflowCompanionAgentSkillConfigsList(this, "skill_configs", false);
  public get skillConfigs() {
    return this._skillConfigs;
  }
  public putSkillConfigs(value: GoogleDialogflowCompanionAgentSkillConfigs[] | cdktn.IResolvable) {
    this._skillConfigs.internalValue = value;
  }
  public resetSkillConfigs() {
    this._skillConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillConfigsInput() {
    return this._skillConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDialogflowCompanionAgentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDialogflowCompanionAgentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // toolset_tools - computed: false, optional: true, required: false
  private _toolsetTools = new GoogleDialogflowCompanionAgentToolsetToolsList(this, "toolset_tools", false);
  public get toolsetTools() {
    return this._toolsetTools;
  }
  public putToolsetTools(value: GoogleDialogflowCompanionAgentToolsetTools[] | cdktn.IResolvable) {
    this._toolsetTools.internalValue = value;
  }
  public resetToolsetTools() {
    this._toolsetTools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetToolsInput() {
    return this._toolsetTools.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      companion_agent_id: cdktn.stringToTerraform(this._companionAgentId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      ces_tool_specs: cdktn.listMapper(googleDialogflowCompanionAgentCesToolSpecsToTerraform, true)(this._cesToolSpecs.internalValue),
      skill_configs: cdktn.listMapper(googleDialogflowCompanionAgentSkillConfigsToTerraform, true)(this._skillConfigs.internalValue),
      timeouts: googleDialogflowCompanionAgentTimeoutsToTerraform(this._timeouts.internalValue),
      toolset_tools: cdktn.listMapper(googleDialogflowCompanionAgentToolsetToolsToTerraform, true)(this._toolsetTools.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      companion_agent_id: {
        value: cdktn.stringToHclTerraform(this._companionAgentId),
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
      ces_tool_specs: {
        value: cdktn.listMapperHcl(googleDialogflowCompanionAgentCesToolSpecsToHclTerraform, true)(this._cesToolSpecs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCompanionAgentCesToolSpecsList",
      },
      skill_configs: {
        value: cdktn.listMapperHcl(googleDialogflowCompanionAgentSkillConfigsToHclTerraform, true)(this._skillConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCompanionAgentSkillConfigsList",
      },
      timeouts: {
        value: googleDialogflowCompanionAgentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDialogflowCompanionAgentTimeouts",
      },
      toolset_tools: {
        value: cdktn.listMapperHcl(googleDialogflowCompanionAgentToolsetToolsToHclTerraform, true)(this._toolsetTools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCompanionAgentToolsetToolsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
