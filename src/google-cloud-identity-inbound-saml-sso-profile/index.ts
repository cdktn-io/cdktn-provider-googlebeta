/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleCloudIdentityInboundSamlSsoProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#customer GoogleCloudIdentityInboundSamlSsoProfile#customer}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#deletion_policy GoogleCloudIdentityInboundSamlSsoProfile#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Human-readable name of the SAML SSO profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#display_name GoogleCloudIdentityInboundSamlSsoProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#id GoogleCloudIdentityInboundSamlSsoProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * idp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#idp_config GoogleCloudIdentityInboundSamlSsoProfile#idp_config}
  */
  readonly idpConfig: GoogleCloudIdentityInboundSamlSsoProfileIdpConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#timeouts GoogleCloudIdentityInboundSamlSsoProfile#timeouts}
  */
  readonly timeouts?: GoogleCloudIdentityInboundSamlSsoProfileTimeouts;
}
export interface GoogleCloudIdentityInboundSamlSsoProfileSpConfig {
}

export function googleCloudIdentityInboundSamlSsoProfileSpConfigToTerraform(struct?: GoogleCloudIdentityInboundSamlSsoProfileSpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleCloudIdentityInboundSamlSsoProfileSpConfigToHclTerraform(struct?: GoogleCloudIdentityInboundSamlSsoProfileSpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleCloudIdentityInboundSamlSsoProfileSpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudIdentityInboundSamlSsoProfileSpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assertion_consumer_service_uri - computed: true, optional: false, required: false
  public get assertionConsumerServiceUri() {
    return this.getStringAttribute('assertion_consumer_service_uri');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
}

export class GoogleCloudIdentityInboundSamlSsoProfileSpConfigList extends cdktn.ComplexList {

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
  public get(index: number): GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference {
    return new GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudIdentityInboundSamlSsoProfileIdpConfig {
  /**
  * The **Change Password URL** of the identity provider. Users will be sent to this URL
  * when changing their passwords at 'myaccount.google.com'. This takes precedence over
  * the change password URL configured at customer-level. Must use 'HTTPS'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#change_password_uri GoogleCloudIdentityInboundSamlSsoProfile#change_password_uri}
  */
  readonly changePasswordUri?: string;
  /**
  * The SAML **Entity ID** of the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#entity_id GoogleCloudIdentityInboundSamlSsoProfile#entity_id}
  */
  readonly entityId: string;
  /**
  * The **Logout Redirect URL** (sign-out page URL) of the identity provider. When a user
  * clicks the sign-out link on a Google page, they will be redirected to this URL. This is
  * a pure redirect with no attached SAML 'LogoutRequest' i.e. SAML single logout is not
  * supported. Must use 'HTTPS'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#logout_redirect_uri GoogleCloudIdentityInboundSamlSsoProfile#logout_redirect_uri}
  */
  readonly logoutRedirectUri?: string;
  /**
  * The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider.
  * This is the URL where the 'AuthnRequest' will be sent. Must use 'HTTPS'.
  * Assumed to accept the 'HTTP-Redirect' binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#single_sign_on_service_uri GoogleCloudIdentityInboundSamlSsoProfile#single_sign_on_service_uri}
  */
  readonly singleSignOnServiceUri: string;
}

export function googleCloudIdentityInboundSamlSsoProfileIdpConfigToTerraform(struct?: GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference | GoogleCloudIdentityInboundSamlSsoProfileIdpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    change_password_uri: cdktn.stringToTerraform(struct!.changePasswordUri),
    entity_id: cdktn.stringToTerraform(struct!.entityId),
    logout_redirect_uri: cdktn.stringToTerraform(struct!.logoutRedirectUri),
    single_sign_on_service_uri: cdktn.stringToTerraform(struct!.singleSignOnServiceUri),
  }
}


export function googleCloudIdentityInboundSamlSsoProfileIdpConfigToHclTerraform(struct?: GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference | GoogleCloudIdentityInboundSamlSsoProfileIdpConfig): any {
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
    entity_id: {
      value: cdktn.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.logoutRedirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_sign_on_service_uri: {
      value: cdktn.stringToHclTerraform(struct!.singleSignOnServiceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudIdentityInboundSamlSsoProfileIdpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changePasswordUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.changePasswordUri = this._changePasswordUri;
    }
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._logoutRedirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutRedirectUri = this._logoutRedirectUri;
    }
    if (this._singleSignOnServiceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleSignOnServiceUri = this._singleSignOnServiceUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudIdentityInboundSamlSsoProfileIdpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changePasswordUri = undefined;
      this._entityId = undefined;
      this._logoutRedirectUri = undefined;
      this._singleSignOnServiceUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changePasswordUri = value.changePasswordUri;
      this._entityId = value.entityId;
      this._logoutRedirectUri = value.logoutRedirectUri;
      this._singleSignOnServiceUri = value.singleSignOnServiceUri;
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

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // logout_redirect_uri - computed: false, optional: true, required: false
  private _logoutRedirectUri?: string; 
  public get logoutRedirectUri() {
    return this.getStringAttribute('logout_redirect_uri');
  }
  public set logoutRedirectUri(value: string) {
    this._logoutRedirectUri = value;
  }
  public resetLogoutRedirectUri() {
    this._logoutRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutRedirectUriInput() {
    return this._logoutRedirectUri;
  }

  // single_sign_on_service_uri - computed: false, optional: false, required: true
  private _singleSignOnServiceUri?: string; 
  public get singleSignOnServiceUri() {
    return this.getStringAttribute('single_sign_on_service_uri');
  }
  public set singleSignOnServiceUri(value: string) {
    this._singleSignOnServiceUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnServiceUriInput() {
    return this._singleSignOnServiceUri;
  }
}
export interface GoogleCloudIdentityInboundSamlSsoProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#create GoogleCloudIdentityInboundSamlSsoProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#delete GoogleCloudIdentityInboundSamlSsoProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#update GoogleCloudIdentityInboundSamlSsoProfile#update}
  */
  readonly update?: string;
}

export function googleCloudIdentityInboundSamlSsoProfileTimeoutsToTerraform(struct?: GoogleCloudIdentityInboundSamlSsoProfileTimeouts | cdktn.IResolvable): any {
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


export function googleCloudIdentityInboundSamlSsoProfileTimeoutsToHclTerraform(struct?: GoogleCloudIdentityInboundSamlSsoProfileTimeouts | cdktn.IResolvable): any {
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

export class GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleCloudIdentityInboundSamlSsoProfileTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleCloudIdentityInboundSamlSsoProfileTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile google_cloud_identity_inbound_saml_sso_profile}
*/
export class GoogleCloudIdentityInboundSamlSsoProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_identity_inbound_saml_sso_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleCloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleCloudIdentityInboundSamlSsoProfile to import
  * @param importFromId The id of the existing GoogleCloudIdentityInboundSamlSsoProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleCloudIdentityInboundSamlSsoProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_cloud_identity_inbound_saml_sso_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile google_cloud_identity_inbound_saml_sso_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCloudIdentityInboundSamlSsoProfileConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCloudIdentityInboundSamlSsoProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_identity_inbound_saml_sso_profile',
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

  // inbound_saml_sso_profile_id - computed: true, optional: false, required: false
  public get inboundSamlSsoProfileId() {
    return this.getStringAttribute('inbound_saml_sso_profile_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sp_config - computed: true, optional: false, required: false
  private _spConfig = new GoogleCloudIdentityInboundSamlSsoProfileSpConfigList(this, "sp_config", false);
  public get spConfig() {
    return this._spConfig;
  }

  // idp_config - computed: false, optional: false, required: true
  private _idpConfig = new GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference(this, "idp_config");
  public get idpConfig() {
    return this._idpConfig;
  }
  public putIdpConfig(value: GoogleCloudIdentityInboundSamlSsoProfileIdpConfig) {
    this._idpConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpConfigInput() {
    return this._idpConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCloudIdentityInboundSamlSsoProfileTimeouts) {
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
      idp_config: googleCloudIdentityInboundSamlSsoProfileIdpConfigToTerraform(this._idpConfig.internalValue),
      timeouts: googleCloudIdentityInboundSamlSsoProfileTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: googleCloudIdentityInboundSamlSsoProfileIdpConfigToHclTerraform(this._idpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudIdentityInboundSamlSsoProfileIdpConfigList",
      },
      timeouts: {
        value: googleCloudIdentityInboundSamlSsoProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleCloudIdentityInboundSamlSsoProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
