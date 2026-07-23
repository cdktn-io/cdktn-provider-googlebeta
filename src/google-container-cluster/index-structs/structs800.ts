/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
export interface GoogleContainerClusterWorkloadAltsConfig {
  /**
  * Whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workloadPool must be non-empty).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_container_cluster#enable_alts GoogleContainerCluster#enable_alts}
  */
  readonly enableAlts: boolean | cdktn.IResolvable;
}

export function googleContainerClusterWorkloadAltsConfigToTerraform(struct?: GoogleContainerClusterWorkloadAltsConfigOutputReference | GoogleContainerClusterWorkloadAltsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_alts: cdktn.booleanToTerraform(struct!.enableAlts),
  }
}


export function googleContainerClusterWorkloadAltsConfigToHclTerraform(struct?: GoogleContainerClusterWorkloadAltsConfigOutputReference | GoogleContainerClusterWorkloadAltsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_alts: {
      value: cdktn.booleanToHclTerraform(struct!.enableAlts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterWorkloadAltsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterWorkloadAltsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAlts !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAlts = this._enableAlts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterWorkloadAltsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAlts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAlts = value.enableAlts;
    }
  }

  // enable_alts - computed: false, optional: false, required: true
  private _enableAlts?: boolean | cdktn.IResolvable; 
  public get enableAlts() {
    return this.getBooleanAttribute('enable_alts');
  }
  public set enableAlts(value: boolean | cdktn.IResolvable) {
    this._enableAlts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAltsInput() {
    return this._enableAlts;
  }
}
export interface GoogleContainerClusterWorkloadIdentityConfig {
  /**
  * The workload pool to attach all Kubernetes service accounts to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_container_cluster#workload_pool GoogleContainerCluster#workload_pool}
  */
  readonly workloadPool?: string;
}

export function googleContainerClusterWorkloadIdentityConfigToTerraform(struct?: GoogleContainerClusterWorkloadIdentityConfigOutputReference | GoogleContainerClusterWorkloadIdentityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workload_pool: cdktn.stringToTerraform(struct!.workloadPool),
  }
}


export function googleContainerClusterWorkloadIdentityConfigToHclTerraform(struct?: GoogleContainerClusterWorkloadIdentityConfigOutputReference | GoogleContainerClusterWorkloadIdentityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workload_pool: {
      value: cdktn.stringToHclTerraform(struct!.workloadPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterWorkloadIdentityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterWorkloadIdentityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workloadPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadPool = this._workloadPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterWorkloadIdentityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workloadPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workloadPool = value.workloadPool;
    }
  }

  // workload_pool - computed: false, optional: true, required: false
  private _workloadPool?: string; 
  public get workloadPool() {
    return this.getStringAttribute('workload_pool');
  }
  public set workloadPool(value: string) {
    this._workloadPool = value;
  }
  public resetWorkloadPool() {
    this._workloadPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadPoolInput() {
    return this._workloadPool;
  }
}
