/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleStorageBucketConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#default_event_based_hold GoogleStorageBucket#default_event_based_hold}
  */
  readonly defaultEventBasedHold?: boolean | cdktn.IResolvable;
  /**
  * Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#enable_object_retention GoogleStorageBucket#enable_object_retention}
  */
  readonly enableObjectRetention?: boolean | cdktn.IResolvable;
  /**
  * When true, before deleting a bucket, delete all objects within the bucket, or Anywhere Caches caching data for that bucket. Otherwise, buckets with objects/caches will fail. Anywhere Cache requires additional permissions to interact with and will be ignored when those are not present, attempting to delete anyways. This may result in the objects in the bucket getting destroyed but not the bucket itself if there is a cache in use with the bucket. Force deletion may take a long time to delete buckets with lots of objects or with any Anywhere Caches (80m+).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#force_destroy GoogleStorageBucket#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#id GoogleStorageBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs to assign to the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#labels GoogleStorageBucket#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The Google Cloud Storage location or region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#location GoogleStorageBucket#location}
  */
  readonly location: string;
  /**
  * The name of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#name GoogleStorageBucket#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#project GoogleStorageBucket#project}
  */
  readonly project?: string;
  /**
  * Prevents public access to a bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#public_access_prevention GoogleStorageBucket#public_access_prevention}
  */
  readonly publicAccessPrevention?: string;
  /**
  * Enables Requester Pays on a storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#requester_pays GoogleStorageBucket#requester_pays}
  */
  readonly requesterPays?: boolean | cdktn.IResolvable;
  /**
  * Specifies the RPO setting of bucket. If set 'ASYNC_TURBO', The Turbo Replication will be enabled for the dual-region bucket. Value 'DEFAULT' will set RPO setting to default. Turbo Replication is only for buckets in dual-regions.See the docs for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#rpo GoogleStorageBucket#rpo}
  */
  readonly rpo?: string;
  /**
  * The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#storage_class GoogleStorageBucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Enables uniform bucket-level access on a bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#uniform_bucket_level_access GoogleStorageBucket#uniform_bucket_level_access}
  */
  readonly uniformBucketLevelAccess?: boolean | cdktn.IResolvable;
  /**
  * autoclass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#autoclass GoogleStorageBucket#autoclass}
  */
  readonly autoclass?: GoogleStorageBucketAutoclass;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#cors GoogleStorageBucket#cors}
  */
  readonly cors?: GoogleStorageBucketCors[] | cdktn.IResolvable;
  /**
  * custom_placement_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#custom_placement_config GoogleStorageBucket#custom_placement_config}
  */
  readonly customPlacementConfig?: GoogleStorageBucketCustomPlacementConfig;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#encryption GoogleStorageBucket#encryption}
  */
  readonly encryption?: GoogleStorageBucketEncryption;
  /**
  * hierarchical_namespace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#hierarchical_namespace GoogleStorageBucket#hierarchical_namespace}
  */
  readonly hierarchicalNamespace?: GoogleStorageBucketHierarchicalNamespace;
  /**
  * ip_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#ip_filter GoogleStorageBucket#ip_filter}
  */
  readonly ipFilter?: GoogleStorageBucketIpFilter;
  /**
  * lifecycle_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#lifecycle_rule GoogleStorageBucket#lifecycle_rule}
  */
  readonly lifecycleRule?: GoogleStorageBucketLifecycleRule[] | cdktn.IResolvable;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#logging GoogleStorageBucket#logging}
  */
  readonly logging?: GoogleStorageBucketLogging;
  /**
  * retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#retention_policy GoogleStorageBucket#retention_policy}
  */
  readonly retentionPolicy?: GoogleStorageBucketRetentionPolicy;
  /**
  * soft_delete_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#soft_delete_policy GoogleStorageBucket#soft_delete_policy}
  */
  readonly softDeletePolicy?: GoogleStorageBucketSoftDeletePolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#timeouts GoogleStorageBucket#timeouts}
  */
  readonly timeouts?: GoogleStorageBucketTimeouts;
  /**
  * versioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#versioning GoogleStorageBucket#versioning}
  */
  readonly versioning?: GoogleStorageBucketVersioning;
  /**
  * website block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#website GoogleStorageBucket#website}
  */
  readonly website?: GoogleStorageBucketWebsite;
}
export interface GoogleStorageBucketAutoclass {
  /**
  * While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. Supported values include: NEARLINE, ARCHIVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#terminal_storage_class GoogleStorageBucket#terminal_storage_class}
  */
  readonly terminalStorageClass?: string;
}

export function googleStorageBucketAutoclassToTerraform(struct?: GoogleStorageBucketAutoclassOutputReference | GoogleStorageBucketAutoclass): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    terminal_storage_class: cdktn.stringToTerraform(struct!.terminalStorageClass),
  }
}


export function googleStorageBucketAutoclassToHclTerraform(struct?: GoogleStorageBucketAutoclassOutputReference | GoogleStorageBucketAutoclass): any {
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
    terminal_storage_class: {
      value: cdktn.stringToHclTerraform(struct!.terminalStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketAutoclassOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketAutoclass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._terminalStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminalStorageClass = this._terminalStorageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketAutoclass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._terminalStorageClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._terminalStorageClass = value.terminalStorageClass;
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

  // terminal_storage_class - computed: true, optional: true, required: false
  private _terminalStorageClass?: string; 
  public get terminalStorageClass() {
    return this.getStringAttribute('terminal_storage_class');
  }
  public set terminalStorageClass(value: string) {
    this._terminalStorageClass = value;
  }
  public resetTerminalStorageClass() {
    this._terminalStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalStorageClassInput() {
    return this._terminalStorageClass;
  }
}
export interface GoogleStorageBucketCors {
  /**
  * The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#max_age_seconds GoogleStorageBucket#max_age_seconds}
  */
  readonly maxAgeSeconds?: number;
  /**
  * The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#method GoogleStorageBucket#method}
  */
  readonly method?: string[];
  /**
  * The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#origin GoogleStorageBucket#origin}
  */
  readonly origin?: string[];
  /**
  * The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#response_header GoogleStorageBucket#response_header}
  */
  readonly responseHeader?: string[];
}

export function googleStorageBucketCorsToTerraform(struct?: GoogleStorageBucketCors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_age_seconds: cdktn.numberToTerraform(struct!.maxAgeSeconds),
    method: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.method),
    origin: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.origin),
    response_header: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.responseHeader),
  }
}


export function googleStorageBucketCorsToHclTerraform(struct?: GoogleStorageBucketCors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_age_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxAgeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.method),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    origin: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.origin),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_header: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.responseHeader),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketCorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleStorageBucketCors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAgeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeSeconds = this._maxAgeSeconds;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._responseHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeader = this._responseHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketCors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxAgeSeconds = undefined;
      this._method = undefined;
      this._origin = undefined;
      this._responseHeader = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxAgeSeconds = value.maxAgeSeconds;
      this._method = value.method;
      this._origin = value.origin;
      this._responseHeader = value.responseHeader;
    }
  }

  // max_age_seconds - computed: false, optional: true, required: false
  private _maxAgeSeconds?: number; 
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }
  public set maxAgeSeconds(value: number) {
    this._maxAgeSeconds = value;
  }
  public resetMaxAgeSeconds() {
    this._maxAgeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeSecondsInput() {
    return this._maxAgeSeconds;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string[]; 
  public get method() {
    return this.getListAttribute('method');
  }
  public set method(value: string[]) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string[]; 
  public get origin() {
    return this.getListAttribute('origin');
  }
  public set origin(value: string[]) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader?: string[]; 
  public get responseHeader() {
    return this.getListAttribute('response_header');
  }
  public set responseHeader(value: string[]) {
    this._responseHeader = value;
  }
  public resetResponseHeader() {
    this._responseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader;
  }
}

export class GoogleStorageBucketCorsList extends cdktn.ComplexList {
  public internalValue? : GoogleStorageBucketCors[] | cdktn.IResolvable

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
  public get(index: number): GoogleStorageBucketCorsOutputReference {
    return new GoogleStorageBucketCorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleStorageBucketCustomPlacementConfig {
  /**
  * The list of individual regions that comprise a dual-region bucket. See the docs for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#data_locations GoogleStorageBucket#data_locations}
  */
  readonly dataLocations: string[];
}

export function googleStorageBucketCustomPlacementConfigToTerraform(struct?: GoogleStorageBucketCustomPlacementConfigOutputReference | GoogleStorageBucketCustomPlacementConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dataLocations),
  }
}


export function googleStorageBucketCustomPlacementConfigToHclTerraform(struct?: GoogleStorageBucketCustomPlacementConfigOutputReference | GoogleStorageBucketCustomPlacementConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dataLocations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketCustomPlacementConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketCustomPlacementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLocations = this._dataLocations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketCustomPlacementConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataLocations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataLocations = value.dataLocations;
    }
  }

  // data_locations - computed: false, optional: false, required: true
  private _dataLocations?: string[]; 
  public get dataLocations() {
    return cdktn.Fn.tolist(this.getListAttribute('data_locations'));
  }
  public set dataLocations(value: string[]) {
    this._dataLocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLocationsInput() {
    return this._dataLocations;
  }
}
export interface GoogleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfig {
  /**
  * Whether CMEK is restricted for new objects within the bucket. If FullyRestricted, new objects can't be created using CMEK encryption. If NotRestricted or unset, creation of new objects with CMEK encryption is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#restriction_mode GoogleStorageBucket#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function googleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfigToTerraform(struct?: GoogleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfigOutputReference | GoogleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function googleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfigToHclTerraform(struct?: GoogleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfigOutputReference | GoogleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restriction_mode: {
      value: cdktn.stringToHclTerraform(struct!.restrictionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionMode = this._restrictionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restrictionMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restrictionMode = value.restrictionMode;
    }
  }

  // effective_time - computed: true, optional: false, required: false
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }

  // restriction_mode - computed: false, optional: false, required: true
  private _restrictionMode?: string; 
  public get restrictionMode() {
    return this.getStringAttribute('restriction_mode');
  }
  public set restrictionMode(value: string) {
    this._restrictionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionModeInput() {
    return this._restrictionMode;
  }
}
export interface GoogleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfig {
  /**
  * Whether CSEK is restricted for new objects within the bucket. If FullyRestricted, new objects can't be created using CSEK encryption. If NotRestricted or unset, creation of new objects with CSEK encryption is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#restriction_mode GoogleStorageBucket#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function googleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfigToTerraform(struct?: GoogleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfigOutputReference | GoogleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function googleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfigToHclTerraform(struct?: GoogleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfigOutputReference | GoogleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restriction_mode: {
      value: cdktn.stringToHclTerraform(struct!.restrictionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionMode = this._restrictionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restrictionMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restrictionMode = value.restrictionMode;
    }
  }

  // effective_time - computed: true, optional: false, required: false
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }

  // restriction_mode - computed: false, optional: false, required: true
  private _restrictionMode?: string; 
  public get restrictionMode() {
    return this.getStringAttribute('restriction_mode');
  }
  public set restrictionMode(value: string) {
    this._restrictionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionModeInput() {
    return this._restrictionMode;
  }
}
export interface GoogleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfig {
  /**
  * Whether GMEK is restricted for new objects within the bucket. If FullyRestricted, new objects can't be created using GMEK encryption. If NotRestricted or unset, creation of new objects with GMEK encryption is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#restriction_mode GoogleStorageBucket#restriction_mode}
  */
  readonly restrictionMode: string;
}

export function googleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfigToTerraform(struct?: GoogleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfigOutputReference | GoogleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
  }
}


export function googleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfigToHclTerraform(struct?: GoogleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfigOutputReference | GoogleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restriction_mode: {
      value: cdktn.stringToHclTerraform(struct!.restrictionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionMode = this._restrictionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restrictionMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restrictionMode = value.restrictionMode;
    }
  }

  // effective_time - computed: true, optional: false, required: false
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }

  // restriction_mode - computed: false, optional: false, required: true
  private _restrictionMode?: string; 
  public get restrictionMode() {
    return this.getStringAttribute('restriction_mode');
  }
  public set restrictionMode(value: string) {
    this._restrictionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionModeInput() {
    return this._restrictionMode;
  }
}
export interface GoogleStorageBucketEncryption {
  /**
  * A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#default_kms_key_name GoogleStorageBucket#default_kms_key_name}
  */
  readonly defaultKmsKeyName?: string;
  /**
  * customer_managed_encryption_enforcement_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#customer_managed_encryption_enforcement_config GoogleStorageBucket#customer_managed_encryption_enforcement_config}
  */
  readonly customerManagedEncryptionEnforcementConfig?: GoogleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfig;
  /**
  * customer_supplied_encryption_enforcement_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#customer_supplied_encryption_enforcement_config GoogleStorageBucket#customer_supplied_encryption_enforcement_config}
  */
  readonly customerSuppliedEncryptionEnforcementConfig?: GoogleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfig;
  /**
  * google_managed_encryption_enforcement_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#google_managed_encryption_enforcement_config GoogleStorageBucket#google_managed_encryption_enforcement_config}
  */
  readonly googleManagedEncryptionEnforcementConfig?: GoogleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfig;
}

export function googleStorageBucketEncryptionToTerraform(struct?: GoogleStorageBucketEncryptionOutputReference | GoogleStorageBucketEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_kms_key_name: cdktn.stringToTerraform(struct!.defaultKmsKeyName),
    customer_managed_encryption_enforcement_config: googleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfigToTerraform(struct!.customerManagedEncryptionEnforcementConfig),
    customer_supplied_encryption_enforcement_config: googleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfigToTerraform(struct!.customerSuppliedEncryptionEnforcementConfig),
    google_managed_encryption_enforcement_config: googleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfigToTerraform(struct!.googleManagedEncryptionEnforcementConfig),
  }
}


export function googleStorageBucketEncryptionToHclTerraform(struct?: GoogleStorageBucketEncryptionOutputReference | GoogleStorageBucketEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.defaultKmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_managed_encryption_enforcement_config: {
      value: googleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfigToHclTerraform(struct!.customerManagedEncryptionEnforcementConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfigList",
    },
    customer_supplied_encryption_enforcement_config: {
      value: googleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfigToHclTerraform(struct!.customerSuppliedEncryptionEnforcementConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfigList",
    },
    google_managed_encryption_enforcement_config: {
      value: googleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfigToHclTerraform(struct!.googleManagedEncryptionEnforcementConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultKmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultKmsKeyName = this._defaultKmsKeyName;
    }
    if (this._customerManagedEncryptionEnforcementConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerManagedEncryptionEnforcementConfig = this._customerManagedEncryptionEnforcementConfig?.internalValue;
    }
    if (this._customerSuppliedEncryptionEnforcementConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerSuppliedEncryptionEnforcementConfig = this._customerSuppliedEncryptionEnforcementConfig?.internalValue;
    }
    if (this._googleManagedEncryptionEnforcementConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleManagedEncryptionEnforcementConfig = this._googleManagedEncryptionEnforcementConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultKmsKeyName = undefined;
      this._customerManagedEncryptionEnforcementConfig.internalValue = undefined;
      this._customerSuppliedEncryptionEnforcementConfig.internalValue = undefined;
      this._googleManagedEncryptionEnforcementConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultKmsKeyName = value.defaultKmsKeyName;
      this._customerManagedEncryptionEnforcementConfig.internalValue = value.customerManagedEncryptionEnforcementConfig;
      this._customerSuppliedEncryptionEnforcementConfig.internalValue = value.customerSuppliedEncryptionEnforcementConfig;
      this._googleManagedEncryptionEnforcementConfig.internalValue = value.googleManagedEncryptionEnforcementConfig;
    }
  }

  // default_kms_key_name - computed: false, optional: true, required: false
  private _defaultKmsKeyName?: string; 
  public get defaultKmsKeyName() {
    return this.getStringAttribute('default_kms_key_name');
  }
  public set defaultKmsKeyName(value: string) {
    this._defaultKmsKeyName = value;
  }
  public resetDefaultKmsKeyName() {
    this._defaultKmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultKmsKeyNameInput() {
    return this._defaultKmsKeyName;
  }

  // customer_managed_encryption_enforcement_config - computed: false, optional: true, required: false
  private _customerManagedEncryptionEnforcementConfig = new GoogleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfigOutputReference(this, "customer_managed_encryption_enforcement_config");
  public get customerManagedEncryptionEnforcementConfig() {
    return this._customerManagedEncryptionEnforcementConfig;
  }
  public putCustomerManagedEncryptionEnforcementConfig(value: GoogleStorageBucketEncryptionCustomerManagedEncryptionEnforcementConfig) {
    this._customerManagedEncryptionEnforcementConfig.internalValue = value;
  }
  public resetCustomerManagedEncryptionEnforcementConfig() {
    this._customerManagedEncryptionEnforcementConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedEncryptionEnforcementConfigInput() {
    return this._customerManagedEncryptionEnforcementConfig.internalValue;
  }

  // customer_supplied_encryption_enforcement_config - computed: false, optional: true, required: false
  private _customerSuppliedEncryptionEnforcementConfig = new GoogleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfigOutputReference(this, "customer_supplied_encryption_enforcement_config");
  public get customerSuppliedEncryptionEnforcementConfig() {
    return this._customerSuppliedEncryptionEnforcementConfig;
  }
  public putCustomerSuppliedEncryptionEnforcementConfig(value: GoogleStorageBucketEncryptionCustomerSuppliedEncryptionEnforcementConfig) {
    this._customerSuppliedEncryptionEnforcementConfig.internalValue = value;
  }
  public resetCustomerSuppliedEncryptionEnforcementConfig() {
    this._customerSuppliedEncryptionEnforcementConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerSuppliedEncryptionEnforcementConfigInput() {
    return this._customerSuppliedEncryptionEnforcementConfig.internalValue;
  }

  // google_managed_encryption_enforcement_config - computed: false, optional: true, required: false
  private _googleManagedEncryptionEnforcementConfig = new GoogleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfigOutputReference(this, "google_managed_encryption_enforcement_config");
  public get googleManagedEncryptionEnforcementConfig() {
    return this._googleManagedEncryptionEnforcementConfig;
  }
  public putGoogleManagedEncryptionEnforcementConfig(value: GoogleStorageBucketEncryptionGoogleManagedEncryptionEnforcementConfig) {
    this._googleManagedEncryptionEnforcementConfig.internalValue = value;
  }
  public resetGoogleManagedEncryptionEnforcementConfig() {
    this._googleManagedEncryptionEnforcementConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleManagedEncryptionEnforcementConfigInput() {
    return this._googleManagedEncryptionEnforcementConfig.internalValue;
  }
}
export interface GoogleStorageBucketHierarchicalNamespace {
  /**
  * Set this field true to organize bucket with logical file system structure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleStorageBucketHierarchicalNamespaceToTerraform(struct?: GoogleStorageBucketHierarchicalNamespaceOutputReference | GoogleStorageBucketHierarchicalNamespace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleStorageBucketHierarchicalNamespaceToHclTerraform(struct?: GoogleStorageBucketHierarchicalNamespaceOutputReference | GoogleStorageBucketHierarchicalNamespace): any {
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

export class GoogleStorageBucketHierarchicalNamespaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketHierarchicalNamespace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketHierarchicalNamespace | undefined) {
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
export interface GoogleStorageBucketIpFilterPublicNetworkSource {
  /**
  * The list of public IPv4, IPv6 cidr ranges that are allowed to access the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#allowed_ip_cidr_ranges GoogleStorageBucket#allowed_ip_cidr_ranges}
  */
  readonly allowedIpCidrRanges: string[];
}

export function googleStorageBucketIpFilterPublicNetworkSourceToTerraform(struct?: GoogleStorageBucketIpFilterPublicNetworkSourceOutputReference | GoogleStorageBucketIpFilterPublicNetworkSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ip_cidr_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedIpCidrRanges),
  }
}


export function googleStorageBucketIpFilterPublicNetworkSourceToHclTerraform(struct?: GoogleStorageBucketIpFilterPublicNetworkSourceOutputReference | GoogleStorageBucketIpFilterPublicNetworkSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ip_cidr_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedIpCidrRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketIpFilterPublicNetworkSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketIpFilterPublicNetworkSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIpCidrRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIpCidrRanges = this._allowedIpCidrRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketIpFilterPublicNetworkSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedIpCidrRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedIpCidrRanges = value.allowedIpCidrRanges;
    }
  }

  // allowed_ip_cidr_ranges - computed: false, optional: false, required: true
  private _allowedIpCidrRanges?: string[]; 
  public get allowedIpCidrRanges() {
    return this.getListAttribute('allowed_ip_cidr_ranges');
  }
  public set allowedIpCidrRanges(value: string[]) {
    this._allowedIpCidrRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpCidrRangesInput() {
    return this._allowedIpCidrRanges;
  }
}
export interface GoogleStorageBucketIpFilterVpcNetworkSources {
  /**
  * The list of public or private IPv4 and IPv6 CIDR ranges that can access the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#allowed_ip_cidr_ranges GoogleStorageBucket#allowed_ip_cidr_ranges}
  */
  readonly allowedIpCidrRanges: string[];
  /**
  * Name of the network. Format: projects/{PROJECT_ID}/global/networks/{NETWORK_NAME}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#network GoogleStorageBucket#network}
  */
  readonly network: string;
}

export function googleStorageBucketIpFilterVpcNetworkSourcesToTerraform(struct?: GoogleStorageBucketIpFilterVpcNetworkSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ip_cidr_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedIpCidrRanges),
    network: cdktn.stringToTerraform(struct!.network),
  }
}


export function googleStorageBucketIpFilterVpcNetworkSourcesToHclTerraform(struct?: GoogleStorageBucketIpFilterVpcNetworkSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ip_cidr_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedIpCidrRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleStorageBucketIpFilterVpcNetworkSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIpCidrRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIpCidrRanges = this._allowedIpCidrRanges;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketIpFilterVpcNetworkSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedIpCidrRanges = undefined;
      this._network = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedIpCidrRanges = value.allowedIpCidrRanges;
      this._network = value.network;
    }
  }

  // allowed_ip_cidr_ranges - computed: false, optional: false, required: true
  private _allowedIpCidrRanges?: string[]; 
  public get allowedIpCidrRanges() {
    return this.getListAttribute('allowed_ip_cidr_ranges');
  }
  public set allowedIpCidrRanges(value: string[]) {
    this._allowedIpCidrRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpCidrRangesInput() {
    return this._allowedIpCidrRanges;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}

export class GoogleStorageBucketIpFilterVpcNetworkSourcesList extends cdktn.ComplexList {
  public internalValue? : GoogleStorageBucketIpFilterVpcNetworkSources[] | cdktn.IResolvable

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
  public get(index: number): GoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference {
    return new GoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleStorageBucketIpFilter {
  /**
  * Whether to allow all service agents to access the bucket regardless of the IP filter configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#allow_all_service_agent_access GoogleStorageBucket#allow_all_service_agent_access}
  */
  readonly allowAllServiceAgentAccess?: boolean | cdktn.IResolvable;
  /**
  * Whether to allow cross-org VPCs in the bucket's IP filter configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#allow_cross_org_vpcs GoogleStorageBucket#allow_cross_org_vpcs}
  */
  readonly allowCrossOrgVpcs?: boolean | cdktn.IResolvable;
  /**
  * The mode of the IP filter. Valid values are 'Enabled' and 'Disabled'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#mode GoogleStorageBucket#mode}
  */
  readonly mode: string;
  /**
  * public_network_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#public_network_source GoogleStorageBucket#public_network_source}
  */
  readonly publicNetworkSource?: GoogleStorageBucketIpFilterPublicNetworkSource;
  /**
  * vpc_network_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#vpc_network_sources GoogleStorageBucket#vpc_network_sources}
  */
  readonly vpcNetworkSources?: GoogleStorageBucketIpFilterVpcNetworkSources[] | cdktn.IResolvable;
}

export function googleStorageBucketIpFilterToTerraform(struct?: GoogleStorageBucketIpFilterOutputReference | GoogleStorageBucketIpFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all_service_agent_access: cdktn.booleanToTerraform(struct!.allowAllServiceAgentAccess),
    allow_cross_org_vpcs: cdktn.booleanToTerraform(struct!.allowCrossOrgVpcs),
    mode: cdktn.stringToTerraform(struct!.mode),
    public_network_source: googleStorageBucketIpFilterPublicNetworkSourceToTerraform(struct!.publicNetworkSource),
    vpc_network_sources: cdktn.listMapper(googleStorageBucketIpFilterVpcNetworkSourcesToTerraform, true)(struct!.vpcNetworkSources),
  }
}


export function googleStorageBucketIpFilterToHclTerraform(struct?: GoogleStorageBucketIpFilterOutputReference | GoogleStorageBucketIpFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all_service_agent_access: {
      value: cdktn.booleanToHclTerraform(struct!.allowAllServiceAgentAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_cross_org_vpcs: {
      value: cdktn.booleanToHclTerraform(struct!.allowCrossOrgVpcs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_network_source: {
      value: googleStorageBucketIpFilterPublicNetworkSourceToHclTerraform(struct!.publicNetworkSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleStorageBucketIpFilterPublicNetworkSourceList",
    },
    vpc_network_sources: {
      value: cdktn.listMapperHcl(googleStorageBucketIpFilterVpcNetworkSourcesToHclTerraform, true)(struct!.vpcNetworkSources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleStorageBucketIpFilterVpcNetworkSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketIpFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketIpFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAllServiceAgentAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllServiceAgentAccess = this._allowAllServiceAgentAccess;
    }
    if (this._allowCrossOrgVpcs !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCrossOrgVpcs = this._allowCrossOrgVpcs;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._publicNetworkSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetworkSource = this._publicNetworkSource?.internalValue;
    }
    if (this._vpcNetworkSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcNetworkSources = this._vpcNetworkSources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketIpFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAllServiceAgentAccess = undefined;
      this._allowCrossOrgVpcs = undefined;
      this._mode = undefined;
      this._publicNetworkSource.internalValue = undefined;
      this._vpcNetworkSources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAllServiceAgentAccess = value.allowAllServiceAgentAccess;
      this._allowCrossOrgVpcs = value.allowCrossOrgVpcs;
      this._mode = value.mode;
      this._publicNetworkSource.internalValue = value.publicNetworkSource;
      this._vpcNetworkSources.internalValue = value.vpcNetworkSources;
    }
  }

  // allow_all_service_agent_access - computed: false, optional: true, required: false
  private _allowAllServiceAgentAccess?: boolean | cdktn.IResolvable; 
  public get allowAllServiceAgentAccess() {
    return this.getBooleanAttribute('allow_all_service_agent_access');
  }
  public set allowAllServiceAgentAccess(value: boolean | cdktn.IResolvable) {
    this._allowAllServiceAgentAccess = value;
  }
  public resetAllowAllServiceAgentAccess() {
    this._allowAllServiceAgentAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllServiceAgentAccessInput() {
    return this._allowAllServiceAgentAccess;
  }

  // allow_cross_org_vpcs - computed: false, optional: true, required: false
  private _allowCrossOrgVpcs?: boolean | cdktn.IResolvable; 
  public get allowCrossOrgVpcs() {
    return this.getBooleanAttribute('allow_cross_org_vpcs');
  }
  public set allowCrossOrgVpcs(value: boolean | cdktn.IResolvable) {
    this._allowCrossOrgVpcs = value;
  }
  public resetAllowCrossOrgVpcs() {
    this._allowCrossOrgVpcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCrossOrgVpcsInput() {
    return this._allowCrossOrgVpcs;
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

  // public_network_source - computed: false, optional: true, required: false
  private _publicNetworkSource = new GoogleStorageBucketIpFilterPublicNetworkSourceOutputReference(this, "public_network_source");
  public get publicNetworkSource() {
    return this._publicNetworkSource;
  }
  public putPublicNetworkSource(value: GoogleStorageBucketIpFilterPublicNetworkSource) {
    this._publicNetworkSource.internalValue = value;
  }
  public resetPublicNetworkSource() {
    this._publicNetworkSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkSourceInput() {
    return this._publicNetworkSource.internalValue;
  }

  // vpc_network_sources - computed: false, optional: true, required: false
  private _vpcNetworkSources = new GoogleStorageBucketIpFilterVpcNetworkSourcesList(this, "vpc_network_sources", false);
  public get vpcNetworkSources() {
    return this._vpcNetworkSources;
  }
  public putVpcNetworkSources(value: GoogleStorageBucketIpFilterVpcNetworkSources[] | cdktn.IResolvable) {
    this._vpcNetworkSources.internalValue = value;
  }
  public resetVpcNetworkSources() {
    this._vpcNetworkSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNetworkSourcesInput() {
    return this._vpcNetworkSources.internalValue;
  }
}
export interface GoogleStorageBucketLifecycleRuleAction {
  /**
  * The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#storage_class GoogleStorageBucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#type GoogleStorageBucket#type}
  */
  readonly type: string;
}

export function googleStorageBucketLifecycleRuleActionToTerraform(struct?: GoogleStorageBucketLifecycleRuleActionOutputReference | GoogleStorageBucketLifecycleRuleAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function googleStorageBucketLifecycleRuleActionToHclTerraform(struct?: GoogleStorageBucketLifecycleRuleActionOutputReference | GoogleStorageBucketLifecycleRuleAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
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

export class GoogleStorageBucketLifecycleRuleActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketLifecycleRuleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketLifecycleRuleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageClass = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageClass = value.storageClass;
      this._type = value.type;
    }
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
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
export interface GoogleStorageBucketLifecycleRuleCondition {
  /**
  * Minimum age of an object in days to satisfy this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#age GoogleStorageBucket#age}
  */
  readonly age?: number;
  /**
  * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#created_before GoogleStorageBucket#created_before}
  */
  readonly createdBefore?: string;
  /**
  * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#custom_time_before GoogleStorageBucket#custom_time_before}
  */
  readonly customTimeBefore?: string;
  /**
  * Number of days elapsed since the user-specified timestamp set on an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#days_since_custom_time GoogleStorageBucket#days_since_custom_time}
  */
  readonly daysSinceCustomTime?: number;
  /**
  * Number of days elapsed since the noncurrent timestamp of an object. This
  * 										condition is relevant only for versioned objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#days_since_noncurrent_time GoogleStorageBucket#days_since_noncurrent_time}
  */
  readonly daysSinceNoncurrentTime?: number;
  /**
  * One or more matching name prefixes to satisfy this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#matches_prefix GoogleStorageBucket#matches_prefix}
  */
  readonly matchesPrefix?: string[];
  /**
  * Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#matches_storage_class GoogleStorageBucket#matches_storage_class}
  */
  readonly matchesStorageClass?: string[];
  /**
  * One or more matching name suffixes to satisfy this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#matches_suffix GoogleStorageBucket#matches_suffix}
  */
  readonly matchesSuffix?: string[];
  /**
  * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#noncurrent_time_before GoogleStorageBucket#noncurrent_time_before}
  */
  readonly noncurrentTimeBefore?: string;
  /**
  * Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#num_newer_versions GoogleStorageBucket#num_newer_versions}
  */
  readonly numNewerVersions?: number;
  /**
  * While set true, age value will be sent in the request even for zero value of the field. This field is only useful for setting 0 value to the age field. It can be used alone or together with age.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#send_age_if_zero GoogleStorageBucket#send_age_if_zero}
  */
  readonly sendAgeIfZero?: boolean | cdktn.IResolvable;
  /**
  * While set true, days_since_custom_time value will be sent in the request even for zero value of the field. This field is only useful for setting 0 value to the days_since_custom_time field. It can be used alone or together with days_since_custom_time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#send_days_since_custom_time_if_zero GoogleStorageBucket#send_days_since_custom_time_if_zero}
  */
  readonly sendDaysSinceCustomTimeIfZero?: boolean | cdktn.IResolvable;
  /**
  * While set true, days_since_noncurrent_time value will be sent in the request even for zero value of the field. This field is only useful for setting 0 value to the days_since_noncurrent_time field. It can be used alone or together with days_since_noncurrent_time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#send_days_since_noncurrent_time_if_zero GoogleStorageBucket#send_days_since_noncurrent_time_if_zero}
  */
  readonly sendDaysSinceNoncurrentTimeIfZero?: boolean | cdktn.IResolvable;
  /**
  * While set true, num_newer_versions value will be sent in the request even for zero value of the field. This field is only useful for setting 0 value to the num_newer_versions field. It can be used alone or together with num_newer_versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#send_num_newer_versions_if_zero GoogleStorageBucket#send_num_newer_versions_if_zero}
  */
  readonly sendNumNewerVersionsIfZero?: boolean | cdktn.IResolvable;
  /**
  * Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#with_state GoogleStorageBucket#with_state}
  */
  readonly withState?: string;
}

export function googleStorageBucketLifecycleRuleConditionToTerraform(struct?: GoogleStorageBucketLifecycleRuleConditionOutputReference | GoogleStorageBucketLifecycleRuleCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktn.numberToTerraform(struct!.age),
    created_before: cdktn.stringToTerraform(struct!.createdBefore),
    custom_time_before: cdktn.stringToTerraform(struct!.customTimeBefore),
    days_since_custom_time: cdktn.numberToTerraform(struct!.daysSinceCustomTime),
    days_since_noncurrent_time: cdktn.numberToTerraform(struct!.daysSinceNoncurrentTime),
    matches_prefix: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchesPrefix),
    matches_storage_class: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchesStorageClass),
    matches_suffix: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchesSuffix),
    noncurrent_time_before: cdktn.stringToTerraform(struct!.noncurrentTimeBefore),
    num_newer_versions: cdktn.numberToTerraform(struct!.numNewerVersions),
    send_age_if_zero: cdktn.booleanToTerraform(struct!.sendAgeIfZero),
    send_days_since_custom_time_if_zero: cdktn.booleanToTerraform(struct!.sendDaysSinceCustomTimeIfZero),
    send_days_since_noncurrent_time_if_zero: cdktn.booleanToTerraform(struct!.sendDaysSinceNoncurrentTimeIfZero),
    send_num_newer_versions_if_zero: cdktn.booleanToTerraform(struct!.sendNumNewerVersionsIfZero),
    with_state: cdktn.stringToTerraform(struct!.withState),
  }
}


export function googleStorageBucketLifecycleRuleConditionToHclTerraform(struct?: GoogleStorageBucketLifecycleRuleConditionOutputReference | GoogleStorageBucketLifecycleRuleCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktn.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    created_before: {
      value: cdktn.stringToHclTerraform(struct!.createdBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_time_before: {
      value: cdktn.stringToHclTerraform(struct!.customTimeBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days_since_custom_time: {
      value: cdktn.numberToHclTerraform(struct!.daysSinceCustomTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    days_since_noncurrent_time: {
      value: cdktn.numberToHclTerraform(struct!.daysSinceNoncurrentTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    matches_prefix: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchesPrefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    matches_storage_class: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchesStorageClass),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    matches_suffix: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchesSuffix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    noncurrent_time_before: {
      value: cdktn.stringToHclTerraform(struct!.noncurrentTimeBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_newer_versions: {
      value: cdktn.numberToHclTerraform(struct!.numNewerVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_age_if_zero: {
      value: cdktn.booleanToHclTerraform(struct!.sendAgeIfZero),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_days_since_custom_time_if_zero: {
      value: cdktn.booleanToHclTerraform(struct!.sendDaysSinceCustomTimeIfZero),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_days_since_noncurrent_time_if_zero: {
      value: cdktn.booleanToHclTerraform(struct!.sendDaysSinceNoncurrentTimeIfZero),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_num_newer_versions_if_zero: {
      value: cdktn.booleanToHclTerraform(struct!.sendNumNewerVersionsIfZero),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    with_state: {
      value: cdktn.stringToHclTerraform(struct!.withState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketLifecycleRuleConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketLifecycleRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._createdBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBefore = this._createdBefore;
    }
    if (this._customTimeBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTimeBefore = this._customTimeBefore;
    }
    if (this._daysSinceCustomTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysSinceCustomTime = this._daysSinceCustomTime;
    }
    if (this._daysSinceNoncurrentTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysSinceNoncurrentTime = this._daysSinceNoncurrentTime;
    }
    if (this._matchesPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchesPrefix = this._matchesPrefix;
    }
    if (this._matchesStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchesStorageClass = this._matchesStorageClass;
    }
    if (this._matchesSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchesSuffix = this._matchesSuffix;
    }
    if (this._noncurrentTimeBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentTimeBefore = this._noncurrentTimeBefore;
    }
    if (this._numNewerVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numNewerVersions = this._numNewerVersions;
    }
    if (this._sendAgeIfZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendAgeIfZero = this._sendAgeIfZero;
    }
    if (this._sendDaysSinceCustomTimeIfZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendDaysSinceCustomTimeIfZero = this._sendDaysSinceCustomTimeIfZero;
    }
    if (this._sendDaysSinceNoncurrentTimeIfZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendDaysSinceNoncurrentTimeIfZero = this._sendDaysSinceNoncurrentTimeIfZero;
    }
    if (this._sendNumNewerVersionsIfZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendNumNewerVersionsIfZero = this._sendNumNewerVersionsIfZero;
    }
    if (this._withState !== undefined) {
      hasAnyValues = true;
      internalValueResult.withState = this._withState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketLifecycleRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._age = undefined;
      this._createdBefore = undefined;
      this._customTimeBefore = undefined;
      this._daysSinceCustomTime = undefined;
      this._daysSinceNoncurrentTime = undefined;
      this._matchesPrefix = undefined;
      this._matchesStorageClass = undefined;
      this._matchesSuffix = undefined;
      this._noncurrentTimeBefore = undefined;
      this._numNewerVersions = undefined;
      this._sendAgeIfZero = undefined;
      this._sendDaysSinceCustomTimeIfZero = undefined;
      this._sendDaysSinceNoncurrentTimeIfZero = undefined;
      this._sendNumNewerVersionsIfZero = undefined;
      this._withState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._age = value.age;
      this._createdBefore = value.createdBefore;
      this._customTimeBefore = value.customTimeBefore;
      this._daysSinceCustomTime = value.daysSinceCustomTime;
      this._daysSinceNoncurrentTime = value.daysSinceNoncurrentTime;
      this._matchesPrefix = value.matchesPrefix;
      this._matchesStorageClass = value.matchesStorageClass;
      this._matchesSuffix = value.matchesSuffix;
      this._noncurrentTimeBefore = value.noncurrentTimeBefore;
      this._numNewerVersions = value.numNewerVersions;
      this._sendAgeIfZero = value.sendAgeIfZero;
      this._sendDaysSinceCustomTimeIfZero = value.sendDaysSinceCustomTimeIfZero;
      this._sendDaysSinceNoncurrentTimeIfZero = value.sendDaysSinceNoncurrentTimeIfZero;
      this._sendNumNewerVersionsIfZero = value.sendNumNewerVersionsIfZero;
      this._withState = value.withState;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // created_before - computed: false, optional: true, required: false
  private _createdBefore?: string; 
  public get createdBefore() {
    return this.getStringAttribute('created_before');
  }
  public set createdBefore(value: string) {
    this._createdBefore = value;
  }
  public resetCreatedBefore() {
    this._createdBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdBeforeInput() {
    return this._createdBefore;
  }

  // custom_time_before - computed: false, optional: true, required: false
  private _customTimeBefore?: string; 
  public get customTimeBefore() {
    return this.getStringAttribute('custom_time_before');
  }
  public set customTimeBefore(value: string) {
    this._customTimeBefore = value;
  }
  public resetCustomTimeBefore() {
    this._customTimeBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTimeBeforeInput() {
    return this._customTimeBefore;
  }

  // days_since_custom_time - computed: false, optional: true, required: false
  private _daysSinceCustomTime?: number; 
  public get daysSinceCustomTime() {
    return this.getNumberAttribute('days_since_custom_time');
  }
  public set daysSinceCustomTime(value: number) {
    this._daysSinceCustomTime = value;
  }
  public resetDaysSinceCustomTime() {
    this._daysSinceCustomTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysSinceCustomTimeInput() {
    return this._daysSinceCustomTime;
  }

  // days_since_noncurrent_time - computed: false, optional: true, required: false
  private _daysSinceNoncurrentTime?: number; 
  public get daysSinceNoncurrentTime() {
    return this.getNumberAttribute('days_since_noncurrent_time');
  }
  public set daysSinceNoncurrentTime(value: number) {
    this._daysSinceNoncurrentTime = value;
  }
  public resetDaysSinceNoncurrentTime() {
    this._daysSinceNoncurrentTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysSinceNoncurrentTimeInput() {
    return this._daysSinceNoncurrentTime;
  }

  // matches_prefix - computed: false, optional: true, required: false
  private _matchesPrefix?: string[]; 
  public get matchesPrefix() {
    return this.getListAttribute('matches_prefix');
  }
  public set matchesPrefix(value: string[]) {
    this._matchesPrefix = value;
  }
  public resetMatchesPrefix() {
    this._matchesPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesPrefixInput() {
    return this._matchesPrefix;
  }

  // matches_storage_class - computed: false, optional: true, required: false
  private _matchesStorageClass?: string[]; 
  public get matchesStorageClass() {
    return this.getListAttribute('matches_storage_class');
  }
  public set matchesStorageClass(value: string[]) {
    this._matchesStorageClass = value;
  }
  public resetMatchesStorageClass() {
    this._matchesStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesStorageClassInput() {
    return this._matchesStorageClass;
  }

  // matches_suffix - computed: false, optional: true, required: false
  private _matchesSuffix?: string[]; 
  public get matchesSuffix() {
    return this.getListAttribute('matches_suffix');
  }
  public set matchesSuffix(value: string[]) {
    this._matchesSuffix = value;
  }
  public resetMatchesSuffix() {
    this._matchesSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesSuffixInput() {
    return this._matchesSuffix;
  }

  // noncurrent_time_before - computed: false, optional: true, required: false
  private _noncurrentTimeBefore?: string; 
  public get noncurrentTimeBefore() {
    return this.getStringAttribute('noncurrent_time_before');
  }
  public set noncurrentTimeBefore(value: string) {
    this._noncurrentTimeBefore = value;
  }
  public resetNoncurrentTimeBefore() {
    this._noncurrentTimeBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentTimeBeforeInput() {
    return this._noncurrentTimeBefore;
  }

  // num_newer_versions - computed: false, optional: true, required: false
  private _numNewerVersions?: number; 
  public get numNewerVersions() {
    return this.getNumberAttribute('num_newer_versions');
  }
  public set numNewerVersions(value: number) {
    this._numNewerVersions = value;
  }
  public resetNumNewerVersions() {
    this._numNewerVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numNewerVersionsInput() {
    return this._numNewerVersions;
  }

  // send_age_if_zero - computed: false, optional: true, required: false
  private _sendAgeIfZero?: boolean | cdktn.IResolvable; 
  public get sendAgeIfZero() {
    return this.getBooleanAttribute('send_age_if_zero');
  }
  public set sendAgeIfZero(value: boolean | cdktn.IResolvable) {
    this._sendAgeIfZero = value;
  }
  public resetSendAgeIfZero() {
    this._sendAgeIfZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAgeIfZeroInput() {
    return this._sendAgeIfZero;
  }

  // send_days_since_custom_time_if_zero - computed: false, optional: true, required: false
  private _sendDaysSinceCustomTimeIfZero?: boolean | cdktn.IResolvable; 
  public get sendDaysSinceCustomTimeIfZero() {
    return this.getBooleanAttribute('send_days_since_custom_time_if_zero');
  }
  public set sendDaysSinceCustomTimeIfZero(value: boolean | cdktn.IResolvable) {
    this._sendDaysSinceCustomTimeIfZero = value;
  }
  public resetSendDaysSinceCustomTimeIfZero() {
    this._sendDaysSinceCustomTimeIfZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDaysSinceCustomTimeIfZeroInput() {
    return this._sendDaysSinceCustomTimeIfZero;
  }

  // send_days_since_noncurrent_time_if_zero - computed: false, optional: true, required: false
  private _sendDaysSinceNoncurrentTimeIfZero?: boolean | cdktn.IResolvable; 
  public get sendDaysSinceNoncurrentTimeIfZero() {
    return this.getBooleanAttribute('send_days_since_noncurrent_time_if_zero');
  }
  public set sendDaysSinceNoncurrentTimeIfZero(value: boolean | cdktn.IResolvable) {
    this._sendDaysSinceNoncurrentTimeIfZero = value;
  }
  public resetSendDaysSinceNoncurrentTimeIfZero() {
    this._sendDaysSinceNoncurrentTimeIfZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDaysSinceNoncurrentTimeIfZeroInput() {
    return this._sendDaysSinceNoncurrentTimeIfZero;
  }

  // send_num_newer_versions_if_zero - computed: false, optional: true, required: false
  private _sendNumNewerVersionsIfZero?: boolean | cdktn.IResolvable; 
  public get sendNumNewerVersionsIfZero() {
    return this.getBooleanAttribute('send_num_newer_versions_if_zero');
  }
  public set sendNumNewerVersionsIfZero(value: boolean | cdktn.IResolvable) {
    this._sendNumNewerVersionsIfZero = value;
  }
  public resetSendNumNewerVersionsIfZero() {
    this._sendNumNewerVersionsIfZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendNumNewerVersionsIfZeroInput() {
    return this._sendNumNewerVersionsIfZero;
  }

  // with_state - computed: true, optional: true, required: false
  private _withState?: string; 
  public get withState() {
    return this.getStringAttribute('with_state');
  }
  public set withState(value: string) {
    this._withState = value;
  }
  public resetWithState() {
    this._withState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withStateInput() {
    return this._withState;
  }
}
export interface GoogleStorageBucketLifecycleRule {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#action GoogleStorageBucket#action}
  */
  readonly action: GoogleStorageBucketLifecycleRuleAction;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#condition GoogleStorageBucket#condition}
  */
  readonly condition: GoogleStorageBucketLifecycleRuleCondition;
}

export function googleStorageBucketLifecycleRuleToTerraform(struct?: GoogleStorageBucketLifecycleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: googleStorageBucketLifecycleRuleActionToTerraform(struct!.action),
    condition: googleStorageBucketLifecycleRuleConditionToTerraform(struct!.condition),
  }
}


export function googleStorageBucketLifecycleRuleToHclTerraform(struct?: GoogleStorageBucketLifecycleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: googleStorageBucketLifecycleRuleActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleStorageBucketLifecycleRuleActionList",
    },
    condition: {
      value: googleStorageBucketLifecycleRuleConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleStorageBucketLifecycleRuleConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketLifecycleRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleStorageBucketLifecycleRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketLifecycleRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._condition.internalValue = value.condition;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new GoogleStorageBucketLifecycleRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: GoogleStorageBucketLifecycleRuleAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new GoogleStorageBucketLifecycleRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: GoogleStorageBucketLifecycleRuleCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class GoogleStorageBucketLifecycleRuleList extends cdktn.ComplexList {
  public internalValue? : GoogleStorageBucketLifecycleRule[] | cdktn.IResolvable

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
  public get(index: number): GoogleStorageBucketLifecycleRuleOutputReference {
    return new GoogleStorageBucketLifecycleRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleStorageBucketLogging {
  /**
  * The bucket that will receive log objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#log_bucket GoogleStorageBucket#log_bucket}
  */
  readonly logBucket: string;
  /**
  * The object prefix for log objects. If it's not provided, by default Google Cloud Storage sets this to this bucket's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#log_object_prefix GoogleStorageBucket#log_object_prefix}
  */
  readonly logObjectPrefix?: string;
}

export function googleStorageBucketLoggingToTerraform(struct?: GoogleStorageBucketLoggingOutputReference | GoogleStorageBucketLogging): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_bucket: cdktn.stringToTerraform(struct!.logBucket),
    log_object_prefix: cdktn.stringToTerraform(struct!.logObjectPrefix),
  }
}


export function googleStorageBucketLoggingToHclTerraform(struct?: GoogleStorageBucketLoggingOutputReference | GoogleStorageBucketLogging): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_bucket: {
      value: cdktn.stringToHclTerraform(struct!.logBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_object_prefix: {
      value: cdktn.stringToHclTerraform(struct!.logObjectPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketLoggingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBucket = this._logBucket;
    }
    if (this._logObjectPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logObjectPrefix = this._logObjectPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logBucket = undefined;
      this._logObjectPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logBucket = value.logBucket;
      this._logObjectPrefix = value.logObjectPrefix;
    }
  }

  // log_bucket - computed: false, optional: false, required: true
  private _logBucket?: string; 
  public get logBucket() {
    return this.getStringAttribute('log_bucket');
  }
  public set logBucket(value: string) {
    this._logBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logBucketInput() {
    return this._logBucket;
  }

  // log_object_prefix - computed: true, optional: true, required: false
  private _logObjectPrefix?: string; 
  public get logObjectPrefix() {
    return this.getStringAttribute('log_object_prefix');
  }
  public set logObjectPrefix(value: string) {
    this._logObjectPrefix = value;
  }
  public resetLogObjectPrefix() {
    this._logObjectPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logObjectPrefixInput() {
    return this._logObjectPrefix;
  }
}
export interface GoogleStorageBucketRetentionPolicy {
  /**
  * If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.  Caution: Locking a bucket is an irreversible action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#is_locked GoogleStorageBucket#is_locked}
  */
  readonly isLocked?: boolean | cdktn.IResolvable;
  /**
  * The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. The value must be less than 3,155,760,000 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#retention_period GoogleStorageBucket#retention_period}
  */
  readonly retentionPeriod: string;
}

export function googleStorageBucketRetentionPolicyToTerraform(struct?: GoogleStorageBucketRetentionPolicyOutputReference | GoogleStorageBucketRetentionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_locked: cdktn.booleanToTerraform(struct!.isLocked),
    retention_period: cdktn.stringToTerraform(struct!.retentionPeriod),
  }
}


export function googleStorageBucketRetentionPolicyToHclTerraform(struct?: GoogleStorageBucketRetentionPolicyOutputReference | GoogleStorageBucketRetentionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_locked: {
      value: cdktn.booleanToHclTerraform(struct!.isLocked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_period: {
      value: cdktn.stringToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketRetentionPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isLocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLocked = this._isLocked;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isLocked = undefined;
      this._retentionPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isLocked = value.isLocked;
      this._retentionPeriod = value.retentionPeriod;
    }
  }

  // is_locked - computed: false, optional: true, required: false
  private _isLocked?: boolean | cdktn.IResolvable; 
  public get isLocked() {
    return this.getBooleanAttribute('is_locked');
  }
  public set isLocked(value: boolean | cdktn.IResolvable) {
    this._isLocked = value;
  }
  public resetIsLocked() {
    this._isLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockedInput() {
    return this._isLocked;
  }

  // retention_period - computed: false, optional: false, required: true
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }
}
export interface GoogleStorageBucketSoftDeletePolicy {
  /**
  * The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. Default value is 604800.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#retention_duration_seconds GoogleStorageBucket#retention_duration_seconds}
  */
  readonly retentionDurationSeconds?: number;
}

export function googleStorageBucketSoftDeletePolicyToTerraform(struct?: GoogleStorageBucketSoftDeletePolicyOutputReference | GoogleStorageBucketSoftDeletePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_duration_seconds: cdktn.numberToTerraform(struct!.retentionDurationSeconds),
  }
}


export function googleStorageBucketSoftDeletePolicyToHclTerraform(struct?: GoogleStorageBucketSoftDeletePolicyOutputReference | GoogleStorageBucketSoftDeletePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.retentionDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketSoftDeletePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketSoftDeletePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDurationSeconds = this._retentionDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketSoftDeletePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionDurationSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionDurationSeconds = value.retentionDurationSeconds;
    }
  }

  // effective_time - computed: true, optional: false, required: false
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }

  // retention_duration_seconds - computed: false, optional: true, required: false
  private _retentionDurationSeconds?: number; 
  public get retentionDurationSeconds() {
    return this.getNumberAttribute('retention_duration_seconds');
  }
  public set retentionDurationSeconds(value: number) {
    this._retentionDurationSeconds = value;
  }
  public resetRetentionDurationSeconds() {
    this._retentionDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationSecondsInput() {
    return this._retentionDurationSeconds;
  }
}
export interface GoogleStorageBucketTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#create GoogleStorageBucket#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#read GoogleStorageBucket#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#update GoogleStorageBucket#update}
  */
  readonly update?: string;
}

export function googleStorageBucketTimeoutsToTerraform(struct?: GoogleStorageBucketTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    read: cdktn.stringToTerraform(struct!.read),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function googleStorageBucketTimeoutsToHclTerraform(struct?: GoogleStorageBucketTimeouts | cdktn.IResolvable): any {
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
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
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

export class GoogleStorageBucketTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleStorageBucketTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface GoogleStorageBucketVersioning {
  /**
  * While set to true, versioning is fully enabled for this bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleStorageBucketVersioningToTerraform(struct?: GoogleStorageBucketVersioningOutputReference | GoogleStorageBucketVersioning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleStorageBucketVersioningToHclTerraform(struct?: GoogleStorageBucketVersioningOutputReference | GoogleStorageBucketVersioning): any {
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

export class GoogleStorageBucketVersioningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketVersioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketVersioning | undefined) {
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
export interface GoogleStorageBucketWebsite {
  /**
  * Behaves as the bucket's directory index where missing objects are treated as potential directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#main_page_suffix GoogleStorageBucket#main_page_suffix}
  */
  readonly mainPageSuffix?: string;
  /**
  * The custom object to return when a requested resource is not found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#not_found_page GoogleStorageBucket#not_found_page}
  */
  readonly notFoundPage?: string;
}

export function googleStorageBucketWebsiteToTerraform(struct?: GoogleStorageBucketWebsiteOutputReference | GoogleStorageBucketWebsite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main_page_suffix: cdktn.stringToTerraform(struct!.mainPageSuffix),
    not_found_page: cdktn.stringToTerraform(struct!.notFoundPage),
  }
}


export function googleStorageBucketWebsiteToHclTerraform(struct?: GoogleStorageBucketWebsiteOutputReference | GoogleStorageBucketWebsite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main_page_suffix: {
      value: cdktn.stringToHclTerraform(struct!.mainPageSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_found_page: {
      value: cdktn.stringToHclTerraform(struct!.notFoundPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleStorageBucketWebsiteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketWebsite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mainPageSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainPageSuffix = this._mainPageSuffix;
    }
    if (this._notFoundPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.notFoundPage = this._notFoundPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketWebsite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mainPageSuffix = undefined;
      this._notFoundPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mainPageSuffix = value.mainPageSuffix;
      this._notFoundPage = value.notFoundPage;
    }
  }

  // main_page_suffix - computed: false, optional: true, required: false
  private _mainPageSuffix?: string; 
  public get mainPageSuffix() {
    return this.getStringAttribute('main_page_suffix');
  }
  public set mainPageSuffix(value: string) {
    this._mainPageSuffix = value;
  }
  public resetMainPageSuffix() {
    this._mainPageSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainPageSuffixInput() {
    return this._mainPageSuffix;
  }

  // not_found_page - computed: false, optional: true, required: false
  private _notFoundPage?: string; 
  public get notFoundPage() {
    return this.getStringAttribute('not_found_page');
  }
  public set notFoundPage(value: string) {
    this._notFoundPage = value;
  }
  public resetNotFoundPage() {
    this._notFoundPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notFoundPageInput() {
    return this._notFoundPage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket google_storage_bucket}
*/
export class GoogleStorageBucket extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleStorageBucket resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleStorageBucket to import
  * @param importFromId The id of the existing GoogleStorageBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleStorageBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_storage_bucket google_storage_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleStorageBucketConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleStorageBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_bucket',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '7.32.0',
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
    this._defaultEventBasedHold = config.defaultEventBasedHold;
    this._enableObjectRetention = config.enableObjectRetention;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._publicAccessPrevention = config.publicAccessPrevention;
    this._requesterPays = config.requesterPays;
    this._rpo = config.rpo;
    this._storageClass = config.storageClass;
    this._uniformBucketLevelAccess = config.uniformBucketLevelAccess;
    this._autoclass.internalValue = config.autoclass;
    this._cors.internalValue = config.cors;
    this._customPlacementConfig.internalValue = config.customPlacementConfig;
    this._encryption.internalValue = config.encryption;
    this._hierarchicalNamespace.internalValue = config.hierarchicalNamespace;
    this._ipFilter.internalValue = config.ipFilter;
    this._lifecycleRule.internalValue = config.lifecycleRule;
    this._logging.internalValue = config.logging;
    this._retentionPolicy.internalValue = config.retentionPolicy;
    this._softDeletePolicy.internalValue = config.softDeletePolicy;
    this._timeouts.internalValue = config.timeouts;
    this._versioning.internalValue = config.versioning;
    this._website.internalValue = config.website;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_event_based_hold - computed: false, optional: true, required: false
  private _defaultEventBasedHold?: boolean | cdktn.IResolvable; 
  public get defaultEventBasedHold() {
    return this.getBooleanAttribute('default_event_based_hold');
  }
  public set defaultEventBasedHold(value: boolean | cdktn.IResolvable) {
    this._defaultEventBasedHold = value;
  }
  public resetDefaultEventBasedHold() {
    this._defaultEventBasedHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEventBasedHoldInput() {
    return this._defaultEventBasedHold;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // enable_object_retention - computed: false, optional: true, required: false
  private _enableObjectRetention?: boolean | cdktn.IResolvable; 
  public get enableObjectRetention() {
    return this.getBooleanAttribute('enable_object_retention');
  }
  public set enableObjectRetention(value: boolean | cdktn.IResolvable) {
    this._enableObjectRetention = value;
  }
  public resetEnableObjectRetention() {
    this._enableObjectRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableObjectRetentionInput() {
    return this._enableObjectRetention;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktn.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktn.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // labels - computed: false, optional: true, required: false
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

  // project_number - computed: true, optional: false, required: false
  public get projectNumber() {
    return this.getNumberAttribute('project_number');
  }

  // public_access_prevention - computed: true, optional: true, required: false
  private _publicAccessPrevention?: string; 
  public get publicAccessPrevention() {
    return this.getStringAttribute('public_access_prevention');
  }
  public set publicAccessPrevention(value: string) {
    this._publicAccessPrevention = value;
  }
  public resetPublicAccessPrevention() {
    this._publicAccessPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessPreventionInput() {
    return this._publicAccessPrevention;
  }

  // requester_pays - computed: false, optional: true, required: false
  private _requesterPays?: boolean | cdktn.IResolvable; 
  public get requesterPays() {
    return this.getBooleanAttribute('requester_pays');
  }
  public set requesterPays(value: boolean | cdktn.IResolvable) {
    this._requesterPays = value;
  }
  public resetRequesterPays() {
    this._requesterPays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterPaysInput() {
    return this._requesterPays;
  }

  // rpo - computed: true, optional: true, required: false
  private _rpo?: string; 
  public get rpo() {
    return this.getStringAttribute('rpo');
  }
  public set rpo(value: string) {
    this._rpo = value;
  }
  public resetRpo() {
    this._rpo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // uniform_bucket_level_access - computed: true, optional: true, required: false
  private _uniformBucketLevelAccess?: boolean | cdktn.IResolvable; 
  public get uniformBucketLevelAccess() {
    return this.getBooleanAttribute('uniform_bucket_level_access');
  }
  public set uniformBucketLevelAccess(value: boolean | cdktn.IResolvable) {
    this._uniformBucketLevelAccess = value;
  }
  public resetUniformBucketLevelAccess() {
    this._uniformBucketLevelAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBucketLevelAccessInput() {
    return this._uniformBucketLevelAccess;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // autoclass - computed: false, optional: true, required: false
  private _autoclass = new GoogleStorageBucketAutoclassOutputReference(this, "autoclass");
  public get autoclass() {
    return this._autoclass;
  }
  public putAutoclass(value: GoogleStorageBucketAutoclass) {
    this._autoclass.internalValue = value;
  }
  public resetAutoclass() {
    this._autoclass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoclassInput() {
    return this._autoclass.internalValue;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new GoogleStorageBucketCorsList(this, "cors", false);
  public get cors() {
    return this._cors;
  }
  public putCors(value: GoogleStorageBucketCors[] | cdktn.IResolvable) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // custom_placement_config - computed: false, optional: true, required: false
  private _customPlacementConfig = new GoogleStorageBucketCustomPlacementConfigOutputReference(this, "custom_placement_config");
  public get customPlacementConfig() {
    return this._customPlacementConfig;
  }
  public putCustomPlacementConfig(value: GoogleStorageBucketCustomPlacementConfig) {
    this._customPlacementConfig.internalValue = value;
  }
  public resetCustomPlacementConfig() {
    this._customPlacementConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPlacementConfigInput() {
    return this._customPlacementConfig.internalValue;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new GoogleStorageBucketEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: GoogleStorageBucketEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // hierarchical_namespace - computed: false, optional: true, required: false
  private _hierarchicalNamespace = new GoogleStorageBucketHierarchicalNamespaceOutputReference(this, "hierarchical_namespace");
  public get hierarchicalNamespace() {
    return this._hierarchicalNamespace;
  }
  public putHierarchicalNamespace(value: GoogleStorageBucketHierarchicalNamespace) {
    this._hierarchicalNamespace.internalValue = value;
  }
  public resetHierarchicalNamespace() {
    this._hierarchicalNamespace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchicalNamespaceInput() {
    return this._hierarchicalNamespace.internalValue;
  }

  // ip_filter - computed: false, optional: true, required: false
  private _ipFilter = new GoogleStorageBucketIpFilterOutputReference(this, "ip_filter");
  public get ipFilter() {
    return this._ipFilter;
  }
  public putIpFilter(value: GoogleStorageBucketIpFilter) {
    this._ipFilter.internalValue = value;
  }
  public resetIpFilter() {
    this._ipFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter.internalValue;
  }

  // lifecycle_rule - computed: false, optional: true, required: false
  private _lifecycleRule = new GoogleStorageBucketLifecycleRuleList(this, "lifecycle_rule", false);
  public get lifecycleRule() {
    return this._lifecycleRule;
  }
  public putLifecycleRule(value: GoogleStorageBucketLifecycleRule[] | cdktn.IResolvable) {
    this._lifecycleRule.internalValue = value;
  }
  public resetLifecycleRule() {
    this._lifecycleRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleRuleInput() {
    return this._lifecycleRule.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new GoogleStorageBucketLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: GoogleStorageBucketLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new GoogleStorageBucketRetentionPolicyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: GoogleStorageBucketRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // soft_delete_policy - computed: false, optional: true, required: false
  private _softDeletePolicy = new GoogleStorageBucketSoftDeletePolicyOutputReference(this, "soft_delete_policy");
  public get softDeletePolicy() {
    return this._softDeletePolicy;
  }
  public putSoftDeletePolicy(value: GoogleStorageBucketSoftDeletePolicy) {
    this._softDeletePolicy.internalValue = value;
  }
  public resetSoftDeletePolicy() {
    this._softDeletePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeletePolicyInput() {
    return this._softDeletePolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleStorageBucketTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleStorageBucketTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // versioning - computed: false, optional: true, required: false
  private _versioning = new GoogleStorageBucketVersioningOutputReference(this, "versioning");
  public get versioning() {
    return this._versioning;
  }
  public putVersioning(value: GoogleStorageBucketVersioning) {
    this._versioning.internalValue = value;
  }
  public resetVersioning() {
    this._versioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningInput() {
    return this._versioning.internalValue;
  }

  // website - computed: false, optional: true, required: false
  private _website = new GoogleStorageBucketWebsiteOutputReference(this, "website");
  public get website() {
    return this._website;
  }
  public putWebsite(value: GoogleStorageBucketWebsite) {
    this._website.internalValue = value;
  }
  public resetWebsite() {
    this._website.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_event_based_hold: cdktn.booleanToTerraform(this._defaultEventBasedHold),
      enable_object_retention: cdktn.booleanToTerraform(this._enableObjectRetention),
      force_destroy: cdktn.booleanToTerraform(this._forceDestroy),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      public_access_prevention: cdktn.stringToTerraform(this._publicAccessPrevention),
      requester_pays: cdktn.booleanToTerraform(this._requesterPays),
      rpo: cdktn.stringToTerraform(this._rpo),
      storage_class: cdktn.stringToTerraform(this._storageClass),
      uniform_bucket_level_access: cdktn.booleanToTerraform(this._uniformBucketLevelAccess),
      autoclass: googleStorageBucketAutoclassToTerraform(this._autoclass.internalValue),
      cors: cdktn.listMapper(googleStorageBucketCorsToTerraform, true)(this._cors.internalValue),
      custom_placement_config: googleStorageBucketCustomPlacementConfigToTerraform(this._customPlacementConfig.internalValue),
      encryption: googleStorageBucketEncryptionToTerraform(this._encryption.internalValue),
      hierarchical_namespace: googleStorageBucketHierarchicalNamespaceToTerraform(this._hierarchicalNamespace.internalValue),
      ip_filter: googleStorageBucketIpFilterToTerraform(this._ipFilter.internalValue),
      lifecycle_rule: cdktn.listMapper(googleStorageBucketLifecycleRuleToTerraform, true)(this._lifecycleRule.internalValue),
      logging: googleStorageBucketLoggingToTerraform(this._logging.internalValue),
      retention_policy: googleStorageBucketRetentionPolicyToTerraform(this._retentionPolicy.internalValue),
      soft_delete_policy: googleStorageBucketSoftDeletePolicyToTerraform(this._softDeletePolicy.internalValue),
      timeouts: googleStorageBucketTimeoutsToTerraform(this._timeouts.internalValue),
      versioning: googleStorageBucketVersioningToTerraform(this._versioning.internalValue),
      website: googleStorageBucketWebsiteToTerraform(this._website.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_event_based_hold: {
        value: cdktn.booleanToHclTerraform(this._defaultEventBasedHold),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_object_retention: {
        value: cdktn.booleanToHclTerraform(this._enableObjectRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_destroy: {
        value: cdktn.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_access_prevention: {
        value: cdktn.stringToHclTerraform(this._publicAccessPrevention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requester_pays: {
        value: cdktn.booleanToHclTerraform(this._requesterPays),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rpo: {
        value: cdktn.stringToHclTerraform(this._rpo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_class: {
        value: cdktn.stringToHclTerraform(this._storageClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uniform_bucket_level_access: {
        value: cdktn.booleanToHclTerraform(this._uniformBucketLevelAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autoclass: {
        value: googleStorageBucketAutoclassToHclTerraform(this._autoclass.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBucketAutoclassList",
      },
      cors: {
        value: cdktn.listMapperHcl(googleStorageBucketCorsToHclTerraform, true)(this._cors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBucketCorsList",
      },
      custom_placement_config: {
        value: googleStorageBucketCustomPlacementConfigToHclTerraform(this._customPlacementConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBucketCustomPlacementConfigList",
      },
      encryption: {
        value: googleStorageBucketEncryptionToHclTerraform(this._encryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBucketEncryptionList",
      },
      hierarchical_namespace: {
        value: googleStorageBucketHierarchicalNamespaceToHclTerraform(this._hierarchicalNamespace.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBucketHierarchicalNamespaceList",
      },
      ip_filter: {
        value: googleStorageBucketIpFilterToHclTerraform(this._ipFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBucketIpFilterList",
      },
      lifecycle_rule: {
        value: cdktn.listMapperHcl(googleStorageBucketLifecycleRuleToHclTerraform, true)(this._lifecycleRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBucketLifecycleRuleList",
      },
      logging: {
        value: googleStorageBucketLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBucketLoggingList",
      },
      retention_policy: {
        value: googleStorageBucketRetentionPolicyToHclTerraform(this._retentionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBucketRetentionPolicyList",
      },
      soft_delete_policy: {
        value: googleStorageBucketSoftDeletePolicyToHclTerraform(this._softDeletePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBucketSoftDeletePolicyList",
      },
      timeouts: {
        value: googleStorageBucketTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleStorageBucketTimeouts",
      },
      versioning: {
        value: googleStorageBucketVersioningToHclTerraform(this._versioning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBucketVersioningList",
      },
      website: {
        value: googleStorageBucketWebsiteToHclTerraform(this._website.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleStorageBucketWebsiteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
