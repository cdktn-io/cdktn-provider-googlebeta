/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleResourceManagerBoundaryConfig extends cdktn.TerraformMetaArguments {
  /**
  * The user-assigned ID for the Boundary, which becomes the final component
  * of the Boundary's resource name. Must be unique within the parent.
  * Must be 6 to 30 lowercase ASCII letters, digits, or hyphens, must start
  * with a letter, and may not end with a hyphen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#boundary_id GoogleResourceManagerBoundary#boundary_id}
  */
  readonly boundaryId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#deletion_policy GoogleResourceManagerBoundary#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Human-readable display name of the Boundary. When present it must be
  * between 4 and 30 characters. Allowed characters are lowercase and
  * uppercase letters, numbers, hyphen, single-quote, double-quote, space,
  * and exclamation point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#display_name GoogleResourceManagerBoundary#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#id GoogleResourceManagerBoundary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The parent resource under which the Boundary is created. Must be of the
  * form 'organizations/{organization_id}' or 'folders/{folder_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#parent GoogleResourceManagerBoundary#parent}
  */
  readonly parent: string;
  /**
  * resource_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#resource_filter GoogleResourceManagerBoundary#resource_filter}
  */
  readonly resourceFilter?: GoogleResourceManagerBoundaryResourceFilter;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#timeouts GoogleResourceManagerBoundary#timeouts}
  */
  readonly timeouts?: GoogleResourceManagerBoundaryTimeouts;
}
export interface GoogleResourceManagerBoundaryResourceFilterTagFilter {
  /**
  * The namespaced name of the tag key, in the form
  * '{parent_id}/{tag_key_short_name}', for example '123456789012/env'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#tag_key GoogleResourceManagerBoundary#tag_key}
  */
  readonly tagKey: string;
  /**
  * The allowed short name of the tag value, for example 'production'.
  * A project matches this tag filter if its effective tag value for
  * the given 'tagKey' matches this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#tag_value GoogleResourceManagerBoundary#tag_value}
  */
  readonly tagValue: string;
}

export function googleResourceManagerBoundaryResourceFilterTagFilterToTerraform(struct?: GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference | GoogleResourceManagerBoundaryResourceFilterTagFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tag_key: cdktn.stringToTerraform(struct!.tagKey),
    tag_value: cdktn.stringToTerraform(struct!.tagValue),
  }
}


export function googleResourceManagerBoundaryResourceFilterTagFilterToHclTerraform(struct?: GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference | GoogleResourceManagerBoundaryResourceFilterTagFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tag_key: {
      value: cdktn.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktn.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleResourceManagerBoundaryResourceFilterTagFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleResourceManagerBoundaryResourceFilterTagFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}
export interface GoogleResourceManagerBoundaryResourceFilter {
  /**
  * tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#tag_filter GoogleResourceManagerBoundary#tag_filter}
  */
  readonly tagFilter: GoogleResourceManagerBoundaryResourceFilterTagFilter;
}

export function googleResourceManagerBoundaryResourceFilterToTerraform(struct?: GoogleResourceManagerBoundaryResourceFilterOutputReference | GoogleResourceManagerBoundaryResourceFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tag_filter: googleResourceManagerBoundaryResourceFilterTagFilterToTerraform(struct!.tagFilter),
  }
}


export function googleResourceManagerBoundaryResourceFilterToHclTerraform(struct?: GoogleResourceManagerBoundaryResourceFilterOutputReference | GoogleResourceManagerBoundaryResourceFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tag_filter: {
      value: googleResourceManagerBoundaryResourceFilterTagFilterToHclTerraform(struct!.tagFilter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleResourceManagerBoundaryResourceFilterTagFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleResourceManagerBoundaryResourceFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleResourceManagerBoundaryResourceFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilter = this._tagFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleResourceManagerBoundaryResourceFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tagFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tagFilter.internalValue = value.tagFilter;
    }
  }

  // tag_filter - computed: false, optional: false, required: true
  private _tagFilter = new GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference(this, "tag_filter");
  public get tagFilter() {
    return this._tagFilter;
  }
  public putTagFilter(value: GoogleResourceManagerBoundaryResourceFilterTagFilter) {
    this._tagFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFilterInput() {
    return this._tagFilter.internalValue;
  }
}
export interface GoogleResourceManagerBoundaryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#create GoogleResourceManagerBoundary#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#delete GoogleResourceManagerBoundary#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#update GoogleResourceManagerBoundary#update}
  */
  readonly update?: string;
}

export function googleResourceManagerBoundaryTimeoutsToTerraform(struct?: GoogleResourceManagerBoundaryTimeouts | cdktn.IResolvable): any {
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


export function googleResourceManagerBoundaryTimeoutsToHclTerraform(struct?: GoogleResourceManagerBoundaryTimeouts | cdktn.IResolvable): any {
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

export class GoogleResourceManagerBoundaryTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleResourceManagerBoundaryTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleResourceManagerBoundaryTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary google_resource_manager_boundary}
*/
export class GoogleResourceManagerBoundary extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_resource_manager_boundary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleResourceManagerBoundary resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleResourceManagerBoundary to import
  * @param importFromId The id of the existing GoogleResourceManagerBoundary that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleResourceManagerBoundary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_resource_manager_boundary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary google_resource_manager_boundary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleResourceManagerBoundaryConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleResourceManagerBoundaryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_resource_manager_boundary',
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
    this._boundaryId = config.boundaryId;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._parent = config.parent;
    this._resourceFilter.internalValue = config.resourceFilter;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boundary_id - computed: false, optional: false, required: true
  private _boundaryId?: string; 
  public get boundaryId() {
    return this.getStringAttribute('boundary_id');
  }
  public set boundaryId(value: string) {
    this._boundaryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boundaryIdInput() {
    return this._boundaryId;
  }

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

  // management_project - computed: true, optional: false, required: false
  public get managementProject() {
    return this.getStringAttribute('management_project');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // resource_filter - computed: false, optional: true, required: false
  private _resourceFilter = new GoogleResourceManagerBoundaryResourceFilterOutputReference(this, "resource_filter");
  public get resourceFilter() {
    return this._resourceFilter;
  }
  public putResourceFilter(value: GoogleResourceManagerBoundaryResourceFilter) {
    this._resourceFilter.internalValue = value;
  }
  public resetResourceFilter() {
    this._resourceFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFilterInput() {
    return this._resourceFilter.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleResourceManagerBoundaryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleResourceManagerBoundaryTimeouts) {
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
      boundary_id: cdktn.stringToTerraform(this._boundaryId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      parent: cdktn.stringToTerraform(this._parent),
      resource_filter: googleResourceManagerBoundaryResourceFilterToTerraform(this._resourceFilter.internalValue),
      timeouts: googleResourceManagerBoundaryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boundary_id: {
        value: cdktn.stringToHclTerraform(this._boundaryId),
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
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_filter: {
        value: googleResourceManagerBoundaryResourceFilterToHclTerraform(this._resourceFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleResourceManagerBoundaryResourceFilterList",
      },
      timeouts: {
        value: googleResourceManagerBoundaryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleResourceManagerBoundaryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
