/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleIamPrincipalAccessBoundaryPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * User defined annotations. See https://google.aip.dev/148#annotations
  * for more details such as format and size limitations
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#annotations GoogleIamPrincipalAccessBoundaryPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#deletion_policy GoogleIamPrincipalAccessBoundaryPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the principal access boundary policy. Must be less than or equal to 63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#display_name GoogleIamPrincipalAccessBoundaryPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#id GoogleIamPrincipalAccessBoundaryPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location the principal access boundary policy is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#location GoogleIamPrincipalAccessBoundaryPolicy#location}
  */
  readonly location: string;
  /**
  * The parent organization of the principal access boundary policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#organization GoogleIamPrincipalAccessBoundaryPolicy#organization}
  */
  readonly organization: string;
  /**
  * The ID to use to create the principal access boundary policy.
  * This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, hyphens, or dots. Pattern, /a-z{2,62}/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#principal_access_boundary_policy_id GoogleIamPrincipalAccessBoundaryPolicy#principal_access_boundary_policy_id}
  */
  readonly principalAccessBoundaryPolicyId: string;
  /**
  * details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#details GoogleIamPrincipalAccessBoundaryPolicy#details}
  */
  readonly details?: GoogleIamPrincipalAccessBoundaryPolicyDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#timeouts GoogleIamPrincipalAccessBoundaryPolicy#timeouts}
  */
  readonly timeouts?: GoogleIamPrincipalAccessBoundaryPolicyTimeouts;
}
export interface GoogleIamPrincipalAccessBoundaryPolicyDetailsRules {
  /**
  * The description of the principal access boundary policy rule. Must be less than or equal to 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#description GoogleIamPrincipalAccessBoundaryPolicy#description}
  */
  readonly description?: string;
  /**
  * The access relationship of principals to the resources in this rule.
  * Possible values: ALLOW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#effect GoogleIamPrincipalAccessBoundaryPolicy#effect}
  */
  readonly effect: string;
  /**
  * A list of Cloud Resource Manager resources. The resource
  * and all the descendants are included. The number of resources in a policy
  * is limited to 500 across all rules.
  * The following resource types are supported:
  * * Organizations, such as '//cloudresourcemanager.googleapis.com/organizations/123'.
  * * Folders, such as '//cloudresourcemanager.googleapis.com/folders/123'.
  * * Projects, such as '//cloudresourcemanager.googleapis.com/projects/123'
  * or '//cloudresourcemanager.googleapis.com/projects/my-project-id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#resources GoogleIamPrincipalAccessBoundaryPolicy#resources}
  */
  readonly resources: string[];
}

export function googleIamPrincipalAccessBoundaryPolicyDetailsRulesToTerraform(struct?: GoogleIamPrincipalAccessBoundaryPolicyDetailsRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    effect: cdktn.stringToTerraform(struct!.effect),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function googleIamPrincipalAccessBoundaryPolicyDetailsRulesToHclTerraform(struct?: GoogleIamPrincipalAccessBoundaryPolicyDetailsRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effect: {
      value: cdktn.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleIamPrincipalAccessBoundaryPolicyDetailsRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIamPrincipalAccessBoundaryPolicyDetailsRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._effect = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._effect = value.effect;
      this._resources = value.resources;
    }
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

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList extends cdktn.ComplexList {
  public internalValue? : GoogleIamPrincipalAccessBoundaryPolicyDetailsRules[] | cdktn.IResolvable

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
  public get(index: number): GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference {
    return new GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIamPrincipalAccessBoundaryPolicyDetails {
  /**
  * The version number that indicates which Google Cloud services
  * are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the
  * PAB policy version will be set to the current latest version, and this version
  * won't get updated when new versions are released.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#enforcement_version GoogleIamPrincipalAccessBoundaryPolicy#enforcement_version}
  */
  readonly enforcementVersion?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#rules GoogleIamPrincipalAccessBoundaryPolicy#rules}
  */
  readonly rules: GoogleIamPrincipalAccessBoundaryPolicyDetailsRules[] | cdktn.IResolvable;
}

export function googleIamPrincipalAccessBoundaryPolicyDetailsToTerraform(struct?: GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference | GoogleIamPrincipalAccessBoundaryPolicyDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcement_version: cdktn.stringToTerraform(struct!.enforcementVersion),
    rules: cdktn.listMapper(googleIamPrincipalAccessBoundaryPolicyDetailsRulesToTerraform, true)(struct!.rules),
  }
}


export function googleIamPrincipalAccessBoundaryPolicyDetailsToHclTerraform(struct?: GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference | GoogleIamPrincipalAccessBoundaryPolicyDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforcement_version: {
      value: cdktn.stringToHclTerraform(struct!.enforcementVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktn.listMapperHcl(googleIamPrincipalAccessBoundaryPolicyDetailsRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIamPrincipalAccessBoundaryPolicyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementVersion = this._enforcementVersion;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIamPrincipalAccessBoundaryPolicyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforcementVersion = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforcementVersion = value.enforcementVersion;
      this._rules.internalValue = value.rules;
    }
  }

  // enforcement_version - computed: true, optional: true, required: false
  private _enforcementVersion?: string; 
  public get enforcementVersion() {
    return this.getStringAttribute('enforcement_version');
  }
  public set enforcementVersion(value: string) {
    this._enforcementVersion = value;
  }
  public resetEnforcementVersion() {
    this._enforcementVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementVersionInput() {
    return this._enforcementVersion;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: GoogleIamPrincipalAccessBoundaryPolicyDetailsRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface GoogleIamPrincipalAccessBoundaryPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#create GoogleIamPrincipalAccessBoundaryPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#delete GoogleIamPrincipalAccessBoundaryPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#update GoogleIamPrincipalAccessBoundaryPolicy#update}
  */
  readonly update?: string;
}

export function googleIamPrincipalAccessBoundaryPolicyTimeoutsToTerraform(struct?: GoogleIamPrincipalAccessBoundaryPolicyTimeouts | cdktn.IResolvable): any {
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


export function googleIamPrincipalAccessBoundaryPolicyTimeoutsToHclTerraform(struct?: GoogleIamPrincipalAccessBoundaryPolicyTimeouts | cdktn.IResolvable): any {
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

export class GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleIamPrincipalAccessBoundaryPolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleIamPrincipalAccessBoundaryPolicyTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy google_iam_principal_access_boundary_policy}
*/
export class GoogleIamPrincipalAccessBoundaryPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_principal_access_boundary_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleIamPrincipalAccessBoundaryPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleIamPrincipalAccessBoundaryPolicy to import
  * @param importFromId The id of the existing GoogleIamPrincipalAccessBoundaryPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleIamPrincipalAccessBoundaryPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_principal_access_boundary_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_iam_principal_access_boundary_policy google_iam_principal_access_boundary_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleIamPrincipalAccessBoundaryPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleIamPrincipalAccessBoundaryPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_principal_access_boundary_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '7.33.0',
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
    this._annotations = config.annotations;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._organization = config.organization;
    this._principalAccessBoundaryPolicyId = config.principalAccessBoundaryPolicyId;
    this._details.internalValue = config.details;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktn.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // principal_access_boundary_policy_id - computed: false, optional: false, required: true
  private _principalAccessBoundaryPolicyId?: string; 
  public get principalAccessBoundaryPolicyId() {
    return this.getStringAttribute('principal_access_boundary_policy_id');
  }
  public set principalAccessBoundaryPolicyId(value: string) {
    this._principalAccessBoundaryPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalAccessBoundaryPolicyIdInput() {
    return this._principalAccessBoundaryPolicyId;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // details - computed: false, optional: true, required: false
  private _details = new GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }
  public putDetails(value: GoogleIamPrincipalAccessBoundaryPolicyDetails) {
    this._details.internalValue = value;
  }
  public resetDetails() {
    this._details.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleIamPrincipalAccessBoundaryPolicyTimeouts) {
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
      annotations: cdktn.hashMapper(cdktn.stringToTerraform)(this._annotations),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      organization: cdktn.stringToTerraform(this._organization),
      principal_access_boundary_policy_id: cdktn.stringToTerraform(this._principalAccessBoundaryPolicyId),
      details: googleIamPrincipalAccessBoundaryPolicyDetailsToTerraform(this._details.internalValue),
      timeouts: googleIamPrincipalAccessBoundaryPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktn.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_access_boundary_policy_id: {
        value: cdktn.stringToHclTerraform(this._principalAccessBoundaryPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      details: {
        value: googleIamPrincipalAccessBoundaryPolicyDetailsToHclTerraform(this._details.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIamPrincipalAccessBoundaryPolicyDetailsList",
      },
      timeouts: {
        value: googleIamPrincipalAccessBoundaryPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleIamPrincipalAccessBoundaryPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
