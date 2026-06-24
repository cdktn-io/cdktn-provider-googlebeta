# `googleMigrationCenterImportJob` Submodule <a name="`googleMigrationCenterImportJob` Submodule" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterImportJob <a name="GoogleMigrationCenterImportJob" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job google_migration_center_import_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  asset_source: str,
  import_job_id: str,
  location: str,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleMigrationCenterImportJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.assetSource">asset_source</a></code> | <code>str</code> | Reference to a source. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.importJobId">import_job_id</a></code> | <code>str</code> | ID of the import job. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. Maximum length is 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#id GoogleMigrationCenterImportJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#project GoogleMigrationCenterImportJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `asset_source`<sup>Required</sup> <a name="asset_source" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.assetSource"></a>

- *Type:* str

Reference to a source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#asset_source GoogleMigrationCenterImportJob#asset_source}

---

##### `import_job_id`<sup>Required</sup> <a name="import_job_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.importJobId"></a>

- *Type:* str

ID of the import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#import_job_id GoogleMigrationCenterImportJob#import_job_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#location GoogleMigrationCenterImportJob#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#deletion_policy GoogleMigrationCenterImportJob#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.displayName"></a>

- *Type:* str

User-friendly display name. Maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#display_name GoogleMigrationCenterImportJob#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#id GoogleMigrationCenterImportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#labels GoogleMigrationCenterImportJob#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#project GoogleMigrationCenterImportJob#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#timeouts GoogleMigrationCenterImportJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#create GoogleMigrationCenterImportJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#delete GoogleMigrationCenterImportJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#update GoogleMigrationCenterImportJob#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleMigrationCenterImportJob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleMigrationCenterImportJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleMigrationCenterImportJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleMigrationCenterImportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterImportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.completeTime">complete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.executionReport">execution_report</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList">GoogleMigrationCenterImportJobExecutionReportList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference">GoogleMigrationCenterImportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.validationReport">validation_report</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList">GoogleMigrationCenterImportJobValidationReportList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.assetSourceInput">asset_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.importJobIdInput">import_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.assetSource">asset_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.importJobId">import_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `complete_time`<sup>Required</sup> <a name="complete_time" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.completeTime"></a>

```python
complete_time: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `execution_report`<sup>Required</sup> <a name="execution_report" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.executionReport"></a>

```python
execution_report: GoogleMigrationCenterImportJobExecutionReportList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList">GoogleMigrationCenterImportJobExecutionReportList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.timeouts"></a>

```python
timeouts: GoogleMigrationCenterImportJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference">GoogleMigrationCenterImportJobTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `validation_report`<sup>Required</sup> <a name="validation_report" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.validationReport"></a>

```python
validation_report: GoogleMigrationCenterImportJobValidationReportList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList">GoogleMigrationCenterImportJobValidationReportList</a>

---

##### `asset_source_input`<sup>Optional</sup> <a name="asset_source_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.assetSourceInput"></a>

```python
asset_source_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_job_id_input`<sup>Optional</sup> <a name="import_job_id_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.importJobIdInput"></a>

```python
import_job_id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleMigrationCenterImportJobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a>

---

##### `asset_source`<sup>Required</sup> <a name="asset_source" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.assetSource"></a>

```python
asset_source: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_job_id`<sup>Required</sup> <a name="import_job_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.importJobId"></a>

```python
import_job_id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterImportJobConfig <a name="GoogleMigrationCenterImportJobConfig" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  asset_source: str,
  import_job_id: str,
  location: str,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleMigrationCenterImportJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.assetSource">asset_source</a></code> | <code>str</code> | Reference to a source. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.importJobId">import_job_id</a></code> | <code>str</code> | ID of the import job. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. Maximum length is 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#id GoogleMigrationCenterImportJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#project GoogleMigrationCenterImportJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `asset_source`<sup>Required</sup> <a name="asset_source" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.assetSource"></a>

```python
asset_source: str
```

- *Type:* str

Reference to a source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#asset_source GoogleMigrationCenterImportJob#asset_source}

---

##### `import_job_id`<sup>Required</sup> <a name="import_job_id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.importJobId"></a>

```python
import_job_id: str
```

- *Type:* str

ID of the import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#import_job_id GoogleMigrationCenterImportJob#import_job_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#location GoogleMigrationCenterImportJob#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#deletion_policy GoogleMigrationCenterImportJob#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-friendly display name. Maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#display_name GoogleMigrationCenterImportJob#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#id GoogleMigrationCenterImportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#labels GoogleMigrationCenterImportJob#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#project GoogleMigrationCenterImportJob#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobConfig.property.timeouts"></a>

```python
timeouts: GoogleMigrationCenterImportJobTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#timeouts GoogleMigrationCenterImportJob#timeouts}

---

### GoogleMigrationCenterImportJobExecutionReport <a name="GoogleMigrationCenterImportJobExecutionReport" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReport.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReport()
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrors <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrors()
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations()
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors()
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors()
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError()
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError()
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError()
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors()
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError()
```


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors()
```


### GoogleMigrationCenterImportJobTimeouts <a name="GoogleMigrationCenterImportJobTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#create GoogleMigrationCenterImportJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#delete GoogleMigrationCenterImportJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#update GoogleMigrationCenterImportJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#create GoogleMigrationCenterImportJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#delete GoogleMigrationCenterImportJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_migration_center_import_job#update GoogleMigrationCenterImportJob#update}.

---

### GoogleMigrationCenterImportJobValidationReport <a name="GoogleMigrationCenterImportJobValidationReport" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReport.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReport()
```


### GoogleMigrationCenterImportJobValidationReportFileValidations <a name="GoogleMigrationCenterImportJobValidationReportFileValidations" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidations.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidations()
```


### GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors()
```


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors()
```


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError()
```


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError()
```


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError()
```


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors()
```


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError()
```


### GoogleMigrationCenterImportJobValidationReportJobErrors <a name="GoogleMigrationCenterImportJobValidationReportJobErrors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrors()
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.errorDetails">error_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_details`<sup>Required</sup> <a name="error_details" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.errorDetails"></a>

```python
error_details: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileErrors">file_errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.partialReport">partial_report</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.rowErrors">row_errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_errors`<sup>Required</sup> <a name="file_errors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileErrors"></a>

```python
file_errors: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList</a>

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `partial_report`<sup>Required</sup> <a name="partial_report" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.partialReport"></a>

```python
partial_report: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `row_errors`<sup>Required</sup> <a name="row_errors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.rowErrors"></a>

```python
row_errors: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber">row_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `row_number`<sup>Required</sup> <a name="row_number" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber"></a>

```python
row_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError">csv_error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv_error`<sup>Required</sup> <a name="csv_error" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError"></a>

```python
csv_error: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList</a>

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber">row_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `row_number`<sup>Required</sup> <a name="row_number" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber"></a>

```python
row_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.errorDetails">error_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_details`<sup>Required</sup> <a name="error_details" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.errorDetails"></a>

```python
error_details: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.archiveError">archive_error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.assetTitle">asset_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.csvError">csv_error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.rowNumber">row_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmName">vm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmUuid">vm_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.xlsxError">xlsx_error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_error`<sup>Required</sup> <a name="archive_error" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.archiveError"></a>

```python
archive_error: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList</a>

---

##### `asset_title`<sup>Required</sup> <a name="asset_title" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.assetTitle"></a>

```python
asset_title: str
```

- *Type:* str

---

##### `csv_error`<sup>Required</sup> <a name="csv_error" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.csvError"></a>

```python
csv_error: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList</a>

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.errors"></a>

```python
errors: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList</a>

---

##### `row_number`<sup>Required</sup> <a name="row_number" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.rowNumber"></a>

```python
row_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_name`<sup>Required</sup> <a name="vm_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmName"></a>

```python
vm_name: str
```

- *Type:* str

---

##### `vm_uuid`<sup>Required</sup> <a name="vm_uuid" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmUuid"></a>

```python
vm_uuid: str
```

- *Type:* str

---

##### `xlsx_error`<sup>Required</sup> <a name="xlsx_error" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.xlsxError"></a>

```python
xlsx_error: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber">row_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet">sheet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `row_number`<sup>Required</sup> <a name="row_number" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber"></a>

```python
row_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sheet`<sup>Required</sup> <a name="sheet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet"></a>

```python
sheet: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.errorDetails">error_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_details`<sup>Required</sup> <a name="error_details" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.errorDetails"></a>

```python
error_details: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors</a>

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fileValidations">file_validations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.jobErrors">job_errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_validations`<sup>Required</sup> <a name="file_validations" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fileValidations"></a>

```python
file_validations: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList</a>

---

##### `job_errors`<sup>Required</sup> <a name="job_errors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.jobErrors"></a>

```python
job_errors: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobExecutionReportExecutionErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrors">GoogleMigrationCenterImportJobExecutionReportExecutionErrors</a>

---


### GoogleMigrationCenterImportJobExecutionReportList <a name="GoogleMigrationCenterImportJobExecutionReportList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobExecutionReportOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobExecutionReportOutputReference <a name="GoogleMigrationCenterImportJobExecutionReportOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.executionErrors">execution_errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.framesReported">frames_reported</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.totalRowsCount">total_rows_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReport">GoogleMigrationCenterImportJobExecutionReport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_errors`<sup>Required</sup> <a name="execution_errors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.executionErrors"></a>

```python
execution_errors: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList">GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList</a>

---

##### `frames_reported`<sup>Required</sup> <a name="frames_reported" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.framesReported"></a>

```python
frames_reported: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_rows_count`<sup>Required</sup> <a name="total_rows_count" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.totalRowsCount"></a>

```python
total_rows_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReportOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobExecutionReport
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobExecutionReport">GoogleMigrationCenterImportJobExecutionReport</a>

---


### GoogleMigrationCenterImportJobTimeoutsOutputReference <a name="GoogleMigrationCenterImportJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleMigrationCenterImportJobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobTimeouts">GoogleMigrationCenterImportJobTimeouts</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.errorDetails">error_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors">GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_details`<sup>Required</sup> <a name="error_details" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.errorDetails"></a>

```python
error_details: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors">GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileErrors">file_errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList">GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.partialReport">partial_report</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.rowErrors">row_errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidations">GoogleMigrationCenterImportJobValidationReportFileValidations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_errors`<sup>Required</sup> <a name="file_errors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileErrors"></a>

```python
file_errors: GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList">GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList</a>

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `partial_report`<sup>Required</sup> <a name="partial_report" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.partialReport"></a>

```python
partial_report: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `row_errors`<sup>Required</sup> <a name="row_errors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.rowErrors"></a>

```python
row_errors: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobValidationReportFileValidations
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidations">GoogleMigrationCenterImportJobValidationReportFileValidations</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber">row_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `row_number`<sup>Required</sup> <a name="row_number" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber"></a>

```python
row_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError">csv_error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv_error`<sup>Required</sup> <a name="csv_error" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError"></a>

```python
csv_error: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList</a>

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber">row_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `row_number`<sup>Required</sup> <a name="row_number" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber"></a>

```python
row_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.errorDetails">error_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_details`<sup>Required</sup> <a name="error_details" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.errorDetails"></a>

```python
error_details: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.archiveError">archive_error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.assetTitle">asset_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.csvError">csv_error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.rowNumber">row_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmName">vm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmUuid">vm_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.xlsxError">xlsx_error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_error`<sup>Required</sup> <a name="archive_error" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.archiveError"></a>

```python
archive_error: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList</a>

---

##### `asset_title`<sup>Required</sup> <a name="asset_title" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.assetTitle"></a>

```python
asset_title: str
```

- *Type:* str

---

##### `csv_error`<sup>Required</sup> <a name="csv_error" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.csvError"></a>

```python
csv_error: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList</a>

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.errors"></a>

```python
errors: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList</a>

---

##### `row_number`<sup>Required</sup> <a name="row_number" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.rowNumber"></a>

```python
row_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_name`<sup>Required</sup> <a name="vm_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmName"></a>

```python
vm_name: str
```

- *Type:* str

---

##### `vm_uuid`<sup>Required</sup> <a name="vm_uuid" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmUuid"></a>

```python
vm_uuid: str
```

- *Type:* str

---

##### `xlsx_error`<sup>Required</sup> <a name="xlsx_error" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.xlsxError"></a>

```python
xlsx_error: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors</a>

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference <a name="GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber">row_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet">sheet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `row_number`<sup>Required</sup> <a name="row_number" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber"></a>

```python
row_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sheet`<sup>Required</sup> <a name="sheet" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet"></a>

```python
sheet: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError">GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError</a>

---


### GoogleMigrationCenterImportJobValidationReportJobErrorsList <a name="GoogleMigrationCenterImportJobValidationReportJobErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference <a name="GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.errorDetails">error_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrors">GoogleMigrationCenterImportJobValidationReportJobErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_details`<sup>Required</sup> <a name="error_details" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.errorDetails"></a>

```python
error_details: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobValidationReportJobErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrors">GoogleMigrationCenterImportJobValidationReportJobErrors</a>

---


### GoogleMigrationCenterImportJobValidationReportList <a name="GoogleMigrationCenterImportJobValidationReportList" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMigrationCenterImportJobValidationReportOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMigrationCenterImportJobValidationReportOutputReference <a name="GoogleMigrationCenterImportJobValidationReportOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_migration_center_import_job

googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.fileValidations">file_validations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList">GoogleMigrationCenterImportJobValidationReportFileValidationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.jobErrors">job_errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList">GoogleMigrationCenterImportJobValidationReportJobErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReport">GoogleMigrationCenterImportJobValidationReport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_validations`<sup>Required</sup> <a name="file_validations" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.fileValidations"></a>

```python
file_validations: GoogleMigrationCenterImportJobValidationReportFileValidationsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportFileValidationsList">GoogleMigrationCenterImportJobValidationReportFileValidationsList</a>

---

##### `job_errors`<sup>Required</sup> <a name="job_errors" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.jobErrors"></a>

```python
job_errors: GoogleMigrationCenterImportJobValidationReportJobErrorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportJobErrorsList">GoogleMigrationCenterImportJobValidationReportJobErrorsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReportOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMigrationCenterImportJobValidationReport
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterImportJob.GoogleMigrationCenterImportJobValidationReport">GoogleMigrationCenterImportJobValidationReport</a>

---



