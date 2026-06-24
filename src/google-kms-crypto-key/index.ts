/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleKmsCryptoKeyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The resource name of the backend environment associated with all CryptoKeyVersions within this CryptoKey.
  * The resource name is in the format "projects/* /locations/* /ekmConnections/*" and only applies to "EXTERNAL_VPC" keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#crypto_key_backend GoogleKmsCryptoKey#crypto_key_backend}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly cryptoKeyBackend?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#deletion_policy GoogleKmsCryptoKey#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.
  * If not specified at creation time, the default duration is 30 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#destroy_scheduled_duration GoogleKmsCryptoKey#destroy_scheduled_duration}
  */
  readonly destroyScheduledDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#id GoogleKmsCryptoKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether this key may contain imported versions only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#import_only GoogleKmsCryptoKey#import_only}
  */
  readonly importOnly?: boolean | cdktn.IResolvable;
  /**
  * The KeyRing that this key belongs to.
  * Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#key_ring GoogleKmsCryptoKey#key_ring}
  */
  readonly keyRing: string;
  /**
  * Labels with user-defined metadata to apply to this resource.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#labels GoogleKmsCryptoKey#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name for the CryptoKey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#name GoogleKmsCryptoKey#name}
  */
  readonly name: string;
  /**
  * The immutable purpose of this CryptoKey. See the
  * [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose)
  * for possible inputs.
  * Default value is "ENCRYPT_DECRYPT".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#purpose GoogleKmsCryptoKey#purpose}
  */
  readonly purpose?: string;
  /**
  * Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.
  * The first rotation will take place after the specified period. The rotation period has
  * the format of a decimal number with up to 9 fractional digits, followed by the
  * letter 's' (seconds). It must be greater than a day (ie, 86400).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#rotation_period GoogleKmsCryptoKey#rotation_period}
  */
  readonly rotationPeriod?: string;
  /**
  * If set to true, the request will create a CryptoKey without any CryptoKeyVersions.
  * You must use the 'google_kms_crypto_key_version' resource to create a new CryptoKeyVersion
  * or 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion.
  * This field is only applicable during initial CryptoKey creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#skip_initial_version_creation GoogleKmsCryptoKey#skip_initial_version_creation}
  */
  readonly skipInitialVersionCreation?: boolean | cdktn.IResolvable;
  /**
  * key_access_justifications_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#key_access_justifications_policy GoogleKmsCryptoKey#key_access_justifications_policy}
  */
  readonly keyAccessJustificationsPolicy?: GoogleKmsCryptoKeyKeyAccessJustificationsPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#timeouts GoogleKmsCryptoKey#timeouts}
  */
  readonly timeouts?: GoogleKmsCryptoKeyTimeouts;
  /**
  * version_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#version_template GoogleKmsCryptoKey#version_template}
  */
  readonly versionTemplate?: GoogleKmsCryptoKeyVersionTemplate;
}
export interface GoogleKmsCryptoKeyPrimary {
}

export function googleKmsCryptoKeyPrimaryToTerraform(struct?: GoogleKmsCryptoKeyPrimary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleKmsCryptoKeyPrimaryToHclTerraform(struct?: GoogleKmsCryptoKeyPrimary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleKmsCryptoKeyPrimaryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleKmsCryptoKeyPrimary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleKmsCryptoKeyPrimary | undefined) {
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleKmsCryptoKeyPrimaryList extends cdktn.ComplexList {

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
  public get(index: number): GoogleKmsCryptoKeyPrimaryOutputReference {
    return new GoogleKmsCryptoKeyPrimaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleKmsCryptoKeyKeyAccessJustificationsPolicy {
  /**
  * The list of allowed reasons for access to this CryptoKey. Zero allowed
  * access reasons means all encrypt, decrypt, and sign operations for
  * this CryptoKey will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#allowed_access_reasons GoogleKmsCryptoKey#allowed_access_reasons}
  */
  readonly allowedAccessReasons?: string[];
}

export function googleKmsCryptoKeyKeyAccessJustificationsPolicyToTerraform(struct?: GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference | GoogleKmsCryptoKeyKeyAccessJustificationsPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_access_reasons: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAccessReasons),
  }
}


export function googleKmsCryptoKeyKeyAccessJustificationsPolicyToHclTerraform(struct?: GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference | GoogleKmsCryptoKeyKeyAccessJustificationsPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_access_reasons: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAccessReasons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleKmsCryptoKeyKeyAccessJustificationsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAccessReasons !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAccessReasons = this._allowedAccessReasons;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleKmsCryptoKeyKeyAccessJustificationsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedAccessReasons = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedAccessReasons = value.allowedAccessReasons;
    }
  }

  // allowed_access_reasons - computed: false, optional: true, required: false
  private _allowedAccessReasons?: string[]; 
  public get allowedAccessReasons() {
    return this.getListAttribute('allowed_access_reasons');
  }
  public set allowedAccessReasons(value: string[]) {
    this._allowedAccessReasons = value;
  }
  public resetAllowedAccessReasons() {
    this._allowedAccessReasons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccessReasonsInput() {
    return this._allowedAccessReasons;
  }
}
export interface GoogleKmsCryptoKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#create GoogleKmsCryptoKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#delete GoogleKmsCryptoKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#update GoogleKmsCryptoKey#update}
  */
  readonly update?: string;
}

export function googleKmsCryptoKeyTimeoutsToTerraform(struct?: GoogleKmsCryptoKeyTimeouts | cdktn.IResolvable): any {
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


export function googleKmsCryptoKeyTimeoutsToHclTerraform(struct?: GoogleKmsCryptoKeyTimeouts | cdktn.IResolvable): any {
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

export class GoogleKmsCryptoKeyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleKmsCryptoKeyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleKmsCryptoKeyTimeouts | cdktn.IResolvable | undefined) {
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
export interface GoogleKmsCryptoKeyVersionTemplate {
  /**
  * The algorithm to use when creating a version based on this template.
  * See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#algorithm GoogleKmsCryptoKey#algorithm}
  */
  readonly algorithm: string;
  /**
  * The protection level to use when creating a version based on this template. Possible values include "SOFTWARE", "HSM", "EXTERNAL", "EXTERNAL_VPC". Defaults to "SOFTWARE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#protection_level GoogleKmsCryptoKey#protection_level}
  */
  readonly protectionLevel?: string;
}

export function googleKmsCryptoKeyVersionTemplateToTerraform(struct?: GoogleKmsCryptoKeyVersionTemplateOutputReference | GoogleKmsCryptoKeyVersionTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm: cdktn.stringToTerraform(struct!.algorithm),
    protection_level: cdktn.stringToTerraform(struct!.protectionLevel),
  }
}


export function googleKmsCryptoKeyVersionTemplateToHclTerraform(struct?: GoogleKmsCryptoKeyVersionTemplateOutputReference | GoogleKmsCryptoKeyVersionTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm: {
      value: cdktn.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_level: {
      value: cdktn.stringToHclTerraform(struct!.protectionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleKmsCryptoKeyVersionTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleKmsCryptoKeyVersionTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._protectionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionLevel = this._protectionLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleKmsCryptoKeyVersionTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._protectionLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._protectionLevel = value.protectionLevel;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // protection_level - computed: false, optional: true, required: false
  private _protectionLevel?: string; 
  public get protectionLevel() {
    return this.getStringAttribute('protection_level');
  }
  public set protectionLevel(value: string) {
    this._protectionLevel = value;
  }
  public resetProtectionLevel() {
    this._protectionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionLevelInput() {
    return this._protectionLevel;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key google_kms_crypto_key}
*/
export class GoogleKmsCryptoKey extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_kms_crypto_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleKmsCryptoKey resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleKmsCryptoKey to import
  * @param importFromId The id of the existing GoogleKmsCryptoKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleKmsCryptoKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_kms_crypto_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_crypto_key google_kms_crypto_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleKmsCryptoKeyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleKmsCryptoKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_crypto_key',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '7.38.0',
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
    this._cryptoKeyBackend = config.cryptoKeyBackend;
    this._deletionPolicy = config.deletionPolicy;
    this._destroyScheduledDuration = config.destroyScheduledDuration;
    this._id = config.id;
    this._importOnly = config.importOnly;
    this._keyRing = config.keyRing;
    this._labels = config.labels;
    this._name = config.name;
    this._purpose = config.purpose;
    this._rotationPeriod = config.rotationPeriod;
    this._skipInitialVersionCreation = config.skipInitialVersionCreation;
    this._keyAccessJustificationsPolicy.internalValue = config.keyAccessJustificationsPolicy;
    this._timeouts.internalValue = config.timeouts;
    this._versionTemplate.internalValue = config.versionTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crypto_key_backend - computed: true, optional: true, required: false
  private _cryptoKeyBackend?: string; 
  public get cryptoKeyBackend() {
    return this.getStringAttribute('crypto_key_backend');
  }
  public set cryptoKeyBackend(value: string) {
    this._cryptoKeyBackend = value;
  }
  public resetCryptoKeyBackend() {
    this._cryptoKeyBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyBackendInput() {
    return this._cryptoKeyBackend;
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

  // destroy_scheduled_duration - computed: true, optional: true, required: false
  private _destroyScheduledDuration?: string; 
  public get destroyScheduledDuration() {
    return this.getStringAttribute('destroy_scheduled_duration');
  }
  public set destroyScheduledDuration(value: string) {
    this._destroyScheduledDuration = value;
  }
  public resetDestroyScheduledDuration() {
    this._destroyScheduledDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyScheduledDurationInput() {
    return this._destroyScheduledDuration;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // import_only - computed: true, optional: true, required: false
  private _importOnly?: boolean | cdktn.IResolvable; 
  public get importOnly() {
    return this.getBooleanAttribute('import_only');
  }
  public set importOnly(value: boolean | cdktn.IResolvable) {
    this._importOnly = value;
  }
  public resetImportOnly() {
    this._importOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importOnlyInput() {
    return this._importOnly;
  }

  // key_ring - computed: false, optional: false, required: true
  private _keyRing?: string; 
  public get keyRing() {
    return this.getStringAttribute('key_ring');
  }
  public set keyRing(value: string) {
    this._keyRing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingInput() {
    return this._keyRing;
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

  // primary - computed: true, optional: false, required: false
  private _primary = new GoogleKmsCryptoKeyPrimaryList(this, "primary", false);
  public get primary() {
    return this._primary;
  }

  // purpose - computed: false, optional: true, required: false
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: string; 
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }
  public set rotationPeriod(value: string) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }

  // skip_initial_version_creation - computed: false, optional: true, required: false
  private _skipInitialVersionCreation?: boolean | cdktn.IResolvable; 
  public get skipInitialVersionCreation() {
    return this.getBooleanAttribute('skip_initial_version_creation');
  }
  public set skipInitialVersionCreation(value: boolean | cdktn.IResolvable) {
    this._skipInitialVersionCreation = value;
  }
  public resetSkipInitialVersionCreation() {
    this._skipInitialVersionCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInitialVersionCreationInput() {
    return this._skipInitialVersionCreation;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // key_access_justifications_policy - computed: false, optional: true, required: false
  private _keyAccessJustificationsPolicy = new GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference(this, "key_access_justifications_policy");
  public get keyAccessJustificationsPolicy() {
    return this._keyAccessJustificationsPolicy;
  }
  public putKeyAccessJustificationsPolicy(value: GoogleKmsCryptoKeyKeyAccessJustificationsPolicy) {
    this._keyAccessJustificationsPolicy.internalValue = value;
  }
  public resetKeyAccessJustificationsPolicy() {
    this._keyAccessJustificationsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAccessJustificationsPolicyInput() {
    return this._keyAccessJustificationsPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleKmsCryptoKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleKmsCryptoKeyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // version_template - computed: false, optional: true, required: false
  private _versionTemplate = new GoogleKmsCryptoKeyVersionTemplateOutputReference(this, "version_template");
  public get versionTemplate() {
    return this._versionTemplate;
  }
  public putVersionTemplate(value: GoogleKmsCryptoKeyVersionTemplate) {
    this._versionTemplate.internalValue = value;
  }
  public resetVersionTemplate() {
    this._versionTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTemplateInput() {
    return this._versionTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      crypto_key_backend: cdktn.stringToTerraform(this._cryptoKeyBackend),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      destroy_scheduled_duration: cdktn.stringToTerraform(this._destroyScheduledDuration),
      id: cdktn.stringToTerraform(this._id),
      import_only: cdktn.booleanToTerraform(this._importOnly),
      key_ring: cdktn.stringToTerraform(this._keyRing),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      name: cdktn.stringToTerraform(this._name),
      purpose: cdktn.stringToTerraform(this._purpose),
      rotation_period: cdktn.stringToTerraform(this._rotationPeriod),
      skip_initial_version_creation: cdktn.booleanToTerraform(this._skipInitialVersionCreation),
      key_access_justifications_policy: googleKmsCryptoKeyKeyAccessJustificationsPolicyToTerraform(this._keyAccessJustificationsPolicy.internalValue),
      timeouts: googleKmsCryptoKeyTimeoutsToTerraform(this._timeouts.internalValue),
      version_template: googleKmsCryptoKeyVersionTemplateToTerraform(this._versionTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crypto_key_backend: {
        value: cdktn.stringToHclTerraform(this._cryptoKeyBackend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destroy_scheduled_duration: {
        value: cdktn.stringToHclTerraform(this._destroyScheduledDuration),
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
      import_only: {
        value: cdktn.booleanToHclTerraform(this._importOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_ring: {
        value: cdktn.stringToHclTerraform(this._keyRing),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose: {
        value: cdktn.stringToHclTerraform(this._purpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_period: {
        value: cdktn.stringToHclTerraform(this._rotationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_initial_version_creation: {
        value: cdktn.booleanToHclTerraform(this._skipInitialVersionCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_access_justifications_policy: {
        value: googleKmsCryptoKeyKeyAccessJustificationsPolicyToHclTerraform(this._keyAccessJustificationsPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleKmsCryptoKeyKeyAccessJustificationsPolicyList",
      },
      timeouts: {
        value: googleKmsCryptoKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleKmsCryptoKeyTimeouts",
      },
      version_template: {
        value: googleKmsCryptoKeyVersionTemplateToHclTerraform(this._versionTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleKmsCryptoKeyVersionTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
