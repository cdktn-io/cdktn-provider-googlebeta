/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_compute_organization_snapshot_recycle_bin_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The organization ID for this request (e.g., "organizations/1234").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#organization GoogleComputeOrganizationSnapshotRecycleBinPolicy#organization}
  */
  readonly organization: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#rules GoogleComputeOrganizationSnapshotRecycleBinPolicy#rules}
  */
  readonly rules?: GoogleComputeOrganizationSnapshotRecycleBinPolicyRules[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#timeouts GoogleComputeOrganizationSnapshotRecycleBinPolicy#timeouts}
  */
  readonly timeouts?: GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts;
}
export interface GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots {
}

export function googleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsToTerraform(struct?: GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsToHclTerraform(struct?: GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retention_duration_days - computed: true, optional: false, required: false
  public get retentionDurationDays() {
    return this.getNumberAttribute('retention_duration_days');
  }
}

export class GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList extends cdktn.ComplexList {

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
  public get(index: number): GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference {
    return new GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules {
}

export function googleComputeOrganizationSnapshotRecycleBinPolicySystemRulesToTerraform(struct?: GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleComputeOrganizationSnapshotRecycleBinPolicySystemRulesToHclTerraform(struct?: GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // standard_snapshots - computed: true, optional: false, required: false
  private _standardSnapshots = new GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList(this, "standard_snapshots", false);
  public get standardSnapshots() {
    return this._standardSnapshots;
  }
}

export class GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList extends cdktn.ComplexList {

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
  public get(index: number): GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference {
    return new GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots {
  /**
  * The retention duration for snapshots in the recycle bin after which the
  * snapshots are automatically deleted from recycle bin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#retention_duration_days GoogleComputeOrganizationSnapshotRecycleBinPolicy#retention_duration_days}
  */
  readonly retentionDurationDays?: number;
}

export function googleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsToTerraform(struct?: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference | GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retention_duration_days: cdktn.numberToTerraform(struct!.retentionDurationDays),
  }
}


export function googleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsToHclTerraform(struct?: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference | GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retention_duration_days: {
      value: cdktn.numberToHclTerraform(struct!.retentionDurationDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionDurationDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDurationDays = this._retentionDurationDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionDurationDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionDurationDays = value.retentionDurationDays;
    }
  }

  // retention_duration_days - computed: false, optional: true, required: false
  private _retentionDurationDays?: number; 
  public get retentionDurationDays() {
    return this.getNumberAttribute('retention_duration_days');
  }
  public set retentionDurationDays(value: number) {
    this._retentionDurationDays = value;
  }
  public resetRetentionDurationDays() {
    this._retentionDurationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationDaysInput() {
    return this._retentionDurationDays;
  }
}
export interface GoogleComputeOrganizationSnapshotRecycleBinPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#name GoogleComputeOrganizationSnapshotRecycleBinPolicy#name}
  */
  readonly name: string;
  /**
  * standard_snapshots block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#standard_snapshots GoogleComputeOrganizationSnapshotRecycleBinPolicy#standard_snapshots}
  */
  readonly standardSnapshots?: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots;
}

export function googleComputeOrganizationSnapshotRecycleBinPolicyRulesToTerraform(struct?: GoogleComputeOrganizationSnapshotRecycleBinPolicyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    standard_snapshots: googleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsToTerraform(struct!.standardSnapshots),
  }
}


export function googleComputeOrganizationSnapshotRecycleBinPolicyRulesToHclTerraform(struct?: GoogleComputeOrganizationSnapshotRecycleBinPolicyRules | cdktn.IResolvable): any {
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
    standard_snapshots: {
      value: googleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsToHclTerraform(struct!.standardSnapshots),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleComputeOrganizationSnapshotRecycleBinPolicyRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._standardSnapshots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardSnapshots = this._standardSnapshots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSnapshotRecycleBinPolicyRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._standardSnapshots.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._standardSnapshots.internalValue = value.standardSnapshots;
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

  // standard_snapshots - computed: false, optional: true, required: false
  private _standardSnapshots = new GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference(this, "standard_snapshots");
  public get standardSnapshots() {
    return this._standardSnapshots;
  }
  public putStandardSnapshots(value: GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots) {
    this._standardSnapshots.internalValue = value;
  }
  public resetStandardSnapshots() {
    this._standardSnapshots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardSnapshotsInput() {
    return this._standardSnapshots.internalValue;
  }
}

export class GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList extends cdktn.ComplexList {
  public internalValue? : GoogleComputeOrganizationSnapshotRecycleBinPolicyRules[] | cdktn.IResolvable

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
  public get(index: number): GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference {
    return new GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#create GoogleComputeOrganizationSnapshotRecycleBinPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#delete GoogleComputeOrganizationSnapshotRecycleBinPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#update GoogleComputeOrganizationSnapshotRecycleBinPolicy#update}
  */
  readonly update?: string;
}

export function googleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsToTerraform(struct?: GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts | cdktn.IResolvable): any {
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


export function googleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsToHclTerraform(struct?: GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts | cdktn.IResolvable): any {
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

export class GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_compute_organization_snapshot_recycle_bin_policy google_compute_organization_snapshot_recycle_bin_policy}
*/
export class GoogleComputeOrganizationSnapshotRecycleBinPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_organization_snapshot_recycle_bin_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleComputeOrganizationSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeOrganizationSnapshotRecycleBinPolicy to import
  * @param importFromId The id of the existing GoogleComputeOrganizationSnapshotRecycleBinPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeOrganizationSnapshotRecycleBinPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_organization_snapshot_recycle_bin_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.8.1/docs/resources/google_compute_organization_snapshot_recycle_bin_policy google_compute_organization_snapshot_recycle_bin_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_organization_snapshot_recycle_bin_policy',
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
    this._id = config.id;
    this._organization = config.organization;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // system_rules - computed: true, optional: false, required: false
  private _systemRules = new GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList(this, "system_rules", true);
  public get systemRules() {
    return this._systemRules;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: GoogleComputeOrganizationSnapshotRecycleBinPolicyRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      organization: cdktn.stringToTerraform(this._organization),
      rules: cdktn.listMapper(googleComputeOrganizationSnapshotRecycleBinPolicyRulesToTerraform, true)(this._rules.internalValue),
      timeouts: googleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      rules: {
        value: cdktn.listMapperHcl(googleComputeOrganizationSnapshotRecycleBinPolicyRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList",
      },
      timeouts: {
        value: googleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
