/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleDnsResponsePolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the response policy, such as 'My new response policy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy#description GoogleDnsResponsePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy#id GoogleDnsResponsePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy#project GoogleDnsResponsePolicy#project}
  */
  readonly project?: string;
  /**
  * The user assigned name for this Response Policy, such as 'myresponsepolicy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy#response_policy_name GoogleDnsResponsePolicy#response_policy_name}
  */
  readonly responsePolicyName: string;
  /**
  * gke_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy#gke_clusters GoogleDnsResponsePolicy#gke_clusters}
  */
  readonly gkeClusters?: GoogleDnsResponsePolicyGkeClusters[] | cdktn.IResolvable;
  /**
  * networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy#networks GoogleDnsResponsePolicy#networks}
  */
  readonly networks?: GoogleDnsResponsePolicyNetworks[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy#timeouts GoogleDnsResponsePolicy#timeouts}
  */
  readonly timeouts?: GoogleDnsResponsePolicyTimeouts;
}
export interface GoogleDnsResponsePolicyGkeClusters {
  /**
  * The resource name of the cluster to bind this ManagedZone to.
  * This should be specified in the format like
  * 'projects/* /locations/* /clusters/*'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy#gke_cluster_name GoogleDnsResponsePolicy#gke_cluster_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly gkeClusterName: string;
}

export function googleDnsResponsePolicyGkeClustersToTerraform(struct?: GoogleDnsResponsePolicyGkeClusters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gke_cluster_name: cdktn.stringToTerraform(struct!.gkeClusterName),
  }
}


export function googleDnsResponsePolicyGkeClustersToHclTerraform(struct?: GoogleDnsResponsePolicyGkeClusters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gke_cluster_name: {
      value: cdktn.stringToHclTerraform(struct!.gkeClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsResponsePolicyGkeClustersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDnsResponsePolicyGkeClusters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gkeClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeClusterName = this._gkeClusterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsResponsePolicyGkeClusters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gkeClusterName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gkeClusterName = value.gkeClusterName;
    }
  }

  // gke_cluster_name - computed: false, optional: false, required: true
  private _gkeClusterName?: string; 
  public get gkeClusterName() {
    return this.getStringAttribute('gke_cluster_name');
  }
  public set gkeClusterName(value: string) {
    this._gkeClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterNameInput() {
    return this._gkeClusterName;
  }
}

export class GoogleDnsResponsePolicyGkeClustersList extends cdktn.ComplexList {
  public internalValue? : GoogleDnsResponsePolicyGkeClusters[] | cdktn.IResolvable

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
  public get(index: number): GoogleDnsResponsePolicyGkeClustersOutputReference {
    return new GoogleDnsResponsePolicyGkeClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsResponsePolicyNetworks {
  /**
  * The fully qualified URL of the VPC network to bind to.
  * This should be formatted like
  * 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy#network_url GoogleDnsResponsePolicy#network_url}
  */
  readonly networkUrl: string;
}

export function googleDnsResponsePolicyNetworksToTerraform(struct?: GoogleDnsResponsePolicyNetworks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_url: cdktn.stringToTerraform(struct!.networkUrl),
  }
}


export function googleDnsResponsePolicyNetworksToHclTerraform(struct?: GoogleDnsResponsePolicyNetworks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_url: {
      value: cdktn.stringToHclTerraform(struct!.networkUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsResponsePolicyNetworksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDnsResponsePolicyNetworks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUrl = this._networkUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsResponsePolicyNetworks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkUrl = value.networkUrl;
    }
  }

  // network_url - computed: false, optional: false, required: true
  private _networkUrl?: string; 
  public get networkUrl() {
    return this.getStringAttribute('network_url');
  }
  public set networkUrl(value: string) {
    this._networkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUrlInput() {
    return this._networkUrl;
  }
}

export class GoogleDnsResponsePolicyNetworksList extends cdktn.ComplexList {
  public internalValue? : GoogleDnsResponsePolicyNetworks[] | cdktn.IResolvable

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
  public get(index: number): GoogleDnsResponsePolicyNetworksOutputReference {
    return new GoogleDnsResponsePolicyNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsResponsePolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy#create GoogleDnsResponsePolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy#delete GoogleDnsResponsePolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy#update GoogleDnsResponsePolicy#update}
  */
  readonly update?: string;
}

export function googleDnsResponsePolicyTimeoutsToTerraform(struct?: GoogleDnsResponsePolicyTimeouts | cdktn.IResolvable): any {
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


export function googleDnsResponsePolicyTimeoutsToHclTerraform(struct?: GoogleDnsResponsePolicyTimeouts | cdktn.IResolvable): any {
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

export class GoogleDnsResponsePolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDnsResponsePolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleDnsResponsePolicyTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy google_dns_response_policy}
*/
export class GoogleDnsResponsePolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_response_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleDnsResponsePolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDnsResponsePolicy to import
  * @param importFromId The id of the existing GoogleDnsResponsePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDnsResponsePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dns_response_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_dns_response_policy google_dns_response_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDnsResponsePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDnsResponsePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_response_policy',
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
    this._id = config.id;
    this._project = config.project;
    this._responsePolicyName = config.responsePolicyName;
    this._gkeClusters.internalValue = config.gkeClusters;
    this._networks.internalValue = config.networks;
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

  // response_policy_name - computed: false, optional: false, required: true
  private _responsePolicyName?: string; 
  public get responsePolicyName() {
    return this.getStringAttribute('response_policy_name');
  }
  public set responsePolicyName(value: string) {
    this._responsePolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePolicyNameInput() {
    return this._responsePolicyName;
  }

  // gke_clusters - computed: false, optional: true, required: false
  private _gkeClusters = new GoogleDnsResponsePolicyGkeClustersList(this, "gke_clusters", false);
  public get gkeClusters() {
    return this._gkeClusters;
  }
  public putGkeClusters(value: GoogleDnsResponsePolicyGkeClusters[] | cdktn.IResolvable) {
    this._gkeClusters.internalValue = value;
  }
  public resetGkeClusters() {
    this._gkeClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClustersInput() {
    return this._gkeClusters.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new GoogleDnsResponsePolicyNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: GoogleDnsResponsePolicyNetworks[] | cdktn.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDnsResponsePolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDnsResponsePolicyTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
      response_policy_name: cdktn.stringToTerraform(this._responsePolicyName),
      gke_clusters: cdktn.listMapper(googleDnsResponsePolicyGkeClustersToTerraform, true)(this._gkeClusters.internalValue),
      networks: cdktn.listMapper(googleDnsResponsePolicyNetworksToTerraform, true)(this._networks.internalValue),
      timeouts: googleDnsResponsePolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      response_policy_name: {
        value: cdktn.stringToHclTerraform(this._responsePolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_clusters: {
        value: cdktn.listMapperHcl(googleDnsResponsePolicyGkeClustersToHclTerraform, true)(this._gkeClusters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDnsResponsePolicyGkeClustersList",
      },
      networks: {
        value: cdktn.listMapperHcl(googleDnsResponsePolicyNetworksToHclTerraform, true)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDnsResponsePolicyNetworksList",
      },
      timeouts: {
        value: googleDnsResponsePolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDnsResponsePolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
