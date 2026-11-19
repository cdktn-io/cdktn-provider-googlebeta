/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleApihubAddonConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the addon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#addon_id GoogleApihubAddon#addon_id}
  */
  readonly addonId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#id GoogleApihubAddon#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#location GoogleApihubAddon#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#project GoogleApihubAddon#project}
  */
  readonly project?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#config GoogleApihubAddon#config}
  */
  readonly config: GoogleApihubAddonConfigA;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#timeouts GoogleApihubAddon#timeouts}
  */
  readonly timeouts?: GoogleApihubAddonTimeouts;
}
export interface GoogleApihubAddonConfigAllDataAddonConfig {
  /**
  * If true, the addon is enabled for all data in the API hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#enabled GoogleApihubAddon#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleApihubAddonConfigAllDataAddonConfigToTerraform(struct?: GoogleApihubAddonConfigAllDataAddonConfigOutputReference | GoogleApihubAddonConfigAllDataAddonConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleApihubAddonConfigAllDataAddonConfigToHclTerraform(struct?: GoogleApihubAddonConfigAllDataAddonConfigOutputReference | GoogleApihubAddonConfigAllDataAddonConfig): any {
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

export class GoogleApihubAddonConfigAllDataAddonConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApihubAddonConfigAllDataAddonConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApihubAddonConfigAllDataAddonConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter {
  /**
  * Indicates if this filter should match all environments or only a subset of environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#all_environments GoogleApihubAddon#all_environments}
  */
  readonly allEnvironments?: boolean | cdktn.IResolvable;
  /**
  * If provided, only environments in this list are matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#environments GoogleApihubAddon#environments}
  */
  readonly environments?: string[];
}

export function googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterToTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference | GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_environments: cdktn.booleanToTerraform(struct!.allEnvironments),
    environments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.environments),
  }
}


export function googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterToHclTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference | GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_environments: {
      value: cdktn.booleanToHclTerraform(struct!.allEnvironments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.allEnvironments = this._allEnvironments;
    }
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allEnvironments = undefined;
      this._environments = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allEnvironments = value.allEnvironments;
      this._environments = value.environments;
    }
  }

  // all_environments - computed: false, optional: true, required: false
  private _allEnvironments?: boolean | cdktn.IResolvable; 
  public get allEnvironments() {
    return this.getBooleanAttribute('all_environments');
  }
  public set allEnvironments(value: boolean | cdktn.IResolvable) {
    this._allEnvironments = value;
  }
  public resetAllEnvironments() {
    this._allEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allEnvironmentsInput() {
    return this._allEnvironments;
  }

  // environments - computed: false, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }
}
export interface GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig {
  /**
  * environment_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#environment_filter GoogleApihubAddon#environment_filter}
  */
  readonly environmentFilter?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter;
}

export function googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigToTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference | GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    environment_filter: googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterToTerraform(struct!.environmentFilter),
  }
}


export function googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigToHclTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference | GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    environment_filter: {
      value: googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterToHclTerraform(struct!.environmentFilter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentFilter = this._environmentFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environmentFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environmentFilter.internalValue = value.environmentFilter;
    }
  }

  // environment_filter - computed: false, optional: true, required: false
  private _environmentFilter = new GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference(this, "environment_filter");
  public get environmentFilter() {
    return this._environmentFilter;
  }
  public putEnvironmentFilter(value: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter) {
    this._environmentFilter.internalValue = value;
  }
  public resetEnvironmentFilter() {
    this._environmentFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentFilterInput() {
    return this._environmentFilter.internalValue;
  }
}
export interface GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter {
  /**
  * Indicates if this filter should match all environments or only a subset of environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#all_environments GoogleApihubAddon#all_environments}
  */
  readonly allEnvironments?: boolean | cdktn.IResolvable;
  /**
  * If provided, only environments in this list are matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#environments GoogleApihubAddon#environments}
  */
  readonly environments?: string[];
}

export function googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterToTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference | GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_environments: cdktn.booleanToTerraform(struct!.allEnvironments),
    environments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.environments),
  }
}


export function googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterToHclTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference | GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_environments: {
      value: cdktn.booleanToHclTerraform(struct!.allEnvironments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.allEnvironments = this._allEnvironments;
    }
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allEnvironments = undefined;
      this._environments = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allEnvironments = value.allEnvironments;
      this._environments = value.environments;
    }
  }

  // all_environments - computed: false, optional: true, required: false
  private _allEnvironments?: boolean | cdktn.IResolvable; 
  public get allEnvironments() {
    return this.getBooleanAttribute('all_environments');
  }
  public set allEnvironments(value: boolean | cdktn.IResolvable) {
    this._allEnvironments = value;
  }
  public resetAllEnvironments() {
    this._allEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allEnvironmentsInput() {
    return this._allEnvironments;
  }

  // environments - computed: false, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }
}
export interface GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig {
  /**
  * environment_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#environment_filter GoogleApihubAddon#environment_filter}
  */
  readonly environmentFilter?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter;
}

export function googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigToTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference | GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    environment_filter: googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterToTerraform(struct!.environmentFilter),
  }
}


export function googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigToHclTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference | GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    environment_filter: {
      value: googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterToHclTerraform(struct!.environmentFilter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentFilter = this._environmentFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environmentFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environmentFilter.internalValue = value.environmentFilter;
    }
  }

  // environment_filter - computed: false, optional: true, required: false
  private _environmentFilter = new GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference(this, "environment_filter");
  public get environmentFilter() {
    return this._environmentFilter;
  }
  public putEnvironmentFilter(value: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter) {
    this._environmentFilter.internalValue = value;
  }
  public resetEnvironmentFilter() {
    this._environmentFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentFilterInput() {
    return this._environmentFilter.internalValue;
  }
}
export interface GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter {
  /**
  * Indicates if this filter should match all environments or only a subset of environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#all_environments GoogleApihubAddon#all_environments}
  */
  readonly allEnvironments?: boolean | cdktn.IResolvable;
  /**
  * If provided, only environments in this list are matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#environments GoogleApihubAddon#environments}
  */
  readonly environments?: string[];
}

export function googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterToTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference | GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_environments: cdktn.booleanToTerraform(struct!.allEnvironments),
    environments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.environments),
  }
}


export function googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterToHclTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference | GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_environments: {
      value: cdktn.booleanToHclTerraform(struct!.allEnvironments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.allEnvironments = this._allEnvironments;
    }
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allEnvironments = undefined;
      this._environments = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allEnvironments = value.allEnvironments;
      this._environments = value.environments;
    }
  }

  // all_environments - computed: false, optional: true, required: false
  private _allEnvironments?: boolean | cdktn.IResolvable; 
  public get allEnvironments() {
    return this.getBooleanAttribute('all_environments');
  }
  public set allEnvironments(value: boolean | cdktn.IResolvable) {
    this._allEnvironments = value;
  }
  public resetAllEnvironments() {
    this._allEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allEnvironmentsInput() {
    return this._allEnvironments;
  }

  // environments - computed: false, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }
}
export interface GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig {
  /**
  * environment_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#environment_filter GoogleApihubAddon#environment_filter}
  */
  readonly environmentFilter?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter;
}

export function googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigToTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference | GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    environment_filter: googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterToTerraform(struct!.environmentFilter),
  }
}


export function googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigToHclTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference | GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    environment_filter: {
      value: googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterToHclTerraform(struct!.environmentFilter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentFilter = this._environmentFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environmentFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environmentFilter.internalValue = value.environmentFilter;
    }
  }

  // environment_filter - computed: false, optional: true, required: false
  private _environmentFilter = new GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference(this, "environment_filter");
  public get environmentFilter() {
    return this._environmentFilter;
  }
  public putEnvironmentFilter(value: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter) {
    this._environmentFilter.internalValue = value;
  }
  public resetEnvironmentFilter() {
    this._environmentFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentFilterInput() {
    return this._environmentFilter.internalValue;
  }
}
export interface GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs {
  /**
  * The name of the gateway plugin instance for which the config is to be specified.
  * Format: projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#plugin_instance GoogleApihubAddon#plugin_instance}
  */
  readonly pluginInstance: string;
  /**
  * apigee_edge_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#apigee_edge_config GoogleApihubAddon#apigee_edge_config}
  */
  readonly apigeeEdgeConfig?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig;
  /**
  * apigee_opdk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#apigee_opdk_config GoogleApihubAddon#apigee_opdk_config}
  */
  readonly apigeeOpdkConfig?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig;
  /**
  * apigee_x_hybrid_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#apigee_x_hybrid_config GoogleApihubAddon#apigee_x_hybrid_config}
  */
  readonly apigeeXHybridConfig?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig;
}

export function googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsToTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plugin_instance: cdktn.stringToTerraform(struct!.pluginInstance),
    apigee_edge_config: googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigToTerraform(struct!.apigeeEdgeConfig),
    apigee_opdk_config: googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigToTerraform(struct!.apigeeOpdkConfig),
    apigee_x_hybrid_config: googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigToTerraform(struct!.apigeeXHybridConfig),
  }
}


export function googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsToHclTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plugin_instance: {
      value: cdktn.stringToHclTerraform(struct!.pluginInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apigee_edge_config: {
      value: googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigToHclTerraform(struct!.apigeeEdgeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigList",
    },
    apigee_opdk_config: {
      value: googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigToHclTerraform(struct!.apigeeOpdkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigList",
    },
    apigee_x_hybrid_config: {
      value: googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigToHclTerraform(struct!.apigeeXHybridConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pluginInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginInstance = this._pluginInstance;
    }
    if (this._apigeeEdgeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apigeeEdgeConfig = this._apigeeEdgeConfig?.internalValue;
    }
    if (this._apigeeOpdkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apigeeOpdkConfig = this._apigeeOpdkConfig?.internalValue;
    }
    if (this._apigeeXHybridConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apigeeXHybridConfig = this._apigeeXHybridConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pluginInstance = undefined;
      this._apigeeEdgeConfig.internalValue = undefined;
      this._apigeeOpdkConfig.internalValue = undefined;
      this._apigeeXHybridConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pluginInstance = value.pluginInstance;
      this._apigeeEdgeConfig.internalValue = value.apigeeEdgeConfig;
      this._apigeeOpdkConfig.internalValue = value.apigeeOpdkConfig;
      this._apigeeXHybridConfig.internalValue = value.apigeeXHybridConfig;
    }
  }

  // plugin_instance - computed: false, optional: false, required: true
  private _pluginInstance?: string; 
  public get pluginInstance() {
    return this.getStringAttribute('plugin_instance');
  }
  public set pluginInstance(value: string) {
    this._pluginInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInstanceInput() {
    return this._pluginInstance;
  }

  // apigee_edge_config - computed: false, optional: true, required: false
  private _apigeeEdgeConfig = new GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference(this, "apigee_edge_config");
  public get apigeeEdgeConfig() {
    return this._apigeeEdgeConfig;
  }
  public putApigeeEdgeConfig(value: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig) {
    this._apigeeEdgeConfig.internalValue = value;
  }
  public resetApigeeEdgeConfig() {
    this._apigeeEdgeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apigeeEdgeConfigInput() {
    return this._apigeeEdgeConfig.internalValue;
  }

  // apigee_opdk_config - computed: false, optional: true, required: false
  private _apigeeOpdkConfig = new GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference(this, "apigee_opdk_config");
  public get apigeeOpdkConfig() {
    return this._apigeeOpdkConfig;
  }
  public putApigeeOpdkConfig(value: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig) {
    this._apigeeOpdkConfig.internalValue = value;
  }
  public resetApigeeOpdkConfig() {
    this._apigeeOpdkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apigeeOpdkConfigInput() {
    return this._apigeeOpdkConfig.internalValue;
  }

  // apigee_x_hybrid_config - computed: false, optional: true, required: false
  private _apigeeXHybridConfig = new GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference(this, "apigee_x_hybrid_config");
  public get apigeeXHybridConfig() {
    return this._apigeeXHybridConfig;
  }
  public putApigeeXHybridConfig(value: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig) {
    this._apigeeXHybridConfig.internalValue = value;
  }
  public resetApigeeXHybridConfig() {
    this._apigeeXHybridConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apigeeXHybridConfigInput() {
    return this._apigeeXHybridConfig.internalValue;
  }
}

export class GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList extends cdktn.ComplexList {
  public internalValue? : GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs[] | cdktn.IResolvable

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
  public get(index: number): GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference {
    return new GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApihubAddonConfigGatewayPluginAddonConfig {
  /**
  * gateway_plugin_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#gateway_plugin_configs GoogleApihubAddon#gateway_plugin_configs}
  */
  readonly gatewayPluginConfigs: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs[] | cdktn.IResolvable;
}

export function googleApihubAddonConfigGatewayPluginAddonConfigToTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigOutputReference | GoogleApihubAddonConfigGatewayPluginAddonConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gateway_plugin_configs: cdktn.listMapper(googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsToTerraform, true)(struct!.gatewayPluginConfigs),
  }
}


export function googleApihubAddonConfigGatewayPluginAddonConfigToHclTerraform(struct?: GoogleApihubAddonConfigGatewayPluginAddonConfigOutputReference | GoogleApihubAddonConfigGatewayPluginAddonConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gateway_plugin_configs: {
      value: cdktn.listMapperHcl(googleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsToHclTerraform, true)(struct!.gatewayPluginConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApihubAddonConfigGatewayPluginAddonConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApihubAddonConfigGatewayPluginAddonConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayPluginConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayPluginConfigs = this._gatewayPluginConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApihubAddonConfigGatewayPluginAddonConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gatewayPluginConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gatewayPluginConfigs.internalValue = value.gatewayPluginConfigs;
    }
  }

  // gateway_plugin_configs - computed: false, optional: false, required: true
  private _gatewayPluginConfigs = new GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList(this, "gateway_plugin_configs", false);
  public get gatewayPluginConfigs() {
    return this._gatewayPluginConfigs;
  }
  public putGatewayPluginConfigs(value: GoogleApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs[] | cdktn.IResolvable) {
    this._gatewayPluginConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPluginConfigsInput() {
    return this._gatewayPluginConfigs.internalValue;
  }
}
export interface GoogleApihubAddonConfigA {
  /**
  * all_data_addon_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#all_data_addon_config GoogleApihubAddon#all_data_addon_config}
  */
  readonly allDataAddonConfig?: GoogleApihubAddonConfigAllDataAddonConfig;
  /**
  * gateway_plugin_addon_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#gateway_plugin_addon_config GoogleApihubAddon#gateway_plugin_addon_config}
  */
  readonly gatewayPluginAddonConfig?: GoogleApihubAddonConfigGatewayPluginAddonConfig;
}

export function googleApihubAddonConfigAToTerraform(struct?: GoogleApihubAddonConfigAOutputReference | GoogleApihubAddonConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_data_addon_config: googleApihubAddonConfigAllDataAddonConfigToTerraform(struct!.allDataAddonConfig),
    gateway_plugin_addon_config: googleApihubAddonConfigGatewayPluginAddonConfigToTerraform(struct!.gatewayPluginAddonConfig),
  }
}


export function googleApihubAddonConfigAToHclTerraform(struct?: GoogleApihubAddonConfigAOutputReference | GoogleApihubAddonConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_data_addon_config: {
      value: googleApihubAddonConfigAllDataAddonConfigToHclTerraform(struct!.allDataAddonConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApihubAddonConfigAllDataAddonConfigList",
    },
    gateway_plugin_addon_config: {
      value: googleApihubAddonConfigGatewayPluginAddonConfigToHclTerraform(struct!.gatewayPluginAddonConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApihubAddonConfigGatewayPluginAddonConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApihubAddonConfigAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApihubAddonConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDataAddonConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDataAddonConfig = this._allDataAddonConfig?.internalValue;
    }
    if (this._gatewayPluginAddonConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayPluginAddonConfig = this._gatewayPluginAddonConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApihubAddonConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allDataAddonConfig.internalValue = undefined;
      this._gatewayPluginAddonConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allDataAddonConfig.internalValue = value.allDataAddonConfig;
      this._gatewayPluginAddonConfig.internalValue = value.gatewayPluginAddonConfig;
    }
  }

  // all_data_addon_config - computed: false, optional: true, required: false
  private _allDataAddonConfig = new GoogleApihubAddonConfigAllDataAddonConfigOutputReference(this, "all_data_addon_config");
  public get allDataAddonConfig() {
    return this._allDataAddonConfig;
  }
  public putAllDataAddonConfig(value: GoogleApihubAddonConfigAllDataAddonConfig) {
    this._allDataAddonConfig.internalValue = value;
  }
  public resetAllDataAddonConfig() {
    this._allDataAddonConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDataAddonConfigInput() {
    return this._allDataAddonConfig.internalValue;
  }

  // gateway_plugin_addon_config - computed: false, optional: true, required: false
  private _gatewayPluginAddonConfig = new GoogleApihubAddonConfigGatewayPluginAddonConfigOutputReference(this, "gateway_plugin_addon_config");
  public get gatewayPluginAddonConfig() {
    return this._gatewayPluginAddonConfig;
  }
  public putGatewayPluginAddonConfig(value: GoogleApihubAddonConfigGatewayPluginAddonConfig) {
    this._gatewayPluginAddonConfig.internalValue = value;
  }
  public resetGatewayPluginAddonConfig() {
    this._gatewayPluginAddonConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPluginAddonConfigInput() {
    return this._gatewayPluginAddonConfig.internalValue;
  }
}
export interface GoogleApihubAddonTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#create GoogleApihubAddon#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#delete GoogleApihubAddon#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#update GoogleApihubAddon#update}
  */
  readonly update?: string;
}

export function googleApihubAddonTimeoutsToTerraform(struct?: GoogleApihubAddonTimeouts | cdktn.IResolvable): any {
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


export function googleApihubAddonTimeoutsToHclTerraform(struct?: GoogleApihubAddonTimeouts | cdktn.IResolvable): any {
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

export class GoogleApihubAddonTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleApihubAddonTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleApihubAddonTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon google_apihub_addon}
*/
export class GoogleApihubAddon extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apihub_addon";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleApihubAddon resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleApihubAddon to import
  * @param importFromId The id of the existing GoogleApihubAddon that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleApihubAddon to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_apihub_addon", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_apihub_addon google_apihub_addon} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleApihubAddonConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleApihubAddonConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apihub_addon',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '8.12.0',
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
    this._addonId = config.addonId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addon_id - computed: false, optional: false, required: true
  private _addonId?: string; 
  public get addonId() {
    return this.getStringAttribute('addon_id');
  }
  public set addonId(value: string) {
    this._addonId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addonIdInput() {
    return this._addonId;
  }

  // boost_spec_gemini_region_id - computed: true, optional: false, required: false
  public get boostSpecGeminiRegionId() {
    return this.getStringAttribute('boost_spec_gemini_region_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_source - computed: true, optional: false, required: false
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // config - computed: false, optional: false, required: true
  private _config = new GoogleApihubAddonConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleApihubAddonConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleApihubAddonTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleApihubAddonTimeouts) {
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
      addon_id: cdktn.stringToTerraform(this._addonId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      config: googleApihubAddonConfigAToTerraform(this._config.internalValue),
      timeouts: googleApihubAddonTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addon_id: {
        value: cdktn.stringToHclTerraform(this._addonId),
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
      config: {
        value: googleApihubAddonConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleApihubAddonConfigAList",
      },
      timeouts: {
        value: googleApihubAddonTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleApihubAddonTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
