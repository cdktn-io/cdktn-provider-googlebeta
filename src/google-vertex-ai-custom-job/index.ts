/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleVertexAiCustomJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#deletion_policy GoogleVertexAiCustomJob#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The display name of the CustomJob.
  * The name can be up to 128 characters long and can consist of any UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#display_name GoogleVertexAiCustomJob#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#id GoogleVertexAiCustomJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels with user-defined metadata to organize CustomJobs.
  * Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed.
  * See https://goo.gl/xmQnxf for more information and examples of labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#labels GoogleVertexAiCustomJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#project GoogleVertexAiCustomJob#project}
  */
  readonly project?: string;
  /**
  * The Google Cloud region to run the custom job in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#region GoogleVertexAiCustomJob#region}
  */
  readonly region: string;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#encryption_spec GoogleVertexAiCustomJob#encryption_spec}
  */
  readonly encryptionSpec?: GoogleVertexAiCustomJobEncryptionSpec;
  /**
  * job_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#job_spec GoogleVertexAiCustomJob#job_spec}
  */
  readonly jobSpec: GoogleVertexAiCustomJobJobSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#timeouts GoogleVertexAiCustomJob#timeouts}
  */
  readonly timeouts?: GoogleVertexAiCustomJobTimeouts;
}
export interface GoogleVertexAiCustomJobError {
}

export function googleVertexAiCustomJobErrorToTerraform(struct?: GoogleVertexAiCustomJobError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function googleVertexAiCustomJobErrorToHclTerraform(struct?: GoogleVertexAiCustomJobError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiCustomJobErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiCustomJobError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleVertexAiCustomJobErrorList extends cdktn.ComplexList {

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
  public get(index: number): GoogleVertexAiCustomJobErrorOutputReference {
    return new GoogleVertexAiCustomJobErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiCustomJobEncryptionSpec {
  /**
  * Resource name of the Cloud KMS key used to protect the resource.
  * The Cloud KMS key must be in the same region as the resource. It must have the format
  * 'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#kms_key_name GoogleVertexAiCustomJob#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleVertexAiCustomJobEncryptionSpecToTerraform(struct?: GoogleVertexAiCustomJobEncryptionSpecOutputReference | GoogleVertexAiCustomJobEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleVertexAiCustomJobEncryptionSpecToHclTerraform(struct?: GoogleVertexAiCustomJobEncryptionSpecOutputReference | GoogleVertexAiCustomJobEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiCustomJobEncryptionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiCustomJobEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface GoogleVertexAiCustomJobJobSpecBaseOutputDirectory {
  /**
  * Cloud Storage folder URL to store the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#output_uri_prefix GoogleVertexAiCustomJob#output_uri_prefix}
  */
  readonly outputUriPrefix: string;
}

export function googleVertexAiCustomJobJobSpecBaseOutputDirectoryToTerraform(struct?: GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference | GoogleVertexAiCustomJobJobSpecBaseOutputDirectory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_uri_prefix: cdktn.stringToTerraform(struct!.outputUriPrefix),
  }
}


export function googleVertexAiCustomJobJobSpecBaseOutputDirectoryToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference | GoogleVertexAiCustomJobJobSpecBaseOutputDirectory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_uri_prefix: {
      value: cdktn.stringToHclTerraform(struct!.outputUriPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiCustomJobJobSpecBaseOutputDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputUriPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputUriPrefix = this._outputUriPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpecBaseOutputDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputUriPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputUriPrefix = value.outputUriPrefix;
    }
  }

  // output_uri_prefix - computed: false, optional: false, required: true
  private _outputUriPrefix?: string; 
  public get outputUriPrefix() {
    return this.getStringAttribute('output_uri_prefix');
  }
  public set outputUriPrefix(value: string) {
    this._outputUriPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputUriPrefixInput() {
    return this._outputUriPrefix;
  }
}
export interface GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs {
  /**
  * The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#domain GoogleVertexAiCustomJob#domain}
  */
  readonly domain: string;
  /**
  * The VPC network name in the target_project where the DNS zone specified by 'domain' is visible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#target_network GoogleVertexAiCustomJob#target_network}
  */
  readonly targetNetwork: string;
  /**
  * The project ID hosting the Cloud DNS managed zone that contains the 'domain'. The Vertex AI Service Agent requires the dns.peer role on this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#target_project GoogleVertexAiCustomJob#target_project}
  */
  readonly targetProject: string;
}

export function googleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsToTerraform(struct?: GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
    target_network: cdktn.stringToTerraform(struct!.targetNetwork),
    target_project: cdktn.stringToTerraform(struct!.targetProject),
  }
}


export function googleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_network: {
      value: cdktn.stringToHclTerraform(struct!.targetNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_project: {
      value: cdktn.stringToHclTerraform(struct!.targetProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._targetNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNetwork = this._targetNetwork;
    }
    if (this._targetProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProject = this._targetProject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._targetNetwork = undefined;
      this._targetProject = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._targetNetwork = value.targetNetwork;
      this._targetProject = value.targetProject;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // target_network - computed: false, optional: false, required: true
  private _targetNetwork?: string; 
  public get targetNetwork() {
    return this.getStringAttribute('target_network');
  }
  public set targetNetwork(value: string) {
    this._targetNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkInput() {
    return this._targetNetwork;
  }

  // target_project - computed: false, optional: false, required: true
  private _targetProject?: string; 
  public get targetProject() {
    return this.getStringAttribute('target_project');
  }
  public set targetProject(value: string) {
    this._targetProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProjectInput() {
    return this._targetProject;
  }
}

export class GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference {
    return new GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiCustomJobJobSpecPscInterfaceConfig {
  /**
  * The name of the attachment to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#network_attachment GoogleVertexAiCustomJob#network_attachment}
  */
  readonly networkAttachment?: string;
  /**
  * dns_peering_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#dns_peering_configs GoogleVertexAiCustomJob#dns_peering_configs}
  */
  readonly dnsPeeringConfigs?: GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable;
}

export function googleVertexAiCustomJobJobSpecPscInterfaceConfigToTerraform(struct?: GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference | GoogleVertexAiCustomJobJobSpecPscInterfaceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_attachment: cdktn.stringToTerraform(struct!.networkAttachment),
    dns_peering_configs: cdktn.listMapper(googleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsToTerraform, true)(struct!.dnsPeeringConfigs),
  }
}


export function googleVertexAiCustomJobJobSpecPscInterfaceConfigToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference | GoogleVertexAiCustomJobJobSpecPscInterfaceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_attachment: {
      value: cdktn.stringToHclTerraform(struct!.networkAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_peering_configs: {
      value: cdktn.listMapperHcl(googleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsToHclTerraform, true)(struct!.dnsPeeringConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiCustomJobJobSpecPscInterfaceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    if (this._dnsPeeringConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPeeringConfigs = this._dnsPeeringConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpecPscInterfaceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAttachment = undefined;
      this._dnsPeeringConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAttachment = value.networkAttachment;
      this._dnsPeeringConfigs.internalValue = value.dnsPeeringConfigs;
    }
  }

  // network_attachment - computed: false, optional: true, required: false
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  public resetNetworkAttachment() {
    this._networkAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }

  // dns_peering_configs - computed: false, optional: true, required: false
  private _dnsPeeringConfigs = new GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList(this, "dns_peering_configs", false);
  public get dnsPeeringConfigs() {
    return this._dnsPeeringConfigs;
  }
  public putDnsPeeringConfigs(value: GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable) {
    this._dnsPeeringConfigs.internalValue = value;
  }
  public resetDnsPeeringConfigs() {
    this._dnsPeeringConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPeeringConfigsInput() {
    return this._dnsPeeringConfigs.internalValue;
  }
}
export interface GoogleVertexAiCustomJobJobSpecScheduling {
  /**
  * Indicates if the job should retry for internal errors after the job starts running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#disable_retries GoogleVertexAiCustomJob#disable_retries}
  */
  readonly disableRetries?: boolean | cdktn.IResolvable;
  /**
  * The maximum duration that a job will wait for the requested resources to be provisioned if the scheduling strategy is set to FLEX_START.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#max_wait_duration GoogleVertexAiCustomJob#max_wait_duration}
  */
  readonly maxWaitDuration?: string;
  /**
  * Restarts the entire CustomJob if a worker gets restarted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#restart_job_on_worker_restart GoogleVertexAiCustomJob#restart_job_on_worker_restart}
  */
  readonly restartJobOnWorkerRestart?: boolean | cdktn.IResolvable;
  /**
  * This determines which type of scheduling strategy to use. Possible values: ["STANDARD", "SPOT", "FLEX_START"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#strategy GoogleVertexAiCustomJob#strategy}
  */
  readonly strategy?: string;
  /**
  * The maximum job running time. The default is 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#timeout GoogleVertexAiCustomJob#timeout}
  */
  readonly timeout?: string;
}

export function googleVertexAiCustomJobJobSpecSchedulingToTerraform(struct?: GoogleVertexAiCustomJobJobSpecSchedulingOutputReference | GoogleVertexAiCustomJobJobSpecScheduling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_retries: cdktn.booleanToTerraform(struct!.disableRetries),
    max_wait_duration: cdktn.stringToTerraform(struct!.maxWaitDuration),
    restart_job_on_worker_restart: cdktn.booleanToTerraform(struct!.restartJobOnWorkerRestart),
    strategy: cdktn.stringToTerraform(struct!.strategy),
    timeout: cdktn.stringToTerraform(struct!.timeout),
  }
}


export function googleVertexAiCustomJobJobSpecSchedulingToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecSchedulingOutputReference | GoogleVertexAiCustomJobJobSpecScheduling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_retries: {
      value: cdktn.booleanToHclTerraform(struct!.disableRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_wait_duration: {
      value: cdktn.stringToHclTerraform(struct!.maxWaitDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restart_job_on_worker_restart: {
      value: cdktn.booleanToHclTerraform(struct!.restartJobOnWorkerRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strategy: {
      value: cdktn.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktn.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiCustomJobJobSpecSchedulingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiCustomJobJobSpecScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRetries = this._disableRetries;
    }
    if (this._maxWaitDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitDuration = this._maxWaitDuration;
    }
    if (this._restartJobOnWorkerRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartJobOnWorkerRestart = this._restartJobOnWorkerRestart;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpecScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableRetries = undefined;
      this._maxWaitDuration = undefined;
      this._restartJobOnWorkerRestart = undefined;
      this._strategy = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableRetries = value.disableRetries;
      this._maxWaitDuration = value.maxWaitDuration;
      this._restartJobOnWorkerRestart = value.restartJobOnWorkerRestart;
      this._strategy = value.strategy;
      this._timeout = value.timeout;
    }
  }

  // disable_retries - computed: false, optional: true, required: false
  private _disableRetries?: boolean | cdktn.IResolvable; 
  public get disableRetries() {
    return this.getBooleanAttribute('disable_retries');
  }
  public set disableRetries(value: boolean | cdktn.IResolvable) {
    this._disableRetries = value;
  }
  public resetDisableRetries() {
    this._disableRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRetriesInput() {
    return this._disableRetries;
  }

  // max_wait_duration - computed: false, optional: true, required: false
  private _maxWaitDuration?: string; 
  public get maxWaitDuration() {
    return this.getStringAttribute('max_wait_duration');
  }
  public set maxWaitDuration(value: string) {
    this._maxWaitDuration = value;
  }
  public resetMaxWaitDuration() {
    this._maxWaitDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitDurationInput() {
    return this._maxWaitDuration;
  }

  // restart_job_on_worker_restart - computed: false, optional: true, required: false
  private _restartJobOnWorkerRestart?: boolean | cdktn.IResolvable; 
  public get restartJobOnWorkerRestart() {
    return this.getBooleanAttribute('restart_job_on_worker_restart');
  }
  public set restartJobOnWorkerRestart(value: boolean | cdktn.IResolvable) {
    this._restartJobOnWorkerRestart = value;
  }
  public resetRestartJobOnWorkerRestart() {
    this._restartJobOnWorkerRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartJobOnWorkerRestartInput() {
    return this._restartJobOnWorkerRestart;
  }

  // strategy - computed: false, optional: true, required: false
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv {
  /**
  * Name of the environment variable. Must be a valid C identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#name GoogleVertexAiCustomJob#name}
  */
  readonly name: string;
  /**
  * Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#value GoogleVertexAiCustomJob#value}
  */
  readonly value: string;
}

export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvToTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference {
    return new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec {
  /**
  * The arguments to be passed when starting the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#args GoogleVertexAiCustomJob#args}
  */
  readonly args?: string[];
  /**
  * The command to be invoked when the container is started. It overrides the entrypoint instruction in Dockerfile when provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#command GoogleVertexAiCustomJob#command}
  */
  readonly command?: string[];
  /**
  * The URI of a container image in the Container Registry that is to be run on each worker replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#image_uri GoogleVertexAiCustomJob#image_uri}
  */
  readonly imageUri: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#env GoogleVertexAiCustomJob#env}
  */
  readonly env?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[] | cdktn.IResolvable;
}

export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecToTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    image_uri: cdktn.stringToTerraform(struct!.imageUri),
    env: cdktn.listMapper(googleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvToTerraform, true)(struct!.env),
  }
}


export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_uri: {
      value: cdktn.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktn.listMapperHcl(googleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._imageUri = undefined;
      this._env.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._imageUri = value.imageUri;
      this._env.internalValue = value.env;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // image_uri - computed: false, optional: false, required: true
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // env - computed: false, optional: true, required: false
  private _env = new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[] | cdktn.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}
export interface GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec {
  /**
  * Size in GB of the boot disk (default is 100GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#boot_disk_size_gb GoogleVertexAiCustomJob#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * Type of the disk. The default value depends on the machine type. Valid values include: "pd-ssd", "pd-standard", "pd-balanced", and "hyperdisk-balanced".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#boot_disk_type GoogleVertexAiCustomJob#boot_disk_type}
  */
  readonly bootDiskType?: string;
}

export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecToTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boot_disk_size_gb: cdktn.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktn.stringToTerraform(struct!.bootDiskType),
  }
}


export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boot_disk_size_gb: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_disk_type: {
      value: cdktn.stringToHclTerraform(struct!.bootDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
    }
  }

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }
}
export interface GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts {
  /**
  * The name of the Lustre filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#filesystem GoogleVertexAiCustomJob#filesystem}
  */
  readonly filesystem: string;
  /**
  * IP address of the Lustre instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#instance_ip GoogleVertexAiCustomJob#instance_ip}
  */
  readonly instanceIp: string;
  /**
  * Destination mount path. The Lustre file system will be mounted for the user under /mnt/lustre/<mount_point>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#mount_point GoogleVertexAiCustomJob#mount_point}
  */
  readonly mountPoint: string;
  /**
  * The unique identifier of the Lustre volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#volume_handle GoogleVertexAiCustomJob#volume_handle}
  */
  readonly volumeHandle: string;
}

export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsToTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filesystem: cdktn.stringToTerraform(struct!.filesystem),
    instance_ip: cdktn.stringToTerraform(struct!.instanceIp),
    mount_point: cdktn.stringToTerraform(struct!.mountPoint),
    volume_handle: cdktn.stringToTerraform(struct!.volumeHandle),
  }
}


export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filesystem: {
      value: cdktn.stringToHclTerraform(struct!.filesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_ip: {
      value: cdktn.stringToHclTerraform(struct!.instanceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_point: {
      value: cdktn.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_handle: {
      value: cdktn.stringToHclTerraform(struct!.volumeHandle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystem = this._filesystem;
    }
    if (this._instanceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceIp = this._instanceIp;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._volumeHandle !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeHandle = this._volumeHandle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filesystem = undefined;
      this._instanceIp = undefined;
      this._mountPoint = undefined;
      this._volumeHandle = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filesystem = value.filesystem;
      this._instanceIp = value.instanceIp;
      this._mountPoint = value.mountPoint;
      this._volumeHandle = value.volumeHandle;
    }
  }

  // filesystem - computed: false, optional: false, required: true
  private _filesystem?: string; 
  public get filesystem() {
    return this.getStringAttribute('filesystem');
  }
  public set filesystem(value: string) {
    this._filesystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem;
  }

  // instance_ip - computed: false, optional: false, required: true
  private _instanceIp?: string; 
  public get instanceIp() {
    return this.getStringAttribute('instance_ip');
  }
  public set instanceIp(value: string) {
    this._instanceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIpInput() {
    return this._instanceIp;
  }

  // mount_point - computed: false, optional: false, required: true
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }

  // volume_handle - computed: false, optional: false, required: true
  private _volumeHandle?: string; 
  public get volumeHandle() {
    return this.getStringAttribute('volume_handle');
  }
  public set volumeHandle(value: string) {
    this._volumeHandle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeHandleInput() {
    return this._volumeHandle;
  }
}

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference {
    return new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity {
  /**
  * Corresponds to the label key of a reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#key GoogleVertexAiCustomJob#key}
  */
  readonly key?: string;
  /**
  * Specifies the reservation affinity type. Possible values: "NO_RESERVATION", "ANY_RESERVATION", and "SPECIFIC_RESERVATION"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reservation_affinity_type GoogleVertexAiCustomJob#reservation_affinity_type}
  */
  readonly reservationAffinityType: string;
  /**
  * Corresponds to the label values of a reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#values GoogleVertexAiCustomJob#values}
  */
  readonly values?: string[];
}

export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityToTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    reservation_affinity_type: cdktn.stringToTerraform(struct!.reservationAffinityType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reservation_affinity_type: {
      value: cdktn.stringToHclTerraform(struct!.reservationAffinityType),
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

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._reservationAffinityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinityType = this._reservationAffinityType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._reservationAffinityType = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._reservationAffinityType = value.reservationAffinityType;
      this._values = value.values;
    }
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

  // reservation_affinity_type - computed: false, optional: false, required: true
  private _reservationAffinityType?: string; 
  public get reservationAffinityType() {
    return this.getStringAttribute('reservation_affinity_type');
  }
  public set reservationAffinityType(value: string) {
    this._reservationAffinityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityTypeInput() {
    return this._reservationAffinityType;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
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
export interface GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec {
  /**
  * The number of accelerators to attach to the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#accelerator_count GoogleVertexAiCustomJob#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * The type of accelerator(s) that may be attached to the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#accelerator_type GoogleVertexAiCustomJob#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * The type of the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#machine_type GoogleVertexAiCustomJob#machine_type}
  */
  readonly machineType?: string;
  /**
  * The topology of the TPUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#tpu_topology GoogleVertexAiCustomJob#tpu_topology}
  */
  readonly tpuTopology?: string;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reservation_affinity GoogleVertexAiCustomJob#reservation_affinity}
  */
  readonly reservationAffinity?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity;
}

export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecToTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerator_count: cdktn.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktn.stringToTerraform(struct!.acceleratorType),
    machine_type: cdktn.stringToTerraform(struct!.machineType),
    tpu_topology: cdktn.stringToTerraform(struct!.tpuTopology),
    reservation_affinity: googleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityToTerraform(struct!.reservationAffinity),
  }
}


export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accelerator_count: {
      value: cdktn.numberToHclTerraform(struct!.acceleratorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerator_type: {
      value: cdktn.stringToHclTerraform(struct!.acceleratorType),
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
    tpu_topology: {
      value: cdktn.stringToHclTerraform(struct!.tpuTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reservation_affinity: {
      value: googleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount;
    }
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._tpuTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpuTopology = this._tpuTopology;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
      this._machineType = undefined;
      this._tpuTopology = undefined;
      this._reservationAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
      this._machineType = value.machineType;
      this._tpuTopology = value.tpuTopology;
      this._reservationAffinity.internalValue = value.reservationAffinity;
    }
  }

  // accelerator_count - computed: false, optional: true, required: false
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  public resetAcceleratorCount() {
    this._acceleratorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }

  // machine_type - computed: false, optional: true, required: false
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

  // tpu_topology - computed: false, optional: true, required: false
  private _tpuTopology?: string; 
  public get tpuTopology() {
    return this.getStringAttribute('tpu_topology');
  }
  public set tpuTopology(value: string) {
    this._tpuTopology = value;
  }
  public resetTpuTopology() {
    this._tpuTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpuTopologyInput() {
    return this._tpuTopology;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }
}
export interface GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts {
  /**
  * Destination mount path. The path must be absolute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#mount_point GoogleVertexAiCustomJob#mount_point}
  */
  readonly mountPoint: string;
  /**
  * Source path exported from NFS database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#path GoogleVertexAiCustomJob#path}
  */
  readonly path: string;
  /**
  * IP address of the NFS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#server GoogleVertexAiCustomJob#server}
  */
  readonly server: string;
}

export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsToTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mount_point: cdktn.stringToTerraform(struct!.mountPoint),
    path: cdktn.stringToTerraform(struct!.path),
    server: cdktn.stringToTerraform(struct!.server),
  }
}


export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mount_point: {
      value: cdktn.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktn.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPoint = undefined;
      this._path = undefined;
      this._server = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPoint = value.mountPoint;
      this._path = value.path;
      this._server = value.server;
    }
  }

  // mount_point - computed: false, optional: false, required: true
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
}

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference {
    return new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv {
  /**
  * Name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#name GoogleVertexAiCustomJob#name}
  */
  readonly name: string;
  /**
  * Value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#value GoogleVertexAiCustomJob#value}
  */
  readonly value: string;
}

export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvToTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference {
    return new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec {
  /**
  * Command line arguments to be passed to the Python task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#args GoogleVertexAiCustomJob#args}
  */
  readonly args?: string[];
  /**
  * The URI of a container image in Artifact Registry that will run the provided Python package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#executor_image_uri GoogleVertexAiCustomJob#executor_image_uri}
  */
  readonly executorImageUri: string;
  /**
  * The Google Cloud Storage location of the Python package files which are the training program and its dependent packages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#package_uris GoogleVertexAiCustomJob#package_uris}
  */
  readonly packageUris: string[];
  /**
  * The Python module name to run after installing the packages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#python_module GoogleVertexAiCustomJob#python_module}
  */
  readonly pythonModule: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#env GoogleVertexAiCustomJob#env}
  */
  readonly env?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[] | cdktn.IResolvable;
}

export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecToTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    executor_image_uri: cdktn.stringToTerraform(struct!.executorImageUri),
    package_uris: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.packageUris),
    python_module: cdktn.stringToTerraform(struct!.pythonModule),
    env: cdktn.listMapper(googleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvToTerraform, true)(struct!.env),
  }
}


export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    executor_image_uri: {
      value: cdktn.stringToHclTerraform(struct!.executorImageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_uris: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.packageUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    python_module: {
      value: cdktn.stringToHclTerraform(struct!.pythonModule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktn.listMapperHcl(googleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._executorImageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorImageUri = this._executorImageUri;
    }
    if (this._packageUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageUris = this._packageUris;
    }
    if (this._pythonModule !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonModule = this._pythonModule;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._executorImageUri = undefined;
      this._packageUris = undefined;
      this._pythonModule = undefined;
      this._env.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._executorImageUri = value.executorImageUri;
      this._packageUris = value.packageUris;
      this._pythonModule = value.pythonModule;
      this._env.internalValue = value.env;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // executor_image_uri - computed: false, optional: false, required: true
  private _executorImageUri?: string; 
  public get executorImageUri() {
    return this.getStringAttribute('executor_image_uri');
  }
  public set executorImageUri(value: string) {
    this._executorImageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executorImageUriInput() {
    return this._executorImageUri;
  }

  // package_uris - computed: false, optional: false, required: true
  private _packageUris?: string[]; 
  public get packageUris() {
    return this.getListAttribute('package_uris');
  }
  public set packageUris(value: string[]) {
    this._packageUris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageUrisInput() {
    return this._packageUris;
  }

  // python_module - computed: false, optional: false, required: true
  private _pythonModule?: string; 
  public get pythonModule() {
    return this.getStringAttribute('python_module');
  }
  public set pythonModule(value: string) {
    this._pythonModule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonModuleInput() {
    return this._pythonModule;
  }

  // env - computed: false, optional: true, required: false
  private _env = new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[] | cdktn.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}
export interface GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs {
  /**
  * The number of worker replicas to use for this worker pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#replica_count GoogleVertexAiCustomJob#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * container_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#container_spec GoogleVertexAiCustomJob#container_spec}
  */
  readonly containerSpec?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec;
  /**
  * disk_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#disk_spec GoogleVertexAiCustomJob#disk_spec}
  */
  readonly diskSpec?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec;
  /**
  * lustre_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#lustre_mounts GoogleVertexAiCustomJob#lustre_mounts}
  */
  readonly lustreMounts?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[] | cdktn.IResolvable;
  /**
  * machine_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#machine_spec GoogleVertexAiCustomJob#machine_spec}
  */
  readonly machineSpec?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec;
  /**
  * nfs_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#nfs_mounts GoogleVertexAiCustomJob#nfs_mounts}
  */
  readonly nfsMounts?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[] | cdktn.IResolvable;
  /**
  * python_package_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#python_package_spec GoogleVertexAiCustomJob#python_package_spec}
  */
  readonly pythonPackageSpec?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec;
}

export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsToTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    replica_count: cdktn.numberToTerraform(struct!.replicaCount),
    container_spec: googleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecToTerraform(struct!.containerSpec),
    disk_spec: googleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecToTerraform(struct!.diskSpec),
    lustre_mounts: cdktn.listMapper(googleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsToTerraform, true)(struct!.lustreMounts),
    machine_spec: googleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecToTerraform(struct!.machineSpec),
    nfs_mounts: cdktn.listMapper(googleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsToTerraform, true)(struct!.nfsMounts),
    python_package_spec: googleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecToTerraform(struct!.pythonPackageSpec),
  }
}


export function googleVertexAiCustomJobJobSpecWorkerPoolSpecsToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    replica_count: {
      value: cdktn.numberToHclTerraform(struct!.replicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_spec: {
      value: googleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecToHclTerraform(struct!.containerSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecList",
    },
    disk_spec: {
      value: googleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecToHclTerraform(struct!.diskSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecList",
    },
    lustre_mounts: {
      value: cdktn.listMapperHcl(googleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsToHclTerraform, true)(struct!.lustreMounts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList",
    },
    machine_spec: {
      value: googleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecToHclTerraform(struct!.machineSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecList",
    },
    nfs_mounts: {
      value: cdktn.listMapperHcl(googleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsToHclTerraform, true)(struct!.nfsMounts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList",
    },
    python_package_spec: {
      value: googleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecToHclTerraform(struct!.pythonPackageSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCount = this._replicaCount;
    }
    if (this._containerSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerSpec = this._containerSpec?.internalValue;
    }
    if (this._diskSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSpec = this._diskSpec?.internalValue;
    }
    if (this._lustreMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lustreMounts = this._lustreMounts?.internalValue;
    }
    if (this._machineSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineSpec = this._machineSpec?.internalValue;
    }
    if (this._nfsMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsMounts = this._nfsMounts?.internalValue;
    }
    if (this._pythonPackageSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonPackageSpec = this._pythonPackageSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicaCount = undefined;
      this._containerSpec.internalValue = undefined;
      this._diskSpec.internalValue = undefined;
      this._lustreMounts.internalValue = undefined;
      this._machineSpec.internalValue = undefined;
      this._nfsMounts.internalValue = undefined;
      this._pythonPackageSpec.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicaCount = value.replicaCount;
      this._containerSpec.internalValue = value.containerSpec;
      this._diskSpec.internalValue = value.diskSpec;
      this._lustreMounts.internalValue = value.lustreMounts;
      this._machineSpec.internalValue = value.machineSpec;
      this._nfsMounts.internalValue = value.nfsMounts;
      this._pythonPackageSpec.internalValue = value.pythonPackageSpec;
    }
  }

  // replica_count - computed: false, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // container_spec - computed: false, optional: true, required: false
  private _containerSpec = new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference(this, "container_spec");
  public get containerSpec() {
    return this._containerSpec;
  }
  public putContainerSpec(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec) {
    this._containerSpec.internalValue = value;
  }
  public resetContainerSpec() {
    this._containerSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSpecInput() {
    return this._containerSpec.internalValue;
  }

  // disk_spec - computed: false, optional: true, required: false
  private _diskSpec = new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference(this, "disk_spec");
  public get diskSpec() {
    return this._diskSpec;
  }
  public putDiskSpec(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec) {
    this._diskSpec.internalValue = value;
  }
  public resetDiskSpec() {
    this._diskSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSpecInput() {
    return this._diskSpec.internalValue;
  }

  // lustre_mounts - computed: false, optional: true, required: false
  private _lustreMounts = new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList(this, "lustre_mounts", false);
  public get lustreMounts() {
    return this._lustreMounts;
  }
  public putLustreMounts(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[] | cdktn.IResolvable) {
    this._lustreMounts.internalValue = value;
  }
  public resetLustreMounts() {
    this._lustreMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lustreMountsInput() {
    return this._lustreMounts.internalValue;
  }

  // machine_spec - computed: false, optional: true, required: false
  private _machineSpec = new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference(this, "machine_spec");
  public get machineSpec() {
    return this._machineSpec;
  }
  public putMachineSpec(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec) {
    this._machineSpec.internalValue = value;
  }
  public resetMachineSpec() {
    this._machineSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSpecInput() {
    return this._machineSpec.internalValue;
  }

  // nfs_mounts - computed: false, optional: true, required: false
  private _nfsMounts = new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList(this, "nfs_mounts", false);
  public get nfsMounts() {
    return this._nfsMounts;
  }
  public putNfsMounts(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[] | cdktn.IResolvable) {
    this._nfsMounts.internalValue = value;
  }
  public resetNfsMounts() {
    this._nfsMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsMountsInput() {
    return this._nfsMounts.internalValue;
  }

  // python_package_spec - computed: false, optional: true, required: false
  private _pythonPackageSpec = new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference(this, "python_package_spec");
  public get pythonPackageSpec() {
    return this._pythonPackageSpec;
  }
  public putPythonPackageSpec(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec) {
    this._pythonPackageSpec.internalValue = value;
  }
  public resetPythonPackageSpec() {
    this._pythonPackageSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonPackageSpecInput() {
    return this._pythonPackageSpec.internalValue;
  }
}

export class GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList extends cdktn.ComplexList {
  public internalValue? : GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs[] | cdktn.IResolvable

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
  public get(index: number): GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference {
    return new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiCustomJobJobSpec {
  /**
  * Whether you want Vertex AI to enable access to the customized dashboard in training chief container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#enable_dashboard_access GoogleVertexAiCustomJob#enable_dashboard_access}
  */
  readonly enableDashboardAccess?: boolean | cdktn.IResolvable;
  /**
  * Whether you want Vertex AI to enable interactive shell access to training containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#enable_web_access GoogleVertexAiCustomJob#enable_web_access}
  */
  readonly enableWebAccess?: boolean | cdktn.IResolvable;
  /**
  * The full name of the Compute Engine network to which the Job should be peered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#network GoogleVertexAiCustomJob#network}
  */
  readonly network?: string;
  /**
  * A list of names for the reserved ip ranges under the VPC network that can be used for this job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reserved_ip_ranges GoogleVertexAiCustomJob#reserved_ip_ranges}
  */
  readonly reservedIpRanges?: string[];
  /**
  * Specifies the service account for workload run-as account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#service_account GoogleVertexAiCustomJob#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The name of a Vertex AI Tensorboard resource to which this CustomJob will upload Tensorboard logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#tensorboard GoogleVertexAiCustomJob#tensorboard}
  */
  readonly tensorboard?: string;
  /**
  * base_output_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#base_output_directory GoogleVertexAiCustomJob#base_output_directory}
  */
  readonly baseOutputDirectory?: GoogleVertexAiCustomJobJobSpecBaseOutputDirectory;
  /**
  * psc_interface_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#psc_interface_config GoogleVertexAiCustomJob#psc_interface_config}
  */
  readonly pscInterfaceConfig?: GoogleVertexAiCustomJobJobSpecPscInterfaceConfig;
  /**
  * scheduling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#scheduling GoogleVertexAiCustomJob#scheduling}
  */
  readonly scheduling?: GoogleVertexAiCustomJobJobSpecScheduling;
  /**
  * worker_pool_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#worker_pool_specs GoogleVertexAiCustomJob#worker_pool_specs}
  */
  readonly workerPoolSpecs: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs[] | cdktn.IResolvable;
}

export function googleVertexAiCustomJobJobSpecToTerraform(struct?: GoogleVertexAiCustomJobJobSpecOutputReference | GoogleVertexAiCustomJobJobSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_dashboard_access: cdktn.booleanToTerraform(struct!.enableDashboardAccess),
    enable_web_access: cdktn.booleanToTerraform(struct!.enableWebAccess),
    network: cdktn.stringToTerraform(struct!.network),
    reserved_ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.reservedIpRanges),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
    tensorboard: cdktn.stringToTerraform(struct!.tensorboard),
    base_output_directory: googleVertexAiCustomJobJobSpecBaseOutputDirectoryToTerraform(struct!.baseOutputDirectory),
    psc_interface_config: googleVertexAiCustomJobJobSpecPscInterfaceConfigToTerraform(struct!.pscInterfaceConfig),
    scheduling: googleVertexAiCustomJobJobSpecSchedulingToTerraform(struct!.scheduling),
    worker_pool_specs: cdktn.listMapper(googleVertexAiCustomJobJobSpecWorkerPoolSpecsToTerraform, true)(struct!.workerPoolSpecs),
  }
}


export function googleVertexAiCustomJobJobSpecToHclTerraform(struct?: GoogleVertexAiCustomJobJobSpecOutputReference | GoogleVertexAiCustomJobJobSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_dashboard_access: {
      value: cdktn.booleanToHclTerraform(struct!.enableDashboardAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_web_access: {
      value: cdktn.booleanToHclTerraform(struct!.enableWebAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.reservedIpRanges),
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
    tensorboard: {
      value: cdktn.stringToHclTerraform(struct!.tensorboard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_output_directory: {
      value: googleVertexAiCustomJobJobSpecBaseOutputDirectoryToHclTerraform(struct!.baseOutputDirectory),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryList",
    },
    psc_interface_config: {
      value: googleVertexAiCustomJobJobSpecPscInterfaceConfigToHclTerraform(struct!.pscInterfaceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiCustomJobJobSpecPscInterfaceConfigList",
    },
    scheduling: {
      value: googleVertexAiCustomJobJobSpecSchedulingToHclTerraform(struct!.scheduling),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiCustomJobJobSpecSchedulingList",
    },
    worker_pool_specs: {
      value: cdktn.listMapperHcl(googleVertexAiCustomJobJobSpecWorkerPoolSpecsToHclTerraform, true)(struct!.workerPoolSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiCustomJobJobSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiCustomJobJobSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDashboardAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDashboardAccess = this._enableDashboardAccess;
    }
    if (this._enableWebAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWebAccess = this._enableWebAccess;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._reservedIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedIpRanges = this._reservedIpRanges;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._tensorboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.tensorboard = this._tensorboard;
    }
    if (this._baseOutputDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseOutputDirectory = this._baseOutputDirectory?.internalValue;
    }
    if (this._pscInterfaceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscInterfaceConfig = this._pscInterfaceConfig?.internalValue;
    }
    if (this._scheduling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduling = this._scheduling?.internalValue;
    }
    if (this._workerPoolSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPoolSpecs = this._workerPoolSpecs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiCustomJobJobSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableDashboardAccess = undefined;
      this._enableWebAccess = undefined;
      this._network = undefined;
      this._reservedIpRanges = undefined;
      this._serviceAccount = undefined;
      this._tensorboard = undefined;
      this._baseOutputDirectory.internalValue = undefined;
      this._pscInterfaceConfig.internalValue = undefined;
      this._scheduling.internalValue = undefined;
      this._workerPoolSpecs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableDashboardAccess = value.enableDashboardAccess;
      this._enableWebAccess = value.enableWebAccess;
      this._network = value.network;
      this._reservedIpRanges = value.reservedIpRanges;
      this._serviceAccount = value.serviceAccount;
      this._tensorboard = value.tensorboard;
      this._baseOutputDirectory.internalValue = value.baseOutputDirectory;
      this._pscInterfaceConfig.internalValue = value.pscInterfaceConfig;
      this._scheduling.internalValue = value.scheduling;
      this._workerPoolSpecs.internalValue = value.workerPoolSpecs;
    }
  }

  // enable_dashboard_access - computed: false, optional: true, required: false
  private _enableDashboardAccess?: boolean | cdktn.IResolvable; 
  public get enableDashboardAccess() {
    return this.getBooleanAttribute('enable_dashboard_access');
  }
  public set enableDashboardAccess(value: boolean | cdktn.IResolvable) {
    this._enableDashboardAccess = value;
  }
  public resetEnableDashboardAccess() {
    this._enableDashboardAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDashboardAccessInput() {
    return this._enableDashboardAccess;
  }

  // enable_web_access - computed: false, optional: true, required: false
  private _enableWebAccess?: boolean | cdktn.IResolvable; 
  public get enableWebAccess() {
    return this.getBooleanAttribute('enable_web_access');
  }
  public set enableWebAccess(value: boolean | cdktn.IResolvable) {
    this._enableWebAccess = value;
  }
  public resetEnableWebAccess() {
    this._enableWebAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebAccessInput() {
    return this._enableWebAccess;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // reserved_ip_ranges - computed: false, optional: true, required: false
  private _reservedIpRanges?: string[]; 
  public get reservedIpRanges() {
    return this.getListAttribute('reserved_ip_ranges');
  }
  public set reservedIpRanges(value: string[]) {
    this._reservedIpRanges = value;
  }
  public resetReservedIpRanges() {
    this._reservedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpRangesInput() {
    return this._reservedIpRanges;
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

  // tensorboard - computed: false, optional: true, required: false
  private _tensorboard?: string; 
  public get tensorboard() {
    return this.getStringAttribute('tensorboard');
  }
  public set tensorboard(value: string) {
    this._tensorboard = value;
  }
  public resetTensorboard() {
    this._tensorboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tensorboardInput() {
    return this._tensorboard;
  }

  // base_output_directory - computed: false, optional: true, required: false
  private _baseOutputDirectory = new GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference(this, "base_output_directory");
  public get baseOutputDirectory() {
    return this._baseOutputDirectory;
  }
  public putBaseOutputDirectory(value: GoogleVertexAiCustomJobJobSpecBaseOutputDirectory) {
    this._baseOutputDirectory.internalValue = value;
  }
  public resetBaseOutputDirectory() {
    this._baseOutputDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseOutputDirectoryInput() {
    return this._baseOutputDirectory.internalValue;
  }

  // psc_interface_config - computed: false, optional: true, required: false
  private _pscInterfaceConfig = new GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference(this, "psc_interface_config");
  public get pscInterfaceConfig() {
    return this._pscInterfaceConfig;
  }
  public putPscInterfaceConfig(value: GoogleVertexAiCustomJobJobSpecPscInterfaceConfig) {
    this._pscInterfaceConfig.internalValue = value;
  }
  public resetPscInterfaceConfig() {
    this._pscInterfaceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscInterfaceConfigInput() {
    return this._pscInterfaceConfig.internalValue;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new GoogleVertexAiCustomJobJobSpecSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: GoogleVertexAiCustomJobJobSpecScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // worker_pool_specs - computed: false, optional: false, required: true
  private _workerPoolSpecs = new GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList(this, "worker_pool_specs", false);
  public get workerPoolSpecs() {
    return this._workerPoolSpecs;
  }
  public putWorkerPoolSpecs(value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs[] | cdktn.IResolvable) {
    this._workerPoolSpecs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolSpecsInput() {
    return this._workerPoolSpecs.internalValue;
  }
}
export interface GoogleVertexAiCustomJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#create GoogleVertexAiCustomJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#delete GoogleVertexAiCustomJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#update GoogleVertexAiCustomJob#update}
  */
  readonly update?: string;
}

export function googleVertexAiCustomJobTimeoutsToTerraform(struct?: GoogleVertexAiCustomJobTimeouts | cdktn.IResolvable): any {
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


export function googleVertexAiCustomJobTimeoutsToHclTerraform(struct?: GoogleVertexAiCustomJobTimeouts | cdktn.IResolvable): any {
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

export class GoogleVertexAiCustomJobTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVertexAiCustomJobTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleVertexAiCustomJobTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job google_vertex_ai_custom_job}
*/
export class GoogleVertexAiCustomJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_custom_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleVertexAiCustomJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVertexAiCustomJob to import
  * @param importFromId The id of the existing GoogleVertexAiCustomJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVertexAiCustomJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_custom_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job google_vertex_ai_custom_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiCustomJobConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiCustomJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_custom_job',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '8.9.0',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._region = config.region;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._jobSpec.internalValue = config.jobSpec;
    this._timeouts.internalValue = config.timeouts;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // error - computed: true, optional: false, required: false
  private _error = new GoogleVertexAiCustomJobErrorList(this, "error", false);
  public get error() {
    return this._error;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // web_access_uris - computed: true, optional: false, required: false
  private _webAccessUris = new cdktn.StringMap(this, "web_access_uris");
  public get webAccessUris() {
    return this._webAccessUris;
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new GoogleVertexAiCustomJobEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: GoogleVertexAiCustomJobEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // job_spec - computed: false, optional: false, required: true
  private _jobSpec = new GoogleVertexAiCustomJobJobSpecOutputReference(this, "job_spec");
  public get jobSpec() {
    return this._jobSpec;
  }
  public putJobSpec(value: GoogleVertexAiCustomJobJobSpec) {
    this._jobSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobSpecInput() {
    return this._jobSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiCustomJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiCustomJobTimeouts) {
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
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      encryption_spec: googleVertexAiCustomJobEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      job_spec: googleVertexAiCustomJobJobSpecToTerraform(this._jobSpec.internalValue),
      timeouts: googleVertexAiCustomJobTimeoutsToTerraform(this._timeouts.internalValue),
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
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_spec: {
        value: googleVertexAiCustomJobEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiCustomJobEncryptionSpecList",
      },
      job_spec: {
        value: googleVertexAiCustomJobJobSpecToHclTerraform(this._jobSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiCustomJobJobSpecList",
      },
      timeouts: {
        value: googleVertexAiCustomJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVertexAiCustomJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
