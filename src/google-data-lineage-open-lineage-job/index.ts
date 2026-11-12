/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleDataLineageOpenLineageJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#deletion_policy GoogleDataLineageOpenLineageJob#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Description of the OpenLineage job. Changes to description do not trigger updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#description GoogleDataLineageOpenLineageJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the OpenLineage job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}
  */
  readonly name: string;
  /**
  * Namespace of the OpenLineage job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}
  */
  readonly namespace: string;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#input GoogleDataLineageOpenLineageJob#input}
  */
  readonly input?: GoogleDataLineageOpenLineageJobInput[] | cdktn.IResolvable;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#output GoogleDataLineageOpenLineageJob#output}
  */
  readonly output?: GoogleDataLineageOpenLineageJobOutput[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#timeouts GoogleDataLineageOpenLineageJob#timeouts}
  */
  readonly timeouts?: GoogleDataLineageOpenLineageJobTimeouts;
}
export interface GoogleDataLineageOpenLineageJobInputCatalog {
  /**
  * Catalog framework.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#framework GoogleDataLineageOpenLineageJob#framework}
  */
  readonly framework: string;
  /**
  * Catalog entity name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}
  */
  readonly name: string;
  /**
  * Catalog entity type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}
  */
  readonly type: string;
}

export function googleDataLineageOpenLineageJobInputCatalogToTerraform(struct?: GoogleDataLineageOpenLineageJobInputCatalogOutputReference | GoogleDataLineageOpenLineageJobInputCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    framework: cdktn.stringToTerraform(struct!.framework),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function googleDataLineageOpenLineageJobInputCatalogToHclTerraform(struct?: GoogleDataLineageOpenLineageJobInputCatalogOutputReference | GoogleDataLineageOpenLineageJobInputCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    framework: {
      value: cdktn.stringToHclTerraform(struct!.framework),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageOpenLineageJobInputCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLineageOpenLineageJobInputCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._framework !== undefined) {
      hasAnyValues = true;
      internalValueResult.framework = this._framework;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageOpenLineageJobInputCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._framework = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._framework = value.framework;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // framework - computed: false, optional: false, required: true
  private _framework?: string; 
  public get framework() {
    return this.getStringAttribute('framework');
  }
  public set framework(value: string) {
    this._framework = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework;
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
}
export interface GoogleDataLineageOpenLineageJobInputSymlink {
  /**
  * Name of the symlink target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}
  */
  readonly name: string;
  /**
  * Namespace of the symlink target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}
  */
  readonly namespace: string;
  /**
  * Type of the symlink target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}
  */
  readonly type: string;
}

export function googleDataLineageOpenLineageJobInputSymlinkToTerraform(struct?: GoogleDataLineageOpenLineageJobInputSymlink | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function googleDataLineageOpenLineageJobInputSymlinkToHclTerraform(struct?: GoogleDataLineageOpenLineageJobInputSymlink | cdktn.IResolvable): any {
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
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageOpenLineageJobInputSymlinkOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDataLineageOpenLineageJobInputSymlink | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageOpenLineageJobInputSymlink | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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
}

export class GoogleDataLineageOpenLineageJobInputSymlinkList extends cdktn.ComplexList {
  public internalValue? : GoogleDataLineageOpenLineageJobInputSymlink[] | cdktn.IResolvable

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
  public get(index: number): GoogleDataLineageOpenLineageJobInputSymlinkOutputReference {
    return new GoogleDataLineageOpenLineageJobInputSymlinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLineageOpenLineageJobInput {
  /**
  * Name of the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}
  */
  readonly name: string;
  /**
  * Namespace of the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}
  */
  readonly namespace: string;
  /**
  * catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#catalog GoogleDataLineageOpenLineageJob#catalog}
  */
  readonly catalog?: GoogleDataLineageOpenLineageJobInputCatalog;
  /**
  * symlink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#symlink GoogleDataLineageOpenLineageJob#symlink}
  */
  readonly symlink?: GoogleDataLineageOpenLineageJobInputSymlink[] | cdktn.IResolvable;
}

export function googleDataLineageOpenLineageJobInputToTerraform(struct?: GoogleDataLineageOpenLineageJobInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    catalog: googleDataLineageOpenLineageJobInputCatalogToTerraform(struct!.catalog),
    symlink: cdktn.listMapper(googleDataLineageOpenLineageJobInputSymlinkToTerraform, true)(struct!.symlink),
  }
}


export function googleDataLineageOpenLineageJobInputToHclTerraform(struct?: GoogleDataLineageOpenLineageJobInput | cdktn.IResolvable): any {
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
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog: {
      value: googleDataLineageOpenLineageJobInputCatalogToHclTerraform(struct!.catalog),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLineageOpenLineageJobInputCatalogList",
    },
    symlink: {
      value: cdktn.listMapperHcl(googleDataLineageOpenLineageJobInputSymlinkToHclTerraform, true)(struct!.symlink),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLineageOpenLineageJobInputSymlinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageOpenLineageJobInputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDataLineageOpenLineageJobInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    if (this._symlink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.symlink = this._symlink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageOpenLineageJobInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._catalog.internalValue = undefined;
      this._symlink.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._catalog.internalValue = value.catalog;
      this._symlink.internalValue = value.symlink;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new GoogleDataLineageOpenLineageJobInputCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: GoogleDataLineageOpenLineageJobInputCatalog) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
  }

  // symlink - computed: false, optional: true, required: false
  private _symlink = new GoogleDataLineageOpenLineageJobInputSymlinkList(this, "symlink", false);
  public get symlink() {
    return this._symlink;
  }
  public putSymlink(value: GoogleDataLineageOpenLineageJobInputSymlink[] | cdktn.IResolvable) {
    this._symlink.internalValue = value;
  }
  public resetSymlink() {
    this._symlink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symlinkInput() {
    return this._symlink.internalValue;
  }
}

export class GoogleDataLineageOpenLineageJobInputList extends cdktn.ComplexList {
  public internalValue? : GoogleDataLineageOpenLineageJobInput[] | cdktn.IResolvable

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
  public get(index: number): GoogleDataLineageOpenLineageJobInputOutputReference {
    return new GoogleDataLineageOpenLineageJobInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLineageOpenLineageJobOutputCatalog {
  /**
  * Catalog framework.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#framework GoogleDataLineageOpenLineageJob#framework}
  */
  readonly framework: string;
  /**
  * Catalog entity name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}
  */
  readonly name: string;
  /**
  * Catalog entity type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}
  */
  readonly type: string;
}

export function googleDataLineageOpenLineageJobOutputCatalogToTerraform(struct?: GoogleDataLineageOpenLineageJobOutputCatalogOutputReference | GoogleDataLineageOpenLineageJobOutputCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    framework: cdktn.stringToTerraform(struct!.framework),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function googleDataLineageOpenLineageJobOutputCatalogToHclTerraform(struct?: GoogleDataLineageOpenLineageJobOutputCatalogOutputReference | GoogleDataLineageOpenLineageJobOutputCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    framework: {
      value: cdktn.stringToHclTerraform(struct!.framework),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageOpenLineageJobOutputCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLineageOpenLineageJobOutputCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._framework !== undefined) {
      hasAnyValues = true;
      internalValueResult.framework = this._framework;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageOpenLineageJobOutputCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._framework = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._framework = value.framework;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // framework - computed: false, optional: false, required: true
  private _framework?: string; 
  public get framework() {
    return this.getStringAttribute('framework');
  }
  public set framework(value: string) {
    this._framework = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework;
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
}
export interface GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation {
  /**
  * Transformation subtype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#subtype GoogleDataLineageOpenLineageJob#subtype}
  */
  readonly subtype?: string;
  /**
  * Transformation type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}
  */
  readonly type: string;
}

export function googleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationToTerraform(struct?: GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    subtype: cdktn.stringToTerraform(struct!.subtype),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function googleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationToHclTerraform(struct?: GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    subtype: {
      value: cdktn.stringToHclTerraform(struct!.subtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtype = this._subtype;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subtype = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subtype = value.subtype;
      this._type = value.type;
    }
  }

  // subtype - computed: false, optional: true, required: false
  private _subtype?: string; 
  public get subtype() {
    return this.getStringAttribute('subtype');
  }
  public set subtype(value: string) {
    this._subtype = value;
  }
  public resetSubtype() {
    this._subtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtypeInput() {
    return this._subtype;
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
}

export class GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList extends cdktn.ComplexList {
  public internalValue? : GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[] | cdktn.IResolvable

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
  public get(index: number): GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference {
    return new GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput {
  /**
  * Source field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}
  */
  readonly field: string;
  /**
  * Name of the source dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}
  */
  readonly name: string;
  /**
  * Namespace of the source dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}
  */
  readonly namespace: string;
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#transformation GoogleDataLineageOpenLineageJob#transformation}
  */
  readonly transformation?: GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[] | cdktn.IResolvable;
}

export function googleDataLineageOpenLineageJobOutputColumnLineageDatasetInputToTerraform(struct?: GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    name: cdktn.stringToTerraform(struct!.name),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    transformation: cdktn.listMapper(googleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationToTerraform, true)(struct!.transformation),
  }
}


export function googleDataLineageOpenLineageJobOutputColumnLineageDatasetInputToHclTerraform(struct?: GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation: {
      value: cdktn.listMapperHcl(googleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationToHclTerraform, true)(struct!.transformation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._transformation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._name = value.name;
      this._namespace = value.namespace;
      this._transformation.internalValue = value.transformation;
    }
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // transformation - computed: false, optional: true, required: false
  private _transformation = new GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList(this, "transformation", false);
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[] | cdktn.IResolvable) {
    this._transformation.internalValue = value;
  }
  public resetTransformation() {
    this._transformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }
}

export class GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList extends cdktn.ComplexList {
  public internalValue? : GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput[] | cdktn.IResolvable

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
  public get(index: number): GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference {
    return new GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation {
  /**
  * Transformation subtype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#subtype GoogleDataLineageOpenLineageJob#subtype}
  */
  readonly subtype?: string;
  /**
  * Transformation type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}
  */
  readonly type: string;
}

export function googleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationToTerraform(struct?: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    subtype: cdktn.stringToTerraform(struct!.subtype),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function googleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationToHclTerraform(struct?: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    subtype: {
      value: cdktn.stringToHclTerraform(struct!.subtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtype = this._subtype;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subtype = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subtype = value.subtype;
      this._type = value.type;
    }
  }

  // subtype - computed: false, optional: true, required: false
  private _subtype?: string; 
  public get subtype() {
    return this.getStringAttribute('subtype');
  }
  public set subtype(value: string) {
    this._subtype = value;
  }
  public resetSubtype() {
    this._subtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtypeInput() {
    return this._subtype;
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
}

export class GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList extends cdktn.ComplexList {
  public internalValue? : GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[] | cdktn.IResolvable

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
  public get(index: number): GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference {
    return new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput {
  /**
  * Source field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}
  */
  readonly field: string;
  /**
  * Name of the source dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}
  */
  readonly name: string;
  /**
  * Namespace of the source dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}
  */
  readonly namespace: string;
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#transformation GoogleDataLineageOpenLineageJob#transformation}
  */
  readonly transformation?: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[] | cdktn.IResolvable;
}

export function googleDataLineageOpenLineageJobOutputColumnLineageFieldInputToTerraform(struct?: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    name: cdktn.stringToTerraform(struct!.name),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    transformation: cdktn.listMapper(googleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationToTerraform, true)(struct!.transformation),
  }
}


export function googleDataLineageOpenLineageJobOutputColumnLineageFieldInputToHclTerraform(struct?: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation: {
      value: cdktn.listMapperHcl(googleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationToHclTerraform, true)(struct!.transformation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._transformation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._name = value.name;
      this._namespace = value.namespace;
      this._transformation.internalValue = value.transformation;
    }
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // transformation - computed: false, optional: true, required: false
  private _transformation = new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList(this, "transformation", false);
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[] | cdktn.IResolvable) {
    this._transformation.internalValue = value;
  }
  public resetTransformation() {
    this._transformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }
}

export class GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList extends cdktn.ComplexList {
  public internalValue? : GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput[] | cdktn.IResolvable

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
  public get(index: number): GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference {
    return new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLineageOpenLineageJobOutputColumnLineageField {
  /**
  * Output field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}
  */
  readonly name: string;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#input GoogleDataLineageOpenLineageJob#input}
  */
  readonly input: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput[] | cdktn.IResolvable;
}

export function googleDataLineageOpenLineageJobOutputColumnLineageFieldToTerraform(struct?: GoogleDataLineageOpenLineageJobOutputColumnLineageField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    input: cdktn.listMapper(googleDataLineageOpenLineageJobOutputColumnLineageFieldInputToTerraform, true)(struct!.input),
  }
}


export function googleDataLineageOpenLineageJobOutputColumnLineageFieldToHclTerraform(struct?: GoogleDataLineageOpenLineageJobOutputColumnLineageField | cdktn.IResolvable): any {
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
    input: {
      value: cdktn.listMapperHcl(googleDataLineageOpenLineageJobOutputColumnLineageFieldInputToHclTerraform, true)(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDataLineageOpenLineageJobOutputColumnLineageField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageOpenLineageJobOutputColumnLineageField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._input.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._input.internalValue = value.input;
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

  // input - computed: false, optional: false, required: true
  private _input = new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList(this, "input", false);
  public get input() {
    return this._input;
  }
  public putInput(value: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput[] | cdktn.IResolvable) {
    this._input.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }
}

export class GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList extends cdktn.ComplexList {
  public internalValue? : GoogleDataLineageOpenLineageJobOutputColumnLineageField[] | cdktn.IResolvable

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
  public get(index: number): GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference {
    return new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLineageOpenLineageJobOutputColumnLineage {
  /**
  * dataset_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#dataset_input GoogleDataLineageOpenLineageJob#dataset_input}
  */
  readonly datasetInput?: GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput[] | cdktn.IResolvable;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}
  */
  readonly field: GoogleDataLineageOpenLineageJobOutputColumnLineageField[] | cdktn.IResolvable;
}

export function googleDataLineageOpenLineageJobOutputColumnLineageToTerraform(struct?: GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference | GoogleDataLineageOpenLineageJobOutputColumnLineage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_input: cdktn.listMapper(googleDataLineageOpenLineageJobOutputColumnLineageDatasetInputToTerraform, true)(struct!.datasetInput),
    field: cdktn.listMapper(googleDataLineageOpenLineageJobOutputColumnLineageFieldToTerraform, true)(struct!.field),
  }
}


export function googleDataLineageOpenLineageJobOutputColumnLineageToHclTerraform(struct?: GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference | GoogleDataLineageOpenLineageJobOutputColumnLineage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_input: {
      value: cdktn.listMapperHcl(googleDataLineageOpenLineageJobOutputColumnLineageDatasetInputToHclTerraform, true)(struct!.datasetInput),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList",
    },
    field: {
      value: cdktn.listMapperHcl(googleDataLineageOpenLineageJobOutputColumnLineageFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLineageOpenLineageJobOutputColumnLineage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetInput = this._datasetInput?.internalValue;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageOpenLineageJobOutputColumnLineage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetInput.internalValue = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetInput.internalValue = value.datasetInput;
      this._field.internalValue = value.field;
    }
  }

  // dataset_input - computed: false, optional: true, required: false
  private _datasetInput = new GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList(this, "dataset_input", false);
  public get datasetInput() {
    return this._datasetInput;
  }
  public putDatasetInput(value: GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput[] | cdktn.IResolvable) {
    this._datasetInput.internalValue = value;
  }
  public resetDatasetInput() {
    this._datasetInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInputInput() {
    return this._datasetInput.internalValue;
  }

  // field - computed: false, optional: false, required: true
  private _field = new GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: GoogleDataLineageOpenLineageJobOutputColumnLineageField[] | cdktn.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface GoogleDataLineageOpenLineageJobOutputSymlink {
  /**
  * Name of the symlink target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}
  */
  readonly name: string;
  /**
  * Namespace of the symlink target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}
  */
  readonly namespace: string;
  /**
  * Type of the symlink target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}
  */
  readonly type: string;
}

export function googleDataLineageOpenLineageJobOutputSymlinkToTerraform(struct?: GoogleDataLineageOpenLineageJobOutputSymlink | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function googleDataLineageOpenLineageJobOutputSymlinkToHclTerraform(struct?: GoogleDataLineageOpenLineageJobOutputSymlink | cdktn.IResolvable): any {
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
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDataLineageOpenLineageJobOutputSymlink | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageOpenLineageJobOutputSymlink | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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
}

export class GoogleDataLineageOpenLineageJobOutputSymlinkList extends cdktn.ComplexList {
  public internalValue? : GoogleDataLineageOpenLineageJobOutputSymlink[] | cdktn.IResolvable

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
  public get(index: number): GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference {
    return new GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLineageOpenLineageJobOutput {
  /**
  * Name of the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}
  */
  readonly name: string;
  /**
  * Namespace of the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}
  */
  readonly namespace: string;
  /**
  * catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#catalog GoogleDataLineageOpenLineageJob#catalog}
  */
  readonly catalog?: GoogleDataLineageOpenLineageJobOutputCatalog;
  /**
  * column_lineage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#column_lineage GoogleDataLineageOpenLineageJob#column_lineage}
  */
  readonly columnLineage?: GoogleDataLineageOpenLineageJobOutputColumnLineage;
  /**
  * symlink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#symlink GoogleDataLineageOpenLineageJob#symlink}
  */
  readonly symlink?: GoogleDataLineageOpenLineageJobOutputSymlink[] | cdktn.IResolvable;
}

export function googleDataLineageOpenLineageJobOutputToTerraform(struct?: GoogleDataLineageOpenLineageJobOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    catalog: googleDataLineageOpenLineageJobOutputCatalogToTerraform(struct!.catalog),
    column_lineage: googleDataLineageOpenLineageJobOutputColumnLineageToTerraform(struct!.columnLineage),
    symlink: cdktn.listMapper(googleDataLineageOpenLineageJobOutputSymlinkToTerraform, true)(struct!.symlink),
  }
}


export function googleDataLineageOpenLineageJobOutputToHclTerraform(struct?: GoogleDataLineageOpenLineageJobOutput | cdktn.IResolvable): any {
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
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog: {
      value: googleDataLineageOpenLineageJobOutputCatalogToHclTerraform(struct!.catalog),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLineageOpenLineageJobOutputCatalogList",
    },
    column_lineage: {
      value: googleDataLineageOpenLineageJobOutputColumnLineageToHclTerraform(struct!.columnLineage),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLineageOpenLineageJobOutputColumnLineageList",
    },
    symlink: {
      value: cdktn.listMapperHcl(googleDataLineageOpenLineageJobOutputSymlinkToHclTerraform, true)(struct!.symlink),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLineageOpenLineageJobOutputSymlinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageOpenLineageJobOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDataLineageOpenLineageJobOutput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    if (this._columnLineage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnLineage = this._columnLineage?.internalValue;
    }
    if (this._symlink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.symlink = this._symlink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageOpenLineageJobOutput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._catalog.internalValue = undefined;
      this._columnLineage.internalValue = undefined;
      this._symlink.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._catalog.internalValue = value.catalog;
      this._columnLineage.internalValue = value.columnLineage;
      this._symlink.internalValue = value.symlink;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new GoogleDataLineageOpenLineageJobOutputCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: GoogleDataLineageOpenLineageJobOutputCatalog) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
  }

  // column_lineage - computed: false, optional: true, required: false
  private _columnLineage = new GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference(this, "column_lineage");
  public get columnLineage() {
    return this._columnLineage;
  }
  public putColumnLineage(value: GoogleDataLineageOpenLineageJobOutputColumnLineage) {
    this._columnLineage.internalValue = value;
  }
  public resetColumnLineage() {
    this._columnLineage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnLineageInput() {
    return this._columnLineage.internalValue;
  }

  // symlink - computed: false, optional: true, required: false
  private _symlink = new GoogleDataLineageOpenLineageJobOutputSymlinkList(this, "symlink", false);
  public get symlink() {
    return this._symlink;
  }
  public putSymlink(value: GoogleDataLineageOpenLineageJobOutputSymlink[] | cdktn.IResolvable) {
    this._symlink.internalValue = value;
  }
  public resetSymlink() {
    this._symlink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symlinkInput() {
    return this._symlink.internalValue;
  }
}

export class GoogleDataLineageOpenLineageJobOutputList extends cdktn.ComplexList {
  public internalValue? : GoogleDataLineageOpenLineageJobOutput[] | cdktn.IResolvable

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
  public get(index: number): GoogleDataLineageOpenLineageJobOutputOutputReference {
    return new GoogleDataLineageOpenLineageJobOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLineageOpenLineageJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#create GoogleDataLineageOpenLineageJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#delete GoogleDataLineageOpenLineageJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#update GoogleDataLineageOpenLineageJob#update}
  */
  readonly update?: string;
}

export function googleDataLineageOpenLineageJobTimeoutsToTerraform(struct?: GoogleDataLineageOpenLineageJobTimeouts | cdktn.IResolvable): any {
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


export function googleDataLineageOpenLineageJobTimeoutsToHclTerraform(struct?: GoogleDataLineageOpenLineageJobTimeouts | cdktn.IResolvable): any {
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

export class GoogleDataLineageOpenLineageJobTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataLineageOpenLineageJobTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataLineageOpenLineageJobTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job google_data_lineage_open_lineage_job}
*/
export class GoogleDataLineageOpenLineageJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_lineage_open_lineage_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleDataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataLineageOpenLineageJob to import
  * @param importFromId The id of the existing GoogleDataLineageOpenLineageJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataLineageOpenLineageJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_data_lineage_open_lineage_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job google_data_lineage_open_lineage_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataLineageOpenLineageJobConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataLineageOpenLineageJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_lineage_open_lineage_job',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '8.11.0',
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
    this._name = config.name;
    this._namespace = config.namespace;
    this._input.internalValue = config.input;
    this._output.internalValue = config.output;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // process - computed: true, optional: false, required: false
  public get process() {
    return this.getStringAttribute('process');
  }

  // run - computed: true, optional: false, required: false
  public get run() {
    return this.getStringAttribute('run');
  }

  // input - computed: false, optional: true, required: false
  private _input = new GoogleDataLineageOpenLineageJobInputList(this, "input", false);
  public get input() {
    return this._input;
  }
  public putInput(value: GoogleDataLineageOpenLineageJobInput[] | cdktn.IResolvable) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output = new GoogleDataLineageOpenLineageJobOutputList(this, "output", false);
  public get output() {
    return this._output;
  }
  public putOutput(value: GoogleDataLineageOpenLineageJobOutput[] | cdktn.IResolvable) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataLineageOpenLineageJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataLineageOpenLineageJobTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      input: cdktn.listMapper(googleDataLineageOpenLineageJobInputToTerraform, true)(this._input.internalValue),
      output: cdktn.listMapper(googleDataLineageOpenLineageJobOutputToTerraform, true)(this._output.internalValue),
      timeouts: googleDataLineageOpenLineageJobTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input: {
        value: cdktn.listMapperHcl(googleDataLineageOpenLineageJobInputToHclTerraform, true)(this._input.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLineageOpenLineageJobInputList",
      },
      output: {
        value: cdktn.listMapperHcl(googleDataLineageOpenLineageJobOutputToHclTerraform, true)(this._output.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLineageOpenLineageJobOutputList",
      },
      timeouts: {
        value: googleDataLineageOpenLineageJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDataLineageOpenLineageJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
