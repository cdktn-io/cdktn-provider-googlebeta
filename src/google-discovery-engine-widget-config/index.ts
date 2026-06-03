/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleDiscoveryEngineWidgetConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * The collection ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#collection_id GoogleDiscoveryEngineWidgetConfig#collection_id}
  */
  readonly collectionId?: string;
  /**
  * The engine ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#engine_id GoogleDiscoveryEngineWidgetConfig#engine_id}
  */
  readonly engineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#id GoogleDiscoveryEngineWidgetConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The geographic location where the data store should reside. The value can
  * only be one of "global", "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#location GoogleDiscoveryEngineWidgetConfig#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#project GoogleDiscoveryEngineWidgetConfig#project}
  */
  readonly project?: string;
  /**
  * The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#widget_config_id GoogleDiscoveryEngineWidgetConfig#widget_config_id}
  */
  readonly widgetConfigId?: string;
  /**
  * access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#access_settings GoogleDiscoveryEngineWidgetConfig#access_settings}
  */
  readonly accessSettings?: GoogleDiscoveryEngineWidgetConfigAccessSettings;
  /**
  * homepage_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#homepage_setting GoogleDiscoveryEngineWidgetConfig#homepage_setting}
  */
  readonly homepageSetting?: GoogleDiscoveryEngineWidgetConfigHomepageSetting;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#timeouts GoogleDiscoveryEngineWidgetConfig#timeouts}
  */
  readonly timeouts?: GoogleDiscoveryEngineWidgetConfigTimeouts;
  /**
  * ui_branding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#ui_branding GoogleDiscoveryEngineWidgetConfig#ui_branding}
  */
  readonly uiBranding?: GoogleDiscoveryEngineWidgetConfigUiBranding;
  /**
  * ui_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#ui_settings GoogleDiscoveryEngineWidgetConfig#ui_settings}
  */
  readonly uiSettings?: GoogleDiscoveryEngineWidgetConfigUiSettings;
}
export interface GoogleDiscoveryEngineWidgetConfigAccessSettings {
  /**
  * Whether public unauthenticated access is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#allow_public_access GoogleDiscoveryEngineWidgetConfig#allow_public_access}
  */
  readonly allowPublicAccess?: boolean | cdktn.IResolvable;
  /**
  * List of domains that are allowed to integrate the search widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#allowlisted_domains GoogleDiscoveryEngineWidgetConfig#allowlisted_domains}
  */
  readonly allowlistedDomains?: string[];
  /**
  * Whether web app access is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_web_app GoogleDiscoveryEngineWidgetConfig#enable_web_app}
  */
  readonly enableWebApp?: boolean | cdktn.IResolvable;
  /**
  * Language code for user interface. Use language tags defined by
  * [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). If unset, the
  * default language code is "en-US".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#language_code GoogleDiscoveryEngineWidgetConfig#language_code}
  */
  readonly languageCode?: string;
  /**
  * The workforce identity pool provider used to access the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#workforce_identity_pool_provider GoogleDiscoveryEngineWidgetConfig#workforce_identity_pool_provider}
  */
  readonly workforceIdentityPoolProvider?: string;
}

export function googleDiscoveryEngineWidgetConfigAccessSettingsToTerraform(struct?: GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference | GoogleDiscoveryEngineWidgetConfigAccessSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_public_access: cdktn.booleanToTerraform(struct!.allowPublicAccess),
    allowlisted_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowlistedDomains),
    enable_web_app: cdktn.booleanToTerraform(struct!.enableWebApp),
    language_code: cdktn.stringToTerraform(struct!.languageCode),
    workforce_identity_pool_provider: cdktn.stringToTerraform(struct!.workforceIdentityPoolProvider),
  }
}


export function googleDiscoveryEngineWidgetConfigAccessSettingsToHclTerraform(struct?: GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference | GoogleDiscoveryEngineWidgetConfigAccessSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_public_access: {
      value: cdktn.booleanToHclTerraform(struct!.allowPublicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowlisted_domains: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowlistedDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_web_app: {
      value: cdktn.booleanToHclTerraform(struct!.enableWebApp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    language_code: {
      value: cdktn.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workforce_identity_pool_provider: {
      value: cdktn.stringToHclTerraform(struct!.workforceIdentityPoolProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineWidgetConfigAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPublicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPublicAccess = this._allowPublicAccess;
    }
    if (this._allowlistedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistedDomains = this._allowlistedDomains;
    }
    if (this._enableWebApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWebApp = this._enableWebApp;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._workforceIdentityPoolProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.workforceIdentityPoolProvider = this._workforceIdentityPoolProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineWidgetConfigAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPublicAccess = undefined;
      this._allowlistedDomains = undefined;
      this._enableWebApp = undefined;
      this._languageCode = undefined;
      this._workforceIdentityPoolProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPublicAccess = value.allowPublicAccess;
      this._allowlistedDomains = value.allowlistedDomains;
      this._enableWebApp = value.enableWebApp;
      this._languageCode = value.languageCode;
      this._workforceIdentityPoolProvider = value.workforceIdentityPoolProvider;
    }
  }

  // allow_public_access - computed: false, optional: true, required: false
  private _allowPublicAccess?: boolean | cdktn.IResolvable; 
  public get allowPublicAccess() {
    return this.getBooleanAttribute('allow_public_access');
  }
  public set allowPublicAccess(value: boolean | cdktn.IResolvable) {
    this._allowPublicAccess = value;
  }
  public resetAllowPublicAccess() {
    this._allowPublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPublicAccessInput() {
    return this._allowPublicAccess;
  }

  // allowlisted_domains - computed: false, optional: true, required: false
  private _allowlistedDomains?: string[]; 
  public get allowlistedDomains() {
    return this.getListAttribute('allowlisted_domains');
  }
  public set allowlistedDomains(value: string[]) {
    this._allowlistedDomains = value;
  }
  public resetAllowlistedDomains() {
    this._allowlistedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedDomainsInput() {
    return this._allowlistedDomains;
  }

  // enable_web_app - computed: false, optional: true, required: false
  private _enableWebApp?: boolean | cdktn.IResolvable; 
  public get enableWebApp() {
    return this.getBooleanAttribute('enable_web_app');
  }
  public set enableWebApp(value: boolean | cdktn.IResolvable) {
    this._enableWebApp = value;
  }
  public resetEnableWebApp() {
    this._enableWebApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebAppInput() {
    return this._enableWebApp;
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // workforce_identity_pool_provider - computed: false, optional: true, required: false
  private _workforceIdentityPoolProvider?: string; 
  public get workforceIdentityPoolProvider() {
    return this.getStringAttribute('workforce_identity_pool_provider');
  }
  public set workforceIdentityPoolProvider(value: string) {
    this._workforceIdentityPoolProvider = value;
  }
  public resetWorkforceIdentityPoolProvider() {
    this._workforceIdentityPoolProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workforceIdentityPoolProviderInput() {
    return this._workforceIdentityPoolProvider;
  }
}
export interface GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon {
  /**
  * Image URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#url GoogleDiscoveryEngineWidgetConfig#url}
  */
  readonly url?: string;
}

export function googleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconToTerraform(struct?: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference | GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function googleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconToHclTerraform(struct?: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference | GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts {
  /**
  * Destination URL of shortcut.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#destination_uri GoogleDiscoveryEngineWidgetConfig#destination_uri}
  */
  readonly destinationUri?: string;
  /**
  * Title of the shortcut.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#title GoogleDiscoveryEngineWidgetConfig#title}
  */
  readonly title?: string;
  /**
  * icon block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#icon GoogleDiscoveryEngineWidgetConfig#icon}
  */
  readonly icon?: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon;
}

export function googleDiscoveryEngineWidgetConfigHomepageSettingShortcutsToTerraform(struct?: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_uri: cdktn.stringToTerraform(struct!.destinationUri),
    title: cdktn.stringToTerraform(struct!.title),
    icon: googleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconToTerraform(struct!.icon),
  }
}


export function googleDiscoveryEngineWidgetConfigHomepageSettingShortcutsToHclTerraform(struct?: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_uri: {
      value: cdktn.stringToHclTerraform(struct!.destinationUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: googleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconToHclTerraform(struct!.icon),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationUri = this._destinationUri;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._icon?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationUri = undefined;
      this._title = undefined;
      this._icon.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationUri = value.destinationUri;
      this._title = value.title;
      this._icon.internalValue = value.icon;
    }
  }

  // destination_uri - computed: false, optional: true, required: false
  private _destinationUri?: string; 
  public get destinationUri() {
    return this.getStringAttribute('destination_uri');
  }
  public set destinationUri(value: string) {
    this._destinationUri = value;
  }
  public resetDestinationUri() {
    this._destinationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationUriInput() {
    return this._destinationUri;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // icon - computed: false, optional: true, required: false
  private _icon = new GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference(this, "icon");
  public get icon() {
    return this._icon;
  }
  public putIcon(value: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon) {
    this._icon.internalValue = value;
  }
  public resetIcon() {
    this._icon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon.internalValue;
  }
}

export class GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList extends cdktn.ComplexList {
  public internalValue? : GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts[] | cdktn.IResolvable

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
  public get(index: number): GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference {
    return new GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDiscoveryEngineWidgetConfigHomepageSetting {
  /**
  * shortcuts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#shortcuts GoogleDiscoveryEngineWidgetConfig#shortcuts}
  */
  readonly shortcuts?: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts[] | cdktn.IResolvable;
}

export function googleDiscoveryEngineWidgetConfigHomepageSettingToTerraform(struct?: GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference | GoogleDiscoveryEngineWidgetConfigHomepageSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shortcuts: cdktn.listMapper(googleDiscoveryEngineWidgetConfigHomepageSettingShortcutsToTerraform, true)(struct!.shortcuts),
  }
}


export function googleDiscoveryEngineWidgetConfigHomepageSettingToHclTerraform(struct?: GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference | GoogleDiscoveryEngineWidgetConfigHomepageSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shortcuts: {
      value: cdktn.listMapperHcl(googleDiscoveryEngineWidgetConfigHomepageSettingShortcutsToHclTerraform, true)(struct!.shortcuts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineWidgetConfigHomepageSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shortcuts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortcuts = this._shortcuts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineWidgetConfigHomepageSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shortcuts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shortcuts.internalValue = value.shortcuts;
    }
  }

  // shortcuts - computed: false, optional: true, required: false
  private _shortcuts = new GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList(this, "shortcuts", false);
  public get shortcuts() {
    return this._shortcuts;
  }
  public putShortcuts(value: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts[] | cdktn.IResolvable) {
    this._shortcuts.internalValue = value;
  }
  public resetShortcuts() {
    this._shortcuts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortcutsInput() {
    return this._shortcuts.internalValue;
  }
}
export interface GoogleDiscoveryEngineWidgetConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#create GoogleDiscoveryEngineWidgetConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#delete GoogleDiscoveryEngineWidgetConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#update GoogleDiscoveryEngineWidgetConfig#update}
  */
  readonly update?: string;
}

export function googleDiscoveryEngineWidgetConfigTimeoutsToTerraform(struct?: GoogleDiscoveryEngineWidgetConfigTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function googleDiscoveryEngineWidgetConfigTimeoutsToHclTerraform(struct?: GoogleDiscoveryEngineWidgetConfigTimeouts | cdktn.IResolvable): any {
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

export class GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDiscoveryEngineWidgetConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleDiscoveryEngineWidgetConfigTimeouts | cdktn.IResolvable | undefined) {
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
export interface GoogleDiscoveryEngineWidgetConfigUiBrandingLogo {
  /**
  * Image URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#url GoogleDiscoveryEngineWidgetConfig#url}
  */
  readonly url?: string;
}

export function googleDiscoveryEngineWidgetConfigUiBrandingLogoToTerraform(struct?: GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference | GoogleDiscoveryEngineWidgetConfigUiBrandingLogo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function googleDiscoveryEngineWidgetConfigUiBrandingLogoToHclTerraform(struct?: GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference | GoogleDiscoveryEngineWidgetConfigUiBrandingLogo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineWidgetConfigUiBrandingLogo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineWidgetConfigUiBrandingLogo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GoogleDiscoveryEngineWidgetConfigUiBranding {
  /**
  * logo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#logo GoogleDiscoveryEngineWidgetConfig#logo}
  */
  readonly logo?: GoogleDiscoveryEngineWidgetConfigUiBrandingLogo;
}

export function googleDiscoveryEngineWidgetConfigUiBrandingToTerraform(struct?: GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference | GoogleDiscoveryEngineWidgetConfigUiBranding): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logo: googleDiscoveryEngineWidgetConfigUiBrandingLogoToTerraform(struct!.logo),
  }
}


export function googleDiscoveryEngineWidgetConfigUiBrandingToHclTerraform(struct?: GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference | GoogleDiscoveryEngineWidgetConfigUiBranding): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logo: {
      value: googleDiscoveryEngineWidgetConfigUiBrandingLogoToHclTerraform(struct!.logo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineWidgetConfigUiBrandingLogoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineWidgetConfigUiBranding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineWidgetConfigUiBranding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logo.internalValue = value.logo;
    }
  }

  // logo - computed: false, optional: true, required: false
  private _logo = new GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference(this, "logo");
  public get logo() {
    return this._logo;
  }
  public putLogo(value: GoogleDiscoveryEngineWidgetConfigUiBrandingLogo) {
    this._logo.internalValue = value;
  }
  public resetLogo() {
    this._logo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo.internalValue;
  }
}
export interface GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField {
  /**
  * The field name that end users will see.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#display_name GoogleDiscoveryEngineWidgetConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * Registered field name. The format is 'field.abc'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#field GoogleDiscoveryEngineWidgetConfig#field}
  */
  readonly field: string;
}

export function googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldToTerraform(struct?: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    field: cdktn.stringToTerraform(struct!.field),
  }
}


export function googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldToHclTerraform(struct?: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._field = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._field = value.field;
    }
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

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList extends cdktn.ComplexList {
  public internalValue? : GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField[] | cdktn.IResolvable

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
  public get(index: number): GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference {
    return new GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap {
  /**
  *  Possible values: ["MOBILE", "DESKTOP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#device_visibility GoogleDiscoveryEngineWidgetConfig#device_visibility}
  */
  readonly deviceVisibility?: string[];
  /**
  * The template to customize how the field is displayed.
  * An example value would be a string that looks like: "Price: {value}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#display_template GoogleDiscoveryEngineWidgetConfig#display_template}
  */
  readonly displayTemplate?: string;
  /**
  * Registered field name. The format is 'field.abc'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#field GoogleDiscoveryEngineWidgetConfig#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#ui_component GoogleDiscoveryEngineWidgetConfig#ui_component}
  */
  readonly uiComponent: string;
}

export function googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapToTerraform(struct?: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_visibility: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.deviceVisibility),
    display_template: cdktn.stringToTerraform(struct!.displayTemplate),
    field: cdktn.stringToTerraform(struct!.field),
    ui_component: cdktn.stringToTerraform(struct!.uiComponent),
  }
}


export function googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapToHclTerraform(struct?: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_visibility: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.deviceVisibility),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    display_template: {
      value: cdktn.stringToHclTerraform(struct!.displayTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ui_component: {
      value: cdktn.stringToHclTerraform(struct!.uiComponent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceVisibility = this._deviceVisibility;
    }
    if (this._displayTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayTemplate = this._displayTemplate;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._uiComponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiComponent = this._uiComponent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceVisibility = undefined;
      this._displayTemplate = undefined;
      this._field = undefined;
      this._uiComponent = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceVisibility = value.deviceVisibility;
      this._displayTemplate = value.displayTemplate;
      this._field = value.field;
      this._uiComponent = value.uiComponent;
    }
  }

  // device_visibility - computed: false, optional: true, required: false
  private _deviceVisibility?: string[]; 
  public get deviceVisibility() {
    return this.getListAttribute('device_visibility');
  }
  public set deviceVisibility(value: string[]) {
    this._deviceVisibility = value;
  }
  public resetDeviceVisibility() {
    this._deviceVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVisibilityInput() {
    return this._deviceVisibility;
  }

  // display_template - computed: false, optional: true, required: false
  private _displayTemplate?: string; 
  public get displayTemplate() {
    return this.getStringAttribute('display_template');
  }
  public set displayTemplate(value: string) {
    this._displayTemplate = value;
  }
  public resetDisplayTemplate() {
    this._displayTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTemplateInput() {
    return this._displayTemplate;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // ui_component - computed: false, optional: false, required: true
  private _uiComponent?: string; 
  public get uiComponent() {
    return this.getStringAttribute('ui_component');
  }
  public set uiComponent(value: string) {
    this._uiComponent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uiComponentInput() {
    return this._uiComponent;
  }
}

export class GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList extends cdktn.ComplexList {
  public internalValue? : GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap[] | cdktn.IResolvable

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
  public get(index: number): GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference {
    return new GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs {
  /**
  * The name of the data store. It should be data store resource name. Format:
  * 'projects/{project}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}'.
  * For APIs under 'WidgetService', such as [WidgetService.LookUpWidgetConfig][],
  * the project number and location part is erased in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#name GoogleDiscoveryEngineWidgetConfig#name}
  */
  readonly name?: string;
  /**
  * facet_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#facet_field GoogleDiscoveryEngineWidgetConfig#facet_field}
  */
  readonly facetField?: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField[] | cdktn.IResolvable;
  /**
  * fields_ui_components_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#fields_ui_components_map GoogleDiscoveryEngineWidgetConfig#fields_ui_components_map}
  */
  readonly fieldsUiComponentsMap?: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap[] | cdktn.IResolvable;
}

export function googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsToTerraform(struct?: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    facet_field: cdktn.listMapper(googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldToTerraform, true)(struct!.facetField),
    fields_ui_components_map: cdktn.listMapper(googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapToTerraform, true)(struct!.fieldsUiComponentsMap),
  }
}


export function googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsToHclTerraform(struct?: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    facet_field: {
      value: cdktn.listMapperHcl(googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldToHclTerraform, true)(struct!.facetField),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList",
    },
    fields_ui_components_map: {
      value: cdktn.listMapperHcl(googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapToHclTerraform, true)(struct!.fieldsUiComponentsMap),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._facetField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetField = this._facetField?.internalValue;
    }
    if (this._fieldsUiComponentsMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsUiComponentsMap = this._fieldsUiComponentsMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._facetField.internalValue = undefined;
      this._fieldsUiComponentsMap.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._facetField.internalValue = value.facetField;
      this._fieldsUiComponentsMap.internalValue = value.fieldsUiComponentsMap;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // facet_field - computed: false, optional: true, required: false
  private _facetField = new GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList(this, "facet_field", false);
  public get facetField() {
    return this._facetField;
  }
  public putFacetField(value: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField[] | cdktn.IResolvable) {
    this._facetField.internalValue = value;
  }
  public resetFacetField() {
    this._facetField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetFieldInput() {
    return this._facetField.internalValue;
  }

  // fields_ui_components_map - computed: false, optional: true, required: false
  private _fieldsUiComponentsMap = new GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList(this, "fields_ui_components_map", true);
  public get fieldsUiComponentsMap() {
    return this._fieldsUiComponentsMap;
  }
  public putFieldsUiComponentsMap(value: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap[] | cdktn.IResolvable) {
    this._fieldsUiComponentsMap.internalValue = value;
  }
  public resetFieldsUiComponentsMap() {
    this._fieldsUiComponentsMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsUiComponentsMapInput() {
    return this._fieldsUiComponentsMap.internalValue;
  }
}

export class GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList extends cdktn.ComplexList {
  public internalValue? : GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs[] | cdktn.IResolvable

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
  public get(index: number): GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference {
    return new GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig {
  /**
  * Whether generated answer contains suggested related questions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#disable_related_questions GoogleDiscoveryEngineWidgetConfig#disable_related_questions}
  */
  readonly disableRelatedQuestions?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether to filter out queries that are adversarial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#ignore_adversarial_query GoogleDiscoveryEngineWidgetConfig#ignore_adversarial_query}
  */
  readonly ignoreAdversarialQuery?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether to filter out queries that are not relevant to the content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#ignore_low_relevant_content GoogleDiscoveryEngineWidgetConfig#ignore_low_relevant_content}
  */
  readonly ignoreLowRelevantContent?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether to filter out queries that are not answer-seeking.
  * The default value is 'false'. No answer is returned if the search query
  * is classified as a non-answer seeking query.
  * If this field is set to 'true', we skip generating answers for
  * non-answer seeking queries and return fallback messages instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#ignore_non_answer_seeking_query GoogleDiscoveryEngineWidgetConfig#ignore_non_answer_seeking_query}
  */
  readonly ignoreNonAnswerSeekingQuery?: boolean | cdktn.IResolvable;
  /**
  * Source of image returned in the answer. Possible values: ["ALL_AVAILABLE_SOURCES", "CORPUS_IMAGE_ONLY", "FIGURE_GENERATION_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#image_source GoogleDiscoveryEngineWidgetConfig#image_source}
  */
  readonly imageSource?: string;
  /**
  * Language code for Summary. Use language tags defined by
  * [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This
  * is an experimental feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#language_code GoogleDiscoveryEngineWidgetConfig#language_code}
  */
  readonly languageCode?: string;
  /**
  * Max rephrase steps. The max number is 5 steps. If not set or
  * set to < 1, it will be set to 1 by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#max_rephrase_steps GoogleDiscoveryEngineWidgetConfig#max_rephrase_steps}
  */
  readonly maxRephraseSteps?: number;
  /**
  * Text at the beginning of the prompt that instructs the model that generates the answer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#model_prompt_preamble GoogleDiscoveryEngineWidgetConfig#model_prompt_preamble}
  */
  readonly modelPromptPreamble?: string;
  /**
  * The model version used to generate the answer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#model_version GoogleDiscoveryEngineWidgetConfig#model_version}
  */
  readonly modelVersion?: string;
  /**
  * The number of top results to generate the answer from. Up to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#result_count GoogleDiscoveryEngineWidgetConfig#result_count}
  */
  readonly resultCount?: number;
}

export function googleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigToTerraform(struct?: GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference | GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_related_questions: cdktn.booleanToTerraform(struct!.disableRelatedQuestions),
    ignore_adversarial_query: cdktn.booleanToTerraform(struct!.ignoreAdversarialQuery),
    ignore_low_relevant_content: cdktn.booleanToTerraform(struct!.ignoreLowRelevantContent),
    ignore_non_answer_seeking_query: cdktn.booleanToTerraform(struct!.ignoreNonAnswerSeekingQuery),
    image_source: cdktn.stringToTerraform(struct!.imageSource),
    language_code: cdktn.stringToTerraform(struct!.languageCode),
    max_rephrase_steps: cdktn.numberToTerraform(struct!.maxRephraseSteps),
    model_prompt_preamble: cdktn.stringToTerraform(struct!.modelPromptPreamble),
    model_version: cdktn.stringToTerraform(struct!.modelVersion),
    result_count: cdktn.numberToTerraform(struct!.resultCount),
  }
}


export function googleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigToHclTerraform(struct?: GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference | GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_related_questions: {
      value: cdktn.booleanToHclTerraform(struct!.disableRelatedQuestions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_adversarial_query: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreAdversarialQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_low_relevant_content: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreLowRelevantContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_non_answer_seeking_query: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreNonAnswerSeekingQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_source: {
      value: cdktn.stringToHclTerraform(struct!.imageSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_code: {
      value: cdktn.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_rephrase_steps: {
      value: cdktn.numberToHclTerraform(struct!.maxRephraseSteps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_prompt_preamble: {
      value: cdktn.stringToHclTerraform(struct!.modelPromptPreamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_version: {
      value: cdktn.stringToHclTerraform(struct!.modelVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_count: {
      value: cdktn.numberToHclTerraform(struct!.resultCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableRelatedQuestions !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRelatedQuestions = this._disableRelatedQuestions;
    }
    if (this._ignoreAdversarialQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreAdversarialQuery = this._ignoreAdversarialQuery;
    }
    if (this._ignoreLowRelevantContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreLowRelevantContent = this._ignoreLowRelevantContent;
    }
    if (this._ignoreNonAnswerSeekingQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNonAnswerSeekingQuery = this._ignoreNonAnswerSeekingQuery;
    }
    if (this._imageSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSource = this._imageSource;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._maxRephraseSteps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRephraseSteps = this._maxRephraseSteps;
    }
    if (this._modelPromptPreamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelPromptPreamble = this._modelPromptPreamble;
    }
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._resultCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultCount = this._resultCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableRelatedQuestions = undefined;
      this._ignoreAdversarialQuery = undefined;
      this._ignoreLowRelevantContent = undefined;
      this._ignoreNonAnswerSeekingQuery = undefined;
      this._imageSource = undefined;
      this._languageCode = undefined;
      this._maxRephraseSteps = undefined;
      this._modelPromptPreamble = undefined;
      this._modelVersion = undefined;
      this._resultCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableRelatedQuestions = value.disableRelatedQuestions;
      this._ignoreAdversarialQuery = value.ignoreAdversarialQuery;
      this._ignoreLowRelevantContent = value.ignoreLowRelevantContent;
      this._ignoreNonAnswerSeekingQuery = value.ignoreNonAnswerSeekingQuery;
      this._imageSource = value.imageSource;
      this._languageCode = value.languageCode;
      this._maxRephraseSteps = value.maxRephraseSteps;
      this._modelPromptPreamble = value.modelPromptPreamble;
      this._modelVersion = value.modelVersion;
      this._resultCount = value.resultCount;
    }
  }

  // disable_related_questions - computed: false, optional: true, required: false
  private _disableRelatedQuestions?: boolean | cdktn.IResolvable; 
  public get disableRelatedQuestions() {
    return this.getBooleanAttribute('disable_related_questions');
  }
  public set disableRelatedQuestions(value: boolean | cdktn.IResolvable) {
    this._disableRelatedQuestions = value;
  }
  public resetDisableRelatedQuestions() {
    this._disableRelatedQuestions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRelatedQuestionsInput() {
    return this._disableRelatedQuestions;
  }

  // ignore_adversarial_query - computed: false, optional: true, required: false
  private _ignoreAdversarialQuery?: boolean | cdktn.IResolvable; 
  public get ignoreAdversarialQuery() {
    return this.getBooleanAttribute('ignore_adversarial_query');
  }
  public set ignoreAdversarialQuery(value: boolean | cdktn.IResolvable) {
    this._ignoreAdversarialQuery = value;
  }
  public resetIgnoreAdversarialQuery() {
    this._ignoreAdversarialQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAdversarialQueryInput() {
    return this._ignoreAdversarialQuery;
  }

  // ignore_low_relevant_content - computed: false, optional: true, required: false
  private _ignoreLowRelevantContent?: boolean | cdktn.IResolvable; 
  public get ignoreLowRelevantContent() {
    return this.getBooleanAttribute('ignore_low_relevant_content');
  }
  public set ignoreLowRelevantContent(value: boolean | cdktn.IResolvable) {
    this._ignoreLowRelevantContent = value;
  }
  public resetIgnoreLowRelevantContent() {
    this._ignoreLowRelevantContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreLowRelevantContentInput() {
    return this._ignoreLowRelevantContent;
  }

  // ignore_non_answer_seeking_query - computed: false, optional: true, required: false
  private _ignoreNonAnswerSeekingQuery?: boolean | cdktn.IResolvable; 
  public get ignoreNonAnswerSeekingQuery() {
    return this.getBooleanAttribute('ignore_non_answer_seeking_query');
  }
  public set ignoreNonAnswerSeekingQuery(value: boolean | cdktn.IResolvable) {
    this._ignoreNonAnswerSeekingQuery = value;
  }
  public resetIgnoreNonAnswerSeekingQuery() {
    this._ignoreNonAnswerSeekingQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNonAnswerSeekingQueryInput() {
    return this._ignoreNonAnswerSeekingQuery;
  }

  // image_source - computed: false, optional: true, required: false
  private _imageSource?: string; 
  public get imageSource() {
    return this.getStringAttribute('image_source');
  }
  public set imageSource(value: string) {
    this._imageSource = value;
  }
  public resetImageSource() {
    this._imageSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSourceInput() {
    return this._imageSource;
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // max_rephrase_steps - computed: false, optional: true, required: false
  private _maxRephraseSteps?: number; 
  public get maxRephraseSteps() {
    return this.getNumberAttribute('max_rephrase_steps');
  }
  public set maxRephraseSteps(value: number) {
    this._maxRephraseSteps = value;
  }
  public resetMaxRephraseSteps() {
    this._maxRephraseSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRephraseStepsInput() {
    return this._maxRephraseSteps;
  }

  // model_prompt_preamble - computed: false, optional: true, required: false
  private _modelPromptPreamble?: string; 
  public get modelPromptPreamble() {
    return this.getStringAttribute('model_prompt_preamble');
  }
  public set modelPromptPreamble(value: string) {
    this._modelPromptPreamble = value;
  }
  public resetModelPromptPreamble() {
    this._modelPromptPreamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPromptPreambleInput() {
    return this._modelPromptPreamble;
  }

  // model_version - computed: false, optional: true, required: false
  private _modelVersion?: string; 
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }
  public set modelVersion(value: string) {
    this._modelVersion = value;
  }
  public resetModelVersion() {
    this._modelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVersionInput() {
    return this._modelVersion;
  }

  // result_count - computed: false, optional: true, required: false
  private _resultCount?: number; 
  public get resultCount() {
    return this.getNumberAttribute('result_count');
  }
  public set resultCount(value: number) {
    this._resultCount = value;
  }
  public resetResultCount() {
    this._resultCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultCountInput() {
    return this._resultCount;
  }
}
export interface GoogleDiscoveryEngineWidgetConfigUiSettings {
  /**
  * The default ordering for search results if specified.
  * Used to set SearchRequest#orderBy on applicable requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#default_search_request_order_by GoogleDiscoveryEngineWidgetConfig#default_search_request_order_by}
  */
  readonly defaultSearchRequestOrderBy?: string;
  /**
  * If set to true, the widget will not collect user events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#disable_user_events_collection GoogleDiscoveryEngineWidgetConfig#disable_user_events_collection}
  */
  readonly disableUserEventsCollection?: boolean | cdktn.IResolvable;
  /**
  * Whether or not to enable autocomplete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_autocomplete GoogleDiscoveryEngineWidgetConfig#enable_autocomplete}
  */
  readonly enableAutocomplete?: boolean | cdktn.IResolvable;
  /**
  * If set to true, the widget will enable the create agent button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_create_agent_button GoogleDiscoveryEngineWidgetConfig#enable_create_agent_button}
  */
  readonly enableCreateAgentButton?: boolean | cdktn.IResolvable;
  /**
  * If set to true, the widget will enable people search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_people_search GoogleDiscoveryEngineWidgetConfig#enable_people_search}
  */
  readonly enablePeopleSearch?: boolean | cdktn.IResolvable;
  /**
  * Turn on or off collecting the search result quality feedback from end users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_quality_feedback GoogleDiscoveryEngineWidgetConfig#enable_quality_feedback}
  */
  readonly enableQualityFeedback?: boolean | cdktn.IResolvable;
  /**
  * Whether to enable safe search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_safe_search GoogleDiscoveryEngineWidgetConfig#enable_safe_search}
  */
  readonly enableSafeSearch?: boolean | cdktn.IResolvable;
  /**
  * Whether to enable search-as-you-type behavior for the search widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_search_as_you_type GoogleDiscoveryEngineWidgetConfig#enable_search_as_you_type}
  */
  readonly enableSearchAsYouType?: boolean | cdktn.IResolvable;
  /**
  * If set to true, the widget will enable visual content summary on applicable
  * search requests. Only used by healthcare search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_visual_content_summary GoogleDiscoveryEngineWidgetConfig#enable_visual_content_summary}
  */
  readonly enableVisualContentSummary?: boolean | cdktn.IResolvable;
  /**
  * Describes widget (or web app) interaction type Possible values: ["SEARCH_ONLY", "SEARCH_WITH_ANSWER", "SEARCH_WITH_FOLLOW_UPS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#interaction_type GoogleDiscoveryEngineWidgetConfig#interaction_type}
  */
  readonly interactionType?: string;
  /**
  * Controls whether result extract is display and how (snippet or extractive answer).
  * Default to no result if unspecified. Possible values: ["SNIPPET", "EXTRACTIVE_ANSWER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#result_description_type GoogleDiscoveryEngineWidgetConfig#result_description_type}
  */
  readonly resultDescriptionType?: string;
  /**
  * data_store_ui_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#data_store_ui_configs GoogleDiscoveryEngineWidgetConfig#data_store_ui_configs}
  */
  readonly dataStoreUiConfigs?: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs[] | cdktn.IResolvable;
  /**
  * generative_answer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#generative_answer_config GoogleDiscoveryEngineWidgetConfig#generative_answer_config}
  */
  readonly generativeAnswerConfig?: GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig;
}

export function googleDiscoveryEngineWidgetConfigUiSettingsToTerraform(struct?: GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference | GoogleDiscoveryEngineWidgetConfigUiSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_search_request_order_by: cdktn.stringToTerraform(struct!.defaultSearchRequestOrderBy),
    disable_user_events_collection: cdktn.booleanToTerraform(struct!.disableUserEventsCollection),
    enable_autocomplete: cdktn.booleanToTerraform(struct!.enableAutocomplete),
    enable_create_agent_button: cdktn.booleanToTerraform(struct!.enableCreateAgentButton),
    enable_people_search: cdktn.booleanToTerraform(struct!.enablePeopleSearch),
    enable_quality_feedback: cdktn.booleanToTerraform(struct!.enableQualityFeedback),
    enable_safe_search: cdktn.booleanToTerraform(struct!.enableSafeSearch),
    enable_search_as_you_type: cdktn.booleanToTerraform(struct!.enableSearchAsYouType),
    enable_visual_content_summary: cdktn.booleanToTerraform(struct!.enableVisualContentSummary),
    interaction_type: cdktn.stringToTerraform(struct!.interactionType),
    result_description_type: cdktn.stringToTerraform(struct!.resultDescriptionType),
    data_store_ui_configs: cdktn.listMapper(googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsToTerraform, true)(struct!.dataStoreUiConfigs),
    generative_answer_config: googleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigToTerraform(struct!.generativeAnswerConfig),
  }
}


export function googleDiscoveryEngineWidgetConfigUiSettingsToHclTerraform(struct?: GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference | GoogleDiscoveryEngineWidgetConfigUiSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_search_request_order_by: {
      value: cdktn.stringToHclTerraform(struct!.defaultSearchRequestOrderBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_user_events_collection: {
      value: cdktn.booleanToHclTerraform(struct!.disableUserEventsCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_autocomplete: {
      value: cdktn.booleanToHclTerraform(struct!.enableAutocomplete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_create_agent_button: {
      value: cdktn.booleanToHclTerraform(struct!.enableCreateAgentButton),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_people_search: {
      value: cdktn.booleanToHclTerraform(struct!.enablePeopleSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_quality_feedback: {
      value: cdktn.booleanToHclTerraform(struct!.enableQualityFeedback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_safe_search: {
      value: cdktn.booleanToHclTerraform(struct!.enableSafeSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_search_as_you_type: {
      value: cdktn.booleanToHclTerraform(struct!.enableSearchAsYouType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_visual_content_summary: {
      value: cdktn.booleanToHclTerraform(struct!.enableVisualContentSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interaction_type: {
      value: cdktn.stringToHclTerraform(struct!.interactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_description_type: {
      value: cdktn.stringToHclTerraform(struct!.resultDescriptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store_ui_configs: {
      value: cdktn.listMapperHcl(googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsToHclTerraform, true)(struct!.dataStoreUiConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList",
    },
    generative_answer_config: {
      value: googleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigToHclTerraform(struct!.generativeAnswerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineWidgetConfigUiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSearchRequestOrderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSearchRequestOrderBy = this._defaultSearchRequestOrderBy;
    }
    if (this._disableUserEventsCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUserEventsCollection = this._disableUserEventsCollection;
    }
    if (this._enableAutocomplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutocomplete = this._enableAutocomplete;
    }
    if (this._enableCreateAgentButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCreateAgentButton = this._enableCreateAgentButton;
    }
    if (this._enablePeopleSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePeopleSearch = this._enablePeopleSearch;
    }
    if (this._enableQualityFeedback !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableQualityFeedback = this._enableQualityFeedback;
    }
    if (this._enableSafeSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSafeSearch = this._enableSafeSearch;
    }
    if (this._enableSearchAsYouType !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSearchAsYouType = this._enableSearchAsYouType;
    }
    if (this._enableVisualContentSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVisualContentSummary = this._enableVisualContentSummary;
    }
    if (this._interactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.interactionType = this._interactionType;
    }
    if (this._resultDescriptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultDescriptionType = this._resultDescriptionType;
    }
    if (this._dataStoreUiConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreUiConfigs = this._dataStoreUiConfigs?.internalValue;
    }
    if (this._generativeAnswerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeAnswerConfig = this._generativeAnswerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineWidgetConfigUiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSearchRequestOrderBy = undefined;
      this._disableUserEventsCollection = undefined;
      this._enableAutocomplete = undefined;
      this._enableCreateAgentButton = undefined;
      this._enablePeopleSearch = undefined;
      this._enableQualityFeedback = undefined;
      this._enableSafeSearch = undefined;
      this._enableSearchAsYouType = undefined;
      this._enableVisualContentSummary = undefined;
      this._interactionType = undefined;
      this._resultDescriptionType = undefined;
      this._dataStoreUiConfigs.internalValue = undefined;
      this._generativeAnswerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSearchRequestOrderBy = value.defaultSearchRequestOrderBy;
      this._disableUserEventsCollection = value.disableUserEventsCollection;
      this._enableAutocomplete = value.enableAutocomplete;
      this._enableCreateAgentButton = value.enableCreateAgentButton;
      this._enablePeopleSearch = value.enablePeopleSearch;
      this._enableQualityFeedback = value.enableQualityFeedback;
      this._enableSafeSearch = value.enableSafeSearch;
      this._enableSearchAsYouType = value.enableSearchAsYouType;
      this._enableVisualContentSummary = value.enableVisualContentSummary;
      this._interactionType = value.interactionType;
      this._resultDescriptionType = value.resultDescriptionType;
      this._dataStoreUiConfigs.internalValue = value.dataStoreUiConfigs;
      this._generativeAnswerConfig.internalValue = value.generativeAnswerConfig;
    }
  }

  // default_search_request_order_by - computed: false, optional: true, required: false
  private _defaultSearchRequestOrderBy?: string; 
  public get defaultSearchRequestOrderBy() {
    return this.getStringAttribute('default_search_request_order_by');
  }
  public set defaultSearchRequestOrderBy(value: string) {
    this._defaultSearchRequestOrderBy = value;
  }
  public resetDefaultSearchRequestOrderBy() {
    this._defaultSearchRequestOrderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSearchRequestOrderByInput() {
    return this._defaultSearchRequestOrderBy;
  }

  // disable_user_events_collection - computed: false, optional: true, required: false
  private _disableUserEventsCollection?: boolean | cdktn.IResolvable; 
  public get disableUserEventsCollection() {
    return this.getBooleanAttribute('disable_user_events_collection');
  }
  public set disableUserEventsCollection(value: boolean | cdktn.IResolvable) {
    this._disableUserEventsCollection = value;
  }
  public resetDisableUserEventsCollection() {
    this._disableUserEventsCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUserEventsCollectionInput() {
    return this._disableUserEventsCollection;
  }

  // enable_autocomplete - computed: false, optional: true, required: false
  private _enableAutocomplete?: boolean | cdktn.IResolvable; 
  public get enableAutocomplete() {
    return this.getBooleanAttribute('enable_autocomplete');
  }
  public set enableAutocomplete(value: boolean | cdktn.IResolvable) {
    this._enableAutocomplete = value;
  }
  public resetEnableAutocomplete() {
    this._enableAutocomplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutocompleteInput() {
    return this._enableAutocomplete;
  }

  // enable_create_agent_button - computed: false, optional: true, required: false
  private _enableCreateAgentButton?: boolean | cdktn.IResolvable; 
  public get enableCreateAgentButton() {
    return this.getBooleanAttribute('enable_create_agent_button');
  }
  public set enableCreateAgentButton(value: boolean | cdktn.IResolvable) {
    this._enableCreateAgentButton = value;
  }
  public resetEnableCreateAgentButton() {
    this._enableCreateAgentButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCreateAgentButtonInput() {
    return this._enableCreateAgentButton;
  }

  // enable_people_search - computed: false, optional: true, required: false
  private _enablePeopleSearch?: boolean | cdktn.IResolvable; 
  public get enablePeopleSearch() {
    return this.getBooleanAttribute('enable_people_search');
  }
  public set enablePeopleSearch(value: boolean | cdktn.IResolvable) {
    this._enablePeopleSearch = value;
  }
  public resetEnablePeopleSearch() {
    this._enablePeopleSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePeopleSearchInput() {
    return this._enablePeopleSearch;
  }

  // enable_quality_feedback - computed: false, optional: true, required: false
  private _enableQualityFeedback?: boolean | cdktn.IResolvable; 
  public get enableQualityFeedback() {
    return this.getBooleanAttribute('enable_quality_feedback');
  }
  public set enableQualityFeedback(value: boolean | cdktn.IResolvable) {
    this._enableQualityFeedback = value;
  }
  public resetEnableQualityFeedback() {
    this._enableQualityFeedback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQualityFeedbackInput() {
    return this._enableQualityFeedback;
  }

  // enable_safe_search - computed: false, optional: true, required: false
  private _enableSafeSearch?: boolean | cdktn.IResolvable; 
  public get enableSafeSearch() {
    return this.getBooleanAttribute('enable_safe_search');
  }
  public set enableSafeSearch(value: boolean | cdktn.IResolvable) {
    this._enableSafeSearch = value;
  }
  public resetEnableSafeSearch() {
    this._enableSafeSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSafeSearchInput() {
    return this._enableSafeSearch;
  }

  // enable_search_as_you_type - computed: false, optional: true, required: false
  private _enableSearchAsYouType?: boolean | cdktn.IResolvable; 
  public get enableSearchAsYouType() {
    return this.getBooleanAttribute('enable_search_as_you_type');
  }
  public set enableSearchAsYouType(value: boolean | cdktn.IResolvable) {
    this._enableSearchAsYouType = value;
  }
  public resetEnableSearchAsYouType() {
    this._enableSearchAsYouType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSearchAsYouTypeInput() {
    return this._enableSearchAsYouType;
  }

  // enable_visual_content_summary - computed: false, optional: true, required: false
  private _enableVisualContentSummary?: boolean | cdktn.IResolvable; 
  public get enableVisualContentSummary() {
    return this.getBooleanAttribute('enable_visual_content_summary');
  }
  public set enableVisualContentSummary(value: boolean | cdktn.IResolvable) {
    this._enableVisualContentSummary = value;
  }
  public resetEnableVisualContentSummary() {
    this._enableVisualContentSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVisualContentSummaryInput() {
    return this._enableVisualContentSummary;
  }

  // interaction_type - computed: false, optional: true, required: false
  private _interactionType?: string; 
  public get interactionType() {
    return this.getStringAttribute('interaction_type');
  }
  public set interactionType(value: string) {
    this._interactionType = value;
  }
  public resetInteractionType() {
    this._interactionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactionTypeInput() {
    return this._interactionType;
  }

  // result_description_type - computed: false, optional: true, required: false
  private _resultDescriptionType?: string; 
  public get resultDescriptionType() {
    return this.getStringAttribute('result_description_type');
  }
  public set resultDescriptionType(value: string) {
    this._resultDescriptionType = value;
  }
  public resetResultDescriptionType() {
    this._resultDescriptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultDescriptionTypeInput() {
    return this._resultDescriptionType;
  }

  // data_store_ui_configs - computed: false, optional: true, required: false
  private _dataStoreUiConfigs = new GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList(this, "data_store_ui_configs", false);
  public get dataStoreUiConfigs() {
    return this._dataStoreUiConfigs;
  }
  public putDataStoreUiConfigs(value: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs[] | cdktn.IResolvable) {
    this._dataStoreUiConfigs.internalValue = value;
  }
  public resetDataStoreUiConfigs() {
    this._dataStoreUiConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreUiConfigsInput() {
    return this._dataStoreUiConfigs.internalValue;
  }

  // generative_answer_config - computed: false, optional: true, required: false
  private _generativeAnswerConfig = new GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference(this, "generative_answer_config");
  public get generativeAnswerConfig() {
    return this._generativeAnswerConfig;
  }
  public putGenerativeAnswerConfig(value: GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig) {
    this._generativeAnswerConfig.internalValue = value;
  }
  public resetGenerativeAnswerConfig() {
    this._generativeAnswerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeAnswerConfigInput() {
    return this._generativeAnswerConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config google_discovery_engine_widget_config}
*/
export class GoogleDiscoveryEngineWidgetConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_widget_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleDiscoveryEngineWidgetConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDiscoveryEngineWidgetConfig to import
  * @param importFromId The id of the existing GoogleDiscoveryEngineWidgetConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDiscoveryEngineWidgetConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_widget_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config google_discovery_engine_widget_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDiscoveryEngineWidgetConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDiscoveryEngineWidgetConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_widget_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '7.35.0',
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
    this._collectionId = config.collectionId;
    this._engineId = config.engineId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._widgetConfigId = config.widgetConfigId;
    this._accessSettings.internalValue = config.accessSettings;
    this._homepageSetting.internalValue = config.homepageSetting;
    this._timeouts.internalValue = config.timeouts;
    this._uiBranding.internalValue = config.uiBranding;
    this._uiSettings.internalValue = config.uiSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_id - computed: false, optional: true, required: false
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  public resetCollectionId() {
    this._collectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // engine_id - computed: false, optional: false, required: true
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
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

  // widget_config_id - computed: false, optional: true, required: false
  private _widgetConfigId?: string; 
  public get widgetConfigId() {
    return this.getStringAttribute('widget_config_id');
  }
  public set widgetConfigId(value: string) {
    this._widgetConfigId = value;
  }
  public resetWidgetConfigId() {
    this._widgetConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetConfigIdInput() {
    return this._widgetConfigId;
  }

  // access_settings - computed: false, optional: true, required: false
  private _accessSettings = new GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference(this, "access_settings");
  public get accessSettings() {
    return this._accessSettings;
  }
  public putAccessSettings(value: GoogleDiscoveryEngineWidgetConfigAccessSettings) {
    this._accessSettings.internalValue = value;
  }
  public resetAccessSettings() {
    this._accessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSettingsInput() {
    return this._accessSettings.internalValue;
  }

  // homepage_setting - computed: false, optional: true, required: false
  private _homepageSetting = new GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference(this, "homepage_setting");
  public get homepageSetting() {
    return this._homepageSetting;
  }
  public putHomepageSetting(value: GoogleDiscoveryEngineWidgetConfigHomepageSetting) {
    this._homepageSetting.internalValue = value;
  }
  public resetHomepageSetting() {
    this._homepageSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homepageSettingInput() {
    return this._homepageSetting.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDiscoveryEngineWidgetConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // ui_branding - computed: false, optional: true, required: false
  private _uiBranding = new GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference(this, "ui_branding");
  public get uiBranding() {
    return this._uiBranding;
  }
  public putUiBranding(value: GoogleDiscoveryEngineWidgetConfigUiBranding) {
    this._uiBranding.internalValue = value;
  }
  public resetUiBranding() {
    this._uiBranding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiBrandingInput() {
    return this._uiBranding.internalValue;
  }

  // ui_settings - computed: false, optional: true, required: false
  private _uiSettings = new GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference(this, "ui_settings");
  public get uiSettings() {
    return this._uiSettings;
  }
  public putUiSettings(value: GoogleDiscoveryEngineWidgetConfigUiSettings) {
    this._uiSettings.internalValue = value;
  }
  public resetUiSettings() {
    this._uiSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiSettingsInput() {
    return this._uiSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collection_id: cdktn.stringToTerraform(this._collectionId),
      engine_id: cdktn.stringToTerraform(this._engineId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      widget_config_id: cdktn.stringToTerraform(this._widgetConfigId),
      access_settings: googleDiscoveryEngineWidgetConfigAccessSettingsToTerraform(this._accessSettings.internalValue),
      homepage_setting: googleDiscoveryEngineWidgetConfigHomepageSettingToTerraform(this._homepageSetting.internalValue),
      timeouts: googleDiscoveryEngineWidgetConfigTimeoutsToTerraform(this._timeouts.internalValue),
      ui_branding: googleDiscoveryEngineWidgetConfigUiBrandingToTerraform(this._uiBranding.internalValue),
      ui_settings: googleDiscoveryEngineWidgetConfigUiSettingsToTerraform(this._uiSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collection_id: {
        value: cdktn.stringToHclTerraform(this._collectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_id: {
        value: cdktn.stringToHclTerraform(this._engineId),
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
      widget_config_id: {
        value: cdktn.stringToHclTerraform(this._widgetConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_settings: {
        value: googleDiscoveryEngineWidgetConfigAccessSettingsToHclTerraform(this._accessSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDiscoveryEngineWidgetConfigAccessSettingsList",
      },
      homepage_setting: {
        value: googleDiscoveryEngineWidgetConfigHomepageSettingToHclTerraform(this._homepageSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDiscoveryEngineWidgetConfigHomepageSettingList",
      },
      timeouts: {
        value: googleDiscoveryEngineWidgetConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDiscoveryEngineWidgetConfigTimeouts",
      },
      ui_branding: {
        value: googleDiscoveryEngineWidgetConfigUiBrandingToHclTerraform(this._uiBranding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDiscoveryEngineWidgetConfigUiBrandingList",
      },
      ui_settings: {
        value: googleDiscoveryEngineWidgetConfigUiSettingsToHclTerraform(this._uiSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDiscoveryEngineWidgetConfigUiSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
