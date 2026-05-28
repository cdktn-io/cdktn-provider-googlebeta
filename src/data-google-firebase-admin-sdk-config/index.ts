/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_firebase_admin_sdk_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleFirebaseAdminSdkConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_firebase_admin_sdk_config#project DataGoogleFirebaseAdminSdkConfig#project}
  */
  readonly project?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_firebase_admin_sdk_config google_firebase_admin_sdk_config}
*/
export class DataGoogleFirebaseAdminSdkConfig extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_admin_sdk_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleFirebaseAdminSdkConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleFirebaseAdminSdkConfig to import
  * @param importFromId The id of the existing DataGoogleFirebaseAdminSdkConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_firebase_admin_sdk_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleFirebaseAdminSdkConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_firebase_admin_sdk_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_firebase_admin_sdk_config google_firebase_admin_sdk_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleFirebaseAdminSdkConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleFirebaseAdminSdkConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_admin_sdk_config',
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
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_url - computed: true, optional: false, required: false
  public get databaseUrl() {
    return this.getStringAttribute('database_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getStringAttribute('location_id');
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

  // storage_bucket - computed: true, optional: false, required: false
  public get storageBucket() {
    return this.getStringAttribute('storage_bucket');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project: cdktn.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
