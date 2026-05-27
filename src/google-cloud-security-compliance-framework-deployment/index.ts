/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleCloudSecurityComplianceFrameworkDeploymentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#deletion_policy GoogleCloudSecurityComplianceFrameworkDeployment#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * User provided description of the Framework deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#description GoogleCloudSecurityComplianceFrameworkDeployment#description}
  */
  readonly description?: string;
  /**
  * User provided identifier. It should be unique in scope of a parent.
  * This is optional and if not provided, a random UUID will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework_deployment_id GoogleCloudSecurityComplianceFrameworkDeployment#framework_deployment_id}
  */
  readonly frameworkDeploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#id GoogleCloudSecurityComplianceFrameworkDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#location GoogleCloudSecurityComplianceFrameworkDeployment#location}
  */
  readonly location: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#organization GoogleCloudSecurityComplianceFrameworkDeployment#organization}
  */
  readonly organization: string;
  /**
  * cloud_control_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#cloud_control_metadata GoogleCloudSecurityComplianceFrameworkDeployment#cloud_control_metadata}
  */
  readonly cloudControlMetadata: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata[] | cdktn.IResolvable;
  /**
  * framework block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework GoogleCloudSecurityComplianceFrameworkDeployment#framework}
  */
  readonly framework: GoogleCloudSecurityComplianceFrameworkDeploymentFramework;
  /**
  * target_resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#target_resource_config GoogleCloudSecurityComplianceFrameworkDeployment#target_resource_config}
  */
  readonly targetResourceConfig: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#timeouts GoogleCloudSecurityComplianceFrameworkDeployment#timeouts}
  */
  readonly timeouts?: GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts;
}
export interface GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences {
}

export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_control_deployment - computed: true, optional: false, required: false
  public get cloudControlDeployment() {
    return this.getStringAttribute('cloud_control_deployment');
  }
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList extends cdktn.ComplexList {

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
  public get(index: number): GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference {
    return new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue {
  /**
  * The strings in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#values GoogleCloudSecurityComplianceFrameworkDeployment#values}
  */
  readonly values: string[];
}

export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue {
  /**
  * Represents a boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#bool_value GoogleCloudSecurityComplianceFrameworkDeployment#bool_value}
  */
  readonly boolValue?: boolean | cdktn.IResolvable;
  /**
  * Represents a double value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#number_value GoogleCloudSecurityComplianceFrameworkDeployment#number_value}
  */
  readonly numberValue?: number;
  /**
  * Represents a string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_value GoogleCloudSecurityComplianceFrameworkDeployment#string_value}
  */
  readonly stringValue?: string;
  /**
  * string_list_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_list_value GoogleCloudSecurityComplianceFrameworkDeployment#string_list_value}
  */
  readonly stringListValue?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue;
}

export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_value: cdktn.booleanToTerraform(struct!.boolValue),
    number_value: cdktn.numberToTerraform(struct!.numberValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
    string_list_value: googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueToTerraform(struct!.stringListValue),
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_value: {
      value: cdktn.booleanToHclTerraform(struct!.boolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_value: {
      value: cdktn.numberToHclTerraform(struct!.numberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list_value: {
      value: googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueToHclTerraform(struct!.stringListValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolValue = this._boolValue;
    }
    if (this._numberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValue = this._numberValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._stringListValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValue = this._stringListValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._boolValue = undefined;
      this._numberValue = undefined;
      this._stringValue = undefined;
      this._stringListValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._boolValue = value.boolValue;
      this._numberValue = value.numberValue;
      this._stringValue = value.stringValue;
      this._stringListValue.internalValue = value.stringListValue;
    }
  }

  // bool_value - computed: false, optional: true, required: false
  private _boolValue?: boolean | cdktn.IResolvable; 
  public get boolValue() {
    return this.getBooleanAttribute('bool_value');
  }
  public set boolValue(value: boolean | cdktn.IResolvable) {
    this._boolValue = value;
  }
  public resetBoolValue() {
    this._boolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValueInput() {
    return this._boolValue;
  }

  // number_value - computed: false, optional: true, required: false
  private _numberValue?: number; 
  public get numberValue() {
    return this.getNumberAttribute('number_value');
  }
  public set numberValue(value: number) {
    this._numberValue = value;
  }
  public resetNumberValue() {
    this._numberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValueInput() {
    return this._numberValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // string_list_value - computed: false, optional: true, required: false
  private _stringListValue = new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference(this, "string_list_value");
  public get stringListValue() {
    return this._stringListValue;
  }
  public putStringListValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue) {
    this._stringListValue.internalValue = value;
  }
  public resetStringListValue() {
    this._stringListValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValueInput() {
    return this._stringListValue.internalValue;
  }
}
export interface GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue {
  /**
  * The name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#name GoogleCloudSecurityComplianceFrameworkDeployment#name}
  */
  readonly name?: string;
  /**
  * parameter_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#parameter_value GoogleCloudSecurityComplianceFrameworkDeployment#parameter_value}
  */
  readonly parameterValue?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue;
}

export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    parameter_value: googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueToTerraform(struct!.parameterValue),
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueToHclTerraform(struct!.parameterValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameterValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._parameterValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._parameterValue.internalValue = value.parameterValue;
    }
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

  // parameter_value - computed: false, optional: true, required: false
  private _parameterValue = new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference(this, "parameter_value");
  public get parameterValue() {
    return this._parameterValue;
  }
  public putParameterValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue) {
    this._parameterValue.internalValue = value;
  }
  public resetParameterValue() {
    this._parameterValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue.internalValue;
  }
}
export interface GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue {
  /**
  * The strings in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#values GoogleCloudSecurityComplianceFrameworkDeployment#values}
  */
  readonly values: string[];
}

export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue {
  /**
  * Represents a boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#bool_value GoogleCloudSecurityComplianceFrameworkDeployment#bool_value}
  */
  readonly boolValue?: boolean | cdktn.IResolvable;
  /**
  * Represents a double value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#number_value GoogleCloudSecurityComplianceFrameworkDeployment#number_value}
  */
  readonly numberValue?: number;
  /**
  * Represents a string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_value GoogleCloudSecurityComplianceFrameworkDeployment#string_value}
  */
  readonly stringValue?: string;
  /**
  * oneof_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#oneof_value GoogleCloudSecurityComplianceFrameworkDeployment#oneof_value}
  */
  readonly oneofValue?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue;
  /**
  * string_list_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_list_value GoogleCloudSecurityComplianceFrameworkDeployment#string_list_value}
  */
  readonly stringListValue?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue;
}

export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_value: cdktn.booleanToTerraform(struct!.boolValue),
    number_value: cdktn.numberToTerraform(struct!.numberValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
    oneof_value: googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueToTerraform(struct!.oneofValue),
    string_list_value: googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueToTerraform(struct!.stringListValue),
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_value: {
      value: cdktn.booleanToHclTerraform(struct!.boolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_value: {
      value: cdktn.numberToHclTerraform(struct!.numberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oneof_value: {
      value: googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueToHclTerraform(struct!.oneofValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueList",
    },
    string_list_value: {
      value: googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueToHclTerraform(struct!.stringListValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolValue = this._boolValue;
    }
    if (this._numberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValue = this._numberValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._oneofValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneofValue = this._oneofValue?.internalValue;
    }
    if (this._stringListValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValue = this._stringListValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._boolValue = undefined;
      this._numberValue = undefined;
      this._stringValue = undefined;
      this._oneofValue.internalValue = undefined;
      this._stringListValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._boolValue = value.boolValue;
      this._numberValue = value.numberValue;
      this._stringValue = value.stringValue;
      this._oneofValue.internalValue = value.oneofValue;
      this._stringListValue.internalValue = value.stringListValue;
    }
  }

  // bool_value - computed: false, optional: true, required: false
  private _boolValue?: boolean | cdktn.IResolvable; 
  public get boolValue() {
    return this.getBooleanAttribute('bool_value');
  }
  public set boolValue(value: boolean | cdktn.IResolvable) {
    this._boolValue = value;
  }
  public resetBoolValue() {
    this._boolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValueInput() {
    return this._boolValue;
  }

  // number_value - computed: false, optional: true, required: false
  private _numberValue?: number; 
  public get numberValue() {
    return this.getNumberAttribute('number_value');
  }
  public set numberValue(value: number) {
    this._numberValue = value;
  }
  public resetNumberValue() {
    this._numberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValueInput() {
    return this._numberValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // oneof_value - computed: false, optional: true, required: false
  private _oneofValue = new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference(this, "oneof_value");
  public get oneofValue() {
    return this._oneofValue;
  }
  public putOneofValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue) {
    this._oneofValue.internalValue = value;
  }
  public resetOneofValue() {
    this._oneofValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneofValueInput() {
    return this._oneofValue.internalValue;
  }

  // string_list_value - computed: false, optional: true, required: false
  private _stringListValue = new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference(this, "string_list_value");
  public get stringListValue() {
    return this._stringListValue;
  }
  public putStringListValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue) {
    this._stringListValue.internalValue = value;
  }
  public resetStringListValue() {
    this._stringListValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValueInput() {
    return this._stringListValue.internalValue;
  }
}
export interface GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters {
  /**
  * The name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#name GoogleCloudSecurityComplianceFrameworkDeployment#name}
  */
  readonly name: string;
  /**
  * parameter_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#parameter_value GoogleCloudSecurityComplianceFrameworkDeployment#parameter_value}
  */
  readonly parameterValue: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue;
}

export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    parameter_value: googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueToTerraform(struct!.parameterValue),
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueToHclTerraform(struct!.parameterValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameterValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameterValue.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameterValue.internalValue = value.parameterValue;
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

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue = new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference(this, "parameter_value");
  public get parameterValue() {
    return this._parameterValue;
  }
  public putParameterValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue) {
    this._parameterValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue.internalValue;
  }
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList extends cdktn.ComplexList {
  public internalValue? : GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters[] | cdktn.IResolvable

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
  public get(index: number): GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference {
    return new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails {
  /**
  * Major revision of cloudcontrol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#major_revision_id GoogleCloudSecurityComplianceFrameworkDeployment#major_revision_id}
  */
  readonly majorRevisionId: string;
  /**
  * The name of the CloudControl in the format:
  * “organizations/{organization}/locations/{location}/
  * cloudControls/{cloud-control}”
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#name GoogleCloudSecurityComplianceFrameworkDeployment#name}
  */
  readonly name: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#parameters GoogleCloudSecurityComplianceFrameworkDeployment#parameters}
  */
  readonly parameters?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters[] | cdktn.IResolvable;
}

export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    major_revision_id: cdktn.stringToTerraform(struct!.majorRevisionId),
    name: cdktn.stringToTerraform(struct!.name),
    parameters: cdktn.listMapper(googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersToTerraform, true)(struct!.parameters),
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    major_revision_id: {
      value: cdktn.stringToHclTerraform(struct!.majorRevisionId),
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
    parameters: {
      value: cdktn.listMapperHcl(googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._majorRevisionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.majorRevisionId = this._majorRevisionId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._majorRevisionId = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._majorRevisionId = value.majorRevisionId;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
    }
  }

  // major_revision_id - computed: false, optional: false, required: true
  private _majorRevisionId?: string; 
  public get majorRevisionId() {
    return this.getStringAttribute('major_revision_id');
  }
  public set majorRevisionId(value: string) {
    this._majorRevisionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get majorRevisionIdInput() {
    return this._majorRevisionId;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters[] | cdktn.IResolvable) {
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
export interface GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata {
  /**
  * Enforcement mode for the framework deployment.
  * Possible values:
  * PREVENTIVE
  * DETECTIVE
  * AUDIT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#enforcement_mode GoogleCloudSecurityComplianceFrameworkDeployment#enforcement_mode}
  */
  readonly enforcementMode: string;
  /**
  * cloud_control_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#cloud_control_details GoogleCloudSecurityComplianceFrameworkDeployment#cloud_control_details}
  */
  readonly cloudControlDetails: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails;
}

export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcement_mode: cdktn.stringToTerraform(struct!.enforcementMode),
    cloud_control_details: googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsToTerraform(struct!.cloudControlDetails),
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforcement_mode: {
      value: cdktn.stringToHclTerraform(struct!.enforcementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_control_details: {
      value: googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsToHclTerraform(struct!.cloudControlDetails),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementMode = this._enforcementMode;
    }
    if (this._cloudControlDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudControlDetails = this._cloudControlDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforcementMode = undefined;
      this._cloudControlDetails.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforcementMode = value.enforcementMode;
      this._cloudControlDetails.internalValue = value.cloudControlDetails;
    }
  }

  // enforcement_mode - computed: false, optional: false, required: true
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }

  // cloud_control_details - computed: false, optional: false, required: true
  private _cloudControlDetails = new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference(this, "cloud_control_details");
  public get cloudControlDetails() {
    return this._cloudControlDetails;
  }
  public putCloudControlDetails(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails) {
    this._cloudControlDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudControlDetailsInput() {
    return this._cloudControlDetails.internalValue;
  }
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList extends cdktn.ComplexList {
  public internalValue? : GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata[] | cdktn.IResolvable

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
  public get(index: number): GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference {
    return new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudSecurityComplianceFrameworkDeploymentFramework {
  /**
  * In the format:
  * organizations/{org}/locations/{location}/frameworks/{framework}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework GoogleCloudSecurityComplianceFrameworkDeployment#framework}
  */
  readonly framework: string;
  /**
  * Major revision id of the framework.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#major_revision_id GoogleCloudSecurityComplianceFrameworkDeployment#major_revision_id}
  */
  readonly majorRevisionId: string;
}

export function googleCloudSecurityComplianceFrameworkDeploymentFrameworkToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentFramework): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    framework: cdktn.stringToTerraform(struct!.framework),
    major_revision_id: cdktn.stringToTerraform(struct!.majorRevisionId),
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentFrameworkToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentFramework): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    framework: {
      value: cdktn.stringToHclTerraform(struct!.framework),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    major_revision_id: {
      value: cdktn.stringToHclTerraform(struct!.majorRevisionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentFramework | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._framework !== undefined) {
      hasAnyValues = true;
      internalValueResult.framework = this._framework;
    }
    if (this._majorRevisionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.majorRevisionId = this._majorRevisionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentFramework | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._framework = undefined;
      this._majorRevisionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._framework = value.framework;
      this._majorRevisionId = value.majorRevisionId;
    }
  }

  // framework - computed: false, optional: false, required: true
  private _framework?: string; 
  public get framework() {
    return this.getStringAttribute('framework');
  }
  public set framework(value: string) {
    this._framework = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework;
  }

  // major_revision_id - computed: false, optional: false, required: true
  private _majorRevisionId?: string; 
  public get majorRevisionId() {
    return this.getStringAttribute('major_revision_id');
  }
  public set majorRevisionId(value: string) {
    this._majorRevisionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get majorRevisionIdInput() {
    return this._majorRevisionId;
  }
}
export interface GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig {
  /**
  * Display name of the folder to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#folder_display_name GoogleCloudSecurityComplianceFrameworkDeployment#folder_display_name}
  */
  readonly folderDisplayName: string;
  /**
  * The parent of the folder to be created. It can be an organizations/{org} or
  * folders/{folder}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#parent GoogleCloudSecurityComplianceFrameworkDeployment#parent}
  */
  readonly parent: string;
}

export function googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_display_name: cdktn.stringToTerraform(struct!.folderDisplayName),
    parent: cdktn.stringToTerraform(struct!.parent),
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder_display_name: {
      value: cdktn.stringToHclTerraform(struct!.folderDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent: {
      value: cdktn.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folderDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderDisplayName = this._folderDisplayName;
    }
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._folderDisplayName = undefined;
      this._parent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._folderDisplayName = value.folderDisplayName;
      this._parent = value.parent;
    }
  }

  // folder_display_name - computed: false, optional: false, required: true
  private _folderDisplayName?: string; 
  public get folderDisplayName() {
    return this.getStringAttribute('folder_display_name');
  }
  public set folderDisplayName(value: string) {
    this._folderDisplayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderDisplayNameInput() {
    return this._folderDisplayName;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }
}
export interface GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig {
  /**
  * Billing account id to be used for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#billing_account_id GoogleCloudSecurityComplianceFrameworkDeployment#billing_account_id}
  */
  readonly billingAccountId: string;
  /**
  * organizations/{org} or folders/{folder}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#parent GoogleCloudSecurityComplianceFrameworkDeployment#parent}
  */
  readonly parent: string;
  /**
  * Display name of the project to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#project_display_name GoogleCloudSecurityComplianceFrameworkDeployment#project_display_name}
  */
  readonly projectDisplayName: string;
}

export function googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    billing_account_id: cdktn.stringToTerraform(struct!.billingAccountId),
    parent: cdktn.stringToTerraform(struct!.parent),
    project_display_name: cdktn.stringToTerraform(struct!.projectDisplayName),
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    billing_account_id: {
      value: cdktn.stringToHclTerraform(struct!.billingAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent: {
      value: cdktn.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_display_name: {
      value: cdktn.stringToHclTerraform(struct!.projectDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._billingAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingAccountId = this._billingAccountId;
    }
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._projectDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectDisplayName = this._projectDisplayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._billingAccountId = undefined;
      this._parent = undefined;
      this._projectDisplayName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._billingAccountId = value.billingAccountId;
      this._parent = value.parent;
      this._projectDisplayName = value.projectDisplayName;
    }
  }

  // billing_account_id - computed: false, optional: false, required: true
  private _billingAccountId?: string; 
  public get billingAccountId() {
    return this.getStringAttribute('billing_account_id');
  }
  public set billingAccountId(value: string) {
    this._billingAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountIdInput() {
    return this._billingAccountId;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // project_display_name - computed: false, optional: false, required: true
  private _projectDisplayName?: string; 
  public get projectDisplayName() {
    return this.getStringAttribute('project_display_name');
  }
  public set projectDisplayName(value: string) {
    this._projectDisplayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDisplayNameInput() {
    return this._projectDisplayName;
  }
}
export interface GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig {
  /**
  * folder_creation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#folder_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#folder_creation_config}
  */
  readonly folderCreationConfig?: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig;
  /**
  * project_creation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#project_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#project_creation_config}
  */
  readonly projectCreationConfig?: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig;
}

export function googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_creation_config: googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigToTerraform(struct!.folderCreationConfig),
    project_creation_config: googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigToTerraform(struct!.projectCreationConfig),
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder_creation_config: {
      value: googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigToHclTerraform(struct!.folderCreationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigList",
    },
    project_creation_config: {
      value: googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigToHclTerraform(struct!.projectCreationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folderCreationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderCreationConfig = this._folderCreationConfig?.internalValue;
    }
    if (this._projectCreationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectCreationConfig = this._projectCreationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._folderCreationConfig.internalValue = undefined;
      this._projectCreationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._folderCreationConfig.internalValue = value.folderCreationConfig;
      this._projectCreationConfig.internalValue = value.projectCreationConfig;
    }
  }

  // folder_creation_config - computed: false, optional: true, required: false
  private _folderCreationConfig = new GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference(this, "folder_creation_config");
  public get folderCreationConfig() {
    return this._folderCreationConfig;
  }
  public putFolderCreationConfig(value: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig) {
    this._folderCreationConfig.internalValue = value;
  }
  public resetFolderCreationConfig() {
    this._folderCreationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderCreationConfigInput() {
    return this._folderCreationConfig.internalValue;
  }

  // project_creation_config - computed: false, optional: true, required: false
  private _projectCreationConfig = new GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference(this, "project_creation_config");
  public get projectCreationConfig() {
    return this._projectCreationConfig;
  }
  public putProjectCreationConfig(value: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig) {
    this._projectCreationConfig.internalValue = value;
  }
  public resetProjectCreationConfig() {
    this._projectCreationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectCreationConfigInput() {
    return this._projectCreationConfig.internalValue;
  }
}
export interface GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig {
  /**
  * CRM node in format organizations/{organization}, folders/{folder},
  * or projects/{project}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#existing_target_resource GoogleCloudSecurityComplianceFrameworkDeployment#existing_target_resource}
  */
  readonly existingTargetResource?: string;
  /**
  * target_resource_creation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#target_resource_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#target_resource_creation_config}
  */
  readonly targetResourceCreationConfig?: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig;
}

export function googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_target_resource: cdktn.stringToTerraform(struct!.existingTargetResource),
    target_resource_creation_config: googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigToTerraform(struct!.targetResourceCreationConfig),
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference | GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_target_resource: {
      value: cdktn.stringToHclTerraform(struct!.existingTargetResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_resource_creation_config: {
      value: googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigToHclTerraform(struct!.targetResourceCreationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingTargetResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingTargetResource = this._existingTargetResource;
    }
    if (this._targetResourceCreationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceCreationConfig = this._targetResourceCreationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingTargetResource = undefined;
      this._targetResourceCreationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingTargetResource = value.existingTargetResource;
      this._targetResourceCreationConfig.internalValue = value.targetResourceCreationConfig;
    }
  }

  // existing_target_resource - computed: false, optional: true, required: false
  private _existingTargetResource?: string; 
  public get existingTargetResource() {
    return this.getStringAttribute('existing_target_resource');
  }
  public set existingTargetResource(value: string) {
    this._existingTargetResource = value;
  }
  public resetExistingTargetResource() {
    this._existingTargetResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingTargetResourceInput() {
    return this._existingTargetResource;
  }

  // target_resource_creation_config - computed: false, optional: true, required: false
  private _targetResourceCreationConfig = new GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference(this, "target_resource_creation_config");
  public get targetResourceCreationConfig() {
    return this._targetResourceCreationConfig;
  }
  public putTargetResourceCreationConfig(value: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig) {
    this._targetResourceCreationConfig.internalValue = value;
  }
  public resetTargetResourceCreationConfig() {
    this._targetResourceCreationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceCreationConfigInput() {
    return this._targetResourceCreationConfig.internalValue;
  }
}
export interface GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#create GoogleCloudSecurityComplianceFrameworkDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#delete GoogleCloudSecurityComplianceFrameworkDeployment#delete}
  */
  readonly delete?: string;
}

export function googleCloudSecurityComplianceFrameworkDeploymentTimeoutsToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function googleCloudSecurityComplianceFrameworkDeploymentTimeoutsToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment google_cloud_security_compliance_framework_deployment}
*/
export class GoogleCloudSecurityComplianceFrameworkDeployment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_security_compliance_framework_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleCloudSecurityComplianceFrameworkDeployment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleCloudSecurityComplianceFrameworkDeployment to import
  * @param importFromId The id of the existing GoogleCloudSecurityComplianceFrameworkDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleCloudSecurityComplianceFrameworkDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_cloud_security_compliance_framework_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework_deployment google_cloud_security_compliance_framework_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCloudSecurityComplianceFrameworkDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCloudSecurityComplianceFrameworkDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_security_compliance_framework_deployment',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '7.33.0',
        providerVersionConstraint: '~> 7.0'
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
    this._frameworkDeploymentId = config.frameworkDeploymentId;
    this._id = config.id;
    this._location = config.location;
    this._organization = config.organization;
    this._cloudControlMetadata.internalValue = config.cloudControlMetadata;
    this._framework.internalValue = config.framework;
    this._targetResourceConfig.internalValue = config.targetResourceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_control_deployment_references - computed: true, optional: false, required: false
  private _cloudControlDeploymentReferences = new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList(this, "cloud_control_deployment_references", false);
  public get cloudControlDeploymentReferences() {
    return this._cloudControlDeploymentReferences;
  }

  // computed_target_resource - computed: true, optional: false, required: false
  public get computedTargetResource() {
    return this.getStringAttribute('computed_target_resource');
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

  // deployment_state - computed: true, optional: false, required: false
  public get deploymentState() {
    return this.getStringAttribute('deployment_state');
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // framework_deployment_id - computed: false, optional: false, required: true
  private _frameworkDeploymentId?: string; 
  public get frameworkDeploymentId() {
    return this.getStringAttribute('framework_deployment_id');
  }
  public set frameworkDeploymentId(value: string) {
    this._frameworkDeploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkDeploymentIdInput() {
    return this._frameworkDeploymentId;
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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // target_resource_display_name - computed: true, optional: false, required: false
  public get targetResourceDisplayName() {
    return this.getStringAttribute('target_resource_display_name');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // cloud_control_metadata - computed: false, optional: false, required: true
  private _cloudControlMetadata = new GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList(this, "cloud_control_metadata", false);
  public get cloudControlMetadata() {
    return this._cloudControlMetadata;
  }
  public putCloudControlMetadata(value: GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata[] | cdktn.IResolvable) {
    this._cloudControlMetadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudControlMetadataInput() {
    return this._cloudControlMetadata.internalValue;
  }

  // framework - computed: false, optional: false, required: true
  private _framework = new GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference(this, "framework");
  public get framework() {
    return this._framework;
  }
  public putFramework(value: GoogleCloudSecurityComplianceFrameworkDeploymentFramework) {
    this._framework.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework.internalValue;
  }

  // target_resource_config - computed: false, optional: false, required: true
  private _targetResourceConfig = new GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference(this, "target_resource_config");
  public get targetResourceConfig() {
    return this._targetResourceConfig;
  }
  public putTargetResourceConfig(value: GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig) {
    this._targetResourceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceConfigInput() {
    return this._targetResourceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts) {
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
      framework_deployment_id: cdktn.stringToTerraform(this._frameworkDeploymentId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      organization: cdktn.stringToTerraform(this._organization),
      cloud_control_metadata: cdktn.listMapper(googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataToTerraform, true)(this._cloudControlMetadata.internalValue),
      framework: googleCloudSecurityComplianceFrameworkDeploymentFrameworkToTerraform(this._framework.internalValue),
      target_resource_config: googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigToTerraform(this._targetResourceConfig.internalValue),
      timeouts: googleCloudSecurityComplianceFrameworkDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
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
      framework_deployment_id: {
        value: cdktn.stringToHclTerraform(this._frameworkDeploymentId),
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
      organization: {
        value: cdktn.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_control_metadata: {
        value: cdktn.listMapperHcl(googleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataToHclTerraform, true)(this._cloudControlMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList",
      },
      framework: {
        value: googleCloudSecurityComplianceFrameworkDeploymentFrameworkToHclTerraform(this._framework.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkList",
      },
      target_resource_config: {
        value: googleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigToHclTerraform(this._targetResourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigList",
      },
      timeouts: {
        value: googleCloudSecurityComplianceFrameworkDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
