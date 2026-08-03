/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
export interface GoogleContainerClusterTpuConfig {
  /**
  * Whether Cloud TPU integration is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Whether to use service networking for Cloud TPU or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_container_cluster#use_service_networking GoogleContainerCluster#use_service_networking}
  */
  readonly useServiceNetworking?: boolean | cdktn.IResolvable;
}

export function googleContainerClusterTpuConfigToTerraform(struct?: GoogleContainerClusterTpuConfigOutputReference | GoogleContainerClusterTpuConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    use_service_networking: cdktn.booleanToTerraform(struct!.useServiceNetworking),
  }
}


export function googleContainerClusterTpuConfigToHclTerraform(struct?: GoogleContainerClusterTpuConfigOutputReference | GoogleContainerClusterTpuConfig): any {
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
    use_service_networking: {
      value: cdktn.booleanToHclTerraform(struct!.useServiceNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterTpuConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterTpuConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._useServiceNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServiceNetworking = this._useServiceNetworking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterTpuConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._useServiceNetworking = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._useServiceNetworking = value.useServiceNetworking;
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

  // ipv4_cidr_block - computed: true, optional: false, required: false
  public get ipv4CidrBlock() {
    return this.getStringAttribute('ipv4_cidr_block');
  }

  // use_service_networking - computed: false, optional: true, required: false
  private _useServiceNetworking?: boolean | cdktn.IResolvable; 
  public get useServiceNetworking() {
    return this.getBooleanAttribute('use_service_networking');
  }
  public set useServiceNetworking(value: boolean | cdktn.IResolvable) {
    this._useServiceNetworking = value;
  }
  public resetUseServiceNetworking() {
    this._useServiceNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServiceNetworkingInput() {
    return this._useServiceNetworking;
  }
}
export interface GoogleContainerClusterUserManagedKeysConfig {
  /**
  * The Certificate Authority Service caPool to use for the aggreation CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_container_cluster#aggregation_ca GoogleContainerCluster#aggregation_ca}
  */
  readonly aggregationCa?: string;
  /**
  * The Certificate Authority Service caPool to use for the cluster CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_container_cluster#cluster_ca GoogleContainerCluster#cluster_ca}
  */
  readonly clusterCa?: string;
  /**
  * The Cloud KMS cryptoKey to use for Confidential Hyperdisk on the control plane nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_container_cluster#control_plane_disk_encryption_key GoogleContainerCluster#control_plane_disk_encryption_key}
  */
  readonly controlPlaneDiskEncryptionKey?: string;
  /**
  * The Certificate Authority Service caPool to use for the etcd API CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_container_cluster#etcd_api_ca GoogleContainerCluster#etcd_api_ca}
  */
  readonly etcdApiCa?: string;
  /**
  * The Certificate Authority Service caPool to use for the etcd peer CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_container_cluster#etcd_peer_ca GoogleContainerCluster#etcd_peer_ca}
  */
  readonly etcdPeerCa?: string;
  /**
  * Resource path of the Cloud KMS cryptoKey to use for encryption of internal etcd backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_container_cluster#gkeops_etcd_backup_encryption_key GoogleContainerCluster#gkeops_etcd_backup_encryption_key}
  */
  readonly gkeopsEtcdBackupEncryptionKey?: string;
  /**
  * The Cloud KMS cryptoKeyVersions to use for signing service account JWTs issued by this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_container_cluster#service_account_signing_keys GoogleContainerCluster#service_account_signing_keys}
  */
  readonly serviceAccountSigningKeys?: string[];
  /**
  * The Cloud KMS cryptoKeyVersions to use for verifying service account JWTs issued by this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_container_cluster#service_account_verification_keys GoogleContainerCluster#service_account_verification_keys}
  */
  readonly serviceAccountVerificationKeys?: string[];
}

export function googleContainerClusterUserManagedKeysConfigToTerraform(struct?: GoogleContainerClusterUserManagedKeysConfigOutputReference | GoogleContainerClusterUserManagedKeysConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation_ca: cdktn.stringToTerraform(struct!.aggregationCa),
    cluster_ca: cdktn.stringToTerraform(struct!.clusterCa),
    control_plane_disk_encryption_key: cdktn.stringToTerraform(struct!.controlPlaneDiskEncryptionKey),
    etcd_api_ca: cdktn.stringToTerraform(struct!.etcdApiCa),
    etcd_peer_ca: cdktn.stringToTerraform(struct!.etcdPeerCa),
    gkeops_etcd_backup_encryption_key: cdktn.stringToTerraform(struct!.gkeopsEtcdBackupEncryptionKey),
    service_account_signing_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.serviceAccountSigningKeys),
    service_account_verification_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.serviceAccountVerificationKeys),
  }
}


export function googleContainerClusterUserManagedKeysConfigToHclTerraform(struct?: GoogleContainerClusterUserManagedKeysConfigOutputReference | GoogleContainerClusterUserManagedKeysConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation_ca: {
      value: cdktn.stringToHclTerraform(struct!.aggregationCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_ca: {
      value: cdktn.stringToHclTerraform(struct!.clusterCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane_disk_encryption_key: {
      value: cdktn.stringToHclTerraform(struct!.controlPlaneDiskEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd_api_ca: {
      value: cdktn.stringToHclTerraform(struct!.etcdApiCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd_peer_ca: {
      value: cdktn.stringToHclTerraform(struct!.etcdPeerCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gkeops_etcd_backup_encryption_key: {
      value: cdktn.stringToHclTerraform(struct!.gkeopsEtcdBackupEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_signing_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.serviceAccountSigningKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_account_verification_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.serviceAccountVerificationKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterUserManagedKeysConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterUserManagedKeysConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationCa = this._aggregationCa;
    }
    if (this._clusterCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCa = this._clusterCa;
    }
    if (this._controlPlaneDiskEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneDiskEncryptionKey = this._controlPlaneDiskEncryptionKey;
    }
    if (this._etcdApiCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdApiCa = this._etcdApiCa;
    }
    if (this._etcdPeerCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdPeerCa = this._etcdPeerCa;
    }
    if (this._gkeopsEtcdBackupEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeopsEtcdBackupEncryptionKey = this._gkeopsEtcdBackupEncryptionKey;
    }
    if (this._serviceAccountSigningKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountSigningKeys = this._serviceAccountSigningKeys;
    }
    if (this._serviceAccountVerificationKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountVerificationKeys = this._serviceAccountVerificationKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterUserManagedKeysConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationCa = undefined;
      this._clusterCa = undefined;
      this._controlPlaneDiskEncryptionKey = undefined;
      this._etcdApiCa = undefined;
      this._etcdPeerCa = undefined;
      this._gkeopsEtcdBackupEncryptionKey = undefined;
      this._serviceAccountSigningKeys = undefined;
      this._serviceAccountVerificationKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationCa = value.aggregationCa;
      this._clusterCa = value.clusterCa;
      this._controlPlaneDiskEncryptionKey = value.controlPlaneDiskEncryptionKey;
      this._etcdApiCa = value.etcdApiCa;
      this._etcdPeerCa = value.etcdPeerCa;
      this._gkeopsEtcdBackupEncryptionKey = value.gkeopsEtcdBackupEncryptionKey;
      this._serviceAccountSigningKeys = value.serviceAccountSigningKeys;
      this._serviceAccountVerificationKeys = value.serviceAccountVerificationKeys;
    }
  }

  // aggregation_ca - computed: false, optional: true, required: false
  private _aggregationCa?: string; 
  public get aggregationCa() {
    return this.getStringAttribute('aggregation_ca');
  }
  public set aggregationCa(value: string) {
    this._aggregationCa = value;
  }
  public resetAggregationCa() {
    this._aggregationCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationCaInput() {
    return this._aggregationCa;
  }

  // cluster_ca - computed: false, optional: true, required: false
  private _clusterCa?: string; 
  public get clusterCa() {
    return this.getStringAttribute('cluster_ca');
  }
  public set clusterCa(value: string) {
    this._clusterCa = value;
  }
  public resetClusterCa() {
    this._clusterCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaInput() {
    return this._clusterCa;
  }

  // control_plane_disk_encryption_key - computed: false, optional: true, required: false
  private _controlPlaneDiskEncryptionKey?: string; 
  public get controlPlaneDiskEncryptionKey() {
    return this.getStringAttribute('control_plane_disk_encryption_key');
  }
  public set controlPlaneDiskEncryptionKey(value: string) {
    this._controlPlaneDiskEncryptionKey = value;
  }
  public resetControlPlaneDiskEncryptionKey() {
    this._controlPlaneDiskEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneDiskEncryptionKeyInput() {
    return this._controlPlaneDiskEncryptionKey;
  }

  // control_plane_disk_encryption_key_versions - computed: true, optional: false, required: false
  public get controlPlaneDiskEncryptionKeyVersions() {
    return cdktn.Fn.tolist(this.getListAttribute('control_plane_disk_encryption_key_versions'));
  }

  // etcd_api_ca - computed: false, optional: true, required: false
  private _etcdApiCa?: string; 
  public get etcdApiCa() {
    return this.getStringAttribute('etcd_api_ca');
  }
  public set etcdApiCa(value: string) {
    this._etcdApiCa = value;
  }
  public resetEtcdApiCa() {
    this._etcdApiCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdApiCaInput() {
    return this._etcdApiCa;
  }

  // etcd_peer_ca - computed: false, optional: true, required: false
  private _etcdPeerCa?: string; 
  public get etcdPeerCa() {
    return this.getStringAttribute('etcd_peer_ca');
  }
  public set etcdPeerCa(value: string) {
    this._etcdPeerCa = value;
  }
  public resetEtcdPeerCa() {
    this._etcdPeerCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdPeerCaInput() {
    return this._etcdPeerCa;
  }

  // gkeops_etcd_backup_encryption_key - computed: false, optional: true, required: false
  private _gkeopsEtcdBackupEncryptionKey?: string; 
  public get gkeopsEtcdBackupEncryptionKey() {
    return this.getStringAttribute('gkeops_etcd_backup_encryption_key');
  }
  public set gkeopsEtcdBackupEncryptionKey(value: string) {
    this._gkeopsEtcdBackupEncryptionKey = value;
  }
  public resetGkeopsEtcdBackupEncryptionKey() {
    this._gkeopsEtcdBackupEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeopsEtcdBackupEncryptionKeyInput() {
    return this._gkeopsEtcdBackupEncryptionKey;
  }

  // service_account_signing_keys - computed: false, optional: true, required: false
  private _serviceAccountSigningKeys?: string[]; 
  public get serviceAccountSigningKeys() {
    return cdktn.Fn.tolist(this.getListAttribute('service_account_signing_keys'));
  }
  public set serviceAccountSigningKeys(value: string[]) {
    this._serviceAccountSigningKeys = value;
  }
  public resetServiceAccountSigningKeys() {
    this._serviceAccountSigningKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountSigningKeysInput() {
    return this._serviceAccountSigningKeys;
  }

  // service_account_verification_keys - computed: false, optional: true, required: false
  private _serviceAccountVerificationKeys?: string[]; 
  public get serviceAccountVerificationKeys() {
    return cdktn.Fn.tolist(this.getListAttribute('service_account_verification_keys'));
  }
  public set serviceAccountVerificationKeys(value: string[]) {
    this._serviceAccountVerificationKeys = value;
  }
  public resetServiceAccountVerificationKeys() {
    this._serviceAccountVerificationKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountVerificationKeysInput() {
    return this._serviceAccountVerificationKeys;
  }
}
export interface GoogleContainerClusterVerticalPodAutoscaling {
  /**
  * Enables vertical pod autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleContainerClusterVerticalPodAutoscalingToTerraform(struct?: GoogleContainerClusterVerticalPodAutoscalingOutputReference | GoogleContainerClusterVerticalPodAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterVerticalPodAutoscalingToHclTerraform(struct?: GoogleContainerClusterVerticalPodAutoscalingOutputReference | GoogleContainerClusterVerticalPodAutoscaling): any {
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

export class GoogleContainerClusterVerticalPodAutoscalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterVerticalPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterVerticalPodAutoscaling | undefined) {
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
export interface GoogleContainerClusterWorkloadAltsConfig {
  /**
  * Whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workloadPool must be non-empty).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_container_cluster#enable_alts GoogleContainerCluster#enable_alts}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_container_cluster#workload_pool GoogleContainerCluster#workload_pool}
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
