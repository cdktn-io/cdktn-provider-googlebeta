/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleComputeZoneVmExtensionPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#deletion_policy GoogleComputeZoneVmExtensionPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#description GoogleComputeZoneVmExtensionPolicy#description}
  */
  readonly description?: string;
  /**
  * Name of the resource. Provided by the client when the resource is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#name GoogleComputeZoneVmExtensionPolicy#name}
  */
  readonly name: string;
  /**
  * Priority of this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#priority GoogleComputeZoneVmExtensionPolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#project GoogleComputeZoneVmExtensionPolicy#project}
  */
  readonly project?: string;
  /**
  * Name of the zone for this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#zone GoogleComputeZoneVmExtensionPolicy#zone}
  */
  readonly zone: string;
  /**
  * extension_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#extension_policies GoogleComputeZoneVmExtensionPolicy#extension_policies}
  */
  readonly extensionPolicies: GoogleComputeZoneVmExtensionPolicyExtensionPolicies[] | cdktn.IResolvable;
  /**
  * instance_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#instance_selectors GoogleComputeZoneVmExtensionPolicy#instance_selectors}
  */
  readonly instanceSelectors?: GoogleComputeZoneVmExtensionPolicyInstanceSelectors[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#timeouts GoogleComputeZoneVmExtensionPolicy#timeouts}
  */
  readonly timeouts?: GoogleComputeZoneVmExtensionPolicyTimeouts;
}
export interface GoogleComputeZoneVmExtensionPolicyExtensionPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#extension_name GoogleComputeZoneVmExtensionPolicy#extension_name}
  */
  readonly extensionName: string;
  /**
  * The specific version of the extension to install.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#pinned_version GoogleComputeZoneVmExtensionPolicy#pinned_version}
  */
  readonly pinnedVersion?: string;
  /**
  * String-based configuration data for the extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#string_config GoogleComputeZoneVmExtensionPolicy#string_config}
  */
  readonly stringConfig?: string;
}

export function googleComputeZoneVmExtensionPolicyExtensionPoliciesToTerraform(struct?: GoogleComputeZoneVmExtensionPolicyExtensionPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extension_name: cdktn.stringToTerraform(struct!.extensionName),
    pinned_version: cdktn.stringToTerraform(struct!.pinnedVersion),
    string_config: cdktn.stringToTerraform(struct!.stringConfig),
  }
}


export function googleComputeZoneVmExtensionPolicyExtensionPoliciesToHclTerraform(struct?: GoogleComputeZoneVmExtensionPolicyExtensionPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extension_name: {
      value: cdktn.stringToHclTerraform(struct!.extensionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pinned_version: {
      value: cdktn.stringToHclTerraform(struct!.pinnedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_config: {
      value: cdktn.stringToHclTerraform(struct!.stringConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleComputeZoneVmExtensionPolicyExtensionPolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extensionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionName = this._extensionName;
    }
    if (this._pinnedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinnedVersion = this._pinnedVersion;
    }
    if (this._stringConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringConfig = this._stringConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeZoneVmExtensionPolicyExtensionPolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extensionName = undefined;
      this._pinnedVersion = undefined;
      this._stringConfig = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extensionName = value.extensionName;
      this._pinnedVersion = value.pinnedVersion;
      this._stringConfig = value.stringConfig;
    }
  }

  // extension_name - computed: false, optional: false, required: true
  private _extensionName?: string; 
  public get extensionName() {
    return this.getStringAttribute('extension_name');
  }
  public set extensionName(value: string) {
    this._extensionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionNameInput() {
    return this._extensionName;
  }

  // pinned_version - computed: false, optional: true, required: false
  private _pinnedVersion?: string; 
  public get pinnedVersion() {
    return this.getStringAttribute('pinned_version');
  }
  public set pinnedVersion(value: string) {
    this._pinnedVersion = value;
  }
  public resetPinnedVersion() {
    this._pinnedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedVersionInput() {
    return this._pinnedVersion;
  }

  // string_config - computed: false, optional: true, required: false
  private _stringConfig?: string; 
  public get stringConfig() {
    return this.getStringAttribute('string_config');
  }
  public set stringConfig(value: string) {
    this._stringConfig = value;
  }
  public resetStringConfig() {
    this._stringConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringConfigInput() {
    return this._stringConfig;
  }
}

export class GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList extends cdktn.ComplexList {
  public internalValue? : GoogleComputeZoneVmExtensionPolicyExtensionPolicies[] | cdktn.IResolvable

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
  public get(index: number): GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference {
    return new GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector {
  /**
  * A map of key-value pairs representing VM labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#inclusion_labels GoogleComputeZoneVmExtensionPolicy#inclusion_labels}
  */
  readonly inclusionLabels?: { [key: string]: string };
}

export function googleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorToTerraform(struct?: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference | GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inclusion_labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.inclusionLabels),
  }
}


export function googleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorToHclTerraform(struct?: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference | GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inclusion_labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.inclusionLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inclusionLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionLabels = this._inclusionLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inclusionLabels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inclusionLabels = value.inclusionLabels;
    }
  }

  // inclusion_labels - computed: false, optional: true, required: false
  private _inclusionLabels?: { [key: string]: string }; 
  public get inclusionLabels() {
    return this.getStringMapAttribute('inclusion_labels');
  }
  public set inclusionLabels(value: { [key: string]: string }) {
    this._inclusionLabels = value;
  }
  public resetInclusionLabels() {
    this._inclusionLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionLabelsInput() {
    return this._inclusionLabels;
  }
}
export interface GoogleComputeZoneVmExtensionPolicyInstanceSelectors {
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#label_selector GoogleComputeZoneVmExtensionPolicy#label_selector}
  */
  readonly labelSelector?: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector;
}

export function googleComputeZoneVmExtensionPolicyInstanceSelectorsToTerraform(struct?: GoogleComputeZoneVmExtensionPolicyInstanceSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label_selector: googleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function googleComputeZoneVmExtensionPolicyInstanceSelectorsToHclTerraform(struct?: GoogleComputeZoneVmExtensionPolicyInstanceSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    label_selector: {
      value: googleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleComputeZoneVmExtensionPolicyInstanceSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeZoneVmExtensionPolicyInstanceSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }
}

export class GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList extends cdktn.ComplexList {
  public internalValue? : GoogleComputeZoneVmExtensionPolicyInstanceSelectors[] | cdktn.IResolvable

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
  public get(index: number): GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference {
    return new GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeZoneVmExtensionPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#create GoogleComputeZoneVmExtensionPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#delete GoogleComputeZoneVmExtensionPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#update GoogleComputeZoneVmExtensionPolicy#update}
  */
  readonly update?: string;
}

export function googleComputeZoneVmExtensionPolicyTimeoutsToTerraform(struct?: GoogleComputeZoneVmExtensionPolicyTimeouts | cdktn.IResolvable): any {
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


export function googleComputeZoneVmExtensionPolicyTimeoutsToHclTerraform(struct?: GoogleComputeZoneVmExtensionPolicyTimeouts | cdktn.IResolvable): any {
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

export class GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeZoneVmExtensionPolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeZoneVmExtensionPolicyTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy google_compute_zone_vm_extension_policy}
*/
export class GoogleComputeZoneVmExtensionPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_zone_vm_extension_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeZoneVmExtensionPolicy to import
  * @param importFromId The id of the existing GoogleComputeZoneVmExtensionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeZoneVmExtensionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_zone_vm_extension_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_zone_vm_extension_policy google_compute_zone_vm_extension_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeZoneVmExtensionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeZoneVmExtensionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_zone_vm_extension_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '7.44.0',
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
    this._name = config.name;
    this._priority = config.priority;
    this._project = config.project;
    this._zone = config.zone;
    this._extensionPolicies.internalValue = config.extensionPolicies;
    this._instanceSelectors.internalValue = config.instanceSelectors;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // managed_by_global - computed: true, optional: false, required: false
  public get managedByGlobal() {
    return this.getBooleanAttribute('managed_by_global');
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // extension_policies - computed: false, optional: false, required: true
  private _extensionPolicies = new GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList(this, "extension_policies", true);
  public get extensionPolicies() {
    return this._extensionPolicies;
  }
  public putExtensionPolicies(value: GoogleComputeZoneVmExtensionPolicyExtensionPolicies[] | cdktn.IResolvable) {
    this._extensionPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionPoliciesInput() {
    return this._extensionPolicies.internalValue;
  }

  // instance_selectors - computed: false, optional: true, required: false
  private _instanceSelectors = new GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList(this, "instance_selectors", false);
  public get instanceSelectors() {
    return this._instanceSelectors;
  }
  public putInstanceSelectors(value: GoogleComputeZoneVmExtensionPolicyInstanceSelectors[] | cdktn.IResolvable) {
    this._instanceSelectors.internalValue = value;
  }
  public resetInstanceSelectors() {
    this._instanceSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectorsInput() {
    return this._instanceSelectors.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeZoneVmExtensionPolicyTimeouts) {
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
      name: cdktn.stringToTerraform(this._name),
      priority: cdktn.numberToTerraform(this._priority),
      project: cdktn.stringToTerraform(this._project),
      zone: cdktn.stringToTerraform(this._zone),
      extension_policies: cdktn.listMapper(googleComputeZoneVmExtensionPolicyExtensionPoliciesToTerraform, true)(this._extensionPolicies.internalValue),
      instance_selectors: cdktn.listMapper(googleComputeZoneVmExtensionPolicyInstanceSelectorsToTerraform, true)(this._instanceSelectors.internalValue),
      timeouts: googleComputeZoneVmExtensionPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktn.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_policies: {
        value: cdktn.listMapperHcl(googleComputeZoneVmExtensionPolicyExtensionPoliciesToHclTerraform, true)(this._extensionPolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList",
      },
      instance_selectors: {
        value: cdktn.listMapperHcl(googleComputeZoneVmExtensionPolicyInstanceSelectorsToHclTerraform, true)(this._instanceSelectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList",
      },
      timeouts: {
        value: googleComputeZoneVmExtensionPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeZoneVmExtensionPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
