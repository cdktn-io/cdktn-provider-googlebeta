# `googleMigrationCenterImportDataFile` Submodule <a name="`googleMigrationCenterImportDataFile` Submodule" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterImportDataFile <a name="GoogleMigrationCenterImportDataFile" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file google_migration_center_import_data_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_data_file

googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  format: str,
  import_data_file_id: str,
  import_job: str,
  location: str,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleMigrationCenterImportDataFileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.format">format</a></code> | <code>str</code> | Possible values: IMPORT_JOB_FORMAT_RVTOOLS_XLSX IMPORT_JOB_FORMAT_RVTOOLS_CSV IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV IMPORT_JOB_FORMAT_STRATOZONE_CSV IMPORT_JOB_FORMAT_DATABASE_ZIP. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.importDataFileId">import_data_file_id</a></code> | <code>str</code> | The ID of the new data file. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.importJob">import_job</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#id GoogleMigrationCenterImportDataFile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#project GoogleMigrationCenterImportDataFile#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts">GoogleMigrationCenterImportDataFileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.format"></a>

- *Type:* str

Possible values: IMPORT_JOB_FORMAT_RVTOOLS_XLSX IMPORT_JOB_FORMAT_RVTOOLS_CSV IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV IMPORT_JOB_FORMAT_STRATOZONE_CSV IMPORT_JOB_FORMAT_DATABASE_ZIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#format GoogleMigrationCenterImportDataFile#format}

---

##### `import_data_file_id`<sup>Required</sup> <a name="import_data_file_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.importDataFileId"></a>

- *Type:* str

The ID of the new data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#import_data_file_id GoogleMigrationCenterImportDataFile#import_data_file_id}

---

##### `import_job`<sup>Required</sup> <a name="import_job" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.importJob"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#import_job GoogleMigrationCenterImportDataFile#import_job}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#location GoogleMigrationCenterImportDataFile#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#deletion_policy GoogleMigrationCenterImportDataFile#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.displayName"></a>

- *Type:* str

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#display_name GoogleMigrationCenterImportDataFile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#id GoogleMigrationCenterImportDataFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#project GoogleMigrationCenterImportDataFile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts">GoogleMigrationCenterImportDataFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#timeouts GoogleMigrationCenterImportDataFile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#create GoogleMigrationCenterImportDataFile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#delete GoogleMigrationCenterImportDataFile#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleMigrationCenterImportDataFile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_data_file

googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_data_file

googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_data_file

googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_data_file

googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleMigrationCenterImportDataFile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleMigrationCenterImportDataFile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleMigrationCenterImportDataFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterImportDataFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference">GoogleMigrationCenterImportDataFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.uploadFileInfo">upload_file_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList">GoogleMigrationCenterImportDataFileUploadFileInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.importDataFileIdInput">import_data_file_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.importJobInput">import_job_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts">GoogleMigrationCenterImportDataFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.importDataFileId">import_data_file_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.importJob">import_job</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.timeouts"></a>

```python
timeouts: GoogleMigrationCenterImportDataFileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference">GoogleMigrationCenterImportDataFileTimeoutsOutputReference</a>

---

##### `upload_file_info`<sup>Required</sup> <a name="upload_file_info" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.uploadFileInfo"></a>

```python
upload_file_info: GoogleMigrationCenterImportDataFileUploadFileInfoList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList">GoogleMigrationCenterImportDataFileUploadFileInfoList</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_data_file_id_input`<sup>Optional</sup> <a name="import_data_file_id_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.importDataFileIdInput"></a>

```python
import_data_file_id_input: str
```

- *Type:* str

---

##### `import_job_input`<sup>Optional</sup> <a name="import_job_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.importJobInput"></a>

```python
import_job_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleMigrationCenterImportDataFileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts">GoogleMigrationCenterImportDataFileTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_data_file_id`<sup>Required</sup> <a name="import_data_file_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.importDataFileId"></a>

```python
import_data_file_id: str
```

- *Type:* str

---

##### `import_job`<sup>Required</sup> <a name="import_job" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.importJob"></a>

```python
import_job: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterImportDataFileConfig <a name="GoogleMigrationCenterImportDataFileConfig" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_data_file

googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  format: str,
  import_data_file_id: str,
  import_job: str,
  location: str,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleMigrationCenterImportDataFileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.format">format</a></code> | <code>str</code> | Possible values: IMPORT_JOB_FORMAT_RVTOOLS_XLSX IMPORT_JOB_FORMAT_RVTOOLS_CSV IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV IMPORT_JOB_FORMAT_STRATOZONE_CSV IMPORT_JOB_FORMAT_DATABASE_ZIP. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.importDataFileId">import_data_file_id</a></code> | <code>str</code> | The ID of the new data file. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.importJob">import_job</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#id GoogleMigrationCenterImportDataFile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#project GoogleMigrationCenterImportDataFile#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts">GoogleMigrationCenterImportDataFileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.format"></a>

```python
format: str
```

- *Type:* str

Possible values: IMPORT_JOB_FORMAT_RVTOOLS_XLSX IMPORT_JOB_FORMAT_RVTOOLS_CSV IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV IMPORT_JOB_FORMAT_STRATOZONE_CSV IMPORT_JOB_FORMAT_DATABASE_ZIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#format GoogleMigrationCenterImportDataFile#format}

---

##### `import_data_file_id`<sup>Required</sup> <a name="import_data_file_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.importDataFileId"></a>

```python
import_data_file_id: str
```

- *Type:* str

The ID of the new data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#import_data_file_id GoogleMigrationCenterImportDataFile#import_data_file_id}

---

##### `import_job`<sup>Required</sup> <a name="import_job" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.importJob"></a>

```python
import_job: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#import_job GoogleMigrationCenterImportDataFile#import_job}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#location GoogleMigrationCenterImportDataFile#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#deletion_policy GoogleMigrationCenterImportDataFile#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#display_name GoogleMigrationCenterImportDataFile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#id GoogleMigrationCenterImportDataFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#project GoogleMigrationCenterImportDataFile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileConfig.property.timeouts"></a>

```python
timeouts: GoogleMigrationCenterImportDataFileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts">GoogleMigrationCenterImportDataFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#timeouts GoogleMigrationCenterImportDataFile#timeouts}

---

### GoogleMigrationCenterImportDataFileTimeouts <a name="GoogleMigrationCenterImportDataFileTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_data_file

googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#create GoogleMigrationCenterImportDataFile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#delete GoogleMigrationCenterImportDataFile#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#create GoogleMigrationCenterImportDataFile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_data_file#delete GoogleMigrationCenterImportDataFile#delete}.

---

### GoogleMigrationCenterImportDataFileUploadFileInfo <a name="GoogleMigrationCenterImportDataFileUploadFileInfo" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_data_file

googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfo()
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterImportDataFileTimeoutsOutputReference <a name="GoogleMigrationCenterImportDataFileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_data_file

googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts">GoogleMigrationCenterImportDataFileTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleMigrationCenterImportDataFileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileTimeouts">GoogleMigrationCenterImportDataFileTimeouts</a>

---


### GoogleMigrationCenterImportDataFileUploadFileInfoList <a name="GoogleMigrationCenterImportDataFileUploadFileInfoList" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_data_file

googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference <a name="GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_data_file

googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.property.headers">headers</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.property.signedUri">signed_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.property.uriExpirationTime">uri_expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfo">GoogleMigrationCenterImportDataFileUploadFileInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.property.headers"></a>

```python
headers: StringMap
```

- *Type:* cdktn.StringMap

---

##### `signed_uri`<sup>Required</sup> <a name="signed_uri" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.property.signedUri"></a>

```python
signed_uri: str
```

- *Type:* str

---

##### `uri_expiration_time`<sup>Required</sup> <a name="uri_expiration_time" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.property.uriExpirationTime"></a>

```python
uri_expiration_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportDataFileUploadFileInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportDataFile.GoogleMigrationCenterImportDataFileUploadFileInfo">GoogleMigrationCenterImportDataFileUploadFileInfo</a>

---



