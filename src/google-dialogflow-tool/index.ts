/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleDialogflowToolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Optional. Confirmation requirement for the actions. Each key is an action name in the 'action_schemas'.
  * If an action's confirmation requirement is not specified (either the key is not present, or its value is 'CONFIRMATION_REQUIREMENT_UNSPECIFIED'), a default value will be populated depending on the action's method type: GET actions default to 'NOT_REQUIRED', and other actions default to 'REQUIRED'.
  * Valid values are 'REQUIRED' and 'NOT_REQUIRED'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#action_confirmation_requirement GoogleDialogflowTool#action_confirmation_requirement}
  */
  readonly actionConfirmationRequirement?: { [key: string]: string };
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#deletion_policy GoogleDialogflowTool#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Optional. Human readable description of the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#description GoogleDialogflowTool#description}
  */
  readonly description?: string;
  /**
  * Optional. The human-readable name of the tool, unique within the project and location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#display_name GoogleDialogflowTool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#id GoogleDialogflowTool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#location GoogleDialogflowTool#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#project GoogleDialogflowTool#project}
  */
  readonly project?: string;
  /**
  * Optional. The ID to use for the tool, which will become the final component of the tool's resource name.
  * The tool ID must be compliant with the regression formula '[a-zA-Z][a-zA-Z0-9_-]*' with the characters length in range of [3,64].
  * If the field is not provided, an Id will be auto-generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#tool_id GoogleDialogflowTool#tool_id}
  */
  readonly toolId?: string;
  /**
  * Required. A human readable short name of the tool, which should be unique within the project. It should only contain letters, numbers, and underscores, and it will be used by LLM to identify the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#tool_key GoogleDialogflowTool#tool_key}
  */
  readonly toolKey: string;
  /**
  * connector_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#connector_spec GoogleDialogflowTool#connector_spec}
  */
  readonly connectorSpec?: GoogleDialogflowToolConnectorSpec;
  /**
  * function_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#function_spec GoogleDialogflowTool#function_spec}
  */
  readonly functionSpec?: GoogleDialogflowToolFunctionSpec;
  /**
  * open_api_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#open_api_spec GoogleDialogflowTool#open_api_spec}
  */
  readonly openApiSpec?: GoogleDialogflowToolOpenApiSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#timeouts GoogleDialogflowTool#timeouts}
  */
  readonly timeouts?: GoogleDialogflowToolTimeouts;
}
export interface GoogleDialogflowToolConnectorSpecActionsEntityOperation {
  /**
  * ID of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#entity_id GoogleDialogflowTool#entity_id}
  */
  readonly entityId: string;
  /**
  * The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#operation GoogleDialogflowTool#operation}
  */
  readonly operation: string;
}

export function googleDialogflowToolConnectorSpecActionsEntityOperationToTerraform(struct?: GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference | GoogleDialogflowToolConnectorSpecActionsEntityOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entity_id: cdktn.stringToTerraform(struct!.entityId),
    operation: cdktn.stringToTerraform(struct!.operation),
  }
}


export function googleDialogflowToolConnectorSpecActionsEntityOperationToHclTerraform(struct?: GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference | GoogleDialogflowToolConnectorSpecActionsEntityOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entity_id: {
      value: cdktn.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktn.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowToolConnectorSpecActionsEntityOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowToolConnectorSpecActionsEntityOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityId = undefined;
      this._operation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityId = value.entityId;
      this._operation = value.operation;
    }
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }
}
export interface GoogleDialogflowToolConnectorSpecActions {
  /**
  * ID of a Connection action for the tool to use. This field is part of a required union field 'action_spec'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#connection_action_id GoogleDialogflowTool#connection_action_id}
  */
  readonly connectionActionId?: string;
  /**
  * Entity fields to use as inputs for the operation.
  * If no fields are specified, all fields of the Entity will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#input_fields GoogleDialogflowTool#input_fields}
  */
  readonly inputFields?: string[];
  /**
  * Entity fields to return from the operation.
  * If no fields are specified, all fields of the Entity will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#output_fields GoogleDialogflowTool#output_fields}
  */
  readonly outputFields?: string[];
  /**
  * entity_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#entity_operation GoogleDialogflowTool#entity_operation}
  */
  readonly entityOperation?: GoogleDialogflowToolConnectorSpecActionsEntityOperation;
}

export function googleDialogflowToolConnectorSpecActionsToTerraform(struct?: GoogleDialogflowToolConnectorSpecActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_action_id: cdktn.stringToTerraform(struct!.connectionActionId),
    input_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputFields),
    output_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.outputFields),
    entity_operation: googleDialogflowToolConnectorSpecActionsEntityOperationToTerraform(struct!.entityOperation),
  }
}


export function googleDialogflowToolConnectorSpecActionsToHclTerraform(struct?: GoogleDialogflowToolConnectorSpecActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_action_id: {
      value: cdktn.stringToHclTerraform(struct!.connectionActionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    output_fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.outputFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entity_operation: {
      value: googleDialogflowToolConnectorSpecActionsEntityOperationToHclTerraform(struct!.entityOperation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowToolConnectorSpecActionsEntityOperationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowToolConnectorSpecActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDialogflowToolConnectorSpecActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionActionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionActionId = this._connectionActionId;
    }
    if (this._inputFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFields = this._inputFields;
    }
    if (this._outputFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFields = this._outputFields;
    }
    if (this._entityOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityOperation = this._entityOperation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowToolConnectorSpecActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionActionId = undefined;
      this._inputFields = undefined;
      this._outputFields = undefined;
      this._entityOperation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionActionId = value.connectionActionId;
      this._inputFields = value.inputFields;
      this._outputFields = value.outputFields;
      this._entityOperation.internalValue = value.entityOperation;
    }
  }

  // connection_action_id - computed: false, optional: true, required: false
  private _connectionActionId?: string; 
  public get connectionActionId() {
    return this.getStringAttribute('connection_action_id');
  }
  public set connectionActionId(value: string) {
    this._connectionActionId = value;
  }
  public resetConnectionActionId() {
    this._connectionActionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionActionIdInput() {
    return this._connectionActionId;
  }

  // input_fields - computed: false, optional: true, required: false
  private _inputFields?: string[]; 
  public get inputFields() {
    return this.getListAttribute('input_fields');
  }
  public set inputFields(value: string[]) {
    this._inputFields = value;
  }
  public resetInputFields() {
    this._inputFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFieldsInput() {
    return this._inputFields;
  }

  // output_fields - computed: false, optional: true, required: false
  private _outputFields?: string[]; 
  public get outputFields() {
    return this.getListAttribute('output_fields');
  }
  public set outputFields(value: string[]) {
    this._outputFields = value;
  }
  public resetOutputFields() {
    this._outputFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFieldsInput() {
    return this._outputFields;
  }

  // entity_operation - computed: false, optional: true, required: false
  private _entityOperation = new GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference(this, "entity_operation");
  public get entityOperation() {
    return this._entityOperation;
  }
  public putEntityOperation(value: GoogleDialogflowToolConnectorSpecActionsEntityOperation) {
    this._entityOperation.internalValue = value;
  }
  public resetEntityOperation() {
    this._entityOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityOperationInput() {
    return this._entityOperation.internalValue;
  }
}

export class GoogleDialogflowToolConnectorSpecActionsList extends cdktn.ComplexList {
  public internalValue? : GoogleDialogflowToolConnectorSpecActions[] | cdktn.IResolvable

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
  public get(index: number): GoogleDialogflowToolConnectorSpecActionsOutputReference {
    return new GoogleDialogflowToolConnectorSpecActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowToolConnectorSpec {
  /**
  * The full resource name of the referenced Integration Connectors Connection.
  * Format: 'projects/* /locations/* /connections/*'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#name GoogleDialogflowTool#name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly name: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#actions GoogleDialogflowTool#actions}
  */
  readonly actions: GoogleDialogflowToolConnectorSpecActions[] | cdktn.IResolvable;
}

export function googleDialogflowToolConnectorSpecToTerraform(struct?: GoogleDialogflowToolConnectorSpecOutputReference | GoogleDialogflowToolConnectorSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    actions: cdktn.listMapper(googleDialogflowToolConnectorSpecActionsToTerraform, true)(struct!.actions),
  }
}


export function googleDialogflowToolConnectorSpecToHclTerraform(struct?: GoogleDialogflowToolConnectorSpecOutputReference | GoogleDialogflowToolConnectorSpec): any {
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
    actions: {
      value: cdktn.listMapperHcl(googleDialogflowToolConnectorSpecActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowToolConnectorSpecActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowToolConnectorSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowToolConnectorSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowToolConnectorSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._actions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._actions.internalValue = value.actions;
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

  // actions - computed: false, optional: false, required: true
  private _actions = new GoogleDialogflowToolConnectorSpecActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: GoogleDialogflowToolConnectorSpecActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }
}
export interface GoogleDialogflowToolFunctionSpec {
  /**
  * Optional. The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
  * This input is a JSON object that contains the function's parameters as properties of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#input_schema GoogleDialogflowTool#input_schema}
  */
  readonly inputSchema?: string;
  /**
  * Optional. The method type of the function. If not specified, the default value is GET. Possible values: ["GET", "POST", "PUT", "DELETE", "PATCH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#method_type GoogleDialogflowTool#method_type}
  */
  readonly methodType?: string;
  /**
  * Optional. The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
  * This output is a JSON object that contains the function's parameters as properties of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#output_schema GoogleDialogflowTool#output_schema}
  */
  readonly outputSchema?: string;
}

export function googleDialogflowToolFunctionSpecToTerraform(struct?: GoogleDialogflowToolFunctionSpecOutputReference | GoogleDialogflowToolFunctionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_schema: cdktn.stringToTerraform(struct!.inputSchema),
    method_type: cdktn.stringToTerraform(struct!.methodType),
    output_schema: cdktn.stringToTerraform(struct!.outputSchema),
  }
}


export function googleDialogflowToolFunctionSpecToHclTerraform(struct?: GoogleDialogflowToolFunctionSpecOutputReference | GoogleDialogflowToolFunctionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_schema: {
      value: cdktn.stringToHclTerraform(struct!.inputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_type: {
      value: cdktn.stringToHclTerraform(struct!.methodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_schema: {
      value: cdktn.stringToHclTerraform(struct!.outputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowToolFunctionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowToolFunctionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSchema = this._inputSchema;
    }
    if (this._methodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodType = this._methodType;
    }
    if (this._outputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchema = this._outputSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowToolFunctionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputSchema = undefined;
      this._methodType = undefined;
      this._outputSchema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputSchema = value.inputSchema;
      this._methodType = value.methodType;
      this._outputSchema = value.outputSchema;
    }
  }

  // input_schema - computed: false, optional: true, required: false
  private _inputSchema?: string; 
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string) {
    this._inputSchema = value;
  }
  public resetInputSchema() {
    this._inputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema;
  }

  // method_type - computed: false, optional: true, required: false
  private _methodType?: string; 
  public get methodType() {
    return this.getStringAttribute('method_type');
  }
  public set methodType(value: string) {
    this._methodType = value;
  }
  public resetMethodType() {
    this._methodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodTypeInput() {
    return this._methodType;
  }

  // output_schema - computed: false, optional: true, required: false
  private _outputSchema?: string; 
  public get outputSchema() {
    return this.getStringAttribute('output_schema');
  }
  public set outputSchema(value: string) {
    this._outputSchema = value;
  }
  public resetOutputSchema() {
    this._outputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaInput() {
    return this._outputSchema;
  }
}
export interface GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig {
  /**
  * Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#api_key GoogleDialogflowTool#api_key}
  */
  readonly apiKey?: string;
  /**
  * The parameter name or the header name of the API key.
  * E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#key_name GoogleDialogflowTool#key_name}
  */
  readonly keyName: string;
  /**
  * Key location in the request. Possible values: ["HEADER", "QUERY_STRING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#request_location GoogleDialogflowTool#request_location}
  */
  readonly requestLocation: string;
  /**
  * Optional. The name of the SecretManager secret version resource storing the API key.
  * If this field is set, the 'apiKey' field will be ignored.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#secret_version_for_api_key GoogleDialogflowTool#secret_version_for_api_key}
  */
  readonly secretVersionForApiKey?: string;
}

export function googleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigToTerraform(struct?: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference | GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    key_name: cdktn.stringToTerraform(struct!.keyName),
    request_location: cdktn.stringToTerraform(struct!.requestLocation),
    secret_version_for_api_key: cdktn.stringToTerraform(struct!.secretVersionForApiKey),
  }
}


export function googleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigToHclTerraform(struct?: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference | GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktn.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_location: {
      value: cdktn.stringToHclTerraform(struct!.requestLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version_for_api_key: {
      value: cdktn.stringToHclTerraform(struct!.secretVersionForApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._requestLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLocation = this._requestLocation;
    }
    if (this._secretVersionForApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForApiKey = this._secretVersionForApiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._keyName = undefined;
      this._requestLocation = undefined;
      this._secretVersionForApiKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._keyName = value.keyName;
      this._requestLocation = value.requestLocation;
      this._secretVersionForApiKey = value.secretVersionForApiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // request_location - computed: false, optional: false, required: true
  private _requestLocation?: string; 
  public get requestLocation() {
    return this.getStringAttribute('request_location');
  }
  public set requestLocation(value: string) {
    this._requestLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLocationInput() {
    return this._requestLocation;
  }

  // secret_version_for_api_key - computed: false, optional: true, required: false
  private _secretVersionForApiKey?: string; 
  public get secretVersionForApiKey() {
    return this.getStringAttribute('secret_version_for_api_key');
  }
  public set secretVersionForApiKey(value: string) {
    this._secretVersionForApiKey = value;
  }
  public resetSecretVersionForApiKey() {
    this._secretVersionForApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForApiKeyInput() {
    return this._secretVersionForApiKey;
  }
}
export interface GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig {
  /**
  * Optional. The name of the SecretManager secret version resource storing the Bearer token.
  * If this field is set, the 'token' field will be ignored.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#secret_version_for_token GoogleDialogflowTool#secret_version_for_token}
  */
  readonly secretVersionForToken?: string;
  /**
  * Optional. The text token appended to the text 'Bearer' to the request Authorization header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#token GoogleDialogflowTool#token}
  */
  readonly token?: string;
}

export function googleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigToTerraform(struct?: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference | GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_version_for_token: cdktn.stringToTerraform(struct!.secretVersionForToken),
    token: cdktn.stringToTerraform(struct!.token),
  }
}


export function googleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigToHclTerraform(struct?: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference | GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_version_for_token: {
      value: cdktn.stringToHclTerraform(struct!.secretVersionForToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktn.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersionForToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForToken = this._secretVersionForToken;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersionForToken = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersionForToken = value.secretVersionForToken;
      this._token = value.token;
    }
  }

  // secret_version_for_token - computed: false, optional: true, required: false
  private _secretVersionForToken?: string; 
  public get secretVersionForToken() {
    return this.getStringAttribute('secret_version_for_token');
  }
  public set secretVersionForToken(value: string) {
    this._secretVersionForToken = value;
  }
  public resetSecretVersionForToken() {
    this._secretVersionForToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForTokenInput() {
    return this._secretVersionForToken;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig {
  /**
  * The client ID from the OAuth provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#client_id GoogleDialogflowTool#client_id}
  */
  readonly clientId: string;
  /**
  * Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#client_secret GoogleDialogflowTool#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#oauth_grant_type GoogleDialogflowTool#oauth_grant_type}
  */
  readonly oauthGrantType: string;
  /**
  * Optional. The OAuth scopes to grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#scopes GoogleDialogflowTool#scopes}
  */
  readonly scopes?: string[];
  /**
  * Optional. The name of the SecretManager secret version resource storing the client secret.
  * If this field is set, the 'clientSecret' field will be ignored.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#secret_version_for_client_secret GoogleDialogflowTool#secret_version_for_client_secret}
  */
  readonly secretVersionForClientSecret?: string;
  /**
  * The token endpoint in the OAuth provider to exchange for an access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#token_endpoint GoogleDialogflowTool#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function googleDialogflowToolOpenApiSpecAuthenticationOauthConfigToTerraform(struct?: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference | GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    oauth_grant_type: cdktn.stringToTerraform(struct!.oauthGrantType),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    secret_version_for_client_secret: cdktn.stringToTerraform(struct!.secretVersionForClientSecret),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function googleDialogflowToolOpenApiSpecAuthenticationOauthConfigToHclTerraform(struct?: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference | GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig): any {
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
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_grant_type: {
      value: cdktn.stringToHclTerraform(struct!.oauthGrantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_version_for_client_secret: {
      value: cdktn.stringToHclTerraform(struct!.secretVersionForClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._oauthGrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthGrantType = this._oauthGrantType;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._secretVersionForClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForClientSecret = this._secretVersionForClientSecret;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._oauthGrantType = undefined;
      this._scopes = undefined;
      this._secretVersionForClientSecret = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._oauthGrantType = value.oauthGrantType;
      this._scopes = value.scopes;
      this._secretVersionForClientSecret = value.secretVersionForClientSecret;
      this._tokenEndpoint = value.tokenEndpoint;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // oauth_grant_type - computed: false, optional: false, required: true
  private _oauthGrantType?: string; 
  public get oauthGrantType() {
    return this.getStringAttribute('oauth_grant_type');
  }
  public set oauthGrantType(value: string) {
    this._oauthGrantType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthGrantTypeInput() {
    return this._oauthGrantType;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secret_version_for_client_secret - computed: false, optional: true, required: false
  private _secretVersionForClientSecret?: string; 
  public get secretVersionForClientSecret() {
    return this.getStringAttribute('secret_version_for_client_secret');
  }
  public set secretVersionForClientSecret(value: string) {
    this._secretVersionForClientSecret = value;
  }
  public resetSecretVersionForClientSecret() {
    this._secretVersionForClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForClientSecretInput() {
    return this._secretVersionForClientSecret;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig {
  /**
  * Optional. Indicate the auth token type generated from the Dialogflow service agent.
  * The generated token is sent in the Authorization header. Possible values: ["ID_TOKEN", "ACCESS_TOKEN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service_agent_auth GoogleDialogflowTool#service_agent_auth}
  */
  readonly serviceAgentAuth?: string;
}

export function googleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigToTerraform(struct?: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference | GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_agent_auth: cdktn.stringToTerraform(struct!.serviceAgentAuth),
  }
}


export function googleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigToHclTerraform(struct?: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference | GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service_agent_auth: {
      value: cdktn.stringToHclTerraform(struct!.serviceAgentAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAgentAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentAuth = this._serviceAgentAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAgentAuth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAgentAuth = value.serviceAgentAuth;
    }
  }

  // service_agent_auth - computed: false, optional: true, required: false
  private _serviceAgentAuth?: string; 
  public get serviceAgentAuth() {
    return this.getStringAttribute('service_agent_auth');
  }
  public set serviceAgentAuth(value: string) {
    this._serviceAgentAuth = value;
  }
  public resetServiceAgentAuth() {
    this._serviceAgentAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentAuthInput() {
    return this._serviceAgentAuth;
  }
}
export interface GoogleDialogflowToolOpenApiSpecAuthentication {
  /**
  * api_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#api_key_config GoogleDialogflowTool#api_key_config}
  */
  readonly apiKeyConfig?: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig;
  /**
  * bearer_token_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#bearer_token_config GoogleDialogflowTool#bearer_token_config}
  */
  readonly bearerTokenConfig?: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#oauth_config GoogleDialogflowTool#oauth_config}
  */
  readonly oauthConfig?: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig;
  /**
  * service_agent_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service_agent_auth_config GoogleDialogflowTool#service_agent_auth_config}
  */
  readonly serviceAgentAuthConfig?: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
}

export function googleDialogflowToolOpenApiSpecAuthenticationToTerraform(struct?: GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference | GoogleDialogflowToolOpenApiSpecAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_config: googleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigToTerraform(struct!.apiKeyConfig),
    bearer_token_config: googleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigToTerraform(struct!.bearerTokenConfig),
    oauth_config: googleDialogflowToolOpenApiSpecAuthenticationOauthConfigToTerraform(struct!.oauthConfig),
    service_agent_auth_config: googleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigToTerraform(struct!.serviceAgentAuthConfig),
  }
}


export function googleDialogflowToolOpenApiSpecAuthenticationToHclTerraform(struct?: GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference | GoogleDialogflowToolOpenApiSpecAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_config: {
      value: googleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigToHclTerraform(struct!.apiKeyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigList",
    },
    bearer_token_config: {
      value: googleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigToHclTerraform(struct!.bearerTokenConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigList",
    },
    oauth_config: {
      value: googleDialogflowToolOpenApiSpecAuthenticationOauthConfigToHclTerraform(struct!.oauthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigList",
    },
    service_agent_auth_config: {
      value: googleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigToHclTerraform(struct!.serviceAgentAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowToolOpenApiSpecAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyConfig = this._apiKeyConfig?.internalValue;
    }
    if (this._bearerTokenConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenConfig = this._bearerTokenConfig?.internalValue;
    }
    if (this._oauthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthConfig = this._oauthConfig?.internalValue;
    }
    if (this._serviceAgentAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentAuthConfig = this._serviceAgentAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowToolOpenApiSpecAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeyConfig.internalValue = undefined;
      this._bearerTokenConfig.internalValue = undefined;
      this._oauthConfig.internalValue = undefined;
      this._serviceAgentAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeyConfig.internalValue = value.apiKeyConfig;
      this._bearerTokenConfig.internalValue = value.bearerTokenConfig;
      this._oauthConfig.internalValue = value.oauthConfig;
      this._serviceAgentAuthConfig.internalValue = value.serviceAgentAuthConfig;
    }
  }

  // api_key_config - computed: false, optional: true, required: false
  private _apiKeyConfig = new GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(this, "api_key_config");
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }
  public putApiKeyConfig(value: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig) {
    this._apiKeyConfig.internalValue = value;
  }
  public resetApiKeyConfig() {
    this._apiKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyConfigInput() {
    return this._apiKeyConfig.internalValue;
  }

  // bearer_token_config - computed: false, optional: true, required: false
  private _bearerTokenConfig = new GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(this, "bearer_token_config");
  public get bearerTokenConfig() {
    return this._bearerTokenConfig;
  }
  public putBearerTokenConfig(value: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig) {
    this._bearerTokenConfig.internalValue = value;
  }
  public resetBearerTokenConfig() {
    this._bearerTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenConfigInput() {
    return this._bearerTokenConfig.internalValue;
  }

  // oauth_config - computed: false, optional: true, required: false
  private _oauthConfig = new GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  public resetOauthConfig() {
    this._oauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // service_agent_auth_config - computed: false, optional: true, required: false
  private _serviceAgentAuthConfig = new GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(this, "service_agent_auth_config");
  public get serviceAgentAuthConfig() {
    return this._serviceAgentAuthConfig;
  }
  public putServiceAgentAuthConfig(value: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig) {
    this._serviceAgentAuthConfig.internalValue = value;
  }
  public resetServiceAgentAuthConfig() {
    this._serviceAgentAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentAuthConfigInput() {
    return this._serviceAgentAuthConfig.internalValue;
  }
}
export interface GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig {
  /**
  * The name of [Service Directory](https://cloud.google.com/service-directory/docs) service.
  * Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'.
  * 'LocationID' of the service directory must be the same as the location of the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service GoogleDialogflowTool#service}
  */
  readonly service: string;
}

export function googleDialogflowToolOpenApiSpecServiceDirectoryConfigToTerraform(struct?: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference | GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function googleDialogflowToolOpenApiSpecServiceDirectoryConfigToHclTerraform(struct?: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference | GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
    }
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
export interface GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts {
  /**
  * The allowed custom CA certificates (in DER format) for HTTPS verification. This overrides the default SSL trust store.
  * If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
  * N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#cert GoogleDialogflowTool#cert}
  */
  readonly cert: string;
  /**
  * The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#display_name GoogleDialogflowTool#display_name}
  */
  readonly displayName: string;
}

export function googleDialogflowToolOpenApiSpecTlsConfigCaCertsToTerraform(struct?: GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cert: cdktn.stringToTerraform(struct!.cert),
    display_name: cdktn.stringToTerraform(struct!.displayName),
  }
}


export function googleDialogflowToolOpenApiSpecTlsConfigCaCertsToHclTerraform(struct?: GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cert: {
      value: cdktn.stringToHclTerraform(struct!.cert),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._displayName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._displayName = value.displayName;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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
}

export class GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList extends cdktn.ComplexList {
  public internalValue? : GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts[] | cdktn.IResolvable

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
  public get(index: number): GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference {
    return new GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowToolOpenApiSpecTlsConfig {
  /**
  * ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#ca_certs GoogleDialogflowTool#ca_certs}
  */
  readonly caCerts: GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts[] | cdktn.IResolvable;
}

export function googleDialogflowToolOpenApiSpecTlsConfigToTerraform(struct?: GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference | GoogleDialogflowToolOpenApiSpecTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_certs: cdktn.listMapper(googleDialogflowToolOpenApiSpecTlsConfigCaCertsToTerraform, true)(struct!.caCerts),
  }
}


export function googleDialogflowToolOpenApiSpecTlsConfigToHclTerraform(struct?: GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference | GoogleDialogflowToolOpenApiSpecTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_certs: {
      value: cdktn.listMapperHcl(googleDialogflowToolOpenApiSpecTlsConfigCaCertsToHclTerraform, true)(struct!.caCerts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowToolOpenApiSpecTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCerts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCerts = this._caCerts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowToolOpenApiSpecTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCerts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCerts.internalValue = value.caCerts;
    }
  }

  // ca_certs - computed: false, optional: false, required: true
  private _caCerts = new GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
  public putCaCerts(value: GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts[] | cdktn.IResolvable) {
    this._caCerts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts.internalValue;
  }
}
export interface GoogleDialogflowToolOpenApiSpec {
  /**
  * Required. The OpenAPI schema specified as a text.
  * Note: Plays a role in linking the OpenAPI spec with the tool. The 'info.title' field in the OpenAPI schema must match the 'toolKey' of the tool, otherwise the API will overwrite 'info.title' with 'toolKey'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#text_schema GoogleDialogflowTool#text_schema}
  */
  readonly textSchema: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#authentication GoogleDialogflowTool#authentication}
  */
  readonly authentication?: GoogleDialogflowToolOpenApiSpecAuthentication;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service_directory_config GoogleDialogflowTool#service_directory_config}
  */
  readonly serviceDirectoryConfig?: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#tls_config GoogleDialogflowTool#tls_config}
  */
  readonly tlsConfig?: GoogleDialogflowToolOpenApiSpecTlsConfig;
}

export function googleDialogflowToolOpenApiSpecToTerraform(struct?: GoogleDialogflowToolOpenApiSpecOutputReference | GoogleDialogflowToolOpenApiSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text_schema: cdktn.stringToTerraform(struct!.textSchema),
    authentication: googleDialogflowToolOpenApiSpecAuthenticationToTerraform(struct!.authentication),
    service_directory_config: googleDialogflowToolOpenApiSpecServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
    tls_config: googleDialogflowToolOpenApiSpecTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function googleDialogflowToolOpenApiSpecToHclTerraform(struct?: GoogleDialogflowToolOpenApiSpecOutputReference | GoogleDialogflowToolOpenApiSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text_schema: {
      value: cdktn.stringToHclTerraform(struct!.textSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleDialogflowToolOpenApiSpecAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowToolOpenApiSpecAuthenticationList",
    },
    service_directory_config: {
      value: googleDialogflowToolOpenApiSpecServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigList",
    },
    tls_config: {
      value: googleDialogflowToolOpenApiSpecTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowToolOpenApiSpecTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowToolOpenApiSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowToolOpenApiSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.textSchema = this._textSchema;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._serviceDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryConfig = this._serviceDirectoryConfig?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowToolOpenApiSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._textSchema = undefined;
      this._authentication.internalValue = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._textSchema = value.textSchema;
      this._authentication.internalValue = value.authentication;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // text_schema - computed: false, optional: false, required: true
  private _textSchema?: string; 
  public get textSchema() {
    return this.getStringAttribute('text_schema');
  }
  public set textSchema(value: string) {
    this._textSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textSchemaInput() {
    return this._textSchema;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleDialogflowToolOpenApiSpecAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: GoogleDialogflowToolOpenApiSpecTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface GoogleDialogflowToolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#create GoogleDialogflowTool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#delete GoogleDialogflowTool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#update GoogleDialogflowTool#update}
  */
  readonly update?: string;
}

export function googleDialogflowToolTimeoutsToTerraform(struct?: GoogleDialogflowToolTimeouts | cdktn.IResolvable): any {
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


export function googleDialogflowToolTimeoutsToHclTerraform(struct?: GoogleDialogflowToolTimeouts | cdktn.IResolvable): any {
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

export class GoogleDialogflowToolTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDialogflowToolTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowToolTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool google_dialogflow_tool}
*/
export class GoogleDialogflowTool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_tool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleDialogflowTool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDialogflowTool to import
  * @param importFromId The id of the existing GoogleDialogflowTool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDialogflowTool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_tool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool google_dialogflow_tool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDialogflowToolConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDialogflowToolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_tool',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '8.6.0',
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
    this._actionConfirmationRequirement = config.actionConfirmationRequirement;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._toolId = config.toolId;
    this._toolKey = config.toolKey;
    this._connectorSpec.internalValue = config.connectorSpec;
    this._functionSpec.internalValue = config.functionSpec;
    this._openApiSpec.internalValue = config.openApiSpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_confirmation_requirement - computed: true, optional: true, required: false
  private _actionConfirmationRequirement?: { [key: string]: string }; 
  public get actionConfirmationRequirement() {
    return this.getStringMapAttribute('action_confirmation_requirement');
  }
  public set actionConfirmationRequirement(value: { [key: string]: string }) {
    this._actionConfirmationRequirement = value;
  }
  public resetActionConfirmationRequirement() {
    this._actionConfirmationRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionConfirmationRequirementInput() {
    return this._actionConfirmationRequirement;
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

  // satisfies_pzi - computed: true, optional: false, required: false
  public get satisfiesPzi() {
    return this.getBooleanAttribute('satisfies_pzi');
  }

  // satisfies_pzs - computed: true, optional: false, required: false
  public get satisfiesPzs() {
    return this.getBooleanAttribute('satisfies_pzs');
  }

  // tool_id - computed: true, optional: true, required: false
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  public resetToolId() {
    this._toolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // tool_key - computed: false, optional: false, required: true
  private _toolKey?: string; 
  public get toolKey() {
    return this.getStringAttribute('tool_key');
  }
  public set toolKey(value: string) {
    this._toolKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolKeyInput() {
    return this._toolKey;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // connector_spec - computed: false, optional: true, required: false
  private _connectorSpec = new GoogleDialogflowToolConnectorSpecOutputReference(this, "connector_spec");
  public get connectorSpec() {
    return this._connectorSpec;
  }
  public putConnectorSpec(value: GoogleDialogflowToolConnectorSpec) {
    this._connectorSpec.internalValue = value;
  }
  public resetConnectorSpec() {
    this._connectorSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorSpecInput() {
    return this._connectorSpec.internalValue;
  }

  // function_spec - computed: false, optional: true, required: false
  private _functionSpec = new GoogleDialogflowToolFunctionSpecOutputReference(this, "function_spec");
  public get functionSpec() {
    return this._functionSpec;
  }
  public putFunctionSpec(value: GoogleDialogflowToolFunctionSpec) {
    this._functionSpec.internalValue = value;
  }
  public resetFunctionSpec() {
    this._functionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionSpecInput() {
    return this._functionSpec.internalValue;
  }

  // open_api_spec - computed: false, optional: true, required: false
  private _openApiSpec = new GoogleDialogflowToolOpenApiSpecOutputReference(this, "open_api_spec");
  public get openApiSpec() {
    return this._openApiSpec;
  }
  public putOpenApiSpec(value: GoogleDialogflowToolOpenApiSpec) {
    this._openApiSpec.internalValue = value;
  }
  public resetOpenApiSpec() {
    this._openApiSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiSpecInput() {
    return this._openApiSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDialogflowToolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDialogflowToolTimeouts) {
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
      action_confirmation_requirement: cdktn.hashMapper(cdktn.stringToTerraform)(this._actionConfirmationRequirement),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      tool_id: cdktn.stringToTerraform(this._toolId),
      tool_key: cdktn.stringToTerraform(this._toolKey),
      connector_spec: googleDialogflowToolConnectorSpecToTerraform(this._connectorSpec.internalValue),
      function_spec: googleDialogflowToolFunctionSpecToTerraform(this._functionSpec.internalValue),
      open_api_spec: googleDialogflowToolOpenApiSpecToTerraform(this._openApiSpec.internalValue),
      timeouts: googleDialogflowToolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_confirmation_requirement: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._actionConfirmationRequirement),
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
      tool_id: {
        value: cdktn.stringToHclTerraform(this._toolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tool_key: {
        value: cdktn.stringToHclTerraform(this._toolKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_spec: {
        value: googleDialogflowToolConnectorSpecToHclTerraform(this._connectorSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowToolConnectorSpecList",
      },
      function_spec: {
        value: googleDialogflowToolFunctionSpecToHclTerraform(this._functionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowToolFunctionSpecList",
      },
      open_api_spec: {
        value: googleDialogflowToolOpenApiSpecToHclTerraform(this._openApiSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowToolOpenApiSpecList",
      },
      timeouts: {
        value: googleDialogflowToolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDialogflowToolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
