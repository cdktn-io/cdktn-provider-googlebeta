# `googleMigrationCenterAssetsExportJob` Submodule <a name="`googleMigrationCenterAssetsExportJob` Submodule" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterAssetsExportJob <a name="GoogleMigrationCenterAssetsExportJob" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job google_migration_center_assets_export_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  assets_export_job_id: str,
  location: str,
  condition: GoogleMigrationCenterAssetsExportJobCondition = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  performance_data: GoogleMigrationCenterAssetsExportJobPerformanceData = None,
  project: str = None,
  show_hidden: bool | IResolvable = None,
  signed_uri_destination: GoogleMigrationCenterAssetsExportJobSignedUriDestination = None,
  timeouts: GoogleMigrationCenterAssetsExportJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.assetsExportJobId">assets_export_job_id</a></code> | <code>str</code> | The ID to use for the asset export job. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#id GoogleMigrationCenterAssetsExportJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Labels must meet the following constraints:. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.performanceData">performance_data</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a></code> | performance_data block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#project GoogleMigrationCenterAssetsExportJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.showHidden">show_hidden</a></code> | <code>bool \| cdktn.IResolvable</code> | When this value is set to 'true' the response will include all assets, including those that are hidden. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.signedUriDestination">signed_uri_destination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a></code> | signed_uri_destination block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assets_export_job_id`<sup>Required</sup> <a name="assets_export_job_id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.assetsExportJobId"></a>

- *Type:* str

The ID to use for the asset export job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#assets_export_job_id GoogleMigrationCenterAssetsExportJob#assets_export_job_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#location GoogleMigrationCenterAssetsExportJob#location}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#condition GoogleMigrationCenterAssetsExportJob#condition}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#deletion_policy GoogleMigrationCenterAssetsExportJob#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#id GoogleMigrationCenterAssetsExportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs. Labels must meet the following constraints:.

* Keys and values can contain only lowercase letters, numeric characters,
  underscores, and dashes.
* All characters must use UTF-8 encoding, and international characters are
  allowed.
* Keys must start with a lowercase letter or international character.
* Each resource is limited to a maximum of 64 labels.

Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#labels GoogleMigrationCenterAssetsExportJob#labels}

---

##### `performance_data`<sup>Optional</sup> <a name="performance_data" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.performanceData"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a>

performance_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#performance_data GoogleMigrationCenterAssetsExportJob#performance_data}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#project GoogleMigrationCenterAssetsExportJob#project}.

---

##### `show_hidden`<sup>Optional</sup> <a name="show_hidden" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.showHidden"></a>

- *Type:* bool | cdktn.IResolvable

When this value is set to 'true' the response will include all assets, including those that are hidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#show_hidden GoogleMigrationCenterAssetsExportJob#show_hidden}

---

##### `signed_uri_destination`<sup>Optional</sup> <a name="signed_uri_destination" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.signedUriDestination"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a>

signed_uri_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#signed_uri_destination GoogleMigrationCenterAssetsExportJob#signed_uri_destination}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#timeouts GoogleMigrationCenterAssetsExportJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putPerformanceData">put_performance_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putSignedUriDestination">put_signed_uri_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetPerformanceData">reset_performance_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetShowHidden">reset_show_hidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetSignedUriDestination">reset_signed_uri_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putCondition"></a>

```python
def put_condition(
  filter: str = None
) -> None
```

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putCondition.parameter.filter"></a>

- *Type:* str

Assets filter, supports the same syntax as asset listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#filter GoogleMigrationCenterAssetsExportJob#filter}

---

##### `put_performance_data` <a name="put_performance_data" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putPerformanceData"></a>

```python
def put_performance_data(
  max_days: typing.Union[int, float] = None
) -> None
```

###### `max_days`<sup>Optional</sup> <a name="max_days" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putPerformanceData.parameter.maxDays"></a>

- *Type:* typing.Union[int, float]

When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available.

When this value is unset (or set to zero),
all available data is returned.
The maximum value is 420; values above 420 will be coerced to 420.
If unset (0 value) a default value of 40 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#max_days GoogleMigrationCenterAssetsExportJob#max_days}

---

##### `put_signed_uri_destination` <a name="put_signed_uri_destination" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putSignedUriDestination"></a>

```python
def put_signed_uri_destination(
  file_format: str
) -> None
```

###### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putSignedUriDestination.parameter.fileFormat"></a>

- *Type:* str

The file format to export. Possible values: CSV XLSX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#file_format GoogleMigrationCenterAssetsExportJob#file_format}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#create GoogleMigrationCenterAssetsExportJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#delete GoogleMigrationCenterAssetsExportJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#update GoogleMigrationCenterAssetsExportJob#update}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_performance_data` <a name="reset_performance_data" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetPerformanceData"></a>

```python
def reset_performance_data() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_show_hidden` <a name="reset_show_hidden" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetShowHidden"></a>

```python
def reset_show_hidden() -> None
```

##### `reset_signed_uri_destination` <a name="reset_signed_uri_destination" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetSignedUriDestination"></a>

```python
def reset_signed_uri_destination() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleMigrationCenterAssetsExportJob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleMigrationCenterAssetsExportJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleMigrationCenterAssetsExportJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleMigrationCenterAssetsExportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterAssetsExportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference">GoogleMigrationCenterAssetsExportJobConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.inventory">inventory</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList">GoogleMigrationCenterAssetsExportJobInventoryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.networkDependencies">network_dependencies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList">GoogleMigrationCenterAssetsExportJobNetworkDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.performanceData">performance_data</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference">GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.recentExecutions">recent_executions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList">GoogleMigrationCenterAssetsExportJobRecentExecutionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.signedUriDestination">signed_uri_destination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference">GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference">GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.assetsExportJobIdInput">assets_export_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.performanceDataInput">performance_data_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.showHiddenInput">show_hidden_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.signedUriDestinationInput">signed_uri_destination_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.assetsExportJobId">assets_export_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.showHidden">show_hidden</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.condition"></a>

```python
condition: GoogleMigrationCenterAssetsExportJobConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference">GoogleMigrationCenterAssetsExportJobConditionOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `inventory`<sup>Required</sup> <a name="inventory" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.inventory"></a>

```python
inventory: GoogleMigrationCenterAssetsExportJobInventoryList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList">GoogleMigrationCenterAssetsExportJobInventoryList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_dependencies`<sup>Required</sup> <a name="network_dependencies" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.networkDependencies"></a>

```python
network_dependencies: GoogleMigrationCenterAssetsExportJobNetworkDependenciesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList">GoogleMigrationCenterAssetsExportJobNetworkDependenciesList</a>

---

##### `performance_data`<sup>Required</sup> <a name="performance_data" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.performanceData"></a>

```python
performance_data: GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference">GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference</a>

---

##### `recent_executions`<sup>Required</sup> <a name="recent_executions" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.recentExecutions"></a>

```python
recent_executions: GoogleMigrationCenterAssetsExportJobRecentExecutionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList">GoogleMigrationCenterAssetsExportJobRecentExecutionsList</a>

---

##### `signed_uri_destination`<sup>Required</sup> <a name="signed_uri_destination" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.signedUriDestination"></a>

```python
signed_uri_destination: GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference">GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.timeouts"></a>

```python
timeouts: GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference">GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `assets_export_job_id_input`<sup>Optional</sup> <a name="assets_export_job_id_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.assetsExportJobIdInput"></a>

```python
assets_export_job_id_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.conditionInput"></a>

```python
condition_input: GoogleMigrationCenterAssetsExportJobCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `performance_data_input`<sup>Optional</sup> <a name="performance_data_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.performanceDataInput"></a>

```python
performance_data_input: GoogleMigrationCenterAssetsExportJobPerformanceData
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `show_hidden_input`<sup>Optional</sup> <a name="show_hidden_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.showHiddenInput"></a>

```python
show_hidden_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `signed_uri_destination_input`<sup>Optional</sup> <a name="signed_uri_destination_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.signedUriDestinationInput"></a>

```python
signed_uri_destination_input: GoogleMigrationCenterAssetsExportJobSignedUriDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleMigrationCenterAssetsExportJobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a>

---

##### `assets_export_job_id`<sup>Required</sup> <a name="assets_export_job_id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.assetsExportJobId"></a>

```python
assets_export_job_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `show_hidden`<sup>Required</sup> <a name="show_hidden" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.showHidden"></a>

```python
show_hidden: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterAssetsExportJobCondition <a name="GoogleMigrationCenterAssetsExportJobCondition" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition(
  filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition.property.filter">filter</a></code> | <code>str</code> | Assets filter, supports the same syntax as asset listing. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition.property.filter"></a>

```python
filter: str
```

- *Type:* str

Assets filter, supports the same syntax as asset listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#filter GoogleMigrationCenterAssetsExportJob#filter}

---

### GoogleMigrationCenterAssetsExportJobConfig <a name="GoogleMigrationCenterAssetsExportJobConfig" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  assets_export_job_id: str,
  location: str,
  condition: GoogleMigrationCenterAssetsExportJobCondition = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  performance_data: GoogleMigrationCenterAssetsExportJobPerformanceData = None,
  project: str = None,
  show_hidden: bool | IResolvable = None,
  signed_uri_destination: GoogleMigrationCenterAssetsExportJobSignedUriDestination = None,
  timeouts: GoogleMigrationCenterAssetsExportJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.assetsExportJobId">assets_export_job_id</a></code> | <code>str</code> | The ID to use for the asset export job. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#id GoogleMigrationCenterAssetsExportJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Labels must meet the following constraints:. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.performanceData">performance_data</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a></code> | performance_data block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#project GoogleMigrationCenterAssetsExportJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.showHidden">show_hidden</a></code> | <code>bool \| cdktn.IResolvable</code> | When this value is set to 'true' the response will include all assets, including those that are hidden. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.signedUriDestination">signed_uri_destination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a></code> | signed_uri_destination block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assets_export_job_id`<sup>Required</sup> <a name="assets_export_job_id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.assetsExportJobId"></a>

```python
assets_export_job_id: str
```

- *Type:* str

The ID to use for the asset export job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#assets_export_job_id GoogleMigrationCenterAssetsExportJob#assets_export_job_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#location GoogleMigrationCenterAssetsExportJob#location}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.condition"></a>

```python
condition: GoogleMigrationCenterAssetsExportJobCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#condition GoogleMigrationCenterAssetsExportJob#condition}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#deletion_policy GoogleMigrationCenterAssetsExportJob#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#id GoogleMigrationCenterAssetsExportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs. Labels must meet the following constraints:.

* Keys and values can contain only lowercase letters, numeric characters,
  underscores, and dashes.
* All characters must use UTF-8 encoding, and international characters are
  allowed.
* Keys must start with a lowercase letter or international character.
* Each resource is limited to a maximum of 64 labels.

Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#labels GoogleMigrationCenterAssetsExportJob#labels}

---

##### `performance_data`<sup>Optional</sup> <a name="performance_data" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.performanceData"></a>

```python
performance_data: GoogleMigrationCenterAssetsExportJobPerformanceData
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a>

performance_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#performance_data GoogleMigrationCenterAssetsExportJob#performance_data}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#project GoogleMigrationCenterAssetsExportJob#project}.

---

##### `show_hidden`<sup>Optional</sup> <a name="show_hidden" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.showHidden"></a>

```python
show_hidden: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When this value is set to 'true' the response will include all assets, including those that are hidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#show_hidden GoogleMigrationCenterAssetsExportJob#show_hidden}

---

##### `signed_uri_destination`<sup>Optional</sup> <a name="signed_uri_destination" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.signedUriDestination"></a>

```python
signed_uri_destination: GoogleMigrationCenterAssetsExportJobSignedUriDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a>

signed_uri_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#signed_uri_destination GoogleMigrationCenterAssetsExportJob#signed_uri_destination}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.timeouts"></a>

```python
timeouts: GoogleMigrationCenterAssetsExportJobTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#timeouts GoogleMigrationCenterAssetsExportJob#timeouts}

---

### GoogleMigrationCenterAssetsExportJobInventory <a name="GoogleMigrationCenterAssetsExportJobInventory" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventory.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventory()
```


### GoogleMigrationCenterAssetsExportJobNetworkDependencies <a name="GoogleMigrationCenterAssetsExportJobNetworkDependencies" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependencies.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependencies()
```


### GoogleMigrationCenterAssetsExportJobPerformanceData <a name="GoogleMigrationCenterAssetsExportJobPerformanceData" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData(
  max_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData.property.maxDays">max_days</a></code> | <code>typing.Union[int, float]</code> | When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available. |

---

##### `max_days`<sup>Optional</sup> <a name="max_days" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData.property.maxDays"></a>

```python
max_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available.

When this value is unset (or set to zero),
all available data is returned.
The maximum value is 420; values above 420 will be coerced to 420.
If unset (0 value) a default value of 40 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#max_days GoogleMigrationCenterAssetsExportJob#max_days}

---

### GoogleMigrationCenterAssetsExportJobRecentExecutions <a name="GoogleMigrationCenterAssetsExportJobRecentExecutions" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutions()
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResult <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResult" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResult.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResult()
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError()
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails()
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles()
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries()
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile()
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri()
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile()
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri()
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris()
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris()
```


### GoogleMigrationCenterAssetsExportJobSignedUriDestination <a name="GoogleMigrationCenterAssetsExportJobSignedUriDestination" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination(
  file_format: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination.property.fileFormat">file_format</a></code> | <code>str</code> | The file format to export. Possible values: CSV XLSX. |

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

The file format to export. Possible values: CSV XLSX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#file_format GoogleMigrationCenterAssetsExportJob#file_format}

---

### GoogleMigrationCenterAssetsExportJobTimeouts <a name="GoogleMigrationCenterAssetsExportJobTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#create GoogleMigrationCenterAssetsExportJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#delete GoogleMigrationCenterAssetsExportJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#update GoogleMigrationCenterAssetsExportJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#create GoogleMigrationCenterAssetsExportJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#delete GoogleMigrationCenterAssetsExportJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_migration_center_assets_export_job#update GoogleMigrationCenterAssetsExportJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterAssetsExportJobConditionOutputReference <a name="GoogleMigrationCenterAssetsExportJobConditionOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a>

---


### GoogleMigrationCenterAssetsExportJobInventoryList <a name="GoogleMigrationCenterAssetsExportJobInventoryList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterAssetsExportJobInventoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterAssetsExportJobInventoryOutputReference <a name="GoogleMigrationCenterAssetsExportJobInventoryOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventory">GoogleMigrationCenterAssetsExportJobInventory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobInventory
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventory">GoogleMigrationCenterAssetsExportJobInventory</a>

---


### GoogleMigrationCenterAssetsExportJobNetworkDependenciesList <a name="GoogleMigrationCenterAssetsExportJobNetworkDependenciesList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference <a name="GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependencies">GoogleMigrationCenterAssetsExportJobNetworkDependencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobNetworkDependencies
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependencies">GoogleMigrationCenterAssetsExportJobNetworkDependencies</a>

---


### GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference <a name="GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.resetMaxDays">reset_max_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_days` <a name="reset_max_days" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.resetMaxDays"></a>

```python
def reset_max_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDaysInput">max_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDays">max_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_days_input`<sup>Optional</sup> <a name="max_days_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDaysInput"></a>

```python
max_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_days`<sup>Required</sup> <a name="max_days" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDays"></a>

```python
max_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobPerformanceData
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.executionId">execution_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.requestedAssetCount">requested_asset_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.result">result</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutions">GoogleMigrationCenterAssetsExportJobRecentExecutions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `execution_id`<sup>Required</sup> <a name="execution_id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.executionId"></a>

```python
execution_id: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `requested_asset_count`<sup>Required</sup> <a name="requested_asset_count" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.requestedAssetCount"></a>

```python
requested_asset_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.result"></a>

```python
result: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList</a>

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobRecentExecutions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutions">GoogleMigrationCenterAssetsExportJobRecentExecutions</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.details">details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.details"></a>

```python
details: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.columnsCount">columns_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.rowCount">row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.signedUri">signed_uri</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns_count`<sup>Required</sup> <a name="columns_count" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.columnsCount"></a>

```python
columns_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `row_count`<sup>Required</sup> <a name="row_count" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.rowCount"></a>

```python
row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signed_uri`<sup>Required</sup> <a name="signed_uri" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.signedUri"></a>

```python
signed_uri: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.csvOutputFile">csv_output_file</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fileSizeBytes">file_size_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.xlsxOutputFile">xlsx_output_file</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv_output_file`<sup>Required</sup> <a name="csv_output_file" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.csvOutputFile"></a>

```python
csv_output_file: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList</a>

---

##### `file_size_bytes`<sup>Required</sup> <a name="file_size_bytes" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fileSizeBytes"></a>

```python
file_size_bytes: str
```

- *Type:* str

---

##### `xlsx_output_file`<sup>Required</sup> <a name="xlsx_output_file" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.xlsxOutputFile"></a>

```python
xlsx_output_file: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.signedUri">signed_uri</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `signed_uri`<sup>Required</sup> <a name="signed_uri" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.signedUri"></a>

```python
signed_uri: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.entries"></a>

```python
entries: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.outputFiles">output_files</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.signedUris">signed_uris</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResult">GoogleMigrationCenterAssetsExportJobRecentExecutionsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.error"></a>

```python
error: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList</a>

---

##### `output_files`<sup>Required</sup> <a name="output_files" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.outputFiles"></a>

```python
output_files: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList</a>

---

##### `signed_uris`<sup>Required</sup> <a name="signed_uris" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.signedUris"></a>

```python
signed_uris: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResult
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResult">GoogleMigrationCenterAssetsExportJobRecentExecutionsResult</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.signedUris">signed_uris</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `signed_uris`<sup>Required</sup> <a name="signed_uris" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.signedUris"></a>

```python
signed_uris: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris</a>

---


### GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference <a name="GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormatInput">file_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormat">file_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_format_input`<sup>Optional</sup> <a name="file_format_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormatInput"></a>

```python
file_format_input: str
```

- *Type:* str

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterAssetsExportJobSignedUriDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a>

---


### GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference <a name="GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_assets_export_job

googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleMigrationCenterAssetsExportJobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a>

---



