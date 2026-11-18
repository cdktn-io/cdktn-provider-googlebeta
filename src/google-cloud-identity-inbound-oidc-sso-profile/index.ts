/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleCloudIdentityInboundOidcSsoProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#customer GoogleCloudIdentityInboundOidcSsoProfile#customer}
  */
  readonly customer?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#deletion_policy GoogleCloudIdentityInboundOidcSsoProfile#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Human-readable name of the OIDC SSO profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#display_name GoogleCloudIdentityInboundOidcSsoProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * idp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#idp_config GoogleCloudIdentityInboundOidcSsoProfile#idp_config}
  */
  readonly idpConfig: GoogleCloudIdentityInboundOidcSsoProfileIdpConfig;
  /**
  * rp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#rp_config GoogleCloudIdentityInboundOidcSsoProfile#rp_config}
  */
  readonly rpConfig?: GoogleCloudIdentityInboundOidcSsoProfileRpConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#timeouts GoogleCloudIdentityInboundOidcSsoProfile#timeouts}
  */
  readonly timeouts?: GoogleCloudIdentityInboundOidcSsoProfileTimeouts;
}
export interface GoogleCloudIdentityInboundOidcSsoProfileIdpConfig {
  /**
  * The **Change Password URL** of the identity provider. Users will be sent to this URL
  * when changing their passwords at 'myaccount.google.com'. This takes precedence over
  * the change password URL configured at customer-level. Must use 'HTTPS'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#change_password_uri GoogleCloudIdentityInboundOidcSsoProfile#change_password_uri}
  */
  readonly changePasswordUri?: string;
  /**
  * The Issuer identifier for the IdP. Must be a URL. The discovery URL will be derived
  * from this as described in Section 4 of the OIDC specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#issuer_uri GoogleCloudIdentityInboundOidcSsoProfile#issuer_uri}
  */
  readonly issuerUri: string;
}

export function googleCloudIdentityInboundOidcSsoProfileIdpConfigToTerraform(struct?: GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference | GoogleCloudIdentityInboundOidcSsoProfileIdpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    change_password_uri: cdktn.stringToTerraform(struct!.changePasswordUri),
    issuer_uri: cdktn.stringToTerraform(struct!.issuerUri),
  }
}


export function googleCloudIdentityInboundOidcSsoProfileIdpConfigToHclTerraform(struct?: GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference | GoogleCloudIdentityInboundOidcSsoProfileIdpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    change_password_uri: {
      value: cdktn.stringToHclTerraform(struct!.changePasswordUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_uri: {
      value: cdktn.stringToHclTerraform(struct!.issuerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudIdentityInboundOidcSsoProfileIdpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changePasswordUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.changePasswordUri = this._changePasswordUri;
    }
    if (this._issuerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUri = this._issuerUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudIdentityInboundOidcSsoProfileIdpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changePasswordUri = undefined;
      this._issuerUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changePasswordUri = value.changePasswordUri;
      this._issuerUri = value.issuerUri;
    }
  }

  // change_password_uri - computed: false, optional: true, required: false
  private _changePasswordUri?: string; 
  public get changePasswordUri() {
    return this.getStringAttribute('change_password_uri');
  }
  public set changePasswordUri(value: string) {
    this._changePasswordUri = value;
  }
  public resetChangePasswordUri() {
    this._changePasswordUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordUriInput() {
    return this._changePasswordUri;
  }

  // issuer_uri - computed: false, optional: false, required: true
  private _issuerUri?: string; 
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }
  public set issuerUri(value: string) {
    this._issuerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUriInput() {
    return this._issuerUri;
  }
}
export interface GoogleCloudIdentityInboundOidcSsoProfileRpConfig {
  /**
  * OAuth2 client ID for OIDC. Must be set together with 'client_secret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#client_id GoogleCloudIdentityInboundOidcSsoProfile#client_id}
  */
  readonly clientId?: string;
  /**
  * Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#client_secret GoogleCloudIdentityInboundOidcSsoProfile#client_secret}
  */
  readonly clientSecret?: string;
}

export function googleCloudIdentityInboundOidcSsoProfileRpConfigToTerraform(struct?: GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference | GoogleCloudIdentityInboundOidcSsoProfileRpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
  }
}


export function googleCloudIdentityInboundOidcSsoProfileRpConfigToHclTerraform(struct?: GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference | GoogleCloudIdentityInboundOidcSsoProfileRpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudIdentityInboundOidcSsoProfileRpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudIdentityInboundOidcSsoProfileRpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
}
export interface GoogleCloudIdentityInboundOidcSsoProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#create GoogleCloudIdentityInboundOidcSsoProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#delete GoogleCloudIdentityInboundOidcSsoProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#update GoogleCloudIdentityInboundOidcSsoProfile#update}
  */
  readonly update?: string;
}

export function googleCloudIdentityInboundOidcSsoProfileTimeoutsToTerraform(struct?: GoogleCloudIdentityInboundOidcSsoProfileTimeouts | cdktn.IResolvable): any {
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


export function googleCloudIdentityInboundOidcSsoProfileTimeoutsToHclTerraform(struct?: GoogleCloudIdentityInboundOidcSsoProfileTimeouts | cdktn.IResolvable): any {
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

export class GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleCloudIdentityInboundOidcSsoProfileTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleCloudIdentityInboundOidcSsoProfileTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile google_cloud_identity_inbound_oidc_sso_profile}
*/
export class GoogleCloudIdentityInboundOidcSsoProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_identity_inbound_oidc_sso_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleCloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleCloudIdentityInboundOidcSsoProfile to import
  * @param importFromId The id of the existing GoogleCloudIdentityInboundOidcSsoProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleCloudIdentityInboundOidcSsoProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_cloud_identity_inbound_oidc_sso_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile google_cloud_identity_inbound_oidc_sso_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCloudIdentityInboundOidcSsoProfileConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCloudIdentityInboundOidcSsoProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_identity_inbound_oidc_sso_profile',
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
    this._customer = config.customer;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._idpConfig.internalValue = config.idpConfig;
    this._rpConfig.internalValue = config.rpConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer - computed: true, optional: true, required: false
  private _customer?: string; 
  public get customer() {
    return this.getStringAttribute('customer');
  }
  public set customer(value: string) {
    this._customer = value;
  }
  public resetCustomer() {
    this._customer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerInput() {
    return this._customer;
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

  // inbound_oidc_sso_profile_id - computed: true, optional: false, required: false
  public get inboundOidcSsoProfileId() {
    return this.getStringAttribute('inbound_oidc_sso_profile_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // idp_config - computed: false, optional: false, required: true
  private _idpConfig = new GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference(this, "idp_config");
  public get idpConfig() {
    return this._idpConfig;
  }
  public putIdpConfig(value: GoogleCloudIdentityInboundOidcSsoProfileIdpConfig) {
    this._idpConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpConfigInput() {
    return this._idpConfig.internalValue;
  }

  // rp_config - computed: false, optional: true, required: false
  private _rpConfig = new GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference(this, "rp_config");
  public get rpConfig() {
    return this._rpConfig;
  }
  public putRpConfig(value: GoogleCloudIdentityInboundOidcSsoProfileRpConfig) {
    this._rpConfig.internalValue = value;
  }
  public resetRpConfig() {
    this._rpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpConfigInput() {
    return this._rpConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCloudIdentityInboundOidcSsoProfileTimeouts) {
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
      customer: cdktn.stringToTerraform(this._customer),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      idp_config: googleCloudIdentityInboundOidcSsoProfileIdpConfigToTerraform(this._idpConfig.internalValue),
      rp_config: googleCloudIdentityInboundOidcSsoProfileRpConfigToTerraform(this._rpConfig.internalValue),
      timeouts: googleCloudIdentityInboundOidcSsoProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer: {
        value: cdktn.stringToHclTerraform(this._customer),
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
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
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
      idp_config: {
        value: googleCloudIdentityInboundOidcSsoProfileIdpConfigToHclTerraform(this._idpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudIdentityInboundOidcSsoProfileIdpConfigList",
      },
      rp_config: {
        value: googleCloudIdentityInboundOidcSsoProfileRpConfigToHclTerraform(this._rpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudIdentityInboundOidcSsoProfileRpConfigList",
      },
      timeouts: {
        value: googleCloudIdentityInboundOidcSsoProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleCloudIdentityInboundOidcSsoProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
