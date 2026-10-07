/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleNetworkSecuritySecurityProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#deletion_policy GoogleNetworkSecuritySecurityProfile#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of the security profile. The Max length is 512 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#description GoogleNetworkSecuritySecurityProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#id GoogleNetworkSecuritySecurityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A map of key/value label pairs to assign to the resource.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#labels GoogleNetworkSecuritySecurityProfile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the security profile.
  * The default value is 'global'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#location GoogleNetworkSecuritySecurityProfile#location}
  */
  readonly location?: string;
  /**
  * The name of the security profile resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#name GoogleNetworkSecuritySecurityProfile#name}
  */
  readonly name: string;
  /**
  * The name of the parent this security profile belongs to.
  * Format: 'organizations/{organization_id}' or 'projects/{project_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#parent GoogleNetworkSecuritySecurityProfile#parent}
  */
  readonly parent?: string;
  /**
  * The type of security profile. 'WILDFIRE_ANALYSIS' is beta-only. Possible values: ["THREAT_PREVENTION", "URL_FILTERING", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT", "WILDFIRE_ANALYSIS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#type GoogleNetworkSecuritySecurityProfile#type}
  */
  readonly type: string;
  /**
  * custom_intercept_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#custom_intercept_profile GoogleNetworkSecuritySecurityProfile#custom_intercept_profile}
  */
  readonly customInterceptProfile?: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile;
  /**
  * custom_mirroring_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#custom_mirroring_profile GoogleNetworkSecuritySecurityProfile#custom_mirroring_profile}
  */
  readonly customMirroringProfile?: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile;
  /**
  * threat_prevention_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#threat_prevention_profile GoogleNetworkSecuritySecurityProfile#threat_prevention_profile}
  */
  readonly threatPreventionProfile?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#timeouts GoogleNetworkSecuritySecurityProfile#timeouts}
  */
  readonly timeouts?: GoogleNetworkSecuritySecurityProfileTimeouts;
  /**
  * url_filtering_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#url_filtering_profile GoogleNetworkSecuritySecurityProfile#url_filtering_profile}
  */
  readonly urlFilteringProfile?: GoogleNetworkSecuritySecurityProfileUrlFilteringProfile;
  /**
  * wildfire_analysis_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_analysis_profile GoogleNetworkSecuritySecurityProfile#wildfire_analysis_profile}
  */
  readonly wildfireAnalysisProfile?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile;
}
export interface GoogleNetworkSecuritySecurityProfileCustomInterceptProfile {
  /**
  * The Intercept Endpoint Group to which matching traffic should be intercepted.
  * Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#intercept_endpoint_group GoogleNetworkSecuritySecurityProfile#intercept_endpoint_group}
  */
  readonly interceptEndpointGroup: string;
}

export function googleNetworkSecuritySecurityProfileCustomInterceptProfileToTerraform(struct?: GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference | GoogleNetworkSecuritySecurityProfileCustomInterceptProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    intercept_endpoint_group: cdktn.stringToTerraform(struct!.interceptEndpointGroup),
  }
}


export function googleNetworkSecuritySecurityProfileCustomInterceptProfileToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference | GoogleNetworkSecuritySecurityProfileCustomInterceptProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    intercept_endpoint_group: {
      value: cdktn.stringToHclTerraform(struct!.interceptEndpointGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecuritySecurityProfileCustomInterceptProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interceptEndpointGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptEndpointGroup = this._interceptEndpointGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interceptEndpointGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interceptEndpointGroup = value.interceptEndpointGroup;
    }
  }

  // intercept_endpoint_group - computed: false, optional: false, required: true
  private _interceptEndpointGroup?: string; 
  public get interceptEndpointGroup() {
    return this.getStringAttribute('intercept_endpoint_group');
  }
  public set interceptEndpointGroup(value: string) {
    this._interceptEndpointGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptEndpointGroupInput() {
    return this._interceptEndpointGroup;
  }
}
export interface GoogleNetworkSecuritySecurityProfileCustomMirroringProfile {
  /**
  * The target downstream Mirroring Deployment Groups.
  * This field is used for Packet Broker mirroring endpoint groups to specify
  * the deployment groups that the packet should be mirrored to by the broker.
  * Format: projects/{project_id}/locations/global/mirroringDeploymentGroups/{deployment_group_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#mirroring_deployment_groups GoogleNetworkSecuritySecurityProfile#mirroring_deployment_groups}
  */
  readonly mirroringDeploymentGroups?: string[];
  /**
  * The target Mirroring Endpoint Group.
  * When a mirroring rule with this security profile attached matches a packet,
  * a replica will be mirrored to the location-local target in this group.
  * Format: projects/{project_id}/locations/global/mirroringEndpointGroups/{endpoint_group_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#mirroring_endpoint_group GoogleNetworkSecuritySecurityProfile#mirroring_endpoint_group}
  */
  readonly mirroringEndpointGroup: string;
}

export function googleNetworkSecuritySecurityProfileCustomMirroringProfileToTerraform(struct?: GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference | GoogleNetworkSecuritySecurityProfileCustomMirroringProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mirroring_deployment_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.mirroringDeploymentGroups),
    mirroring_endpoint_group: cdktn.stringToTerraform(struct!.mirroringEndpointGroup),
  }
}


export function googleNetworkSecuritySecurityProfileCustomMirroringProfileToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference | GoogleNetworkSecuritySecurityProfileCustomMirroringProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mirroring_deployment_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.mirroringDeploymentGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mirroring_endpoint_group: {
      value: cdktn.stringToHclTerraform(struct!.mirroringEndpointGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecuritySecurityProfileCustomMirroringProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirroringDeploymentGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirroringDeploymentGroups = this._mirroringDeploymentGroups;
    }
    if (this._mirroringEndpointGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirroringEndpointGroup = this._mirroringEndpointGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mirroringDeploymentGroups = undefined;
      this._mirroringEndpointGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mirroringDeploymentGroups = value.mirroringDeploymentGroups;
      this._mirroringEndpointGroup = value.mirroringEndpointGroup;
    }
  }

  // mirroring_deployment_groups - computed: false, optional: true, required: false
  private _mirroringDeploymentGroups?: string[]; 
  public get mirroringDeploymentGroups() {
    return this.getListAttribute('mirroring_deployment_groups');
  }
  public set mirroringDeploymentGroups(value: string[]) {
    this._mirroringDeploymentGroups = value;
  }
  public resetMirroringDeploymentGroups() {
    this._mirroringDeploymentGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringDeploymentGroupsInput() {
    return this._mirroringDeploymentGroups;
  }

  // mirroring_endpoint_group - computed: false, optional: false, required: true
  private _mirroringEndpointGroup?: string; 
  public get mirroringEndpointGroup() {
    return this.getStringAttribute('mirroring_endpoint_group');
  }
  public set mirroringEndpointGroup(value: string) {
    this._mirroringEndpointGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringEndpointGroupInput() {
    return this._mirroringEndpointGroup;
  }

  // mirroring_endpoint_group_type - computed: true, optional: false, required: false
  public get mirroringEndpointGroupType() {
    return this.getStringAttribute('mirroring_endpoint_group_type');
  }
}
export interface GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides {
  /**
  * Threat action override. For some threat types, only a subset of actions applies. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}
  */
  readonly action: string;
  /**
  * Required protocol to match. Possible values: ["SMTP", "SMB", "POP3", "IMAP", "HTTP2", "HTTP", "FTP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#protocol GoogleNetworkSecuritySecurityProfile#protocol}
  */
  readonly protocol: string;
}

export function googleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesToTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function googleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._protocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._protocol = value.protocol;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList extends cdktn.ComplexList {
  public internalValue? : GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides[] | cdktn.IResolvable

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
  public get(index: number): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference {
    return new GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides {
  /**
  * Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}
  */
  readonly action: string;
  /**
  * Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#severity GoogleNetworkSecuritySecurityProfile#severity}
  */
  readonly severity: string;
}

export function googleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesToTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    severity: cdktn.stringToTerraform(struct!.severity),
  }
}


export function googleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktn.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._severity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._severity = value.severity;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList extends cdktn.ComplexList {
  public internalValue? : GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[] | cdktn.IResolvable

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
  public get(index: number): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference {
    return new GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides {
  /**
  * Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}
  */
  readonly action: string;
  /**
  * Vendor-specific ID of a threat to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#threat_id GoogleNetworkSecuritySecurityProfile#threat_id}
  */
  readonly threatId: string;
}

export function googleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesToTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    threat_id: cdktn.stringToTerraform(struct!.threatId),
  }
}


export function googleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat_id: {
      value: cdktn.stringToHclTerraform(struct!.threatId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._threatId !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatId = this._threatId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._threatId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._threatId = value.threatId;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // threat_id - computed: false, optional: false, required: true
  private _threatId?: string; 
  public get threatId() {
    return this.getStringAttribute('threat_id');
  }
  public set threatId(value: string) {
    this._threatId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIdInput() {
    return this._threatId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList extends cdktn.ComplexList {
  public internalValue? : GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[] | cdktn.IResolvable

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
  public get(index: number): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference {
    return new GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecuritySecurityProfileThreatPreventionProfile {
  /**
  * antivirus_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#antivirus_overrides GoogleNetworkSecuritySecurityProfile#antivirus_overrides}
  */
  readonly antivirusOverrides?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides[] | cdktn.IResolvable;
  /**
  * severity_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#severity_overrides GoogleNetworkSecuritySecurityProfile#severity_overrides}
  */
  readonly severityOverrides?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[] | cdktn.IResolvable;
  /**
  * threat_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#threat_overrides GoogleNetworkSecuritySecurityProfile#threat_overrides}
  */
  readonly threatOverrides?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[] | cdktn.IResolvable;
}

export function googleNetworkSecuritySecurityProfileThreatPreventionProfileToTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference | GoogleNetworkSecuritySecurityProfileThreatPreventionProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    antivirus_overrides: cdktn.listMapper(googleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesToTerraform, true)(struct!.antivirusOverrides),
    severity_overrides: cdktn.listMapper(googleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesToTerraform, true)(struct!.severityOverrides),
    threat_overrides: cdktn.listMapper(googleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesToTerraform, true)(struct!.threatOverrides),
  }
}


export function googleNetworkSecuritySecurityProfileThreatPreventionProfileToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference | GoogleNetworkSecuritySecurityProfileThreatPreventionProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    antivirus_overrides: {
      value: cdktn.listMapperHcl(googleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesToHclTerraform, true)(struct!.antivirusOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList",
    },
    severity_overrides: {
      value: cdktn.listMapperHcl(googleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesToHclTerraform, true)(struct!.severityOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList",
    },
    threat_overrides: {
      value: cdktn.listMapperHcl(googleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesToHclTerraform, true)(struct!.threatOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecuritySecurityProfileThreatPreventionProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antivirusOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.antivirusOverrides = this._antivirusOverrides?.internalValue;
    }
    if (this._severityOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityOverrides = this._severityOverrides?.internalValue;
    }
    if (this._threatOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatOverrides = this._threatOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._antivirusOverrides.internalValue = undefined;
      this._severityOverrides.internalValue = undefined;
      this._threatOverrides.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._antivirusOverrides.internalValue = value.antivirusOverrides;
      this._severityOverrides.internalValue = value.severityOverrides;
      this._threatOverrides.internalValue = value.threatOverrides;
    }
  }

  // antivirus_overrides - computed: false, optional: true, required: false
  private _antivirusOverrides = new GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList(this, "antivirus_overrides", true);
  public get antivirusOverrides() {
    return this._antivirusOverrides;
  }
  public putAntivirusOverrides(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides[] | cdktn.IResolvable) {
    this._antivirusOverrides.internalValue = value;
  }
  public resetAntivirusOverrides() {
    this._antivirusOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusOverridesInput() {
    return this._antivirusOverrides.internalValue;
  }

  // severity_overrides - computed: false, optional: true, required: false
  private _severityOverrides = new GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList(this, "severity_overrides", true);
  public get severityOverrides() {
    return this._severityOverrides;
  }
  public putSeverityOverrides(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[] | cdktn.IResolvable) {
    this._severityOverrides.internalValue = value;
  }
  public resetSeverityOverrides() {
    this._severityOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityOverridesInput() {
    return this._severityOverrides.internalValue;
  }

  // threat_overrides - computed: false, optional: true, required: false
  private _threatOverrides = new GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList(this, "threat_overrides", true);
  public get threatOverrides() {
    return this._threatOverrides;
  }
  public putThreatOverrides(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[] | cdktn.IResolvable) {
    this._threatOverrides.internalValue = value;
  }
  public resetThreatOverrides() {
    this._threatOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatOverridesInput() {
    return this._threatOverrides.internalValue;
  }
}
export interface GoogleNetworkSecuritySecurityProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#create GoogleNetworkSecuritySecurityProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#delete GoogleNetworkSecuritySecurityProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#update GoogleNetworkSecuritySecurityProfile#update}
  */
  readonly update?: string;
}

export function googleNetworkSecuritySecurityProfileTimeoutsToTerraform(struct?: GoogleNetworkSecuritySecurityProfileTimeouts | cdktn.IResolvable): any {
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


export function googleNetworkSecuritySecurityProfileTimeoutsToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileTimeouts | cdktn.IResolvable): any {
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

export class GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleNetworkSecuritySecurityProfileTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileTimeouts | cdktn.IResolvable | undefined) {
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
export interface GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters {
  /**
  * The action to take when the filter is applied. Possible values: ["ALLOW", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#filtering_action GoogleNetworkSecuritySecurityProfile#filtering_action}
  */
  readonly filteringAction: string;
  /**
  * The priority of the filter within the URL filtering profile.
  * Must be an integer from 0 and 2147483647, inclusive. Lower integers indicate higher priorities.
  * The priority of a filter must be unique within a URL filtering profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#priority GoogleNetworkSecuritySecurityProfile#priority}
  */
  readonly priority: number;
  /**
  * A list of domain matcher strings that a domain name gets compared with to determine if the filter is applicable.
  * A domain name must match with at least one of the strings in the list for a filter to be applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#urls GoogleNetworkSecuritySecurityProfile#urls}
  */
  readonly urls?: string[];
}

export function googleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersToTerraform(struct?: GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filtering_action: cdktn.stringToTerraform(struct!.filteringAction),
    priority: cdktn.numberToTerraform(struct!.priority),
    urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.urls),
  }
}


export function googleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filtering_action: {
      value: cdktn.stringToHclTerraform(struct!.filteringAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    urls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.urls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filteringAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.filteringAction = this._filteringAction;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._urls !== undefined) {
      hasAnyValues = true;
      internalValueResult.urls = this._urls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filteringAction = undefined;
      this._priority = undefined;
      this._urls = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filteringAction = value.filteringAction;
      this._priority = value.priority;
      this._urls = value.urls;
    }
  }

  // filtering_action - computed: false, optional: false, required: true
  private _filteringAction?: string; 
  public get filteringAction() {
    return this.getStringAttribute('filtering_action');
  }
  public set filteringAction(value: string) {
    this._filteringAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringActionInput() {
    return this._filteringAction;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // urls - computed: false, optional: true, required: false
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }
}

export class GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList extends cdktn.ComplexList {
  public internalValue? : GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters[] | cdktn.IResolvable

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
  public get(index: number): GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference {
    return new GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecuritySecurityProfileUrlFilteringProfile {
  /**
  * url_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#url_filters GoogleNetworkSecuritySecurityProfile#url_filters}
  */
  readonly urlFilters?: GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters[] | cdktn.IResolvable;
}

export function googleNetworkSecuritySecurityProfileUrlFilteringProfileToTerraform(struct?: GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference | GoogleNetworkSecuritySecurityProfileUrlFilteringProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    url_filters: cdktn.listMapper(googleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersToTerraform, true)(struct!.urlFilters),
  }
}


export function googleNetworkSecuritySecurityProfileUrlFilteringProfileToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference | GoogleNetworkSecuritySecurityProfileUrlFilteringProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    url_filters: {
      value: cdktn.listMapperHcl(googleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersToHclTerraform, true)(struct!.urlFilters),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecuritySecurityProfileUrlFilteringProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFilters = this._urlFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileUrlFilteringProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._urlFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._urlFilters.internalValue = value.urlFilters;
    }
  }

  // url_filters - computed: false, optional: true, required: false
  private _urlFilters = new GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList(this, "url_filters", true);
  public get urlFilters() {
    return this._urlFilters;
  }
  public putUrlFilters(value: GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters[] | cdktn.IResolvable) {
    this._urlFilters.internalValue = value;
  }
  public resetUrlFilters() {
    this._urlFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFiltersInput() {
    return this._urlFilters.internalValue;
  }
}
export interface GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes {
  /**
  * The file types to match for a rule. For allowed values, see [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.securityProfiles#wildfireinlinecloudanalysisrule).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#file_types GoogleNetworkSecuritySecurityProfile#file_types}
  */
  readonly fileTypes: string[];
}

export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesToTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fileTypes),
  }
}


export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fileTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTypes = this._fileTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileTypes = value.fileTypes;
    }
  }

  // file_types - computed: false, optional: false, required: true
  private _fileTypes?: string[]; 
  public get fileTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('file_types'));
  }
  public set fileTypes(value: string[]) {
    this._fileTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypesInput() {
    return this._fileTypes;
  }
}
export interface GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules {
  /**
  * The action to take when a rule is matched. Possible values: ["ALLOW", "DENY", "ALERT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}
  */
  readonly action: string;
  /**
  * Direction of traffic to match for a rule. Possible values: ["UPLOAD", "DOWNLOAD", "BOTH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#direction GoogleNetworkSecuritySecurityProfile#direction}
  */
  readonly direction: string;
  /**
  * Defines the file selection mode for a rule. Possible values: ["ALL_FILE_TYPES", "CUSTOM_FILE_TYPES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#file_selection_mode GoogleNetworkSecuritySecurityProfile#file_selection_mode}
  */
  readonly fileSelectionMode: string;
  /**
  * custom_file_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#custom_file_types GoogleNetworkSecuritySecurityProfile#custom_file_types}
  */
  readonly customFileTypes?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes;
}

export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesToTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    direction: cdktn.stringToTerraform(struct!.direction),
    file_selection_mode: cdktn.stringToTerraform(struct!.fileSelectionMode),
    custom_file_types: googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesToTerraform(struct!.customFileTypes),
  }
}


export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_selection_mode: {
      value: cdktn.stringToHclTerraform(struct!.fileSelectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_file_types: {
      value: googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesToHclTerraform(struct!.customFileTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._fileSelectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSelectionMode = this._fileSelectionMode;
    }
    if (this._customFileTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFileTypes = this._customFileTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._direction = undefined;
      this._fileSelectionMode = undefined;
      this._customFileTypes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._direction = value.direction;
      this._fileSelectionMode = value.fileSelectionMode;
      this._customFileTypes.internalValue = value.customFileTypes;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // file_selection_mode - computed: false, optional: false, required: true
  private _fileSelectionMode?: string; 
  public get fileSelectionMode() {
    return this.getStringAttribute('file_selection_mode');
  }
  public set fileSelectionMode(value: string) {
    this._fileSelectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSelectionModeInput() {
    return this._fileSelectionMode;
  }

  // custom_file_types - computed: false, optional: true, required: false
  private _customFileTypes = new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference(this, "custom_file_types");
  public get customFileTypes() {
    return this._customFileTypes;
  }
  public putCustomFileTypes(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes) {
    this._customFileTypes.internalValue = value;
  }
  public resetCustomFileTypes() {
    this._customFileTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFileTypesInput() {
    return this._customFileTypes.internalValue;
  }
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList extends cdktn.ComplexList {
  public internalValue? : GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules[] | cdktn.IResolvable

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
  public get(index: number): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference {
    return new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides {
  /**
  * Threat action override. Possible values: ["WILDFIRE_DEFAULT_ACTION", "WILDFIRE_ALLOW", "WILDFIRE_ALERT", "WILDFIRE_DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}
  */
  readonly action: string;
  /**
  * Required protocol to match. Possible values: ["WILDFIRE_SMTP", "WILDFIRE_SMB", "WILDFIRE_POP3", "WILDFIRE_IMAP", "WILDFIRE_HTTP2", "WILDFIRE_HTTP", "WILDFIRE_FTP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#protocol GoogleNetworkSecuritySecurityProfile#protocol}
  */
  readonly protocol: string;
}

export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesToTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._protocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._protocol = value.protocol;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList extends cdktn.ComplexList {
  public internalValue? : GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides[] | cdktn.IResolvable

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
  public get(index: number): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference {
    return new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions {
  /**
  * The file name associated with the partial hash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#filename GoogleNetworkSecuritySecurityProfile#filename}
  */
  readonly filename?: string;
  /**
  * Machine learning partial hash of the file to exclude from WildFire Inline ML analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#partial_hash GoogleNetworkSecuritySecurityProfile#partial_hash}
  */
  readonly partialHash: string;
}

export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsToTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filename: cdktn.stringToTerraform(struct!.filename),
    partial_hash: cdktn.stringToTerraform(struct!.partialHash),
  }
}


export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filename: {
      value: cdktn.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partial_hash: {
      value: cdktn.stringToHclTerraform(struct!.partialHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._partialHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialHash = this._partialHash;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filename = undefined;
      this._partialHash = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filename = value.filename;
      this._partialHash = value.partialHash;
    }
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // partial_hash - computed: false, optional: false, required: true
  private _partialHash?: string; 
  public get partialHash() {
    return this.getStringAttribute('partial_hash');
  }
  public set partialHash(value: string) {
    this._partialHash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partialHashInput() {
    return this._partialHash;
  }
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList extends cdktn.ComplexList {
  public internalValue? : GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions[] | cdktn.IResolvable

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
  public get(index: number): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference {
    return new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs {
  /**
  * The action to take for a file type. Possible values: ["DISABLE", "ALERT", "ENABLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}
  */
  readonly action: string;
  /**
  * The file type to match. For allowed values, see [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.securityProfiles#inlinemlfiletype)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#file_type GoogleNetworkSecuritySecurityProfile#file_type}
  */
  readonly fileType: string;
}

export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsToTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    file_type: cdktn.stringToTerraform(struct!.fileType),
  }
}


export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_type: {
      value: cdktn.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._fileType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._fileType = value.fileType;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // file_type - computed: false, optional: false, required: true
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList extends cdktn.ComplexList {
  public internalValue? : GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs[] | cdktn.IResolvable

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
  public get(index: number): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference {
    return new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting {
  /**
  * file_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#file_exceptions GoogleNetworkSecuritySecurityProfile#file_exceptions}
  */
  readonly fileExceptions?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions[] | cdktn.IResolvable;
  /**
  * inline_ml_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#inline_ml_configs GoogleNetworkSecuritySecurityProfile#inline_ml_configs}
  */
  readonly inlineMlConfigs?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs[] | cdktn.IResolvable;
}

export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingToTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_exceptions: cdktn.listMapper(googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsToTerraform, true)(struct!.fileExceptions),
    inline_ml_configs: cdktn.listMapper(googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsToTerraform, true)(struct!.inlineMlConfigs),
  }
}


export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_exceptions: {
      value: cdktn.listMapperHcl(googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsToHclTerraform, true)(struct!.fileExceptions),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList",
    },
    inline_ml_configs: {
      value: cdktn.listMapperHcl(googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsToHclTerraform, true)(struct!.inlineMlConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExceptions = this._fileExceptions?.internalValue;
    }
    if (this._inlineMlConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineMlConfigs = this._inlineMlConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExceptions.internalValue = undefined;
      this._inlineMlConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExceptions.internalValue = value.fileExceptions;
      this._inlineMlConfigs.internalValue = value.inlineMlConfigs;
    }
  }

  // file_exceptions - computed: false, optional: true, required: false
  private _fileExceptions = new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList(this, "file_exceptions", true);
  public get fileExceptions() {
    return this._fileExceptions;
  }
  public putFileExceptions(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions[] | cdktn.IResolvable) {
    this._fileExceptions.internalValue = value;
  }
  public resetFileExceptions() {
    this._fileExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExceptionsInput() {
    return this._fileExceptions.internalValue;
  }

  // inline_ml_configs - computed: false, optional: true, required: false
  private _inlineMlConfigs = new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList(this, "inline_ml_configs", true);
  public get inlineMlConfigs() {
    return this._inlineMlConfigs;
  }
  public putInlineMlConfigs(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs[] | cdktn.IResolvable) {
    this._inlineMlConfigs.internalValue = value;
  }
  public resetInlineMlConfigs() {
    this._inlineMlConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineMlConfigsInput() {
    return this._inlineMlConfigs.internalValue;
  }
}
export interface GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides {
  /**
  * Threat action override. Possible values: ["WILDFIRE_DEFAULT_ACTION", "WILDFIRE_ALLOW", "WILDFIRE_ALERT", "WILDFIRE_DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}
  */
  readonly action: string;
  /**
  * Required protocol to match. Possible values: ["WILDFIRE_SMTP", "WILDFIRE_SMB", "WILDFIRE_POP3", "WILDFIRE_IMAP", "WILDFIRE_HTTP2", "WILDFIRE_HTTP", "WILDFIRE_FTP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#protocol GoogleNetworkSecuritySecurityProfile#protocol}
  */
  readonly protocol: string;
}

export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesToTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._protocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._protocol = value.protocol;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList extends cdktn.ComplexList {
  public internalValue? : GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides[] | cdktn.IResolvable

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
  public get(index: number): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference {
    return new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes {
  /**
  * The file types to match for a rule. For allowed values, see [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.securityProfiles#wildfiresubmissionrule)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#file_types GoogleNetworkSecuritySecurityProfile#file_types}
  */
  readonly fileTypes: string[];
}

export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesToTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fileTypes),
  }
}


export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fileTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTypes = this._fileTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileTypes = value.fileTypes;
    }
  }

  // file_types - computed: false, optional: false, required: true
  private _fileTypes?: string[]; 
  public get fileTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('file_types'));
  }
  public set fileTypes(value: string[]) {
    this._fileTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypesInput() {
    return this._fileTypes;
  }
}
export interface GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules {
  /**
  * Direction of traffic to match for a rule. Possible values: ["UPLOAD", "DOWNLOAD", "BOTH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#direction GoogleNetworkSecuritySecurityProfile#direction}
  */
  readonly direction: string;
  /**
  * Defines the file selection mode for a rule. Possible values: ["ALL_FILE_TYPES", "CUSTOM_FILE_TYPES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#file_selection_mode GoogleNetworkSecuritySecurityProfile#file_selection_mode}
  */
  readonly fileSelectionMode: string;
  /**
  * custom_file_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#custom_file_types GoogleNetworkSecuritySecurityProfile#custom_file_types}
  */
  readonly customFileTypes?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes;
}

export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesToTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    file_selection_mode: cdktn.stringToTerraform(struct!.fileSelectionMode),
    custom_file_types: googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesToTerraform(struct!.customFileTypes),
  }
}


export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_selection_mode: {
      value: cdktn.stringToHclTerraform(struct!.fileSelectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_file_types: {
      value: googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesToHclTerraform(struct!.customFileTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._fileSelectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSelectionMode = this._fileSelectionMode;
    }
    if (this._customFileTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFileTypes = this._customFileTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._fileSelectionMode = undefined;
      this._customFileTypes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._fileSelectionMode = value.fileSelectionMode;
      this._customFileTypes.internalValue = value.customFileTypes;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // file_selection_mode - computed: false, optional: false, required: true
  private _fileSelectionMode?: string; 
  public get fileSelectionMode() {
    return this.getStringAttribute('file_selection_mode');
  }
  public set fileSelectionMode(value: string) {
    this._fileSelectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSelectionModeInput() {
    return this._fileSelectionMode;
  }

  // custom_file_types - computed: false, optional: true, required: false
  private _customFileTypes = new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference(this, "custom_file_types");
  public get customFileTypes() {
    return this._customFileTypes;
  }
  public putCustomFileTypes(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes) {
    this._customFileTypes.internalValue = value;
  }
  public resetCustomFileTypes() {
    this._customFileTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFileTypesInput() {
    return this._customFileTypes.internalValue;
  }
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList extends cdktn.ComplexList {
  public internalValue? : GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules[] | cdktn.IResolvable

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
  public get(index: number): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference {
    return new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides {
  /**
  * Threat action override. Possible values: ["WILDFIRE_DEFAULT_ACTION", "WILDFIRE_ALLOW"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}
  */
  readonly action: string;
  /**
  * Vendor-specific ID of a threat to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#threat_id GoogleNetworkSecuritySecurityProfile#threat_id}
  */
  readonly threatId: string;
}

export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesToTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    threat_id: cdktn.stringToTerraform(struct!.threatId),
  }
}


export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat_id: {
      value: cdktn.stringToHclTerraform(struct!.threatId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._threatId !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatId = this._threatId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._threatId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._threatId = value.threatId;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // threat_id - computed: false, optional: false, required: true
  private _threatId?: string; 
  public get threatId() {
    return this.getStringAttribute('threat_id');
  }
  public set threatId(value: string) {
    this._threatId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIdInput() {
    return this._threatId;
  }
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList extends cdktn.ComplexList {
  public internalValue? : GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides[] | cdktn.IResolvable

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
  public get(index: number): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference {
    return new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile {
  /**
  * Whether to hold the transfer of a file while the WildFire real-time signature cloud performs a signature lookup. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_realtime_lookup GoogleNetworkSecuritySecurityProfile#wildfire_realtime_lookup}
  */
  readonly wildfireRealtimeLookup?: boolean | cdktn.IResolvable;
  /**
  * wildfire_inline_cloud_analysis_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_inline_cloud_analysis_rules GoogleNetworkSecuritySecurityProfile#wildfire_inline_cloud_analysis_rules}
  */
  readonly wildfireInlineCloudAnalysisRules?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules[] | cdktn.IResolvable;
  /**
  * wildfire_inline_ml_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_inline_ml_overrides GoogleNetworkSecuritySecurityProfile#wildfire_inline_ml_overrides}
  */
  readonly wildfireInlineMlOverrides?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides[] | cdktn.IResolvable;
  /**
  * wildfire_inline_ml_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_inline_ml_setting GoogleNetworkSecuritySecurityProfile#wildfire_inline_ml_setting}
  */
  readonly wildfireInlineMlSetting?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting;
  /**
  * wildfire_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_overrides GoogleNetworkSecuritySecurityProfile#wildfire_overrides}
  */
  readonly wildfireOverrides?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides[] | cdktn.IResolvable;
  /**
  * wildfire_submission_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_submission_rules GoogleNetworkSecuritySecurityProfile#wildfire_submission_rules}
  */
  readonly wildfireSubmissionRules?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules[] | cdktn.IResolvable;
  /**
  * wildfire_threat_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_threat_overrides GoogleNetworkSecuritySecurityProfile#wildfire_threat_overrides}
  */
  readonly wildfireThreatOverrides?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides[] | cdktn.IResolvable;
}

export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileToTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    wildfire_realtime_lookup: cdktn.booleanToTerraform(struct!.wildfireRealtimeLookup),
    wildfire_inline_cloud_analysis_rules: cdktn.listMapper(googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesToTerraform, true)(struct!.wildfireInlineCloudAnalysisRules),
    wildfire_inline_ml_overrides: cdktn.listMapper(googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesToTerraform, true)(struct!.wildfireInlineMlOverrides),
    wildfire_inline_ml_setting: googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingToTerraform(struct!.wildfireInlineMlSetting),
    wildfire_overrides: cdktn.listMapper(googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesToTerraform, true)(struct!.wildfireOverrides),
    wildfire_submission_rules: cdktn.listMapper(googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesToTerraform, true)(struct!.wildfireSubmissionRules),
    wildfire_threat_overrides: cdktn.listMapper(googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesToTerraform, true)(struct!.wildfireThreatOverrides),
  }
}


export function googleNetworkSecuritySecurityProfileWildfireAnalysisProfileToHclTerraform(struct?: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    wildfire_realtime_lookup: {
      value: cdktn.booleanToHclTerraform(struct!.wildfireRealtimeLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wildfire_inline_cloud_analysis_rules: {
      value: cdktn.listMapperHcl(googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesToHclTerraform, true)(struct!.wildfireInlineCloudAnalysisRules),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList",
    },
    wildfire_inline_ml_overrides: {
      value: cdktn.listMapperHcl(googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesToHclTerraform, true)(struct!.wildfireInlineMlOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList",
    },
    wildfire_inline_ml_setting: {
      value: googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingToHclTerraform(struct!.wildfireInlineMlSetting),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingList",
    },
    wildfire_overrides: {
      value: cdktn.listMapperHcl(googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesToHclTerraform, true)(struct!.wildfireOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList",
    },
    wildfire_submission_rules: {
      value: cdktn.listMapperHcl(googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesToHclTerraform, true)(struct!.wildfireSubmissionRules),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList",
    },
    wildfire_threat_overrides: {
      value: cdktn.listMapperHcl(googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesToHclTerraform, true)(struct!.wildfireThreatOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._wildfireRealtimeLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireRealtimeLookup = this._wildfireRealtimeLookup;
    }
    if (this._wildfireInlineCloudAnalysisRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireInlineCloudAnalysisRules = this._wildfireInlineCloudAnalysisRules?.internalValue;
    }
    if (this._wildfireInlineMlOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireInlineMlOverrides = this._wildfireInlineMlOverrides?.internalValue;
    }
    if (this._wildfireInlineMlSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireInlineMlSetting = this._wildfireInlineMlSetting?.internalValue;
    }
    if (this._wildfireOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireOverrides = this._wildfireOverrides?.internalValue;
    }
    if (this._wildfireSubmissionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireSubmissionRules = this._wildfireSubmissionRules?.internalValue;
    }
    if (this._wildfireThreatOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireThreatOverrides = this._wildfireThreatOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._wildfireRealtimeLookup = undefined;
      this._wildfireInlineCloudAnalysisRules.internalValue = undefined;
      this._wildfireInlineMlOverrides.internalValue = undefined;
      this._wildfireInlineMlSetting.internalValue = undefined;
      this._wildfireOverrides.internalValue = undefined;
      this._wildfireSubmissionRules.internalValue = undefined;
      this._wildfireThreatOverrides.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._wildfireRealtimeLookup = value.wildfireRealtimeLookup;
      this._wildfireInlineCloudAnalysisRules.internalValue = value.wildfireInlineCloudAnalysisRules;
      this._wildfireInlineMlOverrides.internalValue = value.wildfireInlineMlOverrides;
      this._wildfireInlineMlSetting.internalValue = value.wildfireInlineMlSetting;
      this._wildfireOverrides.internalValue = value.wildfireOverrides;
      this._wildfireSubmissionRules.internalValue = value.wildfireSubmissionRules;
      this._wildfireThreatOverrides.internalValue = value.wildfireThreatOverrides;
    }
  }

  // wildfire_realtime_lookup - computed: false, optional: true, required: false
  private _wildfireRealtimeLookup?: boolean | cdktn.IResolvable; 
  public get wildfireRealtimeLookup() {
    return this.getBooleanAttribute('wildfire_realtime_lookup');
  }
  public set wildfireRealtimeLookup(value: boolean | cdktn.IResolvable) {
    this._wildfireRealtimeLookup = value;
  }
  public resetWildfireRealtimeLookup() {
    this._wildfireRealtimeLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireRealtimeLookupInput() {
    return this._wildfireRealtimeLookup;
  }

  // wildfire_inline_cloud_analysis_rules - computed: false, optional: true, required: false
  private _wildfireInlineCloudAnalysisRules = new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList(this, "wildfire_inline_cloud_analysis_rules", false);
  public get wildfireInlineCloudAnalysisRules() {
    return this._wildfireInlineCloudAnalysisRules;
  }
  public putWildfireInlineCloudAnalysisRules(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules[] | cdktn.IResolvable) {
    this._wildfireInlineCloudAnalysisRules.internalValue = value;
  }
  public resetWildfireInlineCloudAnalysisRules() {
    this._wildfireInlineCloudAnalysisRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireInlineCloudAnalysisRulesInput() {
    return this._wildfireInlineCloudAnalysisRules.internalValue;
  }

  // wildfire_inline_ml_overrides - computed: false, optional: true, required: false
  private _wildfireInlineMlOverrides = new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList(this, "wildfire_inline_ml_overrides", true);
  public get wildfireInlineMlOverrides() {
    return this._wildfireInlineMlOverrides;
  }
  public putWildfireInlineMlOverrides(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides[] | cdktn.IResolvable) {
    this._wildfireInlineMlOverrides.internalValue = value;
  }
  public resetWildfireInlineMlOverrides() {
    this._wildfireInlineMlOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireInlineMlOverridesInput() {
    return this._wildfireInlineMlOverrides.internalValue;
  }

  // wildfire_inline_ml_setting - computed: false, optional: true, required: false
  private _wildfireInlineMlSetting = new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference(this, "wildfire_inline_ml_setting");
  public get wildfireInlineMlSetting() {
    return this._wildfireInlineMlSetting;
  }
  public putWildfireInlineMlSetting(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting) {
    this._wildfireInlineMlSetting.internalValue = value;
  }
  public resetWildfireInlineMlSetting() {
    this._wildfireInlineMlSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireInlineMlSettingInput() {
    return this._wildfireInlineMlSetting.internalValue;
  }

  // wildfire_overrides - computed: false, optional: true, required: false
  private _wildfireOverrides = new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList(this, "wildfire_overrides", true);
  public get wildfireOverrides() {
    return this._wildfireOverrides;
  }
  public putWildfireOverrides(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides[] | cdktn.IResolvable) {
    this._wildfireOverrides.internalValue = value;
  }
  public resetWildfireOverrides() {
    this._wildfireOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireOverridesInput() {
    return this._wildfireOverrides.internalValue;
  }

  // wildfire_submission_rules - computed: false, optional: true, required: false
  private _wildfireSubmissionRules = new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList(this, "wildfire_submission_rules", false);
  public get wildfireSubmissionRules() {
    return this._wildfireSubmissionRules;
  }
  public putWildfireSubmissionRules(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules[] | cdktn.IResolvable) {
    this._wildfireSubmissionRules.internalValue = value;
  }
  public resetWildfireSubmissionRules() {
    this._wildfireSubmissionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireSubmissionRulesInput() {
    return this._wildfireSubmissionRules.internalValue;
  }

  // wildfire_threat_overrides - computed: false, optional: true, required: false
  private _wildfireThreatOverrides = new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList(this, "wildfire_threat_overrides", true);
  public get wildfireThreatOverrides() {
    return this._wildfireThreatOverrides;
  }
  public putWildfireThreatOverrides(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides[] | cdktn.IResolvable) {
    this._wildfireThreatOverrides.internalValue = value;
  }
  public resetWildfireThreatOverrides() {
    this._wildfireThreatOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireThreatOverridesInput() {
    return this._wildfireThreatOverrides.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile google_network_security_security_profile}
*/
export class GoogleNetworkSecuritySecurityProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_security_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleNetworkSecuritySecurityProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleNetworkSecuritySecurityProfile to import
  * @param importFromId The id of the existing GoogleNetworkSecuritySecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleNetworkSecuritySecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_security_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile google_network_security_security_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleNetworkSecuritySecurityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleNetworkSecuritySecurityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_security_security_profile',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '8.6.0',
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
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._parent = config.parent;
    this._type = config.type;
    this._customInterceptProfile.internalValue = config.customInterceptProfile;
    this._customMirroringProfile.internalValue = config.customMirroringProfile;
    this._threatPreventionProfile.internalValue = config.threatPreventionProfile;
    this._timeouts.internalValue = config.timeouts;
    this._urlFilteringProfile.internalValue = config.urlFilteringProfile;
    this._wildfireAnalysisProfile.internalValue = config.wildfireAnalysisProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
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

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // custom_intercept_profile - computed: false, optional: true, required: false
  private _customInterceptProfile = new GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference(this, "custom_intercept_profile");
  public get customInterceptProfile() {
    return this._customInterceptProfile;
  }
  public putCustomInterceptProfile(value: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile) {
    this._customInterceptProfile.internalValue = value;
  }
  public resetCustomInterceptProfile() {
    this._customInterceptProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInterceptProfileInput() {
    return this._customInterceptProfile.internalValue;
  }

  // custom_mirroring_profile - computed: false, optional: true, required: false
  private _customMirroringProfile = new GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference(this, "custom_mirroring_profile");
  public get customMirroringProfile() {
    return this._customMirroringProfile;
  }
  public putCustomMirroringProfile(value: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile) {
    this._customMirroringProfile.internalValue = value;
  }
  public resetCustomMirroringProfile() {
    this._customMirroringProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMirroringProfileInput() {
    return this._customMirroringProfile.internalValue;
  }

  // threat_prevention_profile - computed: false, optional: true, required: false
  private _threatPreventionProfile = new GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference(this, "threat_prevention_profile");
  public get threatPreventionProfile() {
    return this._threatPreventionProfile;
  }
  public putThreatPreventionProfile(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile) {
    this._threatPreventionProfile.internalValue = value;
  }
  public resetThreatPreventionProfile() {
    this._threatPreventionProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatPreventionProfileInput() {
    return this._threatPreventionProfile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleNetworkSecuritySecurityProfileTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // url_filtering_profile - computed: false, optional: true, required: false
  private _urlFilteringProfile = new GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference(this, "url_filtering_profile");
  public get urlFilteringProfile() {
    return this._urlFilteringProfile;
  }
  public putUrlFilteringProfile(value: GoogleNetworkSecuritySecurityProfileUrlFilteringProfile) {
    this._urlFilteringProfile.internalValue = value;
  }
  public resetUrlFilteringProfile() {
    this._urlFilteringProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringProfileInput() {
    return this._urlFilteringProfile.internalValue;
  }

  // wildfire_analysis_profile - computed: false, optional: true, required: false
  private _wildfireAnalysisProfile = new GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference(this, "wildfire_analysis_profile");
  public get wildfireAnalysisProfile() {
    return this._wildfireAnalysisProfile;
  }
  public putWildfireAnalysisProfile(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile) {
    this._wildfireAnalysisProfile.internalValue = value;
  }
  public resetWildfireAnalysisProfile() {
    this._wildfireAnalysisProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireAnalysisProfileInput() {
    return this._wildfireAnalysisProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      parent: cdktn.stringToTerraform(this._parent),
      type: cdktn.stringToTerraform(this._type),
      custom_intercept_profile: googleNetworkSecuritySecurityProfileCustomInterceptProfileToTerraform(this._customInterceptProfile.internalValue),
      custom_mirroring_profile: googleNetworkSecuritySecurityProfileCustomMirroringProfileToTerraform(this._customMirroringProfile.internalValue),
      threat_prevention_profile: googleNetworkSecuritySecurityProfileThreatPreventionProfileToTerraform(this._threatPreventionProfile.internalValue),
      timeouts: googleNetworkSecuritySecurityProfileTimeoutsToTerraform(this._timeouts.internalValue),
      url_filtering_profile: googleNetworkSecuritySecurityProfileUrlFilteringProfileToTerraform(this._urlFilteringProfile.internalValue),
      wildfire_analysis_profile: googleNetworkSecuritySecurityProfileWildfireAnalysisProfileToTerraform(this._wildfireAnalysisProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_intercept_profile: {
        value: googleNetworkSecuritySecurityProfileCustomInterceptProfileToHclTerraform(this._customInterceptProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecuritySecurityProfileCustomInterceptProfileList",
      },
      custom_mirroring_profile: {
        value: googleNetworkSecuritySecurityProfileCustomMirroringProfileToHclTerraform(this._customMirroringProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecuritySecurityProfileCustomMirroringProfileList",
      },
      threat_prevention_profile: {
        value: googleNetworkSecuritySecurityProfileThreatPreventionProfileToHclTerraform(this._threatPreventionProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecuritySecurityProfileThreatPreventionProfileList",
      },
      timeouts: {
        value: googleNetworkSecuritySecurityProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleNetworkSecuritySecurityProfileTimeouts",
      },
      url_filtering_profile: {
        value: googleNetworkSecuritySecurityProfileUrlFilteringProfileToHclTerraform(this._urlFilteringProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecuritySecurityProfileUrlFilteringProfileList",
      },
      wildfire_analysis_profile: {
        value: googleNetworkSecuritySecurityProfileWildfireAnalysisProfileToHclTerraform(this._wildfireAnalysisProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
