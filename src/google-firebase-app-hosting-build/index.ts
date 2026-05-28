/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleFirebaseAppHostingBuildConfig extends cdktn.TerraformMetaArguments {
  /**
  * Unstructured key value map that may be set by external tools to
  * store and arbitrary metadata. They are not queryable and should be
  * preserved when modifying objects.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#annotations GoogleFirebaseAppHostingBuild#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The ID of the Backend that this Build applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#backend GoogleFirebaseAppHostingBuild#backend}
  */
  readonly backend: string;
  /**
  * The user-specified ID of the build being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#build_id GoogleFirebaseAppHostingBuild#build_id}
  */
  readonly buildId: string;
  /**
  * Human-readable name. 63 character limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#display_name GoogleFirebaseAppHostingBuild#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#id GoogleFirebaseAppHostingBuild#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unstructured key value map that can be used to organize and categorize
  * objects.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#labels GoogleFirebaseAppHostingBuild#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the Backend that this Build applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#location GoogleFirebaseAppHostingBuild#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#project GoogleFirebaseAppHostingBuild#project}
  */
  readonly project?: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#source GoogleFirebaseAppHostingBuild#source}
  */
  readonly source: GoogleFirebaseAppHostingBuildSource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#timeouts GoogleFirebaseAppHostingBuild#timeouts}
  */
  readonly timeouts?: GoogleFirebaseAppHostingBuildTimeouts;
}
export interface GoogleFirebaseAppHostingBuildError {
}

export function googleFirebaseAppHostingBuildErrorToTerraform(struct?: GoogleFirebaseAppHostingBuildError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseAppHostingBuildErrorToHclTerraform(struct?: GoogleFirebaseAppHostingBuildError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseAppHostingBuildErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleFirebaseAppHostingBuildError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingBuildError | undefined) {
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

  // details - computed: true, optional: false, required: false
  private _details = new cdktn.StringMapList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleFirebaseAppHostingBuildErrorList extends cdktn.ComplexList {

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
  public get(index: number): GoogleFirebaseAppHostingBuildErrorOutputReference {
    return new GoogleFirebaseAppHostingBuildErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseAppHostingBuildSourceCodebaseAuthor {
}

export function googleFirebaseAppHostingBuildSourceCodebaseAuthorToTerraform(struct?: GoogleFirebaseAppHostingBuildSourceCodebaseAuthor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseAppHostingBuildSourceCodebaseAuthorToHclTerraform(struct?: GoogleFirebaseAppHostingBuildSourceCodebaseAuthor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleFirebaseAppHostingBuildSourceCodebaseAuthor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingBuildSourceCodebaseAuthor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // image_uri - computed: true, optional: false, required: false
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
}

export class GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList extends cdktn.ComplexList {

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
  public get(index: number): GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference {
    return new GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseAppHostingBuildSourceCodebase {
  /**
  * The branch in the codebase to build from, using the latest commit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#branch GoogleFirebaseAppHostingBuild#branch}
  */
  readonly branch?: string;
  /**
  * The commit in the codebase to build from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#commit GoogleFirebaseAppHostingBuild#commit}
  */
  readonly commit?: string;
}

export function googleFirebaseAppHostingBuildSourceCodebaseToTerraform(struct?: GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference | GoogleFirebaseAppHostingBuildSourceCodebase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktn.stringToTerraform(struct!.branch),
    commit: cdktn.stringToTerraform(struct!.commit),
  }
}


export function googleFirebaseAppHostingBuildSourceCodebaseToHclTerraform(struct?: GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference | GoogleFirebaseAppHostingBuildSourceCodebase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktn.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit: {
      value: cdktn.stringToHclTerraform(struct!.commit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseAppHostingBuildSourceCodebase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingBuildSourceCodebase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._commit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._commit = value.commit;
    }
  }

  // author - computed: true, optional: false, required: false
  private _author = new GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList(this, "author", false);
  public get author() {
    return this._author;
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // commit - computed: false, optional: true, required: false
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // commit_message - computed: true, optional: false, required: false
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }

  // commit_time - computed: true, optional: false, required: false
  public get commitTime() {
    return this.getStringAttribute('commit_time');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface GoogleFirebaseAppHostingBuildSourceContainer {
  /**
  * A URI representing a container for the backend to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#image GoogleFirebaseAppHostingBuild#image}
  */
  readonly image: string;
}

export function googleFirebaseAppHostingBuildSourceContainerToTerraform(struct?: GoogleFirebaseAppHostingBuildSourceContainerOutputReference | GoogleFirebaseAppHostingBuildSourceContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function googleFirebaseAppHostingBuildSourceContainerToHclTerraform(struct?: GoogleFirebaseAppHostingBuildSourceContainerOutputReference | GoogleFirebaseAppHostingBuildSourceContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseAppHostingBuildSourceContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseAppHostingBuildSourceContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingBuildSourceContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._image = value.image;
    }
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface GoogleFirebaseAppHostingBuildSource {
  /**
  * codebase block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#codebase GoogleFirebaseAppHostingBuild#codebase}
  */
  readonly codebase?: GoogleFirebaseAppHostingBuildSourceCodebase;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#container GoogleFirebaseAppHostingBuild#container}
  */
  readonly container?: GoogleFirebaseAppHostingBuildSourceContainer;
}

export function googleFirebaseAppHostingBuildSourceToTerraform(struct?: GoogleFirebaseAppHostingBuildSourceOutputReference | GoogleFirebaseAppHostingBuildSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codebase: googleFirebaseAppHostingBuildSourceCodebaseToTerraform(struct!.codebase),
    container: googleFirebaseAppHostingBuildSourceContainerToTerraform(struct!.container),
  }
}


export function googleFirebaseAppHostingBuildSourceToHclTerraform(struct?: GoogleFirebaseAppHostingBuildSourceOutputReference | GoogleFirebaseAppHostingBuildSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codebase: {
      value: googleFirebaseAppHostingBuildSourceCodebaseToHclTerraform(struct!.codebase),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleFirebaseAppHostingBuildSourceCodebaseList",
    },
    container: {
      value: googleFirebaseAppHostingBuildSourceContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleFirebaseAppHostingBuildSourceContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseAppHostingBuildSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseAppHostingBuildSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codebase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codebase = this._codebase?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingBuildSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codebase.internalValue = undefined;
      this._container.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codebase.internalValue = value.codebase;
      this._container.internalValue = value.container;
    }
  }

  // codebase - computed: false, optional: true, required: false
  private _codebase = new GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference(this, "codebase");
  public get codebase() {
    return this._codebase;
  }
  public putCodebase(value: GoogleFirebaseAppHostingBuildSourceCodebase) {
    this._codebase.internalValue = value;
  }
  public resetCodebase() {
    this._codebase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codebaseInput() {
    return this._codebase.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new GoogleFirebaseAppHostingBuildSourceContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: GoogleFirebaseAppHostingBuildSourceContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }
}
export interface GoogleFirebaseAppHostingBuildTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#create GoogleFirebaseAppHostingBuild#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#delete GoogleFirebaseAppHostingBuild#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#update GoogleFirebaseAppHostingBuild#update}
  */
  readonly update?: string;
}

export function googleFirebaseAppHostingBuildTimeoutsToTerraform(struct?: GoogleFirebaseAppHostingBuildTimeouts | cdktn.IResolvable): any {
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


export function googleFirebaseAppHostingBuildTimeoutsToHclTerraform(struct?: GoogleFirebaseAppHostingBuildTimeouts | cdktn.IResolvable): any {
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

export class GoogleFirebaseAppHostingBuildTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleFirebaseAppHostingBuildTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleFirebaseAppHostingBuildTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build google_firebase_app_hosting_build}
*/
export class GoogleFirebaseAppHostingBuild extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_app_hosting_build";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleFirebaseAppHostingBuild resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleFirebaseAppHostingBuild to import
  * @param importFromId The id of the existing GoogleFirebaseAppHostingBuild that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleFirebaseAppHostingBuild to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_firebase_app_hosting_build", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_hosting_build google_firebase_app_hosting_build} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleFirebaseAppHostingBuildConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleFirebaseAppHostingBuildConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_app_hosting_build',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '7.34.0',
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
    this._backend = config.backend;
    this._buildId = config.buildId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._source.internalValue = config.source;
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

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // build_id - computed: false, optional: false, required: true
  private _buildId?: string; 
  public get buildId() {
    return this.getStringAttribute('build_id');
  }
  public set buildId(value: string) {
    this._buildId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildIdInput() {
    return this._buildId;
  }

  // build_logs_uri - computed: true, optional: false, required: false
  public get buildLogsUri() {
    return this.getStringAttribute('build_logs_uri');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // error - computed: true, optional: false, required: false
  private _error = new GoogleFirebaseAppHostingBuildErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // error_source - computed: true, optional: false, required: false
  public get errorSource() {
    return this.getStringAttribute('error_source');
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

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // source - computed: false, optional: false, required: true
  private _source = new GoogleFirebaseAppHostingBuildSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: GoogleFirebaseAppHostingBuildSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleFirebaseAppHostingBuildTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleFirebaseAppHostingBuildTimeouts) {
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
      backend: cdktn.stringToTerraform(this._backend),
      build_id: cdktn.stringToTerraform(this._buildId),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      source: googleFirebaseAppHostingBuildSourceToTerraform(this._source.internalValue),
      timeouts: googleFirebaseAppHostingBuildTimeoutsToTerraform(this._timeouts.internalValue),
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
      backend: {
        value: cdktn.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_id: {
        value: cdktn.stringToHclTerraform(this._buildId),
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
      source: {
        value: googleFirebaseAppHostingBuildSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleFirebaseAppHostingBuildSourceList",
      },
      timeouts: {
        value: googleFirebaseAppHostingBuildTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleFirebaseAppHostingBuildTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
