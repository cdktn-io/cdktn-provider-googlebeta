/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
export interface GoogleContainerClusterAddonsConfigCloudrunConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#load_balancer_type GoogleContainerCluster#load_balancer_type}
  */
  readonly loadBalancerType?: string;
}

export function googleContainerClusterAddonsConfigCloudrunConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigCloudrunConfigOutputReference | GoogleContainerClusterAddonsConfigCloudrunConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    load_balancer_type: cdktn.stringToTerraform(struct!.loadBalancerType),
  }
}


export function googleContainerClusterAddonsConfigCloudrunConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigCloudrunConfigOutputReference | GoogleContainerClusterAddonsConfigCloudrunConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_balancer_type: {
      value: cdktn.stringToHclTerraform(struct!.loadBalancerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAddonsConfigCloudrunConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigCloudrunConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._loadBalancerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerType = this._loadBalancerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigCloudrunConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._loadBalancerType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._loadBalancerType = value.loadBalancerType;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // load_balancer_type - computed: false, optional: true, required: false
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  public resetLoadBalancerType() {
    this._loadBalancerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }
}
export interface GoogleContainerClusterAddonsConfigConfigConnectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigConfigConnectorConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigConfigConnectorConfigOutputReference | GoogleContainerClusterAddonsConfigConfigConnectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigConfigConnectorConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigConfigConnectorConfigOutputReference | GoogleContainerClusterAddonsConfigConfigConnectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterAddonsConfigConfigConnectorConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigConfigConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigConfigConnectorConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigDnsCacheConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigDnsCacheConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigDnsCacheConfigOutputReference | GoogleContainerClusterAddonsConfigDnsCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigDnsCacheConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigDnsCacheConfigOutputReference | GoogleContainerClusterAddonsConfigDnsCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterAddonsConfigDnsCacheConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigDnsCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigDnsCacheConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigGcsFuseCsiDriverConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigGcsFuseCsiDriverConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigGkeBackupAgentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigGkeBackupAgentConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference | GoogleContainerClusterAddonsConfigGkeBackupAgentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigGkeBackupAgentConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference | GoogleContainerClusterAddonsConfigGkeBackupAgentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigGkeBackupAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigGkeBackupAgentConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigHorizontalPodAutoscaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigHorizontalPodAutoscalingToTerraform(struct?: GoogleContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference | GoogleContainerClusterAddonsConfigHorizontalPodAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterAddonsConfigHorizontalPodAutoscalingToHclTerraform(struct?: GoogleContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference | GoogleContainerClusterAddonsConfigHorizontalPodAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigHorizontalPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigHorizontalPodAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterAddonsConfigHttpLoadBalancing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigHttpLoadBalancingToTerraform(struct?: GoogleContainerClusterAddonsConfigHttpLoadBalancingOutputReference | GoogleContainerClusterAddonsConfigHttpLoadBalancing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterAddonsConfigHttpLoadBalancingToHclTerraform(struct?: GoogleContainerClusterAddonsConfigHttpLoadBalancingOutputReference | GoogleContainerClusterAddonsConfigHttpLoadBalancing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAddonsConfigHttpLoadBalancingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigHttpLoadBalancing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigHttpLoadBalancing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterAddonsConfigIstioConfig {
  /**
  * The authentication type between services in Istio. Available options include AUTH_MUTUAL_TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#auth GoogleContainerCluster#auth}
  */
  readonly auth?: string;
  /**
  * The status of the Istio addon, which makes it easy to set up Istio for services in a cluster. It is disabled by default. Set disabled = false to enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigIstioConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigIstioConfigOutputReference | GoogleContainerClusterAddonsConfigIstioConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktn.stringToTerraform(struct!.auth),
    disabled: cdktn.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterAddonsConfigIstioConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigIstioConfigOutputReference | GoogleContainerClusterAddonsConfigIstioConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktn.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAddonsConfigIstioConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigIstioConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigIstioConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auth = undefined;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auth = value.auth;
      this._disabled = value.disabled;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterAddonsConfigKalmConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigKalmConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigKalmConfigOutputReference | GoogleContainerClusterAddonsConfigKalmConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigKalmConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigKalmConfigOutputReference | GoogleContainerClusterAddonsConfigKalmConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterAddonsConfigKalmConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigKalmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigKalmConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigLustreCsiDriverConfig {
  /**
  * When set to true, this disables multi-NIC support for the Lustre CSI driver. By default, GKE enables multi-NIC support, which
  * 										allows the Lustre CSI driver to automatically detect and configure all suitable network interfaces on a node to maximize I/O performance for demanding workloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disable_multi_nic GoogleContainerCluster#disable_multi_nic}
  */
  readonly disableMultiNic?: boolean | cdktn.IResolvable;
  /**
  * If set to true, the Lustre CSI driver will initialize LNet (the virtual network layer for Lustre kernel module) using port 6988.
  * 										This flag is required to workaround a port conflict with the gke-metadata-server on GKE nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_legacy_lustre_port GoogleContainerCluster#enable_legacy_lustre_port}
  */
  readonly enableLegacyLustrePort?: boolean | cdktn.IResolvable;
  /**
  * Whether the Lustre CSI driver is enabled for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigLustreCsiDriverConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigLustreCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigLustreCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_multi_nic: cdktn.booleanToTerraform(struct!.disableMultiNic),
    enable_legacy_lustre_port: cdktn.booleanToTerraform(struct!.enableLegacyLustrePort),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigLustreCsiDriverConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigLustreCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigLustreCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_multi_nic: {
      value: cdktn.booleanToHclTerraform(struct!.disableMultiNic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_legacy_lustre_port: {
      value: cdktn.booleanToHclTerraform(struct!.enableLegacyLustrePort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class GoogleContainerClusterAddonsConfigLustreCsiDriverConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigLustreCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableMultiNic !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMultiNic = this._disableMultiNic;
    }
    if (this._enableLegacyLustrePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLegacyLustrePort = this._enableLegacyLustrePort;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigLustreCsiDriverConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableMultiNic = undefined;
      this._enableLegacyLustrePort = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableMultiNic = value.disableMultiNic;
      this._enableLegacyLustrePort = value.enableLegacyLustrePort;
      this._enabled = value.enabled;
    }
  }

  // disable_multi_nic - computed: false, optional: true, required: false
  private _disableMultiNic?: boolean | cdktn.IResolvable; 
  public get disableMultiNic() {
    return this.getBooleanAttribute('disable_multi_nic');
  }
  public set disableMultiNic(value: boolean | cdktn.IResolvable) {
    this._disableMultiNic = value;
  }
  public resetDisableMultiNic() {
    this._disableMultiNic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMultiNicInput() {
    return this._disableMultiNic;
  }

  // enable_legacy_lustre_port - computed: false, optional: true, required: false
  private _enableLegacyLustrePort?: boolean | cdktn.IResolvable; 
  public get enableLegacyLustrePort() {
    return this.getBooleanAttribute('enable_legacy_lustre_port');
  }
  public set enableLegacyLustrePort(value: boolean | cdktn.IResolvable) {
    this._enableLegacyLustrePort = value;
  }
  public resetEnableLegacyLustrePort() {
    this._enableLegacyLustrePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLegacyLustrePortInput() {
    return this._enableLegacyLustrePort;
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
export interface GoogleContainerClusterAddonsConfigNetworkPolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigNetworkPolicyConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigNetworkPolicyConfigOutputReference | GoogleContainerClusterAddonsConfigNetworkPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterAddonsConfigNetworkPolicyConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigNetworkPolicyConfigOutputReference | GoogleContainerClusterAddonsConfigNetworkPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAddonsConfigNetworkPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigNetworkPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigNetworkPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigParallelstoreCsiDriverConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigParallelstoreCsiDriverConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfigOutputReference | GoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigPodSnapshotConfig {
  /**
  * Whether the Pod Snapshot feature is enabled for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigPodSnapshotConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigPodSnapshotConfigOutputReference | GoogleContainerClusterAddonsConfigPodSnapshotConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigPodSnapshotConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigPodSnapshotConfigOutputReference | GoogleContainerClusterAddonsConfigPodSnapshotConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterAddonsConfigPodSnapshotConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigPodSnapshotConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigPodSnapshotConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigOutputReference | GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigOutputReference | GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigOutputReference | GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigOutputReference | GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigRayOperatorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * ray_cluster_logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#ray_cluster_logging_config GoogleContainerCluster#ray_cluster_logging_config}
  */
  readonly rayClusterLoggingConfig?: GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig;
  /**
  * ray_cluster_monitoring_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#ray_cluster_monitoring_config GoogleContainerCluster#ray_cluster_monitoring_config}
  */
  readonly rayClusterMonitoringConfig?: GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig;
}

export function googleContainerClusterAddonsConfigRayOperatorConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigRayOperatorConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    ray_cluster_logging_config: googleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigToTerraform(struct!.rayClusterLoggingConfig),
    ray_cluster_monitoring_config: googleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigToTerraform(struct!.rayClusterMonitoringConfig),
  }
}


export function googleContainerClusterAddonsConfigRayOperatorConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigRayOperatorConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ray_cluster_logging_config: {
      value: googleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigToHclTerraform(struct!.rayClusterLoggingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigList",
    },
    ray_cluster_monitoring_config: {
      value: googleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigToHclTerraform(struct!.rayClusterMonitoringConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAddonsConfigRayOperatorConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterAddonsConfigRayOperatorConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rayClusterLoggingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rayClusterLoggingConfig = this._rayClusterLoggingConfig?.internalValue;
    }
    if (this._rayClusterMonitoringConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rayClusterMonitoringConfig = this._rayClusterMonitoringConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigRayOperatorConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._rayClusterLoggingConfig.internalValue = undefined;
      this._rayClusterMonitoringConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._rayClusterLoggingConfig.internalValue = value.rayClusterLoggingConfig;
      this._rayClusterMonitoringConfig.internalValue = value.rayClusterMonitoringConfig;
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

  // ray_cluster_logging_config - computed: false, optional: true, required: false
  private _rayClusterLoggingConfig = new GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigOutputReference(this, "ray_cluster_logging_config");
  public get rayClusterLoggingConfig() {
    return this._rayClusterLoggingConfig;
  }
  public putRayClusterLoggingConfig(value: GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig) {
    this._rayClusterLoggingConfig.internalValue = value;
  }
  public resetRayClusterLoggingConfig() {
    this._rayClusterLoggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rayClusterLoggingConfigInput() {
    return this._rayClusterLoggingConfig.internalValue;
  }

  // ray_cluster_monitoring_config - computed: false, optional: true, required: false
  private _rayClusterMonitoringConfig = new GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigOutputReference(this, "ray_cluster_monitoring_config");
  public get rayClusterMonitoringConfig() {
    return this._rayClusterMonitoringConfig;
  }
  public putRayClusterMonitoringConfig(value: GoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig) {
    this._rayClusterMonitoringConfig.internalValue = value;
  }
  public resetRayClusterMonitoringConfig() {
    this._rayClusterMonitoringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rayClusterMonitoringConfigInput() {
    return this._rayClusterMonitoringConfig.internalValue;
  }
}

export class GoogleContainerClusterAddonsConfigRayOperatorConfigList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterAddonsConfigRayOperatorConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterAddonsConfigRayOperatorConfigOutputReference {
    return new GoogleContainerClusterAddonsConfigRayOperatorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterAddonsConfigSliceControllerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigSliceControllerConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigSliceControllerConfigOutputReference | GoogleContainerClusterAddonsConfigSliceControllerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigSliceControllerConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigSliceControllerConfigOutputReference | GoogleContainerClusterAddonsConfigSliceControllerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterAddonsConfigSliceControllerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigSliceControllerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigSliceControllerConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfigStatefulHaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAddonsConfigStatefulHaConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigStatefulHaConfigOutputReference | GoogleContainerClusterAddonsConfigStatefulHaConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterAddonsConfigStatefulHaConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigStatefulHaConfigOutputReference | GoogleContainerClusterAddonsConfigStatefulHaConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterAddonsConfigStatefulHaConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfigStatefulHaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfigStatefulHaConfig | undefined) {
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
export interface GoogleContainerClusterAddonsConfig {
  /**
  * cloudrun_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#cloudrun_config GoogleContainerCluster#cloudrun_config}
  */
  readonly cloudrunConfig?: GoogleContainerClusterAddonsConfigCloudrunConfig;
  /**
  * config_connector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#config_connector_config GoogleContainerCluster#config_connector_config}
  */
  readonly configConnectorConfig?: GoogleContainerClusterAddonsConfigConfigConnectorConfig;
  /**
  * dns_cache_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#dns_cache_config GoogleContainerCluster#dns_cache_config}
  */
  readonly dnsCacheConfig?: GoogleContainerClusterAddonsConfigDnsCacheConfig;
  /**
  * gce_persistent_disk_csi_driver_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gce_persistent_disk_csi_driver_config GoogleContainerCluster#gce_persistent_disk_csi_driver_config}
  */
  readonly gcePersistentDiskCsiDriverConfig?: GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig;
  /**
  * gcp_filestore_csi_driver_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gcp_filestore_csi_driver_config GoogleContainerCluster#gcp_filestore_csi_driver_config}
  */
  readonly gcpFilestoreCsiDriverConfig?: GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig;
  /**
  * gcs_fuse_csi_driver_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gcs_fuse_csi_driver_config GoogleContainerCluster#gcs_fuse_csi_driver_config}
  */
  readonly gcsFuseCsiDriverConfig?: GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig;
  /**
  * gke_backup_agent_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gke_backup_agent_config GoogleContainerCluster#gke_backup_agent_config}
  */
  readonly gkeBackupAgentConfig?: GoogleContainerClusterAddonsConfigGkeBackupAgentConfig;
  /**
  * horizontal_pod_autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#horizontal_pod_autoscaling GoogleContainerCluster#horizontal_pod_autoscaling}
  */
  readonly horizontalPodAutoscaling?: GoogleContainerClusterAddonsConfigHorizontalPodAutoscaling;
  /**
  * http_load_balancing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#http_load_balancing GoogleContainerCluster#http_load_balancing}
  */
  readonly httpLoadBalancing?: GoogleContainerClusterAddonsConfigHttpLoadBalancing;
  /**
  * istio_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#istio_config GoogleContainerCluster#istio_config}
  */
  readonly istioConfig?: GoogleContainerClusterAddonsConfigIstioConfig;
  /**
  * kalm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#kalm_config GoogleContainerCluster#kalm_config}
  */
  readonly kalmConfig?: GoogleContainerClusterAddonsConfigKalmConfig;
  /**
  * lustre_csi_driver_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#lustre_csi_driver_config GoogleContainerCluster#lustre_csi_driver_config}
  */
  readonly lustreCsiDriverConfig?: GoogleContainerClusterAddonsConfigLustreCsiDriverConfig;
  /**
  * network_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#network_policy_config GoogleContainerCluster#network_policy_config}
  */
  readonly networkPolicyConfig?: GoogleContainerClusterAddonsConfigNetworkPolicyConfig;
  /**
  * parallelstore_csi_driver_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#parallelstore_csi_driver_config GoogleContainerCluster#parallelstore_csi_driver_config}
  */
  readonly parallelstoreCsiDriverConfig?: GoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfig;
  /**
  * pod_snapshot_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#pod_snapshot_config GoogleContainerCluster#pod_snapshot_config}
  */
  readonly podSnapshotConfig?: GoogleContainerClusterAddonsConfigPodSnapshotConfig;
  /**
  * ray_operator_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#ray_operator_config GoogleContainerCluster#ray_operator_config}
  */
  readonly rayOperatorConfig?: GoogleContainerClusterAddonsConfigRayOperatorConfig[] | cdktn.IResolvable;
  /**
  * slice_controller_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#slice_controller_config GoogleContainerCluster#slice_controller_config}
  */
  readonly sliceControllerConfig?: GoogleContainerClusterAddonsConfigSliceControllerConfig;
  /**
  * stateful_ha_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#stateful_ha_config GoogleContainerCluster#stateful_ha_config}
  */
  readonly statefulHaConfig?: GoogleContainerClusterAddonsConfigStatefulHaConfig;
}

export function googleContainerClusterAddonsConfigToTerraform(struct?: GoogleContainerClusterAddonsConfigOutputReference | GoogleContainerClusterAddonsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudrun_config: googleContainerClusterAddonsConfigCloudrunConfigToTerraform(struct!.cloudrunConfig),
    config_connector_config: googleContainerClusterAddonsConfigConfigConnectorConfigToTerraform(struct!.configConnectorConfig),
    dns_cache_config: googleContainerClusterAddonsConfigDnsCacheConfigToTerraform(struct!.dnsCacheConfig),
    gce_persistent_disk_csi_driver_config: googleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToTerraform(struct!.gcePersistentDiskCsiDriverConfig),
    gcp_filestore_csi_driver_config: googleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigToTerraform(struct!.gcpFilestoreCsiDriverConfig),
    gcs_fuse_csi_driver_config: googleContainerClusterAddonsConfigGcsFuseCsiDriverConfigToTerraform(struct!.gcsFuseCsiDriverConfig),
    gke_backup_agent_config: googleContainerClusterAddonsConfigGkeBackupAgentConfigToTerraform(struct!.gkeBackupAgentConfig),
    horizontal_pod_autoscaling: googleContainerClusterAddonsConfigHorizontalPodAutoscalingToTerraform(struct!.horizontalPodAutoscaling),
    http_load_balancing: googleContainerClusterAddonsConfigHttpLoadBalancingToTerraform(struct!.httpLoadBalancing),
    istio_config: googleContainerClusterAddonsConfigIstioConfigToTerraform(struct!.istioConfig),
    kalm_config: googleContainerClusterAddonsConfigKalmConfigToTerraform(struct!.kalmConfig),
    lustre_csi_driver_config: googleContainerClusterAddonsConfigLustreCsiDriverConfigToTerraform(struct!.lustreCsiDriverConfig),
    network_policy_config: googleContainerClusterAddonsConfigNetworkPolicyConfigToTerraform(struct!.networkPolicyConfig),
    parallelstore_csi_driver_config: googleContainerClusterAddonsConfigParallelstoreCsiDriverConfigToTerraform(struct!.parallelstoreCsiDriverConfig),
    pod_snapshot_config: googleContainerClusterAddonsConfigPodSnapshotConfigToTerraform(struct!.podSnapshotConfig),
    ray_operator_config: cdktn.listMapper(googleContainerClusterAddonsConfigRayOperatorConfigToTerraform, true)(struct!.rayOperatorConfig),
    slice_controller_config: googleContainerClusterAddonsConfigSliceControllerConfigToTerraform(struct!.sliceControllerConfig),
    stateful_ha_config: googleContainerClusterAddonsConfigStatefulHaConfigToTerraform(struct!.statefulHaConfig),
  }
}


export function googleContainerClusterAddonsConfigToHclTerraform(struct?: GoogleContainerClusterAddonsConfigOutputReference | GoogleContainerClusterAddonsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudrun_config: {
      value: googleContainerClusterAddonsConfigCloudrunConfigToHclTerraform(struct!.cloudrunConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigCloudrunConfigList",
    },
    config_connector_config: {
      value: googleContainerClusterAddonsConfigConfigConnectorConfigToHclTerraform(struct!.configConnectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigConfigConnectorConfigList",
    },
    dns_cache_config: {
      value: googleContainerClusterAddonsConfigDnsCacheConfigToHclTerraform(struct!.dnsCacheConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigDnsCacheConfigList",
    },
    gce_persistent_disk_csi_driver_config: {
      value: googleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToHclTerraform(struct!.gcePersistentDiskCsiDriverConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigList",
    },
    gcp_filestore_csi_driver_config: {
      value: googleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigToHclTerraform(struct!.gcpFilestoreCsiDriverConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigList",
    },
    gcs_fuse_csi_driver_config: {
      value: googleContainerClusterAddonsConfigGcsFuseCsiDriverConfigToHclTerraform(struct!.gcsFuseCsiDriverConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigList",
    },
    gke_backup_agent_config: {
      value: googleContainerClusterAddonsConfigGkeBackupAgentConfigToHclTerraform(struct!.gkeBackupAgentConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigGkeBackupAgentConfigList",
    },
    horizontal_pod_autoscaling: {
      value: googleContainerClusterAddonsConfigHorizontalPodAutoscalingToHclTerraform(struct!.horizontalPodAutoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigHorizontalPodAutoscalingList",
    },
    http_load_balancing: {
      value: googleContainerClusterAddonsConfigHttpLoadBalancingToHclTerraform(struct!.httpLoadBalancing),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigHttpLoadBalancingList",
    },
    istio_config: {
      value: googleContainerClusterAddonsConfigIstioConfigToHclTerraform(struct!.istioConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigIstioConfigList",
    },
    kalm_config: {
      value: googleContainerClusterAddonsConfigKalmConfigToHclTerraform(struct!.kalmConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigKalmConfigList",
    },
    lustre_csi_driver_config: {
      value: googleContainerClusterAddonsConfigLustreCsiDriverConfigToHclTerraform(struct!.lustreCsiDriverConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigLustreCsiDriverConfigList",
    },
    network_policy_config: {
      value: googleContainerClusterAddonsConfigNetworkPolicyConfigToHclTerraform(struct!.networkPolicyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigNetworkPolicyConfigList",
    },
    parallelstore_csi_driver_config: {
      value: googleContainerClusterAddonsConfigParallelstoreCsiDriverConfigToHclTerraform(struct!.parallelstoreCsiDriverConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfigList",
    },
    pod_snapshot_config: {
      value: googleContainerClusterAddonsConfigPodSnapshotConfigToHclTerraform(struct!.podSnapshotConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigPodSnapshotConfigList",
    },
    ray_operator_config: {
      value: cdktn.listMapperHcl(googleContainerClusterAddonsConfigRayOperatorConfigToHclTerraform, true)(struct!.rayOperatorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigRayOperatorConfigList",
    },
    slice_controller_config: {
      value: googleContainerClusterAddonsConfigSliceControllerConfigToHclTerraform(struct!.sliceControllerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigSliceControllerConfigList",
    },
    stateful_ha_config: {
      value: googleContainerClusterAddonsConfigStatefulHaConfigToHclTerraform(struct!.statefulHaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterAddonsConfigStatefulHaConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAddonsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAddonsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudrunConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudrunConfig = this._cloudrunConfig?.internalValue;
    }
    if (this._configConnectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configConnectorConfig = this._configConnectorConfig?.internalValue;
    }
    if (this._dnsCacheConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheConfig = this._dnsCacheConfig?.internalValue;
    }
    if (this._gcePersistentDiskCsiDriverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcePersistentDiskCsiDriverConfig = this._gcePersistentDiskCsiDriverConfig?.internalValue;
    }
    if (this._gcpFilestoreCsiDriverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpFilestoreCsiDriverConfig = this._gcpFilestoreCsiDriverConfig?.internalValue;
    }
    if (this._gcsFuseCsiDriverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsFuseCsiDriverConfig = this._gcsFuseCsiDriverConfig?.internalValue;
    }
    if (this._gkeBackupAgentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeBackupAgentConfig = this._gkeBackupAgentConfig?.internalValue;
    }
    if (this._horizontalPodAutoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalPodAutoscaling = this._horizontalPodAutoscaling?.internalValue;
    }
    if (this._httpLoadBalancing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpLoadBalancing = this._httpLoadBalancing?.internalValue;
    }
    if (this._istioConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioConfig = this._istioConfig?.internalValue;
    }
    if (this._kalmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kalmConfig = this._kalmConfig?.internalValue;
    }
    if (this._lustreCsiDriverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lustreCsiDriverConfig = this._lustreCsiDriverConfig?.internalValue;
    }
    if (this._networkPolicyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicyConfig = this._networkPolicyConfig?.internalValue;
    }
    if (this._parallelstoreCsiDriverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelstoreCsiDriverConfig = this._parallelstoreCsiDriverConfig?.internalValue;
    }
    if (this._podSnapshotConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSnapshotConfig = this._podSnapshotConfig?.internalValue;
    }
    if (this._rayOperatorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rayOperatorConfig = this._rayOperatorConfig?.internalValue;
    }
    if (this._sliceControllerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliceControllerConfig = this._sliceControllerConfig?.internalValue;
    }
    if (this._statefulHaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulHaConfig = this._statefulHaConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAddonsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudrunConfig.internalValue = undefined;
      this._configConnectorConfig.internalValue = undefined;
      this._dnsCacheConfig.internalValue = undefined;
      this._gcePersistentDiskCsiDriverConfig.internalValue = undefined;
      this._gcpFilestoreCsiDriverConfig.internalValue = undefined;
      this._gcsFuseCsiDriverConfig.internalValue = undefined;
      this._gkeBackupAgentConfig.internalValue = undefined;
      this._horizontalPodAutoscaling.internalValue = undefined;
      this._httpLoadBalancing.internalValue = undefined;
      this._istioConfig.internalValue = undefined;
      this._kalmConfig.internalValue = undefined;
      this._lustreCsiDriverConfig.internalValue = undefined;
      this._networkPolicyConfig.internalValue = undefined;
      this._parallelstoreCsiDriverConfig.internalValue = undefined;
      this._podSnapshotConfig.internalValue = undefined;
      this._rayOperatorConfig.internalValue = undefined;
      this._sliceControllerConfig.internalValue = undefined;
      this._statefulHaConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudrunConfig.internalValue = value.cloudrunConfig;
      this._configConnectorConfig.internalValue = value.configConnectorConfig;
      this._dnsCacheConfig.internalValue = value.dnsCacheConfig;
      this._gcePersistentDiskCsiDriverConfig.internalValue = value.gcePersistentDiskCsiDriverConfig;
      this._gcpFilestoreCsiDriverConfig.internalValue = value.gcpFilestoreCsiDriverConfig;
      this._gcsFuseCsiDriverConfig.internalValue = value.gcsFuseCsiDriverConfig;
      this._gkeBackupAgentConfig.internalValue = value.gkeBackupAgentConfig;
      this._horizontalPodAutoscaling.internalValue = value.horizontalPodAutoscaling;
      this._httpLoadBalancing.internalValue = value.httpLoadBalancing;
      this._istioConfig.internalValue = value.istioConfig;
      this._kalmConfig.internalValue = value.kalmConfig;
      this._lustreCsiDriverConfig.internalValue = value.lustreCsiDriverConfig;
      this._networkPolicyConfig.internalValue = value.networkPolicyConfig;
      this._parallelstoreCsiDriverConfig.internalValue = value.parallelstoreCsiDriverConfig;
      this._podSnapshotConfig.internalValue = value.podSnapshotConfig;
      this._rayOperatorConfig.internalValue = value.rayOperatorConfig;
      this._sliceControllerConfig.internalValue = value.sliceControllerConfig;
      this._statefulHaConfig.internalValue = value.statefulHaConfig;
    }
  }

  // cloudrun_config - computed: false, optional: true, required: false
  private _cloudrunConfig = new GoogleContainerClusterAddonsConfigCloudrunConfigOutputReference(this, "cloudrun_config");
  public get cloudrunConfig() {
    return this._cloudrunConfig;
  }
  public putCloudrunConfig(value: GoogleContainerClusterAddonsConfigCloudrunConfig) {
    this._cloudrunConfig.internalValue = value;
  }
  public resetCloudrunConfig() {
    this._cloudrunConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudrunConfigInput() {
    return this._cloudrunConfig.internalValue;
  }

  // config_connector_config - computed: false, optional: true, required: false
  private _configConnectorConfig = new GoogleContainerClusterAddonsConfigConfigConnectorConfigOutputReference(this, "config_connector_config");
  public get configConnectorConfig() {
    return this._configConnectorConfig;
  }
  public putConfigConnectorConfig(value: GoogleContainerClusterAddonsConfigConfigConnectorConfig) {
    this._configConnectorConfig.internalValue = value;
  }
  public resetConfigConnectorConfig() {
    this._configConnectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configConnectorConfigInput() {
    return this._configConnectorConfig.internalValue;
  }

  // dns_cache_config - computed: false, optional: true, required: false
  private _dnsCacheConfig = new GoogleContainerClusterAddonsConfigDnsCacheConfigOutputReference(this, "dns_cache_config");
  public get dnsCacheConfig() {
    return this._dnsCacheConfig;
  }
  public putDnsCacheConfig(value: GoogleContainerClusterAddonsConfigDnsCacheConfig) {
    this._dnsCacheConfig.internalValue = value;
  }
  public resetDnsCacheConfig() {
    this._dnsCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheConfigInput() {
    return this._dnsCacheConfig.internalValue;
  }

  // gce_persistent_disk_csi_driver_config - computed: false, optional: true, required: false
  private _gcePersistentDiskCsiDriverConfig = new GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference(this, "gce_persistent_disk_csi_driver_config");
  public get gcePersistentDiskCsiDriverConfig() {
    return this._gcePersistentDiskCsiDriverConfig;
  }
  public putGcePersistentDiskCsiDriverConfig(value: GoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig) {
    this._gcePersistentDiskCsiDriverConfig.internalValue = value;
  }
  public resetGcePersistentDiskCsiDriverConfig() {
    this._gcePersistentDiskCsiDriverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePersistentDiskCsiDriverConfigInput() {
    return this._gcePersistentDiskCsiDriverConfig.internalValue;
  }

  // gcp_filestore_csi_driver_config - computed: false, optional: true, required: false
  private _gcpFilestoreCsiDriverConfig = new GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference(this, "gcp_filestore_csi_driver_config");
  public get gcpFilestoreCsiDriverConfig() {
    return this._gcpFilestoreCsiDriverConfig;
  }
  public putGcpFilestoreCsiDriverConfig(value: GoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig) {
    this._gcpFilestoreCsiDriverConfig.internalValue = value;
  }
  public resetGcpFilestoreCsiDriverConfig() {
    this._gcpFilestoreCsiDriverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpFilestoreCsiDriverConfigInput() {
    return this._gcpFilestoreCsiDriverConfig.internalValue;
  }

  // gcs_fuse_csi_driver_config - computed: false, optional: true, required: false
  private _gcsFuseCsiDriverConfig = new GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference(this, "gcs_fuse_csi_driver_config");
  public get gcsFuseCsiDriverConfig() {
    return this._gcsFuseCsiDriverConfig;
  }
  public putGcsFuseCsiDriverConfig(value: GoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig) {
    this._gcsFuseCsiDriverConfig.internalValue = value;
  }
  public resetGcsFuseCsiDriverConfig() {
    this._gcsFuseCsiDriverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsFuseCsiDriverConfigInput() {
    return this._gcsFuseCsiDriverConfig.internalValue;
  }

  // gke_backup_agent_config - computed: false, optional: true, required: false
  private _gkeBackupAgentConfig = new GoogleContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference(this, "gke_backup_agent_config");
  public get gkeBackupAgentConfig() {
    return this._gkeBackupAgentConfig;
  }
  public putGkeBackupAgentConfig(value: GoogleContainerClusterAddonsConfigGkeBackupAgentConfig) {
    this._gkeBackupAgentConfig.internalValue = value;
  }
  public resetGkeBackupAgentConfig() {
    this._gkeBackupAgentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeBackupAgentConfigInput() {
    return this._gkeBackupAgentConfig.internalValue;
  }

  // horizontal_pod_autoscaling - computed: false, optional: true, required: false
  private _horizontalPodAutoscaling = new GoogleContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference(this, "horizontal_pod_autoscaling");
  public get horizontalPodAutoscaling() {
    return this._horizontalPodAutoscaling;
  }
  public putHorizontalPodAutoscaling(value: GoogleContainerClusterAddonsConfigHorizontalPodAutoscaling) {
    this._horizontalPodAutoscaling.internalValue = value;
  }
  public resetHorizontalPodAutoscaling() {
    this._horizontalPodAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalPodAutoscalingInput() {
    return this._horizontalPodAutoscaling.internalValue;
  }

  // http_load_balancing - computed: false, optional: true, required: false
  private _httpLoadBalancing = new GoogleContainerClusterAddonsConfigHttpLoadBalancingOutputReference(this, "http_load_balancing");
  public get httpLoadBalancing() {
    return this._httpLoadBalancing;
  }
  public putHttpLoadBalancing(value: GoogleContainerClusterAddonsConfigHttpLoadBalancing) {
    this._httpLoadBalancing.internalValue = value;
  }
  public resetHttpLoadBalancing() {
    this._httpLoadBalancing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLoadBalancingInput() {
    return this._httpLoadBalancing.internalValue;
  }

  // istio_config - computed: false, optional: true, required: false
  private _istioConfig = new GoogleContainerClusterAddonsConfigIstioConfigOutputReference(this, "istio_config");
  public get istioConfig() {
    return this._istioConfig;
  }
  public putIstioConfig(value: GoogleContainerClusterAddonsConfigIstioConfig) {
    this._istioConfig.internalValue = value;
  }
  public resetIstioConfig() {
    this._istioConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioConfigInput() {
    return this._istioConfig.internalValue;
  }

  // kalm_config - computed: false, optional: true, required: false
  private _kalmConfig = new GoogleContainerClusterAddonsConfigKalmConfigOutputReference(this, "kalm_config");
  public get kalmConfig() {
    return this._kalmConfig;
  }
  public putKalmConfig(value: GoogleContainerClusterAddonsConfigKalmConfig) {
    this._kalmConfig.internalValue = value;
  }
  public resetKalmConfig() {
    this._kalmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kalmConfigInput() {
    return this._kalmConfig.internalValue;
  }

  // lustre_csi_driver_config - computed: false, optional: true, required: false
  private _lustreCsiDriverConfig = new GoogleContainerClusterAddonsConfigLustreCsiDriverConfigOutputReference(this, "lustre_csi_driver_config");
  public get lustreCsiDriverConfig() {
    return this._lustreCsiDriverConfig;
  }
  public putLustreCsiDriverConfig(value: GoogleContainerClusterAddonsConfigLustreCsiDriverConfig) {
    this._lustreCsiDriverConfig.internalValue = value;
  }
  public resetLustreCsiDriverConfig() {
    this._lustreCsiDriverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lustreCsiDriverConfigInput() {
    return this._lustreCsiDriverConfig.internalValue;
  }

  // network_policy_config - computed: false, optional: true, required: false
  private _networkPolicyConfig = new GoogleContainerClusterAddonsConfigNetworkPolicyConfigOutputReference(this, "network_policy_config");
  public get networkPolicyConfig() {
    return this._networkPolicyConfig;
  }
  public putNetworkPolicyConfig(value: GoogleContainerClusterAddonsConfigNetworkPolicyConfig) {
    this._networkPolicyConfig.internalValue = value;
  }
  public resetNetworkPolicyConfig() {
    this._networkPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyConfigInput() {
    return this._networkPolicyConfig.internalValue;
  }

  // parallelstore_csi_driver_config - computed: false, optional: true, required: false
  private _parallelstoreCsiDriverConfig = new GoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfigOutputReference(this, "parallelstore_csi_driver_config");
  public get parallelstoreCsiDriverConfig() {
    return this._parallelstoreCsiDriverConfig;
  }
  public putParallelstoreCsiDriverConfig(value: GoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfig) {
    this._parallelstoreCsiDriverConfig.internalValue = value;
  }
  public resetParallelstoreCsiDriverConfig() {
    this._parallelstoreCsiDriverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelstoreCsiDriverConfigInput() {
    return this._parallelstoreCsiDriverConfig.internalValue;
  }

  // pod_snapshot_config - computed: false, optional: true, required: false
  private _podSnapshotConfig = new GoogleContainerClusterAddonsConfigPodSnapshotConfigOutputReference(this, "pod_snapshot_config");
  public get podSnapshotConfig() {
    return this._podSnapshotConfig;
  }
  public putPodSnapshotConfig(value: GoogleContainerClusterAddonsConfigPodSnapshotConfig) {
    this._podSnapshotConfig.internalValue = value;
  }
  public resetPodSnapshotConfig() {
    this._podSnapshotConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSnapshotConfigInput() {
    return this._podSnapshotConfig.internalValue;
  }

  // ray_operator_config - computed: false, optional: true, required: false
  private _rayOperatorConfig = new GoogleContainerClusterAddonsConfigRayOperatorConfigList(this, "ray_operator_config", false);
  public get rayOperatorConfig() {
    return this._rayOperatorConfig;
  }
  public putRayOperatorConfig(value: GoogleContainerClusterAddonsConfigRayOperatorConfig[] | cdktn.IResolvable) {
    this._rayOperatorConfig.internalValue = value;
  }
  public resetRayOperatorConfig() {
    this._rayOperatorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rayOperatorConfigInput() {
    return this._rayOperatorConfig.internalValue;
  }

  // slice_controller_config - computed: false, optional: true, required: false
  private _sliceControllerConfig = new GoogleContainerClusterAddonsConfigSliceControllerConfigOutputReference(this, "slice_controller_config");
  public get sliceControllerConfig() {
    return this._sliceControllerConfig;
  }
  public putSliceControllerConfig(value: GoogleContainerClusterAddonsConfigSliceControllerConfig) {
    this._sliceControllerConfig.internalValue = value;
  }
  public resetSliceControllerConfig() {
    this._sliceControllerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliceControllerConfigInput() {
    return this._sliceControllerConfig.internalValue;
  }

  // stateful_ha_config - computed: false, optional: true, required: false
  private _statefulHaConfig = new GoogleContainerClusterAddonsConfigStatefulHaConfigOutputReference(this, "stateful_ha_config");
  public get statefulHaConfig() {
    return this._statefulHaConfig;
  }
  public putStatefulHaConfig(value: GoogleContainerClusterAddonsConfigStatefulHaConfig) {
    this._statefulHaConfig.internalValue = value;
  }
  public resetStatefulHaConfig() {
    this._statefulHaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulHaConfigInput() {
    return this._statefulHaConfig.internalValue;
  }
}
export interface GoogleContainerClusterAnonymousAuthenticationConfig {
  /**
  * Setting this to LIMITED will restrict authentication of anonymous users to health check endpoints only.
  *  Accepted values are:
  * * ENABLED: Authentication of anonymous users is enabled for all endpoints.
  * * LIMITED: Anonymous access is only allowed for health check endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#mode GoogleContainerCluster#mode}
  */
  readonly mode: string;
}

export function googleContainerClusterAnonymousAuthenticationConfigToTerraform(struct?: GoogleContainerClusterAnonymousAuthenticationConfigOutputReference | GoogleContainerClusterAnonymousAuthenticationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function googleContainerClusterAnonymousAuthenticationConfigToHclTerraform(struct?: GoogleContainerClusterAnonymousAuthenticationConfigOutputReference | GoogleContainerClusterAnonymousAuthenticationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAnonymousAuthenticationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAnonymousAuthenticationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAnonymousAuthenticationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface GoogleContainerClusterAuthenticatorGroupsConfig {
  /**
  * The name of the RBAC security group for use with Google security groups in Kubernetes RBAC. Group name must be in format gke-security-groups@yourdomain.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#security_group GoogleContainerCluster#security_group}
  */
  readonly securityGroup: string;
}

export function googleContainerClusterAuthenticatorGroupsConfigToTerraform(struct?: GoogleContainerClusterAuthenticatorGroupsConfigOutputReference | GoogleContainerClusterAuthenticatorGroupsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group: cdktn.stringToTerraform(struct!.securityGroup),
  }
}


export function googleContainerClusterAuthenticatorGroupsConfigToHclTerraform(struct?: GoogleContainerClusterAuthenticatorGroupsConfigOutputReference | GoogleContainerClusterAuthenticatorGroupsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group: {
      value: cdktn.stringToHclTerraform(struct!.securityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAuthenticatorGroupsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAuthenticatorGroupsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAuthenticatorGroupsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroup = value.securityGroup;
    }
  }

  // security_group - computed: false, optional: false, required: true
  private _securityGroup?: string; 
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
  public set securityGroup(value: string) {
    this._securityGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }
}
export interface GoogleContainerClusterAutopilotClusterPolicyConfig {
  /**
  * If true, prevents standard node pools and requires only autopilot node pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#no_standard_node_pools GoogleContainerCluster#no_standard_node_pools}
  */
  readonly noStandardNodePools?: boolean | cdktn.IResolvable;
  /**
  * If true, prevents impersonation and CSRs for GKE System users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#no_system_impersonation GoogleContainerCluster#no_system_impersonation}
  */
  readonly noSystemImpersonation?: boolean | cdktn.IResolvable;
  /**
  * If true, prevents creation and mutation of resources in GKE managed namespaces and cluster-scoped GKE managed resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#no_system_mutation GoogleContainerCluster#no_system_mutation}
  */
  readonly noSystemMutation?: boolean | cdktn.IResolvable;
  /**
  * If true, unsafe webhooks are not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#no_unsafe_webhooks GoogleContainerCluster#no_unsafe_webhooks}
  */
  readonly noUnsafeWebhooks?: boolean | cdktn.IResolvable;
}

export function googleContainerClusterAutopilotClusterPolicyConfigToTerraform(struct?: GoogleContainerClusterAutopilotClusterPolicyConfigOutputReference | GoogleContainerClusterAutopilotClusterPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_standard_node_pools: cdktn.booleanToTerraform(struct!.noStandardNodePools),
    no_system_impersonation: cdktn.booleanToTerraform(struct!.noSystemImpersonation),
    no_system_mutation: cdktn.booleanToTerraform(struct!.noSystemMutation),
    no_unsafe_webhooks: cdktn.booleanToTerraform(struct!.noUnsafeWebhooks),
  }
}


export function googleContainerClusterAutopilotClusterPolicyConfigToHclTerraform(struct?: GoogleContainerClusterAutopilotClusterPolicyConfigOutputReference | GoogleContainerClusterAutopilotClusterPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_standard_node_pools: {
      value: cdktn.booleanToHclTerraform(struct!.noStandardNodePools),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_system_impersonation: {
      value: cdktn.booleanToHclTerraform(struct!.noSystemImpersonation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_system_mutation: {
      value: cdktn.booleanToHclTerraform(struct!.noSystemMutation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_unsafe_webhooks: {
      value: cdktn.booleanToHclTerraform(struct!.noUnsafeWebhooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterAutopilotClusterPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterAutopilotClusterPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noStandardNodePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStandardNodePools = this._noStandardNodePools;
    }
    if (this._noSystemImpersonation !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSystemImpersonation = this._noSystemImpersonation;
    }
    if (this._noSystemMutation !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSystemMutation = this._noSystemMutation;
    }
    if (this._noUnsafeWebhooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.noUnsafeWebhooks = this._noUnsafeWebhooks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterAutopilotClusterPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noStandardNodePools = undefined;
      this._noSystemImpersonation = undefined;
      this._noSystemMutation = undefined;
      this._noUnsafeWebhooks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noStandardNodePools = value.noStandardNodePools;
      this._noSystemImpersonation = value.noSystemImpersonation;
      this._noSystemMutation = value.noSystemMutation;
      this._noUnsafeWebhooks = value.noUnsafeWebhooks;
    }
  }

  // no_standard_node_pools - computed: false, optional: true, required: false
  private _noStandardNodePools?: boolean | cdktn.IResolvable; 
  public get noStandardNodePools() {
    return this.getBooleanAttribute('no_standard_node_pools');
  }
  public set noStandardNodePools(value: boolean | cdktn.IResolvable) {
    this._noStandardNodePools = value;
  }
  public resetNoStandardNodePools() {
    this._noStandardNodePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStandardNodePoolsInput() {
    return this._noStandardNodePools;
  }

  // no_system_impersonation - computed: false, optional: true, required: false
  private _noSystemImpersonation?: boolean | cdktn.IResolvable; 
  public get noSystemImpersonation() {
    return this.getBooleanAttribute('no_system_impersonation');
  }
  public set noSystemImpersonation(value: boolean | cdktn.IResolvable) {
    this._noSystemImpersonation = value;
  }
  public resetNoSystemImpersonation() {
    this._noSystemImpersonation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSystemImpersonationInput() {
    return this._noSystemImpersonation;
  }

  // no_system_mutation - computed: false, optional: true, required: false
  private _noSystemMutation?: boolean | cdktn.IResolvable; 
  public get noSystemMutation() {
    return this.getBooleanAttribute('no_system_mutation');
  }
  public set noSystemMutation(value: boolean | cdktn.IResolvable) {
    this._noSystemMutation = value;
  }
  public resetNoSystemMutation() {
    this._noSystemMutation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSystemMutationInput() {
    return this._noSystemMutation;
  }

  // no_unsafe_webhooks - computed: false, optional: true, required: false
  private _noUnsafeWebhooks?: boolean | cdktn.IResolvable; 
  public get noUnsafeWebhooks() {
    return this.getBooleanAttribute('no_unsafe_webhooks');
  }
  public set noUnsafeWebhooks(value: boolean | cdktn.IResolvable) {
    this._noUnsafeWebhooks = value;
  }
  public resetNoUnsafeWebhooks() {
    this._noUnsafeWebhooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noUnsafeWebhooksInput() {
    return this._noUnsafeWebhooks;
  }
}
export interface GoogleContainerClusterBinaryAuthorization {
  /**
  * Enable Binary Authorization for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Mode of operation for Binary Authorization policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#evaluation_mode GoogleContainerCluster#evaluation_mode}
  */
  readonly evaluationMode?: string;
}

export function googleContainerClusterBinaryAuthorizationToTerraform(struct?: GoogleContainerClusterBinaryAuthorizationOutputReference | GoogleContainerClusterBinaryAuthorization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    evaluation_mode: cdktn.stringToTerraform(struct!.evaluationMode),
  }
}


export function googleContainerClusterBinaryAuthorizationToHclTerraform(struct?: GoogleContainerClusterBinaryAuthorizationOutputReference | GoogleContainerClusterBinaryAuthorization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    evaluation_mode: {
      value: cdktn.stringToHclTerraform(struct!.evaluationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterBinaryAuthorizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterBinaryAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._evaluationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationMode = this._evaluationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterBinaryAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._evaluationMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._evaluationMode = value.evaluationMode;
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

  // evaluation_mode - computed: true, optional: true, required: false
  private _evaluationMode?: string; 
  public get evaluationMode() {
    return this.getStringAttribute('evaluation_mode');
  }
  public set evaluationMode(value: string) {
    this._evaluationMode = value;
  }
  public resetEvaluationMode() {
    this._evaluationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationModeInput() {
    return this._evaluationMode;
  }
}
export interface GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions {
}

export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsToTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_upgrade_start_time - computed: true, optional: false, required: false
  public get autoUpgradeStartTime() {
    return this.getStringAttribute('auto_upgrade_start_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsOutputReference {
    return new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement {
  /**
  * Specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#auto_repair GoogleContainerCluster#auto_repair}
  */
  readonly autoRepair?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#auto_upgrade GoogleContainerCluster#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktn.IResolvable;
}

export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementToTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktn.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktn.booleanToTerraform(struct!.autoUpgrade),
  }
}


export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_repair: {
      value: cdktn.booleanToHclTerraform(struct!.autoRepair),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_upgrade: {
      value: cdktn.booleanToHclTerraform(struct!.autoUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRepair !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRepair = this._autoRepair;
    }
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRepair = undefined;
      this._autoUpgrade = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRepair = value.autoRepair;
      this._autoUpgrade = value.autoUpgrade;
    }
  }

  // auto_repair - computed: true, optional: true, required: false
  private _autoRepair?: boolean | cdktn.IResolvable; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }
  public set autoRepair(value: boolean | cdktn.IResolvable) {
    this._autoRepair = value;
  }
  public resetAutoRepair() {
    this._autoRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairInput() {
    return this._autoRepair;
  }

  // auto_upgrade - computed: true, optional: true, required: false
  private _autoUpgrade?: boolean | cdktn.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
  public set autoUpgrade(value: boolean | cdktn.IResolvable) {
    this._autoUpgrade = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade;
  }

  // upgrade_options - computed: true, optional: false, required: false
  private _upgradeOptions = new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsList(this, "upgrade_options", false);
  public get upgradeOptions() {
    return this._upgradeOptions;
  }
}
export interface GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_integrity_monitoring GoogleContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktn.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_secure_boot GoogleContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktn.IResolvable;
}

export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigToTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktn.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktn.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktn.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktn.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktn.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktn.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktn.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktn.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }
}
export interface GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
  /**
  * Number of blue nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#batch_node_count GoogleContainerCluster#batch_node_count}
  */
  readonly batchNodeCount?: number;
  /**
  * Percentage of the bool pool nodes to drain in a batch. The range of this field should be (0.0, 1.0].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#batch_percentage GoogleContainerCluster#batch_percentage}
  */
  readonly batchPercentage?: number;
  /**
  * Soak time after each batch gets drained.
  * 
  * 																			A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#batch_soak_duration GoogleContainerCluster#batch_soak_duration}
  */
  readonly batchSoakDuration?: string;
}

export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_node_count: cdktn.numberToTerraform(struct!.batchNodeCount),
    batch_percentage: cdktn.numberToTerraform(struct!.batchPercentage),
    batch_soak_duration: cdktn.stringToTerraform(struct!.batchSoakDuration),
  }
}


export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_node_count: {
      value: cdktn.numberToHclTerraform(struct!.batchNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_percentage: {
      value: cdktn.numberToHclTerraform(struct!.batchPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_soak_duration: {
      value: cdktn.stringToHclTerraform(struct!.batchSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchNodeCount = this._batchNodeCount;
    }
    if (this._batchPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchPercentage = this._batchPercentage;
    }
    if (this._batchSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSoakDuration = this._batchSoakDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchNodeCount = undefined;
      this._batchPercentage = undefined;
      this._batchSoakDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchNodeCount = value.batchNodeCount;
      this._batchPercentage = value.batchPercentage;
      this._batchSoakDuration = value.batchSoakDuration;
    }
  }

  // batch_node_count - computed: true, optional: true, required: false
  private _batchNodeCount?: number; 
  public get batchNodeCount() {
    return this.getNumberAttribute('batch_node_count');
  }
  public set batchNodeCount(value: number) {
    this._batchNodeCount = value;
  }
  public resetBatchNodeCount() {
    this._batchNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchNodeCountInput() {
    return this._batchNodeCount;
  }

  // batch_percentage - computed: true, optional: true, required: false
  private _batchPercentage?: number; 
  public get batchPercentage() {
    return this.getNumberAttribute('batch_percentage');
  }
  public set batchPercentage(value: number) {
    this._batchPercentage = value;
  }
  public resetBatchPercentage() {
    this._batchPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchPercentageInput() {
    return this._batchPercentage;
  }

  // batch_soak_duration - computed: false, optional: true, required: false
  private _batchSoakDuration?: string; 
  public get batchSoakDuration() {
    return this.getStringAttribute('batch_soak_duration');
  }
  public set batchSoakDuration(value: string) {
    this._batchSoakDuration = value;
  }
  public resetBatchSoakDuration() {
    this._batchSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSoakDurationInput() {
    return this._batchSoakDuration;
  }
}
export interface GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings {
  /**
  * Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
  * 
  * 																A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#node_pool_soak_duration GoogleContainerCluster#node_pool_soak_duration}
  */
  readonly nodePoolSoakDuration?: string;
  /**
  * standard_rollout_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#standard_rollout_policy GoogleContainerCluster#standard_rollout_policy}
  */
  readonly standardRolloutPolicy?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}

export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsToTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_pool_soak_duration: cdktn.stringToTerraform(struct!.nodePoolSoakDuration),
    standard_rollout_policy: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct!.standardRolloutPolicy),
  }
}


export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_pool_soak_duration: {
      value: cdktn.stringToHclTerraform(struct!.nodePoolSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_rollout_policy: {
      value: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct!.standardRolloutPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodePoolSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolSoakDuration = this._nodePoolSoakDuration;
    }
    if (this._standardRolloutPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardRolloutPolicy = this._standardRolloutPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodePoolSoakDuration = undefined;
      this._standardRolloutPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodePoolSoakDuration = value.nodePoolSoakDuration;
      this._standardRolloutPolicy.internalValue = value.standardRolloutPolicy;
    }
  }

  // node_pool_soak_duration - computed: true, optional: true, required: false
  private _nodePoolSoakDuration?: string; 
  public get nodePoolSoakDuration() {
    return this.getStringAttribute('node_pool_soak_duration');
  }
  public set nodePoolSoakDuration(value: string) {
    this._nodePoolSoakDuration = value;
  }
  public resetNodePoolSoakDuration() {
    this._nodePoolSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolSoakDurationInput() {
    return this._nodePoolSoakDuration;
  }

  // standard_rollout_policy - computed: false, optional: true, required: false
  private _standardRolloutPolicy = new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(this, "standard_rollout_policy");
  public get standardRolloutPolicy() {
    return this._standardRolloutPolicy;
  }
  public putStandardRolloutPolicy(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy) {
    this._standardRolloutPolicy.internalValue = value;
  }
  public resetStandardRolloutPolicy() {
    this._standardRolloutPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardRolloutPolicyInput() {
    return this._standardRolloutPolicy.internalValue;
  }
}
export interface GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings {
  /**
  * The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#max_surge GoogleContainerCluster#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#max_unavailable GoogleContainerCluster#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Update strategy of the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#strategy GoogleContainerCluster#strategy}
  */
  readonly strategy?: string;
  /**
  * blue_green_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#blue_green_settings GoogleContainerCluster#blue_green_settings}
  */
  readonly blueGreenSettings?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings;
}

export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsToTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktn.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktn.numberToTerraform(struct!.maxUnavailable),
    strategy: cdktn.stringToTerraform(struct!.strategy),
    blue_green_settings: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsToTerraform(struct!.blueGreenSettings),
  }
}


export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktn.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktn.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktn.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blue_green_settings: {
      value: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsToHclTerraform(struct!.blueGreenSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._blueGreenSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueGreenSettings = this._blueGreenSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
      this._strategy = undefined;
      this._blueGreenSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
      this._strategy = value.strategy;
      this._blueGreenSettings.internalValue = value.blueGreenSettings;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // blue_green_settings - computed: false, optional: true, required: false
  private _blueGreenSettings = new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference(this, "blue_green_settings");
  public get blueGreenSettings() {
    return this._blueGreenSettings;
  }
  public putBlueGreenSettings(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings) {
    this._blueGreenSettings.internalValue = value;
  }
  public resetBlueGreenSettings() {
    this._blueGreenSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenSettingsInput() {
    return this._blueGreenSettings.internalValue;
  }
}
export interface GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#boot_disk_kms_key GoogleContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disk_size GoogleContainerCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the disk attached to each node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disk_type GoogleContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * The default image type used by NAP once a new node pool is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#image_type GoogleContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#min_cpu_platform GoogleContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Scopes that are used by NAP when creating node pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#oauth_scopes GoogleContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#service_account GoogleContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#management GoogleContainerCluster#management}
  */
  readonly management?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#shielded_instance_config GoogleContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#upgrade_settings GoogleContainerCluster#upgrade_settings}
  */
  readonly upgradeSettings?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings;
}

export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsToTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktn.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size: cdktn.numberToTerraform(struct!.diskSize),
    disk_type: cdktn.stringToTerraform(struct!.diskType),
    image_type: cdktn.stringToTerraform(struct!.imageType),
    min_cpu_platform: cdktn.stringToTerraform(struct!.minCpuPlatform),
    oauth_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.oauthScopes),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
    management: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementToTerraform(struct!.management),
    shielded_instance_config: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    upgrade_settings: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsToTerraform(struct!.upgradeSettings),
  }
}


export function googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference | GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_kms_key: {
      value: cdktn.stringToHclTerraform(struct!.bootDiskKmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktn.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktn.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_type: {
      value: cdktn.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu_platform: {
      value: cdktn.stringToHclTerraform(struct!.minCpuPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management: {
      value: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementToHclTerraform(struct!.management),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementList",
    },
    shielded_instance_config: {
      value: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigList",
    },
    upgrade_settings: {
      value: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsToHclTerraform(struct!.upgradeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._management?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._upgradeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSettings = this._upgradeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._imageType = undefined;
      this._minCpuPlatform = undefined;
      this._oauthScopes = undefined;
      this._serviceAccount = undefined;
      this._management.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._upgradeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._imageType = value.imageType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._oauthScopes = value.oauthScopes;
      this._serviceAccount = value.serviceAccount;
      this._management.internalValue = value.management;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._upgradeSettings.internalValue = value.upgradeSettings;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // image_type - computed: false, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // min_cpu_platform - computed: false, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // management - computed: false, optional: true, required: false
  private _management = new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }
}
export interface GoogleContainerClusterClusterAutoscalingResourceLimits {
  /**
  * Maximum amount of the resource in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#maximum GoogleContainerCluster#maximum}
  */
  readonly maximum: number;
  /**
  * Minimum amount of the resource in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#minimum GoogleContainerCluster#minimum}
  */
  readonly minimum?: number;
  /**
  * The type of the resource. For example, cpu and memory. See the guide to using Node Auto-Provisioning for a list of types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#resource_type GoogleContainerCluster#resource_type}
  */
  readonly resourceType: string;
}

export function googleContainerClusterClusterAutoscalingResourceLimitsToTerraform(struct?: GoogleContainerClusterClusterAutoscalingResourceLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktn.numberToTerraform(struct!.maximum),
    minimum: cdktn.numberToTerraform(struct!.minimum),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
  }
}


export function googleContainerClusterClusterAutoscalingResourceLimitsToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingResourceLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum: {
      value: cdktn.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktn.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingResourceLimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterClusterAutoscalingResourceLimits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscalingResourceLimits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._resourceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._resourceType = value.resourceType;
    }
  }

  // maximum - computed: false, optional: false, required: true
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class GoogleContainerClusterClusterAutoscalingResourceLimitsList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterClusterAutoscalingResourceLimits[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterClusterAutoscalingResourceLimitsOutputReference {
    return new GoogleContainerClusterClusterAutoscalingResourceLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterClusterAutoscaling {
  /**
  * The list of Google Compute Engine zones in which the NodePool's nodes can be created by NAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#auto_provisioning_locations GoogleContainerCluster#auto_provisioning_locations}
  */
  readonly autoProvisioningLocations?: string[];
  /**
  * Configuration options for the Autoscaling profile feature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability when deciding to remove nodes from a cluster. Can be BALANCED or OPTIMIZE_UTILIZATION. Defaults to BALANCED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#autoscaling_profile GoogleContainerCluster#autoscaling_profile}
  */
  readonly autoscalingProfile?: string;
  /**
  * Specifies whether default compute class behaviour is enabled. If enabled, cluster autoscaler will use Compute Class with name default for all the workloads, if not overriden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#default_compute_class_enabled GoogleContainerCluster#default_compute_class_enabled}
  */
  readonly defaultComputeClassEnabled?: boolean | cdktn.IResolvable;
  /**
  * Whether node auto-provisioning is enabled. Resource limits for cpu and memory must be defined to enable node auto-provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * auto_provisioning_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#auto_provisioning_defaults GoogleContainerCluster#auto_provisioning_defaults}
  */
  readonly autoProvisioningDefaults?: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults;
  /**
  * resource_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#resource_limits GoogleContainerCluster#resource_limits}
  */
  readonly resourceLimits?: GoogleContainerClusterClusterAutoscalingResourceLimits[] | cdktn.IResolvable;
}

export function googleContainerClusterClusterAutoscalingToTerraform(struct?: GoogleContainerClusterClusterAutoscalingOutputReference | GoogleContainerClusterClusterAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_provisioning_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.autoProvisioningLocations),
    autoscaling_profile: cdktn.stringToTerraform(struct!.autoscalingProfile),
    default_compute_class_enabled: cdktn.booleanToTerraform(struct!.defaultComputeClassEnabled),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    auto_provisioning_defaults: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsToTerraform(struct!.autoProvisioningDefaults),
    resource_limits: cdktn.listMapper(googleContainerClusterClusterAutoscalingResourceLimitsToTerraform, true)(struct!.resourceLimits),
  }
}


export function googleContainerClusterClusterAutoscalingToHclTerraform(struct?: GoogleContainerClusterClusterAutoscalingOutputReference | GoogleContainerClusterClusterAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_provisioning_locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.autoProvisioningLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    autoscaling_profile: {
      value: cdktn.stringToHclTerraform(struct!.autoscalingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_compute_class_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.defaultComputeClassEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_provisioning_defaults: {
      value: googleContainerClusterClusterAutoscalingAutoProvisioningDefaultsToHclTerraform(struct!.autoProvisioningDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsList",
    },
    resource_limits: {
      value: cdktn.listMapperHcl(googleContainerClusterClusterAutoscalingResourceLimitsToHclTerraform, true)(struct!.resourceLimits),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterClusterAutoscalingResourceLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterAutoscalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoProvisioningLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoProvisioningLocations = this._autoProvisioningLocations;
    }
    if (this._autoscalingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingProfile = this._autoscalingProfile;
    }
    if (this._defaultComputeClassEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultComputeClassEnabled = this._defaultComputeClassEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._autoProvisioningDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoProvisioningDefaults = this._autoProvisioningDefaults?.internalValue;
    }
    if (this._resourceLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoProvisioningLocations = undefined;
      this._autoscalingProfile = undefined;
      this._defaultComputeClassEnabled = undefined;
      this._enabled = undefined;
      this._autoProvisioningDefaults.internalValue = undefined;
      this._resourceLimits.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoProvisioningLocations = value.autoProvisioningLocations;
      this._autoscalingProfile = value.autoscalingProfile;
      this._defaultComputeClassEnabled = value.defaultComputeClassEnabled;
      this._enabled = value.enabled;
      this._autoProvisioningDefaults.internalValue = value.autoProvisioningDefaults;
      this._resourceLimits.internalValue = value.resourceLimits;
    }
  }

  // auto_provisioning_locations - computed: true, optional: true, required: false
  private _autoProvisioningLocations?: string[]; 
  public get autoProvisioningLocations() {
    return this.getListAttribute('auto_provisioning_locations');
  }
  public set autoProvisioningLocations(value: string[]) {
    this._autoProvisioningLocations = value;
  }
  public resetAutoProvisioningLocations() {
    this._autoProvisioningLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoProvisioningLocationsInput() {
    return this._autoProvisioningLocations;
  }

  // autoscaling_profile - computed: false, optional: true, required: false
  private _autoscalingProfile?: string; 
  public get autoscalingProfile() {
    return this.getStringAttribute('autoscaling_profile');
  }
  public set autoscalingProfile(value: string) {
    this._autoscalingProfile = value;
  }
  public resetAutoscalingProfile() {
    this._autoscalingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingProfileInput() {
    return this._autoscalingProfile;
  }

  // default_compute_class_enabled - computed: false, optional: true, required: false
  private _defaultComputeClassEnabled?: boolean | cdktn.IResolvable; 
  public get defaultComputeClassEnabled() {
    return this.getBooleanAttribute('default_compute_class_enabled');
  }
  public set defaultComputeClassEnabled(value: boolean | cdktn.IResolvable) {
    this._defaultComputeClassEnabled = value;
  }
  public resetDefaultComputeClassEnabled() {
    this._defaultComputeClassEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultComputeClassEnabledInput() {
    return this._defaultComputeClassEnabled;
  }

  // enabled - computed: true, optional: true, required: false
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

  // auto_provisioning_defaults - computed: false, optional: true, required: false
  private _autoProvisioningDefaults = new GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference(this, "auto_provisioning_defaults");
  public get autoProvisioningDefaults() {
    return this._autoProvisioningDefaults;
  }
  public putAutoProvisioningDefaults(value: GoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults) {
    this._autoProvisioningDefaults.internalValue = value;
  }
  public resetAutoProvisioningDefaults() {
    this._autoProvisioningDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoProvisioningDefaultsInput() {
    return this._autoProvisioningDefaults.internalValue;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits = new GoogleContainerClusterClusterAutoscalingResourceLimitsList(this, "resource_limits", false);
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: GoogleContainerClusterClusterAutoscalingResourceLimits[] | cdktn.IResolvable) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }
}
export interface GoogleContainerClusterClusterTelemetry {
  /**
  * Type of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#type GoogleContainerCluster#type}
  */
  readonly type: string;
}

export function googleContainerClusterClusterTelemetryToTerraform(struct?: GoogleContainerClusterClusterTelemetryOutputReference | GoogleContainerClusterClusterTelemetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function googleContainerClusterClusterTelemetryToHclTerraform(struct?: GoogleContainerClusterClusterTelemetryOutputReference | GoogleContainerClusterClusterTelemetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterClusterTelemetryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterClusterTelemetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterClusterTelemetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleContainerClusterConfidentialNodes {
  /**
  * Defines the type of technology used by the confidential node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#confidential_instance_type GoogleContainerCluster#confidential_instance_type}
  */
  readonly confidentialInstanceType?: string;
  /**
  * Whether Confidential Nodes feature is enabled for all nodes in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterConfidentialNodesToTerraform(struct?: GoogleContainerClusterConfidentialNodesOutputReference | GoogleContainerClusterConfidentialNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidential_instance_type: cdktn.stringToTerraform(struct!.confidentialInstanceType),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterConfidentialNodesToHclTerraform(struct?: GoogleContainerClusterConfidentialNodesOutputReference | GoogleContainerClusterConfidentialNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidential_instance_type: {
      value: cdktn.stringToHclTerraform(struct!.confidentialInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class GoogleContainerClusterConfidentialNodesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterConfidentialNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidentialInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialInstanceType = this._confidentialInstanceType;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterConfidentialNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidentialInstanceType = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidentialInstanceType = value.confidentialInstanceType;
      this._enabled = value.enabled;
    }
  }

  // confidential_instance_type - computed: false, optional: true, required: false
  private _confidentialInstanceType?: string; 
  public get confidentialInstanceType() {
    return this.getStringAttribute('confidential_instance_type');
  }
  public set confidentialInstanceType(value: string) {
    this._confidentialInstanceType = value;
  }
  public resetConfidentialInstanceType() {
    this._confidentialInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceTypeInput() {
    return this._confidentialInstanceType;
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
export interface GoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig {
  /**
  * Controls whether user traffic is allowed over this endpoint. Note that GCP-managed services may still use the endpoint even if this is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#allow_external_traffic GoogleContainerCluster#allow_external_traffic}
  */
  readonly allowExternalTraffic?: boolean | cdktn.IResolvable;
  /**
  * Controls whether the k8s certs auth is allowed via dns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_k8s_certs_via_dns GoogleContainerCluster#enable_k8s_certs_via_dns}
  */
  readonly enableK8SCertsViaDns?: boolean | cdktn.IResolvable;
  /**
  * Controls whether the k8s token auth is allowed via dns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_k8s_tokens_via_dns GoogleContainerCluster#enable_k8s_tokens_via_dns}
  */
  readonly enableK8STokensViaDns?: boolean | cdktn.IResolvable;
  /**
  * The cluster's DNS endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#endpoint GoogleContainerCluster#endpoint}
  */
  readonly endpoint?: string;
}

export function googleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigToTerraform(struct?: GoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigOutputReference | GoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_external_traffic: cdktn.booleanToTerraform(struct!.allowExternalTraffic),
    enable_k8s_certs_via_dns: cdktn.booleanToTerraform(struct!.enableK8SCertsViaDns),
    enable_k8s_tokens_via_dns: cdktn.booleanToTerraform(struct!.enableK8STokensViaDns),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
  }
}


export function googleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigToHclTerraform(struct?: GoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigOutputReference | GoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_external_traffic: {
      value: cdktn.booleanToHclTerraform(struct!.allowExternalTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_k8s_certs_via_dns: {
      value: cdktn.booleanToHclTerraform(struct!.enableK8SCertsViaDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_k8s_tokens_via_dns: {
      value: cdktn.booleanToHclTerraform(struct!.enableK8STokensViaDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowExternalTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowExternalTraffic = this._allowExternalTraffic;
    }
    if (this._enableK8SCertsViaDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableK8SCertsViaDns = this._enableK8SCertsViaDns;
    }
    if (this._enableK8STokensViaDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableK8STokensViaDns = this._enableK8STokensViaDns;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowExternalTraffic = undefined;
      this._enableK8SCertsViaDns = undefined;
      this._enableK8STokensViaDns = undefined;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowExternalTraffic = value.allowExternalTraffic;
      this._enableK8SCertsViaDns = value.enableK8SCertsViaDns;
      this._enableK8STokensViaDns = value.enableK8STokensViaDns;
      this._endpoint = value.endpoint;
    }
  }

  // allow_external_traffic - computed: false, optional: true, required: false
  private _allowExternalTraffic?: boolean | cdktn.IResolvable; 
  public get allowExternalTraffic() {
    return this.getBooleanAttribute('allow_external_traffic');
  }
  public set allowExternalTraffic(value: boolean | cdktn.IResolvable) {
    this._allowExternalTraffic = value;
  }
  public resetAllowExternalTraffic() {
    this._allowExternalTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExternalTrafficInput() {
    return this._allowExternalTraffic;
  }

  // enable_k8s_certs_via_dns - computed: false, optional: true, required: false
  private _enableK8SCertsViaDns?: boolean | cdktn.IResolvable; 
  public get enableK8SCertsViaDns() {
    return this.getBooleanAttribute('enable_k8s_certs_via_dns');
  }
  public set enableK8SCertsViaDns(value: boolean | cdktn.IResolvable) {
    this._enableK8SCertsViaDns = value;
  }
  public resetEnableK8SCertsViaDns() {
    this._enableK8SCertsViaDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableK8SCertsViaDnsInput() {
    return this._enableK8SCertsViaDns;
  }

  // enable_k8s_tokens_via_dns - computed: false, optional: true, required: false
  private _enableK8STokensViaDns?: boolean | cdktn.IResolvable; 
  public get enableK8STokensViaDns() {
    return this.getBooleanAttribute('enable_k8s_tokens_via_dns');
  }
  public set enableK8STokensViaDns(value: boolean | cdktn.IResolvable) {
    this._enableK8STokensViaDns = value;
  }
  public resetEnableK8STokensViaDns() {
    this._enableK8STokensViaDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableK8STokensViaDnsInput() {
    return this._enableK8STokensViaDns;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface GoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig {
  /**
  * Controls whether to allow direct IP access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function googleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigToTerraform(struct?: GoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigOutputReference | GoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigToHclTerraform(struct?: GoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigOutputReference | GoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig | undefined) {
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
export interface GoogleContainerClusterControlPlaneEndpointsConfig {
  /**
  * dns_endpoint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#dns_endpoint_config GoogleContainerCluster#dns_endpoint_config}
  */
  readonly dnsEndpointConfig?: GoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig;
  /**
  * ip_endpoints_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#ip_endpoints_config GoogleContainerCluster#ip_endpoints_config}
  */
  readonly ipEndpointsConfig?: GoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig;
}

export function googleContainerClusterControlPlaneEndpointsConfigToTerraform(struct?: GoogleContainerClusterControlPlaneEndpointsConfigOutputReference | GoogleContainerClusterControlPlaneEndpointsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_endpoint_config: googleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigToTerraform(struct!.dnsEndpointConfig),
    ip_endpoints_config: googleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigToTerraform(struct!.ipEndpointsConfig),
  }
}


export function googleContainerClusterControlPlaneEndpointsConfigToHclTerraform(struct?: GoogleContainerClusterControlPlaneEndpointsConfigOutputReference | GoogleContainerClusterControlPlaneEndpointsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_endpoint_config: {
      value: googleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigToHclTerraform(struct!.dnsEndpointConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigList",
    },
    ip_endpoints_config: {
      value: googleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigToHclTerraform(struct!.ipEndpointsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterControlPlaneEndpointsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterControlPlaneEndpointsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsEndpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsEndpointConfig = this._dnsEndpointConfig?.internalValue;
    }
    if (this._ipEndpointsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEndpointsConfig = this._ipEndpointsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterControlPlaneEndpointsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsEndpointConfig.internalValue = undefined;
      this._ipEndpointsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsEndpointConfig.internalValue = value.dnsEndpointConfig;
      this._ipEndpointsConfig.internalValue = value.ipEndpointsConfig;
    }
  }

  // dns_endpoint_config - computed: false, optional: true, required: false
  private _dnsEndpointConfig = new GoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigOutputReference(this, "dns_endpoint_config");
  public get dnsEndpointConfig() {
    return this._dnsEndpointConfig;
  }
  public putDnsEndpointConfig(value: GoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig) {
    this._dnsEndpointConfig.internalValue = value;
  }
  public resetDnsEndpointConfig() {
    this._dnsEndpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsEndpointConfigInput() {
    return this._dnsEndpointConfig.internalValue;
  }

  // ip_endpoints_config - computed: false, optional: true, required: false
  private _ipEndpointsConfig = new GoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigOutputReference(this, "ip_endpoints_config");
  public get ipEndpointsConfig() {
    return this._ipEndpointsConfig;
  }
  public putIpEndpointsConfig(value: GoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig) {
    this._ipEndpointsConfig.internalValue = value;
  }
  public resetIpEndpointsConfig() {
    this._ipEndpointsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEndpointsConfigInput() {
    return this._ipEndpointsConfig.internalValue;
  }
}
export interface GoogleContainerClusterCostManagementConfig {
  /**
  * Whether to enable GKE cost allocation. When you enable GKE cost allocation, the cluster name and namespace of your GKE workloads appear in the labels field of the billing export to BigQuery. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterCostManagementConfigToTerraform(struct?: GoogleContainerClusterCostManagementConfigOutputReference | GoogleContainerClusterCostManagementConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterCostManagementConfigToHclTerraform(struct?: GoogleContainerClusterCostManagementConfigOutputReference | GoogleContainerClusterCostManagementConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterCostManagementConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterCostManagementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterCostManagementConfig | undefined) {
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
export interface GoogleContainerClusterDatabaseEncryption {
  /**
  * The key to use to encrypt/decrypt secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#key_name GoogleContainerCluster#key_name}
  */
  readonly keyName?: string;
  /**
  * ENCRYPTED, ALL_OBJECTS_ENCRYPTION_ENABLED or DECRYPTED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#state GoogleContainerCluster#state}
  */
  readonly state: string;
}

export function googleContainerClusterDatabaseEncryptionToTerraform(struct?: GoogleContainerClusterDatabaseEncryptionOutputReference | GoogleContainerClusterDatabaseEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktn.stringToTerraform(struct!.keyName),
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function googleContainerClusterDatabaseEncryptionToHclTerraform(struct?: GoogleContainerClusterDatabaseEncryptionOutputReference | GoogleContainerClusterDatabaseEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_name: {
      value: cdktn.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterDatabaseEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterDatabaseEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterDatabaseEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyName = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyName = value.keyName;
      this._state = value.state;
    }
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface GoogleContainerClusterDefaultSnatStatus {
  /**
  * When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterDefaultSnatStatusToTerraform(struct?: GoogleContainerClusterDefaultSnatStatusOutputReference | GoogleContainerClusterDefaultSnatStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterDefaultSnatStatusToHclTerraform(struct?: GoogleContainerClusterDefaultSnatStatusOutputReference | GoogleContainerClusterDefaultSnatStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterDefaultSnatStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterDefaultSnatStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterDefaultSnatStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterDnsConfig {
  /**
  * Enable additive VPC scope DNS in a GKE cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#additive_vpc_scope_dns_domain GoogleContainerCluster#additive_vpc_scope_dns_domain}
  */
  readonly additiveVpcScopeDnsDomain?: string;
  /**
  * Which in-cluster DNS provider should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#cluster_dns GoogleContainerCluster#cluster_dns}
  */
  readonly clusterDns?: string;
  /**
  * The suffix used for all cluster service records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#cluster_dns_domain GoogleContainerCluster#cluster_dns_domain}
  */
  readonly clusterDnsDomain?: string;
  /**
  * The scope of access to cluster DNS records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#cluster_dns_scope GoogleContainerCluster#cluster_dns_scope}
  */
  readonly clusterDnsScope?: string;
}

export function googleContainerClusterDnsConfigToTerraform(struct?: GoogleContainerClusterDnsConfigOutputReference | GoogleContainerClusterDnsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additive_vpc_scope_dns_domain: cdktn.stringToTerraform(struct!.additiveVpcScopeDnsDomain),
    cluster_dns: cdktn.stringToTerraform(struct!.clusterDns),
    cluster_dns_domain: cdktn.stringToTerraform(struct!.clusterDnsDomain),
    cluster_dns_scope: cdktn.stringToTerraform(struct!.clusterDnsScope),
  }
}


export function googleContainerClusterDnsConfigToHclTerraform(struct?: GoogleContainerClusterDnsConfigOutputReference | GoogleContainerClusterDnsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additive_vpc_scope_dns_domain: {
      value: cdktn.stringToHclTerraform(struct!.additiveVpcScopeDnsDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_dns: {
      value: cdktn.stringToHclTerraform(struct!.clusterDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_dns_domain: {
      value: cdktn.stringToHclTerraform(struct!.clusterDnsDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_dns_scope: {
      value: cdktn.stringToHclTerraform(struct!.clusterDnsScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterDnsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additiveVpcScopeDnsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.additiveVpcScopeDnsDomain = this._additiveVpcScopeDnsDomain;
    }
    if (this._clusterDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDns = this._clusterDns;
    }
    if (this._clusterDnsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDnsDomain = this._clusterDnsDomain;
    }
    if (this._clusterDnsScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDnsScope = this._clusterDnsScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additiveVpcScopeDnsDomain = undefined;
      this._clusterDns = undefined;
      this._clusterDnsDomain = undefined;
      this._clusterDnsScope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additiveVpcScopeDnsDomain = value.additiveVpcScopeDnsDomain;
      this._clusterDns = value.clusterDns;
      this._clusterDnsDomain = value.clusterDnsDomain;
      this._clusterDnsScope = value.clusterDnsScope;
    }
  }

  // additive_vpc_scope_dns_domain - computed: false, optional: true, required: false
  private _additiveVpcScopeDnsDomain?: string; 
  public get additiveVpcScopeDnsDomain() {
    return this.getStringAttribute('additive_vpc_scope_dns_domain');
  }
  public set additiveVpcScopeDnsDomain(value: string) {
    this._additiveVpcScopeDnsDomain = value;
  }
  public resetAdditiveVpcScopeDnsDomain() {
    this._additiveVpcScopeDnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additiveVpcScopeDnsDomainInput() {
    return this._additiveVpcScopeDnsDomain;
  }

  // cluster_dns - computed: false, optional: true, required: false
  private _clusterDns?: string; 
  public get clusterDns() {
    return this.getStringAttribute('cluster_dns');
  }
  public set clusterDns(value: string) {
    this._clusterDns = value;
  }
  public resetClusterDns() {
    this._clusterDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsInput() {
    return this._clusterDns;
  }

  // cluster_dns_domain - computed: false, optional: true, required: false
  private _clusterDnsDomain?: string; 
  public get clusterDnsDomain() {
    return this.getStringAttribute('cluster_dns_domain');
  }
  public set clusterDnsDomain(value: string) {
    this._clusterDnsDomain = value;
  }
  public resetClusterDnsDomain() {
    this._clusterDnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsDomainInput() {
    return this._clusterDnsDomain;
  }

  // cluster_dns_scope - computed: false, optional: true, required: false
  private _clusterDnsScope?: string; 
  public get clusterDnsScope() {
    return this.getStringAttribute('cluster_dns_scope');
  }
  public set clusterDnsScope(value: string) {
    this._clusterDnsScope = value;
  }
  public resetClusterDnsScope() {
    this._clusterDnsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsScopeInput() {
    return this._clusterDnsScope;
  }
}
export interface GoogleContainerClusterEnableK8SBetaApis {
  /**
  * Enabled Kubernetes Beta APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled_apis GoogleContainerCluster#enabled_apis}
  */
  readonly enabledApis: string[];
}

export function googleContainerClusterEnableK8SBetaApisToTerraform(struct?: GoogleContainerClusterEnableK8SBetaApisOutputReference | GoogleContainerClusterEnableK8SBetaApis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_apis: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enabledApis),
  }
}


export function googleContainerClusterEnableK8SBetaApisToHclTerraform(struct?: GoogleContainerClusterEnableK8SBetaApisOutputReference | GoogleContainerClusterEnableK8SBetaApis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_apis: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enabledApis),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterEnableK8SBetaApisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterEnableK8SBetaApis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledApis = this._enabledApis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterEnableK8SBetaApis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledApis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledApis = value.enabledApis;
    }
  }

  // enabled_apis - computed: false, optional: false, required: true
  private _enabledApis?: string[]; 
  public get enabledApis() {
    return cdktn.Fn.tolist(this.getListAttribute('enabled_apis'));
  }
  public set enabledApis(value: string[]) {
    this._enabledApis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledApisInput() {
    return this._enabledApis;
  }
}
export interface GoogleContainerClusterEnterpriseConfig {
  /**
  * Indicates the desired cluster tier. Available options include STANDARD and ENTERPRISE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#desired_tier GoogleContainerCluster#desired_tier}
  */
  readonly desiredTier?: string;
}

export function googleContainerClusterEnterpriseConfigToTerraform(struct?: GoogleContainerClusterEnterpriseConfigOutputReference | GoogleContainerClusterEnterpriseConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_tier: cdktn.stringToTerraform(struct!.desiredTier),
  }
}


export function googleContainerClusterEnterpriseConfigToHclTerraform(struct?: GoogleContainerClusterEnterpriseConfigOutputReference | GoogleContainerClusterEnterpriseConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_tier: {
      value: cdktn.stringToHclTerraform(struct!.desiredTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterEnterpriseConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterEnterpriseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredTier = this._desiredTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterEnterpriseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desiredTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desiredTier = value.desiredTier;
    }
  }

  // cluster_tier - computed: true, optional: false, required: false
  public get clusterTier() {
    return this.getStringAttribute('cluster_tier');
  }

  // desired_tier - computed: true, optional: true, required: false
  private _desiredTier?: string; 
  public get desiredTier() {
    return this.getStringAttribute('desired_tier');
  }
  public set desiredTier(value: string) {
    this._desiredTier = value;
  }
  public resetDesiredTier() {
    this._desiredTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredTierInput() {
    return this._desiredTier;
  }
}
export interface GoogleContainerClusterFleet {
  /**
  * The type of the cluster's fleet membership.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#membership_type GoogleContainerCluster#membership_type}
  */
  readonly membershipType?: string;
  /**
  * The Fleet host project of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#project GoogleContainerCluster#project}
  */
  readonly project?: string;
}

export function googleContainerClusterFleetToTerraform(struct?: GoogleContainerClusterFleetOutputReference | GoogleContainerClusterFleet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    membership_type: cdktn.stringToTerraform(struct!.membershipType),
    project: cdktn.stringToTerraform(struct!.project),
  }
}


export function googleContainerClusterFleetToHclTerraform(struct?: GoogleContainerClusterFleetOutputReference | GoogleContainerClusterFleet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    membership_type: {
      value: cdktn.stringToHclTerraform(struct!.membershipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktn.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterFleetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._membershipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.membershipType = this._membershipType;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterFleet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._membershipType = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._membershipType = value.membershipType;
      this._project = value.project;
    }
  }

  // membership - computed: true, optional: false, required: false
  public get membership() {
    return this.getStringAttribute('membership');
  }

  // membership_id - computed: true, optional: false, required: false
  public get membershipId() {
    return this.getStringAttribute('membership_id');
  }

  // membership_location - computed: true, optional: false, required: false
  public get membershipLocation() {
    return this.getStringAttribute('membership_location');
  }

  // membership_type - computed: false, optional: true, required: false
  private _membershipType?: string; 
  public get membershipType() {
    return this.getStringAttribute('membership_type');
  }
  public set membershipType(value: string) {
    this._membershipType = value;
  }
  public resetMembershipType() {
    this._membershipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipTypeInput() {
    return this._membershipType;
  }

  // pre_registered - computed: true, optional: false, required: false
  public get preRegistered() {
    return this.getBooleanAttribute('pre_registered');
  }

  // project - computed: false, optional: true, required: false
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
}
export interface GoogleContainerClusterGatewayApiConfig {
  /**
  * The Gateway API release channel to use for Gateway API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#channel GoogleContainerCluster#channel}
  */
  readonly channel: string;
}

export function googleContainerClusterGatewayApiConfigToTerraform(struct?: GoogleContainerClusterGatewayApiConfigOutputReference | GoogleContainerClusterGatewayApiConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktn.stringToTerraform(struct!.channel),
  }
}


export function googleContainerClusterGatewayApiConfigToHclTerraform(struct?: GoogleContainerClusterGatewayApiConfigOutputReference | GoogleContainerClusterGatewayApiConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktn.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterGatewayApiConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterGatewayApiConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterGatewayApiConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channel = value.channel;
    }
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }
}
export interface GoogleContainerClusterGkeAutoUpgradeConfig {
  /**
  * The selected auto-upgrade patch type. Accepted values are:
  * * ACCELERATED: Upgrades to the latest available patch version in a given minor and release channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#patch_mode GoogleContainerCluster#patch_mode}
  */
  readonly patchMode: string;
}

export function googleContainerClusterGkeAutoUpgradeConfigToTerraform(struct?: GoogleContainerClusterGkeAutoUpgradeConfigOutputReference | GoogleContainerClusterGkeAutoUpgradeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch_mode: cdktn.stringToTerraform(struct!.patchMode),
  }
}


export function googleContainerClusterGkeAutoUpgradeConfigToHclTerraform(struct?: GoogleContainerClusterGkeAutoUpgradeConfigOutputReference | GoogleContainerClusterGkeAutoUpgradeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patch_mode: {
      value: cdktn.stringToHclTerraform(struct!.patchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterGkeAutoUpgradeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterGkeAutoUpgradeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchMode = this._patchMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterGkeAutoUpgradeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._patchMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._patchMode = value.patchMode;
    }
  }

  // patch_mode - computed: false, optional: false, required: true
  private _patchMode?: string; 
  public get patchMode() {
    return this.getStringAttribute('patch_mode');
  }
  public set patchMode(value: string) {
    this._patchMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchModeInput() {
    return this._patchMode;
  }
}
export interface GoogleContainerClusterIdentityServiceConfig {
  /**
  * Whether to enable the Identity Service component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function googleContainerClusterIdentityServiceConfigToTerraform(struct?: GoogleContainerClusterIdentityServiceConfigOutputReference | GoogleContainerClusterIdentityServiceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterIdentityServiceConfigToHclTerraform(struct?: GoogleContainerClusterIdentityServiceConfigOutputReference | GoogleContainerClusterIdentityServiceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterIdentityServiceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterIdentityServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterIdentityServiceConfig | undefined) {
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
export interface GoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfig {
  /**
  * List of secondary ranges names within this subnetwork that can be used for pod IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#pod_ipv4_range_names GoogleContainerCluster#pod_ipv4_range_names}
  */
  readonly podIpv4RangeNames?: string[];
  /**
  * Status of the subnetwork, If in draining status, subnet will not be selected for new node pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#status GoogleContainerCluster#status}
  */
  readonly status?: string;
  /**
  * Name of the subnetwork. This can be the full path of the subnetwork or just the name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#subnetwork GoogleContainerCluster#subnetwork}
  */
  readonly subnetwork: string;
}

export function googleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigToTerraform(struct?: GoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_ipv4_range_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.podIpv4RangeNames),
    status: cdktn.stringToTerraform(struct!.status),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
  }
}


export function googleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigToHclTerraform(struct?: GoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_ipv4_range_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.podIpv4RangeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktn.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podIpv4RangeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIpv4RangeNames = this._podIpv4RangeNames;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podIpv4RangeNames = undefined;
      this._status = undefined;
      this._subnetwork = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podIpv4RangeNames = value.podIpv4RangeNames;
      this._status = value.status;
      this._subnetwork = value.subnetwork;
    }
  }

  // pod_ipv4_range_names - computed: false, optional: true, required: false
  private _podIpv4RangeNames?: string[]; 
  public get podIpv4RangeNames() {
    return this.getListAttribute('pod_ipv4_range_names');
  }
  public set podIpv4RangeNames(value: string[]) {
    this._podIpv4RangeNames = value;
  }
  public resetPodIpv4RangeNames() {
    this._podIpv4RangeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIpv4RangeNamesInput() {
    return this._podIpv4RangeNames;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // subnetwork - computed: false, optional: false, required: true
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}

export class GoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigOutputReference {
    return new GoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig {
  /**
  * Name for pod secondary ipv4 range which has the actual range defined ahead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#pod_range_names GoogleContainerCluster#pod_range_names}
  */
  readonly podRangeNames: string[];
}

export function googleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigToTerraform(struct?: GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference | GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_range_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.podRangeNames),
  }
}


export function googleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigToHclTerraform(struct?: GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference | GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_range_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.podRangeNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podRangeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.podRangeNames = this._podRangeNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podRangeNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podRangeNames = value.podRangeNames;
    }
  }

  // pod_range_names - computed: false, optional: false, required: true
  private _podRangeNames?: string[]; 
  public get podRangeNames() {
    return cdktn.Fn.tolist(this.getListAttribute('pod_range_names'));
  }
  public set podRangeNames(value: string[]) {
    this._podRangeNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podRangeNamesInput() {
    return this._podRangeNames;
  }
}
export interface GoogleContainerClusterIpAllocationPolicyAutoIpamConfig {
  /**
  * The flag that enables Auto IPAM on this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterIpAllocationPolicyAutoIpamConfigToTerraform(struct?: GoogleContainerClusterIpAllocationPolicyAutoIpamConfigOutputReference | GoogleContainerClusterIpAllocationPolicyAutoIpamConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterIpAllocationPolicyAutoIpamConfigToHclTerraform(struct?: GoogleContainerClusterIpAllocationPolicyAutoIpamConfigOutputReference | GoogleContainerClusterIpAllocationPolicyAutoIpamConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterIpAllocationPolicyAutoIpamConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterIpAllocationPolicyAutoIpamConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterIpAllocationPolicyAutoIpamConfig | undefined) {
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
export interface GoogleContainerClusterIpAllocationPolicyNetworkTierConfig {
  /**
  * Network tier configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#network_tier GoogleContainerCluster#network_tier}
  */
  readonly networkTier: string;
}

export function googleContainerClusterIpAllocationPolicyNetworkTierConfigToTerraform(struct?: GoogleContainerClusterIpAllocationPolicyNetworkTierConfigOutputReference | GoogleContainerClusterIpAllocationPolicyNetworkTierConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_tier: cdktn.stringToTerraform(struct!.networkTier),
  }
}


export function googleContainerClusterIpAllocationPolicyNetworkTierConfigToHclTerraform(struct?: GoogleContainerClusterIpAllocationPolicyNetworkTierConfigOutputReference | GoogleContainerClusterIpAllocationPolicyNetworkTierConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_tier: {
      value: cdktn.stringToHclTerraform(struct!.networkTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterIpAllocationPolicyNetworkTierConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterIpAllocationPolicyNetworkTierConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTier = this._networkTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterIpAllocationPolicyNetworkTierConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkTier = value.networkTier;
    }
  }

  // network_tier - computed: false, optional: false, required: true
  private _networkTier?: string; 
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string) {
    this._networkTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierInput() {
    return this._networkTier;
  }
}
export interface GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigToTerraform(struct?: GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference | GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigToHclTerraform(struct?: GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference | GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterIpAllocationPolicy {
  /**
  * The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#cluster_ipv4_cidr_block GoogleContainerCluster#cluster_ipv4_cidr_block}
  */
  readonly clusterIpv4CidrBlock?: string;
  /**
  * The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#cluster_secondary_range_name GoogleContainerCluster#cluster_secondary_range_name}
  */
  readonly clusterSecondaryRangeName?: string;
  /**
  * The IP address range of the services IPs in this cluster. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#services_ipv4_cidr_block GoogleContainerCluster#services_ipv4_cidr_block}
  */
  readonly servicesIpv4CidrBlock?: string;
  /**
  * The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#services_secondary_range_name GoogleContainerCluster#services_secondary_range_name}
  */
  readonly servicesSecondaryRangeName?: string;
  /**
  * The IP Stack type of the cluster. Choose between IPV4 and IPV4_IPV6. Default type is IPV4 Only if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#stack_type GoogleContainerCluster#stack_type}
  */
  readonly stackType?: string;
  /**
  * additional_ip_ranges_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#additional_ip_ranges_config GoogleContainerCluster#additional_ip_ranges_config}
  */
  readonly additionalIpRangesConfig?: GoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfig[] | cdktn.IResolvable;
  /**
  * additional_pod_ranges_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#additional_pod_ranges_config GoogleContainerCluster#additional_pod_ranges_config}
  */
  readonly additionalPodRangesConfig?: GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig;
  /**
  * auto_ipam_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#auto_ipam_config GoogleContainerCluster#auto_ipam_config}
  */
  readonly autoIpamConfig?: GoogleContainerClusterIpAllocationPolicyAutoIpamConfig;
  /**
  * network_tier_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#network_tier_config GoogleContainerCluster#network_tier_config}
  */
  readonly networkTierConfig?: GoogleContainerClusterIpAllocationPolicyNetworkTierConfig;
  /**
  * pod_cidr_overprovision_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#pod_cidr_overprovision_config GoogleContainerCluster#pod_cidr_overprovision_config}
  */
  readonly podCidrOverprovisionConfig?: GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig;
}

export function googleContainerClusterIpAllocationPolicyToTerraform(struct?: GoogleContainerClusterIpAllocationPolicyOutputReference | GoogleContainerClusterIpAllocationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ipv4_cidr_block: cdktn.stringToTerraform(struct!.clusterIpv4CidrBlock),
    cluster_secondary_range_name: cdktn.stringToTerraform(struct!.clusterSecondaryRangeName),
    services_ipv4_cidr_block: cdktn.stringToTerraform(struct!.servicesIpv4CidrBlock),
    services_secondary_range_name: cdktn.stringToTerraform(struct!.servicesSecondaryRangeName),
    stack_type: cdktn.stringToTerraform(struct!.stackType),
    additional_ip_ranges_config: cdktn.listMapper(googleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigToTerraform, true)(struct!.additionalIpRangesConfig),
    additional_pod_ranges_config: googleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigToTerraform(struct!.additionalPodRangesConfig),
    auto_ipam_config: googleContainerClusterIpAllocationPolicyAutoIpamConfigToTerraform(struct!.autoIpamConfig),
    network_tier_config: googleContainerClusterIpAllocationPolicyNetworkTierConfigToTerraform(struct!.networkTierConfig),
    pod_cidr_overprovision_config: googleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigToTerraform(struct!.podCidrOverprovisionConfig),
  }
}


export function googleContainerClusterIpAllocationPolicyToHclTerraform(struct?: GoogleContainerClusterIpAllocationPolicyOutputReference | GoogleContainerClusterIpAllocationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ipv4_cidr_block: {
      value: cdktn.stringToHclTerraform(struct!.clusterIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_secondary_range_name: {
      value: cdktn.stringToHclTerraform(struct!.clusterSecondaryRangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_ipv4_cidr_block: {
      value: cdktn.stringToHclTerraform(struct!.servicesIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_secondary_range_name: {
      value: cdktn.stringToHclTerraform(struct!.servicesSecondaryRangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stack_type: {
      value: cdktn.stringToHclTerraform(struct!.stackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_ip_ranges_config: {
      value: cdktn.listMapperHcl(googleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigToHclTerraform, true)(struct!.additionalIpRangesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigList",
    },
    additional_pod_ranges_config: {
      value: googleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigToHclTerraform(struct!.additionalPodRangesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigList",
    },
    auto_ipam_config: {
      value: googleContainerClusterIpAllocationPolicyAutoIpamConfigToHclTerraform(struct!.autoIpamConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterIpAllocationPolicyAutoIpamConfigList",
    },
    network_tier_config: {
      value: googleContainerClusterIpAllocationPolicyNetworkTierConfigToHclTerraform(struct!.networkTierConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterIpAllocationPolicyNetworkTierConfigList",
    },
    pod_cidr_overprovision_config: {
      value: googleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigToHclTerraform(struct!.podCidrOverprovisionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterIpAllocationPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterIpAllocationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIpv4CidrBlock = this._clusterIpv4CidrBlock;
    }
    if (this._clusterSecondaryRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSecondaryRangeName = this._clusterSecondaryRangeName;
    }
    if (this._servicesIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesIpv4CidrBlock = this._servicesIpv4CidrBlock;
    }
    if (this._servicesSecondaryRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesSecondaryRangeName = this._servicesSecondaryRangeName;
    }
    if (this._stackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackType = this._stackType;
    }
    if (this._additionalIpRangesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalIpRangesConfig = this._additionalIpRangesConfig?.internalValue;
    }
    if (this._additionalPodRangesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPodRangesConfig = this._additionalPodRangesConfig?.internalValue;
    }
    if (this._autoIpamConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoIpamConfig = this._autoIpamConfig?.internalValue;
    }
    if (this._networkTierConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTierConfig = this._networkTierConfig?.internalValue;
    }
    if (this._podCidrOverprovisionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrOverprovisionConfig = this._podCidrOverprovisionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterIpAllocationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterIpv4CidrBlock = undefined;
      this._clusterSecondaryRangeName = undefined;
      this._servicesIpv4CidrBlock = undefined;
      this._servicesSecondaryRangeName = undefined;
      this._stackType = undefined;
      this._additionalIpRangesConfig.internalValue = undefined;
      this._additionalPodRangesConfig.internalValue = undefined;
      this._autoIpamConfig.internalValue = undefined;
      this._networkTierConfig.internalValue = undefined;
      this._podCidrOverprovisionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterIpv4CidrBlock = value.clusterIpv4CidrBlock;
      this._clusterSecondaryRangeName = value.clusterSecondaryRangeName;
      this._servicesIpv4CidrBlock = value.servicesIpv4CidrBlock;
      this._servicesSecondaryRangeName = value.servicesSecondaryRangeName;
      this._stackType = value.stackType;
      this._additionalIpRangesConfig.internalValue = value.additionalIpRangesConfig;
      this._additionalPodRangesConfig.internalValue = value.additionalPodRangesConfig;
      this._autoIpamConfig.internalValue = value.autoIpamConfig;
      this._networkTierConfig.internalValue = value.networkTierConfig;
      this._podCidrOverprovisionConfig.internalValue = value.podCidrOverprovisionConfig;
    }
  }

  // cluster_ipv4_cidr_block - computed: true, optional: true, required: false
  private _clusterIpv4CidrBlock?: string; 
  public get clusterIpv4CidrBlock() {
    return this.getStringAttribute('cluster_ipv4_cidr_block');
  }
  public set clusterIpv4CidrBlock(value: string) {
    this._clusterIpv4CidrBlock = value;
  }
  public resetClusterIpv4CidrBlock() {
    this._clusterIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv4CidrBlockInput() {
    return this._clusterIpv4CidrBlock;
  }

  // cluster_secondary_range_name - computed: true, optional: true, required: false
  private _clusterSecondaryRangeName?: string; 
  public get clusterSecondaryRangeName() {
    return this.getStringAttribute('cluster_secondary_range_name');
  }
  public set clusterSecondaryRangeName(value: string) {
    this._clusterSecondaryRangeName = value;
  }
  public resetClusterSecondaryRangeName() {
    this._clusterSecondaryRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSecondaryRangeNameInput() {
    return this._clusterSecondaryRangeName;
  }

  // services_ipv4_cidr_block - computed: true, optional: true, required: false
  private _servicesIpv4CidrBlock?: string; 
  public get servicesIpv4CidrBlock() {
    return this.getStringAttribute('services_ipv4_cidr_block');
  }
  public set servicesIpv4CidrBlock(value: string) {
    this._servicesIpv4CidrBlock = value;
  }
  public resetServicesIpv4CidrBlock() {
    this._servicesIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesIpv4CidrBlockInput() {
    return this._servicesIpv4CidrBlock;
  }

  // services_secondary_range_name - computed: true, optional: true, required: false
  private _servicesSecondaryRangeName?: string; 
  public get servicesSecondaryRangeName() {
    return this.getStringAttribute('services_secondary_range_name');
  }
  public set servicesSecondaryRangeName(value: string) {
    this._servicesSecondaryRangeName = value;
  }
  public resetServicesSecondaryRangeName() {
    this._servicesSecondaryRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesSecondaryRangeNameInput() {
    return this._servicesSecondaryRangeName;
  }

  // stack_type - computed: false, optional: true, required: false
  private _stackType?: string; 
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }
  public set stackType(value: string) {
    this._stackType = value;
  }
  public resetStackType() {
    this._stackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackTypeInput() {
    return this._stackType;
  }

  // additional_ip_ranges_config - computed: false, optional: true, required: false
  private _additionalIpRangesConfig = new GoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigList(this, "additional_ip_ranges_config", false);
  public get additionalIpRangesConfig() {
    return this._additionalIpRangesConfig;
  }
  public putAdditionalIpRangesConfig(value: GoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfig[] | cdktn.IResolvable) {
    this._additionalIpRangesConfig.internalValue = value;
  }
  public resetAdditionalIpRangesConfig() {
    this._additionalIpRangesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalIpRangesConfigInput() {
    return this._additionalIpRangesConfig.internalValue;
  }

  // additional_pod_ranges_config - computed: false, optional: true, required: false
  private _additionalPodRangesConfig = new GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference(this, "additional_pod_ranges_config");
  public get additionalPodRangesConfig() {
    return this._additionalPodRangesConfig;
  }
  public putAdditionalPodRangesConfig(value: GoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig) {
    this._additionalPodRangesConfig.internalValue = value;
  }
  public resetAdditionalPodRangesConfig() {
    this._additionalPodRangesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPodRangesConfigInput() {
    return this._additionalPodRangesConfig.internalValue;
  }

  // auto_ipam_config - computed: false, optional: true, required: false
  private _autoIpamConfig = new GoogleContainerClusterIpAllocationPolicyAutoIpamConfigOutputReference(this, "auto_ipam_config");
  public get autoIpamConfig() {
    return this._autoIpamConfig;
  }
  public putAutoIpamConfig(value: GoogleContainerClusterIpAllocationPolicyAutoIpamConfig) {
    this._autoIpamConfig.internalValue = value;
  }
  public resetAutoIpamConfig() {
    this._autoIpamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIpamConfigInput() {
    return this._autoIpamConfig.internalValue;
  }

  // network_tier_config - computed: false, optional: true, required: false
  private _networkTierConfig = new GoogleContainerClusterIpAllocationPolicyNetworkTierConfigOutputReference(this, "network_tier_config");
  public get networkTierConfig() {
    return this._networkTierConfig;
  }
  public putNetworkTierConfig(value: GoogleContainerClusterIpAllocationPolicyNetworkTierConfig) {
    this._networkTierConfig.internalValue = value;
  }
  public resetNetworkTierConfig() {
    this._networkTierConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierConfigInput() {
    return this._networkTierConfig.internalValue;
  }

  // pod_cidr_overprovision_config - computed: false, optional: true, required: false
  private _podCidrOverprovisionConfig = new GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference(this, "pod_cidr_overprovision_config");
  public get podCidrOverprovisionConfig() {
    return this._podCidrOverprovisionConfig;
  }
  public putPodCidrOverprovisionConfig(value: GoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig) {
    this._podCidrOverprovisionConfig.internalValue = value;
  }
  public resetPodCidrOverprovisionConfig() {
    this._podCidrOverprovisionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrOverprovisionConfigInput() {
    return this._podCidrOverprovisionConfig.internalValue;
  }
}
export interface GoogleContainerClusterLoggingConfig {
  /**
  * GKE components exposing logs. Valid values include SYSTEM_COMPONENTS, APISERVER, CONTROLLER_MANAGER, KCP_CONNECTION, KCP_SSHD, KCP_HPA, SCHEDULER, and WORKLOADS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_components GoogleContainerCluster#enable_components}
  */
  readonly enableComponents: string[];
}

export function googleContainerClusterLoggingConfigToTerraform(struct?: GoogleContainerClusterLoggingConfigOutputReference | GoogleContainerClusterLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_components: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enableComponents),
  }
}


export function googleContainerClusterLoggingConfigToHclTerraform(struct?: GoogleContainerClusterLoggingConfigOutputReference | GoogleContainerClusterLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_components: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enableComponents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterLoggingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableComponents = this._enableComponents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableComponents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableComponents = value.enableComponents;
    }
  }

  // enable_components - computed: false, optional: false, required: true
  private _enableComponents?: string[]; 
  public get enableComponents() {
    return this.getListAttribute('enable_components');
  }
  public set enableComponents(value: string[]) {
    this._enableComponents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableComponentsInput() {
    return this._enableComponents;
  }
}
export interface GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#start_time GoogleContainerCluster#start_time}
  */
  readonly startTime: string;
}

export function googleContainerClusterMaintenancePolicyDailyMaintenanceWindowToTerraform(struct?: GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference | GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function googleContainerClusterMaintenancePolicyDailyMaintenanceWindowToHclTerraform(struct?: GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference | GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startTime = value.startTime;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface GoogleContainerClusterMaintenancePolicyDisruptionBudget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#minor_version_disruption_interval GoogleContainerCluster#minor_version_disruption_interval}
  */
  readonly minorVersionDisruptionInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#patch_version_disruption_interval GoogleContainerCluster#patch_version_disruption_interval}
  */
  readonly patchVersionDisruptionInterval?: string;
}

export function googleContainerClusterMaintenancePolicyDisruptionBudgetToTerraform(struct?: GoogleContainerClusterMaintenancePolicyDisruptionBudgetOutputReference | GoogleContainerClusterMaintenancePolicyDisruptionBudget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minor_version_disruption_interval: cdktn.stringToTerraform(struct!.minorVersionDisruptionInterval),
    patch_version_disruption_interval: cdktn.stringToTerraform(struct!.patchVersionDisruptionInterval),
  }
}


export function googleContainerClusterMaintenancePolicyDisruptionBudgetToHclTerraform(struct?: GoogleContainerClusterMaintenancePolicyDisruptionBudgetOutputReference | GoogleContainerClusterMaintenancePolicyDisruptionBudget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minor_version_disruption_interval: {
      value: cdktn.stringToHclTerraform(struct!.minorVersionDisruptionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_version_disruption_interval: {
      value: cdktn.stringToHclTerraform(struct!.patchVersionDisruptionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMaintenancePolicyDisruptionBudgetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMaintenancePolicyDisruptionBudget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minorVersionDisruptionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minorVersionDisruptionInterval = this._minorVersionDisruptionInterval;
    }
    if (this._patchVersionDisruptionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchVersionDisruptionInterval = this._patchVersionDisruptionInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMaintenancePolicyDisruptionBudget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minorVersionDisruptionInterval = undefined;
      this._patchVersionDisruptionInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minorVersionDisruptionInterval = value.minorVersionDisruptionInterval;
      this._patchVersionDisruptionInterval = value.patchVersionDisruptionInterval;
    }
  }

  // last_disruption_time - computed: true, optional: false, required: false
  public get lastDisruptionTime() {
    return this.getStringAttribute('last_disruption_time');
  }

  // last_minor_version_disruption_time - computed: true, optional: false, required: false
  public get lastMinorVersionDisruptionTime() {
    return this.getStringAttribute('last_minor_version_disruption_time');
  }

  // minor_version_disruption_interval - computed: false, optional: true, required: false
  private _minorVersionDisruptionInterval?: string; 
  public get minorVersionDisruptionInterval() {
    return this.getStringAttribute('minor_version_disruption_interval');
  }
  public set minorVersionDisruptionInterval(value: string) {
    this._minorVersionDisruptionInterval = value;
  }
  public resetMinorVersionDisruptionInterval() {
    this._minorVersionDisruptionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minorVersionDisruptionIntervalInput() {
    return this._minorVersionDisruptionInterval;
  }

  // patch_version_disruption_interval - computed: false, optional: true, required: false
  private _patchVersionDisruptionInterval?: string; 
  public get patchVersionDisruptionInterval() {
    return this.getStringAttribute('patch_version_disruption_interval');
  }
  public set patchVersionDisruptionInterval(value: string) {
    this._patchVersionDisruptionInterval = value;
  }
  public resetPatchVersionDisruptionInterval() {
    this._patchVersionDisruptionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchVersionDisruptionIntervalInput() {
    return this._patchVersionDisruptionInterval;
  }
}
export interface GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions {
  /**
  * The behavior of the exclusion end time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#end_time_behavior GoogleContainerCluster#end_time_behavior}
  */
  readonly endTimeBehavior?: string;
  /**
  * The scope of automatic upgrades to restrict in the exclusion window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#scope GoogleContainerCluster#scope}
  */
  readonly scope: string;
}

export function googleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToTerraform(struct?: GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference | GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time_behavior: cdktn.stringToTerraform(struct!.endTimeBehavior),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function googleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToHclTerraform(struct?: GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference | GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time_behavior: {
      value: cdktn.stringToHclTerraform(struct!.endTimeBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTimeBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeBehavior = this._endTimeBehavior;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTimeBehavior = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTimeBehavior = value.endTimeBehavior;
      this._scope = value.scope;
    }
  }

  // end_time_behavior - computed: false, optional: true, required: false
  private _endTimeBehavior?: string; 
  public get endTimeBehavior() {
    return this.getStringAttribute('end_time_behavior');
  }
  public set endTimeBehavior(value: string) {
    this._endTimeBehavior = value;
  }
  public resetEndTimeBehavior() {
    this._endTimeBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeBehaviorInput() {
    return this._endTimeBehavior;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface GoogleContainerClusterMaintenancePolicyMaintenanceExclusion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#end_time GoogleContainerCluster#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#exclusion_name GoogleContainerCluster#exclusion_name}
  */
  readonly exclusionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#start_time GoogleContainerCluster#start_time}
  */
  readonly startTime: string;
  /**
  * exclusion_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#exclusion_options GoogleContainerCluster#exclusion_options}
  */
  readonly exclusionOptions?: GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions;
}

export function googleContainerClusterMaintenancePolicyMaintenanceExclusionToTerraform(struct?: GoogleContainerClusterMaintenancePolicyMaintenanceExclusion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktn.stringToTerraform(struct!.endTime),
    exclusion_name: cdktn.stringToTerraform(struct!.exclusionName),
    start_time: cdktn.stringToTerraform(struct!.startTime),
    exclusion_options: googleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToTerraform(struct!.exclusionOptions),
  }
}


export function googleContainerClusterMaintenancePolicyMaintenanceExclusionToHclTerraform(struct?: GoogleContainerClusterMaintenancePolicyMaintenanceExclusion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusion_name: {
      value: cdktn.stringToHclTerraform(struct!.exclusionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusion_options: {
      value: googleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToHclTerraform(struct!.exclusionOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterMaintenancePolicyMaintenanceExclusion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._exclusionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionName = this._exclusionName;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._exclusionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionOptions = this._exclusionOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMaintenancePolicyMaintenanceExclusion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._exclusionName = undefined;
      this._startTime = undefined;
      this._exclusionOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._exclusionName = value.exclusionName;
      this._startTime = value.startTime;
      this._exclusionOptions.internalValue = value.exclusionOptions;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // exclusion_name - computed: false, optional: false, required: true
  private _exclusionName?: string; 
  public get exclusionName() {
    return this.getStringAttribute('exclusion_name');
  }
  public set exclusionName(value: string) {
    this._exclusionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionNameInput() {
    return this._exclusionName;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // exclusion_options - computed: false, optional: true, required: false
  private _exclusionOptions = new GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference(this, "exclusion_options");
  public get exclusionOptions() {
    return this._exclusionOptions;
  }
  public putExclusionOptions(value: GoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions) {
    this._exclusionOptions.internalValue = value;
  }
  public resetExclusionOptions() {
    this._exclusionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionOptionsInput() {
    return this._exclusionOptions.internalValue;
  }
}

export class GoogleContainerClusterMaintenancePolicyMaintenanceExclusionList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterMaintenancePolicyMaintenanceExclusion[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference {
    return new GoogleContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterMaintenancePolicyRecurringWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#end_time GoogleContainerCluster#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#recurrence GoogleContainerCluster#recurrence}
  */
  readonly recurrence: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#start_time GoogleContainerCluster#start_time}
  */
  readonly startTime: string;
}

export function googleContainerClusterMaintenancePolicyRecurringWindowToTerraform(struct?: GoogleContainerClusterMaintenancePolicyRecurringWindowOutputReference | GoogleContainerClusterMaintenancePolicyRecurringWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktn.stringToTerraform(struct!.endTime),
    recurrence: cdktn.stringToTerraform(struct!.recurrence),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function googleContainerClusterMaintenancePolicyRecurringWindowToHclTerraform(struct?: GoogleContainerClusterMaintenancePolicyRecurringWindowOutputReference | GoogleContainerClusterMaintenancePolicyRecurringWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence: {
      value: cdktn.stringToHclTerraform(struct!.recurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMaintenancePolicyRecurringWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMaintenancePolicyRecurringWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._recurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMaintenancePolicyRecurringWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._recurrence = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._recurrence = value.recurrence;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // recurrence - computed: false, optional: false, required: true
  private _recurrence?: string; 
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string) {
    this._recurrence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface GoogleContainerClusterMaintenancePolicy {
  /**
  * daily_maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#daily_maintenance_window GoogleContainerCluster#daily_maintenance_window}
  */
  readonly dailyMaintenanceWindow?: GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow;
  /**
  * disruption_budget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disruption_budget GoogleContainerCluster#disruption_budget}
  */
  readonly disruptionBudget?: GoogleContainerClusterMaintenancePolicyDisruptionBudget;
  /**
  * maintenance_exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#maintenance_exclusion GoogleContainerCluster#maintenance_exclusion}
  */
  readonly maintenanceExclusion?: GoogleContainerClusterMaintenancePolicyMaintenanceExclusion[] | cdktn.IResolvable;
  /**
  * recurring_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#recurring_window GoogleContainerCluster#recurring_window}
  */
  readonly recurringWindow?: GoogleContainerClusterMaintenancePolicyRecurringWindow;
}

export function googleContainerClusterMaintenancePolicyToTerraform(struct?: GoogleContainerClusterMaintenancePolicyOutputReference | GoogleContainerClusterMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily_maintenance_window: googleContainerClusterMaintenancePolicyDailyMaintenanceWindowToTerraform(struct!.dailyMaintenanceWindow),
    disruption_budget: googleContainerClusterMaintenancePolicyDisruptionBudgetToTerraform(struct!.disruptionBudget),
    maintenance_exclusion: cdktn.listMapper(googleContainerClusterMaintenancePolicyMaintenanceExclusionToTerraform, true)(struct!.maintenanceExclusion),
    recurring_window: googleContainerClusterMaintenancePolicyRecurringWindowToTerraform(struct!.recurringWindow),
  }
}


export function googleContainerClusterMaintenancePolicyToHclTerraform(struct?: GoogleContainerClusterMaintenancePolicyOutputReference | GoogleContainerClusterMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily_maintenance_window: {
      value: googleContainerClusterMaintenancePolicyDailyMaintenanceWindowToHclTerraform(struct!.dailyMaintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowList",
    },
    disruption_budget: {
      value: googleContainerClusterMaintenancePolicyDisruptionBudgetToHclTerraform(struct!.disruptionBudget),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterMaintenancePolicyDisruptionBudgetList",
    },
    maintenance_exclusion: {
      value: cdktn.listMapperHcl(googleContainerClusterMaintenancePolicyMaintenanceExclusionToHclTerraform, true)(struct!.maintenanceExclusion),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleContainerClusterMaintenancePolicyMaintenanceExclusionList",
    },
    recurring_window: {
      value: googleContainerClusterMaintenancePolicyRecurringWindowToHclTerraform(struct!.recurringWindow),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterMaintenancePolicyRecurringWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMaintenancePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailyMaintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyMaintenanceWindow = this._dailyMaintenanceWindow?.internalValue;
    }
    if (this._disruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disruptionBudget = this._disruptionBudget?.internalValue;
    }
    if (this._maintenanceExclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceExclusion = this._maintenanceExclusion?.internalValue;
    }
    if (this._recurringWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringWindow = this._recurringWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dailyMaintenanceWindow.internalValue = undefined;
      this._disruptionBudget.internalValue = undefined;
      this._maintenanceExclusion.internalValue = undefined;
      this._recurringWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dailyMaintenanceWindow.internalValue = value.dailyMaintenanceWindow;
      this._disruptionBudget.internalValue = value.disruptionBudget;
      this._maintenanceExclusion.internalValue = value.maintenanceExclusion;
      this._recurringWindow.internalValue = value.recurringWindow;
    }
  }

  // daily_maintenance_window - computed: false, optional: true, required: false
  private _dailyMaintenanceWindow = new GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference(this, "daily_maintenance_window");
  public get dailyMaintenanceWindow() {
    return this._dailyMaintenanceWindow;
  }
  public putDailyMaintenanceWindow(value: GoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow) {
    this._dailyMaintenanceWindow.internalValue = value;
  }
  public resetDailyMaintenanceWindow() {
    this._dailyMaintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyMaintenanceWindowInput() {
    return this._dailyMaintenanceWindow.internalValue;
  }

  // disruption_budget - computed: false, optional: true, required: false
  private _disruptionBudget = new GoogleContainerClusterMaintenancePolicyDisruptionBudgetOutputReference(this, "disruption_budget");
  public get disruptionBudget() {
    return this._disruptionBudget;
  }
  public putDisruptionBudget(value: GoogleContainerClusterMaintenancePolicyDisruptionBudget) {
    this._disruptionBudget.internalValue = value;
  }
  public resetDisruptionBudget() {
    this._disruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptionBudgetInput() {
    return this._disruptionBudget.internalValue;
  }

  // maintenance_exclusion - computed: false, optional: true, required: false
  private _maintenanceExclusion = new GoogleContainerClusterMaintenancePolicyMaintenanceExclusionList(this, "maintenance_exclusion", true);
  public get maintenanceExclusion() {
    return this._maintenanceExclusion;
  }
  public putMaintenanceExclusion(value: GoogleContainerClusterMaintenancePolicyMaintenanceExclusion[] | cdktn.IResolvable) {
    this._maintenanceExclusion.internalValue = value;
  }
  public resetMaintenanceExclusion() {
    this._maintenanceExclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceExclusionInput() {
    return this._maintenanceExclusion.internalValue;
  }

  // recurring_window - computed: false, optional: true, required: false
  private _recurringWindow = new GoogleContainerClusterMaintenancePolicyRecurringWindowOutputReference(this, "recurring_window");
  public get recurringWindow() {
    return this._recurringWindow;
  }
  public putRecurringWindow(value: GoogleContainerClusterMaintenancePolicyRecurringWindow) {
    this._recurringWindow.internalValue = value;
  }
  public resetRecurringWindow() {
    this._recurringWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringWindowInput() {
    return this._recurringWindow.internalValue;
  }
}
export interface GoogleContainerClusterManagedMachineLearningDiagnosticsConfig {
  /**
  * Enable Managed Machine Learning Diagnostics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function googleContainerClusterManagedMachineLearningDiagnosticsConfigToTerraform(struct?: GoogleContainerClusterManagedMachineLearningDiagnosticsConfigOutputReference | GoogleContainerClusterManagedMachineLearningDiagnosticsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterManagedMachineLearningDiagnosticsConfigToHclTerraform(struct?: GoogleContainerClusterManagedMachineLearningDiagnosticsConfigOutputReference | GoogleContainerClusterManagedMachineLearningDiagnosticsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterManagedMachineLearningDiagnosticsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterManagedMachineLearningDiagnosticsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterManagedMachineLearningDiagnosticsConfig | undefined) {
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
export interface GoogleContainerClusterManagedOpentelemetryConfig {
  /**
  * The scope of the Managed OpenTelemetry pipeline. Available options include SCOPE_UNSPECIFIED, NONE, and COLLECTION_AND_INSTRUMENTATION_COMPONENTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#scope GoogleContainerCluster#scope}
  */
  readonly scope?: string;
}

export function googleContainerClusterManagedOpentelemetryConfigToTerraform(struct?: GoogleContainerClusterManagedOpentelemetryConfigOutputReference | GoogleContainerClusterManagedOpentelemetryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function googleContainerClusterManagedOpentelemetryConfigToHclTerraform(struct?: GoogleContainerClusterManagedOpentelemetryConfigOutputReference | GoogleContainerClusterManagedOpentelemetryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterManagedOpentelemetryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterManagedOpentelemetryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterManagedOpentelemetryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface GoogleContainerClusterMasterAuthClientCertificateConfig {
  /**
  * Whether client certificate authorization is enabled for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#issue_client_certificate GoogleContainerCluster#issue_client_certificate}
  */
  readonly issueClientCertificate: boolean | cdktn.IResolvable;
}

export function googleContainerClusterMasterAuthClientCertificateConfigToTerraform(struct?: GoogleContainerClusterMasterAuthClientCertificateConfigOutputReference | GoogleContainerClusterMasterAuthClientCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issue_client_certificate: cdktn.booleanToTerraform(struct!.issueClientCertificate),
  }
}


export function googleContainerClusterMasterAuthClientCertificateConfigToHclTerraform(struct?: GoogleContainerClusterMasterAuthClientCertificateConfigOutputReference | GoogleContainerClusterMasterAuthClientCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issue_client_certificate: {
      value: cdktn.booleanToHclTerraform(struct!.issueClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMasterAuthClientCertificateConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMasterAuthClientCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issueClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueClientCertificate = this._issueClientCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMasterAuthClientCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issueClientCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issueClientCertificate = value.issueClientCertificate;
    }
  }

  // issue_client_certificate - computed: false, optional: false, required: true
  private _issueClientCertificate?: boolean | cdktn.IResolvable; 
  public get issueClientCertificate() {
    return this.getBooleanAttribute('issue_client_certificate');
  }
  public set issueClientCertificate(value: boolean | cdktn.IResolvable) {
    this._issueClientCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueClientCertificateInput() {
    return this._issueClientCertificate;
  }
}
export interface GoogleContainerClusterMasterAuth {
  /**
  * client_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#client_certificate_config GoogleContainerCluster#client_certificate_config}
  */
  readonly clientCertificateConfig: GoogleContainerClusterMasterAuthClientCertificateConfig;
}

export function googleContainerClusterMasterAuthToTerraform(struct?: GoogleContainerClusterMasterAuthOutputReference | GoogleContainerClusterMasterAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_config: googleContainerClusterMasterAuthClientCertificateConfigToTerraform(struct!.clientCertificateConfig),
  }
}


export function googleContainerClusterMasterAuthToHclTerraform(struct?: GoogleContainerClusterMasterAuthOutputReference | GoogleContainerClusterMasterAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_config: {
      value: googleContainerClusterMasterAuthClientCertificateConfigToHclTerraform(struct!.clientCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterMasterAuthClientCertificateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMasterAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMasterAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateConfig = this._clientCertificateConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMasterAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateConfig.internalValue = value.clientCertificateConfig;
    }
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // client_certificate_config - computed: false, optional: false, required: true
  private _clientCertificateConfig = new GoogleContainerClusterMasterAuthClientCertificateConfigOutputReference(this, "client_certificate_config");
  public get clientCertificateConfig() {
    return this._clientCertificateConfig;
  }
  public putClientCertificateConfig(value: GoogleContainerClusterMasterAuthClientCertificateConfig) {
    this._clientCertificateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateConfigInput() {
    return this._clientCertificateConfig.internalValue;
  }
}
export interface GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks {
  /**
  * External network that can access Kubernetes master through HTTPS. Must be specified in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#cidr_block GoogleContainerCluster#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Field for users to identify CIDR blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#display_name GoogleContainerCluster#display_name}
  */
  readonly displayName?: string;
}

export function googleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksToTerraform(struct?: GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktn.stringToTerraform(struct!.cidrBlock),
    display_name: cdktn.stringToTerraform(struct!.displayName),
  }
}


export function googleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksToHclTerraform(struct?: GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktn.stringToHclTerraform(struct!.cidrBlock),
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

export class GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._displayName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._displayName = value.displayName;
    }
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
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
}

export class GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference {
    return new GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterMasterAuthorizedNetworksConfig {
  /**
  * Whether Kubernetes master is accessible via Google Compute Engine Public IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gcp_public_cidrs_access_enabled GoogleContainerCluster#gcp_public_cidrs_access_enabled}
  */
  readonly gcpPublicCidrsAccessEnabled?: boolean | cdktn.IResolvable;
  /**
  * Whether authorized networks is enforced on the private endpoint or not. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#private_endpoint_enforcement_enabled GoogleContainerCluster#private_endpoint_enforcement_enabled}
  */
  readonly privateEndpointEnforcementEnabled?: boolean | cdktn.IResolvable;
  /**
  * cidr_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#cidr_blocks GoogleContainerCluster#cidr_blocks}
  */
  readonly cidrBlocks?: GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[] | cdktn.IResolvable;
}

export function googleContainerClusterMasterAuthorizedNetworksConfigToTerraform(struct?: GoogleContainerClusterMasterAuthorizedNetworksConfigOutputReference | GoogleContainerClusterMasterAuthorizedNetworksConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_public_cidrs_access_enabled: cdktn.booleanToTerraform(struct!.gcpPublicCidrsAccessEnabled),
    private_endpoint_enforcement_enabled: cdktn.booleanToTerraform(struct!.privateEndpointEnforcementEnabled),
    cidr_blocks: cdktn.listMapper(googleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksToTerraform, true)(struct!.cidrBlocks),
  }
}


export function googleContainerClusterMasterAuthorizedNetworksConfigToHclTerraform(struct?: GoogleContainerClusterMasterAuthorizedNetworksConfigOutputReference | GoogleContainerClusterMasterAuthorizedNetworksConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_public_cidrs_access_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.gcpPublicCidrsAccessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_endpoint_enforcement_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.privateEndpointEnforcementEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cidr_blocks: {
      value: cdktn.listMapperHcl(googleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksToHclTerraform, true)(struct!.cidrBlocks),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMasterAuthorizedNetworksConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMasterAuthorizedNetworksConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpPublicCidrsAccessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpPublicCidrsAccessEnabled = this._gcpPublicCidrsAccessEnabled;
    }
    if (this._privateEndpointEnforcementEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointEnforcementEnabled = this._privateEndpointEnforcementEnabled;
    }
    if (this._cidrBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMasterAuthorizedNetworksConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpPublicCidrsAccessEnabled = undefined;
      this._privateEndpointEnforcementEnabled = undefined;
      this._cidrBlocks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpPublicCidrsAccessEnabled = value.gcpPublicCidrsAccessEnabled;
      this._privateEndpointEnforcementEnabled = value.privateEndpointEnforcementEnabled;
      this._cidrBlocks.internalValue = value.cidrBlocks;
    }
  }

  // gcp_public_cidrs_access_enabled - computed: true, optional: true, required: false
  private _gcpPublicCidrsAccessEnabled?: boolean | cdktn.IResolvable; 
  public get gcpPublicCidrsAccessEnabled() {
    return this.getBooleanAttribute('gcp_public_cidrs_access_enabled');
  }
  public set gcpPublicCidrsAccessEnabled(value: boolean | cdktn.IResolvable) {
    this._gcpPublicCidrsAccessEnabled = value;
  }
  public resetGcpPublicCidrsAccessEnabled() {
    this._gcpPublicCidrsAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpPublicCidrsAccessEnabledInput() {
    return this._gcpPublicCidrsAccessEnabled;
  }

  // private_endpoint_enforcement_enabled - computed: true, optional: true, required: false
  private _privateEndpointEnforcementEnabled?: boolean | cdktn.IResolvable; 
  public get privateEndpointEnforcementEnabled() {
    return this.getBooleanAttribute('private_endpoint_enforcement_enabled');
  }
  public set privateEndpointEnforcementEnabled(value: boolean | cdktn.IResolvable) {
    this._privateEndpointEnforcementEnabled = value;
  }
  public resetPrivateEndpointEnforcementEnabled() {
    this._privateEndpointEnforcementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointEnforcementEnabledInput() {
    return this._privateEndpointEnforcementEnabled;
  }

  // cidr_blocks - computed: false, optional: true, required: false
  private _cidrBlocks = new GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksList(this, "cidr_blocks", true);
  public get cidrBlocks() {
    return this._cidrBlocks;
  }
  public putCidrBlocks(value: GoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[] | cdktn.IResolvable) {
    this._cidrBlocks.internalValue = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks.internalValue;
  }
}
export interface GoogleContainerClusterMeshCertificates {
  /**
  * When enabled the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_certificates GoogleContainerCluster#enable_certificates}
  */
  readonly enableCertificates: boolean | cdktn.IResolvable;
}

export function googleContainerClusterMeshCertificatesToTerraform(struct?: GoogleContainerClusterMeshCertificatesOutputReference | GoogleContainerClusterMeshCertificates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_certificates: cdktn.booleanToTerraform(struct!.enableCertificates),
  }
}


export function googleContainerClusterMeshCertificatesToHclTerraform(struct?: GoogleContainerClusterMeshCertificatesOutputReference | GoogleContainerClusterMeshCertificates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_certificates: {
      value: cdktn.booleanToHclTerraform(struct!.enableCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMeshCertificatesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMeshCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCertificates = this._enableCertificates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMeshCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableCertificates = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableCertificates = value.enableCertificates;
    }
  }

  // enable_certificates - computed: false, optional: false, required: true
  private _enableCertificates?: boolean | cdktn.IResolvable; 
  public get enableCertificates() {
    return this.getBooleanAttribute('enable_certificates');
  }
  public set enableCertificates(value: boolean | cdktn.IResolvable) {
    this._enableCertificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCertificatesInput() {
    return this._enableCertificates;
  }
}
export interface GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig {
  /**
  * Whether or not the advanced datapath metrics are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_metrics GoogleContainerCluster#enable_metrics}
  */
  readonly enableMetrics: boolean | cdktn.IResolvable;
  /**
  * Whether or not Relay is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_relay GoogleContainerCluster#enable_relay}
  */
  readonly enableRelay: boolean | cdktn.IResolvable;
}

export function googleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigToTerraform(struct?: GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigOutputReference | GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_metrics: cdktn.booleanToTerraform(struct!.enableMetrics),
    enable_relay: cdktn.booleanToTerraform(struct!.enableRelay),
  }
}


export function googleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigToHclTerraform(struct?: GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigOutputReference | GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_metrics: {
      value: cdktn.booleanToHclTerraform(struct!.enableMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_relay: {
      value: cdktn.booleanToHclTerraform(struct!.enableRelay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMetrics = this._enableMetrics;
    }
    if (this._enableRelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRelay = this._enableRelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableMetrics = undefined;
      this._enableRelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableMetrics = value.enableMetrics;
      this._enableRelay = value.enableRelay;
    }
  }

  // enable_metrics - computed: false, optional: false, required: true
  private _enableMetrics?: boolean | cdktn.IResolvable; 
  public get enableMetrics() {
    return this.getBooleanAttribute('enable_metrics');
  }
  public set enableMetrics(value: boolean | cdktn.IResolvable) {
    this._enableMetrics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMetricsInput() {
    return this._enableMetrics;
  }

  // enable_relay - computed: false, optional: false, required: true
  private _enableRelay?: boolean | cdktn.IResolvable; 
  public get enableRelay() {
    return this.getBooleanAttribute('enable_relay');
  }
  public set enableRelay(value: boolean | cdktn.IResolvable) {
    this._enableRelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRelayInput() {
    return this._enableRelay;
  }
}
export interface GoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig {
  /**
  * The scope of auto-monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#scope GoogleContainerCluster#scope}
  */
  readonly scope: string;
}

export function googleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigToTerraform(struct?: GoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigOutputReference | GoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function googleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigToHclTerraform(struct?: GoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigOutputReference | GoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
    }
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface GoogleContainerClusterMonitoringConfigManagedPrometheus {
  /**
  * Whether or not the managed collection is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * auto_monitoring_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#auto_monitoring_config GoogleContainerCluster#auto_monitoring_config}
  */
  readonly autoMonitoringConfig?: GoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig;
}

export function googleContainerClusterMonitoringConfigManagedPrometheusToTerraform(struct?: GoogleContainerClusterMonitoringConfigManagedPrometheusOutputReference | GoogleContainerClusterMonitoringConfigManagedPrometheus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    auto_monitoring_config: googleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigToTerraform(struct!.autoMonitoringConfig),
  }
}


export function googleContainerClusterMonitoringConfigManagedPrometheusToHclTerraform(struct?: GoogleContainerClusterMonitoringConfigManagedPrometheusOutputReference | GoogleContainerClusterMonitoringConfigManagedPrometheus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_monitoring_config: {
      value: googleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigToHclTerraform(struct!.autoMonitoringConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMonitoringConfigManagedPrometheusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMonitoringConfigManagedPrometheus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._autoMonitoringConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMonitoringConfig = this._autoMonitoringConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMonitoringConfigManagedPrometheus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._autoMonitoringConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._autoMonitoringConfig.internalValue = value.autoMonitoringConfig;
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

  // auto_monitoring_config - computed: false, optional: true, required: false
  private _autoMonitoringConfig = new GoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigOutputReference(this, "auto_monitoring_config");
  public get autoMonitoringConfig() {
    return this._autoMonitoringConfig;
  }
  public putAutoMonitoringConfig(value: GoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig) {
    this._autoMonitoringConfig.internalValue = value;
  }
  public resetAutoMonitoringConfig() {
    this._autoMonitoringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMonitoringConfigInput() {
    return this._autoMonitoringConfig.internalValue;
  }
}
export interface GoogleContainerClusterMonitoringConfig {
  /**
  * GKE components exposing metrics. Valid values include SYSTEM_COMPONENTS, APISERVER, SCHEDULER, CONTROLLER_MANAGER, STORAGE, HPA, POD, DAEMONSET, DEPLOYMENT, STATEFULSET, WORKLOADS, KUBELET, CADVISOR, DCGM and JOBSET.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_components GoogleContainerCluster#enable_components}
  */
  readonly enableComponents?: string[];
  /**
  * advanced_datapath_observability_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#advanced_datapath_observability_config GoogleContainerCluster#advanced_datapath_observability_config}
  */
  readonly advancedDatapathObservabilityConfig?: GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig;
  /**
  * managed_prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#managed_prometheus GoogleContainerCluster#managed_prometheus}
  */
  readonly managedPrometheus?: GoogleContainerClusterMonitoringConfigManagedPrometheus;
}

export function googleContainerClusterMonitoringConfigToTerraform(struct?: GoogleContainerClusterMonitoringConfigOutputReference | GoogleContainerClusterMonitoringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_components: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enableComponents),
    advanced_datapath_observability_config: googleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigToTerraform(struct!.advancedDatapathObservabilityConfig),
    managed_prometheus: googleContainerClusterMonitoringConfigManagedPrometheusToTerraform(struct!.managedPrometheus),
  }
}


export function googleContainerClusterMonitoringConfigToHclTerraform(struct?: GoogleContainerClusterMonitoringConfigOutputReference | GoogleContainerClusterMonitoringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_components: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enableComponents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_datapath_observability_config: {
      value: googleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigToHclTerraform(struct!.advancedDatapathObservabilityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigList",
    },
    managed_prometheus: {
      value: googleContainerClusterMonitoringConfigManagedPrometheusToHclTerraform(struct!.managedPrometheus),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterMonitoringConfigManagedPrometheusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterMonitoringConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableComponents = this._enableComponents;
    }
    if (this._advancedDatapathObservabilityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedDatapathObservabilityConfig = this._advancedDatapathObservabilityConfig?.internalValue;
    }
    if (this._managedPrometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedPrometheus = this._managedPrometheus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableComponents = undefined;
      this._advancedDatapathObservabilityConfig.internalValue = undefined;
      this._managedPrometheus.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableComponents = value.enableComponents;
      this._advancedDatapathObservabilityConfig.internalValue = value.advancedDatapathObservabilityConfig;
      this._managedPrometheus.internalValue = value.managedPrometheus;
    }
  }

  // enable_components - computed: true, optional: true, required: false
  private _enableComponents?: string[]; 
  public get enableComponents() {
    return this.getListAttribute('enable_components');
  }
  public set enableComponents(value: string[]) {
    this._enableComponents = value;
  }
  public resetEnableComponents() {
    this._enableComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableComponentsInput() {
    return this._enableComponents;
  }

  // advanced_datapath_observability_config - computed: false, optional: true, required: false
  private _advancedDatapathObservabilityConfig = new GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigOutputReference(this, "advanced_datapath_observability_config");
  public get advancedDatapathObservabilityConfig() {
    return this._advancedDatapathObservabilityConfig;
  }
  public putAdvancedDatapathObservabilityConfig(value: GoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig) {
    this._advancedDatapathObservabilityConfig.internalValue = value;
  }
  public resetAdvancedDatapathObservabilityConfig() {
    this._advancedDatapathObservabilityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedDatapathObservabilityConfigInput() {
    return this._advancedDatapathObservabilityConfig.internalValue;
  }

  // managed_prometheus - computed: false, optional: true, required: false
  private _managedPrometheus = new GoogleContainerClusterMonitoringConfigManagedPrometheusOutputReference(this, "managed_prometheus");
  public get managedPrometheus() {
    return this._managedPrometheus;
  }
  public putManagedPrometheus(value: GoogleContainerClusterMonitoringConfigManagedPrometheus) {
    this._managedPrometheus.internalValue = value;
  }
  public resetManagedPrometheus() {
    this._managedPrometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPrometheusInput() {
    return this._managedPrometheus.internalValue;
  }
}
export interface GoogleContainerClusterNetworkPerformanceConfig {
  /**
  * Specifies the total network bandwidth tier for NodePools in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#total_egress_bandwidth_tier GoogleContainerCluster#total_egress_bandwidth_tier}
  */
  readonly totalEgressBandwidthTier: string;
}

export function googleContainerClusterNetworkPerformanceConfigToTerraform(struct?: GoogleContainerClusterNetworkPerformanceConfigOutputReference | GoogleContainerClusterNetworkPerformanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_egress_bandwidth_tier: cdktn.stringToTerraform(struct!.totalEgressBandwidthTier),
  }
}


export function googleContainerClusterNetworkPerformanceConfigToHclTerraform(struct?: GoogleContainerClusterNetworkPerformanceConfigOutputReference | GoogleContainerClusterNetworkPerformanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_egress_bandwidth_tier: {
      value: cdktn.stringToHclTerraform(struct!.totalEgressBandwidthTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNetworkPerformanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNetworkPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalEgressBandwidthTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEgressBandwidthTier = this._totalEgressBandwidthTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNetworkPerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalEgressBandwidthTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalEgressBandwidthTier = value.totalEgressBandwidthTier;
    }
  }

  // total_egress_bandwidth_tier - computed: false, optional: false, required: true
  private _totalEgressBandwidthTier?: string; 
  public get totalEgressBandwidthTier() {
    return this.getStringAttribute('total_egress_bandwidth_tier');
  }
  public set totalEgressBandwidthTier(value: string) {
    this._totalEgressBandwidthTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEgressBandwidthTierInput() {
    return this._totalEgressBandwidthTier;
  }
}
export interface GoogleContainerClusterNetworkPolicy {
  /**
  * Whether network policy is enabled on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The selected network policy provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#provider GoogleContainerCluster#provider}
  */
  readonly provider?: string;
}

export function googleContainerClusterNetworkPolicyToTerraform(struct?: GoogleContainerClusterNetworkPolicyOutputReference | GoogleContainerClusterNetworkPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    provider: cdktn.stringToTerraform(struct!.provider),
  }
}


export function googleContainerClusterNetworkPolicyToHclTerraform(struct?: GoogleContainerClusterNetworkPolicyOutputReference | GoogleContainerClusterNetworkPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provider: {
      value: cdktn.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNetworkPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNetworkPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._provider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._provider = value.provider;
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

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }
}
export interface GoogleContainerClusterNodeConfigEffectiveTaints {
}

export function googleContainerClusterNodeConfigEffectiveTaintsToTerraform(struct?: GoogleContainerClusterNodeConfigEffectiveTaints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleContainerClusterNodeConfigEffectiveTaintsToHclTerraform(struct?: GoogleContainerClusterNodeConfigEffectiveTaints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleContainerClusterNodeConfigEffectiveTaintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigEffectiveTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigEffectiveTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class GoogleContainerClusterNodeConfigEffectiveTaintsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterNodeConfigEffectiveTaintsOutputReference {
    return new GoogleContainerClusterNodeConfigEffectiveTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigAdvancedMachineFeatures {
  /**
  * Whether the node should have nested virtualization enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_nested_virtualization GoogleContainerCluster#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktn.IResolvable;
  /**
  * Level of Performance Monitoring Unit (PMU) requested. If unset, no access to the PMU is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#performance_monitoring_unit GoogleContainerCluster#performance_monitoring_unit}
  */
  readonly performanceMonitoringUnit?: string;
  /**
  * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#threads_per_core GoogleContainerCluster#threads_per_core}
  */
  readonly threadsPerCore: number;
}

export function googleContainerClusterNodeConfigAdvancedMachineFeaturesToTerraform(struct?: GoogleContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference | GoogleContainerClusterNodeConfigAdvancedMachineFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_nested_virtualization: cdktn.booleanToTerraform(struct!.enableNestedVirtualization),
    performance_monitoring_unit: cdktn.stringToTerraform(struct!.performanceMonitoringUnit),
    threads_per_core: cdktn.numberToTerraform(struct!.threadsPerCore),
  }
}


export function googleContainerClusterNodeConfigAdvancedMachineFeaturesToHclTerraform(struct?: GoogleContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference | GoogleContainerClusterNodeConfigAdvancedMachineFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_nested_virtualization: {
      value: cdktn.booleanToHclTerraform(struct!.enableNestedVirtualization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    performance_monitoring_unit: {
      value: cdktn.stringToHclTerraform(struct!.performanceMonitoringUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threads_per_core: {
      value: cdktn.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNestedVirtualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNestedVirtualization = this._enableNestedVirtualization;
    }
    if (this._performanceMonitoringUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceMonitoringUnit = this._performanceMonitoringUnit;
    }
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNestedVirtualization = undefined;
      this._performanceMonitoringUnit = undefined;
      this._threadsPerCore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNestedVirtualization = value.enableNestedVirtualization;
      this._performanceMonitoringUnit = value.performanceMonitoringUnit;
      this._threadsPerCore = value.threadsPerCore;
    }
  }

  // enable_nested_virtualization - computed: false, optional: true, required: false
  private _enableNestedVirtualization?: boolean | cdktn.IResolvable; 
  public get enableNestedVirtualization() {
    return this.getBooleanAttribute('enable_nested_virtualization');
  }
  public set enableNestedVirtualization(value: boolean | cdktn.IResolvable) {
    this._enableNestedVirtualization = value;
  }
  public resetEnableNestedVirtualization() {
    this._enableNestedVirtualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNestedVirtualizationInput() {
    return this._enableNestedVirtualization;
  }

  // performance_monitoring_unit - computed: false, optional: true, required: false
  private _performanceMonitoringUnit?: string; 
  public get performanceMonitoringUnit() {
    return this.getStringAttribute('performance_monitoring_unit');
  }
  public set performanceMonitoringUnit(value: string) {
    this._performanceMonitoringUnit = value;
  }
  public resetPerformanceMonitoringUnit() {
    this._performanceMonitoringUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceMonitoringUnitInput() {
    return this._performanceMonitoringUnit;
  }

  // threads_per_core - computed: false, optional: false, required: true
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }
}
export interface GoogleContainerClusterNodeConfigBootDisk {
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disk_type GoogleContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Configured IOPs provisioning. Only valid with disk type hyperdisk-balanced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#provisioned_iops GoogleContainerCluster#provisioned_iops}
  */
  readonly provisionedIops?: number;
  /**
  * Configured throughput provisioning. Only valid with disk type hyperdisk-balanced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#provisioned_throughput GoogleContainerCluster#provisioned_throughput}
  */
  readonly provisionedThroughput?: number;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#size_gb GoogleContainerCluster#size_gb}
  */
  readonly sizeGb?: number;
}

export function googleContainerClusterNodeConfigBootDiskToTerraform(struct?: GoogleContainerClusterNodeConfigBootDiskOutputReference | GoogleContainerClusterNodeConfigBootDisk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_type: cdktn.stringToTerraform(struct!.diskType),
    provisioned_iops: cdktn.numberToTerraform(struct!.provisionedIops),
    provisioned_throughput: cdktn.numberToTerraform(struct!.provisionedThroughput),
    size_gb: cdktn.numberToTerraform(struct!.sizeGb),
  }
}


export function googleContainerClusterNodeConfigBootDiskToHclTerraform(struct?: GoogleContainerClusterNodeConfigBootDiskOutputReference | GoogleContainerClusterNodeConfigBootDisk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_type: {
      value: cdktn.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioned_iops: {
      value: cdktn.numberToHclTerraform(struct!.provisionedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provisioned_throughput: {
      value: cdktn.numberToHclTerraform(struct!.provisionedThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_gb: {
      value: cdktn.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigBootDiskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._provisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedIops = this._provisionedIops;
    }
    if (this._provisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughput = this._provisionedThroughput;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskType = undefined;
      this._provisionedIops = undefined;
      this._provisionedThroughput = undefined;
      this._sizeGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskType = value.diskType;
      this._provisionedIops = value.provisionedIops;
      this._provisionedThroughput = value.provisionedThroughput;
      this._sizeGb = value.sizeGb;
    }
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // provisioned_iops - computed: true, optional: true, required: false
  private _provisionedIops?: number; 
  public get provisionedIops() {
    return this.getNumberAttribute('provisioned_iops');
  }
  public set provisionedIops(value: number) {
    this._provisionedIops = value;
  }
  public resetProvisionedIops() {
    this._provisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedIopsInput() {
    return this._provisionedIops;
  }

  // provisioned_throughput - computed: true, optional: true, required: false
  private _provisionedThroughput?: number; 
  public get provisionedThroughput() {
    return this.getNumberAttribute('provisioned_throughput');
  }
  public set provisionedThroughput(value: number) {
    this._provisionedThroughput = value;
  }
  public resetProvisionedThroughput() {
    this._provisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInput() {
    return this._provisionedThroughput;
  }

  // size_gb - computed: true, optional: true, required: false
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  public resetSizeGb() {
    this._sizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }
}
export interface GoogleContainerClusterNodeConfigConfidentialNodes {
  /**
  * Defines the type of technology used by the confidential node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#confidential_instance_type GoogleContainerCluster#confidential_instance_type}
  */
  readonly confidentialInstanceType?: string;
  /**
  * Whether Confidential Nodes feature is enabled for all nodes in this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterNodeConfigConfidentialNodesToTerraform(struct?: GoogleContainerClusterNodeConfigConfidentialNodesOutputReference | GoogleContainerClusterNodeConfigConfidentialNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidential_instance_type: cdktn.stringToTerraform(struct!.confidentialInstanceType),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodeConfigConfidentialNodesToHclTerraform(struct?: GoogleContainerClusterNodeConfigConfidentialNodesOutputReference | GoogleContainerClusterNodeConfigConfidentialNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidential_instance_type: {
      value: cdktn.stringToHclTerraform(struct!.confidentialInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class GoogleContainerClusterNodeConfigConfidentialNodesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigConfidentialNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidentialInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialInstanceType = this._confidentialInstanceType;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigConfidentialNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidentialInstanceType = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidentialInstanceType = value.confidentialInstanceType;
      this._enabled = value.enabled;
    }
  }

  // confidential_instance_type - computed: false, optional: true, required: false
  private _confidentialInstanceType?: string; 
  public get confidentialInstanceType() {
    return this.getStringAttribute('confidential_instance_type');
  }
  public set confidentialInstanceType(value: string) {
    this._confidentialInstanceType = value;
  }
  public resetConfidentialInstanceType() {
    this._confidentialInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceTypeInput() {
    return this._confidentialInstanceType;
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
export interface GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  /**
  * URI for the secret that hosts a certificate. Must be in the format 'projects/PROJECT_NUM/secrets/SECRET_NAME/versions/VERSION_OR_LATEST'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#secret_uri GoogleContainerCluster#secret_uri}
  */
  readonly secretUri: string;
}

export function googleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_uri: cdktn.stringToTerraform(struct!.secretUri),
  }
}


export function googleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_uri: {
      value: cdktn.stringToHclTerraform(struct!.secretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUri = this._secretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretUri = value.secretUri;
    }
  }

  // secret_uri - computed: false, optional: false, required: true
  private _secretUri?: string; 
  public get secretUri() {
    return this.getStringAttribute('secret_uri');
  }
  public set secretUri(value: string) {
    this._secretUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUriInput() {
    return this._secretUri;
  }
}
export interface GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  /**
  * List of fully-qualified-domain-names. IPv4s and port specification are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#fqdns GoogleContainerCluster#fqdns}
  */
  readonly fqdns: string[];
  /**
  * gcp_secret_manager_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gcp_secret_manager_certificate_config GoogleContainerCluster#gcp_secret_manager_certificate_config}
  */
  readonly gcpSecretManagerCertificateConfig: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}

export function googleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fqdns),
    gcp_secret_manager_certificate_config: googleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct!.gcpSecretManagerCertificateConfig),
  }
}


export function googleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fqdns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gcp_secret_manager_certificate_config: {
      value: googleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct!.gcpSecretManagerCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdns = this._fqdns;
    }
    if (this._gcpSecretManagerCertificateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerCertificateConfig = this._gcpSecretManagerCertificateConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdns = undefined;
      this._gcpSecretManagerCertificateConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdns = value.fqdns;
      this._gcpSecretManagerCertificateConfig.internalValue = value.gcpSecretManagerCertificateConfig;
    }
  }

  // fqdns - computed: false, optional: false, required: true
  private _fqdns?: string[]; 
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }
  public set fqdns(value: string[]) {
    this._fqdns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns;
  }

  // gcp_secret_manager_certificate_config - computed: false, optional: false, required: true
  private _gcpSecretManagerCertificateConfig = new GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference(this, "gcp_secret_manager_certificate_config");
  public get gcpSecretManagerCertificateConfig() {
    return this._gcpSecretManagerCertificateConfig;
  }
  public putGcpSecretManagerCertificateConfig(value: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig) {
    this._gcpSecretManagerCertificateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerCertificateConfigInput() {
    return this._gcpSecretManagerCertificateConfig.internalValue;
  }
}

export class GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference {
    return new GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig {
  /**
  * Whether or not private registries are configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * certificate_authority_domain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#certificate_authority_domain_config GoogleContainerCluster#certificate_authority_domain_config}
  */
  readonly certificateAuthorityDomainConfig?: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktn.IResolvable;
}

export function googleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigToTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference | GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    certificate_authority_domain_config: cdktn.listMapper(googleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform, true)(struct!.certificateAuthorityDomainConfig),
  }
}


export function googleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference | GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificate_authority_domain_config: {
      value: cdktn.listMapperHcl(googleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform, true)(struct!.certificateAuthorityDomainConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._certificateAuthorityDomainConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityDomainConfig = this._certificateAuthorityDomainConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._certificateAuthorityDomainConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._certificateAuthorityDomainConfig.internalValue = value.certificateAuthorityDomainConfig;
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

  // certificate_authority_domain_config - computed: false, optional: true, required: false
  private _certificateAuthorityDomainConfig = new GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList(this, "certificate_authority_domain_config", false);
  public get certificateAuthorityDomainConfig() {
    return this._certificateAuthorityDomainConfig;
  }
  public putCertificateAuthorityDomainConfig(value: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktn.IResolvable) {
    this._certificateAuthorityDomainConfig.internalValue = value;
  }
  public resetCertificateAuthorityDomainConfig() {
    this._certificateAuthorityDomainConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityDomainConfigInput() {
    return this._certificateAuthorityDomainConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCa {
  /**
  * URI for the Secret Manager secret that hosts the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gcp_secret_manager_secret_uri GoogleContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaToTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_secret_manager_secret_uri: cdktn.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaToHclTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_secret_manager_secret_uri: {
      value: cdktn.stringToHclTerraform(struct!.gcpSecretManagerSecretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gcpSecretManagerSecretUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gcpSecretManagerSecretUri = value.gcpSecretManagerSecretUri;
    }
  }

  // gcp_secret_manager_secret_uri - computed: false, optional: true, required: false
  private _gcpSecretManagerSecretUri?: string; 
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
  public set gcpSecretManagerSecretUri(value: string) {
    this._gcpSecretManagerSecretUri = value;
  }
  public resetGcpSecretManagerSecretUri() {
    this._gcpSecretManagerSecretUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerSecretUriInput() {
    return this._gcpSecretManagerSecretUri;
  }
}

export class GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCa[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference {
    return new GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCert {
  /**
  * URI for the Secret Manager secret that hosts the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gcp_secret_manager_secret_uri GoogleContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertToTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference | GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_secret_manager_secret_uri: cdktn.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertToHclTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference | GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_secret_manager_secret_uri: {
      value: cdktn.stringToHclTerraform(struct!.gcpSecretManagerSecretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpSecretManagerSecretUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpSecretManagerSecretUri = value.gcpSecretManagerSecretUri;
    }
  }

  // gcp_secret_manager_secret_uri - computed: false, optional: true, required: false
  private _gcpSecretManagerSecretUri?: string; 
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
  public set gcpSecretManagerSecretUri(value: string) {
    this._gcpSecretManagerSecretUri = value;
  }
  public resetGcpSecretManagerSecretUri() {
    this._gcpSecretManagerSecretUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerSecretUriInput() {
    return this._gcpSecretManagerSecretUri;
  }
}
export interface GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKey {
  /**
  * URI for the Secret Manager secret that hosts the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gcp_secret_manager_secret_uri GoogleContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyToTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference | GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_secret_manager_secret_uri: cdktn.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyToHclTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference | GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_secret_manager_secret_uri: {
      value: cdktn.stringToHclTerraform(struct!.gcpSecretManagerSecretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpSecretManagerSecretUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpSecretManagerSecretUri = value.gcpSecretManagerSecretUri;
    }
  }

  // gcp_secret_manager_secret_uri - computed: false, optional: true, required: false
  private _gcpSecretManagerSecretUri?: string; 
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
  public set gcpSecretManagerSecretUri(value: string) {
    this._gcpSecretManagerSecretUri = value;
  }
  public resetGcpSecretManagerSecretUri() {
    this._gcpSecretManagerSecretUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerSecretUriInput() {
    return this._gcpSecretManagerSecretUri;
  }
}
export interface GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClient {
  /**
  * cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#cert GoogleContainerCluster#cert}
  */
  readonly cert: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCert;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKey;
}

export function googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientToTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertToTerraform(struct!.cert),
    key: googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyToTerraform(struct!.key),
  }
}


export function googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientToHclTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertList",
    },
    key: {
      value: googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert.internalValue = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert.internalValue = value.cert;
      this._key.internalValue = value.key;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert = new GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCert) {
    this._cert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKey) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}

export class GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClient[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference {
    return new GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeader {
  /**
  * Configures the header key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key: string;
  /**
  * Configures the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#value GoogleContainerCluster#value}
  */
  readonly value: string[];
}

export function googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderToTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.value),
  }
}


export function googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderToHclTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeader[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference {
    return new GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHosts {
  /**
  * Represent the capabilities of the registry host, specifying what operations a host is capable of performing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#capabilities GoogleContainerCluster#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Specifies the maximum duration allowed for a connection attempt to complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#dial_timeout GoogleContainerCluster#dial_timeout}
  */
  readonly dialTimeout?: string;
  /**
  * Configures the registry host/mirror.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#host GoogleContainerCluster#host}
  */
  readonly host: string;
  /**
  * Indicate the host's API root endpoint is defined in the URL path rather than by the API specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#override_path GoogleContainerCluster#override_path}
  */
  readonly overridePath?: boolean | cdktn.IResolvable;
  /**
  * ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#ca GoogleContainerCluster#ca}
  */
  readonly ca?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCa[] | cdktn.IResolvable;
  /**
  * client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#client GoogleContainerCluster#client}
  */
  readonly client?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClient[] | cdktn.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#header GoogleContainerCluster#header}
  */
  readonly header?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeader[] | cdktn.IResolvable;
}

export function googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsToTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.capabilities),
    dial_timeout: cdktn.stringToTerraform(struct!.dialTimeout),
    host: cdktn.stringToTerraform(struct!.host),
    override_path: cdktn.booleanToTerraform(struct!.overridePath),
    ca: cdktn.listMapper(googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaToTerraform, true)(struct!.ca),
    client: cdktn.listMapper(googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientToTerraform, true)(struct!.client),
    header: cdktn.listMapper(googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderToTerraform, true)(struct!.header),
  }
}


export function googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsToHclTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dial_timeout: {
      value: cdktn.stringToHclTerraform(struct!.dialTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_path: {
      value: cdktn.booleanToHclTerraform(struct!.overridePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ca: {
      value: cdktn.listMapperHcl(googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaToHclTerraform, true)(struct!.ca),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaList",
    },
    client: {
      value: cdktn.listMapperHcl(googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientToHclTerraform, true)(struct!.client),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientList",
    },
    header: {
      value: cdktn.listMapperHcl(googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHosts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._dialTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialTimeout = this._dialTimeout;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._overridePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.overridePath = this._overridePath;
    }
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHosts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._dialTimeout = undefined;
      this._host = undefined;
      this._overridePath = undefined;
      this._ca.internalValue = undefined;
      this._client.internalValue = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._dialTimeout = value.dialTimeout;
      this._host = value.host;
      this._overridePath = value.overridePath;
      this._ca.internalValue = value.ca;
      this._client.internalValue = value.client;
      this._header.internalValue = value.header;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // dial_timeout - computed: false, optional: true, required: false
  private _dialTimeout?: string; 
  public get dialTimeout() {
    return this.getStringAttribute('dial_timeout');
  }
  public set dialTimeout(value: string) {
    this._dialTimeout = value;
  }
  public resetDialTimeout() {
    this._dialTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialTimeoutInput() {
    return this._dialTimeout;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // override_path - computed: false, optional: true, required: false
  private _overridePath?: boolean | cdktn.IResolvable; 
  public get overridePath() {
    return this.getBooleanAttribute('override_path');
  }
  public set overridePath(value: boolean | cdktn.IResolvable) {
    this._overridePath = value;
  }
  public resetOverridePath() {
    this._overridePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePathInput() {
    return this._overridePath;
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaList(this, "ca", false);
  public get ca() {
    return this._ca;
  }
  public putCa(value: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCa[] | cdktn.IResolvable) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // client - computed: false, optional: true, required: false
  private _client = new GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientList(this, "client", false);
  public get client() {
    return this._client;
  }
  public putClient(value: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClient[] | cdktn.IResolvable) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeader[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHosts[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsOutputReference {
    return new GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigContainerdConfigRegistryHosts {
  /**
  * Defines the host name of the registry server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#server GoogleContainerCluster#server}
  */
  readonly server: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#hosts GoogleContainerCluster#hosts}
  */
  readonly hosts?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHosts[] | cdktn.IResolvable;
}

export function googleContainerClusterNodeConfigContainerdConfigRegistryHostsToTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: cdktn.stringToTerraform(struct!.server),
    hosts: cdktn.listMapper(googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsToTerraform, true)(struct!.hosts),
  }
}


export function googleContainerClusterNodeConfigContainerdConfigRegistryHostsToHclTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: cdktn.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktn.listMapperHcl(googleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigContainerdConfigRegistryHosts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigContainerdConfigRegistryHosts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._server = undefined;
      this._hosts.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._server = value.server;
      this._hosts.internalValue = value.hosts;
    }
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHosts[] | cdktn.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }
}

export class GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigContainerdConfigRegistryHosts[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsOutputReference {
    return new GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigContainerdConfigWritableCgroups {
  /**
  * Whether writable cgroups are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterNodeConfigContainerdConfigWritableCgroupsToTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigWritableCgroupsOutputReference | GoogleContainerClusterNodeConfigContainerdConfigWritableCgroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodeConfigContainerdConfigWritableCgroupsToHclTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigWritableCgroupsOutputReference | GoogleContainerClusterNodeConfigContainerdConfigWritableCgroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterNodeConfigContainerdConfigWritableCgroupsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigContainerdConfigWritableCgroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigContainerdConfigWritableCgroups | undefined) {
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
export interface GoogleContainerClusterNodeConfigContainerdConfig {
  /**
  * private_registry_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#private_registry_access_config GoogleContainerCluster#private_registry_access_config}
  */
  readonly privateRegistryAccessConfig?: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig;
  /**
  * registry_hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#registry_hosts GoogleContainerCluster#registry_hosts}
  */
  readonly registryHosts?: GoogleContainerClusterNodeConfigContainerdConfigRegistryHosts[] | cdktn.IResolvable;
  /**
  * writable_cgroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#writable_cgroups GoogleContainerCluster#writable_cgroups}
  */
  readonly writableCgroups?: GoogleContainerClusterNodeConfigContainerdConfigWritableCgroups;
}

export function googleContainerClusterNodeConfigContainerdConfigToTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigOutputReference | GoogleContainerClusterNodeConfigContainerdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_registry_access_config: googleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigToTerraform(struct!.privateRegistryAccessConfig),
    registry_hosts: cdktn.listMapper(googleContainerClusterNodeConfigContainerdConfigRegistryHostsToTerraform, true)(struct!.registryHosts),
    writable_cgroups: googleContainerClusterNodeConfigContainerdConfigWritableCgroupsToTerraform(struct!.writableCgroups),
  }
}


export function googleContainerClusterNodeConfigContainerdConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigContainerdConfigOutputReference | GoogleContainerClusterNodeConfigContainerdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_registry_access_config: {
      value: googleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct!.privateRegistryAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigList",
    },
    registry_hosts: {
      value: cdktn.listMapperHcl(googleContainerClusterNodeConfigContainerdConfigRegistryHostsToHclTerraform, true)(struct!.registryHosts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsList",
    },
    writable_cgroups: {
      value: googleContainerClusterNodeConfigContainerdConfigWritableCgroupsToHclTerraform(struct!.writableCgroups),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigContainerdConfigWritableCgroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigContainerdConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigContainerdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateRegistryAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateRegistryAccessConfig = this._privateRegistryAccessConfig?.internalValue;
    }
    if (this._registryHosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryHosts = this._registryHosts?.internalValue;
    }
    if (this._writableCgroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writableCgroups = this._writableCgroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigContainerdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateRegistryAccessConfig.internalValue = undefined;
      this._registryHosts.internalValue = undefined;
      this._writableCgroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateRegistryAccessConfig.internalValue = value.privateRegistryAccessConfig;
      this._registryHosts.internalValue = value.registryHosts;
      this._writableCgroups.internalValue = value.writableCgroups;
    }
  }

  // private_registry_access_config - computed: false, optional: true, required: false
  private _privateRegistryAccessConfig = new GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference(this, "private_registry_access_config");
  public get privateRegistryAccessConfig() {
    return this._privateRegistryAccessConfig;
  }
  public putPrivateRegistryAccessConfig(value: GoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig) {
    this._privateRegistryAccessConfig.internalValue = value;
  }
  public resetPrivateRegistryAccessConfig() {
    this._privateRegistryAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRegistryAccessConfigInput() {
    return this._privateRegistryAccessConfig.internalValue;
  }

  // registry_hosts - computed: false, optional: true, required: false
  private _registryHosts = new GoogleContainerClusterNodeConfigContainerdConfigRegistryHostsList(this, "registry_hosts", false);
  public get registryHosts() {
    return this._registryHosts;
  }
  public putRegistryHosts(value: GoogleContainerClusterNodeConfigContainerdConfigRegistryHosts[] | cdktn.IResolvable) {
    this._registryHosts.internalValue = value;
  }
  public resetRegistryHosts() {
    this._registryHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryHostsInput() {
    return this._registryHosts.internalValue;
  }

  // writable_cgroups - computed: false, optional: true, required: false
  private _writableCgroups = new GoogleContainerClusterNodeConfigContainerdConfigWritableCgroupsOutputReference(this, "writable_cgroups");
  public get writableCgroups() {
    return this._writableCgroups;
  }
  public putWritableCgroups(value: GoogleContainerClusterNodeConfigContainerdConfigWritableCgroups) {
    this._writableCgroups.internalValue = value;
  }
  public resetWritableCgroups() {
    this._writableCgroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writableCgroupsInput() {
    return this._writableCgroups.internalValue;
  }
}
export interface GoogleContainerClusterNodeConfigEphemeralStorageConfig {
  /**
  * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function googleContainerClusterNodeConfigEphemeralStorageConfigToTerraform(struct?: GoogleContainerClusterNodeConfigEphemeralStorageConfigOutputReference | GoogleContainerClusterNodeConfigEphemeralStorageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
  }
}


export function googleContainerClusterNodeConfigEphemeralStorageConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigEphemeralStorageConfigOutputReference | GoogleContainerClusterNodeConfigEphemeralStorageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ssd_count: {
      value: cdktn.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigEphemeralStorageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigEphemeralStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigEphemeralStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig {
  /**
  * Number of local SSDs to be utilized for GKE Data Cache. Uses NVMe interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#data_cache_count GoogleContainerCluster#data_cache_count}
  */
  readonly dataCacheCount?: number;
  /**
  * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function googleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct?: GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference | GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_cache_count: cdktn.numberToTerraform(struct!.dataCacheCount),
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
  }
}


export function googleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference | GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_cache_count: {
      value: cdktn.numberToHclTerraform(struct!.dataCacheCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ssd_count: {
      value: cdktn.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCacheCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCacheCount = this._dataCacheCount;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataCacheCount = undefined;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataCacheCount = value.dataCacheCount;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // data_cache_count - computed: false, optional: true, required: false
  private _dataCacheCount?: number; 
  public get dataCacheCount() {
    return this.getNumberAttribute('data_cache_count');
  }
  public set dataCacheCount(value: number) {
    this._dataCacheCount = value;
  }
  public resetDataCacheCount() {
    this._dataCacheCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCacheCountInput() {
    return this._dataCacheCount;
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface GoogleContainerClusterNodeConfigFastSocket {
  /**
  * Whether or not NCCL Fast Socket is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterNodeConfigFastSocketToTerraform(struct?: GoogleContainerClusterNodeConfigFastSocketOutputReference | GoogleContainerClusterNodeConfigFastSocket): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodeConfigFastSocketToHclTerraform(struct?: GoogleContainerClusterNodeConfigFastSocketOutputReference | GoogleContainerClusterNodeConfigFastSocket): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterNodeConfigFastSocketOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigFastSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigFastSocket | undefined) {
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
export interface GoogleContainerClusterNodeConfigGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterNodeConfigGcfsConfigToTerraform(struct?: GoogleContainerClusterNodeConfigGcfsConfigOutputReference | GoogleContainerClusterNodeConfigGcfsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodeConfigGcfsConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigGcfsConfigOutputReference | GoogleContainerClusterNodeConfigGcfsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterNodeConfigGcfsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigGcfsConfig | undefined) {
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
export interface GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  /**
  * Mode for how the GPU driver is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gpu_driver_version GoogleContainerCluster#gpu_driver_version}
  */
  readonly gpuDriverVersion: string;
}

export function googleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct?: GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference | GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_driver_version: cdktn.stringToTerraform(struct!.gpuDriverVersion),
  }
}


export function googleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference | GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_driver_version: {
      value: cdktn.stringToHclTerraform(struct!.gpuDriverVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuDriverVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverVersion = this._gpuDriverVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuDriverVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuDriverVersion = value.gpuDriverVersion;
    }
  }

  // gpu_driver_version - computed: false, optional: false, required: true
  private _gpuDriverVersion?: string; 
  public get gpuDriverVersion() {
    return this.getStringAttribute('gpu_driver_version');
  }
  public set gpuDriverVersion(value: string) {
    this._gpuDriverVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverVersionInput() {
    return this._gpuDriverVersion;
  }
}
export interface GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig {
  /**
  * The type of GPU sharing strategy to enable on the GPU node. Possible values are described in the API package (https://pkg.go.dev/google.golang.org/api/container/v1#GPUSharingConfig)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gpu_sharing_strategy GoogleContainerCluster#gpu_sharing_strategy}
  */
  readonly gpuSharingStrategy: string;
  /**
  * The maximum number of containers that can share a GPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#max_shared_clients_per_gpu GoogleContainerCluster#max_shared_clients_per_gpu}
  */
  readonly maxSharedClientsPerGpu: number;
}

export function googleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct?: GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigOutputReference | GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_sharing_strategy: cdktn.stringToTerraform(struct!.gpuSharingStrategy),
    max_shared_clients_per_gpu: cdktn.numberToTerraform(struct!.maxSharedClientsPerGpu),
  }
}


export function googleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigOutputReference | GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_sharing_strategy: {
      value: cdktn.stringToHclTerraform(struct!.gpuSharingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_shared_clients_per_gpu: {
      value: cdktn.numberToHclTerraform(struct!.maxSharedClientsPerGpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuSharingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSharingStrategy = this._gpuSharingStrategy;
    }
    if (this._maxSharedClientsPerGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSharedClientsPerGpu = this._maxSharedClientsPerGpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuSharingStrategy = undefined;
      this._maxSharedClientsPerGpu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuSharingStrategy = value.gpuSharingStrategy;
      this._maxSharedClientsPerGpu = value.maxSharedClientsPerGpu;
    }
  }

  // gpu_sharing_strategy - computed: false, optional: false, required: true
  private _gpuSharingStrategy?: string; 
  public get gpuSharingStrategy() {
    return this.getStringAttribute('gpu_sharing_strategy');
  }
  public set gpuSharingStrategy(value: string) {
    this._gpuSharingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSharingStrategyInput() {
    return this._gpuSharingStrategy;
  }

  // max_shared_clients_per_gpu - computed: false, optional: false, required: true
  private _maxSharedClientsPerGpu?: number; 
  public get maxSharedClientsPerGpu() {
    return this.getNumberAttribute('max_shared_clients_per_gpu');
  }
  public set maxSharedClientsPerGpu(value: number) {
    this._maxSharedClientsPerGpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSharedClientsPerGpuInput() {
    return this._maxSharedClientsPerGpu;
  }
}
export interface GoogleContainerClusterNodeConfigGuestAccelerator {
  /**
  * The number of the accelerator cards exposed to an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#count GoogleContainerCluster#count}
  */
  readonly count: number;
  /**
  * Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gpu_partition_size GoogleContainerCluster#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * The accelerator type resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#type GoogleContainerCluster#type}
  */
  readonly type: string;
  /**
  * gpu_driver_installation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gpu_driver_installation_config GoogleContainerCluster#gpu_driver_installation_config}
  */
  readonly gpuDriverInstallationConfig?: GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig;
  /**
  * gpu_sharing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gpu_sharing_config GoogleContainerCluster#gpu_sharing_config}
  */
  readonly gpuSharingConfig?: GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig;
}

export function googleContainerClusterNodeConfigGuestAcceleratorToTerraform(struct?: GoogleContainerClusterNodeConfigGuestAccelerator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    gpu_partition_size: cdktn.stringToTerraform(struct!.gpuPartitionSize),
    type: cdktn.stringToTerraform(struct!.type),
    gpu_driver_installation_config: googleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct!.gpuDriverInstallationConfig),
    gpu_sharing_config: googleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct!.gpuSharingConfig),
  }
}


export function googleContainerClusterNodeConfigGuestAcceleratorToHclTerraform(struct?: GoogleContainerClusterNodeConfigGuestAccelerator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpu_partition_size: {
      value: cdktn.stringToHclTerraform(struct!.gpuPartitionSize),
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
    gpu_driver_installation_config: {
      value: googleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct!.gpuDriverInstallationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigList",
    },
    gpu_sharing_config: {
      value: googleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct!.gpuSharingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigGuestAcceleratorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigGuestAccelerator | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._gpuPartitionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPartitionSize = this._gpuPartitionSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._gpuDriverInstallationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverInstallationConfig = this._gpuDriverInstallationConfig?.internalValue;
    }
    if (this._gpuSharingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSharingConfig = this._gpuSharingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigGuestAccelerator | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._gpuPartitionSize = undefined;
      this._type = undefined;
      this._gpuDriverInstallationConfig.internalValue = undefined;
      this._gpuSharingConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._gpuPartitionSize = value.gpuPartitionSize;
      this._type = value.type;
      this._gpuDriverInstallationConfig.internalValue = value.gpuDriverInstallationConfig;
      this._gpuSharingConfig.internalValue = value.gpuSharingConfig;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // gpu_partition_size - computed: false, optional: true, required: false
  private _gpuPartitionSize?: string; 
  public get gpuPartitionSize() {
    return this.getStringAttribute('gpu_partition_size');
  }
  public set gpuPartitionSize(value: string) {
    this._gpuPartitionSize = value;
  }
  public resetGpuPartitionSize() {
    this._gpuPartitionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPartitionSizeInput() {
    return this._gpuPartitionSize;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // gpu_driver_installation_config - computed: false, optional: true, required: false
  private _gpuDriverInstallationConfig = new GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference(this, "gpu_driver_installation_config");
  public get gpuDriverInstallationConfig() {
    return this._gpuDriverInstallationConfig;
  }
  public putGpuDriverInstallationConfig(value: GoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig) {
    this._gpuDriverInstallationConfig.internalValue = value;
  }
  public resetGpuDriverInstallationConfig() {
    this._gpuDriverInstallationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverInstallationConfigInput() {
    return this._gpuDriverInstallationConfig.internalValue;
  }

  // gpu_sharing_config - computed: false, optional: true, required: false
  private _gpuSharingConfig = new GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigOutputReference(this, "gpu_sharing_config");
  public get gpuSharingConfig() {
    return this._gpuSharingConfig;
  }
  public putGpuSharingConfig(value: GoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig) {
    this._gpuSharingConfig.internalValue = value;
  }
  public resetGpuSharingConfig() {
    this._gpuSharingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSharingConfigInput() {
    return this._gpuSharingConfig.internalValue;
  }
}

export class GoogleContainerClusterNodeConfigGuestAcceleratorList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigGuestAccelerator[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterNodeConfigGuestAcceleratorOutputReference {
    return new GoogleContainerClusterNodeConfigGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigGvnic {
  /**
  * Whether or not gvnic is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterNodeConfigGvnicToTerraform(struct?: GoogleContainerClusterNodeConfigGvnicOutputReference | GoogleContainerClusterNodeConfigGvnic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodeConfigGvnicToHclTerraform(struct?: GoogleContainerClusterNodeConfigGvnicOutputReference | GoogleContainerClusterNodeConfigGvnic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class GoogleContainerClusterNodeConfigGvnicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigGvnic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigGvnic | undefined) {
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
export interface GoogleContainerClusterNodeConfigHostMaintenancePolicy {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#maintenance_interval GoogleContainerCluster#maintenance_interval}
  */
  readonly maintenanceInterval: string;
}

export function googleContainerClusterNodeConfigHostMaintenancePolicyToTerraform(struct?: GoogleContainerClusterNodeConfigHostMaintenancePolicyOutputReference | GoogleContainerClusterNodeConfigHostMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_interval: cdktn.stringToTerraform(struct!.maintenanceInterval),
  }
}


export function googleContainerClusterNodeConfigHostMaintenancePolicyToHclTerraform(struct?: GoogleContainerClusterNodeConfigHostMaintenancePolicyOutputReference | GoogleContainerClusterNodeConfigHostMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_interval: {
      value: cdktn.stringToHclTerraform(struct!.maintenanceInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigHostMaintenancePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigHostMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceInterval = this._maintenanceInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigHostMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceInterval = value.maintenanceInterval;
    }
  }

  // maintenance_interval - computed: false, optional: false, required: true
  private _maintenanceInterval?: string; 
  public get maintenanceInterval() {
    return this.getStringAttribute('maintenance_interval');
  }
  public set maintenanceInterval(value: string) {
    this._maintenanceInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceIntervalInput() {
    return this._maintenanceInterval;
  }
}
export interface GoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaim {
  /**
  * Defines percentage of minimum reclaim for imagefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#imagefs_available GoogleContainerCluster#imagefs_available}
  */
  readonly imagefsAvailable?: string;
  /**
  * Defines percentage of minimum reclaim for imagefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#imagefs_inodes_free GoogleContainerCluster#imagefs_inodes_free}
  */
  readonly imagefsInodesFree?: string;
  /**
  * Defines percentage of minimum reclaim for memory.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#memory_available GoogleContainerCluster#memory_available}
  */
  readonly memoryAvailable?: string;
  /**
  * Defines percentage of minimum reclaim for nodefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#nodefs_available GoogleContainerCluster#nodefs_available}
  */
  readonly nodefsAvailable?: string;
  /**
  * Defines percentage of minimum reclaim for nodefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#nodefs_inodes_free GoogleContainerCluster#nodefs_inodes_free}
  */
  readonly nodefsInodesFree?: string;
  /**
  * Defines percentage of minimum reclaim for pid.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#pid_available GoogleContainerCluster#pid_available}
  */
  readonly pidAvailable?: string;
}

export function googleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimToTerraform(struct?: GoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference | GoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaim): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imagefs_available: cdktn.stringToTerraform(struct!.imagefsAvailable),
    imagefs_inodes_free: cdktn.stringToTerraform(struct!.imagefsInodesFree),
    memory_available: cdktn.stringToTerraform(struct!.memoryAvailable),
    nodefs_available: cdktn.stringToTerraform(struct!.nodefsAvailable),
    nodefs_inodes_free: cdktn.stringToTerraform(struct!.nodefsInodesFree),
    pid_available: cdktn.stringToTerraform(struct!.pidAvailable),
  }
}


export function googleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimToHclTerraform(struct?: GoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference | GoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaim): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imagefs_available: {
      value: cdktn.stringToHclTerraform(struct!.imagefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagefs_inodes_free: {
      value: cdktn.stringToHclTerraform(struct!.imagefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_available: {
      value: cdktn.stringToHclTerraform(struct!.memoryAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_available: {
      value: cdktn.stringToHclTerraform(struct!.nodefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_inodes_free: {
      value: cdktn.stringToHclTerraform(struct!.nodefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid_available: {
      value: cdktn.stringToHclTerraform(struct!.pidAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imagefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsAvailable = this._imagefsAvailable;
    }
    if (this._imagefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsInodesFree = this._imagefsInodesFree;
    }
    if (this._memoryAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryAvailable = this._memoryAvailable;
    }
    if (this._nodefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsAvailable = this._nodefsAvailable;
    }
    if (this._nodefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsInodesFree = this._nodefsInodesFree;
    }
    if (this._pidAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pidAvailable = this._pidAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imagefsAvailable = undefined;
      this._imagefsInodesFree = undefined;
      this._memoryAvailable = undefined;
      this._nodefsAvailable = undefined;
      this._nodefsInodesFree = undefined;
      this._pidAvailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imagefsAvailable = value.imagefsAvailable;
      this._imagefsInodesFree = value.imagefsInodesFree;
      this._memoryAvailable = value.memoryAvailable;
      this._nodefsAvailable = value.nodefsAvailable;
      this._nodefsInodesFree = value.nodefsInodesFree;
      this._pidAvailable = value.pidAvailable;
    }
  }

  // imagefs_available - computed: false, optional: true, required: false
  private _imagefsAvailable?: string; 
  public get imagefsAvailable() {
    return this.getStringAttribute('imagefs_available');
  }
  public set imagefsAvailable(value: string) {
    this._imagefsAvailable = value;
  }
  public resetImagefsAvailable() {
    this._imagefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsAvailableInput() {
    return this._imagefsAvailable;
  }

  // imagefs_inodes_free - computed: false, optional: true, required: false
  private _imagefsInodesFree?: string; 
  public get imagefsInodesFree() {
    return this.getStringAttribute('imagefs_inodes_free');
  }
  public set imagefsInodesFree(value: string) {
    this._imagefsInodesFree = value;
  }
  public resetImagefsInodesFree() {
    this._imagefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsInodesFreeInput() {
    return this._imagefsInodesFree;
  }

  // memory_available - computed: false, optional: true, required: false
  private _memoryAvailable?: string; 
  public get memoryAvailable() {
    return this.getStringAttribute('memory_available');
  }
  public set memoryAvailable(value: string) {
    this._memoryAvailable = value;
  }
  public resetMemoryAvailable() {
    this._memoryAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryAvailableInput() {
    return this._memoryAvailable;
  }

  // nodefs_available - computed: false, optional: true, required: false
  private _nodefsAvailable?: string; 
  public get nodefsAvailable() {
    return this.getStringAttribute('nodefs_available');
  }
  public set nodefsAvailable(value: string) {
    this._nodefsAvailable = value;
  }
  public resetNodefsAvailable() {
    this._nodefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsAvailableInput() {
    return this._nodefsAvailable;
  }

  // nodefs_inodes_free - computed: false, optional: true, required: false
  private _nodefsInodesFree?: string; 
  public get nodefsInodesFree() {
    return this.getStringAttribute('nodefs_inodes_free');
  }
  public set nodefsInodesFree(value: string) {
    this._nodefsInodesFree = value;
  }
  public resetNodefsInodesFree() {
    this._nodefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsInodesFreeInput() {
    return this._nodefsInodesFree;
  }

  // pid_available - computed: false, optional: true, required: false
  private _pidAvailable?: string; 
  public get pidAvailable() {
    return this.getStringAttribute('pid_available');
  }
  public set pidAvailable(value: string) {
    this._pidAvailable = value;
  }
  public resetPidAvailable() {
    this._pidAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidAvailableInput() {
    return this._pidAvailable;
  }
}
export interface GoogleContainerClusterNodeConfigKubeletConfigEvictionSoft {
  /**
  * Defines percentage of soft eviction threshold for imagefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#imagefs_available GoogleContainerCluster#imagefs_available}
  */
  readonly imagefsAvailable?: string;
  /**
  * Defines percentage of soft eviction threshold for imagefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#imagefs_inodes_free GoogleContainerCluster#imagefs_inodes_free}
  */
  readonly imagefsInodesFree?: string;
  /**
  * Defines quantity of soft eviction threshold for memory.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#memory_available GoogleContainerCluster#memory_available}
  */
  readonly memoryAvailable?: string;
  /**
  * Defines percentage of soft eviction threshold for nodefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#nodefs_available GoogleContainerCluster#nodefs_available}
  */
  readonly nodefsAvailable?: string;
  /**
  * Defines percentage of soft eviction threshold for nodefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#nodefs_inodes_free GoogleContainerCluster#nodefs_inodes_free}
  */
  readonly nodefsInodesFree?: string;
  /**
  * Defines percentage of soft eviction threshold for pid.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#pid_available GoogleContainerCluster#pid_available}
  */
  readonly pidAvailable?: string;
}

export function googleContainerClusterNodeConfigKubeletConfigEvictionSoftToTerraform(struct?: GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftOutputReference | GoogleContainerClusterNodeConfigKubeletConfigEvictionSoft): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imagefs_available: cdktn.stringToTerraform(struct!.imagefsAvailable),
    imagefs_inodes_free: cdktn.stringToTerraform(struct!.imagefsInodesFree),
    memory_available: cdktn.stringToTerraform(struct!.memoryAvailable),
    nodefs_available: cdktn.stringToTerraform(struct!.nodefsAvailable),
    nodefs_inodes_free: cdktn.stringToTerraform(struct!.nodefsInodesFree),
    pid_available: cdktn.stringToTerraform(struct!.pidAvailable),
  }
}


export function googleContainerClusterNodeConfigKubeletConfigEvictionSoftToHclTerraform(struct?: GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftOutputReference | GoogleContainerClusterNodeConfigKubeletConfigEvictionSoft): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imagefs_available: {
      value: cdktn.stringToHclTerraform(struct!.imagefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagefs_inodes_free: {
      value: cdktn.stringToHclTerraform(struct!.imagefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_available: {
      value: cdktn.stringToHclTerraform(struct!.memoryAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_available: {
      value: cdktn.stringToHclTerraform(struct!.nodefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_inodes_free: {
      value: cdktn.stringToHclTerraform(struct!.nodefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid_available: {
      value: cdktn.stringToHclTerraform(struct!.pidAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigKubeletConfigEvictionSoft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imagefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsAvailable = this._imagefsAvailable;
    }
    if (this._imagefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsInodesFree = this._imagefsInodesFree;
    }
    if (this._memoryAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryAvailable = this._memoryAvailable;
    }
    if (this._nodefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsAvailable = this._nodefsAvailable;
    }
    if (this._nodefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsInodesFree = this._nodefsInodesFree;
    }
    if (this._pidAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pidAvailable = this._pidAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigKubeletConfigEvictionSoft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imagefsAvailable = undefined;
      this._imagefsInodesFree = undefined;
      this._memoryAvailable = undefined;
      this._nodefsAvailable = undefined;
      this._nodefsInodesFree = undefined;
      this._pidAvailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imagefsAvailable = value.imagefsAvailable;
      this._imagefsInodesFree = value.imagefsInodesFree;
      this._memoryAvailable = value.memoryAvailable;
      this._nodefsAvailable = value.nodefsAvailable;
      this._nodefsInodesFree = value.nodefsInodesFree;
      this._pidAvailable = value.pidAvailable;
    }
  }

  // imagefs_available - computed: false, optional: true, required: false
  private _imagefsAvailable?: string; 
  public get imagefsAvailable() {
    return this.getStringAttribute('imagefs_available');
  }
  public set imagefsAvailable(value: string) {
    this._imagefsAvailable = value;
  }
  public resetImagefsAvailable() {
    this._imagefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsAvailableInput() {
    return this._imagefsAvailable;
  }

  // imagefs_inodes_free - computed: false, optional: true, required: false
  private _imagefsInodesFree?: string; 
  public get imagefsInodesFree() {
    return this.getStringAttribute('imagefs_inodes_free');
  }
  public set imagefsInodesFree(value: string) {
    this._imagefsInodesFree = value;
  }
  public resetImagefsInodesFree() {
    this._imagefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsInodesFreeInput() {
    return this._imagefsInodesFree;
  }

  // memory_available - computed: false, optional: true, required: false
  private _memoryAvailable?: string; 
  public get memoryAvailable() {
    return this.getStringAttribute('memory_available');
  }
  public set memoryAvailable(value: string) {
    this._memoryAvailable = value;
  }
  public resetMemoryAvailable() {
    this._memoryAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryAvailableInput() {
    return this._memoryAvailable;
  }

  // nodefs_available - computed: false, optional: true, required: false
  private _nodefsAvailable?: string; 
  public get nodefsAvailable() {
    return this.getStringAttribute('nodefs_available');
  }
  public set nodefsAvailable(value: string) {
    this._nodefsAvailable = value;
  }
  public resetNodefsAvailable() {
    this._nodefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsAvailableInput() {
    return this._nodefsAvailable;
  }

  // nodefs_inodes_free - computed: false, optional: true, required: false
  private _nodefsInodesFree?: string; 
  public get nodefsInodesFree() {
    return this.getStringAttribute('nodefs_inodes_free');
  }
  public set nodefsInodesFree(value: string) {
    this._nodefsInodesFree = value;
  }
  public resetNodefsInodesFree() {
    this._nodefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsInodesFreeInput() {
    return this._nodefsInodesFree;
  }

  // pid_available - computed: false, optional: true, required: false
  private _pidAvailable?: string; 
  public get pidAvailable() {
    return this.getStringAttribute('pid_available');
  }
  public set pidAvailable(value: string) {
    this._pidAvailable = value;
  }
  public resetPidAvailable() {
    this._pidAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidAvailableInput() {
    return this._pidAvailable;
  }
}
export interface GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriod {
  /**
  * Defines grace period for the imagefs.available soft eviction threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#imagefs_available GoogleContainerCluster#imagefs_available}
  */
  readonly imagefsAvailable?: string;
  /**
  * Defines grace period for the imagefs.inodesFree soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#imagefs_inodes_free GoogleContainerCluster#imagefs_inodes_free}
  */
  readonly imagefsInodesFree?: string;
  /**
  * Defines grace period for the memory.available soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#memory_available GoogleContainerCluster#memory_available}
  */
  readonly memoryAvailable?: string;
  /**
  * Defines grace period for the nodefs.available soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#nodefs_available GoogleContainerCluster#nodefs_available}
  */
  readonly nodefsAvailable?: string;
  /**
  * Defines grace period for the nodefs.inodesFree soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#nodefs_inodes_free GoogleContainerCluster#nodefs_inodes_free}
  */
  readonly nodefsInodesFree?: string;
  /**
  * Defines grace period for the pid.available soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#pid_available GoogleContainerCluster#pid_available}
  */
  readonly pidAvailable?: string;
}

export function googleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodToTerraform(struct?: GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference | GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imagefs_available: cdktn.stringToTerraform(struct!.imagefsAvailable),
    imagefs_inodes_free: cdktn.stringToTerraform(struct!.imagefsInodesFree),
    memory_available: cdktn.stringToTerraform(struct!.memoryAvailable),
    nodefs_available: cdktn.stringToTerraform(struct!.nodefsAvailable),
    nodefs_inodes_free: cdktn.stringToTerraform(struct!.nodefsInodesFree),
    pid_available: cdktn.stringToTerraform(struct!.pidAvailable),
  }
}


export function googleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodToHclTerraform(struct?: GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference | GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imagefs_available: {
      value: cdktn.stringToHclTerraform(struct!.imagefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagefs_inodes_free: {
      value: cdktn.stringToHclTerraform(struct!.imagefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_available: {
      value: cdktn.stringToHclTerraform(struct!.memoryAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_available: {
      value: cdktn.stringToHclTerraform(struct!.nodefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_inodes_free: {
      value: cdktn.stringToHclTerraform(struct!.nodefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid_available: {
      value: cdktn.stringToHclTerraform(struct!.pidAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imagefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsAvailable = this._imagefsAvailable;
    }
    if (this._imagefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsInodesFree = this._imagefsInodesFree;
    }
    if (this._memoryAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryAvailable = this._memoryAvailable;
    }
    if (this._nodefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsAvailable = this._nodefsAvailable;
    }
    if (this._nodefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsInodesFree = this._nodefsInodesFree;
    }
    if (this._pidAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pidAvailable = this._pidAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imagefsAvailable = undefined;
      this._imagefsInodesFree = undefined;
      this._memoryAvailable = undefined;
      this._nodefsAvailable = undefined;
      this._nodefsInodesFree = undefined;
      this._pidAvailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imagefsAvailable = value.imagefsAvailable;
      this._imagefsInodesFree = value.imagefsInodesFree;
      this._memoryAvailable = value.memoryAvailable;
      this._nodefsAvailable = value.nodefsAvailable;
      this._nodefsInodesFree = value.nodefsInodesFree;
      this._pidAvailable = value.pidAvailable;
    }
  }

  // imagefs_available - computed: false, optional: true, required: false
  private _imagefsAvailable?: string; 
  public get imagefsAvailable() {
    return this.getStringAttribute('imagefs_available');
  }
  public set imagefsAvailable(value: string) {
    this._imagefsAvailable = value;
  }
  public resetImagefsAvailable() {
    this._imagefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsAvailableInput() {
    return this._imagefsAvailable;
  }

  // imagefs_inodes_free - computed: false, optional: true, required: false
  private _imagefsInodesFree?: string; 
  public get imagefsInodesFree() {
    return this.getStringAttribute('imagefs_inodes_free');
  }
  public set imagefsInodesFree(value: string) {
    this._imagefsInodesFree = value;
  }
  public resetImagefsInodesFree() {
    this._imagefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsInodesFreeInput() {
    return this._imagefsInodesFree;
  }

  // memory_available - computed: false, optional: true, required: false
  private _memoryAvailable?: string; 
  public get memoryAvailable() {
    return this.getStringAttribute('memory_available');
  }
  public set memoryAvailable(value: string) {
    this._memoryAvailable = value;
  }
  public resetMemoryAvailable() {
    this._memoryAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryAvailableInput() {
    return this._memoryAvailable;
  }

  // nodefs_available - computed: false, optional: true, required: false
  private _nodefsAvailable?: string; 
  public get nodefsAvailable() {
    return this.getStringAttribute('nodefs_available');
  }
  public set nodefsAvailable(value: string) {
    this._nodefsAvailable = value;
  }
  public resetNodefsAvailable() {
    this._nodefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsAvailableInput() {
    return this._nodefsAvailable;
  }

  // nodefs_inodes_free - computed: false, optional: true, required: false
  private _nodefsInodesFree?: string; 
  public get nodefsInodesFree() {
    return this.getStringAttribute('nodefs_inodes_free');
  }
  public set nodefsInodesFree(value: string) {
    this._nodefsInodesFree = value;
  }
  public resetNodefsInodesFree() {
    this._nodefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsInodesFreeInput() {
    return this._nodefsInodesFree;
  }

  // pid_available - computed: false, optional: true, required: false
  private _pidAvailable?: string; 
  public get pidAvailable() {
    return this.getStringAttribute('pid_available');
  }
  public set pidAvailable(value: string) {
    this._pidAvailable = value;
  }
  public resetPidAvailable() {
    this._pidAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidAvailableInput() {
    return this._pidAvailable;
  }
}
export interface GoogleContainerClusterNodeConfigKubeletConfigMemoryManager {
  /**
  * The Memory Manager policy to use. This policy guides how memory and hugepages are allocated and managed for pods on the node, influencing NUMA affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#policy GoogleContainerCluster#policy}
  */
  readonly policy?: string;
}

export function googleContainerClusterNodeConfigKubeletConfigMemoryManagerToTerraform(struct?: GoogleContainerClusterNodeConfigKubeletConfigMemoryManagerOutputReference | GoogleContainerClusterNodeConfigKubeletConfigMemoryManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktn.stringToTerraform(struct!.policy),
  }
}


export function googleContainerClusterNodeConfigKubeletConfigMemoryManagerToHclTerraform(struct?: GoogleContainerClusterNodeConfigKubeletConfigMemoryManagerOutputReference | GoogleContainerClusterNodeConfigKubeletConfigMemoryManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktn.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigKubeletConfigMemoryManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigKubeletConfigMemoryManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigKubeletConfigMemoryManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
    }
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface GoogleContainerClusterNodeConfigKubeletConfigTopologyManager {
  /**
  * The Topology Manager policy to use. This policy dictates how resource alignment is handled on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#policy GoogleContainerCluster#policy}
  */
  readonly policy?: string;
  /**
  * The Topology Manager scope, defining the granularity at which policy decisions are applied. Valid values are "container" (resources are aligned per container within a pod) or "pod" (resources are aligned for the entire pod).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#scope GoogleContainerCluster#scope}
  */
  readonly scope?: string;
}

export function googleContainerClusterNodeConfigKubeletConfigTopologyManagerToTerraform(struct?: GoogleContainerClusterNodeConfigKubeletConfigTopologyManagerOutputReference | GoogleContainerClusterNodeConfigKubeletConfigTopologyManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktn.stringToTerraform(struct!.policy),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function googleContainerClusterNodeConfigKubeletConfigTopologyManagerToHclTerraform(struct?: GoogleContainerClusterNodeConfigKubeletConfigTopologyManagerOutputReference | GoogleContainerClusterNodeConfigKubeletConfigTopologyManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktn.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigKubeletConfigTopologyManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigKubeletConfigTopologyManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigKubeletConfigTopologyManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
      this._scope = value.scope;
    }
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface GoogleContainerClusterNodeConfigKubeletConfig {
  /**
  * Defines a comma-separated allowlist of unsafe sysctls or sysctl patterns which can be set on the Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#allowed_unsafe_sysctls GoogleContainerCluster#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Defines the maximum number of container log files that can be present for a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#container_log_max_files GoogleContainerCluster#container_log_max_files}
  */
  readonly containerLogMaxFiles?: number;
  /**
  * Defines the maximum size of the container log file before it is rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#container_log_max_size GoogleContainerCluster#container_log_max_size}
  */
  readonly containerLogMaxSize?: string;
  /**
  * Enable CPU CFS quota enforcement for containers that specify CPU limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#cpu_cfs_quota GoogleContainerCluster#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktn.IResolvable;
  /**
  * Set the CPU CFS quota period value 'cpu.cfs_period_us'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#cpu_cfs_quota_period GoogleContainerCluster#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Control the CPU management policy on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#cpu_manager_policy GoogleContainerCluster#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * Defines the maximum allowed grace period (in seconds) to use when terminating pods in response to a soft eviction threshold being met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#eviction_max_pod_grace_period_seconds GoogleContainerCluster#eviction_max_pod_grace_period_seconds}
  */
  readonly evictionMaxPodGracePeriodSeconds?: number;
  /**
  * Defines the percent of disk usage after which image garbage collection is always run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#image_gc_high_threshold_percent GoogleContainerCluster#image_gc_high_threshold_percent}
  */
  readonly imageGcHighThresholdPercent?: number;
  /**
  * Defines the percent of disk usage before which image garbage collection is never run. Lowest disk usage to garbage collect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#image_gc_low_threshold_percent GoogleContainerCluster#image_gc_low_threshold_percent}
  */
  readonly imageGcLowThresholdPercent?: number;
  /**
  * Defines the maximum age an image can be unused before it is garbage collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#image_maximum_gc_age GoogleContainerCluster#image_maximum_gc_age}
  */
  readonly imageMaximumGcAge?: string;
  /**
  * Defines the minimum age for an unused image before it is garbage collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#image_minimum_gc_age GoogleContainerCluster#image_minimum_gc_age}
  */
  readonly imageMinimumGcAge?: string;
  /**
  * Controls whether the kubelet read-only port is enabled. It is strongly recommended to set this to `FALSE`. Possible values: `TRUE`, `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#insecure_kubelet_readonly_port_enabled GoogleContainerCluster#insecure_kubelet_readonly_port_enabled}
  */
  readonly insecureKubeletReadonlyPortEnabled?: string;
  /**
  * Set the maximum number of image pulls in parallel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#max_parallel_image_pulls GoogleContainerCluster#max_parallel_image_pulls}
  */
  readonly maxParallelImagePulls?: number;
  /**
  * Controls the maximum number of processes allowed to run in a pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#pod_pids_limit GoogleContainerCluster#pod_pids_limit}
  */
  readonly podPidsLimit?: number;
  /**
  * Defines whether to enable single process OOM killer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#single_process_oom_kill GoogleContainerCluster#single_process_oom_kill}
  */
  readonly singleProcessOomKill?: boolean | cdktn.IResolvable;
  /**
  * eviction_minimum_reclaim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#eviction_minimum_reclaim GoogleContainerCluster#eviction_minimum_reclaim}
  */
  readonly evictionMinimumReclaim?: GoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaim;
  /**
  * eviction_soft block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#eviction_soft GoogleContainerCluster#eviction_soft}
  */
  readonly evictionSoft?: GoogleContainerClusterNodeConfigKubeletConfigEvictionSoft;
  /**
  * eviction_soft_grace_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#eviction_soft_grace_period GoogleContainerCluster#eviction_soft_grace_period}
  */
  readonly evictionSoftGracePeriod?: GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriod;
  /**
  * memory_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#memory_manager GoogleContainerCluster#memory_manager}
  */
  readonly memoryManager?: GoogleContainerClusterNodeConfigKubeletConfigMemoryManager;
  /**
  * topology_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#topology_manager GoogleContainerCluster#topology_manager}
  */
  readonly topologyManager?: GoogleContainerClusterNodeConfigKubeletConfigTopologyManager;
}

export function googleContainerClusterNodeConfigKubeletConfigToTerraform(struct?: GoogleContainerClusterNodeConfigKubeletConfigOutputReference | GoogleContainerClusterNodeConfigKubeletConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_unsafe_sysctls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedUnsafeSysctls),
    container_log_max_files: cdktn.numberToTerraform(struct!.containerLogMaxFiles),
    container_log_max_size: cdktn.stringToTerraform(struct!.containerLogMaxSize),
    cpu_cfs_quota: cdktn.booleanToTerraform(struct!.cpuCfsQuota),
    cpu_cfs_quota_period: cdktn.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktn.stringToTerraform(struct!.cpuManagerPolicy),
    eviction_max_pod_grace_period_seconds: cdktn.numberToTerraform(struct!.evictionMaxPodGracePeriodSeconds),
    image_gc_high_threshold_percent: cdktn.numberToTerraform(struct!.imageGcHighThresholdPercent),
    image_gc_low_threshold_percent: cdktn.numberToTerraform(struct!.imageGcLowThresholdPercent),
    image_maximum_gc_age: cdktn.stringToTerraform(struct!.imageMaximumGcAge),
    image_minimum_gc_age: cdktn.stringToTerraform(struct!.imageMinimumGcAge),
    insecure_kubelet_readonly_port_enabled: cdktn.stringToTerraform(struct!.insecureKubeletReadonlyPortEnabled),
    max_parallel_image_pulls: cdktn.numberToTerraform(struct!.maxParallelImagePulls),
    pod_pids_limit: cdktn.numberToTerraform(struct!.podPidsLimit),
    single_process_oom_kill: cdktn.booleanToTerraform(struct!.singleProcessOomKill),
    eviction_minimum_reclaim: googleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimToTerraform(struct!.evictionMinimumReclaim),
    eviction_soft: googleContainerClusterNodeConfigKubeletConfigEvictionSoftToTerraform(struct!.evictionSoft),
    eviction_soft_grace_period: googleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodToTerraform(struct!.evictionSoftGracePeriod),
    memory_manager: googleContainerClusterNodeConfigKubeletConfigMemoryManagerToTerraform(struct!.memoryManager),
    topology_manager: googleContainerClusterNodeConfigKubeletConfigTopologyManagerToTerraform(struct!.topologyManager),
  }
}


export function googleContainerClusterNodeConfigKubeletConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigKubeletConfigOutputReference | GoogleContainerClusterNodeConfigKubeletConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_unsafe_sysctls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedUnsafeSysctls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_log_max_files: {
      value: cdktn.numberToHclTerraform(struct!.containerLogMaxFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_log_max_size: {
      value: cdktn.stringToHclTerraform(struct!.containerLogMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_cfs_quota: {
      value: cdktn.booleanToHclTerraform(struct!.cpuCfsQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_cfs_quota_period: {
      value: cdktn.stringToHclTerraform(struct!.cpuCfsQuotaPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manager_policy: {
      value: cdktn.stringToHclTerraform(struct!.cpuManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eviction_max_pod_grace_period_seconds: {
      value: cdktn.numberToHclTerraform(struct!.evictionMaxPodGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_high_threshold_percent: {
      value: cdktn.numberToHclTerraform(struct!.imageGcHighThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_low_threshold_percent: {
      value: cdktn.numberToHclTerraform(struct!.imageGcLowThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_maximum_gc_age: {
      value: cdktn.stringToHclTerraform(struct!.imageMaximumGcAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_minimum_gc_age: {
      value: cdktn.stringToHclTerraform(struct!.imageMinimumGcAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_kubelet_readonly_port_enabled: {
      value: cdktn.stringToHclTerraform(struct!.insecureKubeletReadonlyPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_parallel_image_pulls: {
      value: cdktn.numberToHclTerraform(struct!.maxParallelImagePulls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_pids_limit: {
      value: cdktn.numberToHclTerraform(struct!.podPidsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    single_process_oom_kill: {
      value: cdktn.booleanToHclTerraform(struct!.singleProcessOomKill),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eviction_minimum_reclaim: {
      value: googleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimToHclTerraform(struct!.evictionMinimumReclaim),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimList",
    },
    eviction_soft: {
      value: googleContainerClusterNodeConfigKubeletConfigEvictionSoftToHclTerraform(struct!.evictionSoft),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftList",
    },
    eviction_soft_grace_period: {
      value: googleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodToHclTerraform(struct!.evictionSoftGracePeriod),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodList",
    },
    memory_manager: {
      value: googleContainerClusterNodeConfigKubeletConfigMemoryManagerToHclTerraform(struct!.memoryManager),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigKubeletConfigMemoryManagerList",
    },
    topology_manager: {
      value: googleContainerClusterNodeConfigKubeletConfigTopologyManagerToHclTerraform(struct!.topologyManager),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigKubeletConfigTopologyManagerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigKubeletConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._containerLogMaxFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxFiles = this._containerLogMaxFiles;
    }
    if (this._containerLogMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxSize = this._containerLogMaxSize;
    }
    if (this._cpuCfsQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota;
    }
    if (this._cpuCfsQuotaPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaPeriod = this._cpuCfsQuotaPeriod;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    if (this._evictionMaxPodGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionMaxPodGracePeriodSeconds = this._evictionMaxPodGracePeriodSeconds;
    }
    if (this._imageGcHighThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThresholdPercent = this._imageGcHighThresholdPercent;
    }
    if (this._imageGcLowThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThresholdPercent = this._imageGcLowThresholdPercent;
    }
    if (this._imageMaximumGcAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageMaximumGcAge = this._imageMaximumGcAge;
    }
    if (this._imageMinimumGcAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageMinimumGcAge = this._imageMinimumGcAge;
    }
    if (this._insecureKubeletReadonlyPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureKubeletReadonlyPortEnabled = this._insecureKubeletReadonlyPortEnabled;
    }
    if (this._maxParallelImagePulls !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelImagePulls = this._maxParallelImagePulls;
    }
    if (this._podPidsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPidsLimit = this._podPidsLimit;
    }
    if (this._singleProcessOomKill !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleProcessOomKill = this._singleProcessOomKill;
    }
    if (this._evictionMinimumReclaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionMinimumReclaim = this._evictionMinimumReclaim?.internalValue;
    }
    if (this._evictionSoft?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoft = this._evictionSoft?.internalValue;
    }
    if (this._evictionSoftGracePeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoftGracePeriod = this._evictionSoftGracePeriod?.internalValue;
    }
    if (this._memoryManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryManager = this._memoryManager?.internalValue;
    }
    if (this._topologyManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyManager = this._topologyManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedUnsafeSysctls = undefined;
      this._containerLogMaxFiles = undefined;
      this._containerLogMaxSize = undefined;
      this._cpuCfsQuota = undefined;
      this._cpuCfsQuotaPeriod = undefined;
      this._cpuManagerPolicy = undefined;
      this._evictionMaxPodGracePeriodSeconds = undefined;
      this._imageGcHighThresholdPercent = undefined;
      this._imageGcLowThresholdPercent = undefined;
      this._imageMaximumGcAge = undefined;
      this._imageMinimumGcAge = undefined;
      this._insecureKubeletReadonlyPortEnabled = undefined;
      this._maxParallelImagePulls = undefined;
      this._podPidsLimit = undefined;
      this._singleProcessOomKill = undefined;
      this._evictionMinimumReclaim.internalValue = undefined;
      this._evictionSoft.internalValue = undefined;
      this._evictionSoftGracePeriod.internalValue = undefined;
      this._memoryManager.internalValue = undefined;
      this._topologyManager.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._containerLogMaxFiles = value.containerLogMaxFiles;
      this._containerLogMaxSize = value.containerLogMaxSize;
      this._cpuCfsQuota = value.cpuCfsQuota;
      this._cpuCfsQuotaPeriod = value.cpuCfsQuotaPeriod;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
      this._evictionMaxPodGracePeriodSeconds = value.evictionMaxPodGracePeriodSeconds;
      this._imageGcHighThresholdPercent = value.imageGcHighThresholdPercent;
      this._imageGcLowThresholdPercent = value.imageGcLowThresholdPercent;
      this._imageMaximumGcAge = value.imageMaximumGcAge;
      this._imageMinimumGcAge = value.imageMinimumGcAge;
      this._insecureKubeletReadonlyPortEnabled = value.insecureKubeletReadonlyPortEnabled;
      this._maxParallelImagePulls = value.maxParallelImagePulls;
      this._podPidsLimit = value.podPidsLimit;
      this._singleProcessOomKill = value.singleProcessOomKill;
      this._evictionMinimumReclaim.internalValue = value.evictionMinimumReclaim;
      this._evictionSoft.internalValue = value.evictionSoft;
      this._evictionSoftGracePeriod.internalValue = value.evictionSoftGracePeriod;
      this._memoryManager.internalValue = value.memoryManager;
      this._topologyManager.internalValue = value.topologyManager;
    }
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // container_log_max_files - computed: false, optional: true, required: false
  private _containerLogMaxFiles?: number; 
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }
  public set containerLogMaxFiles(value: number) {
    this._containerLogMaxFiles = value;
  }
  public resetContainerLogMaxFiles() {
    this._containerLogMaxFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxFilesInput() {
    return this._containerLogMaxFiles;
  }

  // container_log_max_size - computed: false, optional: true, required: false
  private _containerLogMaxSize?: string; 
  public get containerLogMaxSize() {
    return this.getStringAttribute('container_log_max_size');
  }
  public set containerLogMaxSize(value: string) {
    this._containerLogMaxSize = value;
  }
  public resetContainerLogMaxSize() {
    this._containerLogMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxSizeInput() {
    return this._containerLogMaxSize;
  }

  // cpu_cfs_quota - computed: true, optional: true, required: false
  private _cpuCfsQuota?: boolean | cdktn.IResolvable; 
  public get cpuCfsQuota() {
    return this.getBooleanAttribute('cpu_cfs_quota');
  }
  public set cpuCfsQuota(value: boolean | cdktn.IResolvable) {
    this._cpuCfsQuota = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota;
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod;
  }

  // cpu_manager_policy - computed: false, optional: true, required: false
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  public resetCpuManagerPolicy() {
    this._cpuManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }

  // eviction_max_pod_grace_period_seconds - computed: false, optional: true, required: false
  private _evictionMaxPodGracePeriodSeconds?: number; 
  public get evictionMaxPodGracePeriodSeconds() {
    return this.getNumberAttribute('eviction_max_pod_grace_period_seconds');
  }
  public set evictionMaxPodGracePeriodSeconds(value: number) {
    this._evictionMaxPodGracePeriodSeconds = value;
  }
  public resetEvictionMaxPodGracePeriodSeconds() {
    this._evictionMaxPodGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionMaxPodGracePeriodSecondsInput() {
    return this._evictionMaxPodGracePeriodSeconds;
  }

  // image_gc_high_threshold_percent - computed: false, optional: true, required: false
  private _imageGcHighThresholdPercent?: number; 
  public get imageGcHighThresholdPercent() {
    return this.getNumberAttribute('image_gc_high_threshold_percent');
  }
  public set imageGcHighThresholdPercent(value: number) {
    this._imageGcHighThresholdPercent = value;
  }
  public resetImageGcHighThresholdPercent() {
    this._imageGcHighThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdPercentInput() {
    return this._imageGcHighThresholdPercent;
  }

  // image_gc_low_threshold_percent - computed: false, optional: true, required: false
  private _imageGcLowThresholdPercent?: number; 
  public get imageGcLowThresholdPercent() {
    return this.getNumberAttribute('image_gc_low_threshold_percent');
  }
  public set imageGcLowThresholdPercent(value: number) {
    this._imageGcLowThresholdPercent = value;
  }
  public resetImageGcLowThresholdPercent() {
    this._imageGcLowThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdPercentInput() {
    return this._imageGcLowThresholdPercent;
  }

  // image_maximum_gc_age - computed: false, optional: true, required: false
  private _imageMaximumGcAge?: string; 
  public get imageMaximumGcAge() {
    return this.getStringAttribute('image_maximum_gc_age');
  }
  public set imageMaximumGcAge(value: string) {
    this._imageMaximumGcAge = value;
  }
  public resetImageMaximumGcAge() {
    this._imageMaximumGcAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageMaximumGcAgeInput() {
    return this._imageMaximumGcAge;
  }

  // image_minimum_gc_age - computed: false, optional: true, required: false
  private _imageMinimumGcAge?: string; 
  public get imageMinimumGcAge() {
    return this.getStringAttribute('image_minimum_gc_age');
  }
  public set imageMinimumGcAge(value: string) {
    this._imageMinimumGcAge = value;
  }
  public resetImageMinimumGcAge() {
    this._imageMinimumGcAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageMinimumGcAgeInput() {
    return this._imageMinimumGcAge;
  }

  // insecure_kubelet_readonly_port_enabled - computed: true, optional: true, required: false
  private _insecureKubeletReadonlyPortEnabled?: string; 
  public get insecureKubeletReadonlyPortEnabled() {
    return this.getStringAttribute('insecure_kubelet_readonly_port_enabled');
  }
  public set insecureKubeletReadonlyPortEnabled(value: string) {
    this._insecureKubeletReadonlyPortEnabled = value;
  }
  public resetInsecureKubeletReadonlyPortEnabled() {
    this._insecureKubeletReadonlyPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureKubeletReadonlyPortEnabledInput() {
    return this._insecureKubeletReadonlyPortEnabled;
  }

  // max_parallel_image_pulls - computed: true, optional: true, required: false
  private _maxParallelImagePulls?: number; 
  public get maxParallelImagePulls() {
    return this.getNumberAttribute('max_parallel_image_pulls');
  }
  public set maxParallelImagePulls(value: number) {
    this._maxParallelImagePulls = value;
  }
  public resetMaxParallelImagePulls() {
    this._maxParallelImagePulls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelImagePullsInput() {
    return this._maxParallelImagePulls;
  }

  // pod_pids_limit - computed: false, optional: true, required: false
  private _podPidsLimit?: number; 
  public get podPidsLimit() {
    return this.getNumberAttribute('pod_pids_limit');
  }
  public set podPidsLimit(value: number) {
    this._podPidsLimit = value;
  }
  public resetPodPidsLimit() {
    this._podPidsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPidsLimitInput() {
    return this._podPidsLimit;
  }

  // single_process_oom_kill - computed: false, optional: true, required: false
  private _singleProcessOomKill?: boolean | cdktn.IResolvable; 
  public get singleProcessOomKill() {
    return this.getBooleanAttribute('single_process_oom_kill');
  }
  public set singleProcessOomKill(value: boolean | cdktn.IResolvable) {
    this._singleProcessOomKill = value;
  }
  public resetSingleProcessOomKill() {
    this._singleProcessOomKill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleProcessOomKillInput() {
    return this._singleProcessOomKill;
  }

  // eviction_minimum_reclaim - computed: false, optional: true, required: false
  private _evictionMinimumReclaim = new GoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference(this, "eviction_minimum_reclaim");
  public get evictionMinimumReclaim() {
    return this._evictionMinimumReclaim;
  }
  public putEvictionMinimumReclaim(value: GoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaim) {
    this._evictionMinimumReclaim.internalValue = value;
  }
  public resetEvictionMinimumReclaim() {
    this._evictionMinimumReclaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionMinimumReclaimInput() {
    return this._evictionMinimumReclaim.internalValue;
  }

  // eviction_soft - computed: false, optional: true, required: false
  private _evictionSoft = new GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftOutputReference(this, "eviction_soft");
  public get evictionSoft() {
    return this._evictionSoft;
  }
  public putEvictionSoft(value: GoogleContainerClusterNodeConfigKubeletConfigEvictionSoft) {
    this._evictionSoft.internalValue = value;
  }
  public resetEvictionSoft() {
    this._evictionSoft.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftInput() {
    return this._evictionSoft.internalValue;
  }

  // eviction_soft_grace_period - computed: false, optional: true, required: false
  private _evictionSoftGracePeriod = new GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference(this, "eviction_soft_grace_period");
  public get evictionSoftGracePeriod() {
    return this._evictionSoftGracePeriod;
  }
  public putEvictionSoftGracePeriod(value: GoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriod) {
    this._evictionSoftGracePeriod.internalValue = value;
  }
  public resetEvictionSoftGracePeriod() {
    this._evictionSoftGracePeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftGracePeriodInput() {
    return this._evictionSoftGracePeriod.internalValue;
  }

  // memory_manager - computed: false, optional: true, required: false
  private _memoryManager = new GoogleContainerClusterNodeConfigKubeletConfigMemoryManagerOutputReference(this, "memory_manager");
  public get memoryManager() {
    return this._memoryManager;
  }
  public putMemoryManager(value: GoogleContainerClusterNodeConfigKubeletConfigMemoryManager) {
    this._memoryManager.internalValue = value;
  }
  public resetMemoryManager() {
    this._memoryManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryManagerInput() {
    return this._memoryManager.internalValue;
  }

  // topology_manager - computed: false, optional: true, required: false
  private _topologyManager = new GoogleContainerClusterNodeConfigKubeletConfigTopologyManagerOutputReference(this, "topology_manager");
  public get topologyManager() {
    return this._topologyManager;
  }
  public putTopologyManager(value: GoogleContainerClusterNodeConfigKubeletConfigTopologyManager) {
    this._topologyManager.internalValue = value;
  }
  public resetTopologyManager() {
    this._topologyManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyManagerInput() {
    return this._topologyManager.internalValue;
  }
}
export interface GoogleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfig {
  /**
  * Whether to enable accurate time synchronization with PTP-KVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_ptp_kvm_time_sync GoogleContainerCluster#enable_ptp_kvm_time_sync}
  */
  readonly enablePtpKvmTimeSync?: boolean | cdktn.IResolvable;
}

export function googleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfigToTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_ptp_kvm_time_sync: cdktn.booleanToTerraform(struct!.enablePtpKvmTimeSync),
  }
}


export function googleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_ptp_kvm_time_sync: {
      value: cdktn.booleanToHclTerraform(struct!.enablePtpKvmTimeSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePtpKvmTimeSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePtpKvmTimeSync = this._enablePtpKvmTimeSync;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePtpKvmTimeSync = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePtpKvmTimeSync = value.enablePtpKvmTimeSync;
    }
  }

  // enable_ptp_kvm_time_sync - computed: false, optional: true, required: false
  private _enablePtpKvmTimeSync?: boolean | cdktn.IResolvable; 
  public get enablePtpKvmTimeSync() {
    return this.getBooleanAttribute('enable_ptp_kvm_time_sync');
  }
  public set enablePtpKvmTimeSync(value: boolean | cdktn.IResolvable) {
    this._enablePtpKvmTimeSync = value;
  }
  public resetEnablePtpKvmTimeSync() {
    this._enablePtpKvmTimeSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePtpKvmTimeSyncInput() {
    return this._enablePtpKvmTimeSync;
  }
}
export interface GoogleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfig {
  /**
  * Amount of 1G hugepages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#hugepage_size_1g GoogleContainerCluster#hugepage_size_1g}
  */
  readonly hugepageSize1G?: number;
  /**
  * Amount of 2M hugepages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#hugepage_size_2m GoogleContainerCluster#hugepage_size_2m}
  */
  readonly hugepageSize2M?: number;
}

export function googleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfigToTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfigOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hugepage_size_1g: cdktn.numberToTerraform(struct!.hugepageSize1G),
    hugepage_size_2m: cdktn.numberToTerraform(struct!.hugepageSize2M),
  }
}


export function googleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfigOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hugepage_size_1g: {
      value: cdktn.numberToHclTerraform(struct!.hugepageSize1G),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hugepage_size_2m: {
      value: cdktn.numberToHclTerraform(struct!.hugepageSize2M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hugepageSize1G !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepageSize1G = this._hugepageSize1G;
    }
    if (this._hugepageSize2M !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepageSize2M = this._hugepageSize2M;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hugepageSize1G = undefined;
      this._hugepageSize2M = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hugepageSize1G = value.hugepageSize1G;
      this._hugepageSize2M = value.hugepageSize2M;
    }
  }

  // hugepage_size_1g - computed: false, optional: true, required: false
  private _hugepageSize1G?: number; 
  public get hugepageSize1G() {
    return this.getNumberAttribute('hugepage_size_1g');
  }
  public set hugepageSize1G(value: number) {
    this._hugepageSize1G = value;
  }
  public resetHugepageSize1G() {
    this._hugepageSize1G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepageSize1GInput() {
    return this._hugepageSize1G;
  }

  // hugepage_size_2m - computed: false, optional: true, required: false
  private _hugepageSize2M?: number; 
  public get hugepageSize2M() {
    return this.getNumberAttribute('hugepage_size_2m');
  }
  public set hugepageSize2M(value: number) {
    this._hugepageSize2M = value;
  }
  public resetHugepageSize2M() {
    this._hugepageSize2M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepageSize2MInput() {
    return this._hugepageSize2M;
  }
}
export interface GoogleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoading {
  /**
  * The policy for kernel module loading.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#policy GoogleContainerCluster#policy}
  */
  readonly policy?: string;
}

export function googleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoading): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktn.stringToTerraform(struct!.policy),
  }
}


export function googleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToHclTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoading): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktn.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoading | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoading | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile {
  /**
  * Specifies the size of the swap space in gibibytes (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#swap_size_gib GoogleContainerCluster#swap_size_gib}
  */
  readonly swapSizeGib?: number;
  /**
  * Specifies the size of the swap space as a percentage of the boot disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#swap_size_percent GoogleContainerCluster#swap_size_percent}
  */
  readonly swapSizePercent?: number;
}

export function googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    swap_size_gib: cdktn.numberToTerraform(struct!.swapSizeGib),
    swap_size_percent: cdktn.numberToTerraform(struct!.swapSizePercent),
  }
}


export function googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToHclTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    swap_size_gib: {
      value: cdktn.numberToHclTerraform(struct!.swapSizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    swap_size_percent: {
      value: cdktn.numberToHclTerraform(struct!.swapSizePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._swapSizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapSizeGib = this._swapSizeGib;
    }
    if (this._swapSizePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapSizePercent = this._swapSizePercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._swapSizeGib = undefined;
      this._swapSizePercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._swapSizeGib = value.swapSizeGib;
      this._swapSizePercent = value.swapSizePercent;
    }
  }

  // swap_size_gib - computed: false, optional: true, required: false
  private _swapSizeGib?: number; 
  public get swapSizeGib() {
    return this.getNumberAttribute('swap_size_gib');
  }
  public set swapSizeGib(value: number) {
    this._swapSizeGib = value;
  }
  public resetSwapSizeGib() {
    this._swapSizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapSizeGibInput() {
    return this._swapSizeGib;
  }

  // swap_size_percent - computed: false, optional: true, required: false
  private _swapSizePercent?: number; 
  public get swapSizePercent() {
    return this.getNumberAttribute('swap_size_percent');
  }
  public set swapSizePercent(value: number) {
    this._swapSizePercent = value;
  }
  public resetSwapSizePercent() {
    this._swapSizePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapSizePercentInput() {
    return this._swapSizePercent;
  }
}
export interface GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile {
  /**
  * The number of physical local NVMe SSD disks to attach.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disk_count GoogleContainerCluster#disk_count}
  */
  readonly diskCount?: number;
}

export function googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_count: cdktn.numberToTerraform(struct!.diskCount),
  }
}


export function googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToHclTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_count: {
      value: cdktn.numberToHclTerraform(struct!.diskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCount = this._diskCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskCount = value.diskCount;
    }
  }

  // disk_count - computed: false, optional: true, required: false
  private _diskCount?: number; 
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }
  public set diskCount(value: number) {
    this._diskCount = value;
  }
  public resetDiskCount() {
    this._diskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount;
  }
}
export interface GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig {
  /**
  * If true, swap space will not be encrypted. Defaults to false (encrypted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
}

export function googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile {
  /**
  * Specifies the size of the swap space in gibibytes (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#swap_size_gib GoogleContainerCluster#swap_size_gib}
  */
  readonly swapSizeGib?: number;
  /**
  * Specifies the size of the swap space as a percentage of the ephemeral local SSD capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#swap_size_percent GoogleContainerCluster#swap_size_percent}
  */
  readonly swapSizePercent?: number;
}

export function googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    swap_size_gib: cdktn.numberToTerraform(struct!.swapSizeGib),
    swap_size_percent: cdktn.numberToTerraform(struct!.swapSizePercent),
  }
}


export function googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToHclTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    swap_size_gib: {
      value: cdktn.numberToHclTerraform(struct!.swapSizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    swap_size_percent: {
      value: cdktn.numberToHclTerraform(struct!.swapSizePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._swapSizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapSizeGib = this._swapSizeGib;
    }
    if (this._swapSizePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapSizePercent = this._swapSizePercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._swapSizeGib = undefined;
      this._swapSizePercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._swapSizeGib = value.swapSizeGib;
      this._swapSizePercent = value.swapSizePercent;
    }
  }

  // swap_size_gib - computed: false, optional: true, required: false
  private _swapSizeGib?: number; 
  public get swapSizeGib() {
    return this.getNumberAttribute('swap_size_gib');
  }
  public set swapSizeGib(value: number) {
    this._swapSizeGib = value;
  }
  public resetSwapSizeGib() {
    this._swapSizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapSizeGibInput() {
    return this._swapSizeGib;
  }

  // swap_size_percent - computed: false, optional: true, required: false
  private _swapSizePercent?: number; 
  public get swapSizePercent() {
    return this.getNumberAttribute('swap_size_percent');
  }
  public set swapSizePercent(value: number) {
    this._swapSizePercent = value;
  }
  public resetSwapSizePercent() {
    this._swapSizePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapSizePercentInput() {
    return this._swapSizePercent;
  }
}
export interface GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfig {
  /**
  * Enables or disables swap for the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * boot_disk_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#boot_disk_profile GoogleContainerCluster#boot_disk_profile}
  */
  readonly bootDiskProfile?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile;
  /**
  * dedicated_local_ssd_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#dedicated_local_ssd_profile GoogleContainerCluster#dedicated_local_ssd_profile}
  */
  readonly dedicatedLocalSsdProfile?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#encryption_config GoogleContainerCluster#encryption_config}
  */
  readonly encryptionConfig?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig;
  /**
  * ephemeral_local_ssd_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#ephemeral_local_ssd_profile GoogleContainerCluster#ephemeral_local_ssd_profile}
  */
  readonly ephemeralLocalSsdProfile?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile;
}

export function googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigToTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    boot_disk_profile: googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToTerraform(struct!.bootDiskProfile),
    dedicated_local_ssd_profile: googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToTerraform(struct!.dedicatedLocalSsdProfile),
    encryption_config: googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
    ephemeral_local_ssd_profile: googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToTerraform(struct!.ephemeralLocalSsdProfile),
  }
}


export function googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    boot_disk_profile: {
      value: googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToHclTerraform(struct!.bootDiskProfile),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileList",
    },
    dedicated_local_ssd_profile: {
      value: googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToHclTerraform(struct!.dedicatedLocalSsdProfile),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileList",
    },
    encryption_config: {
      value: googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToHclTerraform(struct!.encryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigList",
    },
    ephemeral_local_ssd_profile: {
      value: googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToHclTerraform(struct!.ephemeralLocalSsdProfile),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._bootDiskProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProfile = this._bootDiskProfile?.internalValue;
    }
    if (this._dedicatedLocalSsdProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedLocalSsdProfile = this._dedicatedLocalSsdProfile?.internalValue;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._ephemeralLocalSsdProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralLocalSsdProfile = this._ephemeralLocalSsdProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._bootDiskProfile.internalValue = undefined;
      this._dedicatedLocalSsdProfile.internalValue = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._ephemeralLocalSsdProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._bootDiskProfile.internalValue = value.bootDiskProfile;
      this._dedicatedLocalSsdProfile.internalValue = value.dedicatedLocalSsdProfile;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._ephemeralLocalSsdProfile.internalValue = value.ephemeralLocalSsdProfile;
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

  // boot_disk_profile - computed: false, optional: true, required: false
  private _bootDiskProfile = new GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference(this, "boot_disk_profile");
  public get bootDiskProfile() {
    return this._bootDiskProfile;
  }
  public putBootDiskProfile(value: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile) {
    this._bootDiskProfile.internalValue = value;
  }
  public resetBootDiskProfile() {
    this._bootDiskProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProfileInput() {
    return this._bootDiskProfile.internalValue;
  }

  // dedicated_local_ssd_profile - computed: false, optional: true, required: false
  private _dedicatedLocalSsdProfile = new GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference(this, "dedicated_local_ssd_profile");
  public get dedicatedLocalSsdProfile() {
    return this._dedicatedLocalSsdProfile;
  }
  public putDedicatedLocalSsdProfile(value: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile) {
    this._dedicatedLocalSsdProfile.internalValue = value;
  }
  public resetDedicatedLocalSsdProfile() {
    this._dedicatedLocalSsdProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedLocalSsdProfileInput() {
    return this._dedicatedLocalSsdProfile.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // ephemeral_local_ssd_profile - computed: false, optional: true, required: false
  private _ephemeralLocalSsdProfile = new GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference(this, "ephemeral_local_ssd_profile");
  public get ephemeralLocalSsdProfile() {
    return this._ephemeralLocalSsdProfile;
  }
  public putEphemeralLocalSsdProfile(value: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile) {
    this._ephemeralLocalSsdProfile.internalValue = value;
  }
  public resetEphemeralLocalSsdProfile() {
    this._ephemeralLocalSsdProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralLocalSsdProfileInput() {
    return this._ephemeralLocalSsdProfile.internalValue;
  }
}
export interface GoogleContainerClusterNodeConfigLinuxNodeConfig {
  /**
  * cgroupMode specifies the cgroup mode to be used on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#cgroup_mode GoogleContainerCluster#cgroup_mode}
  */
  readonly cgroupMode?: string;
  /**
  * The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#sysctls GoogleContainerCluster#sysctls}
  */
  readonly sysctls?: { [key: string]: string };
  /**
  * The Linux kernel transparent hugepage defrag setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#transparent_hugepage_defrag GoogleContainerCluster#transparent_hugepage_defrag}
  */
  readonly transparentHugepageDefrag?: string;
  /**
  * The Linux kernel transparent hugepage setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#transparent_hugepage_enabled GoogleContainerCluster#transparent_hugepage_enabled}
  */
  readonly transparentHugepageEnabled?: string;
  /**
  * accurate_time_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#accurate_time_config GoogleContainerCluster#accurate_time_config}
  */
  readonly accurateTimeConfig?: GoogleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfig;
  /**
  * hugepages_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#hugepages_config GoogleContainerCluster#hugepages_config}
  */
  readonly hugepagesConfig?: GoogleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfig;
  /**
  * node_kernel_module_loading block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#node_kernel_module_loading GoogleContainerCluster#node_kernel_module_loading}
  */
  readonly nodeKernelModuleLoading?: GoogleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoading;
  /**
  * swap_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#swap_config GoogleContainerCluster#swap_config}
  */
  readonly swapConfig?: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfig;
}

export function googleContainerClusterNodeConfigLinuxNodeConfigToTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cgroup_mode: cdktn.stringToTerraform(struct!.cgroupMode),
    sysctls: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sysctls),
    transparent_hugepage_defrag: cdktn.stringToTerraform(struct!.transparentHugepageDefrag),
    transparent_hugepage_enabled: cdktn.stringToTerraform(struct!.transparentHugepageEnabled),
    accurate_time_config: googleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfigToTerraform(struct!.accurateTimeConfig),
    hugepages_config: googleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfigToTerraform(struct!.hugepagesConfig),
    node_kernel_module_loading: googleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToTerraform(struct!.nodeKernelModuleLoading),
    swap_config: googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigToTerraform(struct!.swapConfig),
  }
}


export function googleContainerClusterNodeConfigLinuxNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigLinuxNodeConfigOutputReference | GoogleContainerClusterNodeConfigLinuxNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cgroup_mode: {
      value: cdktn.stringToHclTerraform(struct!.cgroupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysctls: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sysctls),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    transparent_hugepage_defrag: {
      value: cdktn.stringToHclTerraform(struct!.transparentHugepageDefrag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transparent_hugepage_enabled: {
      value: cdktn.stringToHclTerraform(struct!.transparentHugepageEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accurate_time_config: {
      value: googleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfigToHclTerraform(struct!.accurateTimeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfigList",
    },
    hugepages_config: {
      value: googleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfigToHclTerraform(struct!.hugepagesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfigList",
    },
    node_kernel_module_loading: {
      value: googleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToHclTerraform(struct!.nodeKernelModuleLoading),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoadingList",
    },
    swap_config: {
      value: googleContainerClusterNodeConfigLinuxNodeConfigSwapConfigToHclTerraform(struct!.swapConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigLinuxNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigLinuxNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cgroupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupMode = this._cgroupMode;
    }
    if (this._sysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls;
    }
    if (this._transparentHugepageDefrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentHugepageDefrag = this._transparentHugepageDefrag;
    }
    if (this._transparentHugepageEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentHugepageEnabled = this._transparentHugepageEnabled;
    }
    if (this._accurateTimeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accurateTimeConfig = this._accurateTimeConfig?.internalValue;
    }
    if (this._hugepagesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepagesConfig = this._hugepagesConfig?.internalValue;
    }
    if (this._nodeKernelModuleLoading?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeKernelModuleLoading = this._nodeKernelModuleLoading?.internalValue;
    }
    if (this._swapConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapConfig = this._swapConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigLinuxNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cgroupMode = undefined;
      this._sysctls = undefined;
      this._transparentHugepageDefrag = undefined;
      this._transparentHugepageEnabled = undefined;
      this._accurateTimeConfig.internalValue = undefined;
      this._hugepagesConfig.internalValue = undefined;
      this._nodeKernelModuleLoading.internalValue = undefined;
      this._swapConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cgroupMode = value.cgroupMode;
      this._sysctls = value.sysctls;
      this._transparentHugepageDefrag = value.transparentHugepageDefrag;
      this._transparentHugepageEnabled = value.transparentHugepageEnabled;
      this._accurateTimeConfig.internalValue = value.accurateTimeConfig;
      this._hugepagesConfig.internalValue = value.hugepagesConfig;
      this._nodeKernelModuleLoading.internalValue = value.nodeKernelModuleLoading;
      this._swapConfig.internalValue = value.swapConfig;
    }
  }

  // cgroup_mode - computed: true, optional: true, required: false
  private _cgroupMode?: string; 
  public get cgroupMode() {
    return this.getStringAttribute('cgroup_mode');
  }
  public set cgroupMode(value: string) {
    this._cgroupMode = value;
  }
  public resetCgroupMode() {
    this._cgroupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupModeInput() {
    return this._cgroupMode;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls?: { [key: string]: string }; 
  public get sysctls() {
    return this.getStringMapAttribute('sysctls');
  }
  public set sysctls(value: { [key: string]: string }) {
    this._sysctls = value;
  }
  public resetSysctls() {
    this._sysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls;
  }

  // transparent_hugepage_defrag - computed: false, optional: true, required: false
  private _transparentHugepageDefrag?: string; 
  public get transparentHugepageDefrag() {
    return this.getStringAttribute('transparent_hugepage_defrag');
  }
  public set transparentHugepageDefrag(value: string) {
    this._transparentHugepageDefrag = value;
  }
  public resetTransparentHugepageDefrag() {
    this._transparentHugepageDefrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugepageDefragInput() {
    return this._transparentHugepageDefrag;
  }

  // transparent_hugepage_enabled - computed: true, optional: true, required: false
  private _transparentHugepageEnabled?: string; 
  public get transparentHugepageEnabled() {
    return this.getStringAttribute('transparent_hugepage_enabled');
  }
  public set transparentHugepageEnabled(value: string) {
    this._transparentHugepageEnabled = value;
  }
  public resetTransparentHugepageEnabled() {
    this._transparentHugepageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugepageEnabledInput() {
    return this._transparentHugepageEnabled;
  }

  // accurate_time_config - computed: false, optional: true, required: false
  private _accurateTimeConfig = new GoogleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference(this, "accurate_time_config");
  public get accurateTimeConfig() {
    return this._accurateTimeConfig;
  }
  public putAccurateTimeConfig(value: GoogleContainerClusterNodeConfigLinuxNodeConfigAccurateTimeConfig) {
    this._accurateTimeConfig.internalValue = value;
  }
  public resetAccurateTimeConfig() {
    this._accurateTimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accurateTimeConfigInput() {
    return this._accurateTimeConfig.internalValue;
  }

  // hugepages_config - computed: false, optional: true, required: false
  private _hugepagesConfig = new GoogleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfigOutputReference(this, "hugepages_config");
  public get hugepagesConfig() {
    return this._hugepagesConfig;
  }
  public putHugepagesConfig(value: GoogleContainerClusterNodeConfigLinuxNodeConfigHugepagesConfig) {
    this._hugepagesConfig.internalValue = value;
  }
  public resetHugepagesConfig() {
    this._hugepagesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepagesConfigInput() {
    return this._hugepagesConfig.internalValue;
  }

  // node_kernel_module_loading - computed: false, optional: true, required: false
  private _nodeKernelModuleLoading = new GoogleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference(this, "node_kernel_module_loading");
  public get nodeKernelModuleLoading() {
    return this._nodeKernelModuleLoading;
  }
  public putNodeKernelModuleLoading(value: GoogleContainerClusterNodeConfigLinuxNodeConfigNodeKernelModuleLoading) {
    this._nodeKernelModuleLoading.internalValue = value;
  }
  public resetNodeKernelModuleLoading() {
    this._nodeKernelModuleLoading.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeKernelModuleLoadingInput() {
    return this._nodeKernelModuleLoading.internalValue;
  }

  // swap_config - computed: false, optional: true, required: false
  private _swapConfig = new GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfigOutputReference(this, "swap_config");
  public get swapConfig() {
    return this._swapConfig;
  }
  public putSwapConfig(value: GoogleContainerClusterNodeConfigLinuxNodeConfigSwapConfig) {
    this._swapConfig.internalValue = value;
  }
  public resetSwapConfig() {
    this._swapConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapConfigInput() {
    return this._swapConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig {
  /**
  * Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function googleContainerClusterNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct?: GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference | GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
  }
}


export function googleContainerClusterNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference | GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ssd_count: {
      value: cdktn.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface GoogleContainerClusterNodeConfigReservationAffinity {
  /**
  * Corresponds to the type of reservation consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#consume_reservation_type GoogleContainerCluster#consume_reservation_type}
  */
  readonly consumeReservationType: string;
  /**
  * The label key of a reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key?: string;
  /**
  * The label values of the reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#values GoogleContainerCluster#values}
  */
  readonly values?: string[];
}

export function googleContainerClusterNodeConfigReservationAffinityToTerraform(struct?: GoogleContainerClusterNodeConfigReservationAffinityOutputReference | GoogleContainerClusterNodeConfigReservationAffinity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktn.stringToTerraform(struct!.consumeReservationType),
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function googleContainerClusterNodeConfigReservationAffinityToHclTerraform(struct?: GoogleContainerClusterNodeConfigReservationAffinityOutputReference | GoogleContainerClusterNodeConfigReservationAffinity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consume_reservation_type: {
      value: cdktn.stringToHclTerraform(struct!.consumeReservationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigReservationAffinityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeReservationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeReservationType = this._consumeReservationType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeReservationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeReservationType = value.consumeReservationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_reservation_type - computed: false, optional: false, required: true
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
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
export interface GoogleContainerClusterNodeConfigSandboxConfig {
  /**
  * Type of the sandbox to use for the node (e.g. 'gvisor'). Deprecated in favor of type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#sandbox_type GoogleContainerCluster#sandbox_type}
  */
  readonly sandboxType?: string;
  /**
  * Type of the sandbox to use for the node (e.g. 'GVISOR').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#type GoogleContainerCluster#type}
  */
  readonly type?: string;
}

export function googleContainerClusterNodeConfigSandboxConfigToTerraform(struct?: GoogleContainerClusterNodeConfigSandboxConfigOutputReference | GoogleContainerClusterNodeConfigSandboxConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sandbox_type: cdktn.stringToTerraform(struct!.sandboxType),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function googleContainerClusterNodeConfigSandboxConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigSandboxConfigOutputReference | GoogleContainerClusterNodeConfigSandboxConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sandbox_type: {
      value: cdktn.stringToHclTerraform(struct!.sandboxType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigSandboxConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigSandboxConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sandboxType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxType = this._sandboxType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigSandboxConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sandboxType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sandboxType = value.sandboxType;
      this._type = value.type;
    }
  }

  // sandbox_type - computed: false, optional: true, required: false
  private _sandboxType?: string; 
  public get sandboxType() {
    return this.getStringAttribute('sandbox_type');
  }
  public set sandboxType(value: string) {
    this._sandboxType = value;
  }
  public resetSandboxType() {
    this._sandboxType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxTypeInput() {
    return this._sandboxType;
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
}
export interface GoogleContainerClusterNodeConfigSecondaryBootDisks {
  /**
  * Disk image to create the secondary boot disk from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disk_image GoogleContainerCluster#disk_image}
  */
  readonly diskImage: string;
  /**
  * Mode for how the secondary boot disk is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#mode GoogleContainerCluster#mode}
  */
  readonly mode?: string;
}

export function googleContainerClusterNodeConfigSecondaryBootDisksToTerraform(struct?: GoogleContainerClusterNodeConfigSecondaryBootDisks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_image: cdktn.stringToTerraform(struct!.diskImage),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function googleContainerClusterNodeConfigSecondaryBootDisksToHclTerraform(struct?: GoogleContainerClusterNodeConfigSecondaryBootDisks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_image: {
      value: cdktn.stringToHclTerraform(struct!.diskImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigSecondaryBootDisksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigSecondaryBootDisks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskImage = this._diskImage;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigSecondaryBootDisks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskImage = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskImage = value.diskImage;
      this._mode = value.mode;
    }
  }

  // disk_image - computed: false, optional: false, required: true
  private _diskImage?: string; 
  public get diskImage() {
    return this.getStringAttribute('disk_image');
  }
  public set diskImage(value: string) {
    this._diskImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskImageInput() {
    return this._diskImage;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class GoogleContainerClusterNodeConfigSecondaryBootDisksList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigSecondaryBootDisks[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterNodeConfigSecondaryBootDisksOutputReference {
    return new GoogleContainerClusterNodeConfigSecondaryBootDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_integrity_monitoring GoogleContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktn.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_secure_boot GoogleContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktn.IResolvable;
}

export function googleContainerClusterNodeConfigShieldedInstanceConfigToTerraform(struct?: GoogleContainerClusterNodeConfigShieldedInstanceConfigOutputReference | GoogleContainerClusterNodeConfigShieldedInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktn.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktn.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function googleContainerClusterNodeConfigShieldedInstanceConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigShieldedInstanceConfigOutputReference | GoogleContainerClusterNodeConfigShieldedInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktn.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktn.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigShieldedInstanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktn.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktn.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktn.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktn.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }
}
export interface GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#operator GoogleContainerCluster#operator}
  */
  readonly operator: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#values GoogleContainerCluster#values}
  */
  readonly values: string[];
}

export function googleContainerClusterNodeConfigSoleTenantConfigNodeAffinityToTerraform(struct?: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function googleContainerClusterNodeConfigSoleTenantConfigNodeAffinityToHclTerraform(struct?: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityOutputReference {
    return new GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigSoleTenantConfig {
  /**
  * Specifies the minimum number of vCPUs that each sole tenant node must have to use CPU overcommit. If not specified, the CPU overcommit feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#min_node_cpus GoogleContainerCluster#min_node_cpus}
  */
  readonly minNodeCpus?: number;
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#node_affinity GoogleContainerCluster#node_affinity}
  */
  readonly nodeAffinity: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity[] | cdktn.IResolvable;
}

export function googleContainerClusterNodeConfigSoleTenantConfigToTerraform(struct?: GoogleContainerClusterNodeConfigSoleTenantConfigOutputReference | GoogleContainerClusterNodeConfigSoleTenantConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_node_cpus: cdktn.numberToTerraform(struct!.minNodeCpus),
    node_affinity: cdktn.listMapper(googleContainerClusterNodeConfigSoleTenantConfigNodeAffinityToTerraform, true)(struct!.nodeAffinity),
  }
}


export function googleContainerClusterNodeConfigSoleTenantConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigSoleTenantConfigOutputReference | GoogleContainerClusterNodeConfigSoleTenantConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_node_cpus: {
      value: cdktn.numberToHclTerraform(struct!.minNodeCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity: {
      value: cdktn.listMapperHcl(googleContainerClusterNodeConfigSoleTenantConfigNodeAffinityToHclTerraform, true)(struct!.nodeAffinity),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigSoleTenantConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigSoleTenantConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minNodeCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCpus = this._minNodeCpus;
    }
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigSoleTenantConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minNodeCpus = undefined;
      this._nodeAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minNodeCpus = value.minNodeCpus;
      this._nodeAffinity.internalValue = value.nodeAffinity;
    }
  }

  // min_node_cpus - computed: false, optional: true, required: false
  private _minNodeCpus?: number; 
  public get minNodeCpus() {
    return this.getNumberAttribute('min_node_cpus');
  }
  public set minNodeCpus(value: number) {
    this._minNodeCpus = value;
  }
  public resetMinNodeCpus() {
    this._minNodeCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCpusInput() {
    return this._minNodeCpus;
  }

  // node_affinity - computed: false, optional: false, required: true
  private _nodeAffinity = new GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityList(this, "node_affinity", true);
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity[] | cdktn.IResolvable) {
    this._nodeAffinity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }
}
export interface GoogleContainerClusterNodeConfigTaint {
  /**
  * Effect for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#effect GoogleContainerCluster#effect}
  */
  readonly effect: string;
  /**
  * Key for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key: string;
  /**
  * Value for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#value GoogleContainerCluster#value}
  */
  readonly value: string;
}

export function googleContainerClusterNodeConfigTaintToTerraform(struct?: GoogleContainerClusterNodeConfigTaint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktn.stringToTerraform(struct!.effect),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleContainerClusterNodeConfigTaintToHclTerraform(struct?: GoogleContainerClusterNodeConfigTaint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktn.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class GoogleContainerClusterNodeConfigTaintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigTaint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigTaint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleContainerClusterNodeConfigTaintList extends cdktn.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigTaint[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleContainerClusterNodeConfigTaintOutputReference {
    return new GoogleContainerClusterNodeConfigTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigWindowsNodeConfig {
  /**
  * The OS Version of the windows nodepool.Values are OS_VERSION_UNSPECIFIED,OS_VERSION_LTSC2019 and OS_VERSION_LTSC2022
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#osversion GoogleContainerCluster#osversion}
  */
  readonly osversion?: string;
}

export function googleContainerClusterNodeConfigWindowsNodeConfigToTerraform(struct?: GoogleContainerClusterNodeConfigWindowsNodeConfigOutputReference | GoogleContainerClusterNodeConfigWindowsNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    osversion: cdktn.stringToTerraform(struct!.osversion),
  }
}


export function googleContainerClusterNodeConfigWindowsNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigWindowsNodeConfigOutputReference | GoogleContainerClusterNodeConfigWindowsNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    osversion: {
      value: cdktn.stringToHclTerraform(struct!.osversion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigWindowsNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigWindowsNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osversion = this._osversion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigWindowsNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._osversion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._osversion = value.osversion;
    }
  }

  // osversion - computed: false, optional: true, required: false
  private _osversion?: string; 
  public get osversion() {
    return this.getStringAttribute('osversion');
  }
  public set osversion(value: string) {
    this._osversion = value;
  }
  public resetOsversion() {
    this._osversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osversionInput() {
    return this._osversion;
  }
}
export interface GoogleContainerClusterNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#mode GoogleContainerCluster#mode}
  */
  readonly mode: string;
}

export function googleContainerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct?: GoogleContainerClusterNodeConfigWorkloadMetadataConfigOutputReference | GoogleContainerClusterNodeConfigWorkloadMetadataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function googleContainerClusterNodeConfigWorkloadMetadataConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigWorkloadMetadataConfigOutputReference | GoogleContainerClusterNodeConfigWorkloadMetadataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigWorkloadMetadataConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigWorkloadMetadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface GoogleContainerClusterNodeConfig {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#boot_disk_kms_key GoogleContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disk_size_gb GoogleContainerCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#disk_type GoogleContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * If enabled boot disks are configured with confidential mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#enable_confidential_storage GoogleContainerCluster#enable_confidential_storage}
  */
  readonly enableConfidentialStorage?: boolean | cdktn.IResolvable;
  /**
  * Enables Flex Start provisioning model for the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#flex_start GoogleContainerCluster#flex_start}
  */
  readonly flexStart?: boolean | cdktn.IResolvable;
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#image_type GoogleContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#labels GoogleContainerCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of local SSD disks to be attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * LocalSsdEncryptionMode specified the method used for encrypting the local SSDs attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#local_ssd_encryption_mode GoogleContainerCluster#local_ssd_encryption_mode}
  */
  readonly localSsdEncryptionMode?: string;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#logging_variant GoogleContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * The name of a Google Compute Engine machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#machine_type GoogleContainerCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The runtime of each node in the node pool in seconds, terminated by 's'. Example: "3600s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#max_run_duration GoogleContainerCluster#max_run_duration}
  */
  readonly maxRunDuration?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#metadata GoogleContainerCluster#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#min_cpu_platform GoogleContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#node_group GoogleContainerCluster#node_group}
  */
  readonly nodeGroup?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#oauth_scopes GoogleContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#preemptible GoogleContainerCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktn.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#resource_labels GoogleContainerCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#resource_manager_tags GoogleContainerCluster#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#service_account GoogleContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether the nodes are created as spot VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#spot GoogleContainerCluster#spot}
  */
  readonly spot?: boolean | cdktn.IResolvable;
  /**
  * The list of Storage Pools where boot disks are provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#storage_pools GoogleContainerCluster#storage_pools}
  */
  readonly storagePools?: string[];
  /**
  * The list of instance tags applied to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#tags GoogleContainerCluster#tags}
  */
  readonly tags?: string[];
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#advanced_machine_features GoogleContainerCluster#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: GoogleContainerClusterNodeConfigAdvancedMachineFeatures;
  /**
  * boot_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#boot_disk GoogleContainerCluster#boot_disk}
  */
  readonly bootDisk?: GoogleContainerClusterNodeConfigBootDisk;
  /**
  * confidential_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#confidential_nodes GoogleContainerCluster#confidential_nodes}
  */
  readonly confidentialNodes?: GoogleContainerClusterNodeConfigConfidentialNodes;
  /**
  * containerd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#containerd_config GoogleContainerCluster#containerd_config}
  */
  readonly containerdConfig?: GoogleContainerClusterNodeConfigContainerdConfig;
  /**
  * ephemeral_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#ephemeral_storage_config GoogleContainerCluster#ephemeral_storage_config}
  */
  readonly ephemeralStorageConfig?: GoogleContainerClusterNodeConfigEphemeralStorageConfig;
  /**
  * ephemeral_storage_local_ssd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#ephemeral_storage_local_ssd_config GoogleContainerCluster#ephemeral_storage_local_ssd_config}
  */
  readonly ephemeralStorageLocalSsdConfig?: GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig;
  /**
  * fast_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#fast_socket GoogleContainerCluster#fast_socket}
  */
  readonly fastSocket?: GoogleContainerClusterNodeConfigFastSocket;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gcfs_config GoogleContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: GoogleContainerClusterNodeConfigGcfsConfig;
  /**
  * guest_accelerator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#guest_accelerator GoogleContainerCluster#guest_accelerator}
  */
  readonly guestAccelerator?: GoogleContainerClusterNodeConfigGuestAccelerator[] | cdktn.IResolvable;
  /**
  * gvnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#gvnic GoogleContainerCluster#gvnic}
  */
  readonly gvnic?: GoogleContainerClusterNodeConfigGvnic;
  /**
  * host_maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#host_maintenance_policy GoogleContainerCluster#host_maintenance_policy}
  */
  readonly hostMaintenancePolicy?: GoogleContainerClusterNodeConfigHostMaintenancePolicy;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#kubelet_config GoogleContainerCluster#kubelet_config}
  */
  readonly kubeletConfig?: GoogleContainerClusterNodeConfigKubeletConfig;
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#linux_node_config GoogleContainerCluster#linux_node_config}
  */
  readonly linuxNodeConfig?: GoogleContainerClusterNodeConfigLinuxNodeConfig;
  /**
  * local_nvme_ssd_block_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#local_nvme_ssd_block_config GoogleContainerCluster#local_nvme_ssd_block_config}
  */
  readonly localNvmeSsdBlockConfig?: GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#reservation_affinity GoogleContainerCluster#reservation_affinity}
  */
  readonly reservationAffinity?: GoogleContainerClusterNodeConfigReservationAffinity;
  /**
  * sandbox_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#sandbox_config GoogleContainerCluster#sandbox_config}
  */
  readonly sandboxConfig?: GoogleContainerClusterNodeConfigSandboxConfig;
  /**
  * secondary_boot_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#secondary_boot_disks GoogleContainerCluster#secondary_boot_disks}
  */
  readonly secondaryBootDisks?: GoogleContainerClusterNodeConfigSecondaryBootDisks[] | cdktn.IResolvable;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#shielded_instance_config GoogleContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleContainerClusterNodeConfigShieldedInstanceConfig;
  /**
  * sole_tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#sole_tenant_config GoogleContainerCluster#sole_tenant_config}
  */
  readonly soleTenantConfig?: GoogleContainerClusterNodeConfigSoleTenantConfig;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#taint GoogleContainerCluster#taint}
  */
  readonly taint?: GoogleContainerClusterNodeConfigTaint[] | cdktn.IResolvable;
  /**
  * windows_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#windows_node_config GoogleContainerCluster#windows_node_config}
  */
  readonly windowsNodeConfig?: GoogleContainerClusterNodeConfigWindowsNodeConfig;
  /**
  * workload_metadata_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#workload_metadata_config GoogleContainerCluster#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: GoogleContainerClusterNodeConfigWorkloadMetadataConfig;
}

export function googleContainerClusterNodeConfigToTerraform(struct?: GoogleContainerClusterNodeConfigOutputReference | GoogleContainerClusterNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktn.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size_gb: cdktn.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktn.stringToTerraform(struct!.diskType),
    enable_confidential_storage: cdktn.booleanToTerraform(struct!.enableConfidentialStorage),
    flex_start: cdktn.booleanToTerraform(struct!.flexStart),
    image_type: cdktn.stringToTerraform(struct!.imageType),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
    local_ssd_encryption_mode: cdktn.stringToTerraform(struct!.localSsdEncryptionMode),
    logging_variant: cdktn.stringToTerraform(struct!.loggingVariant),
    machine_type: cdktn.stringToTerraform(struct!.machineType),
    max_run_duration: cdktn.stringToTerraform(struct!.maxRunDuration),
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    min_cpu_platform: cdktn.stringToTerraform(struct!.minCpuPlatform),
    node_group: cdktn.stringToTerraform(struct!.nodeGroup),
    oauth_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.oauthScopes),
    preemptible: cdktn.booleanToTerraform(struct!.preemptible),
    resource_labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.resourceLabels),
    resource_manager_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.resourceManagerTags),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
    spot: cdktn.booleanToTerraform(struct!.spot),
    storage_pools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.storagePools),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    advanced_machine_features: googleContainerClusterNodeConfigAdvancedMachineFeaturesToTerraform(struct!.advancedMachineFeatures),
    boot_disk: googleContainerClusterNodeConfigBootDiskToTerraform(struct!.bootDisk),
    confidential_nodes: googleContainerClusterNodeConfigConfidentialNodesToTerraform(struct!.confidentialNodes),
    containerd_config: googleContainerClusterNodeConfigContainerdConfigToTerraform(struct!.containerdConfig),
    ephemeral_storage_config: googleContainerClusterNodeConfigEphemeralStorageConfigToTerraform(struct!.ephemeralStorageConfig),
    ephemeral_storage_local_ssd_config: googleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct!.ephemeralStorageLocalSsdConfig),
    fast_socket: googleContainerClusterNodeConfigFastSocketToTerraform(struct!.fastSocket),
    gcfs_config: googleContainerClusterNodeConfigGcfsConfigToTerraform(struct!.gcfsConfig),
    guest_accelerator: cdktn.listMapper(googleContainerClusterNodeConfigGuestAcceleratorToTerraform, true)(struct!.guestAccelerator),
    gvnic: googleContainerClusterNodeConfigGvnicToTerraform(struct!.gvnic),
    host_maintenance_policy: googleContainerClusterNodeConfigHostMaintenancePolicyToTerraform(struct!.hostMaintenancePolicy),
    kubelet_config: googleContainerClusterNodeConfigKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_node_config: googleContainerClusterNodeConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    local_nvme_ssd_block_config: googleContainerClusterNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct!.localNvmeSsdBlockConfig),
    reservation_affinity: googleContainerClusterNodeConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    sandbox_config: googleContainerClusterNodeConfigSandboxConfigToTerraform(struct!.sandboxConfig),
    secondary_boot_disks: cdktn.listMapper(googleContainerClusterNodeConfigSecondaryBootDisksToTerraform, true)(struct!.secondaryBootDisks),
    shielded_instance_config: googleContainerClusterNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    sole_tenant_config: googleContainerClusterNodeConfigSoleTenantConfigToTerraform(struct!.soleTenantConfig),
    taint: cdktn.listMapper(googleContainerClusterNodeConfigTaintToTerraform, true)(struct!.taint),
    windows_node_config: googleContainerClusterNodeConfigWindowsNodeConfigToTerraform(struct!.windowsNodeConfig),
    workload_metadata_config: googleContainerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}


export function googleContainerClusterNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigOutputReference | GoogleContainerClusterNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_kms_key: {
      value: cdktn.stringToHclTerraform(struct!.bootDiskKmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktn.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_confidential_storage: {
      value: cdktn.booleanToHclTerraform(struct!.enableConfidentialStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flex_start: {
      value: cdktn.booleanToHclTerraform(struct!.flexStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_type: {
      value: cdktn.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    local_ssd_count: {
      value: cdktn.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ssd_encryption_mode: {
      value: cdktn.stringToHclTerraform(struct!.localSsdEncryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_variant: {
      value: cdktn.stringToHclTerraform(struct!.loggingVariant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktn.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_run_duration: {
      value: cdktn.stringToHclTerraform(struct!.maxRunDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    min_cpu_platform: {
      value: cdktn.stringToHclTerraform(struct!.minCpuPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group: {
      value: cdktn.stringToHclTerraform(struct!.nodeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preemptible: {
      value: cdktn.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.resourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_manager_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot: {
      value: cdktn.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_pools: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.storagePools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_machine_features: {
      value: googleContainerClusterNodeConfigAdvancedMachineFeaturesToHclTerraform(struct!.advancedMachineFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigAdvancedMachineFeaturesList",
    },
    boot_disk: {
      value: googleContainerClusterNodeConfigBootDiskToHclTerraform(struct!.bootDisk),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigBootDiskList",
    },
    confidential_nodes: {
      value: googleContainerClusterNodeConfigConfidentialNodesToHclTerraform(struct!.confidentialNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigConfidentialNodesList",
    },
    containerd_config: {
      value: googleContainerClusterNodeConfigContainerdConfigToHclTerraform(struct!.containerdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigContainerdConfigList",
    },
    ephemeral_storage_config: {
      value: googleContainerClusterNodeConfigEphemeralStorageConfigToHclTerraform(struct!.ephemeralStorageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigEphemeralStorageConfigList",
    },
    ephemeral_storage_local_ssd_config: {
      value: googleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct!.ephemeralStorageLocalSsdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigList",
    },
    fast_socket: {
      value: googleContainerClusterNodeConfigFastSocketToHclTerraform(struct!.fastSocket),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigFastSocketList",
    },
    gcfs_config: {
      value: googleContainerClusterNodeConfigGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigGcfsConfigList",
    },
    guest_accelerator: {
      value: cdktn.listMapperHcl(googleContainerClusterNodeConfigGuestAcceleratorToHclTerraform, true)(struct!.guestAccelerator),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigGuestAcceleratorList",
    },
    gvnic: {
      value: googleContainerClusterNodeConfigGvnicToHclTerraform(struct!.gvnic),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigGvnicList",
    },
    host_maintenance_policy: {
      value: googleContainerClusterNodeConfigHostMaintenancePolicyToHclTerraform(struct!.hostMaintenancePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigHostMaintenancePolicyList",
    },
    kubelet_config: {
      value: googleContainerClusterNodeConfigKubeletConfigToHclTerraform(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigKubeletConfigList",
    },
    linux_node_config: {
      value: googleContainerClusterNodeConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigLinuxNodeConfigList",
    },
    local_nvme_ssd_block_config: {
      value: googleContainerClusterNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct!.localNvmeSsdBlockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfigList",
    },
    reservation_affinity: {
      value: googleContainerClusterNodeConfigReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigReservationAffinityList",
    },
    sandbox_config: {
      value: googleContainerClusterNodeConfigSandboxConfigToHclTerraform(struct!.sandboxConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigSandboxConfigList",
    },
    secondary_boot_disks: {
      value: cdktn.listMapperHcl(googleContainerClusterNodeConfigSecondaryBootDisksToHclTerraform, true)(struct!.secondaryBootDisks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigSecondaryBootDisksList",
    },
    shielded_instance_config: {
      value: googleContainerClusterNodeConfigShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigShieldedInstanceConfigList",
    },
    sole_tenant_config: {
      value: googleContainerClusterNodeConfigSoleTenantConfigToHclTerraform(struct!.soleTenantConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigSoleTenantConfigList",
    },
    taint: {
      value: cdktn.listMapperHcl(googleContainerClusterNodeConfigTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigTaintList",
    },
    windows_node_config: {
      value: googleContainerClusterNodeConfigWindowsNodeConfigToHclTerraform(struct!.windowsNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigWindowsNodeConfigList",
    },
    workload_metadata_config: {
      value: googleContainerClusterNodeConfigWorkloadMetadataConfigToHclTerraform(struct!.workloadMetadataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigWorkloadMetadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._enableConfidentialStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialStorage = this._enableConfidentialStorage;
    }
    if (this._flexStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexStart = this._flexStart;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._localSsdEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdEncryptionMode = this._localSsdEncryptionMode;
    }
    if (this._loggingVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingVariant = this._loggingVariant;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._maxRunDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRunDuration = this._maxRunDuration;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._nodeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroup = this._nodeGroup;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._resourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabels = this._resourceLabels;
    }
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._storagePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePools = this._storagePools;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._advancedMachineFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedMachineFeatures = this._advancedMachineFeatures?.internalValue;
    }
    if (this._bootDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDisk = this._bootDisk?.internalValue;
    }
    if (this._confidentialNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialNodes = this._confidentialNodes?.internalValue;
    }
    if (this._containerdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerdConfig = this._containerdConfig?.internalValue;
    }
    if (this._ephemeralStorageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageConfig = this._ephemeralStorageConfig?.internalValue;
    }
    if (this._ephemeralStorageLocalSsdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageLocalSsdConfig = this._ephemeralStorageLocalSsdConfig?.internalValue;
    }
    if (this._fastSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastSocket = this._fastSocket?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    if (this._guestAccelerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerator = this._guestAccelerator?.internalValue;
    }
    if (this._gvnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gvnic = this._gvnic?.internalValue;
    }
    if (this._hostMaintenancePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMaintenancePolicy = this._hostMaintenancePolicy?.internalValue;
    }
    if (this._kubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig?.internalValue;
    }
    if (this._linuxNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxNodeConfig = this._linuxNodeConfig?.internalValue;
    }
    if (this._localNvmeSsdBlockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNvmeSsdBlockConfig = this._localNvmeSsdBlockConfig?.internalValue;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    if (this._sandboxConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxConfig = this._sandboxConfig?.internalValue;
    }
    if (this._secondaryBootDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryBootDisks = this._secondaryBootDisks?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._soleTenantConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soleTenantConfig = this._soleTenantConfig?.internalValue;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    if (this._windowsNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsNodeConfig = this._windowsNodeConfig?.internalValue;
    }
    if (this._workloadMetadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadMetadataConfig = this._workloadMetadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._enableConfidentialStorage = undefined;
      this._flexStart = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._localSsdCount = undefined;
      this._localSsdEncryptionMode = undefined;
      this._loggingVariant = undefined;
      this._machineType = undefined;
      this._maxRunDuration = undefined;
      this._metadata = undefined;
      this._minCpuPlatform = undefined;
      this._nodeGroup = undefined;
      this._oauthScopes = undefined;
      this._preemptible = undefined;
      this._resourceLabels = undefined;
      this._resourceManagerTags = undefined;
      this._serviceAccount = undefined;
      this._spot = undefined;
      this._storagePools = undefined;
      this._tags = undefined;
      this._advancedMachineFeatures.internalValue = undefined;
      this._bootDisk.internalValue = undefined;
      this._confidentialNodes.internalValue = undefined;
      this._containerdConfig.internalValue = undefined;
      this._ephemeralStorageConfig.internalValue = undefined;
      this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
      this._fastSocket.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
      this._guestAccelerator.internalValue = undefined;
      this._gvnic.internalValue = undefined;
      this._hostMaintenancePolicy.internalValue = undefined;
      this._kubeletConfig.internalValue = undefined;
      this._linuxNodeConfig.internalValue = undefined;
      this._localNvmeSsdBlockConfig.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._sandboxConfig.internalValue = undefined;
      this._secondaryBootDisks.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._soleTenantConfig.internalValue = undefined;
      this._taint.internalValue = undefined;
      this._windowsNodeConfig.internalValue = undefined;
      this._workloadMetadataConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._enableConfidentialStorage = value.enableConfidentialStorage;
      this._flexStart = value.flexStart;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._localSsdCount = value.localSsdCount;
      this._localSsdEncryptionMode = value.localSsdEncryptionMode;
      this._loggingVariant = value.loggingVariant;
      this._machineType = value.machineType;
      this._maxRunDuration = value.maxRunDuration;
      this._metadata = value.metadata;
      this._minCpuPlatform = value.minCpuPlatform;
      this._nodeGroup = value.nodeGroup;
      this._oauthScopes = value.oauthScopes;
      this._preemptible = value.preemptible;
      this._resourceLabels = value.resourceLabels;
      this._resourceManagerTags = value.resourceManagerTags;
      this._serviceAccount = value.serviceAccount;
      this._spot = value.spot;
      this._storagePools = value.storagePools;
      this._tags = value.tags;
      this._advancedMachineFeatures.internalValue = value.advancedMachineFeatures;
      this._bootDisk.internalValue = value.bootDisk;
      this._confidentialNodes.internalValue = value.confidentialNodes;
      this._containerdConfig.internalValue = value.containerdConfig;
      this._ephemeralStorageConfig.internalValue = value.ephemeralStorageConfig;
      this._ephemeralStorageLocalSsdConfig.internalValue = value.ephemeralStorageLocalSsdConfig;
      this._fastSocket.internalValue = value.fastSocket;
      this._gcfsConfig.internalValue = value.gcfsConfig;
      this._guestAccelerator.internalValue = value.guestAccelerator;
      this._gvnic.internalValue = value.gvnic;
      this._hostMaintenancePolicy.internalValue = value.hostMaintenancePolicy;
      this._kubeletConfig.internalValue = value.kubeletConfig;
      this._linuxNodeConfig.internalValue = value.linuxNodeConfig;
      this._localNvmeSsdBlockConfig.internalValue = value.localNvmeSsdBlockConfig;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._sandboxConfig.internalValue = value.sandboxConfig;
      this._secondaryBootDisks.internalValue = value.secondaryBootDisks;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._soleTenantConfig.internalValue = value.soleTenantConfig;
      this._taint.internalValue = value.taint;
      this._windowsNodeConfig.internalValue = value.windowsNodeConfig;
      this._workloadMetadataConfig.internalValue = value.workloadMetadataConfig;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // effective_taints - computed: true, optional: false, required: false
  private _effectiveTaints = new GoogleContainerClusterNodeConfigEffectiveTaintsList(this, "effective_taints", false);
  public get effectiveTaints() {
    return this._effectiveTaints;
  }

  // enable_confidential_storage - computed: false, optional: true, required: false
  private _enableConfidentialStorage?: boolean | cdktn.IResolvable; 
  public get enableConfidentialStorage() {
    return this.getBooleanAttribute('enable_confidential_storage');
  }
  public set enableConfidentialStorage(value: boolean | cdktn.IResolvable) {
    this._enableConfidentialStorage = value;
  }
  public resetEnableConfidentialStorage() {
    this._enableConfidentialStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialStorageInput() {
    return this._enableConfidentialStorage;
  }

  // flex_start - computed: false, optional: true, required: false
  private _flexStart?: boolean | cdktn.IResolvable; 
  public get flexStart() {
    return this.getBooleanAttribute('flex_start');
  }
  public set flexStart(value: boolean | cdktn.IResolvable) {
    this._flexStart = value;
  }
  public resetFlexStart() {
    this._flexStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexStartInput() {
    return this._flexStart;
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // labels - computed: true, optional: true, required: false
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

  // local_ssd_count - computed: true, optional: true, required: false
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }

  // local_ssd_encryption_mode - computed: false, optional: true, required: false
  private _localSsdEncryptionMode?: string; 
  public get localSsdEncryptionMode() {
    return this.getStringAttribute('local_ssd_encryption_mode');
  }
  public set localSsdEncryptionMode(value: string) {
    this._localSsdEncryptionMode = value;
  }
  public resetLocalSsdEncryptionMode() {
    this._localSsdEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdEncryptionModeInput() {
    return this._localSsdEncryptionMode;
  }

  // logging_variant - computed: true, optional: true, required: false
  private _loggingVariant?: string; 
  public get loggingVariant() {
    return this.getStringAttribute('logging_variant');
  }
  public set loggingVariant(value: string) {
    this._loggingVariant = value;
  }
  public resetLoggingVariant() {
    this._loggingVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingVariantInput() {
    return this._loggingVariant;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // max_run_duration - computed: false, optional: true, required: false
  private _maxRunDuration?: string; 
  public get maxRunDuration() {
    return this.getStringAttribute('max_run_duration');
  }
  public set maxRunDuration(value: string) {
    this._maxRunDuration = value;
  }
  public resetMaxRunDuration() {
    this._maxRunDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunDurationInput() {
    return this._maxRunDuration;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // node_group - computed: false, optional: true, required: false
  private _nodeGroup?: string; 
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }
  public set nodeGroup(value: string) {
    this._nodeGroup = value;
  }
  public resetNodeGroup() {
    this._nodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return cdktn.Fn.tolist(this.getListAttribute('oauth_scopes'));
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktn.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktn.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags?: { [key: string]: string }; 
  public get resourceManagerTags() {
    return this.getStringMapAttribute('resource_manager_tags');
  }
  public set resourceManagerTags(value: { [key: string]: string }) {
    this._resourceManagerTags = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags;
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktn.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktn.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // storage_pools - computed: false, optional: true, required: false
  private _storagePools?: string[]; 
  public get storagePools() {
    return this.getListAttribute('storage_pools');
  }
  public set storagePools(value: string[]) {
    this._storagePools = value;
  }
  public resetStoragePools() {
    this._storagePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolsInput() {
    return this._storagePools;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new GoogleContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: GoogleContainerClusterNodeConfigAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // boot_disk - computed: false, optional: true, required: false
  private _bootDisk = new GoogleContainerClusterNodeConfigBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: GoogleContainerClusterNodeConfigBootDisk) {
    this._bootDisk.internalValue = value;
  }
  public resetBootDisk() {
    this._bootDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // confidential_nodes - computed: false, optional: true, required: false
  private _confidentialNodes = new GoogleContainerClusterNodeConfigConfidentialNodesOutputReference(this, "confidential_nodes");
  public get confidentialNodes() {
    return this._confidentialNodes;
  }
  public putConfidentialNodes(value: GoogleContainerClusterNodeConfigConfidentialNodes) {
    this._confidentialNodes.internalValue = value;
  }
  public resetConfidentialNodes() {
    this._confidentialNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialNodesInput() {
    return this._confidentialNodes.internalValue;
  }

  // containerd_config - computed: false, optional: true, required: false
  private _containerdConfig = new GoogleContainerClusterNodeConfigContainerdConfigOutputReference(this, "containerd_config");
  public get containerdConfig() {
    return this._containerdConfig;
  }
  public putContainerdConfig(value: GoogleContainerClusterNodeConfigContainerdConfig) {
    this._containerdConfig.internalValue = value;
  }
  public resetContainerdConfig() {
    this._containerdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdConfigInput() {
    return this._containerdConfig.internalValue;
  }

  // ephemeral_storage_config - computed: false, optional: true, required: false
  private _ephemeralStorageConfig = new GoogleContainerClusterNodeConfigEphemeralStorageConfigOutputReference(this, "ephemeral_storage_config");
  public get ephemeralStorageConfig() {
    return this._ephemeralStorageConfig;
  }
  public putEphemeralStorageConfig(value: GoogleContainerClusterNodeConfigEphemeralStorageConfig) {
    this._ephemeralStorageConfig.internalValue = value;
  }
  public resetEphemeralStorageConfig() {
    this._ephemeralStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageConfigInput() {
    return this._ephemeralStorageConfig.internalValue;
  }

  // ephemeral_storage_local_ssd_config - computed: false, optional: true, required: false
  private _ephemeralStorageLocalSsdConfig = new GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference(this, "ephemeral_storage_local_ssd_config");
  public get ephemeralStorageLocalSsdConfig() {
    return this._ephemeralStorageLocalSsdConfig;
  }
  public putEphemeralStorageLocalSsdConfig(value: GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig) {
    this._ephemeralStorageLocalSsdConfig.internalValue = value;
  }
  public resetEphemeralStorageLocalSsdConfig() {
    this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageLocalSsdConfigInput() {
    return this._ephemeralStorageLocalSsdConfig.internalValue;
  }

  // fast_socket - computed: false, optional: true, required: false
  private _fastSocket = new GoogleContainerClusterNodeConfigFastSocketOutputReference(this, "fast_socket");
  public get fastSocket() {
    return this._fastSocket;
  }
  public putFastSocket(value: GoogleContainerClusterNodeConfigFastSocket) {
    this._fastSocket.internalValue = value;
  }
  public resetFastSocket() {
    this._fastSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastSocketInput() {
    return this._fastSocket.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new GoogleContainerClusterNodeConfigGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: GoogleContainerClusterNodeConfigGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }

  // guest_accelerator - computed: false, optional: true, required: false
  private _guestAccelerator = new GoogleContainerClusterNodeConfigGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: GoogleContainerClusterNodeConfigGuestAccelerator[] | cdktn.IResolvable) {
    this._guestAccelerator.internalValue = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator.internalValue;
  }

  // gvnic - computed: false, optional: true, required: false
  private _gvnic = new GoogleContainerClusterNodeConfigGvnicOutputReference(this, "gvnic");
  public get gvnic() {
    return this._gvnic;
  }
  public putGvnic(value: GoogleContainerClusterNodeConfigGvnic) {
    this._gvnic.internalValue = value;
  }
  public resetGvnic() {
    this._gvnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvnicInput() {
    return this._gvnic.internalValue;
  }

  // host_maintenance_policy - computed: false, optional: true, required: false
  private _hostMaintenancePolicy = new GoogleContainerClusterNodeConfigHostMaintenancePolicyOutputReference(this, "host_maintenance_policy");
  public get hostMaintenancePolicy() {
    return this._hostMaintenancePolicy;
  }
  public putHostMaintenancePolicy(value: GoogleContainerClusterNodeConfigHostMaintenancePolicy) {
    this._hostMaintenancePolicy.internalValue = value;
  }
  public resetHostMaintenancePolicy() {
    this._hostMaintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMaintenancePolicyInput() {
    return this._hostMaintenancePolicy.internalValue;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new GoogleContainerClusterNodeConfigKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: GoogleContainerClusterNodeConfigKubeletConfig) {
    this._kubeletConfig.internalValue = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig.internalValue;
  }

  // linux_node_config - computed: false, optional: true, required: false
  private _linuxNodeConfig = new GoogleContainerClusterNodeConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: GoogleContainerClusterNodeConfigLinuxNodeConfig) {
    this._linuxNodeConfig.internalValue = value;
  }
  public resetLinuxNodeConfig() {
    this._linuxNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNodeConfigInput() {
    return this._linuxNodeConfig.internalValue;
  }

  // local_nvme_ssd_block_config - computed: false, optional: true, required: false
  private _localNvmeSsdBlockConfig = new GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference(this, "local_nvme_ssd_block_config");
  public get localNvmeSsdBlockConfig() {
    return this._localNvmeSsdBlockConfig;
  }
  public putLocalNvmeSsdBlockConfig(value: GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig) {
    this._localNvmeSsdBlockConfig.internalValue = value;
  }
  public resetLocalNvmeSsdBlockConfig() {
    this._localNvmeSsdBlockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNvmeSsdBlockConfigInput() {
    return this._localNvmeSsdBlockConfig.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new GoogleContainerClusterNodeConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: GoogleContainerClusterNodeConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // sandbox_config - computed: false, optional: true, required: false
  private _sandboxConfig = new GoogleContainerClusterNodeConfigSandboxConfigOutputReference(this, "sandbox_config");
  public get sandboxConfig() {
    return this._sandboxConfig;
  }
  public putSandboxConfig(value: GoogleContainerClusterNodeConfigSandboxConfig) {
    this._sandboxConfig.internalValue = value;
  }
  public resetSandboxConfig() {
    this._sandboxConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxConfigInput() {
    return this._sandboxConfig.internalValue;
  }

  // secondary_boot_disks - computed: false, optional: true, required: false
  private _secondaryBootDisks = new GoogleContainerClusterNodeConfigSecondaryBootDisksList(this, "secondary_boot_disks", false);
  public get secondaryBootDisks() {
    return this._secondaryBootDisks;
  }
  public putSecondaryBootDisks(value: GoogleContainerClusterNodeConfigSecondaryBootDisks[] | cdktn.IResolvable) {
    this._secondaryBootDisks.internalValue = value;
  }
  public resetSecondaryBootDisks() {
    this._secondaryBootDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryBootDisksInput() {
    return this._secondaryBootDisks.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleContainerClusterNodeConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleContainerClusterNodeConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // sole_tenant_config - computed: false, optional: true, required: false
  private _soleTenantConfig = new GoogleContainerClusterNodeConfigSoleTenantConfigOutputReference(this, "sole_tenant_config");
  public get soleTenantConfig() {
    return this._soleTenantConfig;
  }
  public putSoleTenantConfig(value: GoogleContainerClusterNodeConfigSoleTenantConfig) {
    this._soleTenantConfig.internalValue = value;
  }
  public resetSoleTenantConfig() {
    this._soleTenantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soleTenantConfigInput() {
    return this._soleTenantConfig.internalValue;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new GoogleContainerClusterNodeConfigTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: GoogleContainerClusterNodeConfigTaint[] | cdktn.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // windows_node_config - computed: false, optional: true, required: false
  private _windowsNodeConfig = new GoogleContainerClusterNodeConfigWindowsNodeConfigOutputReference(this, "windows_node_config");
  public get windowsNodeConfig() {
    return this._windowsNodeConfig;
  }
  public putWindowsNodeConfig(value: GoogleContainerClusterNodeConfigWindowsNodeConfig) {
    this._windowsNodeConfig.internalValue = value;
  }
  public resetWindowsNodeConfig() {
    this._windowsNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsNodeConfigInput() {
    return this._windowsNodeConfig.internalValue;
  }

  // workload_metadata_config - computed: false, optional: true, required: false
  private _workloadMetadataConfig = new GoogleContainerClusterNodeConfigWorkloadMetadataConfigOutputReference(this, "workload_metadata_config");
  public get workloadMetadataConfig() {
    return this._workloadMetadataConfig;
  }
  public putWorkloadMetadataConfig(value: GoogleContainerClusterNodeConfigWorkloadMetadataConfig) {
    this._workloadMetadataConfig.internalValue = value;
  }
  public resetWorkloadMetadataConfig() {
    this._workloadMetadataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadMetadataConfigInput() {
    return this._workloadMetadataConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolAutoscaling {
  /**
  * Location policy specifies the algorithm used when scaling-up the node pool. "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#location_policy GoogleContainerCluster#location_policy}
  */
  readonly locationPolicy?: string;
  /**
  * Maximum number of nodes per zone in the node pool. Must be >= min_node_count. Cannot be used with total limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#max_node_count GoogleContainerCluster#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * Minimum number of nodes per zone in the node pool. Must be >=0 and <= max_node_count. Cannot be used with total limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#min_node_count GoogleContainerCluster#min_node_count}
  */
  readonly minNodeCount?: number;
  /**
  * Maximum number of all nodes in the node pool. Must be >= total_min_node_count. Cannot be used with per zone limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#total_max_node_count GoogleContainerCluster#total_max_node_count}
  */
  readonly totalMaxNodeCount?: number;
  /**
  * Minimum number of all nodes in the node pool. Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_container_cluster#total_min_node_count GoogleContainerCluster#total_min_node_count}
  */
  readonly totalMinNodeCount?: number;
}

export function googleContainerClusterNodePoolAutoscalingToTerraform(struct?: GoogleContainerClusterNodePoolAutoscalingOutputReference | GoogleContainerClusterNodePoolAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_policy: cdktn.stringToTerraform(struct!.locationPolicy),
    max_node_count: cdktn.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktn.numberToTerraform(struct!.minNodeCount),
    total_max_node_count: cdktn.numberToTerraform(struct!.totalMaxNodeCount),
    total_min_node_count: cdktn.numberToTerraform(struct!.totalMinNodeCount),
  }
}


export function googleContainerClusterNodePoolAutoscalingToHclTerraform(struct?: GoogleContainerClusterNodePoolAutoscalingOutputReference | GoogleContainerClusterNodePoolAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_policy: {
      value: cdktn.stringToHclTerraform(struct!.locationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_node_count: {
      value: cdktn.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktn.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_max_node_count: {
      value: cdktn.numberToHclTerraform(struct!.totalMaxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_min_node_count: {
      value: cdktn.numberToHclTerraform(struct!.totalMinNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolAutoscalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationPolicy = this._locationPolicy;
    }
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    if (this._totalMaxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMaxNodeCount = this._totalMaxNodeCount;
    }
    if (this._totalMinNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMinNodeCount = this._totalMinNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locationPolicy = undefined;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
      this._totalMaxNodeCount = undefined;
      this._totalMinNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locationPolicy = value.locationPolicy;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
      this._totalMaxNodeCount = value.totalMaxNodeCount;
      this._totalMinNodeCount = value.totalMinNodeCount;
    }
  }

  // location_policy - computed: true, optional: true, required: false
  private _locationPolicy?: string; 
  public get locationPolicy() {
    return this.getStringAttribute('location_policy');
  }
  public set locationPolicy(value: string) {
    this._locationPolicy = value;
  }
  public resetLocationPolicy() {
    this._locationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPolicyInput() {
    return this._locationPolicy;
  }

  // max_node_count - computed: false, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: true, required: false
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  public resetMinNodeCount() {
    this._minNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }

  // total_max_node_count - computed: false, optional: true, required: false
  private _totalMaxNodeCount?: number; 
  public get totalMaxNodeCount() {
    return this.getNumberAttribute('total_max_node_count');
  }
  public set totalMaxNodeCount(value: number) {
    this._totalMaxNodeCount = value;
  }
  public resetTotalMaxNodeCount() {
    this._totalMaxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMaxNodeCountInput() {
    return this._totalMaxNodeCount;
  }

  // total_min_node_count - computed: false, optional: true, required: false
  private _totalMinNodeCount?: number; 
  public get totalMinNodeCount() {
    return this.getNumberAttribute('total_min_node_count');
  }
  public set totalMinNodeCount(value: number) {
    this._totalMinNodeCount = value;
  }
  public resetTotalMinNodeCount() {
    this._totalMinNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMinNodeCountInput() {
    return this._totalMinNodeCount;
  }
}
