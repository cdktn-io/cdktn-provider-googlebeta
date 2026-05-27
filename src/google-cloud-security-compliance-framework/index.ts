/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleCloudSecurityComplianceFrameworkConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#deletion_policy GoogleCloudSecurityComplianceFramework#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the framework. The maximum length is 2000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#description GoogleCloudSecurityComplianceFramework#description}
  */
  readonly description?: string;
  /**
  * Display name of the framework. The maximum length is 200 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#display_name GoogleCloudSecurityComplianceFramework#display_name}
  */
  readonly displayName?: string;
  /**
  * ID of the framework.
  * This is not the full name of the framework.
  * This is the last part of the full name of the framework.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#framework_id GoogleCloudSecurityComplianceFramework#framework_id}
  */
  readonly frameworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#id GoogleCloudSecurityComplianceFramework#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#location GoogleCloudSecurityComplianceFramework#location}
  */
  readonly location: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#organization GoogleCloudSecurityComplianceFramework#organization}
  */
  readonly organization: string;
  /**
  * cloud_control_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#cloud_control_details GoogleCloudSecurityComplianceFramework#cloud_control_details}
  */
  readonly cloudControlDetails?: GoogleCloudSecurityComplianceFrameworkCloudControlDetails[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#timeouts GoogleCloudSecurityComplianceFramework#timeouts}
  */
  readonly timeouts?: GoogleCloudSecurityComplianceFrameworkTimeouts;
}
export interface GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue {
  /**
  * The strings in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#values GoogleCloudSecurityComplianceFramework#values}
  */
  readonly values: string[];
}

export function googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue): any {
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

export class GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue | undefined) {
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
export interface GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue {
  /**
  * Represents a boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#bool_value GoogleCloudSecurityComplianceFramework#bool_value}
  */
  readonly boolValue?: boolean | cdktn.IResolvable;
  /**
  * Represents a double value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#number_value GoogleCloudSecurityComplianceFramework#number_value}
  */
  readonly numberValue?: number;
  /**
  * Represents a string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#string_value GoogleCloudSecurityComplianceFramework#string_value}
  */
  readonly stringValue?: string;
  /**
  * string_list_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#string_list_value GoogleCloudSecurityComplianceFramework#string_list_value}
  */
  readonly stringListValue?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue;
}

export function googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_value: cdktn.booleanToTerraform(struct!.boolValue),
    number_value: cdktn.numberToTerraform(struct!.numberValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
    string_list_value: googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueToTerraform(struct!.stringListValue),
  }
}


export function googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue): any {
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
      value: googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueToHclTerraform(struct!.stringListValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue | undefined {
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

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue | undefined) {
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
  private _stringListValue = new GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference(this, "string_list_value");
  public get stringListValue() {
    return this._stringListValue;
  }
  public putStringListValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue) {
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
export interface GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue {
  /**
  * The name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#name GoogleCloudSecurityComplianceFramework#name}
  */
  readonly name?: string;
  /**
  * parameter_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#parameter_value GoogleCloudSecurityComplianceFramework#parameter_value}
  */
  readonly parameterValue?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue;
}

export function googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    parameter_value: googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueToTerraform(struct!.parameterValue),
  }
}


export function googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue): any {
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
      value: googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueToHclTerraform(struct!.parameterValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue | undefined {
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

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue | undefined) {
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
  private _parameterValue = new GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference(this, "parameter_value");
  public get parameterValue() {
    return this._parameterValue;
  }
  public putParameterValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue) {
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
export interface GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue {
  /**
  * The strings in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#values GoogleCloudSecurityComplianceFramework#values}
  */
  readonly values: string[];
}

export function googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue): any {
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

export class GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue | undefined) {
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
export interface GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue {
  /**
  * Represents a boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#bool_value GoogleCloudSecurityComplianceFramework#bool_value}
  */
  readonly boolValue?: boolean | cdktn.IResolvable;
  /**
  * Represents a double value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#number_value GoogleCloudSecurityComplianceFramework#number_value}
  */
  readonly numberValue?: number;
  /**
  * Represents a string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#string_value GoogleCloudSecurityComplianceFramework#string_value}
  */
  readonly stringValue?: string;
  /**
  * oneof_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#oneof_value GoogleCloudSecurityComplianceFramework#oneof_value}
  */
  readonly oneofValue?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue;
  /**
  * string_list_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#string_list_value GoogleCloudSecurityComplianceFramework#string_list_value}
  */
  readonly stringListValue?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue;
}

export function googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_value: cdktn.booleanToTerraform(struct!.boolValue),
    number_value: cdktn.numberToTerraform(struct!.numberValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
    oneof_value: googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueToTerraform(struct!.oneofValue),
    string_list_value: googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueToTerraform(struct!.stringListValue),
  }
}


export function googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference | GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue): any {
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
      value: googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueToHclTerraform(struct!.oneofValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueList",
    },
    string_list_value: {
      value: googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueToHclTerraform(struct!.stringListValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue | undefined {
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

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue | undefined) {
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
  private _oneofValue = new GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference(this, "oneof_value");
  public get oneofValue() {
    return this._oneofValue;
  }
  public putOneofValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue) {
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
  private _stringListValue = new GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference(this, "string_list_value");
  public get stringListValue() {
    return this._stringListValue;
  }
  public putStringListValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue) {
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
export interface GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters {
  /**
  * The name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#name GoogleCloudSecurityComplianceFramework#name}
  */
  readonly name: string;
  /**
  * parameter_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#parameter_value GoogleCloudSecurityComplianceFramework#parameter_value}
  */
  readonly parameterValue: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue;
}

export function googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    parameter_value: googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueToTerraform(struct!.parameterValue),
  }
}


export function googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters | cdktn.IResolvable): any {
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
      value: googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueToHclTerraform(struct!.parameterValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters | cdktn.IResolvable | undefined) {
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
  private _parameterValue = new GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference(this, "parameter_value");
  public get parameterValue() {
    return this._parameterValue;
  }
  public putParameterValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue) {
    this._parameterValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue.internalValue;
  }
}

export class GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList extends cdktn.ComplexList {
  public internalValue? : GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters[] | cdktn.IResolvable

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
  public get(index: number): GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference {
    return new GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudSecurityComplianceFrameworkCloudControlDetails {
  /**
  * Major revision of cloudcontrol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#major_revision_id GoogleCloudSecurityComplianceFramework#major_revision_id}
  */
  readonly majorRevisionId: string;
  /**
  * The name of the CloudControl in the format:
  * “organizations/{organization}/locations/{location}/cloudControls/{cloud-control}”
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#name GoogleCloudSecurityComplianceFramework#name}
  */
  readonly name: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#parameters GoogleCloudSecurityComplianceFramework#parameters}
  */
  readonly parameters?: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters[] | cdktn.IResolvable;
}

export function googleCloudSecurityComplianceFrameworkCloudControlDetailsToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkCloudControlDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    major_revision_id: cdktn.stringToTerraform(struct!.majorRevisionId),
    name: cdktn.stringToTerraform(struct!.name),
    parameters: cdktn.listMapper(googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersToTerraform, true)(struct!.parameters),
  }
}


export function googleCloudSecurityComplianceFrameworkCloudControlDetailsToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkCloudControlDetails | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(googleCloudSecurityComplianceFrameworkCloudControlDetailsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkCloudControlDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._majorRevisionId = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _parameters = new GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetailsParameters[] | cdktn.IResolvable) {
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

export class GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList extends cdktn.ComplexList {
  public internalValue? : GoogleCloudSecurityComplianceFrameworkCloudControlDetails[] | cdktn.IResolvable

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
  public get(index: number): GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference {
    return new GoogleCloudSecurityComplianceFrameworkCloudControlDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudSecurityComplianceFrameworkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#create GoogleCloudSecurityComplianceFramework#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#delete GoogleCloudSecurityComplianceFramework#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#update GoogleCloudSecurityComplianceFramework#update}
  */
  readonly update?: string;
}

export function googleCloudSecurityComplianceFrameworkTimeoutsToTerraform(struct?: GoogleCloudSecurityComplianceFrameworkTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function googleCloudSecurityComplianceFrameworkTimeoutsToHclTerraform(struct?: GoogleCloudSecurityComplianceFrameworkTimeouts | cdktn.IResolvable): any {
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

export class GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleCloudSecurityComplianceFrameworkTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleCloudSecurityComplianceFrameworkTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework google_cloud_security_compliance_framework}
*/
export class GoogleCloudSecurityComplianceFramework extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_security_compliance_framework";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleCloudSecurityComplianceFramework resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleCloudSecurityComplianceFramework to import
  * @param importFromId The id of the existing GoogleCloudSecurityComplianceFramework that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleCloudSecurityComplianceFramework to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_cloud_security_compliance_framework", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_cloud_security_compliance_framework google_cloud_security_compliance_framework} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCloudSecurityComplianceFrameworkConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCloudSecurityComplianceFrameworkConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_security_compliance_framework',
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
    this._displayName = config.displayName;
    this._frameworkId = config.frameworkId;
    this._id = config.id;
    this._location = config.location;
    this._organization = config.organization;
    this._cloudControlDetails.internalValue = config.cloudControlDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getListAttribute('category');
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

  // framework_id - computed: false, optional: false, required: true
  private _frameworkId?: string; 
  public get frameworkId() {
    return this.getStringAttribute('framework_id');
  }
  public set frameworkId(value: string) {
    this._frameworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkIdInput() {
    return this._frameworkId;
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

  // major_revision_id - computed: true, optional: false, required: false
  public get majorRevisionId() {
    return this.getStringAttribute('major_revision_id');
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

  // supported_cloud_providers - computed: true, optional: false, required: false
  public get supportedCloudProviders() {
    return this.getListAttribute('supported_cloud_providers');
  }

  // supported_enforcement_modes - computed: true, optional: false, required: false
  public get supportedEnforcementModes() {
    return this.getListAttribute('supported_enforcement_modes');
  }

  // supported_target_resource_types - computed: true, optional: false, required: false
  public get supportedTargetResourceTypes() {
    return this.getListAttribute('supported_target_resource_types');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // cloud_control_details - computed: false, optional: true, required: false
  private _cloudControlDetails = new GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList(this, "cloud_control_details", false);
  public get cloudControlDetails() {
    return this._cloudControlDetails;
  }
  public putCloudControlDetails(value: GoogleCloudSecurityComplianceFrameworkCloudControlDetails[] | cdktn.IResolvable) {
    this._cloudControlDetails.internalValue = value;
  }
  public resetCloudControlDetails() {
    this._cloudControlDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudControlDetailsInput() {
    return this._cloudControlDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCloudSecurityComplianceFrameworkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCloudSecurityComplianceFrameworkTimeouts) {
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
      display_name: cdktn.stringToTerraform(this._displayName),
      framework_id: cdktn.stringToTerraform(this._frameworkId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      organization: cdktn.stringToTerraform(this._organization),
      cloud_control_details: cdktn.listMapper(googleCloudSecurityComplianceFrameworkCloudControlDetailsToTerraform, true)(this._cloudControlDetails.internalValue),
      timeouts: googleCloudSecurityComplianceFrameworkTimeoutsToTerraform(this._timeouts.internalValue),
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
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      framework_id: {
        value: cdktn.stringToHclTerraform(this._frameworkId),
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
      cloud_control_details: {
        value: cdktn.listMapperHcl(googleCloudSecurityComplianceFrameworkCloudControlDetailsToHclTerraform, true)(this._cloudControlDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudSecurityComplianceFrameworkCloudControlDetailsList",
      },
      timeouts: {
        value: googleCloudSecurityComplianceFrameworkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleCloudSecurityComplianceFrameworkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
