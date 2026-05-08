/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleComputeMachineImageConfig extends cdktn.TerraformMetaArguments {
  /**
  * A text description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#description GoogleComputeMachineImage#description}
  */
  readonly description?: string;
  /**
  * Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process.
  * Currently only supported on Windows instances using the Volume Shadow Copy Service (VSS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#guest_flush GoogleComputeMachineImage#guest_flush}
  */
  readonly guestFlush?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#id GoogleComputeMachineImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#name GoogleComputeMachineImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#project GoogleComputeMachineImage#project}
  */
  readonly project?: string;
  /**
  * The source instance used to create the machine image. You can provide this as a partial or full URL to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#source_instance GoogleComputeMachineImage#source_instance}
  */
  readonly sourceInstance: string;
  /**
  * machine_image_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#machine_image_encryption_key GoogleComputeMachineImage#machine_image_encryption_key}
  */
  readonly machineImageEncryptionKey?: GoogleComputeMachineImageMachineImageEncryptionKey;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#params GoogleComputeMachineImage#params}
  */
  readonly params?: GoogleComputeMachineImageParams;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#timeouts GoogleComputeMachineImage#timeouts}
  */
  readonly timeouts?: GoogleComputeMachineImageTimeouts;
}
export interface GoogleComputeMachineImageMachineImageEncryptionKey {
  /**
  * The name of the encryption key that is stored in Google Cloud KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#kms_key_name GoogleComputeMachineImage#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * The service account used for the encryption request for the given KMS key.
  * If absent, the Compute Engine Service Agent service account is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#kms_key_service_account GoogleComputeMachineImage#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Specifies a 256-bit customer-supplied encryption key, encoded in
  * RFC 4648 base64 to either encrypt or decrypt this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#raw_key GoogleComputeMachineImage#raw_key}
  */
  readonly rawKey?: string;
}

export function googleComputeMachineImageMachineImageEncryptionKeyToTerraform(struct?: GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference | GoogleComputeMachineImageMachineImageEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
    kms_key_service_account: cdktn.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktn.stringToTerraform(struct!.rawKey),
  }
}


export function googleComputeMachineImageMachineImageEncryptionKeyToHclTerraform(struct?: GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference | GoogleComputeMachineImageMachineImageEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_key: {
      value: cdktn.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeMachineImageMachineImageEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeMachineImageMachineImageEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}
export interface GoogleComputeMachineImageParams {
  /**
  * Resource manager tags to be bound to the machine image. Tag keys and values have the
  * same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
  * and values are in the format tagValues/456.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#resource_manager_tags GoogleComputeMachineImage#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
}

export function googleComputeMachineImageParamsToTerraform(struct?: GoogleComputeMachineImageParamsOutputReference | GoogleComputeMachineImageParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_manager_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.resourceManagerTags),
  }
}


export function googleComputeMachineImageParamsToHclTerraform(struct?: GoogleComputeMachineImageParamsOutputReference | GoogleComputeMachineImageParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_manager_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeMachineImageParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeMachineImageParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeMachineImageParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceManagerTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceManagerTags = value.resourceManagerTags;
    }
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
}
export interface GoogleComputeMachineImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#create GoogleComputeMachineImage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#delete GoogleComputeMachineImage#delete}
  */
  readonly delete?: string;
}

export function googleComputeMachineImageTimeoutsToTerraform(struct?: GoogleComputeMachineImageTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function googleComputeMachineImageTimeoutsToHclTerraform(struct?: GoogleComputeMachineImageTimeouts | cdktn.IResolvable): any {
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

export class GoogleComputeMachineImageTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeMachineImageTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeMachineImageTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image google_compute_machine_image}
*/
export class GoogleComputeMachineImage extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_machine_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleComputeMachineImage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeMachineImage to import
  * @param importFromId The id of the existing GoogleComputeMachineImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeMachineImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_machine_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_compute_machine_image google_compute_machine_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeMachineImageConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeMachineImageConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_machine_image',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '7.31.0',
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
    this._description = config.description;
    this._guestFlush = config.guestFlush;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._sourceInstance = config.sourceInstance;
    this._machineImageEncryptionKey.internalValue = config.machineImageEncryptionKey;
    this._params.internalValue = config.params;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // guest_flush - computed: false, optional: true, required: false
  private _guestFlush?: boolean | cdktn.IResolvable; 
  public get guestFlush() {
    return this.getBooleanAttribute('guest_flush');
  }
  public set guestFlush(value: boolean | cdktn.IResolvable) {
    this._guestFlush = value;
  }
  public resetGuestFlush() {
    this._guestFlush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestFlushInput() {
    return this._guestFlush;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // source_instance - computed: false, optional: false, required: true
  private _sourceInstance?: string; 
  public get sourceInstance() {
    return this.getStringAttribute('source_instance');
  }
  public set sourceInstance(value: string) {
    this._sourceInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceInput() {
    return this._sourceInstance;
  }

  // storage_locations - computed: true, optional: false, required: false
  public get storageLocations() {
    return this.getListAttribute('storage_locations');
  }

  // machine_image_encryption_key - computed: false, optional: true, required: false
  private _machineImageEncryptionKey = new GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference(this, "machine_image_encryption_key");
  public get machineImageEncryptionKey() {
    return this._machineImageEncryptionKey;
  }
  public putMachineImageEncryptionKey(value: GoogleComputeMachineImageMachineImageEncryptionKey) {
    this._machineImageEncryptionKey.internalValue = value;
  }
  public resetMachineImageEncryptionKey() {
    this._machineImageEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineImageEncryptionKeyInput() {
    return this._machineImageEncryptionKey.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params = new GoogleComputeMachineImageParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: GoogleComputeMachineImageParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeMachineImageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeMachineImageTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      guest_flush: cdktn.booleanToTerraform(this._guestFlush),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      source_instance: cdktn.stringToTerraform(this._sourceInstance),
      machine_image_encryption_key: googleComputeMachineImageMachineImageEncryptionKeyToTerraform(this._machineImageEncryptionKey.internalValue),
      params: googleComputeMachineImageParamsToTerraform(this._params.internalValue),
      timeouts: googleComputeMachineImageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_flush: {
        value: cdktn.booleanToHclTerraform(this._guestFlush),
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
      source_instance: {
        value: cdktn.stringToHclTerraform(this._sourceInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_image_encryption_key: {
        value: googleComputeMachineImageMachineImageEncryptionKeyToHclTerraform(this._machineImageEncryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeMachineImageMachineImageEncryptionKeyList",
      },
      params: {
        value: googleComputeMachineImageParamsToHclTerraform(this._params.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeMachineImageParamsList",
      },
      timeouts: {
        value: googleComputeMachineImageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeMachineImageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
